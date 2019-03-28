/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/main.js":
/*!************************!*\
  !*** ./app/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _myFullPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myFullPage */ \"./app/js/myFullPage.js\");\n/* harmony import */ var _myModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myModal */ \"./app/js/myModal.js\");\n\n\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  var test = new _myFullPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    selector: \".fixedScroll\",\n    buttonWrap: \".selector-wrap\"\n  });\n  var nextLink = document.querySelector(\".next-link\"),\n      selectorBtns = document.querySelectorAll(\".selector-btn\");\n  nextLink.addEventListener(\"click\", function () {\n    selectorBtns[1].click();\n  });\n  var startPopup = new _myModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    modal: \".modal\",\n    overlay: \".modal-overlay\",\n    fade: 400,\n    canCloseOverlay: false\n  });\n  var popup;\n  setTimeout(function () {\n    if (localStorage.getItem(\"showStartModal\") === null || localStorage.getItem(\"showStartModal\") === \"true\") startPopup.open(document.querySelector(\".modal-meeting\").innerHTML);\n    var closeStartModal = document.querySelector(\".closeStartModal\");\n    closeStartModal.addEventListener(\"click\", function () {\n      startPopup.close();\n      var rememberModalWindow = document.querySelector(\".rememberModalWindow\");\n      if (rememberModalWindow.checked) localStorage.setItem(\"showStartModal\", \"false\");else localStorage.setItem(\"showStartModal\", \"true\");\n      popup = new _myModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        modal: \".modal\",\n        overlay: \".modal-overlay\",\n        fade: 100,\n        canCloseOverlay: true\n      });\n    });\n  }, 1);\n  var menuLinks = document.querySelectorAll(\".menu__link\");\n  menuLinks.forEach(function (link, i) {\n    link.addEventListener(\"click\", function () {\n      selectorBtns[i + 1].click();\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvanMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9qcy9tYWluLmpzPzQzYzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpeGVkU2Nyb2xsIGZyb20gXCIuL215RnVsbFBhZ2VcIjtcclxuaW1wb3J0IG15TW9kYWwgZnJvbSBcIi4vbXlNb2RhbFwiO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuXHJcblx0bGV0IHRlc3QgPSBuZXcgZml4ZWRTY3JvbGwoe1xyXG5cdFx0c2VsZWN0b3I6IFwiLmZpeGVkU2Nyb2xsXCIsXHJcblx0XHRidXR0b25XcmFwOiBcIi5zZWxlY3Rvci13cmFwXCJcclxuXHR9KTtcclxuXHJcblx0bGV0IG5leHRMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXh0LWxpbmtcIiksXHJcblx0XHRzZWxlY3RvckJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlbGVjdG9yLWJ0blwiKTtcclxuXHJcblx0bmV4dExpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdHNlbGVjdG9yQnRuc1sxXS5jbGljaygpO1xyXG5cdH0pO1xyXG5cclxuXHRsZXQgc3RhcnRQb3B1cCA9IG5ldyBteU1vZGFsKHtcclxuXHRcdG1vZGFsOiBcIi5tb2RhbFwiLFxyXG5cdFx0b3ZlcmxheTogXCIubW9kYWwtb3ZlcmxheVwiLFxyXG5cdFx0ZmFkZTogNDAwLFxyXG5cdFx0Y2FuQ2xvc2VPdmVybGF5OiBmYWxzZVxyXG5cdH0pO1xyXG5cclxuXHRsZXQgcG9wdXA7XHJcblxyXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0aWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2hvd1N0YXJ0TW9kYWxcIikgPT09IG51bGwgfHwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaG93U3RhcnRNb2RhbFwiKSA9PT0gXCJ0cnVlXCIpXHJcblx0XHRzdGFydFBvcHVwLm9wZW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1tZWV0aW5nXCIpLmlubmVySFRNTCk7XHJcblxyXG5cdFx0bGV0IGNsb3NlU3RhcnRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VTdGFydE1vZGFsXCIpO1xyXG5cclxuXHRcdGNsb3NlU3RhcnRNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0XHRzdGFydFBvcHVwLmNsb3NlKCk7XHJcblxyXG5cdFx0XHRsZXQgcmVtZW1iZXJNb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVtZW1iZXJNb2RhbFdpbmRvd1wiKTtcclxuXHJcblx0XHRcdGlmIChyZW1lbWJlck1vZGFsV2luZG93LmNoZWNrZWQpXHJcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzaG93U3RhcnRNb2RhbFwiLCBcImZhbHNlXCIpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzaG93U3RhcnRNb2RhbFwiLCBcInRydWVcIik7XHJcblxyXG5cdFx0XHRwb3B1cCA9IG5ldyBteU1vZGFsKHtcclxuXHRcdFx0XHRtb2RhbDogXCIubW9kYWxcIixcclxuXHRcdFx0XHRvdmVybGF5OiBcIi5tb2RhbC1vdmVybGF5XCIsXHJcblx0XHRcdFx0ZmFkZTogMTAwLFxyXG5cdFx0XHRcdGNhbkNsb3NlT3ZlcmxheTogdHJ1ZVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH0sIDEpO1xyXG5cclxuXHJcblx0bGV0IG1lbnVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudV9fbGlua1wiKTtcclxuXHRtZW51TGlua3MuZm9yRWFjaCgobGluaywgaSkgPT4ge1xyXG5cdFx0bGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG5cdFx0XHRzZWxlY3RvckJ0bnNbaSArIDFdLmNsaWNrKCk7XHJcblx0XHR9KVxyXG5cdH0pO1xyXG5cclxuXHJcbn0pO1xyXG5cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/js/main.js\n");

/***/ }),

/***/ "./app/js/myFullPage.js":
/*!******************************!*\
  !*** ./app/js/myFullPage.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar fixedScroll =\n/*#__PURE__*/\nfunction () {\n  function fixedScroll(options) {\n    _classCallCheck(this, fixedScroll);\n\n    this.sec = document.querySelectorAll(options.selector);\n    this.current = 0;\n    this.buttonWrap = document.querySelector(options.buttonWrap);\n    this.buttons = []; // this.event = this.onWheel.bind(this);\n\n    this.init();\n  }\n\n  _createClass(fixedScroll, [{\n    key: \"init\",\n    value: function init() {\n      // window.addEventListener(\"mousewheel\", this.event);\n      // window.addEventListener(\"mousewheel\", this.onWheel.bind(this), {once: true});\n      window.addEventListener(\"wheel\", this.onWheel.bind(this), {\n        once: true\n      });\n\n      for (var i = 0; i < this.sec.length; i++) {\n        var btn = document.createElement(\"button\");\n        btn.classList.add(\"selector-btn\");\n        btn.addEventListener(\"click\", this.prepareScroll.bind(this));\n        this.buttons.push(btn);\n        this.buttonWrap.appendChild(btn);\n      }\n\n      setTimeout(function () {\n        document.querySelector(\".selector-btn\").click();\n      }, 300);\n    }\n  }, {\n    key: \"paintBtn\",\n    value: function paintBtn() {\n      this.buttons.forEach(function (btn) {\n        btn.classList.remove(\"active\");\n      });\n      this.buttons[this.current].classList.add(\"active\");\n    }\n  }, {\n    key: \"prepareScroll\",\n    value: function prepareScroll(e) {\n      for (var i = 0; i < this.buttons.length; i++) {\n        if (this.buttons[i] === e.target) this.current = i;\n      }\n\n      this.paintBtn();\n      this.scroll(this.current);\n    }\n  }, {\n    key: \"scroll\",\n    value: function scroll(index) {\n      var offsetTop = this.sec[index].offsetTop;\n      window.scrollTo({\n        top: offsetTop,\n        behavior: \"smooth\"\n      });\n    }\n  }, {\n    key: \"onWheel\",\n    value: function onWheel(e) {\n      var _this = this;\n\n      // window.removeEventListener(\"mousewheel\", this.event);\n      e = e || window.event;\n      var delta = e.deltaY || e.detail || e.wheelDelta;\n      if (delta > 0) if (this.current !== this.sec.length - 1) this.current++;\n      if (delta < 0) if (this.current !== 0) this.current--;\n      this.scroll(this.current);\n      this.paintBtn();\n      setTimeout(function () {\n        // window.addEventListener(\"mousewheel\",  this.onWheel.bind(this), {once: true});\n        window.addEventListener(\"wheel\", _this.onWheel.bind(_this), {\n          once: true\n        });\n      }, 400);\n    }\n  }]);\n\n  return fixedScroll;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fixedScroll);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvanMvbXlGdWxsUGFnZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9qcy9teUZ1bGxQYWdlLmpzPzNmMTQiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgZml4ZWRTY3JvbGwge1xyXG5cdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuXHRcdHRoaXMuc2VjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChvcHRpb25zLnNlbGVjdG9yKTtcclxuXHRcdHRoaXMuY3VycmVudCA9IDA7XHJcblx0XHR0aGlzLmJ1dHRvbldyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMuYnV0dG9uV3JhcCk7XHJcblxyXG5cdFx0dGhpcy5idXR0b25zID0gW107XHJcblxyXG5cdFx0Ly8gdGhpcy5ldmVudCA9IHRoaXMub25XaGVlbC5iaW5kKHRoaXMpO1xyXG5cclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpIHtcclxuXHRcdC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCB0aGlzLmV2ZW50KTtcclxuXHRcdC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCB0aGlzLm9uV2hlZWwuYmluZCh0aGlzKSwge29uY2U6IHRydWV9KTtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgdGhpcy5vbldoZWVsLmJpbmQodGhpcyksIHtvbmNlOiB0cnVlfSk7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VjLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cdFx0XHRidG4uY2xhc3NMaXN0LmFkZChcInNlbGVjdG9yLWJ0blwiKTtcclxuXHRcdFx0YnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnByZXBhcmVTY3JvbGwuYmluZCh0aGlzKSk7XHJcblx0XHRcdHRoaXMuYnV0dG9ucy5wdXNoKGJ0bik7XHJcblx0XHRcdHRoaXMuYnV0dG9uV3JhcC5hcHBlbmRDaGlsZChidG4pO1xyXG5cdFx0fVxyXG5cdFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdG9yLWJ0blwiKS5jbGljaygpO1xyXG5cdFx0fSwzMDApO1xyXG5cdH1cclxuXHJcblx0cGFpbnRCdG4oKSB7XHJcblx0XHR0aGlzLmJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcblx0XHRcdGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXHJcblx0XHR9KTtcclxuXHRcdHRoaXMuYnV0dG9uc1t0aGlzLmN1cnJlbnRdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblx0fVxyXG5cclxuXHRwcmVwYXJlU2Nyb2xsKGUpIHtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5idXR0b25zLmxlbmd0aDsgaSsrKVxyXG5cdFx0XHRpZiAodGhpcy5idXR0b25zW2ldID09PSBlLnRhcmdldClcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnQgPSBpO1xyXG5cdFx0dGhpcy5wYWludEJ0bigpO1xyXG5cdFx0dGhpcy5zY3JvbGwodGhpcy5jdXJyZW50KTtcclxuXHR9XHJcblxyXG5cdHNjcm9sbChpbmRleCkge1xyXG5cdFx0bGV0IG9mZnNldFRvcCA9IHRoaXMuc2VjW2luZGV4XS5vZmZzZXRUb3A7XHJcblx0XHR3aW5kb3cuc2Nyb2xsVG8oe1xyXG5cdFx0XHR0b3A6IG9mZnNldFRvcCxcclxuXHRcdFx0YmVoYXZpb3I6IFwic21vb3RoXCJcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0b25XaGVlbChlKSB7XHJcblx0XHQvLyB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgdGhpcy5ldmVudCk7XHJcblx0XHRlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcblx0XHRsZXQgZGVsdGEgPSBlLmRlbHRhWSB8fCBlLmRldGFpbCB8fCBlLndoZWVsRGVsdGE7XHJcblxyXG5cclxuXHJcblx0XHRpZiAoZGVsdGEgPiAwKVxyXG5cdFx0XHRpZiAodGhpcy5jdXJyZW50ICE9PSB0aGlzLnNlYy5sZW5ndGggLSAxKVxyXG5cdFx0XHRcdHRoaXMuY3VycmVudCsrO1xyXG5cdFx0aWYgKGRlbHRhIDwgMClcclxuXHRcdFx0aWYgKHRoaXMuY3VycmVudCAhPT0gMClcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnQtLTtcclxuXHJcblx0XHR0aGlzLnNjcm9sbCh0aGlzLmN1cnJlbnQpO1xyXG5cdFx0dGhpcy5wYWludEJ0bigpO1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsICB0aGlzLm9uV2hlZWwuYmluZCh0aGlzKSwge29uY2U6IHRydWV9KTtcclxuXHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsICB0aGlzLm9uV2hlZWwuYmluZCh0aGlzKSwge29uY2U6IHRydWV9KVxyXG5cdFx0XHR9LCA0MDBcclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmaXhlZFNjcm9sbDsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7OztBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/js/myFullPage.js\n");

/***/ }),

/***/ "./app/js/myModal.js":
/*!***************************!*\
  !*** ./app/js/myModal.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar myModal =\n/*#__PURE__*/\nfunction () {\n  function myModal(options) {\n    _classCallCheck(this, myModal);\n\n    this.modal = document.querySelector(options.modal);\n    this.overlay = document.querySelector(options.overlay);\n    this.fadeTime = options.fade;\n    this.canCloseOverlay = options.canCloseOverlay;\n    this.init();\n  }\n\n  _createClass(myModal, [{\n    key: \"init\",\n    value: function init() {\n      if (this.canCloseOverlay) this.overlay.addEventListener(\"click\", this.close.bind(this));\n    }\n  }, {\n    key: \"fade\",\n    value: function fade(action) {\n      var _this = this;\n\n      var fps = 60,\n          stepOpacity = 1 / fps;\n\n      if (action) {\n        var stepTime = this.fadeTime / fps,\n            opacity = 0;\n        var animate = setInterval(function () {\n          opacity += stepOpacity;\n          _this.overlay.style.opacity = opacity;\n          _this.modal.style.opacity = opacity;\n\n          if (opacity > .9) {\n            clearInterval(animate);\n            _this.overlay.style.opacity = \"1\";\n            _this.modal.style.opacity = \"1\";\n          }\n        }, stepTime);\n      } else {\n        var _stepTime = this.fadeTime / 2 / fps,\n            _opacity = 1;\n\n        var _animate = setInterval(function () {\n          _opacity -= stepOpacity;\n          _this.overlay.style.opacity = _opacity;\n          _this.modal.style.opacity = _opacity;\n\n          if (_opacity < .1) {\n            clearInterval(_animate);\n            _this.overlay.style.display = \"none\";\n            _this.modal.style.display = \"none\";\n          }\n        }, _stepTime);\n      }\n    }\n  }, {\n    key: \"open\",\n    value: function open(content) {\n      this.modal.innerHTML = content;\n      this.overlay.style.display = \"block\";\n      this.modal.style.display = \"flex\";\n      this.fade(true);\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      this.fade(false);\n    }\n  }]);\n\n  return myModal;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (myModal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvanMvbXlNb2RhbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9qcy9teU1vZGFsLmpzPzg1YmQiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgbXlNb2RhbCB7XHJcblx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xyXG5cdFx0dGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3B0aW9ucy5tb2RhbCk7XHJcblx0XHR0aGlzLm92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG9wdGlvbnMub3ZlcmxheSk7XHJcblx0XHR0aGlzLmZhZGVUaW1lID0gb3B0aW9ucy5mYWRlO1xyXG5cdFx0dGhpcy5jYW5DbG9zZU92ZXJsYXkgPSBvcHRpb25zLmNhbkNsb3NlT3ZlcmxheTtcclxuXHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHR9XHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHRpZiAodGhpcy5jYW5DbG9zZU92ZXJsYXkpXHJcblx0XHRcdHRoaXMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jbG9zZS5iaW5kKHRoaXMpKTtcclxuXHR9XHJcblxyXG5cdGZhZGUoYWN0aW9uKSB7XHJcblx0XHRsZXQgZnBzID0gNjAsXHJcblx0XHRcdHN0ZXBPcGFjaXR5ID0gMSAvIGZwcztcclxuXHJcblx0XHRpZiAoYWN0aW9uKSB7XHJcblx0XHRcdGxldCBzdGVwVGltZSA9IHRoaXMuZmFkZVRpbWUgLyBmcHMsXHJcblx0XHRcdFx0b3BhY2l0eSA9IDA7XHJcblxyXG5cdFx0XHRsZXQgYW5pbWF0ZSA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0XHRvcGFjaXR5ICs9IHN0ZXBPcGFjaXR5O1xyXG5cclxuXHRcdFx0XHR0aGlzLm92ZXJsYXkuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XHJcblx0XHRcdFx0dGhpcy5tb2RhbC5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcclxuXHJcblx0XHRcdFx0aWYgKG9wYWNpdHkgPiAuOSkge1xyXG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChhbmltYXRlKTtcclxuXHRcdFx0XHRcdHRoaXMub3ZlcmxheS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XHJcblx0XHRcdFx0XHR0aGlzLm1vZGFsLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIHN0ZXBUaW1lKVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bGV0IHN0ZXBUaW1lID0gdGhpcy5mYWRlVGltZSAvIDIgLyBmcHMsXHJcblx0XHRcdFx0b3BhY2l0eSA9IDE7XHJcblxyXG5cdFx0XHRsZXQgYW5pbWF0ZSA9IHNldEludGVydmFsKCgpID0+IHtcclxuXHRcdFx0XHRvcGFjaXR5IC09IHN0ZXBPcGFjaXR5O1xyXG5cclxuXHRcdFx0XHR0aGlzLm92ZXJsYXkuc3R5bGUub3BhY2l0eSA9IG9wYWNpdHk7XHJcblx0XHRcdFx0dGhpcy5tb2RhbC5zdHlsZS5vcGFjaXR5ID0gb3BhY2l0eTtcclxuXHJcblx0XHRcdFx0aWYgKG9wYWNpdHkgPCAuMSkge1xyXG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChhbmltYXRlKTtcclxuXHRcdFx0XHRcdHRoaXMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRcdFx0XHR0aGlzLm1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIHN0ZXBUaW1lKVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0b3Blbihjb250ZW50KSB7XHJcblx0XHR0aGlzLm1vZGFsLmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcblxyXG5cdFx0dGhpcy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0XHR0aGlzLm1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuXHRcdHRoaXMuZmFkZSh0cnVlKTtcclxuXHR9XHJcblxyXG5cdGNsb3NlKCkge1xyXG5cdFx0dGhpcy5mYWRlKGZhbHNlKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG15TW9kYWw7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/js/myModal.js\n");

/***/ })

/******/ });