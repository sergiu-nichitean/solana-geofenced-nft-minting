<?php
/**
 * Plugin Name:     Solana Geofenced NFT Minting
 * Description:     Adds a shortcode to display a mint button for your Solana NFT collection. Supports geo-fencing and time-locking.
 * Author:          Sergiu Nichitean
 * Author URI:      https://twitter.com/SeriousSergiu
 * Version:         0.1.0
 */

add_shortcode('solana_nft_minting', 'add_solana_nft_minting');
add_action('admin_menu', 'solana_nft_minting_menu');

function add_solana_nft_minting($atts = array(), $content = null, $tag = 'solana_nft_minting') {
  ob_start();
  $options = get_option( 'solana_nft_minting_options' );
  $json_options = array('id', 'network', 'rpc_host', 'latitudes', 'longitudes', 'titles', 'descriptions', 'images', 'distance');
  $parsed_options = array();
  foreach ($options as $key => $value) {
    if(in_array($key, $json_options)){
      $parsed_options[$key] = json_decode($value, true);
    }
  }
  $block_desktop_browsers = $options['block_desktop'] == 'on';
  $is_geo_locked = floatval($parsed_options['latitudes'][$atts['id']]) > 0;
  ?>
  <div id="root">Loading...</div>
  <?php if($is_geo_locked) { ?>
    <p style="margin-top: 2em; text-align: center;">Distance to the NFT: <span id="my_distance_from_nft"></span>. Required maximum distance: <?php echo $parsed_options['distance'][$atts['id']] ?> ft.</p>
    <div id="map" style="height: 500px; margin-top: 2em"></div>
  <?php } ?>
  <script type="text/javascript">
      var solana_nft_minting_id = '<?php echo $parsed_options['id'][$atts['id']] ?>';
      var solana_nft_minting_network = '<?php echo $parsed_options['network'][$atts['id']] ?>';
      var solana_nft_minting_rpc_host = '<?php echo $parsed_options['rpc_host'][$atts['id']] ?>';
      var solana_nft_minting_block_desktop = <?php echo $block_desktop_browsers ? 'true' : 'false'; ?>;
      var solana_nft_minting_geo_locked = <?php echo $is_geo_locked ? 'true' : 'false'; ?>;
      var solana_nft_minting_latitudes = [<?php echo $parsed_options['latitudes'][$atts['id']] ?>];
      var solana_nft_minting_longitudes = [<?php echo $parsed_options['longitudes'][$atts['id']] ?>];
      var solana_nft_minting_titles = [<?php echo $parsed_options['titles'][$atts['id']] ?>];
      var solana_nft_minting_descriptions = [<?php echo $parsed_options['descriptions'][$atts['id']] ?>];
      var solana_nft_minting_images = [<?php echo $parsed_options['images'][$atts['id']] ?>];
      var solana_nft_minting_distance = <?php echo $parsed_options['distance'][$atts['id']] * 0.3048 //convert feet to meters ?>;

      <?php if($is_geo_locked) { ?>
        var fixedMarkerLatLngs = [];
        var fixedInfoWindows = [];
        var fixedMarkers = [];

        // Function to initialize the map
        function initMap() {
          // Coordinates for the fixed markers

          for (let i = 0; i < solana_nft_minting_latitudes.length; i++) {
            fixedMarkerLatLngs.push({ lat: solana_nft_minting_latitudes[i], lng: solana_nft_minting_longitudes[i] });
          }

          // Create the map
          var map = new google.maps.Map(document.getElementById("map"), {
            center: fixedMarkerLatLngs[0],
            zoom: 19,
            styles: [{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]}]
          });

          // Create the fixed markers
          for (let i = 0; i < fixedMarkerLatLngs.length; i++) {
            fixedMarkers.push(new google.maps.Marker({
              position: fixedMarkerLatLngs[i],
              map: map,
              icon: {
                url: "/wp-content/plugins/geolocked-nft-minting-solana/images/nft_white_bg.png",
                scaledSize: new google.maps.Size(50, 58), // scaled size
                origin: new google.maps.Point(0,0), // origin
                anchor: new google.maps.Point(25, 29) // anchor
              }
            }));

            // Create an InfoWindow for each marker
            fixedInfoWindows.push(new google.maps.InfoWindow({
              content: '<p><strong>' + solana_nft_minting_titles[i] + '</p></strong>' +
                       '<p>' + solana_nft_minting_descriptions[i] + '</p>' +
                       (solana_nft_minting_images[i].length > 0 ? '<p><img src="' + solana_nft_minting_images[i] + '" style="width: 170px;" /></p>' : '') +
                       '<p><a href="https://maps.google.com/?q=@' + solana_nft_minting_latitudes[i] + ',' + solana_nft_minting_longitudes[i] + '" target="_blank" style="color: #1a73e8; text-decoration: underline">Open Navigation</a></p>',
              width: 250,
              maxWidth: 250
            }));

            // Add a click event listener to open the InfoWindow
            fixedMarkers[i].addListener("click", function () {
              fixedInfoWindows[i].open(map, fixedMarkers[i]);
            });
          }

          var currentPositionMarker = null;
          var currentInfoWindow = null;

          updateCurrentPosition();

          // Function to update the current position marker
          function updateCurrentPosition() {
            // Check if geolocation is supported by the browser
            if (navigator.geolocation) {
              // Get the current position
              navigator.geolocation.getCurrentPosition(function (position) {
                // Coordinates for the current position marker
                var currentPositionLatLng = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                };

                // Check if the current position marker already exists
                if (currentPositionMarker !== null) {
                  // Update the position of the existing marker
                  currentPositionMarker.setPosition(currentPositionLatLng);
                } else {
                  // Create the current position marker
                  currentPositionMarker = new google.maps.Marker({
                    position: currentPositionLatLng,
                    map: map,
                    icon: {
                      url: "/wp-content/plugins/geolocked-nft-minting-solana/images/person_icon.png",
                      scaledSize: new google.maps.Size(25, 32), // scaled size
                      origin: new google.maps.Point(0,0), // origin
                      anchor: new google.maps.Point(12, 16) // anchor
                    }
                  });
                }

                if (currentInfoWindow == null) {
                  currentInfoWindow = new google.maps.InfoWindow({
                    content: "You are here",
                  });

                  currentPositionMarker.addListener("click", function () {
                    currentInfoWindow.open(map, currentPositionMarker);
                  });
                }

                var distance = calculateDistance(
                  currentPositionLatLng.lat,
                  currentPositionLatLng.lng,
                  solana_nft_minting_latitudes,
                  solana_nft_minting_longitudes
                );

                document.getElementById('my_distance_from_nft').innerHTML = distance.toFixed(2) + ' ft';
                if ((distance * 0.3048) > solana_nft_minting_distance) {
                  document.getElementById('my_distance_from_nft').style.color = 'red';
                } else {
                  document.getElementById('my_distance_from_nft').style.color = 'green';
                }
              });
            }
          }

          function calculateDistance(currentLat, currentLng, latitudes, longitudes) {
            const earthRadius = 6371e3; // Earth's radius in meters
            const degToRad = Math.PI / 180; // Conversion factor from degrees to radians
            const distances = [];

            for(let i = 0; i < latitudes.length; i++) {
              // Convert latitude and longitude to radians
              const phi1 = currentLat * degToRad;
              const phi2 = latitudes[i] * degToRad;
              const deltaPhi = (latitudes[i] - currentLat) * degToRad;
              const deltaLambda = (longitudes[i] - currentLng) * degToRad;

              // Haversine formula
              const a =
                Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
                Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
              const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
              distances.push(earthRadius * c);
            }

            return Math.min(...distances) / 0.3048;
          }

          // Call the updateCurrentPosition function every 0.5 seconds
          setInterval(updateCurrentPosition, 500);
        }
      <?php } ?>
  </script>
  <?php if($is_geo_locked) { ?>
    <script src="https://maps.googleapis.com/maps/api/js?key=<?php echo $options['maps_api_key'] ?>&callback=initMap" async defer></script>
  <?php } ?>

  <script src="<?php echo plugin_dir_url(__FILE__) . 'js/bundle.js?v=1' ?>" type="text/javascript"></script>
  <script src="<?php echo plugin_dir_url(__FILE__) . 'js/vendors_main.chunk.js?v=1' ?>" type="text/javascript"></script>
  <script src="<?php echo plugin_dir_url(__FILE__) . 'js/main.chunk.js?v=4' ?>" type="text/javascript"></script>
<?php
  return ob_get_clean();
}

function solana_nft_minting_menu() {
  add_menu_page(
    'NFT Minting',
    'NFT Minting',
    'administrator',
    'solana-nft-minting',
    'solana_nft_minting_admin',
    'dashicons-store'
  );
}

function solana_nft_minting_admin() {
    ?>
    <div class="wrap">
      <h1>NFT Minting</h1>
      <form action="options.php" method="post">
          <?php
          settings_fields( 'solana_nft_minting_options' );
          do_settings_sections( 'solana_nft_minting_plugin' ); ?>
          <input name="submit" class="button button-primary" type="submit" value="<?php esc_attr_e( 'Save' ); ?>" />
      </form>
      <p>Use the shortcode [solana_nft_minting] to display the NFT minting button on any page.</p>
    </div>
    <?php
}

function solana_nft_minting_register_settings() {
    register_setting( 'solana_nft_minting_options', 'solana_nft_minting_options', 'solana_nft_minting_options_validate' );
    add_settings_section( 'solana_nft_minting_settings', 'Solana NFT Minting Settings', 'solana_nft_minting_plugin_section_text', 'solana_nft_minting_plugin' );

    add_settings_field( 'solana_nft_minting_id', 'Candy Machine ID', 'solana_nft_minting_id', 'solana_nft_minting_plugin', 'solana_nft_minting_settings' );
    add_settings_field( 'solana_nft_minting_network', 'Solana network', 'solana_nft_minting_network', 'solana_nft_minting_plugin', 'solana_nft_minting_settings' );
    add_settings_field( 'solana_nft_minting_rpc_host', 'RPC host', 'solana_nft_minting_rpc_host', 'solana_nft_minting_plugin', 'solana_nft_minting_settings' );
    add_settings_field( 'solana_nft_minting_maps_api_key', 'Google Maps API key', 'solana_nft_minting_maps_api_key', 'solana_nft_minting_plugin', 'solana_nft_minting_settings' );
    add_settings_field( 'solana_nft_minting_block_desktop', 'Block desktop browsers?', 'solana_nft_minting_block_desktop', 'solana_nft_minting_plugin', 'solana_nft_minting_settings' );
    add_settings_field( 'solana_nft_minting_distance', 'Required distance (ft)', 'solana_nft_minting_distance', 'solana_nft_minting_plugin', 'solana_nft_minting_settings' );
    add_settings_field( 'solana_nft_minting_latitudes', 'Latitudes', 'solana_nft_minting_latitudes', 'solana_nft_minting_plugin', 'solana_nft_minting_settings' );
    add_settings_field( 'solana_nft_minting_longitudes', 'Longitudes', 'solana_nft_minting_longitudes', 'solana_nft_minting_plugin', 'solana_nft_minting_settings' );
    add_settings_field( 'solana_nft_minting_titles', 'Titles', 'solana_nft_minting_titles', 'solana_nft_minting_plugin', 'solana_nft_minting_settings' );
    add_settings_field( 'solana_nft_minting_descriptions', 'Descriptions', 'solana_nft_minting_descriptions', 'solana_nft_minting_plugin', 'solana_nft_minting_settings' );
    add_settings_field( 'solana_nft_minting_images', 'Images', 'solana_nft_minting_images', 'solana_nft_minting_plugin', 'solana_nft_minting_settings' );
}
add_action( 'admin_init', 'solana_nft_minting_register_settings' );

function solana_nft_minting_options_validate( $input ) {
    return $input;
}

function solana_nft_minting_plugin_section_text() {
    echo '<p>Here you can set the options for your Solana NFT minting section.</p>';
}

function solana_nft_minting_id() {
    $options = get_option( 'solana_nft_minting_options' );
    echo "<textarea id='solana_nft_minting_id' name='solana_nft_minting_options[id]' style='width: 100%; height: 150px;'>" . esc_attr( $options['id'] ) . "</textarea>";
}

function solana_nft_minting_network() {
    $options = get_option( 'solana_nft_minting_options' );
    echo "<textarea id='solana_nft_minting_network' name='solana_nft_minting_options[network]' style='width: 100%; height: 150px;'>" . esc_attr( $options['network'] ) . "</textarea>";
}

function solana_nft_minting_rpc_host() {
    $options = get_option( 'solana_nft_minting_options' );
    echo "<textarea id='solana_nft_minting_rpc_host' name='solana_nft_minting_options[rpc_host]' style='width: 100%; height: 150px;'>" . esc_attr( $options['rpc_host'] ) . "</textarea>";
}

function solana_nft_minting_maps_api_key() {
    $options = get_option( 'solana_nft_minting_options' );
    echo "<input id='solana_nft_minting_maps_api_key' name='solana_nft_minting_options[maps_api_key]' style='width: 100%;' value='" . esc_attr( $options['maps_api_key'] ) . "' />";
}

function solana_nft_minting_block_desktop() {
    $options = get_option( 'solana_nft_minting_options' );
    echo "<input id='solana_nft_minting_block_desktop' name='solana_nft_minting_options[block_desktop]' type='checkbox' " . ($options['block_desktop'] == 'on' ? 'checked="true"' : '') . " />";
}

function solana_nft_minting_distance() {
    $options = get_option( 'solana_nft_minting_options' );
    echo "<textarea id='solana_nft_minting_distance' name='solana_nft_minting_options[distance]' style='width: 100%; height: 150px;'>" . esc_attr( $options['distance'] ) . "</textarea>";
}

function solana_nft_minting_latitudes() {
    $options = get_option( 'solana_nft_minting_options' );
    echo "<textarea id='solana_nft_minting_latitudes' name='solana_nft_minting_options[latitudes]' style='width: 100%; height: 150px;'>" . esc_attr( $options['latitudes'] ) . "</textarea>";
}

function solana_nft_minting_longitudes() {
    $options = get_option( 'solana_nft_minting_options' );
    echo "<textarea id='solana_nft_minting_longitudes' name='solana_nft_minting_options[longitudes]' style='width: 100%; height: 150px;'>" . esc_attr( $options['longitudes'] ) . "</textarea>";
}

function solana_nft_minting_titles() {
    $options = get_option( 'solana_nft_minting_options' );
    echo "<textarea id='solana_nft_minting_titles' name='solana_nft_minting_options[titles]' style='width: 100%; height: 150px;'>" . esc_attr( $options['titles'] ) . "</textarea>";
}

function solana_nft_minting_descriptions() {
    $options = get_option( 'solana_nft_minting_options' );
    echo "<textarea id='solana_nft_minting_descriptions' name='solana_nft_minting_options[descriptions]' style='width: 100%; height: 150px;'>" . esc_attr( $options['descriptions'] ) . "</textarea>";
}

function solana_nft_minting_images() {
    $options = get_option( 'solana_nft_minting_options' );
    echo "<textarea id='solana_nft_minting_images' name='solana_nft_minting_options[images]' style='width: 100%; height: 150px;'>" . esc_attr( $options['images'] ) . "</textarea>";
}
