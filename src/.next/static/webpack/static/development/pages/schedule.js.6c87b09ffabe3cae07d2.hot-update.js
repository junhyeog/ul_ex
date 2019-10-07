webpackHotUpdate("static\\development\\pages\\schedule.js",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
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
var NavBarIcon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "navbar__NavBarIcon",
  componentId: "sc-1pkoxn2-0"
})(["position:absolute;width:auto;height:20px;top:16.5px;"]);
var NavBarLine = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "navbar__NavBarLine",
  componentId: "sc-1pkoxn2-1"
})(["position:fixed;bottom:0px;height:54.5px;width:100vw;border-top:1px solid black;z-index:2;background-color:white;"]);
var NavBarBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
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

/***/ })

})
//# sourceMappingURL=schedule.js.6c87b09ffabe3cae07d2.hot-update.js.map