(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"../../assets/images/banners/team.jpg\" alt=\"Sana's Logo\" class=\"full-img mb-4\">\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col lemon-center\">\r\n      <h1>About</h1>\r\n      <p>Lemon Zest is an upcoming festival in the DMV area bringing together fine artists, music acts, and folks in the\r\n        community. When the world shut down this past year, we wanted a way to give back to the community that made us\r\n        the artists that we are today. The name Lemon Zest Festival comes from the phrase “when life gives you lemons,\r\n        you make lemonade.”</p>\r\n      <p>Lemon Zest is a music and arts festival for all ages. We hope to bring together young budding and seasoned\r\n        artists together to experience each other’s art and tunes. We also hope to highlight community organizations and\r\n        businesses whose work we admire and align with our values of joy, community, and eclecticism.</p>\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n  <hr>\r\n  <br>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col lemon-center\">\r\n      <h1>Meet The Team!</h1>\r\n      <p>The Lemon Zest team is made up of local artists and musicians, who know and are in love with the music and art\r\n        scene within the DMV area.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div *ngFor=\"let profile of profiles\" class=\"col-sm-12 col-md-4\">\r\n      <div class=\"card lemon-center d-block pt-5 pb-5 mb-5\">\r\n        <img class=\"rounded-circle profile mb-3\" [src]=\"profile.profilePath\" alt=\"Sana\" style=\"width:100px\">\r\n        <h2 class=\"lemon-zest-black\">{{ profile.name }}</h2>\r\n        <p class=\"title\">{{ profile.role }}</p>\r\n        <a [href]=\"profile.facebook\" target=\"_blank\">\r\n          <i class=\"fa fa-facebook lemon-zest-blue icon-content\"></i>\r\n        </a>\r\n        <a [href]=\"profile.instagram\" target=\"_blank\">\r\n          <i class=\"fa fa-instagram lemon-zest-blue icon-content\"></i>\r\n        </a>\r\n        <a [href]=\"profile.twitter\" target=\"_blank\">\r\n          <i class=\"fa fa-twitter lemon-zest-blue icon-content\"></i>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navigation-bar></app-navigation-bar>\r\n<div class=\"header-footer-margin\"></div>\r\n<main [@routerTransition]=\"getState(o)\">\r\n  <router-outlet #o=\"outlet\"></router-outlet>\r\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/artists/artists.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/artists/artists.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"../../assets/images/banners/artist.jpg\" alt=\"Sana's Logo\" class=\"full-img mb-4\">\r\n\r\n<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col lemon-center\">\r\n      <h1>Artist Submissions</h1>\r\n      <!-- <p>Are you interested in participating in Lemon Zest 2023? We started this festival with the artists of the DMV\r\n        area at the forefront. After nearly two years of no shows or exhibits, we wanted to create the perfect\r\n        opportunity for artists to get back into the swing of things! If you're looking to be a performing or gallery\r\n        artist, here's your chance! Below we have provided two forms to gauge interest and ultimately choose who will be\r\n        selected to participate.</p> -->\r\n        <p>\r\n          Artist submissions for Lemon Zest 2023 are now closed. Come back next year to submit an application for Lemon Zest 2024!\r\n        </p>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- <div class=\"container mt-5\"> -->\r\n  <!-- Artist Nav tabs -->\r\n  <!-- <ul class=\"nav nav-tabs nav-justified\" role=\"tablist\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#performing\">Performing Artist</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" data-toggle=\"tab\" href=\"#gallery\">Gallery Artist</a>\r\n    </li>\r\n  </ul> -->\r\n  <!-- Tab panes -->\r\n  <!-- <div class=\"tab-content\">\r\n    <div id=\"performing\" class=\"container tab-pane active text-center\"><br>\r\n      <p>If the Performing Artist Form is not loading correctly for you, you can access it by <a class=\"lemon-zest-blue casablanca\" href=\"https://forms.gle/wnETaopgvGK8j8UL9?embedded=true\" target=\"_blank\">clicking here</a>!</p>\r\n      <iframe\r\n        scrolling=\"yes\"\r\n        src=\"https://forms.gle/wnETaopgvGK8j8UL9?embedded=true\"\r\n        width=\"100%\" [height]=\"iframeHeights.pHeight\" frameborder=\"0\">Loading…</iframe>\r\n    </div>\r\n    <div id=\"gallery\" class=\"container tab-pane fade text-center\"><br>\r\n      <p>If the Gallery Artist Form is not loading correctly for you, you can access it by <a class=\"lemon-zest-blue casablanca\" href=\"https://forms.gle/ytdSdFovrqQEh2nM6?embedded=true\" target=\"_blank\">clicking here</a>!</p>\r\n      <iframe\r\n        scrolling=\"yes\"\r\n        src=\"https://forms.gle/ytdSdFovrqQEh2nM6?embedded=true\"\r\n        width=\"100%\" [height]=\"iframeHeights.gHeight\" frameborder=\"0\">Loading…</iframe>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n<div class=\"container\">\r\n  <br>\r\n  <hr>\r\n  <br>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col lemon-center\">\r\n      <h1>Lemon Zest 2023 Line-Up</h1>\r\n      <a class=\"lemon-zest-blue\" href=\"https://www.instagram.com/tmibandofficial/\" target=\"_blank\">\r\n        T.M.I. BAND\r\n      </a>\r\n      <br>\r\n      <a class=\"lemon-zest-blue\" href=\"https://www.instagram.com/sometime_lastnight/\" target=\"_blank\">\r\n        SOMETIME LAST NIGHT\r\n      </a>\r\n      <br>\r\n      <a class=\"lemon-zest-blue\" href=\"https://www.instagram.com/official333am/\" target=\"_blank\">\r\n        BLASÉ & MIKEWAVE\r\n      </a>\r\n      <br>\r\n      <a class=\"lemon-zest-blue\" href=\"https://www.instagram.com/terrapinrecordlabel/\" target=\"_blank\">\r\n        TERRAPIN RECORD LABEL\r\n      </a>\r\n      <br>\r\n      <a class=\"lemon-zest-blue\" href=\"https://www.instagram.com/thevioletsarered/\" target=\"_blank\">\r\n        VIOLETS ARE RED\r\n      </a>\r\n      <br>\r\n      <a class=\"lemon-zest-blue\" href=\"https://www.instagram.com/lisztomania_05/\" target=\"_blank\">\r\n        LISZTOMANIA\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <br>\r\n  <hr>\r\n  <br>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col lemon-center\">\r\n      <h1>Lemon Zest 2022 Line-Up</h1>\r\n      <a class=\"lemon-zest-blue\" href=\"https://www.instagram.com/itselomel/\" target=\"_blank\">\r\n        ELOMEL\r\n      </a>\r\n      <br>\r\n      <a class=\"lemon-zest-blue\" href=\"https://www.instagram.com/official333am/\" target=\"_blank\">\r\n        3:33AM\r\n      </a>\r\n      <br>\r\n      <a class=\"lemon-zest-blue\" href=\"https://www.instagram.com/rms_nj/\" target=\"_blank\">\r\n        RMS\r\n      </a>\r\n      <br>\r\n      <a class=\"lemon-zest-blue\" href=\"https://www.instagram.com/kingsofthewildthingsband/\" target=\"_blank\">\r\n        KINGS OF THE WILD THINGS\r\n      </a>\r\n      <br>\r\n      <a class=\"lemon-zest-blue\" href=\"https://www.instagram.com/heartbreak_theband/\" target=\"_blank\">\r\n        HEARTBREAK\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"../../assets/images/banners/blogger.png\" alt=\"Sana's Logo\" class=\"full-img mb-4\">\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col lemon-center\">\r\n      <h1>Blog</h1>\r\n      <p>Catch up with our latest write-ups to discover up and coming artists!</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div *ngFor=\"let writeUp of writeUps | async\" class=\"card d-block pt-5 pb-5 mb-5\">\r\n        <div class=\"pl-5 pr-5 mb-5\">\r\n          <i id=\"{{ formatTitle(writeUp.title) }}\" class=\"fa fa-quote-left\"></i>\r\n        </div>\r\n        <div class=\"pl-5 pr-5\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-12 col-md-4\">\r\n              <img *ngIf=\"writeUp.imageURL\" [src]=\"writeUp.imageURL\" class=\"pb-3\" onerror=\"this.onerror=null;this.src='assets/noimage.jpg';\"  width=\"100%\" />\r\n            </div>\r\n            <div class=\"col-xs-12 col-md-8\">\r\n              <h2 *ngIf=\"writeUp.title\" class=\"pb-3\">{{ writeUp.title }}</h2>\r\n              <p *ngIf=\"writeUp.writeUp\" class=\"lemon-message\">{{ writeUp.writeUp }}</p>\r\n              <h3 *ngIf=\"writeUp.pullQuote\" class=\"pt-3 pb-3\">\"{{ writeUp.pullQuote }}\"</h3>\r\n              <p *ngIf=\"writeUp.writeUp2\" class=\"lemon-message\">{{ writeUp.writeUp2 }}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"text-right mt-5 pl-5 pr-5\">\r\n          <span *ngIf=\"writeUp.author\" class=\"lemon-signature\">{{ writeUp.author }}</span>\r\n        </div>\r\n        <div class=\"text-right pl-5 pr-5\">\r\n          <span *ngIf=\"writeUp.date\" class=\"lemon-date\">{{ writeUp.date | date: 'medium' }}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/community/community.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/community/community.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"../../assets/images/banners/community.jpg\" alt=\"Sana's Logo\" class=\"full-img mb-4\">\r\n<div class=\"container\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12 lemon-center\">\r\n      <h1>Lemon Zest 2022 Footage</h1>\r\n    </div>\r\n\r\n    <div class=\"col-12 lemon-center mt-3\">\r\n      <iframe width=\"100%\" height=\"500px\" src=\"https://www.youtube.com/embed/videoseries?list=PLYUabnvUvJuCgiiWBH3bceXpLfTVrqQWS\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n  <hr>\r\n  <br>\r\n\r\n  <div class=\"row lemon-center\">\r\n    <div class=\"offset-xs-0 offset-md-2 col-xs-12 col-md-8 lemon-center\">\r\n      <h1 class=\"mb-5\">Lemon Zest 2022 Gallery</h1>\r\n    </div>\r\n\r\n    <div class=\"col-xs-12 col-md-4 lemon-center\">\r\n      <img src=\"../../assets/images/lzf22/misc-1.jpg\"\r\n        class=\"w-100 pr-3 pl-3 pt-3 pb-3\">\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-4 lemon-center\">\r\n      <img src=\"../../assets/images/lzf22/misc-2.jpg\"\r\n        class=\"w-100 pr-3 pl-3 pt-3 pb-3\">\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-4 lemon-center\">\r\n      <img src=\"../../assets/images/lzf22/misc-3.jpg\"\r\n        class=\"w-100 pr-3 pl-3 pt-3 pb-3\">\r\n    </div>\r\n\r\n    <div class=\"col-xs-12 col-md-4 lemon-center\">\r\n      <img src=\"../../assets/images/lzf22/melly-1.jpg\"\r\n        class=\"w-100 pr-3 pl-3 pt-3 pb-3\">\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-4 lemon-center\">\r\n      <img src=\"../../assets/images/lzf22/melly-2.jpg\"\r\n        class=\"w-100 pr-3 pl-3 pt-3 pb-3\">\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-4 lemon-center\">\r\n      <img src=\"../../assets/images/lzf22/melly-3.jpg\"\r\n        class=\"w-100 pr-3 pl-3 pt-3 pb-3\">\r\n    </div>\r\n\r\n    <div class=\"col-xs-12 col-md-4 lemon-center\">\r\n      <img src=\"../../assets/images/lzf22/333-1.jpg\"\r\n        class=\"w-100 pr-3 pl-3 pt-3 pb-3\">\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-4 lemon-center\">\r\n      <img src=\"../../assets/images/lzf22/333-2.jpg\"\r\n        class=\"w-100 pr-3 pl-3 pt-3 pb-3\">\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-4 lemon-center\">\r\n      <img src=\"../../assets/images/lzf22/333-3.jpg\"\r\n        class=\"w-100 pr-3 pl-3 pt-3 pb-3\">\r\n    </div>\r\n\r\n    <div class=\"col-xs-12 col-md-4 lemon-center\">\r\n      <img src=\"../../assets/images/lzf22/rms-1.jpg\"\r\n        class=\"w-100 pr-3 pl-3 pt-3 pb-3\">\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-4 lemon-center\">\r\n      <img src=\"../../assets/images/lzf22/rms-2.jpg\"\r\n        class=\"w-100 pr-3 pl-3 pt-3 pb-3\">\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-4 lemon-center\">\r\n      <img src=\"../../assets/images/lzf22/rms-3.jpg\"\r\n        class=\"w-100 pr-3 pl-3 pt-3 pb-3\">\r\n    </div>\r\n\r\n    <div class=\"col-xs-12 col-md-4 lemon-center\">\r\n      <img src=\"../../assets/images/lzf22/kings-1.jpg\"\r\n        class=\"w-100 pr-3 pl-3 pt-3 pb-3\">\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-4 lemon-center\">\r\n      <img src=\"../../assets/images/lzf22/kings-2.jpg\"\r\n        class=\"w-100 pr-3 pl-3 pt-3 pb-3\">\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-4 lemon-center\">\r\n      <img src=\"../../assets/images/lzf22/kings-3.jpg\"\r\n        class=\"w-100 pr-3 pl-3 pt-3 pb-3\">\r\n    </div>\r\n\r\n    <div class=\"col-xs-12 col-md-4 lemon-center\">\r\n      <img src=\"../../assets/images/lzf22/heartbreak-1.jpg\"\r\n        class=\"w-100 pr-3 pl-3 pt-3 pb-3\">\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-4 lemon-center\">\r\n      <img src=\"../../assets/images/lzf22/heartbreak-2.jpg\"\r\n        class=\"w-100 pr-3 pl-3 pt-3 pb-3\">\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-4 lemon-center\">\r\n      <img src=\"../../assets/images/lzf22/heartbreak-3.jpg\"\r\n        class=\"w-100 pr-3 pl-3 pt-3 pb-3\">\r\n    </div>\r\n\r\n    <div class=\"col-xs-12 col-md-4 lemon-center\">\r\n      <img src=\"../../assets/images/lzf22/misc-4.jpg\"\r\n        class=\"w-100 pr-3 pl-3 pt-3 pb-3\">\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-4 lemon-center\">\r\n      <img src=\"../../assets/images/lzf22/misc-5.jpg\"\r\n        class=\"w-100 pr-3 pl-3 pt-3 pb-3\">\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-4 lemon-center\">\r\n      <img src=\"../../assets/images/lzf22/misc-6.jpg\"\r\n        class=\"w-100 pr-3 pl-3 pt-3 pb-3\">\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <br>\r\n  <hr>\r\n  <br>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col lemon-center\">\r\n      <h1>Ripe Talent</h1>\r\n      <p>Lemon Zest is dedicated to putting a spotlight on local artists in the DMV area. Here are a few of our favorites in one playlist.</p>\r\n      <div class=\"text-center\">\r\n        <iframe src=\"https://open.spotify.com/embed/playlist/66YM92JK6VvUZ8FVpSTN6K\" width=\"100%\" height=\"500\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"../../assets/images/banners/contact.jpg\" alt=\"Sana's Logo\" class=\"full-img mb-4\">\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col lemon-center\">\r\n      <h1>Contact</h1>\r\n      <p>If you have any inquiries regarding Lemon Zest, feel free to reach out at any time!</p>\r\n    </div>\r\n  </div>\r\n\r\n  <form id=\"contact\" action=\"https://formspree.io/f/mwkjgjkz\" method=\"post\">\r\n    <div class=\"row\">\r\n      <div class=\"col-10 offset-1\">\r\n        <label>Name</label>\r\n        <input placeholder=\"Ex: John Smith\" type=\"text\" tabindex=\"1\" name=\"Name\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-10 offset-1\">\r\n        <label>Email</label>\r\n        <input placeholder=\"Ex: john@smith.com\" type=\"email\" tabindex=\"2\" name=\"Email\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-10 offset-1\">\r\n        <label>Phone Number</label>\r\n        <input placeholder=\"Ex: 301-515-JOHN\" type=\"tel\" tabindex=\"3\" name=\"Phone Number\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-10 offset-1\">\r\n        <label>Message</label>\r\n        <textarea placeholder=\"Ex: Hey Lemon Zest Team! You all seem great! Quick question...\" tabindex=\"4\" rows=\"4\" name=\"Message\" required></textarea>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-10 offset-1 lemon-center\">\r\n        <button class=\"btn btn-primary\" type=\"submit\" id=\"contact-submit\" data-submit=\"...Sending\">\r\n          Submit\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n  <br>\r\n  <hr>\r\n  <br>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col lemon-center\">\r\n      <h1>Stay Social</h1>\r\n      <p>Stay connected with us on social media to get every zesty update!</p>\r\n      <a href=\"https://www.facebook.com/lemonzestfest/\" target=\"_blank\">\r\n        <i class=\"fa fa-facebook lemon-zest-blue icon-content\"></i>\r\n      </a>\r\n      <a href=\"https://www.instagram.com/lemonzestfest/\" target=\"_blank\">\r\n        <i class=\"fa fa-instagram lemon-zest-blue icon-content\"></i>\r\n      </a>\r\n      <a href=\"https://www.twitter.com/lemonzestfest/\" target=\"_blank\">\r\n        <i class=\"fa fa-twitter lemon-zest-blue icon-content\"></i>\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n  <hr>\r\n  <br>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col lemon-center\">\r\n      <h1>Email</h1>\r\n      <p>You can also reach us directly by emailing <a class=\"casablanca lemon-zest-blue\" href=\"mailto:hello@lemonzestfest.com?subject=Lemon%20Zest%20Inquiry&body=Hey%20Lemon%20Zest%20Team!%20You%20all%20seem%20great!%20Quick%20question...\">hello@lemonzestfest.com</a>!</p>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header-footer-margin\"></div>\r\n<div class=\"footer text-center\">\r\n  <a href=\"https://www.facebook.com/lemonzestfest/\" target=\"_blank\">\r\n    <i class=\"fa fa-facebook footer-content\"></i>\r\n  </a>\r\n  <a href=\"https://www.instagram.com/lemonzestfest/\" target=\"_blank\">\r\n    <i class=\"fa fa-instagram footer-content\"></i>\r\n  </a>\r\n  <a href=\"https://www.twitter.com/lemonzestfest/\" target=\"_blank\">\r\n    <i class=\"fa fa-twitter footer-content\"></i>\r\n  </a>\r\n  <div class=\"text-center lemon-zest-white powered-by blakely pt-3\">\r\n    Powered by <a class=\"lemon-zest-white blakely\" href=\"http://tavolosolutions.design\" target=\"_blank\">Tavolo Solutions</a> & <a class=\"lemon-zest-white blakely\" href=\"https://official333am.com\" target=\"_blank\">3:33AM Multimedia Collective</a>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"../../assets/images/banners/lemon-concert.jpg\" alt=\"Sana's Logo\" class=\"full-img mb-4\">\r\n<div class=\"container\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-12 lemon-center\">\r\n        <h1>Tickets</h1>\r\n        <p>\r\n          We are pleased to announce that tickets for Lemon Zest 2023 are now on sale through Eventbrite! Our pre-sale lasts until June 30, 2023.\r\n        </p>\r\n        <!-- <p>\r\n          Tickets for Lemon Zest 2022 are no longer on sale. Come back next year to buy tickets for Lemon Zest 2023!\r\n        </p> -->\r\n      </div>\r\n  \r\n      <div class=\"col-12 lemon-center\">\r\n        <a class=\"lemon-zest-blue\" href=\"https://www.eventbrite.com/e/lemon-zest-festival-2023-tickets-625701318487\" target=\"_blank\">\r\n          Click here to buy tickets to Lemon Zest 2023!\r\n        </a>\r\n      </div>\r\n    </div>\r\n  \r\n    <br>\r\n    <hr>\r\n    <br>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12 lemon-center\">\r\n      <h1>Welcome, First-Time Zesters!</h1>\r\n      <p>\r\n        Lemon Zest is a festival in the DMV area bringing together fine artists, music acts, and folks in the community.\r\n        When the world shut down this past year, we wanted a way to give back to the community that made us the artists\r\n        that we are today. The name Lemon Zest Festival comes from the phrase “when life gives you lemons, you make\r\n        lemonade.”\r\n      </p>\r\n      <p>\r\n        Lemon Zest is a music and arts festival for all ages. We hope to bring together young budding and seasoned\r\n        artists together to experience each other’s art and tunes. We also hope to highlight community organizations and\r\n        businesses whose work we admire and align with our values of joy, community, and eclecticism.\r\n      </p>\r\n      <!-- <p>\r\n        Mask and vaccination policies will be addressed as we get closer to Summer 2022 following Montgomery County, MD\r\n        guidelines.\r\n      </p> -->\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n  <hr>\r\n  <br>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12 lemon-center\">\r\n      <h1>Watch the Lemon Zest 2022 Recap!</h1>\r\n    </div>\r\n\r\n    <div class=\"col-12 lemon-center mt-3\">\r\n      <iframe width=\"100%\" height=\"500px\" src=\"https://www.youtube.com/embed/v5kjkOaEcEc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <div class=\"row\">\r\n    <div class=\"col-12 lemon-center\">\r\n      <h1>Save the Date: June 11, 2022</h1>\r\n      <p>\r\n        We are pleased to announce that tickets for Lemon Zest 2022 are now on sale through Eventbrite! Our pre-sale lasts until March 28, 2022.\r\n      </p>\r\n    </div>\r\n\r\n    <div class=\"col-12 lemon-center\">\r\n      <a class=\"lemon-zest-blue\" href=\"https://www.eventbrite.com/e/204117118797\" target=\"_blank\">\r\n        Click here to buy tickets to Lemon Zest 2022!\r\n      </a>\r\n    </div>\r\n  </div> -->\r\n</div>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation-bar/navigation-bar.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation-bar/navigation-bar.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Just an image -->\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light sticky\">\r\n  <a class=\"navbar-brand mt-2\">\r\n    <a routerLink=\"/\"><img src=\"./../../assets/images/logos/lemon-zest-nav-text-bordered.png\" height=\"50\"></a>\r\n    <a routerLink=\"sour-patch\"><img id=\"lemon\" src=\"./../../assets/images/logos/lemon-zest-nav-icon.png\" height=\"50\" alt=\"\" (click)=\"spinLemon()\"></a>\r\n  </a>\r\n  <i class=\"navbar-toggler fa fa-bars\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\"></i>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\r\n    <div *ngIf=\"isToggleEnabled\" class=\"navbar-nav\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\">\r\n      <a class=\"nav-item nav-link\" routerLink=\"tickets\">Tickets</a>\r\n      <a class=\"nav-item nav-link\" routerLink=\"artists\">Artists</a>\r\n      <a class=\"nav-item nav-link\" routerLink=\"blog\">Blog</a>\r\n      <a class=\"nav-item nav-link\" routerLink=\"community\">Community</a>\r\n      <a class=\"nav-item nav-link\" routerLink=\"sponsors\">Sponsors</a>\r\n      <a class=\"nav-item nav-link\" routerLink=\"about\">About</a>\r\n      <a class=\"nav-item nav-link\" routerLink=\"contact\">Contact</a>\r\n    </div>\r\n    <div *ngIf=\"!isToggleEnabled\" class=\"navbar-nav\" data-target=\"#navbarNavAltMarkup\">\r\n      <a class=\"nav-item nav-link\" routerLink=\"tickets\">Tickets</a>\r\n      <a class=\"nav-item nav-link\" routerLink=\"artists\">Artists</a>\r\n      <a class=\"nav-item nav-link\" routerLink=\"blog\">Blog</a>\r\n      <a class=\"nav-item nav-link\" routerLink=\"community\">Community</a>\r\n      <a class=\"nav-item nav-link\" routerLink=\"sponsors\">Sponsors</a>\r\n      <a class=\"nav-item nav-link\" routerLink=\"about\">About</a>\r\n      <a class=\"nav-item nav-link\" routerLink=\"contact\">Contact</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"progress-container\">\r\n    <div class=\"progress-bar\" id=\"myBar\"></div>\r\n  </div>\r\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sour-patch/sour-patch.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sour-patch/sour-patch.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"../../assets/images/banners/sour-patch.jpg\" alt=\"Sana's Logo\" class=\"full-img mb-4\">\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col lemon-center\">\r\n      <h1>You made it!</h1>\r\n      <p>Drop a message below for the other lemon heads that find their way here!</p>\r\n    </div>\r\n  </div>\r\n\r\n  <form id=\"sour-patch-form\">\r\n    <div class=\"row\">\r\n      <div class=\"col-10 offset-1\">\r\n        <label>Name</label>\r\n        <input id=\"sour-patch-name\" placeholder=\"Ex: John Smith\" type=\"text\" tabindex=\"1\" name=\"Name\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-10 offset-1\">\r\n        <label>Message</label>\r\n        <textarea id=\"sour-patch-message\" placeholder=\"Ex: Hey Lemon Zest Team! You all seem great!\" tabindex=\"4\" rows=\"4\" name=\"Message\" required></textarea>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" id=\"form-bottom\">\r\n      <div class=\"col-10 offset-1 lemon-center\">\r\n        <button class=\"btn btn-primary\" type=\"submit\" id=\"contact-submit\" data-submit=\"...Sending\">\r\n          Submit\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n  <br>\r\n  <hr>\r\n  <br>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <h1>Messages</h1>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div *ngFor=\"let message of messages | async\" class=\"card d-block pt-5 pb-5 mb-5\">\r\n        <div class=\"pl-5 pr-5 mb-5\">\r\n          <i class=\"fa fa-quote-left\"></i>\r\n        </div>\r\n        <div class=\"pl-5 pr-5\">\r\n          <span class=\"lemon-message\">{{ message.message }}</span>\r\n        </div>\r\n        <div class=\"text-right mt-5 pl-5 pr-5\">\r\n          <span class=\"lemon-signature\">{{ message.name }}</span>\r\n        </div>\r\n        <div class=\"text-right pl-5 pr-5\">\r\n          <span class=\"lemon-date\">{{ message.date | date: 'medium' }}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sponsors/sponsors.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sponsors/sponsors.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"../../assets/images/banners/sponsor.jpg\" alt=\"Sana's Logo\" class=\"full-img mb-4\">\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <p>Hey Potential Sponsor!</p>\r\n      <br>\r\n      <p>Lemon Zest is an annual festival in the DMV area bringing together fine artists, music acts, and folks in the\r\n        community. When the world shut down this past year, we wanted a way to give back to the community that made us\r\n        the artists that we are today. The name Lemon Zest Festival comes from the phrase “when life gives you lemons,\r\n        you make lemonade.”</p>\r\n      <br>\r\n      <p>Lemon Zest is a music and arts festival for all ages. We hope to bring together young budding and seasoned\r\n        artists to experience each other’s art and tunes. We also hope to highlight community organizations and\r\n        businesses whose work we admire and align with our values of joy, community, and eclecticism.</p>\r\n      <br>\r\n      <p>The Lemon Zest team is made up of local artists and musicians who know and are in love with the music and art\r\n        scene within the DMV area. We have both performed and hosted events in the region, so we understand the\r\n        importance of planning an event by and for artists and musicians.</p>\r\n      <br>\r\n      <p>A portion of your sponsorship for Lemon Zest Fest will benefit a nonprofit organization.\r\n      </p>\r\n      <br>\r\n      <p>We also have the option in our sponsorship tiers to directly sponsor an artist or performer. We understand that\r\n        all labor, especially creative labor, is valuable and want to fairly compensate our artists and performers.</p>\r\n      <br>\r\n      <p>We’d love for you to review the various tiers of sponsorship below. Please let us know if you are interested in\r\n        becoming an official Lemon Zest Fest sponsor!</p>\r\n      <br>\r\n      <p>Thanks,\r\n        <br>\r\n        <span class=\"blakely letter-signature\">THE LEMON ZEST FEST TEAM~</span>\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <br>\r\n  <hr>\r\n  <br> -->\r\n\r\n  <div class=\"row pt-3 pb-3\">\r\n    <div class=\"offset-xs-0 offset-md-2 col-xs-12 col-md-8 lemon-center\">\r\n      <img src=\"../../assets/images/pdf-exports/tiers-graphic-2023.png\" alt=\"Sponsorship Packet Page 3\" class=\"w-100\">\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <br>\r\n  <hr>\r\n  <br> -->\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col lemon-center\">\r\n      <h1>Interested in other options?</h1>\r\n      <p>\r\n        We offer Custom Packages, payment plans and multi-year options!\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col lemon-center\">\r\n      <a class=\"lemon-zest-blue\" href=\"../../assets/pdfs/lemon-zest-sponsorship-packet-2023.pdf\" download>\r\n        Click here to download our sponsorship packet\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n  <hr>\r\n  <br>\r\n\r\n  <div class=\"row lemon-center\">\r\n    <div class=\"offset-xs-0 offset-md-2 col-xs-12 col-md-8 lemon-center\">\r\n      <h1 class=\"mb-5\">Lemon Zest 2023 Sponsors</h1>\r\n    </div>\r\n\r\n    <div class=\"col-xs-12 col-md-3 lemon-center\">\r\n      <a href=\"https://official333am.com\" target=\"_blank\">\r\n        <img src=\"../../assets/images/logos/sponsors/333-logo.jpg\" class=\"w-75 mr-3 ml-3\">\r\n      </a>\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-3 lemon-center\">\r\n      <a href=\"http://tavolosolutions.design/about/\" target=\"_blank\">\r\n        <img src=\"../../assets/images/logos/sponsors/tavolo-logo.jpg\" class=\"w-75 mr-3 ml-3\">\r\n      </a>\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-3 lemon-center\">\r\n      <a href=\"https://wildbaykombucha.com\" target=\"_blank\">\r\n        <img src=\"../../assets/images/logos/sponsors/wild-bay-logo.png\" class=\"w-75 mr-3 ml-3\">\r\n      </a>\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-3 lemon-center\">\r\n      <a href=\"https://wcss.com\" target=\"_blank\">\r\n        <img src=\"../../assets/images/logos/sponsors/wcs-logo.jpg\" class=\"w-75 mr-3 ml-3\">\r\n      </a>\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-3 lemon-center\">\r\n      <a href=\"https://www.marathondelimd.com\" target=\"_blank\">\r\n        <img src=\"../../assets/images/logos/sponsors/marathon-logo.png\" class=\"w-75 mr-3 ml-3\">\r\n      </a>\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-3 lemon-center\">\r\n      <a href=\"http://infoleadsystems.com\" target=\"_blank\">\r\n        <img src=\"../../assets/images/logos/sponsors/infolead-logo.jpg\" class=\"w-75 mr-3 ml-3\">\r\n      </a>\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-3 lemon-center\">\r\n      <a href=\"https://www.netspective.com\" target=\"_blank\">\r\n        <img src=\"../../assets/images/logos/sponsors/netspective-logo.jpg\" class=\"w-75 mr-3 ml-3\">\r\n      </a>\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-3 lemon-center\">\r\n      <a href=\"https://www.vikingbags.com\" target=\"_blank\">\r\n        <img src=\"../../assets/images/logos/sponsors/vb-logo.png\" class=\"w-75 mr-3 ml-3\">\r\n      </a>\r\n      <p>Check out the <a class=\"casablanca lemon-zest-blue\" href=\"https://www.vikingbags.com\" target=\"_blank\">Viking Bags</a> and other websites, <a class=\"casablanca lemon-zest-blue\" href=\"https://www.borntough.com\" target=\"_blank\">Born Tough</a>, and <a class=\"casablanca lemon-zest-blue\" href=\"https://www.elitesports.com\" target=\"_blank\">Elite Sports</a></p>\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n  <hr>\r\n  <br>\r\n\r\n  <div class=\"row lemon-center\">\r\n    <div class=\"offset-xs-0 offset-md-2 col-xs-12 col-md-8 lemon-center\">\r\n      <h1 class=\"mb-5\">Lemon Zest 2022 Sponsors</h1>\r\n    </div>\r\n\r\n    <div class=\"col-xs-12 col-md-3 lemon-center\">\r\n      <a href=\"https://official333am.com\" target=\"_blank\">\r\n        <img src=\"../../assets/images/logos/sponsors/333-logo.jpg\" class=\"w-75 mr-3 ml-3\">\r\n      </a>\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-3 lemon-center\">\r\n      <a href=\"http://tavolosolutions.design/about/\" target=\"_blank\">\r\n        <img src=\"../../assets/images/logos/sponsors/tavolo-logo.jpg\" class=\"w-75 mr-3 ml-3\">\r\n      </a>\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-3 lemon-center\">\r\n      <a href=\"https://sajisebastianhomes.com\" target=\"_blank\">\r\n        <img src=\"../../assets/images/logos/sponsors/saji-logo.png\" class=\"w-75 mr-3 ml-3\">\r\n      </a>\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-3 lemon-center\">\r\n      <a href=\"https://wcss.com\" target=\"_blank\">\r\n        <img src=\"../../assets/images/logos/sponsors/wcs-logo.jpg\" class=\"w-75 mr-3 ml-3\">\r\n      </a>\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-3 lemon-center\">\r\n      <a href=\"https://www.eit2.com\" target=\"_blank\">\r\n        <img src=\"../../assets/images/logos/sponsors/emagine-it-logo.png\" class=\"w-75 mr-3 ml-3\">\r\n      </a>\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-3 lemon-center\">\r\n      <a href=\"http://infoleadsystems.com\" target=\"_blank\">\r\n        <img src=\"../../assets/images/logos/sponsors/infolead-logo.jpg\" class=\"w-75 mr-3 ml-3\">\r\n      </a>\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-3 lemon-center\">\r\n      <a href=\"https://www.netspective.com\" target=\"_blank\">\r\n        <img src=\"../../assets/images/logos/sponsors/netspective-logo.jpg\" class=\"w-75 mr-3 ml-3\">\r\n      </a>\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-3 lemon-center\">\r\n      <a href=\"https://cleanchoiceenergy.com\" target=\"_blank\">\r\n        <img src=\"../../assets/images/logos/sponsors/cce-logo.jpg\" class=\"w-75 mr-3 ml-3\">\r\n      </a>\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-12 lemon-center\">\r\n      <a class=\"lemon-zest-blue\" href=\"http://www.pisciottahomeservices.com\" target=\"_blank\">\r\n        TPG Consults, LLC\r\n      </a>\r\n      &#x2022;\r\n      <a class=\"lemon-zest-blue\" href=\"http://www.cybecys.com\" target=\"_blank\">\r\n        CybeCys, Inc.\r\n      </a>\r\n      &#x2022;\r\n      <a class=\"lemon-zest-blue\" href=\"https://www.fentoncafesilverspring.com\" target=\"_blank\">\r\n        Fenton Cafe\r\n      </a>\r\n      &#x2022;\r\n      <a class=\"lemon-zest-blue\" target=\"_blank\">\r\n        Shahmanzil\r\n      </a>\r\n      &#x2022;\r\n      <a class=\"lemon-zest-blue\" href=\"https://www.theangryjerk.com\" target=\"_blank\">\r\n        The Angry Jerk\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <br>\r\n  <hr>\r\n  <br>\r\n\r\n  <div class=\"row lemon-center\">\r\n    <div class=\"offset-xs-0 offset-md-2 col-xs-12 col-md-8 lemon-center\">\r\n      <h1 class=\"mb-5\">Lemon Zest 2022 Partners</h1>\r\n    </div>\r\n\r\n    <div class=\"col-xs-12 col-md-3 offset-md-3 lemon-center\">\r\n      <a href=\"https://www.alexslemonade.org/mypage/2533258\" target=\"_blank\">\r\n        <img src=\"../../assets/images/logos/sponsors/alsf-logo.jpg\" class=\"w-75 mr-3 ml-3\">\r\n      </a>\r\n    </div>\r\n    <div class=\"col-xs-12 col-md-3 lemon-center\">\r\n      <a href=\"https://compostcrew.com\" target=\"_blank\">\r\n        <img src=\"../../assets/images/logos/sponsors/cc-logo.jpg\" class=\"w-75 mr-3 ml-3\">\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tickets/tickets.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tickets/tickets.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"../../assets/images/banners/tickets.png\" alt=\"Sana's Logo\" class=\"full-img mb-4\">\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 lemon-center\">\r\n      <h1>Tickets</h1>\r\n      <p>\r\n        We are pleased to announce that tickets for Lemon Zest 2023 are now on sale through Eventbrite! Our pre-sale lasts until June 30, 2023.\r\n      </p>\r\n      <!-- <p>\r\n        Tickets for Lemon Zest 2022 are no longer on sale. Come back next year to buy tickets for Lemon Zest 2023!\r\n      </p> -->\r\n    </div>\r\n\r\n    <div class=\"col-12 lemon-center\">\r\n      <a class=\"lemon-zest-blue\" href=\"https://www.eventbrite.com/e/lemon-zest-festival-2023-tickets-625701318487\" target=\"_blank\">\r\n        Click here to buy tickets to Lemon Zest 2023!\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n\r\n</div>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"../../assets/images/banners/blogger.png\" alt=\"Sana's Logo\" class=\"full-img mb-4\">\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col lemon-center\">\r\n      <h1>Blog Upload</h1>\r\n      <p>Upload a cover photo and paste in your write up before submitting!</p>\r\n    </div>\r\n  </div>\r\n\r\n  <form id=\"upload-form\">\r\n    <div class=\"row\">\r\n      <div class=\"col-10 offset-1\">\r\n        <label>Title</label>\r\n        <input id=\"upload-title\" placeholder=\"Ex: Title\" type=\"text\" tabindex=\"1\" name=\"Title\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-10 offset-1\">\r\n        <label>Write-Up (Pre Pull Quote)</label>\r\n        <textarea id=\"upload-write-up-1\" placeholder=\"Ex: New Write-Up...\" tabindex=\"4\" rows=\"4\" name=\"Write-Up 1\" required></textarea>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-10 offset-1\">\r\n        <label>Pull Quote</label>\r\n        <textarea id=\"upload-pull-quote\" placeholder=\"Ex: Pull Quote...\" tabindex=\"4\" rows=\"4\" name=\"Pull Quote\" required></textarea>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-10 offset-1\">\r\n        <label>Write-Up (Post Pull Quote)</label>\r\n        <textarea id=\"upload-write-up-2\" placeholder=\"Ex: New Write-Up...\" tabindex=\"4\" rows=\"4\" name=\"Write-Up 2\" required></textarea>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-10 offset-1\">\r\n        <label>Author</label>\r\n        <input id=\"upload-author\" placeholder=\"Ex: John Smith\" type=\"text\" tabindex=\"1\" name=\"Author\" required>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-10 offset-1\">\r\n        <input type=\"file\" name=\"file\" (input)=\"onFileChanged($event)\"  accept=\".jpeg,.jpg,.png,.svg\" />\r\n        <br />\r\n        <br />\r\n        <img *ngIf=\"downloadableURL\" [src]=\"downloadableURL\"  onerror=\"this.onerror=null;this.src='assets/noimage.jpg';\"  width=\"300px\" height=\"300px\"/>\r\n        <br />\r\n        {{ downloadableURL }}\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" id=\"form-bottom\">\r\n      <div class=\"col-10 offset-1 lemon-center\">\r\n        <button class=\"btn btn-primary\" type=\"submit\" id=\"upload-submit\" data-submit=\"...Sending\">\r\n          Submit\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n</div>\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.icon-content {\r\n  font-size: 24px;\r\n  margin-left: 12px;\r\n  margin-right: 12px;\r\n}\r\n\r\ni {\r\n  transition: all .2s ease-in-out;\r\n}\r\n\r\ni:hover { \r\n  transform: scale(1.5); \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmljb24tY29udGVudCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTJweDtcclxufVxyXG5cclxuaSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuaTpob3ZlciB7IFxyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTsgXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() {
        this.profiles = [
            {
                facebook: 'https://www.facebook.com/sana.ras.shah',
                instagram: 'https://www.instagram.com/sanarshah/',
                profilePath: '../../assets/images/profiles/sana5k.png',
                role: 'Chief Creative Director',
                name: 'Sana',
                twitter: 'https://twitter.com/sanarshah'
            },
            {
                facebook: 'https://www.facebook.com/michaelquarantillo',
                instagram: 'https://www.instagram.com/therealmikewave/',
                profilePath: '../../assets/images/profiles/mike5k.png',
                role: 'Production Lead',
                name: 'Mike',
                twitter: 'https://twitter.com/therealmikewave'
            },
            {
                facebook: 'https://www.facebook.com/rohithjsebastian',
                instagram: 'https://www.instagram.com/verifiedblase/',
                profilePath: '../../assets/images/profiles/blase5k.png',
                role: 'Logistics Director',
                name: 'Rohith',
                twitter: 'https://www.twitter.com/blase1996/'
            },
        ];
    }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _artists_artists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./artists/artists.component */ "./src/app/artists/artists.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _community_community_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./community/community.component */ "./src/app/community/community.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sour_patch_sour_patch_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sour-patch/sour-patch.component */ "./src/app/sour-patch/sour-patch.component.ts");
/* harmony import */ var _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sponsors/sponsors.component */ "./src/app/sponsors/sponsors.component.ts");
/* harmony import */ var _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tickets/tickets.component */ "./src/app/tickets/tickets.component.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/upload/upload.component.ts");


 // CLI imports router










const routes = [
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], data: { state: 'about' } },
    { path: 'artists', component: _artists_artists_component__WEBPACK_IMPORTED_MODULE_4__["ArtistsComponent"], data: { state: 'artists' } },
    { path: 'blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_5__["BlogComponent"], data: { state: 'blog' } },
    { path: 'community', component: _community_community_component__WEBPACK_IMPORTED_MODULE_6__["CommunityComponent"], data: { state: 'community' } },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], data: { state: 'contact' } },
    { path: 'sour-patch', component: _sour_patch_sour_patch_component__WEBPACK_IMPORTED_MODULE_9__["SourPatchComponent"], data: { state: 'sour-patch' } },
    { path: 'sponsors', component: _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_10__["SponsorsComponent"], data: { state: 'sponsors' } },
    { path: 'tickets', component: _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_11__["TicketsComponent"], data: { state: 'tickets' } },
    { path: 'upload_notsecureatall', component: _upload_upload_component__WEBPACK_IMPORTED_MODULE_12__["UploadComponent"], data: { state: 'upload' } },
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], data: { state: '/' } },
];
// configures NgModule imports and exports
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



let AppComponent = class AppComponent {
    scrollMe(event) {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }
    getState(outlet) {
        // Changing the activatedRouteData.state triggers the animation
        return outlet.activatedRouteData.state;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", ['$event'])
], AppComponent.prototype, "scrollMe", null);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('routerTransition', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* <=> *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ position: 'fixed', width: '100%' }), { optional: true }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(100%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0%)' }))
                        ], { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0%)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(-100%)' }))
                        ], { optional: true }),
                    ])
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/fesm2015/angular-fire-storage.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _artists_artists_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./artists/artists.component */ "./src/app/artists/artists.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navigation-bar/navigation-bar.component */ "./src/app/navigation-bar/navigation-bar.component.ts");
/* harmony import */ var _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sponsors/sponsors.component */ "./src/app/sponsors/sponsors.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _sour_patch_sour_patch_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sour-patch/sour-patch.component */ "./src/app/sour-patch/sour-patch.component.ts");
/* harmony import */ var _community_community_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./community/community.component */ "./src/app/community/community.component.ts");
/* harmony import */ var _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tickets/tickets.component */ "./src/app/tickets/tickets.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./blog/blog.component */ "./src/app/blog/blog.component.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/upload/upload.component.ts");























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
            _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
            _artists_artists_component__WEBPACK_IMPORTED_MODULE_12__["ArtistsComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
            _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_15__["NavigationBarComponent"],
            _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_16__["SponsorsComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
            _sour_patch_sour_patch_component__WEBPACK_IMPORTED_MODULE_18__["SourPatchComponent"],
            _community_community_component__WEBPACK_IMPORTED_MODULE_19__["CommunityComponent"],
            _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_20__["TicketsComponent"],
            _blog_blog_component__WEBPACK_IMPORTED_MODULE_21__["BlogComponent"],
            _upload_upload_component__WEBPACK_IMPORTED_MODULE_22__["UploadComponent"]
        ],
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"]
        ],
        providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["HashLocationStrategy"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/artists/artists.component.css":
/*!***********************************************!*\
  !*** ./src/app/artists/artists.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGlzdHMvYXJ0aXN0cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/artists/artists.component.ts":
/*!**********************************************!*\
  !*** ./src/app/artists/artists.component.ts ***!
  \**********************************************/
/*! exports provided: ArtistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistsComponent", function() { return ArtistsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ArtistsComponent = class ArtistsComponent {
    constructor() { }
    ngOnInit() {
    }
    get iframeHeights() {
        if ($(window).width() <= 350) {
            return {
                pHeight: 3440,
                gHeight: 2390
            };
        }
        else if ($(window).width() <= 400) {
            return {
                pHeight: 3125,
                gHeight: 2130
            };
        }
        else if ($(window).width() <= 450) {
            return {
                pHeight: 2995,
                gHeight: 2070
            };
        }
        else if ($(window).width() <= 600) {
            return {
                pHeight: 2770,
                gHeight: 1890
            };
        }
        else if ($(window).width() <= 1024) {
            return {
                pHeight: 2610,
                gHeight: 1760
            };
        }
        else {
            return {
                pHeight: 2610,
                gHeight: 1760
            };
        }
        // return {
        //   pHeight: (Math.ceil($(window).width()/50)*50)*(-2.8)+4630,
        //   gHeight: Math.ceil($(window).width()/50)*50,
        // }
    }
};
ArtistsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-artists',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./artists.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/artists/artists.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./artists.component.css */ "./src/app/artists/artists.component.css")).default]
    })
], ArtistsComponent);



/***/ }),

/***/ "./src/app/blog/blog.component.css":
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\r\n  filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))\r\n}\r\n\r\nh2 {\r\n  font-size: 4rem !important;\r\n}\r\n\r\n.lemon-quotes {\r\n  font-weight: bold;\r\n  font-size: 24px;\r\n  font-family: \"Casablanca URW Light\";\r\n  color: #EE4094 !important;\r\n}\r\n\r\n.lemon-message {\r\n  font-size: 24px;\r\n  font-family: \"Casablanca URW Light\";\r\n  color: #2D2929 !important;\r\n}\r\n\r\n.lemon-signature {\r\n  font-weight: bold;\r\n  font-size: 24px;\r\n  font-family: \"Blakely Bold\";\r\n  color: #2D2929 !important;\r\n}\r\n\r\n.lemon-date {\r\n  font-size: 16px;\r\n  font-family: \"Casablanca URW Light\";\r\n  color: #2D2929 !important;\r\n}\r\n\r\n.fa-quote-left, .fa-quote-right {\r\n  font-size: 56px;\r\n  color: #ececec !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQ0FBbUM7RUFDbkMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1DQUFtQztFQUNuQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUNBQW1DO0VBQ25DLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9ibG9nL2Jsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAuMzVyZW0gMC4zNXJlbSAwLjRyZW0gcmdiYSgwLCAwLCAwLCAwLjUpKVxyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiA0cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sZW1vbi1xdW90ZXMge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LWZhbWlseTogXCJDYXNhYmxhbmNhIFVSVyBMaWdodFwiO1xyXG4gIGNvbG9yOiAjRUU0MDk0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sZW1vbi1tZXNzYWdlIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2FzYWJsYW5jYSBVUlcgTGlnaHRcIjtcclxuICBjb2xvcjogIzJEMjkyOSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGVtb24tc2lnbmF0dXJlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiQmxha2VseSBCb2xkXCI7XHJcbiAgY29sb3I6ICMyRDI5MjkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxlbW9uLWRhdGUge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LWZhbWlseTogXCJDYXNhYmxhbmNhIFVSVyBMaWdodFwiO1xyXG4gIGNvbG9yOiAjMkQyOTI5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mYS1xdW90ZS1sZWZ0LCAuZmEtcXVvdGUtcmlnaHQge1xyXG4gIGZvbnQtc2l6ZTogNTZweDtcclxuICBjb2xvcjogI2VjZWNlYyAhaW1wb3J0YW50O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");



let BlogComponent = class BlogComponent {
    constructor(firebaseService) {
        this.firebaseService = firebaseService;
        this.writeUps = this.firebaseService.writeUps;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        setTimeout(function () {
            var url = new URL(window.location.href);
            var scrollTo = url.href.split('?scrollTo=')[1];
            console.log(scrollTo);
            document.getElementById(scrollTo).scrollIntoView({ behavior: 'smooth' });
        }, 1000);
    }
    formatTitle(title) {
        return title.replace(/[^A-Za-z0-9]+/g, '-').toLowerCase();
    }
};
BlogComponent.ctorParameters = () => [
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
];
BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./blog.component.css */ "./src/app/blog/blog.component.css")).default]
    })
], BlogComponent);



/***/ }),

/***/ "./src/app/community/community.component.css":
/*!***************************************************!*\
  !*** ./src/app/community/community.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW11bml0eS9jb21tdW5pdHkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/community/community.component.ts":
/*!**************************************************!*\
  !*** ./src/app/community/community.component.ts ***!
  \**************************************************/
/*! exports provided: CommunityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityComponent", function() { return CommunityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CommunityComponent = class CommunityComponent {
    constructor() { }
    ngOnInit() {
    }
};
CommunityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-community',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./community.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/community/community.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./community.component.css */ "./src/app/community/community.component.css")).default]
    })
], CommunityComponent);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".icon-content {\r\n  font-size: 24px;\r\n  margin-left: 12px;\r\n  margin-right: 12px;\r\n}\r\n\r\ni {\r\n  transition: all .2s ease-in-out;\r\n}\r\n\r\ni:hover { \r\n  transform: scale(1.5); \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tY29udGVudCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTJweDtcclxufVxyXG5cclxuaSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuaTpob3ZlciB7IFxyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTsgXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\r\n  height: 108px;\r\n  background-color: #2D2929;\r\n}\r\n\r\n.footer-content {\r\n  color: #FDFAFA;\r\n  font-size: 24px;\r\n  margin-top: 20px;\r\n  margin-left: 12px;\r\n  margin-right: 12px;\r\n}\r\n\r\ni {\r\n  transition: all .2s ease-in-out;\r\n}\r\n\r\ni:hover { \r\n  transform: scale(1.5); \r\n}\r\n\r\n.powered-by {\r\n  font-size: 1rem;\r\n}\r\n\r\na {\r\n  font-size: unset;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgaGVpZ2h0OiAxMDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQyOTI5O1xyXG59XHJcblxyXG4uZm9vdGVyLWNvbnRlbnQge1xyXG4gIGNvbG9yOiAjRkRGQUZBO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTJweDtcclxufVxyXG5cclxuaSB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuaTpob3ZlciB7IFxyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS41KTsgXHJcbn1cclxuXHJcbi5wb3dlcmVkLWJ5IHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbmEge1xyXG4gIGZvbnQtc2l6ZTogdW5zZXQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.center {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  margin: auto;\r\n}\r\n\r\n.container {\r\n  overflow: auto;\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-overflow-scrolling: touch !important;\r\n}\r\n\r\nform {\r\n  display: inline-flex;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osNENBQTRDO0FBQzlDOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.component.css":
/*!*************************************************************!*\
  !*** ./src/app/navigation-bar/navigation-bar.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar .navbar-collapse {\r\n  text-align: center;\r\n}\r\n\r\n.navbar-brand {\r\n  color: #2D2929 !important;\r\n}\r\n\r\n.nav-item:hover {\r\n  background: #2D2929 !important;\r\n  color: #f9ed27 !important;\r\n}\r\n\r\n.navbar-toggler {\r\n  /* background: #2D2929 !important; */\r\n  border-color: transparent !important;\r\n}\r\n\r\n/* The progress container (grey background) */\r\n\r\n.progress-container {\r\n  width: 100%;\r\n  height: 4px;\r\n  background: #EE95AD !important;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin-top: 56px;\r\n  -webkit-overflow-scrolling: touch !important;\r\n}\r\n\r\n/* The progress bar (scroll indicator) */\r\n\r\n.progress-bar {\r\n  height: 4px;\r\n  background: #2D2929 !important;\r\n  width: 0%;\r\n  -webkit-overflow-scrolling: touch !important;\r\n  \r\n}\r\n\r\n.sticky {\r\n  position: fixed;\r\n  width: 100%;\r\n  top: 0;\r\n  z-index: 9;\r\n}\r\n\r\na {\r\n  color: #2D2929 !important;\r\n  /* color: #FDFAFA !important;\r\n  text-shadow: -1px 0 #2D2929, 0 1px #2D2929, 1px 0 #2D2929, 0 -1px #2D2929; */\r\n}\r\n\r\n.fa-bars {\r\n  color: #2D2929 !important;\r\n  font-size: 32px;\r\n  margin-top: -2px;\r\n}\r\n\r\n.bg-light {\r\n  background: #EE95AD !important;\r\n}\r\n\r\nimg {\r\n  margin-top: -15px;\r\n}\r\n\r\n#lemon {\r\n  transition: all 1s ease-in-out;\r\n}\r\n\r\n#logo-text {\r\n  font-size: 40px !important;\r\n}\r\n\r\n#logo-text:hover {\r\n  text-decoration: none!important;\r\n}\r\n\r\n.mt-2 {\r\n  margin-top: 0.8rem!important\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi1iYXIvbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsb0NBQW9DO0FBQ3RDOztBQUVBLDZDQUE2Qzs7QUFDN0M7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLDRDQUE0QztBQUM5Qzs7QUFFQSx3Q0FBd0M7O0FBQ3hDO0VBQ0UsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsNENBQTRDOztBQUU5Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsTUFBTTtFQUNOLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qjs4RUFDNEU7QUFDOUU7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uLWJhci9uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciAubmF2YmFyLWNvbGxhcHNlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIGNvbG9yOiAjMkQyOTI5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXYtaXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzJEMjkyOSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZjllZDI3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlciB7XHJcbiAgLyogYmFja2dyb3VuZDogIzJEMjkyOSAhaW1wb3J0YW50OyAqL1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogVGhlIHByb2dyZXNzIGNvbnRhaW5lciAoZ3JleSBiYWNrZ3JvdW5kKSAqL1xyXG4ucHJvZ3Jlc3MtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDRweDtcclxuICBiYWNrZ3JvdW5kOiAjRUU5NUFEICFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDU2cHg7XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoICFpbXBvcnRhbnQ7XHJcbn1cclxuICBcclxuLyogVGhlIHByb2dyZXNzIGJhciAoc2Nyb2xsIGluZGljYXRvcikgKi9cclxuLnByb2dyZXNzLWJhciB7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgYmFja2dyb3VuZDogIzJEMjkyOSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAwJTtcclxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2ggIWltcG9ydGFudDtcclxuICBcclxufVxyXG5cclxuLnN0aWNreSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiA5O1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogIzJEMjkyOSAhaW1wb3J0YW50O1xyXG4gIC8qIGNvbG9yOiAjRkRGQUZBICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1zaGFkb3c6IC0xcHggMCAjMkQyOTI5LCAwIDFweCAjMkQyOTI5LCAxcHggMCAjMkQyOTI5LCAwIC0xcHggIzJEMjkyOTsgKi9cclxufVxyXG5cclxuLmZhLWJhcnMge1xyXG4gIGNvbG9yOiAjMkQyOTI5ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIG1hcmdpbi10b3A6IC0ycHg7XHJcbn1cclxuXHJcbi5iZy1saWdodCB7XHJcbiAgYmFja2dyb3VuZDogI0VFOTVBRCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG59XHJcblxyXG4jbGVtb24ge1xyXG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuI2xvZ28tdGV4dCB7XHJcbiAgZm9udC1zaXplOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNsb2dvLXRleHQ6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tdC0yIHtcclxuICBtYXJnaW4tdG9wOiAwLjhyZW0haW1wb3J0YW50XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/navigation-bar/navigation-bar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/navigation-bar/navigation-bar.component.ts ***!
  \************************************************************/
/*! exports provided: NavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function() { return NavigationBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavigationBarComponent = class NavigationBarComponent {
    //
    constructor(renderer) {
        this.renderer = renderer;
        this.rot = 360;
    }
    ngOnInit() {
        this.lemon = document.getElementById("lemon");
    }
    spinLemon() {
        this.renderer.setStyle(this.lemon, 'transform', 'rotate(' + this.rot + 'deg)');
        this.rot += 360;
    }
    get isToggleEnabled() {
        return $(window).width() <= 991;
    }
};
NavigationBarComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
NavigationBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation-bar/navigation-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation-bar.component.css */ "./src/app/navigation-bar/navigation-bar.component.css")).default]
    })
], NavigationBarComponent);



/***/ }),

/***/ "./src/app/services/firebase.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let FirebaseService = class FirebaseService {
    constructor(afs) {
        this.afs = afs;
        this.messageCollection = afs.collection('messages', ref => ref.orderBy('timestamp', 'desc'));
        this.messages = this.messageCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
        this.writeUpCollection = afs.collection('writeUps', ref => ref.orderBy('timestamp', 'desc'));
        this.writeUps = this.writeUpCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
    }
    addMessage(message) {
        this.messageCollection.add(message);
    }
    addWriteUp(writeUp) {
        this.writeUpCollection.add(writeUp);
    }
};
FirebaseService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FirebaseService);



/***/ }),

/***/ "./src/app/sour-patch/sour-patch.component.css":
/*!*****************************************************!*\
  !*** ./src/app/sour-patch/sour-patch.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card {\r\n    filter: drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))\r\n}\r\n\r\n.lemon-quotes {\r\n    font-weight: bold;\r\n    font-size: 24px;\r\n    font-family: \"Casablanca URW Light\";\r\n    color: #EE4094 !important;\r\n}\r\n\r\n.lemon-message {\r\n    font-size: 24px;\r\n    font-family: \"Casablanca URW Light\";\r\n    color: #2D2929 !important;\r\n}\r\n\r\n.lemon-signature {\r\n    font-weight: bold;\r\n    font-size: 24px;\r\n    font-family: \"Blakely Bold\";\r\n    color: #2D2929 !important;\r\n}\r\n\r\n.lemon-date {\r\n    font-size: 16px;\r\n    font-family: \"Casablanca URW Light\";\r\n    color: #2D2929 !important;\r\n}\r\n\r\n.fa-quote-left, .fa-quote-right {\r\n    font-size: 56px;\r\n    color: #ececec !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc291ci1wYXRjaC9zb3VyLXBhdGNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQ0FBbUM7SUFDbkMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1DQUFtQztJQUNuQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUNBQW1DO0lBQ25DLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9zb3VyLXBhdGNoL3NvdXItcGF0Y2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMC4zNXJlbSAwLjM1cmVtIDAuNHJlbSByZ2JhKDAsIDAsIDAsIDAuNSkpXHJcbn1cclxuXHJcbi5sZW1vbi1xdW90ZXMge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJDYXNhYmxhbmNhIFVSVyBMaWdodFwiO1xyXG4gICAgY29sb3I6ICNFRTQwOTQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxlbW9uLW1lc3NhZ2Uge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ2FzYWJsYW5jYSBVUlcgTGlnaHRcIjtcclxuICAgIGNvbG9yOiAjMkQyOTI5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sZW1vbi1zaWduYXR1cmUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJCbGFrZWx5IEJvbGRcIjtcclxuICAgIGNvbG9yOiAjMkQyOTI5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sZW1vbi1kYXRlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNhc2FibGFuY2EgVVJXIExpZ2h0XCI7XHJcbiAgICBjb2xvcjogIzJEMjkyOSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmEtcXVvdGUtbGVmdCwgLmZhLXF1b3RlLXJpZ2h0IHtcclxuICAgIGZvbnQtc2l6ZTogNTZweDtcclxuICAgIGNvbG9yOiAjZWNlY2VjICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/sour-patch/sour-patch.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sour-patch/sour-patch.component.ts ***!
  \****************************************************/
/*! exports provided: SourPatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourPatchComponent", function() { return SourPatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");



let SourPatchComponent = class SourPatchComponent {
    constructor(firebaseService) {
        this.firebaseService = firebaseService;
        this.messages = this.firebaseService.messages;
    }
    ngOnInit() {
        var form = document.getElementById("sour-patch-form");
        form.addEventListener('submit', this.submitCallback.bind(this));
    }
    submitCallback(event) {
        event.preventDefault();
        this.firebaseService.addMessage({
            date: (new Date()).toString(),
            timestamp: new Date(),
            message: document.getElementById("sour-patch-message").value,
            name: document.getElementById("sour-patch-name").value
        });
        document.getElementById("sour-patch-message").value = "";
        document.getElementById("sour-patch-name").value = "";
        document.getElementById("form-bottom").scrollIntoView();
    }
};
SourPatchComponent.ctorParameters = () => [
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }
];
SourPatchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sour-patch',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sour-patch.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sour-patch/sour-patch.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sour-patch.component.css */ "./src/app/sour-patch/sour-patch.component.css")).default]
    })
], SourPatchComponent);



/***/ }),

/***/ "./src/app/sponsors/sponsors.component.css":
/*!*************************************************!*\
  !*** ./src/app/sponsors/sponsors.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".letter-signature {\r\n    font-size: 28px;\r\n}\r\n\r\n/* .col-xs-12, .col-md-6 {\r\n    padding-bottom: 3rem;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BvbnNvcnMvc3BvbnNvcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7O0dBRUciLCJmaWxlIjoic3JjL2FwcC9zcG9uc29ycy9zcG9uc29ycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxldHRlci1zaWduYXR1cmUge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG59XHJcblxyXG4vKiAuY29sLXhzLTEyLCAuY29sLW1kLTYge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XHJcbn0gKi8iXX0= */");

/***/ }),

/***/ "./src/app/sponsors/sponsors.component.ts":
/*!************************************************!*\
  !*** ./src/app/sponsors/sponsors.component.ts ***!
  \************************************************/
/*! exports provided: SponsorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorsComponent", function() { return SponsorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SponsorsComponent = class SponsorsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SponsorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sponsors',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sponsors.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sponsors/sponsors.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sponsors.component.css */ "./src/app/sponsors/sponsors.component.css")).default]
    })
], SponsorsComponent);



/***/ }),

/***/ "./src/app/tickets/tickets.component.css":
/*!***********************************************!*\
  !*** ./src/app/tickets/tickets.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpY2tldHMvdGlja2V0cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/tickets/tickets.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tickets/tickets.component.ts ***!
  \**********************************************/
/*! exports provided: TicketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsComponent", function() { return TicketsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TicketsComponent = class TicketsComponent {
    constructor() { }
    ngOnInit() {
    }
};
TicketsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tickets',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tickets.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tickets/tickets.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tickets.component.css */ "./src/app/tickets/tickets.component.css")).default]
    })
], TicketsComponent);



/***/ }),

/***/ "./src/app/upload/upload.component.css":
/*!*********************************************!*\
  !*** ./src/app/upload/upload.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/upload/upload.component.ts":
/*!********************************************!*\
  !*** ./src/app/upload/upload.component.ts ***!
  \********************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/fesm2015/angular-fire-storage.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");




let UploadComponent = class UploadComponent {
    constructor(fireStorage, firebaseService) {
        this.fireStorage = fireStorage;
        this.firebaseService = firebaseService;
        this.basePath = '/images'; //  <<<<<<<
        this.downloadableURL = ''; //  <<<<<<<
    }
    ngOnInit() {
        var form = document.getElementById("upload-form");
        form.addEventListener('submit', this.submitCallback.bind(this));
    }
    onFileChanged(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const file = event.target.files[0];
            if (file) {
                const filePath = `${this.basePath}/${file.name}`; // path at which image will be stored in the firebase storage
                this.task = this.fireStorage.upload(filePath, file); // upload task
                // this.progress = this.snapTask.percentageChanges();
                (yield this.task).ref.getDownloadURL().then(url => { this.downloadableURL = url; }); // << url is found here
            }
            else {
                alert('No images selected');
                this.downloadableURL = '';
            }
        });
    }
    submitCallback(event) {
        event.preventDefault();
        this.firebaseService.addWriteUp({
            date: (new Date()).toString(),
            timestamp: new Date(),
            writeUp: document.getElementById("upload-write-up-1").value,
            pullQuote: document.getElementById("upload-pull-quote").value,
            writeUp2: document.getElementById("upload-write-up-2").value,
            author: document.getElementById("upload-author").value,
            title: document.getElementById("upload-title").value,
            imageURL: this.downloadableURL
        });
        document.getElementById("upload-write-up-1").value = "";
        document.getElementById("upload-pull-quote").value = "";
        document.getElementById("upload-write-up-2").value = "";
        document.getElementById("upload-author").value = "";
        document.getElementById("upload-title").value = "";
        this.downloadableURL = "";
        document.getElementById("form-bottom").scrollIntoView();
    }
};
UploadComponent.ctorParameters = () => [
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] }
];
UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upload',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./upload.component.css */ "./src/app/upload/upload.component.css")).default]
    })
], UploadComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCizfxHu82LtTqej-KAKFYZAeESXvmf1hU",
        authDomain: "lemon-zest-festival.firebaseapp.com",
        projectId: "lemon-zest-festival",
        storageBucket: "lemon-zest-festival.appspot.com",
        messagingSenderId: "1033406640932",
        appId: "1:1033406640932:web:a54a1c0eeb3485844079b1",
        measurementId: "G-DGYC5V508D"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rohit\Documents\333AM\LEMON ZEST FEST WEBSITE\lemon-zest-fest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map