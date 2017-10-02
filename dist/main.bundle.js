webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  margin: 0%;\r\n}\r\n\r\n.container {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  display: -ms-flexbox;\r\n  display: -webkit-flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-flow: row wrap;\r\n          flex-flow: row wrap;\r\n  min-height: 10px;\r\n  -ms-flex-direction: column;\r\n      flex-direction: column;\r\n}\r\n\r\n.sidenav-container {\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 1px solid rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.sidenav-md {\r\n  padding: 20px;\r\n}\r\n\r\n.side-nav-button {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  height: 100%;\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  background-color: transparent;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n     <router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        router.navigate(['games']);
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__games_pong_pong_component__ = __webpack_require__("../../../../../src/app/games/pong/pong.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__games_games_component__ = __webpack_require__("../../../../../src/app/games/games.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//main components



var routes = [
    {
        path: 'pong',
        component: __WEBPACK_IMPORTED_MODULE_7__games_pong_pong_component__["a" /* PongComponent */],
    },
    {
        path: 'games',
        component: __WEBPACK_IMPORTED_MODULE_8__games_games_component__["a" /* GamesComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__games_pong_pong_component__["a" /* PongComponent */],
            __WEBPACK_IMPORTED_MODULE_8__games_games_component__["a" /* GamesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MdGridListModule */],
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/games/games.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-card {\r\n  width: 185px;\r\n}\r\n\r\n.example-header-image {\r\n  background-size: cover;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/games/games.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n<md-grid-list cols=\"3\" rowHeight=\"1:1\">\r\n\r\n  <md-grid-tile *ngFor=\"let game of myGames\">\r\n    <md-card class=\"example-card\">\r\n      <md-card-header>\r\n        <div md-card-avatar class=\"example-header-image\" [ngStyle]=\"{'background-image': 'url(' + game.iconSmall + ')'}\"></div>\r\n        <md-card-title>{{game.title}}</md-card-title>\r\n        <md-card-subtitle>{{game.id}}</md-card-subtitle>\r\n      </md-card-header>\r\n      <img md-card-image src=\"{{game.icon}}\" alt=\"Photo of a pong game\">\r\n      <md-card-content>\r\n        <p>\r\n          {{game.description}}\r\n        </p>\r\n      </md-card-content>\r\n      <md-card-actions>\r\n        <button md-button (click)=\"loadGame(game.url)\">PLAY</button>\r\n      </md-card-actions>\r\n    </md-card>\r\n\r\n  </md-grid-tile>\r\n</md-grid-list>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/games/games.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__games__ = __webpack_require__("../../../../../src/app/games/games.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GamesComponent = (function () {
    function GamesComponent(router) {
        this.router = router;
        this.myGames = __WEBPACK_IMPORTED_MODULE_2__games__["a" /* games */];
        this.msg = [];
    }
    GamesComponent.prototype.ngOnInit = function () {
    };
    GamesComponent.prototype.loadGame = function (url) {
        if (url) {
            this.router.navigate([url]);
        }
    };
    return GamesComponent;
}());
GamesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/games/games.component.html"),
        styles: [__webpack_require__("../../../../../src/app/games/games.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
], GamesComponent);

var _a;
//# sourceMappingURL=games.component.js.map

/***/ }),

/***/ "../../../../../src/app/games/games.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return games; });
//Mock Game Data
var games = [
    {
        title: 'Pong',
        description: 'This is a sample brick breaking game.',
        icon: '/assets/pong.png',
        iconAlt: '/assets/pong.png',
        iconSmall: '/assets/pong.png',
        url: '/pong',
        extra: '',
        id: 1
    },
    {
        title: 'Empty',
        description: 'Game Description goes here',
        icon: '/assets/pong.png',
        iconAlt: '/assets/pong.png',
        iconSmall: '/assets/empty.png',
        url: '',
        extra: '',
        id: 2
    },
    {
        title: 'Empty',
        description: 'Game Description goes here',
        icon: '/assets/pong.png',
        iconAlt: '/assets/pong.png',
        iconSmall: '/assets/empty.png',
        url: '',
        extra: '',
        id: 3
    },
    {
        title: 'Empty',
        description: 'Game Description goes here',
        icon: '/assets/pong.png',
        iconAlt: '/assets/pong.png',
        iconSmall: '/assets/empty.png',
        url: '',
        extra: '',
        id: 4
    },
    {
        title: 'Empty',
        description: 'Game Description goes here',
        icon: '/assets/pong.png',
        iconAlt: '/assets/pong.png',
        iconSmall: '/assets/empty.png',
        url: '',
        extra: '',
        id: 5
    },
    {
        title: 'Empty',
        description: 'Game Description goes here',
        icon: '/assets/pong.png',
        iconAlt: '/assets/pong.png',
        iconSmall: '/assets/empty.png',
        url: '',
        extra: '',
        id: 6
    }
];
//# sourceMappingURL=games.js.map

/***/ }),

/***/ "../../../../../src/app/games/pong/model/Ball.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ball; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_excalibur_dist_excalibur__ = __webpack_require__("../../../../excalibur/dist/excalibur.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_excalibur_dist_excalibur___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_excalibur_dist_excalibur__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Ball = (function (_super) {
    __extends(Ball, _super);
    function Ball(x, y, width, height) {
        return _super.call(this, x, y, width, height) || this;
    }
    return Ball;
}(__WEBPACK_IMPORTED_MODULE_0_excalibur_dist_excalibur__["Actor"]));

//# sourceMappingURL=Ball.js.map

/***/ }),

/***/ "../../../../../src/app/games/pong/model/Paddle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Paddle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_excalibur_dist_excalibur__ = __webpack_require__("../../../../excalibur/dist/excalibur.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_excalibur_dist_excalibur___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_excalibur_dist_excalibur__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Paddle = (function (_super) {
    __extends(Paddle, _super);
    function Paddle(x, y, width, height) {
        return _super.call(this, x, y, width, height) || this;
    }
    return Paddle;
}(__WEBPACK_IMPORTED_MODULE_0_excalibur_dist_excalibur__["Actor"]));

//# sourceMappingURL=Paddle.js.map

/***/ }),

/***/ "../../../../../src/app/games/pong/pong.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/games/pong/pong.component.html":
/***/ (function(module, exports) {

module.exports = "\n<canvas id=\"myGame\"></canvas>\n\n<button md-button (click)=\"goHome()\">BACK</button>"

/***/ }),

/***/ "../../../../../src/app/games/pong/pong.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PongComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_excalibur__ = __webpack_require__("../../../../excalibur/dist/excalibur.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_excalibur___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_excalibur__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Ball__ = __webpack_require__("../../../../../src/app/games/pong/model/Ball.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_Paddle__ = __webpack_require__("../../../../../src/app/games/pong/model/Paddle.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PongComponent = (function () {
    function PongComponent() {
        this.title = 'My Game!';
        this.bricks = [];
    }
    PongComponent.prototype.goHome = function () {
        window.location.href = '/';
    };
    PongComponent.prototype.ngOnInit = function () {
        this.balls = [];
        this.game = new __WEBPACK_IMPORTED_MODULE_1_excalibur__["Engine"]({
            width: window.screen.width / 1.5,
            height: window.screen.height / 1.5
        });
        this.game.start();
        this.addPaddle();
        this.setPaddleMovement();
        this.addBricks();
        for (var i = 0; i < 20; i++) {
            var ball = this.addBall();
            ball.description = "a simple ball";
            this.balls.push(ball);
        }
        this.game.add(this.setBallEvents(this.balls.pop()));
        //let ball = this.addBall();
        //this.setBallEvents(this.addBall());
    };
    PongComponent.prototype.addPaddle = function () {
        this.paddle = new __WEBPACK_IMPORTED_MODULE_3__model_Paddle__["a" /* Paddle */](150, this.game.getDrawHeight() - 40, 200, 20);
        this.paddle.color = __WEBPACK_IMPORTED_MODULE_1_excalibur__["Color"].Chartreuse;
        this.paddle.collisionType = __WEBPACK_IMPORTED_MODULE_1_excalibur__["CollisionType"].Fixed;
        this.game.add(this.paddle);
    };
    PongComponent.prototype.setPaddleMovement = function () {
        var _this = this;
        this.game.input.pointers.primary.on('move', function (event) {
            //pad.pos.x = event.x;
            _this.paddle.pos.x = event.x;
        });
    };
    PongComponent.prototype.addBall = function () {
        var ball = new __WEBPACK_IMPORTED_MODULE_2__model_Ball__["a" /* Ball */](this.getRandomStartPosition(), 300, 15, 15);
        ball.color = this.getRandomColor();
        ball.vel.setTo(150, 150);
        ball.collisionType = __WEBPACK_IMPORTED_MODULE_1_excalibur__["CollisionType"].Passive;
        return ball;
    };
    PongComponent.prototype.addBricks = function () {
        var _this = this;
        // Padding between bricks
        var padding = 5; // px
        var xoffset = 35; // x-offset
        var yoffset = 20; // y-offset
        var columns = 10;
        var rows = 5;
        var brickColor = [__WEBPACK_IMPORTED_MODULE_1_excalibur__["Color"].Violet, __WEBPACK_IMPORTED_MODULE_1_excalibur__["Color"].Orange, __WEBPACK_IMPORTED_MODULE_1_excalibur__["Color"].Yellow];
        // Individual brick width with padding factored in
        var brickWidth = this.game.getDrawWidth() / columns - padding - padding / columns; // px
        var brickHeight = 10; // px
        for (var j = 0; j < rows; j++) {
            for (var i = 0; i < columns; i++) {
                this.bricks.push(new __WEBPACK_IMPORTED_MODULE_1_excalibur__["Actor"](xoffset + i * (brickWidth + padding) + padding, yoffset + j * (brickHeight + padding) + padding, brickWidth, brickHeight, brickColor[j % brickColor.length]));
            }
        }
        this.bricks.forEach(function (brick) {
            // Make sure that bricks can participate in collisions
            brick.collisionType = __WEBPACK_IMPORTED_MODULE_1_excalibur__["CollisionType"].Active;
            // Add the brick to the current scene to be drawn
            _this.game.add(brick);
        });
    };
    PongComponent.prototype.setBallEvents = function (ball) {
        var _this = this;
        ball.on('update', function (event) {
            if (event.other instanceof __WEBPACK_IMPORTED_MODULE_2__model_Ball__["a" /* Ball */]) {
                return;
            }
            if (event.target.pos.x < (event.target.getWidth() / 2)) {
                event.target.vel.x *= -1;
            }
            // If the ball collides with the right side
            // of the screen reverse the x velocity
            if (event.target.pos.x + (event.target.getWidth() / 2) > _this.game.getDrawWidth()) {
                event.target.vel.x *= -1;
            }
            // If the ball collides with the top
            // of the screen reverse the y velocity
            if (event.target.pos.y < (event.target.getHeight() / 2)) {
                event.target.vel.y *= -1;
            }
        });
        ball.on('collision', function (event) {
            if (event.other instanceof __WEBPACK_IMPORTED_MODULE_2__model_Ball__["a" /* Ball */]) {
                return;
            }
            if (_this.bricks.indexOf(event.other) > -1) {
                // kill removes an actor from the current scene
                // therefore it will no longer be drawn or updated
                if (!event.other.isKilled()) {
                    event.other.kill();
                    if (event.other.isKilled()) {
                        if (_this.balls.length > 0) {
                            _this.game.add(_this.setBallEvents(_this.balls.pop()));
                        }
                    }
                }
                if (ball.vel.x > 0) {
                    ball.vel.x += 15;
                }
                else {
                    ball.vel.x -= 15;
                }
                if (ball.vel.y > 0) {
                    ball.vel.y += 15;
                }
                else {
                    ball.vel.y -= 15;
                }
                //this.game.add(this.balls.pop());
                // if(this.balls.length <= 5){
                //   this.setBallEvents(this.addBall());
                // }
            }
            var intersection = event.intersection.normalize();
            // The largest component of intersection is our axis to flip
            if (Math.abs(intersection.x) > Math.abs(intersection.y)) {
                ball.vel.x *= -1;
            }
            else {
                ball.vel.y *= -1;
            }
        });
        ball.on('exitviewport', function () {
            //alert('You lose!');
            //do stuff
            ball.kill();
        });
        return ball;
    };
    PongComponent.prototype.getRandomColor = function () {
        var rand = Math.floor(Math.random() * 4) + 1;
        if (rand == 1) {
            return __WEBPACK_IMPORTED_MODULE_1_excalibur__["Color"].Red;
        }
        else if (rand == 2) {
            return __WEBPACK_IMPORTED_MODULE_1_excalibur__["Color"].Green;
        }
        else if (rand == 3) {
            return __WEBPACK_IMPORTED_MODULE_1_excalibur__["Color"].Yellow;
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_excalibur__["Color"].Cyan;
        }
    };
    PongComponent.prototype.getRandomStartPosition = function () {
        var rand = Math.floor(Math.random() * 400) + 50;
        return rand;
    };
    return PongComponent;
}());
PongComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/games/pong/pong.component.html"),
        styles: [__webpack_require__("../../../../../src/app/games/pong/pong.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PongComponent);

//# sourceMappingURL=pong.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map