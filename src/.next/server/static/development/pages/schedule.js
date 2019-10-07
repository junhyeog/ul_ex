module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: NavBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./components/navbar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavBar", function() { return _navbar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./config.js");
var _jsxFileName = "C:\\Users\\User\\Downloads\\ulime\\ul_ex\\src\\components\\navbar.js";







var NavBar = function NavBar() {
  var nowRoute = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  var profileState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    nickname: "Nickname",
    birthday: "1990-01-01",
    gender: "남성",
    name: "name",
    description: "tmp",
    email: "",
    ulimeId: "",
    channels: []
  });
  var role = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("subscriber");
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(nowRoute[0]);

    if (nowRoute[0] !== next_router__WEBPACK_IMPORTED_MODULE_2___default.a.route) {
      nowRoute[1](next_router__WEBPACK_IMPORTED_MODULE_2___default.a.route);
    }

    console.log(next_router__WEBPACK_IMPORTED_MODULE_2___default.a.query);

    if (next_router__WEBPACK_IMPORTED_MODULE_2___default.a.query.detail === "profileedit") {
      SettingCategory[1](1);
    }

    var x = window.sessionStorage.getItem("id");
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("".concat(_config__WEBPACK_IMPORTED_MODULE_4__["BACK_URL"], "/user/").concat(x), {
      withCredentials: true
    }).then(function (res) {
      console.log(res.data);
      console.log(res.data.user.nickname, res.data.user.birthday);

      if (profileState[0].nickname !== res.data.user.nickname) {
        profileState[1]({
          nickname: res.data.user.nickname,
          birthday: res.data.user.birthday,
          name: res.data.user.name,
          gender: res.data.user.gender,
          description: res.data.user.description,
          email: res.data.user.email,
          ulimeId: res.data.user.ulimeId,
          channels: res.data.user.channels
        });
      }
    });
    var check = window.sessionStorage.getItem("role");

    if (check !== role[0]) {
      role[1](check);
    }
  }, []);

  if (role[0] === "creator") {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBarLine, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBarBox, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBarIcon, {
      src: "/static/home.png",
      style: {
        left: '28px'
      },
      onClick: function onClick() {
        return window.location.href = "/today";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBarIcon, {
      src: "/static/feed.png",
      style: {
        left: '103px'
      },
      onClick: function onClick() {
        return window.location.href = "/feed";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBarIcon, {
      src: "/static/musica-searcher.png",
      style: {
        left: '178px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBarIcon, {
      src: "/static/notifications-button.png",
      style: {
        left: '254px'
      },
      onClick: function onClick() {
        return window.location.href = "/alert";
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBarIcon, {
      src: "/static/userblack.png",
      style: {
        left: '328px'
      },
      onClick: function onClick() {
        return window.location.href = "/creator?id=".concat(profileState[0].channels[0]);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    })));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBarLine, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBarBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBarIcon, {
    src: "/static/home.png",
    style: {
      left: '28px'
    },
    onClick: function onClick() {
      return window.location.href = "/today";
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBarIcon, {
    src: "/static/feed.png",
    style: {
      left: '103px'
    },
    onClick: function onClick() {
      return window.location.href = "/feed";
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBarIcon, {
    src: "/static/musica-searcher.png",
    style: {
      left: '178px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBarIcon, {
    src: "/static/notifications-button.png",
    style: {
      left: '254px'
    },
    onClick: function onClick() {
      return window.location.href = "/alert";
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBarIcon, {
    src: "/static/userblack.png",
    style: {
      left: '328px'
    },
    onClick: function onClick() {
      return window.location.href = "/profile";
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);
var NavBarIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "navbar__NavBarIcon",
  componentId: "sc-1pkoxn2-0"
})(["position:absolute;width:auto;height:20px;top:16.5px;"]);
var NavBarLine = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "navbar__NavBarLine",
  componentId: "sc-1pkoxn2-1"
})(["position:fixed;bottom:0px;height:54.5px;width:100vw;border-top:1px solid black;z-index:2;background-color:white;"]);
var NavBarBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "navbar__NavBarBox",
  componentId: "sc-1pkoxn2-2"
})(["position:absolute;bottom:0px;height:54.5px;width:375px;left:50%;transform:translate(-50%);"]);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: BACK_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACK_URL", function() { return BACK_URL; });
var BACK_URL =  true ? "http://ulime.org:3200" : undefined;

/***/ }),

/***/ "./pages/schedule.js":
/*!***************************!*\
  !*** ./pages/schedule.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./components/index.js");
var _jsxFileName = "C:\\Users\\User\\Downloads\\ulime\\ul_ex\\src\\pages\\schedule.js";




var Schedule = function Schedule() {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](HeaderBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Logo, {
    src: "/static/ulimeWhite2.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Slogan, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "\uD22C\uB370\uC774")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components__WEBPACK_IMPORTED_MODULE_2__["NavBar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Schedule);
var HeaderBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "schedule__HeaderBox",
  componentId: "sc-7gsjoh-0"
})(["position:relative;width:100vw;height:55px;background-image:linear-gradient(155deg,#ff7676,#fc6d7f 31%,#f75698 83%,#f54ea2 99%);text-align:center;"]);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "schedule__Logo",
  componentId: "sc-7gsjoh-1"
})(["position:relative;top:83px;width:70px;height:74.3px;object-fit:contain;"]);
var Slogan = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "schedule__Slogan",
  componentId: "sc-7gsjoh-2"
})(["position:absolute;top:18px;width:182px;height:20px;font-family:Verdana;font-size:15px;font-weight:normal;font-style:normal;font-stretch:normal;line-height:1.2;letter-spacing:normal;text-align:center;color:#ffffff;left:50%;transform:translate(-50%,0);"]);

/***/ }),

/***/ 5:
/*!*********************************!*\
  !*** multi ./pages/schedule.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Downloads\ulime\ul_ex\src\pages\schedule.js */"./pages/schedule.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=schedule.js.map