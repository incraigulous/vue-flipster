(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vue-flipster", [], factory);
	else if(typeof exports === 'object')
		exports["vue-flipster"] = factory();
	else
		root["vue-flipster"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CoverFlowSlide = exports.CoverFlow = undefined;

var _CoverFlow = __webpack_require__(1);

var _CoverFlow2 = _interopRequireDefault(_CoverFlow);

var _CoverFlowSlide = __webpack_require__(2);

var _CoverFlowSlide2 = _interopRequireDefault(_CoverFlowSlide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _CoverFlow2.default;
exports.CoverFlow = _CoverFlow2.default;
exports.CoverFlowSlide = _CoverFlowSlide2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var template = '<div class="cover-flow">\n  <div class="my-flipster" ref="el">\n    <div class="cover-flow-slides">\n        <slot />\n    </div>\n  </div>\n</div>';

exports.default = {
  template: template,
  props: {
    // ['center'|number]
    // Zero based index of the starting item, or use 'center' to start in the middle
    start: {
      default: function _default() {
        return 'center';
      }
    },
    // [milliseconds]
    // Speed of the fade in animation after items have been setup
    fadeIn: {
      default: function _default() {
        return 400;
      }
    },
    // [true|false]
    // Loop around when the start or end is reached
    loop: {
      default: function _default() {
        return false;
      }
    },
    // [false|milliseconds]
    // If a positive number, Flipster will automatically advance to next item after that number of milliseconds
    autoplay: {
      default: function _default() {
        return false;
      }
    },
    // [true|false]
    // If true, autoplay advancement will pause when Flipster is hovered
    pauseOnHover: {
      default: function _default() {
        return true;
      }
    },
    // [coverflow|carousel|flat|...]
    // Adds a class (e.g. flipster--coverflow) to the flipster element to switch between display styles
    // Create your own theme in CSS and use this setting to have Flipster add the custom class
    theme: {
      default: function _default() {
        return 'coverflow';
      }
    },
    // [number]
    // Space between items relative to each item's width. 0 for no spacing, negative values to overlap
    spacing: {
      default: function _default() {
        return -0.6;
      }
    },
    // [true|false]
    // Clicking an item switches to that item
    click: {
      default: function _default() {
        return true;
      }
    },
    // [true|false]
    // Enable left/right arrow navigation
    keyboard: {
      default: function _default() {
        return true;
      }
    },
    // [true|false]
    // Enable mousewheel/trackpad navigation; up/left = previous, down/right = next 
    scrollwheel: {
      default: function _default() {
        return true;
      }
    },
    // [true|false]
    // Enable swipe navigation for touch devices
    touch: {
      default: function _default() {
        return true;
      }
    },
    // [true|false|'before'|'after']
    // If not false, Flipster will build an unordered list of the items
    // Values true or 'before' will insert the navigation before the items, 'after' will append the navigation after the items
    nav: {
      default: function _default() {
        return false;
      }
    },
    // [true|false|'custom']
    // If true, Flipster will insert Previous / Next buttons with SVG arrows
    // If 'custom', Flipster will not insert the arrows and will instead use the values of `buttonPrev` and `buttonNext`
    buttons: {
      default: function _default() {
        return true;
      }
    },
    // [text|html]
    // Changes the text for the Previous button
    buttonPrev: {
      default: function _default() {
        return 'Previous';
      }
    },
    // [text|html]
    // Changes the text for the Next button
    buttonNext: {
      default: function _default() {
        return 'Next';
      }
    }
  },
  mounted: function mounted() {
    $(this.$refs.el).flipster({
      itemContainer: 'div.cover-flow-slides',
      itemSelector: 'div.cover-flow-slide',
      start: this.start,
      fadeIn: this.fadeIn,
      loop: this.loop,
      autoplay: this.autoplay,
      pauseOnHover: this.pauseOnHover,
      style: this.theme,
      spacing: this.spacing,
      click: this.click,
      keyboard: this.keyboard,
      scrollwheel: this.scrollwheel,
      touch: this.touch,
      nav: this.nav,
      buttons: this.buttons,
      buttonPrev: this.buttonPrev,
      buttonNext: this.buttonNext,
      onItemSwitch: this.onItemSwitch.bind(this)
    });
  },

  methods: {
    onItemSwitch: function onItemSwitch(currentItem, previousItem) {
      this.$emit('switch', currentItem, previousItem);
    }
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var template = "<div class=\"cover-flow-slide\">\n    <slot />\n  </div>";

exports.default = {
  template: template
};

/***/ })
/******/ ]);
});