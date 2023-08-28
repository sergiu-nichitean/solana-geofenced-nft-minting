(this["webpackJsonpcandy-machine-ui"] = this["webpackJsonpcandy-machine-ui"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".App {\n  text-align: center;\n}\n", "",{"version":3,"sources":["webpack://src/App.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB","sourcesContent":[".App {\n  text-align: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;EACE;;cAEY;EACZ,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE;aACW;AACb","sourcesContent":["body {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @project-serum/anchor */ "./node_modules/@project-serum/anchor/dist/esm/index.js");
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home */ "./src/Home.tsx");
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./connection */ "./src/connection.tsx");
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/web3.js */ "./node_modules/@solana/web3.js/lib/index.browser.esm.js");
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @solana/wallet-adapter-react */ "./node_modules/@solana/wallet-adapter-react/lib/esm/index.js");
/* harmony import */ var _solana_wallet_adapter_material_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @solana/wallet-adapter-material-ui */ "./node_modules/@solana/wallet-adapter-material-ui/lib/esm/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/index.js");
/* harmony import */ var _solana_wallet_adapter_phantom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @solana/wallet-adapter-phantom */ "./node_modules/@solana/wallet-adapter-phantom/lib/esm/index.js");
/* harmony import */ var _solana_wallet_adapter_slope__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @solana/wallet-adapter-slope */ "./node_modules/@solana/wallet-adapter-slope/lib/esm/index.js");
/* harmony import */ var _solana_wallet_adapter_solflare__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @solana/wallet-adapter-solflare */ "./node_modules/@solana/wallet-adapter-solflare/lib/esm/index.js");
/* harmony import */ var _solana_wallet_adapter_sollet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @solana/wallet-adapter-sollet */ "./node_modules/@solana/wallet-adapter-sollet/lib/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/sergiu/Projects/candy-machine-ui-main/src/App.tsx",
    _process$env$REACT_AP,
    _process$env$REACT_AP2,
    _s = __webpack_require__.$Refresh$.signature();















const theme = Object(_mui_material__WEBPACK_IMPORTED_MODULE_8__["createTheme"])({
  palette: {
    mode: "dark"
  }
});

const getCandyMachineId = () => {
  try {
    return new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_2__["web3"].PublicKey(solana_nft_minting_id);
  } catch (e) {
    console.log("Failed to construct CandyMachineId", e);
    return undefined;
  }
};

let error = undefined;

if (solana_nft_minting_network === undefined) {
  error = "Your REACT_APP_SOLANA_NETWORK value in the .env file doesn't look right! The options are devnet and mainnet-beta!";
} else if (solana_nft_minting_rpc_host === undefined) {
  error = "Your REACT_APP_SOLANA_RPC_HOST value in the .env file doesn't look right! Make sure you enter it in as a plain-text url (i.e., https://metaplex.devnet.rpcpool.com/)";
}

const candyMachineId = getCandyMachineId();
const network = (_process$env$REACT_AP = solana_nft_minting_network) !== null && _process$env$REACT_AP !== void 0 ? _process$env$REACT_AP : "devnet";
const rpcHost = (_process$env$REACT_AP2 = solana_nft_minting_rpc_host) !== null && _process$env$REACT_AP2 !== void 0 ? _process$env$REACT_AP2 : _project_serum_anchor__WEBPACK_IMPORTED_MODULE_2__["web3"].clusterApiUrl("devnet");
const connection = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_2__["web3"].Connection(rpcHost);
navigator.geolocation.getCurrentPosition(function (position) {
  console.log("Latitude is :", position.coords.latitude);
  console.log("Longitude is :", position.coords.longitude);
});

const App = () => {
  _s();

  const endpoint = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => Object(_solana_web3_js__WEBPACK_IMPORTED_MODULE_5__["clusterApiUrl"])(network), []);
  const wallets = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => [new _solana_wallet_adapter_phantom__WEBPACK_IMPORTED_MODULE_9__["PhantomWalletAdapter"](), new _solana_wallet_adapter_solflare__WEBPACK_IMPORTED_MODULE_11__["SolflareWalletAdapter"]({
    network: network
  }), new _solana_wallet_adapter_slope__WEBPACK_IMPORTED_MODULE_10__["SlopeWalletAdapter"](), new _solana_wallet_adapter_sollet__WEBPACK_IMPORTED_MODULE_12__["SolletWalletAdapter"]({
    network: network
  }), new _solana_wallet_adapter_sollet__WEBPACK_IMPORTED_MODULE_12__["SolletExtensionWalletAdapter"]({
    network: network
  })], []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_8__["ThemeProvider"], {
    theme: theme,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__["ConnectionProvider"], {
      endpoint: endpoint,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__["WalletProvider"], {
        wallets: wallets,
        autoConnect: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_solana_wallet_adapter_material_ui__WEBPACK_IMPORTED_MODULE_7__["WalletDialogProvider"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"])(_Home__WEBPACK_IMPORTED_MODULE_3__["default"], {
            candyMachineId: candyMachineId,
            connection: connection,
            txTimeout: _connection__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_TIMEOUT"],
            rpcHost: rpcHost,
            network: network,
            error: error
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 5
  }, undefined);
};

_s(App, "RNaTq20PjYTGasfEtgZ8qKkPMD0=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/Home.tsx":
/*!**********************!*\
  !*** ./src/Home.tsx ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @project-serum/anchor */ "./node_modules/@project-serum/anchor/dist/esm/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/index.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/@mui/material/esm/Paper/index.js");
/* harmony import */ var _mui_lab_Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/lab/Alert */ "./node_modules/@mui/lab/Alert/index.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/esm/Grid/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/esm/Typography/index.js");
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @solana/web3.js */ "./node_modules/@solana/web3.js/lib/index.browser.esm.js");
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @solana/wallet-adapter-react */ "./node_modules/@solana/wallet-adapter-react/lib/esm/index.js");
/* harmony import */ var _solana_wallet_adapter_material_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @solana/wallet-adapter-material-ui */ "./node_modules/@solana/wallet-adapter-material-ui/lib/esm/index.js");
/* harmony import */ var _candy_machine__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./candy-machine */ "./src/candy-machine.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var _MintCountdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MintCountdown */ "./src/MintCountdown.tsx");
/* harmony import */ var _MintButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MintButton */ "./src/MintButton.tsx");
/* harmony import */ var _civic_solana_gateway_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @civic/solana-gateway-react */ "./node_modules/@civic/solana-gateway-react/dist/esm/index.js");
/* harmony import */ var _civic_solana_gateway_react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_civic_solana_gateway_react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _solana_mobile_wallet_adapter_mobile__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @solana-mobile/wallet-adapter-mobile */ "./node_modules/@solana-mobile/wallet-adapter-mobile/lib/esm/index.browser.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/sergiu/Projects/candy-machine-ui-main/src/Home.tsx",
    _s = __webpack_require__.$Refresh$.signature();




















const ConnectButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_solana_wallet_adapter_material_ui__WEBPACK_IMPORTED_MODULE_10__["WalletDialogButton"])`
  width: 100%;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 5px;
  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
_c = ConnectButton;
const MintContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div``; // add your owns styles here

_c2 = MintContainer;

const Home = props => {
  _s();

  var _candyMachine$state, _candyMachine$state2, _candyMachine$state2$;

  const [isUserMinting, setIsUserMinting] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [candyMachine, setCandyMachine] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [alertState, setAlertState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    open: false,
    message: "",
    severity: undefined
  });
  const [isActive, setIsActive] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [endDate, setEndDate] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [itemsRemaining, setItemsRemaining] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [isWhitelistUser, setIsWhitelistUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [isPresale, setIsPresale] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [isValidBalance, setIsValidBalance] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [discountPrice, setDiscountPrice] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [needTxnSplit, setNeedTxnSplit] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [setupTxn, setSetupTxn] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const rpcUrl = props.rpcHost;
  const anchorWallet = Object(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__["useAnchorWallet"])();
  const {
    connect: connect,
    connected: connected,
    publicKey: publicKey,
    wallet: wallet
  } = Object(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__["useWallet"])();
  const cluster = props.network;
  const refreshCandyMachineState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(async function () {
    let commitment = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "confirmed";

    if (!publicKey) {
      return;
    }

    if (props.error !== undefined) {
      setAlertState({
        open: true,
        message: props.error,
        severity: "error",
        hideDuration: null
      });
      return;
    }

    const connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_8__["Connection"](props.rpcHost, commitment);

    if (props.candyMachineId) {
      try {
        var _cndy$state$endSettin, _cndy$state$endSettin2, _cndy$state$whitelist, _cndy$state$whitelist2, _cndy$state$gatekeepe;

        const cndy = await Object(_candy_machine__WEBPACK_IMPORTED_MODULE_11__["getCandyMachineState"])(anchorWallet, props.candyMachineId, connection);
        console.log("Candy machine state: ", cndy);
        let active = cndy !== null && cndy !== void 0 && cndy.state.goLiveDate ? (cndy === null || cndy === void 0 ? void 0 : cndy.state.goLiveDate.toNumber()) < new Date().getTime() / 1000 : false;
        let presale = false; // duplication of state to make sure we have the right values!

        let isWLUser = false;
        let userPrice = cndy.state.price; // whitelist mint?

        if (cndy !== null && cndy !== void 0 && cndy.state.whitelistMintSettings) {
          // is it a presale mint?
          if (cndy.state.whitelistMintSettings.presale && (!cndy.state.goLiveDate || cndy.state.goLiveDate.toNumber() > new Date().getTime() / 1000)) {
            presale = true;
          } // is there a discount?


          if (cndy.state.whitelistMintSettings.discountPrice) {
            setDiscountPrice(cndy.state.whitelistMintSettings.discountPrice);
            userPrice = cndy.state.whitelistMintSettings.discountPrice;
          } else {
            setDiscountPrice(undefined); // when presale=false and discountPrice=null, mint is restricted
            // to whitelist users only

            if (!cndy.state.whitelistMintSettings.presale) {
              cndy.state.isWhitelistOnly = true;
            }
          } // retrieves the whitelist token


          const mint = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_1__["web3"].PublicKey(cndy.state.whitelistMintSettings.mint);
          const token = (await Object(_utils__WEBPACK_IMPORTED_MODULE_12__["getAtaForMint"])(mint, publicKey))[0];

          try {
            const balance = await connection.getTokenAccountBalance(token);
            isWLUser = parseInt(balance.value.amount) > 0; // only whitelist the user if the balance > 0

            setIsWhitelistUser(isWLUser);

            if (cndy.state.isWhitelistOnly) {
              active = isWLUser && (presale || active);
            }
          } catch (e) {
            setIsWhitelistUser(false); // no whitelist user, no mint

            if (cndy.state.isWhitelistOnly) {
              active = false;
            }

            console.log("There was a problem fetching whitelist token balance");
            console.log(e);
          }
        }

        userPrice = isWLUser ? userPrice : cndy.state.price;

        if (cndy !== null && cndy !== void 0 && cndy.state.tokenMint) {
          // retrieves the SPL token
          const mint = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_1__["web3"].PublicKey(cndy.state.tokenMint);
          const token = (await Object(_utils__WEBPACK_IMPORTED_MODULE_12__["getAtaForMint"])(mint, publicKey))[0];

          try {
            const balance = await connection.getTokenAccountBalance(token);
            const valid = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_1__["BN"](balance.value.amount).gte(userPrice); // only allow user to mint if token balance >  the user if the balance > 0

            setIsValidBalance(valid);
            active = active && valid;
          } catch (e) {
            setIsValidBalance(false);
            active = false; // no whitelist user, no mint

            console.log("There was a problem fetching SPL token balance");
            console.log(e);
          }
        } else {
          const balance = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_1__["BN"](await connection.getBalance(publicKey));
          const valid = balance.gte(userPrice);
          setIsValidBalance(valid);
          active = active && valid;
        } // datetime to stop the mint?


        if (cndy !== null && cndy !== void 0 && (_cndy$state$endSettin = cndy.state.endSettings) !== null && _cndy$state$endSettin !== void 0 && _cndy$state$endSettin.endSettingType.date) {
          setEndDate(Object(_utils__WEBPACK_IMPORTED_MODULE_12__["toDate"])(cndy.state.endSettings.number));

          if (cndy.state.endSettings.number.toNumber() < new Date().getTime() / 1000) {
            active = false;
          }
        } // amount to stop the mint?


        if (cndy !== null && cndy !== void 0 && (_cndy$state$endSettin2 = cndy.state.endSettings) !== null && _cndy$state$endSettin2 !== void 0 && _cndy$state$endSettin2.endSettingType.amount) {
          const limit = Math.min(cndy.state.endSettings.number.toNumber(), cndy.state.itemsAvailable);

          if (cndy.state.itemsRedeemed < limit) {
            setItemsRemaining(limit - cndy.state.itemsRedeemed);
          } else {
            setItemsRemaining(0);
            cndy.state.isSoldOut = true;
          }
        } else {
          setItemsRemaining(cndy.state.itemsRemaining);
        }

        if (cndy.state.isSoldOut) {
          active = false;
        }

        const isWithinRadius = await checkDeviceLocation();

        if (!isWithinRadius && active == true) {
          console.log('isWithinRadius: false');
          active = false;
        }

        const [collectionPDA] = await Object(_candy_machine__WEBPACK_IMPORTED_MODULE_11__["getCollectionPDA"])(props.candyMachineId);
        const collectionPDAAccount = await connection.getAccountInfo(collectionPDA);
        setIsActive(cndy.state.isActive = active);
        setIsPresale(cndy.state.isPresale = presale);
        setCandyMachine(cndy);
        const txnEstimate = 892 + (!!collectionPDAAccount && cndy.state.retainAuthority ? 182 : 0) + (cndy.state.tokenMint ? 66 : 0) + (cndy.state.whitelistMintSettings ? 34 : 0) + ((_cndy$state$whitelist = cndy.state.whitelistMintSettings) !== null && _cndy$state$whitelist !== void 0 && (_cndy$state$whitelist2 = _cndy$state$whitelist.mode) !== null && _cndy$state$whitelist2 !== void 0 && _cndy$state$whitelist2.burnEveryTime ? 34 : 0) + (cndy.state.gatekeeper ? 33 : 0) + ((_cndy$state$gatekeepe = cndy.state.gatekeeper) !== null && _cndy$state$gatekeepe !== void 0 && _cndy$state$gatekeepe.expireOnUse ? 66 : 0);
        setNeedTxnSplit(txnEstimate > 1230);
      } catch (e) {
        if (e instanceof Error) {
          if (e.message === `Account does not exist ${props.candyMachineId}`) {
            setAlertState({
              open: true,
              message: `Couldn't fetch candy machine state from candy machine with address: ${props.candyMachineId}, using rpc: ${props.rpcHost}! You probably typed the REACT_APP_CANDY_MACHINE_ID value wrong in your .env file, or you are using the wrong RPC!`,
              severity: "error",
              hideDuration: null
            });
          } else if (e.message.startsWith("failed to get info about account")) {
            setAlertState({
              open: true,
              message: `Couldn't fetch candy machine state with rpc: ${props.rpcHost}! This probably means you have an issue with the REACT_APP_SOLANA_RPC_HOST value in your .env file, or you are not using a custom RPC!`,
              severity: "error",
              hideDuration: null
            });
          }
        } else {
          setAlertState({
            open: true,
            message: `${e}`,
            severity: "error",
            hideDuration: null
          });
        }

        console.log(e);
      }
    } else {
      setAlertState({
        open: true,
        message: `Your REACT_APP_CANDY_MACHINE_ID value in the .env file doesn't look right! Make sure you enter it in as plain base-58 address!`,
        severity: "error",
        hideDuration: null
      });
    }
  }, [anchorWallet, props.candyMachineId, props.error, props.rpcHost]);

  const onMint = async function () {
    let beforeTransactions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    let afterTransactions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    try {
      setIsUserMinting(true);

      if (!locationNotSpoofed()) {
        const spoofingError = new Error('Location spoofing detected.');
        spoofingError.msg = 'Location spoofing detected.';
        throw spoofingError;
      }

      if (connected && candyMachine !== null && candyMachine !== void 0 && candyMachine.program && publicKey) {
        var _setupMint;

        let setupMint;

        if (needTxnSplit && setupTxn === undefined) {
          setAlertState({
            open: true,
            message: "Please sign account setup transaction",
            severity: "info"
          });
          setupMint = await Object(_candy_machine__WEBPACK_IMPORTED_MODULE_11__["createAccountsForMint"])(candyMachine, publicKey);
          let status = {
            err: true
          };

          if (setupMint.transaction) {
            status = await Object(_candy_machine__WEBPACK_IMPORTED_MODULE_11__["awaitTransactionSignatureConfirmation"])(setupMint.transaction, props.txTimeout, props.connection, true);
          }

          if (status && !status.err) {
            setSetupTxn(setupMint);
            setAlertState({
              open: true,
              message: "Setup transaction succeeded! Please sign minting transaction",
              severity: "info"
            });
          } else {
            setAlertState({
              open: true,
              message: "Mint failed! Please try again!",
              severity: "error"
            });
            setIsUserMinting(false);
            return;
          }
        } else {
          setAlertState({
            open: true,
            message: "Please sign minting transaction",
            severity: "info"
          });
        }

        const mintResult = await Object(_candy_machine__WEBPACK_IMPORTED_MODULE_11__["mintOneToken"])(candyMachine, publicKey, beforeTransactions, afterTransactions, (_setupMint = setupMint) !== null && _setupMint !== void 0 ? _setupMint : setupTxn);
        let status = {
          err: true
        };
        let metadataStatus = null;

        if (mintResult) {
          status = await Object(_candy_machine__WEBPACK_IMPORTED_MODULE_11__["awaitTransactionSignatureConfirmation"])(mintResult.mintTxId, props.txTimeout, props.connection, true);
          metadataStatus = await candyMachine.program.provider.connection.getAccountInfo(mintResult.metadataKey, "processed");
          console.log("Metadata status: ", !!metadataStatus);
        }

        if (status && !status.err && metadataStatus) {
          // manual update since the refresh might not detect
          // the change immediately
          const remaining = itemsRemaining - 1;
          setItemsRemaining(remaining);
          setIsActive(candyMachine.state.isActive = remaining > 0);
          candyMachine.state.isSoldOut = remaining === 0;
          setSetupTxn(undefined);
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
            hideDuration: 7000
          });
          refreshCandyMachineState("processed");
        } else if (status && !status.err) {
          setAlertState({
            open: true,
            message: "Mint likely failed! Anti-bot SOL 0.01 fee potentially charged! Check the explorer to confirm the mint failed and if so, make sure you are eligible to mint before trying again.",
            severity: "error",
            hideDuration: 8000
          });
          refreshCandyMachineState();
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error"
          });
          refreshCandyMachineState();
        }
      }
    } catch (error) {
      let message = error.msg || "Minting failed! Please try again!";

      if (!error.msg) {
        if (!error.message) {
          message = "Transaction timeout! Please try again.";
        } else if (error.message.indexOf("0x137")) {
          console.log(error);
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          console.log(error);
          message = `SOLD OUT!`;
          window.location.reload();
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message: message,
        severity: "error"
      }); // updates the candy machine state to reflect the latest
      // information on chain

      refreshCandyMachineState();
    } finally {
      setIsUserMinting(false);
    }
  };

  const toggleMintButton = () => {
    let active = !isActive || isPresale;

    if (active) {
      if (candyMachine.state.isWhitelistOnly && !isWhitelistUser) {
        active = false;
      }

      if (endDate && Date.now() >= endDate.getTime()) {
        active = false;
      }
    }

    if (isPresale && candyMachine.state.goLiveDate && candyMachine.state.goLiveDate.toNumber() <= new Date().getTime() / 1000) {
      setIsPresale(candyMachine.state.isPresale = false);
    }

    setIsActive(candyMachine.state.isActive = active);
  }; // Function to check if the device location is within the specified radius


  const checkDeviceLocation = async () => {
    if (solana_nft_minting_geo_locked) {
      // Get the current device location
      return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            const userCoordinates = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            }; // Check if the device is within the 50-meter radius

            const targetCoordinatesArray = [];
            for (let i = 0; i < solana_nft_minting_latitudes.length; i++) {
              targetCoordinatesArray.push(
                {
                  latitude: solana_nft_minting_latitudes[i],
                  longitude: solana_nft_minting_longitudes[i]
                }
              );
            }

            const distance = calculateDistance(userCoordinates, targetCoordinatesArray);
            const isWithinRadius = distance <= solana_nft_minting_distance;
            resolve(isWithinRadius);
          }, error => {
            reject(`Error getting device location: ${error.message}`);
          });
        } else {
          reject('Geolocation is not supported by this browser.');
        }
      });
    } else {
      return true;
    }
  }; // Function to calculate the distance between two coordinates using the Haversine formula


  const calculateDistance = (currentCoord, targetCoordinates) => {
    const earthRadius = 6371; // Earth's radius in kilometers

    const distances = [];
    targetCoordinates.forEach(coordinate => {
      const latDiff = degreesToRadians(coordinate.latitude - currentCoord.latitude);
      const lonDiff = degreesToRadians(coordinate.longitude - currentCoord.longitude);
      const a = Math.sin(latDiff / 2) * Math.sin(latDiff / 2) + Math.cos(degreesToRadians(currentCoord.latitude)) * Math.cos(degreesToRadians(coordinate.latitude)) * Math.sin(lonDiff / 2) * Math.sin(lonDiff / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      distances.push(earthRadius * c * 1000); // Convert to meters
    });
    return Math.min(...distances);
  };

  const degreesToRadians = degrees => {
    return degrees * Math.PI / 180;
  };

  const locationNotSpoofed = () => {
    if (solana_nft_minting_geo_locked && solana_nft_minting_block_desktop) {
      return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf("Mobi") !== -1);
    } else {
      return true;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    refreshCandyMachineState();
  }, [anchorWallet, props.candyMachineId, props.connection, refreshCandyMachineState]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    (function loop() {
      setTimeout(() => {
        refreshCandyMachineState();
        loop();
      }, 3000);
    })();
  }, [refreshCandyMachineState]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      maxWidth: "xs",
      style: {
        position: "relative"
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], {
        style: {
          padding: 24,
          paddingBottom: 10,
          backgroundColor: "#151A1F",
          borderRadius: 6
        },
        children: [!connected ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(ConnectButton, {
          onClick: e => {
            if ((wallet === null || wallet === void 0 ? void 0 : wallet.adapter.name) === _solana_mobile_wallet_adapter_mobile__WEBPACK_IMPORTED_MODULE_16__["SolanaMobileWalletAdapterWalletName"]) {
              connect();
              e.preventDefault();
            }
          },
          children: "Connect Wallet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 556,
          columnNumber: 13
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["Fragment"], {
          children: [candyMachine && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
            container: true,
            direction: "row",
            justifyContent: "center",
            wrap: "nowrap",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
              item: true,
              xs: 3,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                variant: "body2",
                color: "textSecondary",
                children: "Remaining"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 578,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                variant: "h6",
                color: "textPrimary",
                style: {
                  fontWeight: "bold"
                },
                children: `${itemsRemaining}`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 581,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 577,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
              item: true,
              xs: 4,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                variant: "body2",
                color: "textSecondary",
                children: isWhitelistUser && discountPrice ? "Discount Price" : "Price"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 592,
                columnNumber: 21
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                variant: "h6",
                color: "textPrimary",
                style: {
                  fontWeight: "bold"
                },
                children: isWhitelistUser && discountPrice ? `◎ ${_utils__WEBPACK_IMPORTED_MODULE_12__["formatNumber"].asNumber(discountPrice)}` : `◎ ${_utils__WEBPACK_IMPORTED_MODULE_12__["formatNumber"].asNumber(candyMachine.state.price)}`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 597,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 591,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
              item: true,
              xs: 5,
              children: isActive && endDate && Date.now() < endDate.getTime() ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["Fragment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_MintCountdown__WEBPACK_IMPORTED_MODULE_13__["MintCountdown"], {
                  date: getCountdownDate(candyMachine),
                  style: {
                    justifyContent: "flex-end"
                  },
                  status: "COMPLETED",
                  onComplete: toggleMintButton
                }, "endSettings", false, {
                  fileName: _jsxFileName,
                  lineNumber: 612,
                  columnNumber: 25
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  variant: "caption",
                  align: "center",
                  display: "block",
                  style: {
                    fontWeight: "bold"
                  },
                  children: "TO END OF MINT"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 619,
                  columnNumber: 25
                }, undefined)]
              }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["Fragment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_MintCountdown__WEBPACK_IMPORTED_MODULE_13__["MintCountdown"], {
                  date: getCountdownDate(candyMachine),
                  style: {
                    justifyContent: "flex-end"
                  },
                  status: candyMachine !== null && candyMachine !== void 0 && (_candyMachine$state = candyMachine.state) !== null && _candyMachine$state !== void 0 && _candyMachine$state.isSoldOut || endDate && Date.now() > endDate.getTime() ? "COMPLETED" : isPresale ? "PRESALE" : "LIVE",
                  onComplete: toggleMintButton
                }, "goLive", false, {
                  fileName: _jsxFileName,
                  lineNumber: 630,
                  columnNumber: 25
                }, undefined), isPresale && candyMachine.state.goLiveDate && candyMachine.state.goLiveDate.toNumber() > new Date().getTime() / 1000 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  variant: "caption",
                  align: "center",
                  display: "block",
                  style: {
                    fontWeight: "bold"
                  },
                  children: "UNTIL PUBLIC MINT"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 648,
                  columnNumber: 29
                }, undefined)]
              }, void 0, true)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 609,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 571,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(MintContainer, {
            children: candyMachine !== null && candyMachine !== void 0 && candyMachine.state.isActive && candyMachine !== null && candyMachine !== void 0 && candyMachine.state.gatekeeper && publicKey && anchorWallet !== null && anchorWallet !== void 0 && anchorWallet.signTransaction ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_civic_solana_gateway_react__WEBPACK_IMPORTED_MODULE_15__["GatewayProvider"], {
              wallet: {
                publicKey: publicKey || new _solana_web3_js__WEBPACK_IMPORTED_MODULE_8__["PublicKey"](_candy_machine__WEBPACK_IMPORTED_MODULE_11__["CANDY_MACHINE_PROGRAM"]),
                signTransaction: anchorWallet.signTransaction
              },
              gatekeeperNetwork: candyMachine === null || candyMachine === void 0 ? void 0 : (_candyMachine$state2 = candyMachine.state) === null || _candyMachine$state2 === void 0 ? void 0 : (_candyMachine$state2$ = _candyMachine$state2.gatekeeper) === null || _candyMachine$state2$ === void 0 ? void 0 : _candyMachine$state2$.gatekeeperNetwork,
              clusterUrl: rpcUrl,
              cluster: cluster,
              options: {
                autoShowModal: false
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_MintButton__WEBPACK_IMPORTED_MODULE_14__["MintButton"], {
                candyMachine: candyMachine,
                isMinting: isUserMinting,
                setIsMinting: val => setIsUserMinting(val),
                onMint: onMint,
                isActive: isActive || isPresale && isWhitelistUser && isValidBalance
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 680,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 667,
              columnNumber: 19
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_MintButton__WEBPACK_IMPORTED_MODULE_14__["MintButton"], {
              candyMachine: candyMachine,
              isMinting: isUserMinting,
              setIsMinting: val => setIsUserMinting(val),
              onMint: onMint,
              isActive: isActive || isPresale && isWhitelistUser && isValidBalance
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 692,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 662,
            columnNumber: 15
          }, undefined)]
        }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])("div", {
          style: {
            clear: 'both',
            marginBottom: 10
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 706,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 547,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_3__["Snackbar"], {
      open: alertState.open,
      autoHideDuration: alertState.hideDuration === undefined ? 6000 : alertState.hideDuration,
      onClose: () => setAlertState({ ...alertState,
        open: false
      }),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_17__["jsxDEV"])(_mui_lab_Alert__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onClose: () => setAlertState({ ...alertState,
          open: false
        }),
        severity: alertState.severity,
        children: alertState.message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 717,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 710,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 545,
    columnNumber: 5
  }, undefined);
};

_s(Home, "774bWm1PW4souKOGbbtrda3gWuo=", false, function () {
  return [_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__["useAnchorWallet"], _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__["useWallet"]];
});

_c3 = Home;

const getCountdownDate = candyMachine => {
  var _candyMachine$state$e;

  if (candyMachine.state.isActive && (_candyMachine$state$e = candyMachine.state.endSettings) !== null && _candyMachine$state$e !== void 0 && _candyMachine$state$e.endSettingType.date) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_12__["toDate"])(candyMachine.state.endSettings.number);
  }

  return Object(_utils__WEBPACK_IMPORTED_MODULE_12__["toDate"])(candyMachine.state.goLiveDate ? candyMachine.state.goLiveDate : candyMachine.state.isPresale ? new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_1__["BN"](new Date().getTime() / 1000) : undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c, _c2, _c3;

__webpack_require__.$Refresh$.register(_c, "ConnectButton");
__webpack_require__.$Refresh$.register(_c2, "MintContainer");
__webpack_require__.$Refresh$.register(_c3, "Home");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/MintButton.tsx":
/*!****************************!*\
  !*** ./src/MintButton.tsx ***!
  \****************************/
/*! exports provided: CTAButton, MintButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CTAButton", function() { return CTAButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MintButton", function() { return MintButton; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/esm/Button/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/index.js");
/* harmony import */ var _civic_solana_gateway_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @civic/solana-gateway-react */ "./node_modules/@civic/solana-gateway-react/dist/esm/index.js");
/* harmony import */ var _civic_solana_gateway_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_civic_solana_gateway_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/wallet-adapter-react */ "./node_modules/@solana/wallet-adapter-react/lib/esm/index.js");
/* harmony import */ var _identity_com_solana_gateway_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @identity.com/solana-gateway-ts */ "./node_modules/@identity.com/solana-gateway-ts/dist/index.js");
/* harmony import */ var _identity_com_solana_gateway_ts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_identity_com_solana_gateway_ts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/sergiu/Projects/candy-machine-ui-main/src/MintButton.tsx",
    _s = __webpack_require__.$Refresh$.signature(),
    _s2 = __webpack_require__.$Refresh$.signature();










const CTAButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_1__["default"])`
  width: 100%;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 5px;
  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);
  color: white;
  font-size: 16px;
  font-weight: bold;
`; // add your own styles here

_c = CTAButton;
const MintButton = _ref => {
  _s();

  let {
    onMint: onMint,
    candyMachine: candyMachine,
    isMinting: isMinting,
    setIsMinting: setIsMinting,
    isActive: isActive
  } = _ref;
  const wallet = Object(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__["useWallet"])();
  const connection = Object(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__["useConnection"])();
  const [verified, setVerified] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const {
    requestGatewayToken: requestGatewayToken,
    gatewayStatus: gatewayStatus
  } = Object(_civic_solana_gateway_react__WEBPACK_IMPORTED_MODULE_3__["useGateway"])();
  const [webSocketSubscriptionId, setWebSocketSubscriptionId] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(-1);
  const [clicked, setClicked] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const [waitForActiveToken, setWaitForActiveToken] = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);

  const getMintButtonContent = () => {
    if (candyMachine !== null && candyMachine !== void 0 && candyMachine.state.isSoldOut) {
      return "SOLD OUT";
    } else if (isMinting) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_2__["CircularProgress"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 14
      }, undefined);
    } else if (candyMachine !== null && candyMachine !== void 0 && candyMachine.state.isPresale || candyMachine !== null && candyMachine !== void 0 && candyMachine.state.isWhitelistOnly) {
      return "WHITELIST MINT";
    }

    return "MINT";
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    const mint = async () => {
      await Object(_identity_com_solana_gateway_ts__WEBPACK_IMPORTED_MODULE_6__["removeAccountChangeListener"])(connection.connection, webSocketSubscriptionId);
      await onMint();
      setClicked(false);
      setVerified(false);
    };

    if (verified && clicked) {
      mint();
    }
  }, [verified, clicked, connection.connection, onMint, webSocketSubscriptionId]);
  const previousGatewayStatus = usePrevious(gatewayStatus);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    const fromStates = [_civic_solana_gateway_react__WEBPACK_IMPORTED_MODULE_3__["GatewayStatus"].NOT_REQUESTED, _civic_solana_gateway_react__WEBPACK_IMPORTED_MODULE_3__["GatewayStatus"].REFRESH_TOKEN_REQUIRED];
    const invalidToStates = [...fromStates, _civic_solana_gateway_react__WEBPACK_IMPORTED_MODULE_3__["GatewayStatus"].UNKNOWN];

    if (fromStates.find(state => previousGatewayStatus === state) && !invalidToStates.find(state => gatewayStatus === state)) {
      setIsMinting(true);
    }

    console.log("change: ", _civic_solana_gateway_react__WEBPACK_IMPORTED_MODULE_3__["GatewayStatus"][gatewayStatus]);
  }, [waitForActiveToken, previousGatewayStatus, gatewayStatus]);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    if (waitForActiveToken && gatewayStatus === _civic_solana_gateway_react__WEBPACK_IMPORTED_MODULE_3__["GatewayStatus"].ACTIVE) {
      console.log("Minting after token active");
      setWaitForActiveToken(false);
      onMint();
    }
  }, [waitForActiveToken, gatewayStatus, onMint]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(CTAButton, {
    disabled: isMinting || !isActive,
    onClick: async () => {
      if (candyMachine !== null && candyMachine !== void 0 && candyMachine.state.isActive && candyMachine !== null && candyMachine !== void 0 && candyMachine.state.gatekeeper) {
        const network = candyMachine.state.gatekeeper.gatekeeperNetwork.toBase58();

        if (network === _utils__WEBPACK_IMPORTED_MODULE_7__["CIVIC_GATEKEEPER_NETWORK"]) {
          if (gatewayStatus === _civic_solana_gateway_react__WEBPACK_IMPORTED_MODULE_3__["GatewayStatus"].ACTIVE) {
            await onMint();
          } else {
            // setIsMinting(true);
            setWaitForActiveToken(true);
            await requestGatewayToken();
            console.log("after: ", gatewayStatus);
          }
        } else if (network === "ttib7tuX8PTWPqFsmUFQTj78MbRhUmqxidJRDv4hRRE" || network === "tibePmPaoTgrs929rWpu755EXaxC7M3SthVCf6GzjZt") {
          setClicked(true);
          const gatewayToken = await Object(_identity_com_solana_gateway_ts__WEBPACK_IMPORTED_MODULE_6__["findGatewayToken"])(connection.connection, wallet.publicKey, candyMachine.state.gatekeeper.gatekeeperNetwork);

          if (gatewayToken !== null && gatewayToken !== void 0 && gatewayToken.isValid()) {
            await onMint();
          } else {
            window.open(`https://verify.encore.fans/?gkNetwork=${network}`, "_blank");
            const gatewayTokenAddress = await Object(_identity_com_solana_gateway_ts__WEBPACK_IMPORTED_MODULE_6__["getGatewayTokenAddressForOwnerAndGatekeeperNetwork"])(wallet.publicKey, candyMachine.state.gatekeeper.gatekeeperNetwork);
            setWebSocketSubscriptionId(Object(_identity_com_solana_gateway_ts__WEBPACK_IMPORTED_MODULE_6__["onGatewayTokenChange"])(connection.connection, gatewayTokenAddress, () => setVerified(true), "confirmed"));
          }
        } else {
          setClicked(false);
          throw new Error(`Unknown Gatekeeper Network: ${network}`);
        }
      } else {
        await onMint();
        setClicked(false);
      }
    },
    variant: "contained",
    children: getMintButtonContent()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 110,
    columnNumber: 5
  }, undefined);
};

_s(MintButton, "0bRK5v5dV/xRkSAgnO29F5KydfM=", false, function () {
  return [_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__["useWallet"], _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__["useConnection"], _civic_solana_gateway_react__WEBPACK_IMPORTED_MODULE_3__["useGateway"], usePrevious];
});

_c2 = MintButton;

function usePrevious(value) {
  _s2();

  const ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

_s2(usePrevious, "8uVE59eA/r6b92xF80p7sH8rXLk=");

var _c, _c2;

__webpack_require__.$Refresh$.register(_c, "CTAButton");
__webpack_require__.$Refresh$.register(_c2, "MintButton");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/MintCountdown.tsx":
/*!*******************************!*\
  !*** ./src/MintCountdown.tsx ***!
  \*******************************/
/*! exports provided: MintCountdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MintCountdown", function() { return MintCountdown; });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/index.js");
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-countdown */ "./node_modules/react-countdown/dist/index.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/sergiu/Projects/candy-machine-ui-main/src/MintCountdown.tsx";





const RootContainer = Object(_mui_system__WEBPACK_IMPORTED_MODULE_3__["styled"])("div")(_ref => {
  let {
    theme: theme
  } = _ref;
  return {
    display: "flex",
    padding: theme.spacing(0),
    "& > *": {
      margin: theme.spacing(0.4),
      width: theme.spacing(6),
      height: theme.spacing(6),
      display: "flex",
      flexDirection: "column",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "center",
      background: "#384457",
      color: "white",
      borderRadius: 5,
      fontSize: 10
    }
  };
});
const DoneContainer = Object(_mui_system__WEBPACK_IMPORTED_MODULE_3__["styled"])("span")(_ref2 => {
  let {
    theme: theme
  } = _ref2;
  return {
    display: "flex",
    margin: 0,
    marginBottom: theme.spacing(0.5),
    height: theme.spacing(3.5),
    padding: theme.spacing(1),
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    background: "#384457",
    color: "white",
    borderRadius: 5,
    fontWeight: "bold",
    fontSize: 18
  };
});
const ItemContainer = Object(_mui_system__WEBPACK_IMPORTED_MODULE_3__["styled"])("span")({
  fontWeight: "bold",
  fontSize: 18
});
const MintCountdown = _ref3 => {
  let {
    date: date,
    status: status,
    style: style,
    onComplete: onComplete
  } = _ref3;

  const renderCountdown = _ref4 => {
    let {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
      completed: completed
    } = _ref4;
    hours += days * 24;

    if (completed) {
      return status ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(DoneContainer, {
        children: status
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 23
      }, undefined) : null;
    } else {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(RootContainer, {
        style: style,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
          elevation: 0,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ItemContainer, {
            children: hours < 10 ? `0${hours}` : hours
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
            children: "hrs"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
          elevation: 0,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ItemContainer, {
            children: minutes < 10 ? `0${minutes}` : minutes
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
            children: "mins"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
          elevation: 0,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(ItemContainer, {
            children: seconds < 10 ? `0${seconds}` : seconds
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
            children: "secs"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, undefined);
    }
  };

  if (date) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_countdown__WEBPACK_IMPORTED_MODULE_1__["default"], {
      date: date,
      onComplete: onComplete,
      renderer: renderCountdown
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, undefined);
  } else {
    return null;
  }
};
_c = MintCountdown;

var _c;

__webpack_require__.$Refresh$.register(_c, "MintCountdown");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/candy-machine.ts":
/*!******************************!*\
  !*** ./src/candy-machine.ts ***!
  \******************************/
/*! exports provided: CANDY_MACHINE_PROGRAM, awaitTransactionSignatureConfirmation, getCandyMachineState, getFreezePdaState, getCandyMachineCreator, getFreezePda, getCollectionPDA, getCollectionAuthorityRecordPDA, createAccountsForMint, mintOneToken, shortenAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer, __react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANDY_MACHINE_PROGRAM", function() { return CANDY_MACHINE_PROGRAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "awaitTransactionSignatureConfirmation", function() { return awaitTransactionSignatureConfirmation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandyMachineState", function() { return getCandyMachineState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFreezePdaState", function() { return getFreezePdaState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCandyMachineCreator", function() { return getCandyMachineCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFreezePda", function() { return getFreezePda; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCollectionPDA", function() { return getCollectionPDA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCollectionAuthorityRecordPDA", function() { return getCollectionAuthorityRecordPDA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAccountsForMint", function() { return createAccountsForMint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mintOneToken", function() { return mintOneToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shortenAddress", function() { return shortenAddress; });
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @project-serum/anchor */ "./node_modules/@project-serum/anchor/dist/esm/index.js");
/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/spl-token */ "./node_modules/@solana/spl-token/lib/index.browser.esm.js");
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/web3.js */ "./node_modules/@solana/web3.js/lib/index.browser.esm.js");
/* harmony import */ var _connection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connection */ "./src/connection.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/utils.ts");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

/* eslint-disable */





const CANDY_MACHINE_PROGRAM = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__["web3"].PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ");
const TOKEN_METADATA_PROGRAM_ID = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__["web3"].PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");
const awaitTransactionSignatureConfirmation = async function (txid, timeout, connection) {
  let queryStatus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  let done = false;
  let status = {
    slot: 0,
    confirmations: 0,
    err: null
  };
  const subId = 0;
  status = await new Promise(async (resolve, reject) => {
    setTimeout(() => {
      if (done) {
        return;
      }

      done = true;
      console.log("Rejecting for timeout...");
      reject({
        timeout: true
      });
    }, timeout);

    while (!done && queryStatus) {
      // eslint-disable-next-line no-loop-func
      (async () => {
        try {
          const signatureStatuses = await connection.getSignatureStatuses([txid]);
          status = signatureStatuses && signatureStatuses.value[0];

          if (!done) {
            if (!status) {
              console.log("REST null result for", txid, status);
            } else if (status.err) {
              console.log("REST error for", txid, status);
              done = true;
              reject(status.err);
            } else if (!status.confirmations) {
              console.log("REST no confirmations for", txid, status);
            } else {
              console.log("REST confirmation for", txid, status);
              done = true;
              resolve(status);
            }
          }
        } catch (e) {
          if (!done) {
            console.log("REST connection error: txid", txid, e);
          }
        }
      })();

      await sleep(2000);
    }
  }); //@ts-ignore

  try {
    await connection.removeSignatureListener(subId);
  } catch (e) {// ignore
  }

  done = true;
  console.log("Returning status", status);
  return status;
};

const createAssociatedTokenAccountInstruction = (associatedTokenAddress, payer, walletAddress, splTokenMintAddress) => {
  const keys = [{
    pubkey: payer,
    isSigner: true,
    isWritable: true
  }, {
    pubkey: associatedTokenAddress,
    isSigner: false,
    isWritable: true
  }, {
    pubkey: walletAddress,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: splTokenMintAddress,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__["web3"].SystemProgram.programId,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__["TOKEN_PROGRAM_ID"],
    isSigner: false,
    isWritable: false
  }, {
    pubkey: _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__["web3"].SYSVAR_RENT_PUBKEY,
    isSigner: false,
    isWritable: false
  }];
  return new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__["web3"].TransactionInstruction({
    keys: keys,
    programId: _utils__WEBPACK_IMPORTED_MODULE_4__["SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID"],
    data: Buffer.from([])
  });
};

const getCandyMachineState = async (anchorWallet, candyMachineId, connection) => {
  const provider = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__["Provider"](connection, anchorWallet, {
    preflightCommitment: "processed"
  });

  const getProgramState = async () => {
    const idl = await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__["Program"].fetchIdl(CANDY_MACHINE_PROGRAM, provider);
    const program = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__["Program"](idl, CANDY_MACHINE_PROGRAM, provider);
    const state = await program.account.candyMachine.fetch(candyMachineId);
    return [program, state];
  };

  const getCurrentBlockTime = async () => {
    var _await$connection$get;

    const slot = await connection.getSlot();
    return (_await$connection$get = await connection.getBlockTime(slot)) !== null && _await$connection$get !== void 0 ? _await$connection$get : new Date().getTime() / 1000;
  };

  const [[program, state], currentBlockTime] = await Promise.all([getProgramState(), getCurrentBlockTime()]);
  const itemsAvailable = state.data.itemsAvailable.toNumber();
  const itemsRedeemed = state.itemsRedeemed.toNumber();
  const itemsRemaining = itemsAvailable - itemsRedeemed;
  const timeDiff = new Date().getTime() / 1000 - currentBlockTime;
  const goLiveDate = state.data.goLiveDate !== null ? state.data.goLiveDate + timeDiff : null;
  return {
    id: candyMachineId,
    program: program,
    state: {
      authority: state.authority,
      itemsAvailable: itemsAvailable,
      itemsRedeemed: itemsRedeemed,
      itemsRemaining: itemsRemaining,
      isSoldOut: itemsRemaining === 0,
      isActive: false,
      isPresale: false,
      isWhitelistOnly: false,
      goLiveDate: state.data.goLiveDate,
      treasury: state.wallet,
      tokenMint: state.tokenMint,
      gatekeeper: state.data.gatekeeper,
      endSettings: state.data.endSettings,
      whitelistMintSettings: state.data.whitelistMintSettings,
      hiddenSettings: state.data.hiddenSettings,
      price: state.data.price,
      retainAuthority: state.data.retainAuthority
    }
  };
};
const getFreezePdaState = async (program, freezePda) => {
  try {
    const state = await program.account.freezePda.fetch(freezePda);
    return state;
  } catch (error) {
    return null;
  }
};

const getMasterEdition = async mint => {
  return (await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__["web3"].PublicKey.findProgramAddress([Buffer.from("metadata"), TOKEN_METADATA_PROGRAM_ID.toBuffer(), mint.toBuffer(), Buffer.from("edition")], TOKEN_METADATA_PROGRAM_ID))[0];
};

const getMetadata = async mint => {
  return (await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__["web3"].PublicKey.findProgramAddress([Buffer.from("metadata"), TOKEN_METADATA_PROGRAM_ID.toBuffer(), mint.toBuffer()], TOKEN_METADATA_PROGRAM_ID))[0];
};

const getCandyMachineCreator = async candyMachine => {
  return await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__["web3"].PublicKey.findProgramAddress([Buffer.from("candy_machine"), candyMachine.toBuffer()], CANDY_MACHINE_PROGRAM);
};
const getFreezePda = async candyMachine => {
  return await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__["web3"].PublicKey.findProgramAddress([Buffer.from("freeze"), candyMachine.toBuffer()], CANDY_MACHINE_PROGRAM);
};
const getCollectionPDA = async candyMachineAddress => {
  return await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__["web3"].PublicKey.findProgramAddress([Buffer.from("collection"), candyMachineAddress.toBuffer()], CANDY_MACHINE_PROGRAM);
};
const getCollectionAuthorityRecordPDA = async (mint, newAuthority) => {
  return (await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__["web3"].PublicKey.findProgramAddress([Buffer.from("metadata"), TOKEN_METADATA_PROGRAM_ID.toBuffer(), mint.toBuffer(), Buffer.from("collection_authority"), newAuthority.toBuffer()], TOKEN_METADATA_PROGRAM_ID))[0];
};
const createAccountsForMint = async (candyMachine, payer) => {
  const mint = _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__["web3"].Keypair.generate();
  const userTokenAccountAddress = (await Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getAtaForMint"])(mint.publicKey, payer))[0];
  const signers = [mint];
  const instructions = [_project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__["web3"].SystemProgram.createAccount({
    fromPubkey: payer,
    newAccountPubkey: mint.publicKey,
    space: _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__["MintLayout"].span,
    lamports: await candyMachine.program.provider.connection.getMinimumBalanceForRentExemption(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__["MintLayout"].span),
    programId: _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__["TOKEN_PROGRAM_ID"]
  }), _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__["Token"].createInitMintInstruction(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__["TOKEN_PROGRAM_ID"], mint.publicKey, 0, payer, payer), createAssociatedTokenAccountInstruction(userTokenAccountAddress, payer, payer, mint.publicKey), _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__["Token"].createMintToInstruction(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__["TOKEN_PROGRAM_ID"], mint.publicKey, userTokenAccountAddress, payer, [], 1)];
  return {
    mint: mint,
    userTokenAccount: userTokenAccountAddress,
    transaction: (await Object(_connection__WEBPACK_IMPORTED_MODULE_3__["sendTransactions"])(candyMachine.program.provider.connection, candyMachine.program.provider.wallet, [instructions], [signers], _connection__WEBPACK_IMPORTED_MODULE_3__["SequenceType"].StopOnFailure, "singleGossip", () => {}, () => false, undefined, [], [])).txs[0].txid
  };
};
const mintOneToken = async function (candyMachine, payer) {
  var _setupState$mint;

  let beforeTransactions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  let afterTransactions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  let setupState = arguments.length > 4 ? arguments[4] : undefined;
  const mint = (_setupState$mint = setupState === null || setupState === void 0 ? void 0 : setupState.mint) !== null && _setupState$mint !== void 0 ? _setupState$mint : _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__["web3"].Keypair.generate();
  const userTokenAccountAddress = (await Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getAtaForMint"])(mint.publicKey, payer))[0];
  const userPayingAccountAddress = candyMachine.state.tokenMint ? (await Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getAtaForMint"])(candyMachine.state.tokenMint, payer))[0] : payer;
  const candyMachineAddress = candyMachine.id;
  const remainingAccounts = [];
  const instructions = [];
  const signers = [];
  console.log("SetupState: ", setupState);

  if (!setupState) {
    signers.push(mint);
    instructions.push(...[_project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__["web3"].SystemProgram.createAccount({
      fromPubkey: payer,
      newAccountPubkey: mint.publicKey,
      space: _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__["MintLayout"].span,
      lamports: await candyMachine.program.provider.connection.getMinimumBalanceForRentExemption(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__["MintLayout"].span),
      programId: _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__["TOKEN_PROGRAM_ID"]
    }), _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__["Token"].createInitMintInstruction(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__["TOKEN_PROGRAM_ID"], mint.publicKey, 0, payer, payer), createAssociatedTokenAccountInstruction(userTokenAccountAddress, payer, payer, mint.publicKey), _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__["Token"].createMintToInstruction(_solana_spl_token__WEBPACK_IMPORTED_MODULE_1__["TOKEN_PROGRAM_ID"], mint.publicKey, userTokenAccountAddress, payer, [], 1)]);
  }

  if (candyMachine.state.gatekeeper) {
    remainingAccounts.push({
      pubkey: (await Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getNetworkToken"])(payer, candyMachine.state.gatekeeper.gatekeeperNetwork))[0],
      isWritable: true,
      isSigner: false
    });

    if (candyMachine.state.gatekeeper.expireOnUse) {
      remainingAccounts.push({
        pubkey: _utils__WEBPACK_IMPORTED_MODULE_4__["CIVIC"],
        isWritable: false,
        isSigner: false
      });
      remainingAccounts.push({
        pubkey: (await Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getNetworkExpire"])(candyMachine.state.gatekeeper.gatekeeperNetwork))[0],
        isWritable: false,
        isSigner: false
      });
    }
  }

  if (candyMachine.state.whitelistMintSettings) {
    const mint = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__["web3"].PublicKey(candyMachine.state.whitelistMintSettings.mint);
    const whitelistToken = (await Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getAtaForMint"])(mint, payer))[0];
    remainingAccounts.push({
      pubkey: whitelistToken,
      isWritable: true,
      isSigner: false
    });

    if (candyMachine.state.whitelistMintSettings.mode.burnEveryTime) {
      remainingAccounts.push({
        pubkey: mint,
        isWritable: true,
        isSigner: false
      });
      remainingAccounts.push({
        pubkey: payer,
        isWritable: false,
        isSigner: true
      });
    }
  }

  if (candyMachine.state.tokenMint) {
    remainingAccounts.push({
      pubkey: userPayingAccountAddress,
      isWritable: true,
      isSigner: false
    });
    remainingAccounts.push({
      pubkey: payer,
      isWritable: false,
      isSigner: true
    });
  }

  const metadataAddress = await getMetadata(mint.publicKey);
  const masterEdition = await getMasterEdition(mint.publicKey);
  const [candyMachineCreator, creatorBump] = await getCandyMachineCreator(candyMachineAddress);
  const freezePda = (await getFreezePda(candyMachineAddress))[0];
  console.log(freezePda.toString());
  const freezePdaState = await getFreezePdaState(candyMachine.program, freezePda);
  console.log("Freeze state: ");
  console.log(freezePdaState);

  if (freezePdaState != null) {
    remainingAccounts.push({
      pubkey: freezePda,
      isWritable: true,
      isSigner: false
    });
    remainingAccounts.push({
      pubkey: userTokenAccountAddress,
      isWritable: false,
      isSigner: false
    });

    if (candyMachine.state.tokenMint != null) {
      const freezeAta = (await Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getAtaForMint"])(candyMachine.state.tokenMint, freezePda))[0];
      remainingAccounts.push({
        pubkey: freezeAta,
        isWritable: true,
        isSigner: false
      });
    }
  }

  console.log(remainingAccounts.map(rm => rm.pubkey.toBase58()));
  instructions.push(await candyMachine.program.instruction.mintNft(creatorBump, {
    accounts: {
      candyMachine: candyMachineAddress,
      candyMachineCreator: candyMachineCreator,
      payer: payer,
      wallet: candyMachine.state.treasury,
      mint: mint.publicKey,
      metadata: metadataAddress,
      masterEdition: masterEdition,
      mintAuthority: payer,
      updateAuthority: payer,
      tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
      tokenProgram: _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__["TOKEN_PROGRAM_ID"],
      systemProgram: _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__["SystemProgram"].programId,
      rent: _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__["web3"].SYSVAR_RENT_PUBKEY,
      clock: _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__["web3"].SYSVAR_CLOCK_PUBKEY,
      recentBlockhashes: _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__["SYSVAR_SLOT_HASHES_PUBKEY"],
      instructionSysvarAccount: _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__["web3"].SYSVAR_INSTRUCTIONS_PUBKEY
    },
    remainingAccounts: remainingAccounts.length > 0 ? remainingAccounts : undefined
  }));
  const [collectionPDA] = await getCollectionPDA(candyMachineAddress);
  const collectionPDAAccount = await candyMachine.program.provider.connection.getAccountInfo(collectionPDA);

  if (collectionPDAAccount && candyMachine.state.retainAuthority) {
    try {
      const collectionData = await candyMachine.program.account.collectionPda.fetch(collectionPDA);
      console.log(collectionData);
      const collectionMint = collectionData.mint;
      const collectionAuthorityRecord = await getCollectionAuthorityRecordPDA(collectionMint, collectionPDA);
      console.log(collectionMint);

      if (collectionMint) {
        const collectionMetadata = await getMetadata(collectionMint);
        const collectionMasterEdition = await getMasterEdition(collectionMint);
        console.log("Collection PDA: ", collectionPDA.toBase58());
        console.log("Authority: ", candyMachine.state.authority.toBase58());
        instructions.push(await candyMachine.program.instruction.setCollectionDuringMint({
          accounts: {
            candyMachine: candyMachineAddress,
            metadata: metadataAddress,
            payer: payer,
            collectionPda: collectionPDA,
            tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
            instructions: _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__["web3"].SYSVAR_INSTRUCTIONS_PUBKEY,
            collectionMint: collectionMint,
            collectionMetadata: collectionMetadata,
            collectionMasterEdition: collectionMasterEdition,
            authority: candyMachine.state.authority,
            collectionAuthorityRecord: collectionAuthorityRecord
          }
        }));
      }
    } catch (error) {
      console.error(error);
    }
  }

  const instructionsMatrix = [instructions];
  const signersMatrix = [signers];

  try {
    const txns = (await Object(_connection__WEBPACK_IMPORTED_MODULE_3__["sendTransactions"])(candyMachine.program.provider.connection, candyMachine.program.provider.wallet, instructionsMatrix, signersMatrix, _connection__WEBPACK_IMPORTED_MODULE_3__["SequenceType"].StopOnFailure, "singleGossip", () => {}, () => false, undefined, beforeTransactions, afterTransactions)).txs.map(t => t.txid);
    const mintTxn = txns[0];
    return {
      mintTxId: mintTxn,
      metadataKey: metadataAddress
    };
  } catch (e) {
    console.log(e);
  }

  return null;
};
const shortenAddress = function (address) {
  let chars = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
};

const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/connection.tsx":
/*!****************************!*\
  !*** ./src/connection.tsx ***!
  \****************************/
/*! exports provided: DEFAULT_TIMEOUT, getErrorForTransaction, SequenceType, sendTransactionsWithManualRetry, sendTransactions, sendTransaction, sendTransactionWithRetry, getUnixTs, sendSignedTransaction, sleep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TIMEOUT", function() { return DEFAULT_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getErrorForTransaction", function() { return getErrorForTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SequenceType", function() { return SequenceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendTransactionsWithManualRetry", function() { return sendTransactionsWithManualRetry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendTransactions", function() { return sendTransactions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendTransaction", function() { return sendTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendTransactionWithRetry", function() { return sendTransactionWithRetry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnixTs", function() { return getUnixTs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendSignedTransaction", function() { return sendSignedTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleep", function() { return sleep; });
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @solana/web3.js */ "./node_modules/@solana/web3.js/lib/index.browser.esm.js");
/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/wallet-adapter-base */ "./node_modules/@solana/wallet-adapter-base/lib/esm/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

/* eslint-disable */


const DEFAULT_TIMEOUT = 60000;
const getErrorForTransaction = async (connection, txid) => {
  // wait for all confirmation before geting transaction
  await connection.confirmTransaction(txid, "max");
  const tx = await connection.getParsedTransaction(txid);
  const errors = [];

  if (tx !== null && tx !== void 0 && tx.meta && tx.meta.logMessages) {
    tx.meta.logMessages.forEach(log => {
      const regex = /Error: (.*)/gm;
      let m;

      while ((m = regex.exec(log)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
          regex.lastIndex++;
        }

        if (m.length > 1) {
          errors.push(m[1]);
        }
      }
    });
  }

  return errors;
};
let SequenceType;

(function (SequenceType) {
  SequenceType[SequenceType["Sequential"] = 0] = "Sequential";
  SequenceType[SequenceType["Parallel"] = 1] = "Parallel";
  SequenceType[SequenceType["StopOnFailure"] = 2] = "StopOnFailure";
})(SequenceType || (SequenceType = {}));

async function sendTransactionsWithManualRetry(connection, wallet, instructions, signers) {
  let stopPoint = 0;
  let tries = 0;
  let lastInstructionsLength = null;
  const toRemoveSigners = {};
  instructions = instructions.filter((instr, i) => {
    if (instr.length > 0) {
      return true;
    } else {
      toRemoveSigners[i] = true;
      return false;
    }
  });
  let ids = [];
  let filteredSigners = signers.filter((_, i) => !toRemoveSigners[i]);

  while (stopPoint < instructions.length && tries < 3) {
    instructions = instructions.slice(stopPoint, instructions.length);
    filteredSigners = filteredSigners.slice(stopPoint, filteredSigners.length);
    if (instructions.length === lastInstructionsLength) tries = tries + 1;else tries = 0;

    try {
      if (instructions.length === 1) {
        const id = await sendTransactionWithRetry(connection, wallet, instructions[0], filteredSigners[0], "single");
        ids.push(id.txid);
        stopPoint = 1;
      } else {
        const {
          txs: txs
        } = await sendTransactions(connection, wallet, instructions, filteredSigners, SequenceType.StopOnFailure, "single");
        ids = ids.concat(txs.map(t => t.txid));
      }
    } catch (e) {
      console.error(e);
    }

    console.log("Died on ", stopPoint, "retrying from instruction", instructions[stopPoint], "instructions length is", instructions.length);
    lastInstructionsLength = instructions.length;
  }

  return ids;
}
const sendTransactions = async function (connection, wallet, instructionSet, signersSet) {
  let sequenceType = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : SequenceType.Parallel;
  let commitment = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "singleGossip";
  let successCallback = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : (txid, ind) => {};
  let failCallback = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : (txid, ind) => false;
  let blockhash = arguments.length > 8 ? arguments[8] : undefined;
  let beforeTransactions = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : [];
  let afterTransactions = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : [];
  if (!wallet.publicKey) throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__["WalletNotConnectedError"]();
  const unsignedTxns = beforeTransactions;

  if (!blockhash) {
    blockhash = (await connection.getLatestBlockhash(commitment)).blockhash;
  }

  for (let i = 0; i < instructionSet.length; i++) {
    const instructions = instructionSet[i];
    const signers = signersSet[i];

    if (instructions.length === 0) {
      continue;
    }

    const transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__["Transaction"]();
    instructions.forEach(instruction => transaction.add(instruction));
    transaction.recentBlockhash = blockhash;
    transaction.feePayer = wallet.publicKey;

    if (signers.length > 0) {
      transaction.partialSign(...signers);
    }

    unsignedTxns.push(transaction);
  }

  unsignedTxns.push(...afterTransactions);
  const partiallySignedTransactions = unsignedTxns.filter(t => t.signatures.find(sig => sig.publicKey.equals(wallet.publicKey)));
  const fullySignedTransactions = unsignedTxns.filter(t => !t.signatures.find(sig => sig.publicKey.equals(wallet.publicKey)));
  let signedTxns = await wallet.signAllTransactions(partiallySignedTransactions);
  signedTxns = fullySignedTransactions.concat(signedTxns);
  const pendingTxns = [];
  console.log("Signed txns length", signedTxns.length, "vs handed in length", instructionSet.length);

  for (let i = 0; i < signedTxns.length; i++) {
    const signedTxnPromise = sendSignedTransaction({
      connection: connection,
      signedTransaction: signedTxns[i]
    });

    if (sequenceType !== SequenceType.Parallel) {
      try {
        await signedTxnPromise.then(_ref => {
          let {
            txid: txid,
            slot: slot
          } = _ref;
          return successCallback(txid, i);
        });
        pendingTxns.push(signedTxnPromise);
      } catch (e) {
        console.log("Failed at txn index:", i);
        console.log("Caught failure:", e);
        failCallback(signedTxns[i], i);

        if (sequenceType === SequenceType.StopOnFailure) {
          return {
            number: i,
            txs: await Promise.all(pendingTxns)
          };
        }
      }
    } else {
      pendingTxns.push(signedTxnPromise);
    }
  }

  if (sequenceType !== SequenceType.Parallel) {
    const result = await Promise.all(pendingTxns);
    return {
      number: signedTxns.length,
      txs: result
    };
  }

  return {
    number: signedTxns.length,
    txs: await Promise.all(pendingTxns)
  };
};
const sendTransaction = async function (connection, wallet, instructions, signers) {
  let awaitConfirmation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  let commitment = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "singleGossip";
  let includesFeePayer = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  let blockhash = arguments.length > 7 ? arguments[7] : undefined;
  if (!wallet.publicKey) throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__["WalletNotConnectedError"]();
  let transaction;

  if (!Array.isArray(instructions)) {
    transaction = instructions;
  } else {
    transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__["Transaction"]();
    instructions.forEach(instruction => transaction.add(instruction));
    transaction.recentBlockhash = blockhash || (await connection.getLatestBlockhash(commitment)).blockhash;

    if (includesFeePayer) {
      transaction.feePayer = signers[0].publicKey;
    } else {
      transaction.feePayer = wallet.publicKey;
    }

    if (signers.length > 0) {
      transaction.partialSign(...signers);
    }

    if (!includesFeePayer) {
      transaction = await wallet.signTransaction(transaction);
    }
  }

  const rawTransaction = transaction.serialize();
  const options = {
    skipPreflight: true,
    commitment: commitment
  };
  const txid = await connection.sendRawTransaction(rawTransaction, options);
  let slot = 0;

  if (awaitConfirmation) {
    const confirmation = await awaitTransactionSignatureConfirmation(txid, DEFAULT_TIMEOUT, connection, commitment);
    if (!confirmation) throw new Error("Timed out awaiting confirmation on transaction");
    slot = (confirmation === null || confirmation === void 0 ? void 0 : confirmation.slot) || 0;

    if (confirmation !== null && confirmation !== void 0 && confirmation.err) {
      const errors = await getErrorForTransaction(connection, txid);
      console.log(errors);
      throw new Error(`Raw transaction ${txid} failed`);
    }
  }

  return {
    txid: txid,
    slot: slot
  };
};
const sendTransactionWithRetry = async function (connection, wallet, instructions, signers) {
  let commitment = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "singleGossip";
  let includesFeePayer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  let blockhash = arguments.length > 6 ? arguments[6] : undefined;
  let beforeSend = arguments.length > 7 ? arguments[7] : undefined;
  if (!wallet.publicKey) throw new _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_1__["WalletNotConnectedError"]();
  let transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_0__["Transaction"]();
  instructions.forEach(instruction => transaction.add(instruction));
  transaction.recentBlockhash = blockhash || (await connection.getLatestBlockhash(commitment)).blockhash;

  if (includesFeePayer) {
    transaction.feePayer = signers[0].publicKey;
  } else {
    transaction.feePayer = wallet.publicKey;
  }

  if (signers.length > 0) {
    transaction.partialSign(...signers);
  }

  if (!includesFeePayer) {
    transaction = await wallet.signTransaction(transaction);
  }

  if (beforeSend) {
    beforeSend();
  }

  const {
    txid: txid,
    slot: slot
  } = await sendSignedTransaction({
    connection: connection,
    signedTransaction: transaction
  });
  return {
    txid: txid,
    slot: slot
  };
};
const getUnixTs = () => {
  return new Date().getTime() / 1000;
};
async function sendSignedTransaction(_ref2) {
  let {
    signedTransaction: signedTransaction,
    connection: connection,
    timeout = DEFAULT_TIMEOUT
  } = _ref2;
  const rawTransaction = signedTransaction.serialize();
  const startTime = getUnixTs();
  let slot = 0;
  const txid = await connection.sendRawTransaction(rawTransaction, {
    skipPreflight: true
  });
  console.log("Started awaiting confirmation for", txid);
  let done = false;

  (async () => {
    while (!done && getUnixTs() - startTime < timeout) {
      connection.sendRawTransaction(rawTransaction, {
        skipPreflight: true
      });
      await sleep(500);
    }
  })();

  try {
    const confirmation = await awaitTransactionSignatureConfirmation(txid, timeout, connection, "recent", true);
    if (!confirmation) throw new Error("Timed out awaiting confirmation on transaction");

    if (confirmation.err) {
      console.error(confirmation.err);
      throw new Error("Transaction failed: Custom instruction error");
    }

    slot = (confirmation === null || confirmation === void 0 ? void 0 : confirmation.slot) || 0;
  } catch (err) {
    console.error("Timeout Error caught", err);

    if (err.timeout) {
      throw new Error("Timed out awaiting confirmation on transaction");
    }

    let simulateResult = null;

    try {
      simulateResult = (await simulateTransaction(connection, signedTransaction, "single")).value;
    } catch (e) {}

    if (simulateResult && simulateResult.err) {
      if (simulateResult.logs) {
        for (let i = simulateResult.logs.length - 1; i >= 0; --i) {
          const line = simulateResult.logs[i];

          if (line.startsWith("Program log: ")) {
            throw new Error("Transaction failed: " + line.slice("Program log: ".length));
          }
        }
      }

      throw new Error(JSON.stringify(simulateResult.err));
    } // throw new Error('Transaction failed');

  } finally {
    done = true;
  }

  console.log("Latency", txid, getUnixTs() - startTime);
  return {
    txid: txid,
    slot: slot
  };
}

async function simulateTransaction(connection, transaction, commitment) {
  // @ts-ignore
  transaction.recentBlockhash = await connection._recentBlockhash( // @ts-ignore
  connection._disableBlockhashCaching);
  const signData = transaction.serializeMessage(); // @ts-ignore

  const wireTransaction = transaction._serialize(signData);

  const encodedTransaction = wireTransaction.toString("base64");
  const config = {
    encoding: "base64",
    commitment: commitment
  };
  const args = [encodedTransaction, config]; // @ts-ignore

  const res = await connection._rpcRequest("simulateTransaction", args);

  if (res.error) {
    throw new Error("failed to simulate transaction: " + res.error.message);
  }

  return res.result;
}

async function awaitTransactionSignatureConfirmation(txid, timeout, connection) {
  let commitment = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "recent";
  let queryStatus = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  let done = false;
  let status = {
    slot: 0,
    confirmations: 0,
    err: null
  };
  let subId = 0;
  status = await new Promise(async (resolve, reject) => {
    setTimeout(() => {
      if (done) {
        return;
      }

      done = true;
      console.log("Rejecting for timeout...");
      reject({
        timeout: true
      });
    }, timeout);

    try {
      subId = connection.onSignature(txid, (result, context) => {
        done = true;
        status = {
          err: result.err,
          slot: context.slot,
          confirmations: 0
        };

        if (result.err) {
          console.log("Rejected via websocket", result.err);
          reject(status);
        } else {
          console.log("Resolved via websocket", result);
          resolve(status);
        }
      }, commitment);
    } catch (e) {
      done = true;
      console.error("WS error in setup", txid, e);
    }

    while (!done && queryStatus) {
      // eslint-disable-next-line no-loop-func
      (async () => {
        try {
          const signatureStatuses = await connection.getSignatureStatuses([txid]);
          status = signatureStatuses && signatureStatuses.value[0];

          if (!done) {
            if (!status) {
              console.log("REST null result for", txid, status);
            } else if (status.err) {
              console.log("REST error for", txid, status);
              done = true;
              reject(status.err);
            } else if (!status.confirmations) {
              console.log("REST no confirmations for", txid, status);
            } else {
              console.log("REST confirmation for", txid, status);
              done = true;
              resolve(status);
            }
          }
        } catch (e) {
          if (!done) {
            console.log("REST connection error: txid", txid, e);
          }
        }
      })();

      await sleep(2000);
    }
  }); //@ts-ignore

  try {
    await connection.removeSignatureListener(subId);
  } catch (e) {// ignore
  }

  done = true;
  console.log("Returning status", status);
  return status;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.ts");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/home/sergiu/Projects/candy-machine-ui-main/src/index.tsx";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 9,
  columnNumber: 3
}, undefined), document.getElementById("root")); // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_3__["default"])();

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/reportWebVitals.ts":
/*!********************************!*\
  !*** ./src/reportWebVitals.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.js")).then(_ref => {
      let {
        getCLS: getCLS,
        getFID: getFID,
        getFCP: getFCP,
        getLCP: getLCP,
        getTTFB: getTTFB
      } = _ref;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reportWebVitals);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! exports provided: toDate, formatNumber, SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID, CIVIC, CIVIC_GATEKEEPER_NETWORK, getAtaForMint, getNetworkExpire, getNetworkToken, createAssociatedTokenAccountInstruction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer, __react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDate", function() { return toDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNumber", function() { return formatNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID", function() { return SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CIVIC", function() { return CIVIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CIVIC_GATEKEEPER_NETWORK", function() { return CIVIC_GATEKEEPER_NETWORK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAtaForMint", function() { return getAtaForMint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNetworkExpire", function() { return getNetworkExpire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNetworkToken", function() { return getNetworkToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAssociatedTokenAccountInstruction", function() { return createAssociatedTokenAccountInstruction; });
/* harmony import */ var _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @project-serum/anchor */ "./node_modules/@project-serum/anchor/dist/esm/index.js");
/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/spl-token */ "./node_modules/@solana/spl-token/lib/index.browser.esm.js");
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/web3.js */ "./node_modules/@solana/web3.js/lib/index.browser.esm.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);





const toDate = value => {
  if (!value) {
    return;
  }

  return new Date(value.toNumber() * 1000);
};
const numberFormater = new Intl.NumberFormat("en-US", {
  style: "decimal",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});
const formatNumber = {
  format: val => {
    if (!val) {
      return "--";
    }

    return numberFormater.format(val);
  },
  asNumber: val => {
    if (!val) {
      return undefined;
    }

    return val.toNumber() / _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__["LAMPORTS_PER_SOL"];
  }
};
const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__["web3"].PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
const CIVIC = new _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__["web3"].PublicKey("gatem74V238djXdzWnJf94Wo1DcnuGkfijbf3AuBhfs");
const CIVIC_GATEKEEPER_NETWORK = "ignREusXmGrscGNUesoU9mxfds9AiYTezUKex2PsZV6";
const getAtaForMint = async (mint, buyer) => {
  return await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__["web3"].PublicKey.findProgramAddress([buyer.toBuffer(), _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__["TOKEN_PROGRAM_ID"].toBuffer(), mint.toBuffer()], SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID);
};
const getNetworkExpire = async gatekeeperNetwork => {
  return await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__["web3"].PublicKey.findProgramAddress([gatekeeperNetwork.toBuffer(), Buffer.from("expire")], CIVIC);
};
const getNetworkToken = async (wallet, gatekeeperNetwork) => {
  return await _project_serum_anchor__WEBPACK_IMPORTED_MODULE_0__["web3"].PublicKey.findProgramAddress([wallet.toBuffer(), Buffer.from("gateway"), Buffer.from([0, 0, 0, 0, 0, 0, 0, 0]), gatekeeperNetwork.toBuffer()], CIVIC);
};
function createAssociatedTokenAccountInstruction(associatedTokenAddress, payer, walletAddress, splTokenMintAddress) {
  const keys = [{
    pubkey: payer,
    isSigner: true,
    isWritable: true
  }, {
    pubkey: associatedTokenAddress,
    isSigner: false,
    isWritable: true
  }, {
    pubkey: walletAddress,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: splTokenMintAddress,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__["SystemProgram"].programId,
    isSigner: false,
    isWritable: false
  }, {
    pubkey: _solana_spl_token__WEBPACK_IMPORTED_MODULE_1__["TOKEN_PROGRAM_ID"],
    isSigner: false,
    isWritable: false
  }, {
    pubkey: _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__["SYSVAR_RENT_PUBKEY"],
    isSigner: false,
    isWritable: false
  }];
  return new _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__["TransactionInstruction"]({
    keys: keys,
    programId: SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
    data: Buffer.from([])
  });
}

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ 1:
/*!***********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.tsx ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/sergiu/Projects/candy-machine-ui-main/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/sergiu/Projects/candy-machine-ui-main/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /home/sergiu/Projects/candy-machine-ui-main/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/sergiu/Projects/candy-machine-ui-main/src/index.tsx */"./src/index.tsx");


/***/ }),

/***/ 2:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[1,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map
