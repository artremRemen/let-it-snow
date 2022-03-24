/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Animation.ts":
/*!*****************************!*\
  !*** ./src/js/Animation.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Animation = void 0;\n\nvar Snowflake_1 = __webpack_require__(/*! ./Snowflake */ \"./src/js/Snowflake.ts\");\n\nvar Sky_1 = __webpack_require__(/*! ./Sky */ \"./src/js/Sky.ts\");\n\nvar Animation = function () {\n  function Animation(ctx, canvasElement, direction) {\n    this.ctx = ctx;\n    this.canvasElement = canvasElement;\n    this.Sky = new Sky_1.Sky(this.ctx, this.canvasElement);\n    this.snow = new Snowflake_1.SnowFlack(this.ctx, this.canvasElement);\n    this.direction = direction;\n    this.animate();\n  }\n\n  Animation.prototype.animate = function () {\n    var _this = this;\n\n    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);\n    this.snow.upadte(this.direction);\n    this.canvasElement.addEventListener('mousemove', function (e) {\n      if (e.movementX > 0) {\n        _this.direction = true;\n        console.log('left');\n      } else if (e.movementX < 0) {\n        _this.direction = false;\n        console.log('right');\n      }\n    });\n    requestAnimationFrame(function () {\n      _this.animate();\n    });\n  };\n\n  return Animation;\n}();\n\nexports.Animation = Animation;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvQW5pbWF0aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7QUFNSSxxQkFBWUEsR0FBWixFQUEwQ0MsYUFBMUMsRUFBMkVDLFNBQTNFLEVBQTRGO0FBQ3hGLFNBQUtGLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtDLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsU0FBS0UsR0FBTCxHQUFXLElBQUlDLFNBQUosQ0FBUSxLQUFLSixHQUFiLEVBQWtCLEtBQUtDLGFBQXZCLENBQVg7QUFDQSxTQUFLSSxJQUFMLEdBQVksSUFBSUMscUJBQUosQ0FBYyxLQUFLTixHQUFuQixFQUF3QixLQUFLQyxhQUE3QixDQUFaO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLSyxPQUFMO0FBQ0g7O0FBQ0RDO0FBQUE7O0FBRUksU0FBS1IsR0FBTCxDQUFTUyxTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCQyxNQUFNLENBQUNDLFVBQWhDLEVBQTRDRCxNQUFNLENBQUNFLFdBQW5EO0FBQ0EsU0FBS1AsSUFBTCxDQUFVUSxNQUFWLENBQWlCLEtBQUtYLFNBQXRCO0FBQ0EsU0FBS0QsYUFBTCxDQUFtQmEsZ0JBQW5CLENBQW9DLFdBQXBDLEVBQWlELFVBQUNDLENBQUQsRUFBYTtBQUUxRCxVQUFJQSxDQUFDLENBQUNDLFNBQUYsR0FBYyxDQUFsQixFQUFxQjtBQUNqQkMsYUFBSSxDQUFDZixTQUFMLEdBQWlCLElBQWpCO0FBQ0FnQixlQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBRUgsT0FKRCxNQUtLLElBQUlKLENBQUMsQ0FBQ0MsU0FBRixHQUFhLENBQWpCLEVBQW9CO0FBQ3JCQyxhQUFJLENBQUNmLFNBQUwsR0FBaUIsS0FBakI7QUFDQWdCLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDSDtBQUNKLEtBWEQ7QUFhQUMseUJBQXFCLENBQUM7QUFDbEJILFdBQUksQ0FBQ1YsT0FBTDtBQUVILEtBSG9CLENBQXJCO0FBSUgsR0FyQkQ7O0FBc0JKO0FBQUMsQ0FwQ0Q7O0FBQWFjLGlCQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xldC1pdC1zbm93Ly4vc3JjL2pzL0FuaW1hdGlvbi50cz83Y2VjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNub3dGbGFjayB9IGZyb20gJy4vU25vd2ZsYWtlJztcbmltcG9ydCB7IFNreSB9IGZyb20gJy4vU2t5JztcbmV4cG9ydCBjbGFzcyBBbmltYXRpb24ge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBwcml2YXRlIFNreTogU2t5O1xuICAgIHByaXZhdGUgc25vdzpTbm93RmxhY2s7XG4gICAgcHJpdmF0ZSBkaXJlY3Rpb246Ym9vbGVhbjtcbiAgICBjb25zdHJ1Y3RvcihjdHg6Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjYW52YXNFbGVtZW50OkhUTUxDYW52YXNFbGVtZW50LCBkaXJlY3Rpb246Ym9vbGVhbil7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQgPSBjYW52YXNFbGVtZW50O1xuICAgICAgICB0aGlzLlNreSA9IG5ldyBTa3kodGhpcy5jdHgsIHRoaXMuY2FudmFzRWxlbWVudClcbiAgICAgICAgdGhpcy5zbm93ID0gbmV3IFNub3dGbGFjayh0aGlzLmN0eCwgdGhpcy5jYW52YXNFbGVtZW50KTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cbiAgICBhbmltYXRlKCl7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICAgIHRoaXMuc25vdy51cGFkdGUodGhpcy5kaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGU6TW91c2VFdmVudCk9PntcblxuICAgICAgICAgICAgaWYgKGUubW92ZW1lbnRYID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbGVmdCcpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZS5tb3ZlbWVudFg8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyaWdodCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpPT57XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cbn0iXSwibmFtZXMiOlsiY3R4IiwiY2FudmFzRWxlbWVudCIsImRpcmVjdGlvbiIsIlNreSIsIlNreV8xIiwic25vdyIsIlNub3dmbGFrZV8xIiwiYW5pbWF0ZSIsIkFuaW1hdGlvbiIsImNsZWFyUmVjdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInVwYWR0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwibW92ZW1lbnRYIiwiX3RoaXMiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/Animation.ts\n");

/***/ }),

/***/ "./src/js/Main.ts":
/*!************************!*\
  !*** ./src/js/Main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Animation_1 = __webpack_require__(/*! ./Animation */ \"./src/js/Animation.ts\");\n\nvar LetItSnow = function () {\n  function LetItSnow() {\n    this.canvasElement = document.querySelector('canvas');\n    this.ctx = this.canvasElement.getContext('2d');\n    this.resize();\n    this.events();\n    this.direction = true;\n    this.Animation = new Animation_1.Animation(this.ctx, this.canvasElement, this.direction);\n  }\n\n  LetItSnow.prototype.resize = function () {\n    this.canvasElement.width = window.innerWidth;\n    this.canvasElement.height = window.innerHeight;\n    return this;\n  };\n\n  LetItSnow.prototype.events = function () {\n    var _this = this;\n\n    window.addEventListener('resize', function () {\n      _this.resize();\n    });\n  };\n\n  return LetItSnow;\n}();\n\n(function () {\n  new LetItSnow();\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvTWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBR0E7O0FBRUE7QUFPSTtBQUNJLFNBQUtBLGFBQUwsR0FBcUJDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUFyQjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxLQUFLSCxhQUFMLENBQW1CSSxVQUFuQixDQUE4QixJQUE5QixDQUFYO0FBRUEsU0FBS0MsTUFBTDtBQUNBLFNBQUtDLE1BQUw7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLElBQWpCO0FBRUEsU0FBS0MsU0FBTCxHQUFpQixJQUFJQyxxQkFBSixDQUFjLEtBQUtOLEdBQW5CLEVBQXdCLEtBQUtILGFBQTdCLEVBQTRDLEtBQUtPLFNBQWpELENBQWpCO0FBQ0g7O0FBQ0RHO0FBQ0ksU0FBS1YsYUFBTCxDQUFtQlcsS0FBbkIsR0FBMkJDLE1BQU0sQ0FBQ0MsVUFBbEM7QUFDQSxTQUFLYixhQUFMLENBQW1CYyxNQUFuQixHQUE0QkYsTUFBTSxDQUFDRyxXQUFuQztBQUNBLFdBQU8sSUFBUDtBQUNILEdBSkQ7O0FBS0FMO0FBQUE7O0FBQ0lFLFVBQU0sQ0FBQ0ksZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBaUM7QUFDN0JDLFdBQUksQ0FBQ1osTUFBTDtBQUNILEtBRkQ7QUFJSCxHQUxEOztBQU1KO0FBQUMsQ0E1QkQ7O0FBK0JBLENBQUM7QUFDRyxNQUFJSyxTQUFKO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovL2xldC1pdC1zbm93Ly4vc3JjL2pzL01haW4udHM/MDEyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTa3kgfSBmcm9tIFwiLi9Ta3lcIjtcbmltcG9ydCB7IFNub3dGbGFjayB9IGZyb20gJy4vU25vd2ZsYWtlJztcbmltcG9ydCB7IHNldHRpbmdzIH0gZnJvbSAnLi9zZXR0aW5ncyc7XG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tICcuL0FuaW1hdGlvbic7XG5cbmNsYXNzIExldEl0U25vdyB7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICAgIHByaXZhdGUgc25vdzogW2FueV07XG4gICAgcHJpdmF0ZSBtb3VzZUNvb3JkTmV3OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBkaXJlY3Rpb246IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBBbmltYXRpb246IEFuaW1hdGlvbjtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXNFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgICAgICB0aGlzLmV2ZW50cygpO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5BbmltYXRpb24gPSBuZXcgQW5pbWF0aW9uKHRoaXMuY3R4LCB0aGlzLmNhbnZhc0VsZW1lbnQsIHRoaXMuZGlyZWN0aW9uKTtcbiAgICB9XG4gICAgcmVzaXplKCl7XG4gICAgICAgIHRoaXMuY2FudmFzRWxlbWVudC53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZXZlbnRzKCl7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCgpPT57XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG59XG5cblxuKGZ1bmN0aW9uKCl7XG4gICAgbmV3IExldEl0U25vdygpXG59KSgpIl0sIm5hbWVzIjpbImNhbnZhc0VsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjdHgiLCJnZXRDb250ZXh0IiwicmVzaXplIiwiZXZlbnRzIiwiZGlyZWN0aW9uIiwiQW5pbWF0aW9uIiwiQW5pbWF0aW9uXzEiLCJMZXRJdFNub3ciLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfdGhpcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/Main.ts\n");

/***/ }),

/***/ "./src/js/Sky.ts":
/*!***********************!*\
  !*** ./src/js/Sky.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.Sky = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nvar Sky = function () {\n  function Sky(ctx, canvasElement) {\n    this.canvasElement = canvasElement;\n    this.ctx = ctx;\n    this.generateSky();\n  }\n\n  Sky.prototype.generateSky = function () {\n    this.gradient = this.ctx.createLinearGradient(window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);\n    this.gradient.addColorStop(0, settings_1.settings.sky.gradient[0]);\n    this.gradient.addColorStop(1, settings_1.settings.sky.gradient[1]);\n    this.ctx.fillStyle = this.gradient;\n    this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);\n  };\n\n  return Sky;\n}();\n\nexports.Sky = Sky;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvU2t5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7QUFJSSxlQUFZQSxHQUFaLEVBQTBDQyxhQUExQyxFQUF5RTtBQUNyRSxTQUFLQSxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLFNBQUtELEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtFLFdBQUw7QUFFSDs7QUFDREM7QUFDSSxTQUFLQyxRQUFMLEdBQWdCLEtBQUtKLEdBQUwsQ0FBU0ssb0JBQVQsQ0FBOEJDLE1BQU0sQ0FBQ0MsVUFBUCxHQUFrQixDQUFoRCxFQUFtRCxDQUFuRCxFQUFzREQsTUFBTSxDQUFDQyxVQUFQLEdBQWtCLENBQXhFLEVBQTJFRCxNQUFNLENBQUNFLFdBQWxGLENBQWhCO0FBQ0EsU0FBS0osUUFBTCxDQUFjSyxZQUFkLENBQTJCLENBQTNCLEVBQThCQyxvQkFBU0MsR0FBVCxDQUFhUCxRQUFiLENBQXNCLENBQXRCLENBQTlCO0FBQ0EsU0FBS0EsUUFBTCxDQUFjSyxZQUFkLENBQTJCLENBQTNCLEVBQThCQyxvQkFBU0MsR0FBVCxDQUFhUCxRQUFiLENBQXNCLENBQXRCLENBQTlCO0FBQ0EsU0FBS0osR0FBTCxDQUFTWSxTQUFULEdBQXFCLEtBQUtSLFFBQTFCO0FBQ0EsU0FBS0osR0FBTCxDQUFTYSxRQUFULENBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCUCxNQUFNLENBQUNDLFVBQS9CLEVBQTJDRCxNQUFNLENBQUNFLFdBQWxEO0FBQ0gsR0FORDs7QUFPSjtBQUFDLENBakJEOztBQUFhTSxXQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xldC1pdC1zbm93Ly4vc3JjL2pzL1NreS50cz9kZTI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNldHRpbmdzIH0gZnJvbSAnLi9zZXR0aW5ncyc7XG5leHBvcnQgY2xhc3MgU2t5e1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcbiAgICBncmFkaWVudDphbnk7XG4gICAgY29uc3RydWN0b3IoY3R4OkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY2FudmFzRWxlbWVudDpIVE1MQ2FudmFzRWxlbWVudCl7XG4gICAgICAgIHRoaXMuY2FudmFzRWxlbWVudCA9IGNhbnZhc0VsZW1lbnQ7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgICAgICB0aGlzLmdlbmVyYXRlU2t5KCk7XG5cbiAgICB9XG4gICAgZ2VuZXJhdGVTa3koKXtcbiAgICAgICAgdGhpcy5ncmFkaWVudCA9IHRoaXMuY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KHdpbmRvdy5pbm5lcldpZHRoLzIsIDAsIHdpbmRvdy5pbm5lcldpZHRoLzIsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgICAgIHRoaXMuZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIHNldHRpbmdzLnNreS5ncmFkaWVudFswXSk7XG4gICAgICAgIHRoaXMuZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIHNldHRpbmdzLnNreS5ncmFkaWVudFsxXSk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IHRoaXMuZ3JhZGllbnQ7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiY3R4IiwiY2FudmFzRWxlbWVudCIsImdlbmVyYXRlU2t5IiwiU2t5IiwiZ3JhZGllbnQiLCJjcmVhdGVMaW5lYXJHcmFkaWVudCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFkZENvbG9yU3RvcCIsInNldHRpbmdzXzEiLCJza3kiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/Sky.ts\n");

/***/ }),

/***/ "./src/js/Snowflake.ts":
/*!*****************************!*\
  !*** ./src/js/Snowflake.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\nexports.SnowFlack = void 0;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nvar maths_1 = __webpack_require__(/*! ./helpers/maths */ \"./src/js/helpers/maths.ts\");\n\nvar Sky_1 = __webpack_require__(/*! ./Sky */ \"./src/js/Sky.ts\");\n\nvar SnowFlack = function () {\n  function SnowFlack(ctx, canvasElement) {\n    this.ctx = ctx;\n    this.canvasElement = canvasElement;\n    this.snowList = [];\n    this.upadte(true);\n    return;\n  }\n\n  SnowFlack.prototype.generate = function () {\n    this.radius = (0, maths_1.randomizer)(settings_1.settings.snowflake.radius.min, settings_1.settings.snowflake.radius.max, false);\n    this.position = {\n      x: 0,\n      y: this.radius * 2\n    };\n    this.position.x = (0, maths_1.randomizer)(window.innerWidth / 20, window.innerWidth - window.innerWidth / 20, false);\n    this.snowList.push(this.position);\n  };\n\n  SnowFlack.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = 'white';\n    this.ctx.arc(this.snowflakPosition.x, this.snowflakPosition.y, this.radius, 0, 2 * Math.PI);\n    this.ctx.fill();\n    this.ctx.closePath();\n    return this;\n  };\n\n  SnowFlack.prototype.upadte = function (direction) {\n    new Sky_1.Sky(this.ctx, this.canvasElement);\n    this.generate();\n\n    for (var i = 0; i < this.snowList.length; i++) {\n      this.snowflakPosition = this.snowList[i];\n\n      if (direction == true) {\n        this.snowflakPosition.x += settings_1.settings.snowflake.speedX.min;\n      } else if (direction == false) {\n        this.snowflakPosition.x -= settings_1.settings.snowflake.speedX.min;\n      }\n\n      this.snowflakPosition.y += settings_1.settings.snowflake.speedY.min;\n      this.draw();\n    }\n\n    return this;\n  };\n\n  return SnowFlack;\n}();\n\nexports.SnowFlack = SnowFlack;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvU25vd2ZsYWtlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7QUFPSSxxQkFBWUEsR0FBWixFQUEwQ0MsYUFBMUMsRUFBeUU7QUFDckUsU0FBS0QsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxTQUFLQyxRQUFMLEdBQWUsRUFBZjtBQUNBLFNBQUtDLE1BQUwsQ0FBWSxJQUFaO0FBQ0E7QUFDSDs7QUFDREM7QUFDSSxTQUFLQyxNQUFMLEdBQWMsd0JBQVdDLG9CQUFTQyxTQUFULENBQW1CRixNQUFuQixDQUEwQkcsR0FBckMsRUFBMENGLG9CQUFTQyxTQUFULENBQW1CRixNQUFuQixDQUEwQkksR0FBcEUsRUFBeUUsS0FBekUsQ0FBZDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0I7QUFBQ0MsT0FBQyxFQUFDLENBQUg7QUFBTUMsT0FBQyxFQUFDLEtBQUtQLE1BQUwsR0FBWTtBQUFwQixLQUFoQjtBQUNBLFNBQUtLLFFBQUwsQ0FBY0MsQ0FBZCxHQUFrQix3QkFBV0UsTUFBTSxDQUFDQyxVQUFQLEdBQWtCLEVBQTdCLEVBQWlDRCxNQUFNLENBQUNDLFVBQVAsR0FBb0JELE1BQU0sQ0FBQ0MsVUFBUCxHQUFrQixFQUF2RSxFQUEyRSxLQUEzRSxDQUFsQjtBQUVBLFNBQUtaLFFBQUwsQ0FBY2EsSUFBZCxDQUFtQixLQUFLTCxRQUF4QjtBQUNILEdBTkQ7O0FBUUFOO0FBQ0ksU0FBS0osR0FBTCxDQUFTZ0IsU0FBVDtBQUNBLFNBQUtoQixHQUFMLENBQVNpQixTQUFULEdBQXFCLE9BQXJCO0FBQ0EsU0FBS2pCLEdBQUwsQ0FBU2tCLEdBQVQsQ0FBYSxLQUFLQyxnQkFBTCxDQUFzQlIsQ0FBbkMsRUFBcUMsS0FBS1EsZ0JBQUwsQ0FBc0JQLENBQTNELEVBQThELEtBQUtQLE1BQW5FLEVBQTJFLENBQTNFLEVBQThFLElBQUVlLElBQUksQ0FBQ0MsRUFBckY7QUFDQSxTQUFLckIsR0FBTCxDQUFTc0IsSUFBVDtBQUNBLFNBQUt0QixHQUFMLENBQVN1QixTQUFUO0FBQ0EsV0FBTyxJQUFQO0FBQ0gsR0FQRDs7QUFRQW5CLHlDQUFPb0IsU0FBUCxFQUF3QjtBQUVwQixRQUFJQyxTQUFKLENBQVEsS0FBS3pCLEdBQWIsRUFBa0IsS0FBS0MsYUFBdkI7QUFDQSxTQUFLeUIsUUFBTDs7QUFHQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS3pCLFFBQUwsQ0FBYzBCLE1BQWxDLEVBQTBDRCxDQUFDLEVBQTNDLEVBQStDO0FBRTNDLFdBQUtSLGdCQUFMLEdBQXdCLEtBQUtqQixRQUFMLENBQWN5QixDQUFkLENBQXhCOztBQUdBLFVBQUlILFNBQVMsSUFBSSxJQUFqQixFQUF1QjtBQUNuQixhQUFLTCxnQkFBTCxDQUFzQlIsQ0FBdEIsSUFBMkJMLG9CQUFTQyxTQUFULENBQW1Cc0IsTUFBbkIsQ0FBMEJyQixHQUFyRDtBQUNILE9BRkQsTUFHSyxJQUFHZ0IsU0FBUyxJQUFJLEtBQWhCLEVBQXVCO0FBQ3hCLGFBQUtMLGdCQUFMLENBQXNCUixDQUF0QixJQUEyQkwsb0JBQVNDLFNBQVQsQ0FBbUJzQixNQUFuQixDQUEwQnJCLEdBQXJEO0FBQ0g7O0FBQ0QsV0FBS1csZ0JBQUwsQ0FBc0JQLENBQXRCLElBQTJCTixvQkFBU0MsU0FBVCxDQUFtQnVCLE1BQW5CLENBQTBCdEIsR0FBckQ7QUFFQSxXQUFLdUIsSUFBTDtBQUVIOztBQUVELFdBQU8sSUFBUDtBQUNILEdBeEJEOztBQXlCSjtBQUFDLENBdkREOztBQUFhQyxpQkFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZXQtaXQtc25vdy8uL3NyYy9qcy9Tbm93Zmxha2UudHM/ZjU4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzZXR0aW5ncyB9IGZyb20gJy4vc2V0dGluZ3MnO1xuaW1wb3J0IHsgcmFuZG9taXplciB9IGZyb20gJy4vaGVscGVycy9tYXRocyc7XG5pbXBvcnQgeyBTa3kgfSBmcm9tICcuL1NreSc7XG5leHBvcnQgY2xhc3MgU25vd0ZsYWNrIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG4gICAgcHJpdmF0ZSBwb3NpdGlvbjoge3g6bnVtYmVyLCB5Om51bWJlcn07XG4gICAgcHJpdmF0ZSByYWRpdXM6IG51bWJlcjtcbiAgICBwcml2YXRlIHNub3dMaXN0OiBbXTtcbiAgICBwcml2YXRlIHNub3dmbGFrUG9zaXRpb246IGFueTtcbiAgICBjb25zdHJ1Y3RvcihjdHg6Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjYW52YXNFbGVtZW50OkhUTUxDYW52YXNFbGVtZW50KXtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIHRoaXMuY2FudmFzRWxlbWVudCA9IGNhbnZhc0VsZW1lbnQ7XG4gICAgICAgIHRoaXMuc25vd0xpc3Q9IFsgXTtcbiAgICAgICAgdGhpcy51cGFkdGUodHJ1ZSk7XG4gICAgICAgIHJldHVybiBcbiAgICB9XG4gICAgZ2VuZXJhdGUoKXtcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYW5kb21pemVyKHNldHRpbmdzLnNub3dmbGFrZS5yYWRpdXMubWluLCBzZXR0aW5ncy5zbm93Zmxha2UucmFkaXVzLm1heCwgZmFsc2UpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge3g6MCwgeTp0aGlzLnJhZGl1cyoyfTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gcmFuZG9taXplcih3aW5kb3cuaW5uZXJXaWR0aC8yMCwgd2luZG93LmlubmVyV2lkdGggLSB3aW5kb3cuaW5uZXJXaWR0aC8yMCwgZmFsc2UpO1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgdGhpcy5zbm93TGlzdC5wdXNoKHRoaXMucG9zaXRpb24pO1xuICAgIH1cbiAgICBcbiAgICBkcmF3KCl7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAnd2hpdGUnO1xuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy5zbm93Zmxha1Bvc2l0aW9uLngsdGhpcy5zbm93Zmxha1Bvc2l0aW9uLnksIHRoaXMucmFkaXVzLCAwLCAyKk1hdGguUEkpO1xuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdXBhZHRlKGRpcmVjdGlvbjpib29sZWFuKXtcbiAgICAgICAgXG4gICAgICAgIG5ldyBTa3kodGhpcy5jdHgsIHRoaXMuY2FudmFzRWxlbWVudCk7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGUoKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc25vd0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5zbm93Zmxha1Bvc2l0aW9uID0gdGhpcy5zbm93TGlzdFtpXTsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Zmxha1Bvc2l0aW9uLnggKz0gc2V0dGluZ3Muc25vd2ZsYWtlLnNwZWVkWC5taW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGRpcmVjdGlvbiA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc25vd2ZsYWtQb3NpdGlvbi54IC09IHNldHRpbmdzLnNub3dmbGFrZS5zcGVlZFgubWluO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zbm93Zmxha1Bvc2l0aW9uLnkgKz0gc2V0dGluZ3Muc25vd2ZsYWtlLnNwZWVkWS5taW47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59Il0sIm5hbWVzIjpbImN0eCIsImNhbnZhc0VsZW1lbnQiLCJzbm93TGlzdCIsInVwYWR0ZSIsIlNub3dGbGFjayIsInJhZGl1cyIsInNldHRpbmdzXzEiLCJzbm93Zmxha2UiLCJtaW4iLCJtYXgiLCJwb3NpdGlvbiIsIngiLCJ5Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsInB1c2giLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJhcmMiLCJzbm93Zmxha1Bvc2l0aW9uIiwiTWF0aCIsIlBJIiwiZmlsbCIsImNsb3NlUGF0aCIsImRpcmVjdGlvbiIsIlNreV8xIiwiZ2VuZXJhdGUiLCJpIiwibGVuZ3RoIiwic3BlZWRYIiwic3BlZWRZIiwiZHJhdyIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/Snowflake.ts\n");

/***/ }),

/***/ "./src/js/helpers/maths.ts":
/*!*********************************!*\
  !*** ./src/js/helpers/maths.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.randomizer = void 0;\n\nfunction randomizer(min, max, ciel) {\n  if (ciel) {\n    return Math.ceil(min + Math.random() * (max - min));\n  }\n\n  return Math.floor(min + Math.random() * (max - min));\n}\n\nexports.randomizer = randomizer;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvaGVscGVycy9tYXRocy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLFNBQWdCQSxVQUFoQixDQUEyQkMsR0FBM0IsRUFBdUNDLEdBQXZDLEVBQWtEQyxJQUFsRCxFQUE4RDtBQUMxRCxNQUFJQSxJQUFKLEVBQVU7QUFDTixXQUFPQyxJQUFJLENBQUNDLElBQUwsQ0FBVUosR0FBRyxHQUFDRyxJQUFJLENBQUNFLE1BQUwsTUFBZUosR0FBRyxHQUFDRCxHQUFuQixDQUFkLENBQVA7QUFDSDs7QUFDRCxTQUFPRyxJQUFJLENBQUNHLEtBQUwsQ0FBV04sR0FBRyxHQUFDRyxJQUFJLENBQUNFLE1BQUwsTUFBZUosR0FBRyxHQUFDRCxHQUFuQixDQUFmLENBQVA7QUFDSDs7QUFMRE8sa0JBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0LWl0LXNub3cvLi9zcmMvanMvaGVscGVycy9tYXRocy50cz8xZDdhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiByYW5kb21pemVyKG1pbjpudW1iZXIsIG1heDpudW1iZXIsY2llbDpCb29sZWFuKSB7XG4gICAgaWYgKGNpZWwpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChtaW4rTWF0aC5yYW5kb20oKSoobWF4LW1pbikpO1xuICAgIH1cbiAgICByZXR1cm4gTWF0aC5mbG9vcihtaW4rTWF0aC5yYW5kb20oKSoobWF4LW1pbiApKTtcbn0iXSwibmFtZXMiOlsicmFuZG9taXplciIsIm1pbiIsIm1heCIsImNpZWwiLCJNYXRoIiwiY2VpbCIsInJhbmRvbSIsImZsb29yIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/helpers/maths.ts\n");

/***/ }),

/***/ "./src/js/settings.ts":
/*!****************************!*\
  !*** ./src/js/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  sky: {\n    gradient: [\"hsl(219,93%,11%)\", \"hsl(219,100%,19%)\"]\n  },\n  snowflake: {\n    radius: {\n      min: 2,\n      max: 12\n    },\n    opacity: {\n      min: 0.5,\n      max: 0.9\n    },\n    speedX: {\n      min: 1,\n      max: 4\n    },\n    speedY: {\n      min: 1,\n      max: 6\n    }\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztBQUNwQkMsS0FBRyxFQUFFO0FBQ0RDLFlBQVEsRUFBRSxDQUFDLGtCQUFELEVBQXFCLG1CQUFyQjtBQURULEdBRGU7QUFJcEJDLFdBQVMsRUFBRTtBQUNQQyxVQUFNLEVBQUU7QUFBQ0MsU0FBRyxFQUFFLENBQU47QUFBU0MsU0FBRyxFQUFFO0FBQWQsS0FERDtBQUVQQyxXQUFPLEVBQUU7QUFBQ0YsU0FBRyxFQUFFLEdBQU47QUFBV0MsU0FBRyxFQUFFO0FBQWhCLEtBRkY7QUFHUEUsVUFBTSxFQUFFO0FBQUNILFNBQUcsRUFBRSxDQUFOO0FBQVNDLFNBQUcsRUFBRTtBQUFkLEtBSEQ7QUFJUEcsVUFBTSxFQUFFO0FBQUNKLFNBQUcsRUFBRSxDQUFOO0FBQVNDLFNBQUcsRUFBRTtBQUFkO0FBSkQ7QUFKUyxDQUFYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0LWl0LXNub3cvLi9zcmMvanMvc2V0dGluZ3MudHM/YzQyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgc2t5OiB7XG4gICAgICAgIGdyYWRpZW50OiBbXCJoc2woMjE5LDkzJSwxMSUpXCIsIFwiaHNsKDIxOSwxMDAlLDE5JSlcIl1cbiAgICB9LFxuICAgIHNub3dmbGFrZToge1xuICAgICAgICByYWRpdXM6IHttaW46IDIsIG1heDogMTJ9LFxuICAgICAgICBvcGFjaXR5OiB7bWluOiAwLjUsIG1heDogMC45fSxcbiAgICAgICAgc3BlZWRYOiB7bWluOiAxLCBtYXg6IDR9LFxuICAgICAgICBzcGVlZFk6IHttaW46IDEsIG1heDogNn0sXG4gICAgfVxufSJdLCJuYW1lcyI6WyJleHBvcnRzIiwic2t5IiwiZ3JhZGllbnQiLCJzbm93Zmxha2UiLCJyYWRpdXMiLCJtaW4iLCJtYXgiLCJvcGFjaXR5Iiwic3BlZWRYIiwic3BlZWRZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/settings.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGV0LWl0LXNub3cvLi9zcmMvc2Nzcy9tYWluLnNjc3M/ZjdlNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/Main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunklet_it_snow"] = self["webpackChunklet_it_snow"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/Main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;