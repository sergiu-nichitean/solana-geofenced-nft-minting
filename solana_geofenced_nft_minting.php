<?php
/**
 * Plugin Name:     Solana Geofenced NFT Minting
 * Description:     Adds a shortcode to display a mint button for your Solana NFT collection. Supports geo-fencing and time-locking.
 * Author:          Sergiu Nichitean
 * Author URI:      https://twitter.com/SeriousSergiu
 * Version:         0.1.0
 */

add_shortcode('solana_nft_minting', 'add_solana_nft_minting');
add_shortcode('solana_nft_minting_gateway', 'add_solana_nft_minting_gateway');
add_shortcode('solana_nft_minting_list', 'add_solana_nft_minting_list');
add_action('admin_menu', 'solana_nft_minting_menu');
wp_enqueue_style('solana_nft_minting_styles', plugin_dir_url( __FILE__ ) . 'css/styles.css', array(), 4, false);

function add_solana_nft_minting($atts = array(), $content = null, $tag = 'solana_nft_minting') {
  ob_start();
  $options = get_option( 'solana_nft_minting_options' );
  $json_options = array('id', 'network', 'rpc_host', 'latitudes', 'longitudes', 'start_times', 'end_times', 'titles', 'descriptions', 'images', 'distance');
  $parsed_options = array();
  foreach ($options as $key => $value) {
    if(in_array($key, $json_options)){
      $parsed_options[$key] = json_decode($value, true);
    }
  }
  $block_desktop_browsers = $options['block_desktop'] == 'on';
  $is_geo_locked = floatval($parsed_options['latitudes'][$atts['id']]) > 0;
  $is_time_locked = strlen(str_replace('"', '', $parsed_options['start_times'][$atts['id']])) > 0;
  ?>
  <div id="root" style="min-height: 170px">
    <div class="mint-widget-loader"></div>
  </div>
  <?php if($is_geo_locked || $is_time_locked) { ?>
    <div style="margin-top: 2em; text-align: center;">
      <?php if($is_geo_locked) { ?>
        <p>Distance to the<?php /*echo (count(explode(',', $parsed_options['latitudes'][$atts['id']])) > 0 ? ' closest' : '')*/ ?> NFT: <span id="my_distance_from_nft"></span>. Required maximum distance: <?php echo $parsed_options['distance'][$atts['id']] ?> m.</p>
      <?php } ?>
      <?php if($is_time_locked) { ?>
        <p>Hurry up! The marker will dissapear in:</p>
        <div id="mint_countdown_timer">00:00:00</div>
      <?php } ?>
    </div>
    <?php if($is_geo_locked) { ?>
      <div id="map" class="solana-nft-mint-map alignfull" style="margin-top: 2em !important"></div>
    <?php } ?>
    <!-- <pre id="debug_data" style="width: 100%;background: #fff;"></pre> -->
  <?php } ?>
  <script type="text/javascript">
      var solana_nft_minting_id = '<?php echo $parsed_options['id'][$atts['id']] ?>';
      var solana_nft_minting_network = '<?php echo $parsed_options['network'][$atts['id']] ?>';
      var solana_nft_minting_rpc_host = '<?php echo $parsed_options['rpc_host'][$atts['id']] ?>';
      var solana_nft_minting_url = '<?php echo $parsed_options['url'][$atts['id']] ?>';
      var solana_nft_minting_block_desktop = <?php echo $block_desktop_browsers ? 'true' : 'false'; ?>;
      var solana_nft_minting_geo_locked = <?php echo $is_geo_locked ? 'true' : 'false'; ?>;
      var solana_nft_minting_latitudes = [<?php echo $parsed_options['latitudes'][$atts['id']] ?>];
      var solana_nft_minting_longitudes = [<?php echo $parsed_options['longitudes'][$atts['id']] ?>];
      var solana_nft_minting_start_times = [<?php echo $parsed_options['start_times'][$atts['id']] ?>];
      var solana_nft_minting_end_times = [<?php echo $parsed_options['end_times'][$atts['id']] ?>];
      var solana_nft_minting_titles = [<?php echo $parsed_options['titles'][$atts['id']] ?>];
      var solana_nft_minting_descriptions = [<?php echo $parsed_options['descriptions'][$atts['id']] ?>];
      var solana_nft_minting_images = [<?php echo $parsed_options['images'][$atts['id']] ?>];
      var solana_nft_minting_distance = <?php echo $parsed_options['distance'][$atts['id']] ?>;

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
              visible: false,
              icon: {
                url: "/wp-content/plugins/solana-geofenced-nft-minting/images/nft_white_bg.png",
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

            updateTimedMarkersVisibility();
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
                      url: "/wp-content/plugins/solana-geofenced-nft-minting/images/person_icon.png",
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

                document.getElementById('my_distance_from_nft').innerHTML = distance.toFixed(2) + ' m';
                if (distance > solana_nft_minting_distance) {
                  document.getElementById('my_distance_from_nft').style.color = 'red';
                } else {
                  document.getElementById('my_distance_from_nft').style.color = 'green';
                }
              });
            }
          }

          function updateTimedMarkersVisibility() {
            for (let i = 0; i < fixedMarkers.length; i++) {
              if (solana_nft_minting_start_times[i] > 0) {
                const startTime = solana_nft_minting_start_times[i] - (3600 * 1000);
                const endTime = solana_nft_minting_end_times[i] - (3600 * 1000);
                const currentTime = Date.now();

                if (currentTime > startTime && currentTime < endTime) {
                  fixedMarkers[i].setVisible(true);
                } else {
                  fixedMarkers[i].setVisible(false);
                }
              } else {
                fixedMarkers[i].setVisible(true);
              }
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

            return Math.min(...distances);
          }

          // Call the updateCurrentPosition function every 0.5 seconds
          setInterval(updateCurrentPosition, 500);
          setInterval(updateTimedMarkersVisibility, 10000);
        }
      <?php } ?>

      <?php if ($is_time_locked) { ?>
        function initMintCountdown() {
          setInterval(function(){
            if (document.getElementById('mint_countdown_timer') != null) {
              document.getElementById('mint_countdown_timer').innerHTML = getTimeRemaining(solana_nft_minting_end_times[0]);
            }
          }, 1000);
        }

        function getTimeRemaining(endDate) {
          const currentTime = new Date();
          const totalSeconds = Math.floor((endDate - currentTime) / 1000);
          const hours = Math.floor(totalSeconds / 3600);
          const minutes = Math.floor((totalSeconds % 3600) / 60);
          const remainingSeconds = totalSeconds % 60;

          const formattedHours = String(hours).padStart(2, '0');
          const formattedMinutes = String(minutes).padStart(2, '0');
          const formattedSeconds = String(remainingSeconds).padStart(2, '0');

          return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        }

        initMintCountdown();
      <?php } ?>
  </script>
  <?php if($is_geo_locked) { ?>
    <script src="https://maps.googleapis.com/maps/api/js?key=<?php echo $options['maps_api_key'] ?>&callback=initMap" async defer></script>
  <?php } ?>
  <?php check_user_agent_js(); ?>
  <script src="<?php echo plugin_dir_url(__FILE__) . 'js/bundle.js?v=1' ?>" type="text/javascript"></script>
  <script src="<?php echo plugin_dir_url(__FILE__) . 'js/vendors_main.chunk.js?v=1' ?>" type="text/javascript"></script>
  <script src="<?php echo plugin_dir_url(__FILE__) . 'js/main.chunk.js?v=12' ?>" type="text/javascript"></script>
<?php
  return ob_get_clean();
}

function add_solana_nft_minting_gateway($atts = array(), $content = null, $tag = 'solana_nft_minting_gateway') {
  ob_start();
  $options = get_option( 'solana_nft_minting_options' );
  $json_options = array('id', 'network', 'rpc_host', 'url', 'latitudes', 'longitudes', 'start_times', 'end_times', 'titles', 'descriptions', 'images', 'price', 'distance');
  $parsed_options = array();
  foreach ($options as $key => $value) {
    if(in_array($key, $json_options)){
      $parsed_options[$key] = json_decode($value, true);
    }
  }
  ?>
  <a name="mint_map"></a>
  <div id="solana_nft_mint_map" class="solana-nft-mint-map alignfull"></div>
  <script type="text/javascript">
    function initMap() {
      <?php
        $first_visible_marker = array('lat' => $parsed_options['latitudes']['1'], 'lng' => $parsed_options['longitudes']['1']);
        foreach($parsed_options['start_times'] as $key => $value) {
          $start_time = (intval($parsed_options['start_times'][$key]) / 1000);
          $end_time = (intval($parsed_options['end_times'][$key]) / 1000);
          if(floatval($parsed_options['latitudes'][$key]) > 0 && ($start_time == 0 || ($start_time > 0 && time() > $start_time && time() < $end_time))) {
            $first_visible_marker = array('lat' => $parsed_options['latitudes'][$key], 'lng' => $parsed_options['longitudes'][$key]);
            break;
          }
        }
      ?>

      // Create the map
      var map = new google.maps.Map(document.getElementById("solana_nft_mint_map"), {
        center: { lat: <?php echo $first_visible_marker['lat'] ?>, lng: <?php echo $first_visible_marker['lng'] ?> },
        zoom: 19,
        styles: [{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]}]
      });

      // Create the fixed markers
      <?php foreach($parsed_options['latitudes'] as $key => $value) {
        if (floatval($value) == 0) {
          continue;
        }

        $start_time = (intval($parsed_options['start_times'][$key]) / 1000);
        $end_time = (intval($parsed_options['end_times'][$key]) / 1000);

        if ($start_time > 0 && (time() < $start_time || time() > $end_time)) {
          continue;
        } ?>

        var mintMarker<?php echo $key ?> = new google.maps.Marker({
          position: { lat: <?php echo $parsed_options['latitudes'][$key] ?>, lng: <?php echo $parsed_options['longitudes'][$key] ?> },
          map: map,
          icon: {
            url: "/wp-content/plugins/geolocked-nft-minting-evm/images/nft_white_bg.png",
            scaledSize: new google.maps.Size(50, 58), // scaled size
            origin: new google.maps.Point(0,0), // origin
            anchor: new google.maps.Point(25, 29) // anchor
          }
        });

        // Create an InfoWindow for each marker
        var fixedInfoWindow<?php echo $key ?> = new google.maps.InfoWindow({
          content: '<p><strong>' + <?php echo $parsed_options['titles'][$key] ?> + '</p></strong>' +
                   '<p>' + <?php echo $parsed_options['descriptions'][$key] ?> + '</p>' +
                   '<p><a href="/<?php echo $parsed_options['url'][$key] ?>/" class="wp-block-button__link has-text-align-center wp-element-button">Go to mint page</a></p>' +
                   (<?php echo $parsed_options['images'][$key] ?>.length > 0 ? '<p><img src="' + <?php echo $parsed_options['images'][$key] ?> + '" style="width: 220px;" /></p>' : ''),
          width: 250,
          maxWidth: 250
        });

        // Add a click event listener to open the InfoWindow
        mintMarker<?php echo $key ?>.addListener("click", function () {
          <?php foreach($parsed_options['latitudes'] as $subkey => $subvalue) {
            $start_time = (intval($parsed_options['start_times'][$subkey]) / 1000);
            $end_time = (intval($parsed_options['end_times'][$subkey]) / 1000);

            if ($start_time > 0) {
              if (time() < $start_time || time() > $end_time) {
                continue;
              }
            } ?>
            fixedInfoWindow<?php echo $subkey ?>.close();
          <?php } ?>
          fixedInfoWindow<?php echo $key ?>.open(map, mintMarker<?php echo $key ?>);
        });
      <?php } ?>

      var currentPositionMarker = null;
      var currentInfoWindow = null;

      updateCurrentPosition();

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
                  url: "/wp-content/plugins/geolocked-nft-minting-evm/images/person_icon.png",
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
          });
        }
      }

      setInterval(updateCurrentPosition, 500);
    }
  </script>
  <script src="https://maps.googleapis.com/maps/api/js?key=<?php echo $options['maps_api_key'] ?>&callback=initMap" async defer></script>
  <?php check_user_agent_js(); ?>
<?php

  return ob_get_clean();
}

function add_solana_nft_minting_list() {
  ob_start();
  $options = get_option( 'solana_nft_minting_options' );
  $json_options = array('id', 'newtwork', 'rpc_host', 'url', 'latitudes', 'longitudes', 'start_times', 'end_times', 'titles', 'descriptions', 'images', 'price', 'distance');
  $parsed_options = array();
  foreach ($options as $key => $value) {
    if(in_array($key, $json_options)){
      $parsed_options[$key] = json_decode($value, true);
    }
  }

 foreach($parsed_options['latitudes'] as $key => $value) {
  $start_time = (intval(str_replace('"', '', $parsed_options['start_times'][$key])) / 1000);
  $end_time = (intval(str_replace('"', '', $parsed_options['end_times'][$key])) / 1000);
?>

<h4><?php echo str_replace('"', '', $parsed_options['titles'][$key]) ?></h4>
<ul>
  <?php if($start_time > 0) { ?>
    <li>Start time: <?php echo gmdate("Y-m-d H:i:s", $start_time) ?></li>
    <li>End time: <?php echo gmdate("Y-m-d H:i:s", $end_time) ?></li>
  <?php } ?>
  <li>
    <?php if ($start_time == 0 || ($start_time < time() && $end_time > time())) { ?>
    <a href="/<?php echo $parsed_options['url'][$key] ?>/">Go to mint page</a>
    <?php } else if ($start_time > time()) { ?>
      Drop hasn't started yet.
    <?php } else { ?>
      Drop has finished.
    <?php } ?>
  </li>
</ul>

<?php
  }

  return ob_get_clean();
}

function solana_nft_minting_menu() {
  add_menu_page(
    'Geo-fenced NFT Minting',
    'Geo-fenced NFT Minting',
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
    add_settings_field( 'solana_nft_minting_url', 'Page URL', 'solana_nft_minting_url', 'solana_nft_minting_plugin', 'solana_nft_minting_settings' );
    add_settings_field( 'solana_nft_minting_maps_api_key', 'Google Maps API key', 'solana_nft_minting_maps_api_key', 'solana_nft_minting_plugin', 'solana_nft_minting_settings' );
    add_settings_field( 'solana_nft_minting_block_desktop', 'Block desktop browsers?', 'solana_nft_minting_block_desktop', 'solana_nft_minting_plugin', 'solana_nft_minting_settings' );
    add_settings_field( 'solana_nft_minting_distance', 'Required distance (m)', 'solana_nft_minting_distance', 'solana_nft_minting_plugin', 'solana_nft_minting_settings' );
    add_settings_field( 'solana_nft_minting_latitudes', 'Latitudes', 'solana_nft_minting_latitudes', 'solana_nft_minting_plugin', 'solana_nft_minting_settings' );
    add_settings_field( 'solana_nft_minting_longitudes', 'Longitudes', 'solana_nft_minting_longitudes', 'solana_nft_minting_plugin', 'solana_nft_minting_settings' );
    add_settings_field( 'solana_nft_minting_start_times', 'Start times', 'solana_nft_minting_start_times', 'solana_nft_minting_plugin', 'solana_nft_minting_settings' );
    add_settings_field( 'solana_nft_minting_end_times', 'End times', 'solana_nft_minting_end_times', 'solana_nft_minting_plugin', 'solana_nft_minting_settings' );
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

function solana_nft_minting_url() {
    $options = get_option( 'solana_nft_minting_options' );
    echo "<textarea id='solana_nft_minting_url' name='solana_nft_minting_options[url]' style='width: 100%; height: 150px;'>" . esc_attr( $options['url'] ) . "</textarea>";
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

function solana_nft_minting_start_times() {
    $options = get_option( 'solana_nft_minting_options' );
    echo "<textarea id='solana_nft_minting_start_times' name='solana_nft_minting_options[start_times]' style='width: 100%; height: 150px;'>" . esc_attr( $options['start_times'] ) . "</textarea>";
}

function solana_nft_minting_end_times() {
    $options = get_option( 'solana_nft_minting_options' );
    echo "<textarea id='solana_nft_minting_end_times' name='solana_nft_minting_options[end_times]' style='width: 100%; height: 150px;'>" . esc_attr( $options['end_times'] ) . "</textarea>";
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


function check_user_agent_js() { ?>
  <script type="text/javascript">
    if(navigator.userAgent.indexOf("iPhone") !== -1 && navigator.userAgent.indexOf("Solflare") == -1) {
      alert('You are using an iOS device. On iOS, you can only mint geo-fenced NFTs using the Solflare wallet internal browser.\n\nYou will be automatically redirected to the Solflare App Store page after closing this message.\n\nPlease open solana.radius.art in the Solflare browser.');
      window.location.href = 'https://apps.apple.com/us/app/solflare-solana-wallet/id1580902717';
    }

    var geolocationSupported = false;

    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        geolocationSupported = true;
      });
    }

    setTimeout(function(){
      if(navigator.userAgent.indexOf("Android") !== -1 && !geolocationSupported) {
        alert('You are using an Android device and a browser without Geolocation services.\n\nOn Android, it\'s recommended to use Google Chrome and connect you favorite wallet, but then return to Chrome to do the mint.');
      }
    }, 500);

  </script>
<?php } ?>
