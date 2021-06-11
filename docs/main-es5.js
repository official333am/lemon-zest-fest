(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function (module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<img src=\"../../assets/images/banners/team.jpg\" alt=\"Sana's Logo\" class=\"full-img mb-4\">\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h1>About</h1>\n      <p>Lemon Zest is an upcoming festival in the DMV area bringing together fine artists, music acts, and folks in the\n        community. When the world shut down this past year, we wanted a way to give back to the community that made us\n        the artists that we are today. The name Lemon Zest Festival comes from the phrase “when life gives you lemons,\n        you make lemonade.”</p>\n      <p>Lemon Zest is a music and arts festival for all ages. We hope to bring together young budding and seasoned\n        artists together to experience each other’s art and tunes. We also hope to highlight community organizations and\n        businesses whose work we admire and align with our values of joy, community, and eclecticism.</p>\n    </div>\n  </div>\n\n  <br>\n  <hr>\n  <br>\n\n  <div class=\"row\">\n    <div class=\"col lemon-center\">\n      <h1>Meet The Team</h1>\n      <p>The Lemon Zest team is made up of local artists and musicians, who know and are in love with the music and art\n        scene within the DMV area.</p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div *ngFor=\"let profile of profiles\" class=\"col-sm-12 col-md-3\">\n      <div class=\"card lemon-center d-block pt-5 pb-5 mb-5\">\n        <img class=\"rounded-circle profile mb-3\" [src]=\"profile.profilePath\" alt=\"Sana\" style=\"width:100px\">\n        <h2>{{ profile.name }}</h2>\n        <p class=\"title\">{{ profile.role }}</p>\n        <a [href]=\"profile.facebook\" target=\"_blank\">\n          <i class=\"fa fa-facebook lemon-zest-blue icon-content\"></i>\n        </a>\n        <a [href]=\"profile.instagram\" target=\"_blank\">\n          <i class=\"fa fa-instagram lemon-zest-blue icon-content\"></i>\n        </a>\n        <a [href]=\"profile.twitter\" target=\"_blank\">\n          <i class=\"fa fa-twitter lemon-zest-blue icon-content\"></i>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation-bar></app-navigation-bar>\n<div class=\"header-footer-margin\"></div>\n<main [@routerTransition]=\"getState(o)\">\n  <router-outlet #o=\"outlet\"></router-outlet>\n</main>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/artists/artists.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/artists/artists.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<img src=\"../../assets/images/banners/artist.jpg\" alt=\"Sana's Logo\" class=\"full-img mb-4\">\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h1>Artists</h1>\n      <p>Are you interested in participating in Lemon Zest 2022? We started this festival with the artists of the DMV\n        area at the forefront. After nearly two years of no shows or exhibits, we wanted to create the perfect\n        opportunity for artists to get back into the swing of things! If you're looking to be a performing or gallery\n        artist, here's your chance! Below we have provided two forms to gauge interest and ultimately choose who will be\n        selected to participate.</p>\n    </div>\n  </div>\n</div>\n\n<div class=\"container mt-5\">\n  <!-- Nav tabs -->\n  <ul class=\"nav nav-tabs nav-justified\" role=\"tablist\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#performing\">Performing Artist</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" data-toggle=\"tab\" href=\"#gallery\">Gallery Artist</a>\n    </li>\n  </ul>\n  <!-- Tab panes -->\n  <div class=\"tab-content\">\n    <div id=\"performing\" class=\"container tab-pane active text-center\"><br>\n      <iframe\n        src=\"https://docs.google.com/forms/d/e/1FAIpQLSfD--8QIHkBvIG3vO6IYNZbUltzxiEOBMOeP66u_gxeqQRoow/viewform?embedded=true\"\n        width=\"100%\" [height]=\"iframeHeights.pHeight\" frameborder=\"0\">Loading…</iframe>\n    </div>\n    <div id=\"gallery\" class=\"container tab-pane fade text-center\"><br>\n      <iframe\n        src=\"https://docs.google.com/forms/d/e/1FAIpQLSfO0CU8oopxEPa6w5DmevqpQWsEjacHqtsxC4anHeYVBIH9VA/viewform?embedded=true\"\n        width=\"100%\" [height]=\"iframeHeights.gHeight\" frameborder=\"0\">Loading…</iframe>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/community/community.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/community/community.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<img src=\"../../assets/images/banners/community.jpg\" alt=\"Sana's Logo\" class=\"full-img mb-4\">\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col lemon-center\">\n      <h1>Ripe Talent</h1>\n      <p>Lemon Zest is dedicated to putting a spotlight on local artists in the DMV area. Here are a few of our favorites in one playlist.</p>\n      <div class=\"text-center\">\n        <iframe src=\"https://open.spotify.com/embed/playlist/66YM92JK6VvUZ8FVpSTN6K\" width=\"100%\" height=\"500\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>\n      </div>\n    </div>\n  </div>\n\n  <!-- <div class=\"row\">\n    <div class=\"col\">\n      <iframe src='https://www.juicer.io/api/feeds/lemon-zest-festival/iframe' frameborder='0' width='1000' height='1000' style='display:block;margin:0 auto;'></iframe>\n    </div>\n  </div> -->\n</div>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<img src=\"../../assets/images/banners/contact.jpg\" alt=\"Sana's Logo\" class=\"full-img mb-4\">\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col lemon-center\">\n      <h1>Contact</h1>\n      <p>If you have any inquiries regarding Lemon Zest, feel free to reach out at any time!</p>\n    </div>\n  </div>\n\n  <form id=\"contact\" action=\"https://formspree.io/f/xpzoeoao\" method=\"post\">\n    <div class=\"row\">\n      <div class=\"col-10 offset-1\">\n        <label>Name</label>\n        <input placeholder=\"Ex: John Smith\" type=\"text\" tabindex=\"1\" name=\"Name\" required>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-10 offset-1\">\n        <label>Email</label>\n        <input placeholder=\"Ex: john@smith.com\" type=\"email\" tabindex=\"2\" name=\"Email\" required>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-10 offset-1\">\n        <label>Phone Number</label>\n        <input placeholder=\"Ex: 301-515-JOHN\" type=\"tel\" tabindex=\"3\" name=\"Phone Number\" required>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-10 offset-1\">\n        <label>Message</label>\n        <textarea placeholder=\"Ex: Hey Lemon Zest Team! You all seem great! Quick question...\" tabindex=\"4\" rows=\"4\" name=\"Message\" required></textarea>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-10 offset-1 lemon-center\">\n        <button class=\"btn btn-primary\" type=\"submit\" id=\"contact-submit\" data-submit=\"...Sending\">\n          Submit\n        </button>\n      </div>\n    </div>\n  </form>\n\n  <br>\n  <hr>\n  <br>\n\n  <div class=\"row\">\n    <div class=\"col lemon-center\">\n      <h1>Stay Social</h1>\n      <p>Stay connected with us on social media to get every zesty update!</p>\n      <a href=\"https://www.facebook.com/lemonzestfest/\" target=\"_blank\">\n        <i class=\"fa fa-facebook lemon-zest-blue icon-content\"></i>\n      </a>\n      <a href=\"https://www.instagram.com/lemonzestfest/\" target=\"_blank\">\n        <i class=\"fa fa-instagram lemon-zest-blue icon-content\"></i>\n      </a>\n      <a href=\"https://www.twitter.com/lemonzestfest/\" target=\"_blank\">\n        <i class=\"fa fa-twitter lemon-zest-blue icon-content\"></i>\n      </a>\n    </div>\n  </div>\n\n  <br>\n  <hr>\n  <br>\n\n  <div class=\"row\">\n    <div class=\"col lemon-center\">\n      <h1>Email</h1>\n      <p>You can also reach us directly by emailing <a class=\"casablanca lemon-zest-blue\" href=\"mailto:hello@lemonzestfest.com?subject=Lemon%20Zest%20Inquiry&body=Hey%20Lemon%20Zest%20Team!%20You%20all%20seem%20great!%20Quick%20question...\">hello@lemonzestfest.com</a>!</p>\n    </div>\n  </div>\n\n</div>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header-footer-margin\"></div>\n<div class=\"footer text-center\">\n  <a href=\"https://www.facebook.com/lemonzestfest/\" target=\"_blank\">\n    <i class=\"fa fa-facebook footer-content\"></i>\n  </a>\n  <a href=\"https://www.instagram.com/lemonzestfest/\" target=\"_blank\">\n    <i class=\"fa fa-instagram footer-content\"></i>\n  </a>\n  <a href=\"https://www.twitter.com/lemonzestfest/\" target=\"_blank\">\n    <i class=\"fa fa-twitter footer-content\"></i>\n  </a>\n  <div class=\"text-center lemon-zest-white powered-by blakely pt-3\">\n    Powered by <a class=\"lemon-zest-white blakely\" href=\"http://tavolosolutions.design\" target=\"_blank\">Tavolo Solutions</a> & <a class=\"lemon-zest-white blakely\" href=\"https://official333am.com\" target=\"_blank\">3:33AM Multimedia Collective</a>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<img src=\"../../assets/images/banners/lemon-concert.jpg\" alt=\"Sana's Logo\" class=\"full-img mb-4\">\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h1>Announcements</h1>\n      <p>\n        At the direction of state and local authorities and federal guidelines amid the COVID-19 pandemic, we are\n        saddened to confirm the cancellation of Lemon Zest Festival 2020. We take the safety and health of our fans,\n        staff and community seriously and we urge everyone to follow the guidelines and protocols put forth by public\n        health officials. We are deeply disappointed by this difficult decision, one that impacts our fans and our\n        incredible team.\n      </p>\n      <p>\n        Thank you for your support and we look forward to welcoming\n        you in The Loft in June 2022 where we will dance, sing and celebrate live music together.\n      </p>\n    </div>\n  </div>\n\n  <br>\n  <hr>\n  <br>\n\n  <div class=\"row\">\n    <div class=\"col\">\n      <h1>Refunds</h1>\n      <p>\n        The refund/transfer request period has ended. All orders that did not submit a request have been automatically\n        transferred to Lemon Zest 2022. If you requested a refund please allow up to 30 days for your refund to process.\n        You will receive an email confirmation when your order has been canceled. Please allow 3-5 business days after\n        order cancellation for the refund to post to your account.\n      </p>\n    </div>\n  </div>\n\n  <!-- <br>\n  <hr>\n  <br>\n\n  <div class=\"row\">\n    <div class=\"col lemon-center\">\n      <h1>Zest Ya Later!</h1>\n      <p>\n        While we can't be with you in person at the moment, you can join our mailing list to get the latest info on\n        Lemon Zest 2022!\n      </p>\n      <form class=\"form-inline\">\n        <div class=\"form-group mx-sm-2 mb-2\">\n          <input type=\"text\" class=\"form-control\" id=\"inputPassword2\" placeholder=\"Ex: john@smith.com\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-primary mb-2\">Submit</button>\n      </form>\n    </div>\n  </div> -->\n</div>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation-bar/navigation-bar.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation-bar/navigation-bar.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Just an image -->\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light sticky\">\n  <a class=\"navbar-brand\">\n    <a id=\"logo-text\" class=\"mr-1\" routerLink=\"/\">Lemon Zest</a>\n    <a routerLink=\"sour-patch\"><img id=\"lemon\" src=\"./../../assets/images/logos/just-lemon.png\" width=\"40\" height=\"40\" alt=\"\" (click)=\"spinLemon()\"></a>\n  </a>\n  <i class=\"navbar-toggler fa fa-bars\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\"></i>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div *ngIf=\"isToggleEnabled\" class=\"navbar-nav\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\">\n      <a class=\"nav-item nav-link\" routerLink=\"artists\">Artists</a>\n      <a class=\"nav-item nav-link\" routerLink=\"community\">Community</a>\n      <a class=\"nav-item nav-link\" routerLink=\"sponsors\">Sponsors</a>\n      <a class=\"nav-item nav-link\" routerLink=\"about\">About</a>\n      <a class=\"nav-item nav-link\" routerLink=\"contact\">Contact</a>\n    </div>\n    <div *ngIf=\"!isToggleEnabled\" class=\"navbar-nav\" data-target=\"#navbarNavAltMarkup\">\n      <a class=\"nav-item nav-link\" routerLink=\"artists\">Artists</a>\n      <a class=\"nav-item nav-link\" routerLink=\"community\">Community</a>\n      <a class=\"nav-item nav-link\" routerLink=\"sponsors\">Sponsors</a>\n      <a class=\"nav-item nav-link\" routerLink=\"about\">About</a>\n      <a class=\"nav-item nav-link\" routerLink=\"contact\">Contact</a>\n    </div>\n  </div>\n  <div class=\"progress-container\">\n    <div class=\"progress-bar\" id=\"myBar\"></div>\n  </div>\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sour-patch/sour-patch.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sour-patch/sour-patch.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<img src=\"../../assets/images/banners/sour-patch.jpg\" alt=\"Sana's Logo\" class=\"full-img mb-4\">\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h1>You've made it!</h1>\n      <p>An artist is a person engaged in an activity related to creating art, practicing the arts, or demonstrating an art.\n        The common usage in both everyday speech and academic discourse refers to a practitioner in the visual arts only.\n        However, the term is also often used in the entertainment business, especially in a business context, for musicians\n        and other performers (although less often for actors). \"Artiste\" (the French for artist) is a variant used in English\n        in this context, but this use has become rare. Use of the term \"artist\" to describe writers is valid, but less common,\n        and mostly restricted to contexts like that used in criticism.</p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <h1>Varieties</h1>\n      <p>The 'Bonnie Brae' is oblong, smooth, thin-skinned and seedless.[8] These are mostly grown in San Diego County, USA.[9]\n        The 'Eureka' grows year-round and abundantly. This is the common supermarket lemon,[10] also known as 'Four Seasons'\n        (Quatre Saisons) because of its ability to produce fruit and flowers together throughout the year. This variety is\n        also available as a plant to domestic customers.[11] There is also a pink-fleshed Eureka lemon, with a green and\n        yellow variegated outer skin.[12] The Lisbon lemon is very similar to the Eureka and is the other common supermarket\n        lemon. It is smoother than the Eureka, has thinner skin, and has fewer or no seeds. It generally produces more juice\n        than the Eureka.[13][14] The 'Femminello St. Teresa', or 'Sorrento'[15] is native to Italy. This fruit's zest is\n        high in lemon oils. It is the variety traditionally used in the making of limoncello. The 'Yen Ben' is an Australasian\n        cultivar.[16]\n      </p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <h1>Nutrition and phytochemicals</h1>\n      <p>Lemon is a rich source of vitamin C, providing 64% of the Daily Value in a 100 g reference amount (table). Other essential\n        nutrients are low in content. Lemons contain numerous phytochemicals, including polyphenols, terpenes, and tannins.[17]\n        Lemon juice contains slightly more citric acid than lime juice (about 47 g/l), nearly twice the citric acid of grapefruit\n        juice, and about five times the amount of citric acid found in orange juice.[18]</p>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sponsors/sponsors.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sponsors/sponsors.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<img src=\"../../assets/images/banners/sponsor.jpg\" alt=\"Sana's Logo\" class=\"full-img mb-4\">\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <p>Hey Potential Sponsor!</p>\n      <br>\n      <p>Lemon Zest is an upcoming festival in the DMV area bringing together fine artists, music acts, and folks in the\n        community. When the world shut down this past year, we wanted a way to give back to the community that made us\n        the artists that we are today. The name Lemon Zest Festival comes from the phrase “when life gives you lemons,\n        you make lemonade.”</p>\n      <br>\n      <p>Lemon Zest is a music and arts festival for all ages. We hope to bring together young budding and seasoned\n        artists together to experience each other’s art and tunes. We also hope to highlight community organizations and\n        businesses whose work we admire and align with our values of joy, community, and eclecticism.</p>\n      <br>\n      <p>The Lemon Zest team is made up of local artists and musicians who know and are in love with the music and art\n        scene within the DMV area. We have both performed and hosted events in the region, so we understand the\n        importance of planning an event by and for artists and musicians.</p>\n      <br>\n      <p>We are also partnering with Alex’s Lemonade Stand for this festival. Alex’s Lemonade Stand Foundation (ALSF) is\n        changing the lives of children with cancer by funding impactful research, raising awareness, supporting families\n        and empowering everyone to help cure childhood cancer. Also, Alex’s Lemonade Stand is a 501(c)(3) non-profit\n        organization! A percentage of your donations made to Lemon Zest Fest will benefit Alex’s Lemonade Stand and be\n        <span class=\"font-weight-bold\">tax deductible.</span>\n      </p>\n      <br>\n      <p>We also have the option in our sponsorship tiers to directly sponsor an artist or performer. We understand that\n        all labor, especially creative labor, is valuable and want to fairly compensate our artists and performers.</p>\n      <br>\n      <p>We’d love for you to review the various tiers of sponsorship below. Please let us know if you are interested in\n        becoming an official Lemon Zest Fest sponsor!</p>\n      <br>\n      <p>Thanks,\n        <br>\n        <span class=\"blakely\">THE LEMON ZEST FEST TEAM~</span>\n      </p>\n    </div>\n  </div>\n\n  <div class=\"lemon-center mt-5 mb-5\">\n    <img src=\"../../assets/images/pdf-exports/tiers-graphic.jpg\" alt=\"Sponsorship Packet Page 3\"\n      style=\"width:90%\">\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col\">\n      <h1 class=\"text-left lemon-zest-orange\">Sponsor an Artist!</h1>\n      <p>One of our values as a festival is community and we believe our artists make up a large part of that community. Separate from our sponsorship package, we are giving our sponsors the opportunity to sponsor an artist (exhibition or musical) so that we can show our appreciation for the artists who bring their vision and sound to the DMV area. We have options for sponsoring musicians based on performance length or based on the number of pieces they exhibit. Inquire more today!</p>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col\">\n      <h1  class=\"text-left lemon-zest-orange\">BE A COMMUNITY PARTNER~</h1>\n      <p>Are you a local business, nonprofit, or organization interested in being involved in the festival experience? Email us today to find out about how you can be a community partner!</p>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col lemon-center\">\n      <a class=\"lemon-zest-blue\" href=\"../../assets/pdfs/lemon-zest-sponsorship-packet.pdf\" download>\n        Click here to download our sponsorship packet\n      </a>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return __assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var extendStatics = function (d, b) {
      extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return extendStatics(d, b);
    };

    function __extends(d, b) {
      extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function () {
      __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
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
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function () {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
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
    /***/

  },

  /***/
  "./src/app/about/about.component.css":
  /*!*******************************************!*\
    !*** ./src/app/about/about.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.icon-content {\n  font-size: 24px;\n  margin-left: 12px;\n  margin-right: 12px;\n}\n\ni {\n  -webkit-transition: all .2s ease-in-out;\n  transition: all .2s ease-in-out;\n}\n\ni:hover { \n  -webkit-transform: scale(1.5); \n          transform: scale(1.5); \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1Q0FBK0I7RUFBL0IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uaWNvbi1jb250ZW50IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG5pIHtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbn1cblxuaTpob3ZlciB7IFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7IFxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AboutComponent = class AboutComponent {
      constructor() {
        this.profiles = [{
          facebook: 'https://www.facebook.com/sana.ras.shah',
          instagram: 'https://www.instagram.com/sanarshah/',
          profilePath: '../../assets/images/profiles/sana.jpg',
          role: 'Chief Creative Director',
          name: 'Sana',
          twitter: 'https://twitter.com/sanarshah'
        }, {
          facebook: 'https://www.facebook.com/michaelquarantillo',
          instagram: 'https://www.instagram.com/therealmikewave/',
          profilePath: '../../assets/images/profiles/mike.jpg',
          role: 'Production Lead',
          name: 'Mike',
          twitter: 'https://twitter.com/therealmikewave'
        }, {
          facebook: 'https://www.facebook.com/rohithjsebastian',
          instagram: 'https://www.instagram.com/officialblase/',
          profilePath: '../../assets/images/profiles/rohith.jpg',
          role: 'Logistics Director',
          name: 'Rohith',
          twitter: 'https://www.twitter.com/officialblase/'
        }, {
          facebook: 'https://www.facebook.com/sarwat.kazmi.3',
          instagram: 'https://www.instagram.com/sarwat.kazmi/',
          profilePath: '../../assets/images/profiles/sarwat.jpg',
          role: 'Social Media Producer',
          name: 'Sarwat',
          twitter: 'https://twitter.com/sarwhatkazmi'
        }];
      }

      ngOnInit() {}

    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.css */
      "./src/app/about/about.component.css")).default]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _artists_artists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./artists/artists.component */
    "./src/app/artists/artists.component.ts");
    /* harmony import */


    var _community_community_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./community/community.component */
    "./src/app/community/community.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _sour_patch_sour_patch_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./sour-patch/sour-patch.component */
    "./src/app/sour-patch/sour-patch.component.ts");
    /* harmony import */


    var _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./sponsors/sponsors.component */
    "./src/app/sponsors/sponsors.component.ts"); // CLI imports router


    const routes = [{
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
      data: {
        state: 'about'
      }
    }, {
      path: 'artists',
      component: _artists_artists_component__WEBPACK_IMPORTED_MODULE_4__["ArtistsComponent"],
      data: {
        state: 'artists'
      }
    }, {
      path: 'community',
      component: _community_community_component__WEBPACK_IMPORTED_MODULE_5__["CommunityComponent"],
      data: {
        state: 'community'
      }
    }, {
      path: 'contact',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
      data: {
        state: 'contact'
      }
    }, {
      path: 'sour-patch',
      component: _sour_patch_sour_patch_component__WEBPACK_IMPORTED_MODULE_8__["SourPatchComponent"],
      data: {
        state: 'sour-patch'
      }
    }, {
      path: 'sponsors',
      component: _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_9__["SponsorsComponent"],
      data: {
        state: 'sponsors'
      }
    }, {
      path: '**',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
      data: {
        state: '/'
      }
    }]; // configures NgModule imports and exports

    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    let AppComponent = class AppComponent {
      scrollMe(event) {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = winScroll / height * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
      }

      getState(outlet) {
        // Changing the activatedRouteData.state triggers the animation
        return outlet.activatedRouteData.state;
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", ['$event'])], AppComponent.prototype, "scrollMe", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('routerTransition', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* <=> *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        position: 'fixed',
        width: '100%'
      }), {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateX(100%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateX(0%)'
      }))], {
        optional: true
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateX(0%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateX(-100%)'
      }))], {
        optional: true
      })])])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _artists_artists_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./artists/artists.component */
    "./src/app/artists/artists.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./navigation-bar/navigation-bar.component */
    "./src/app/navigation-bar/navigation-bar.component.ts");
    /* harmony import */


    var _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./sponsors/sponsors.component */
    "./src/app/sponsors/sponsors.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _sour_patch_sour_patch_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./sour-patch/sour-patch.component */
    "./src/app/sour-patch/sour-patch.component.ts");
    /* harmony import */


    var _community_community_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./community/community.component */
    "./src/app/community/community.component.ts");

    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _artists_artists_component__WEBPACK_IMPORTED_MODULE_8__["ArtistsComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_11__["NavigationBarComponent"], _sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_12__["SponsorsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"], _sour_patch_sour_patch_component__WEBPACK_IMPORTED_MODULE_14__["SourPatchComponent"], _community_community_component__WEBPACK_IMPORTED_MODULE_15__["CommunityComponent"]],
      imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]],
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_4__["HashLocationStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/artists/artists.component.css":
  /*!***********************************************!*\
    !*** ./src/app/artists/artists.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGlzdHMvYXJ0aXN0cy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/artists/artists.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/artists/artists.component.ts ***!
    \**********************************************/

  /*! exports provided: ArtistsComponent */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArtistsComponent", function () {
      return ArtistsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ArtistsComponent = class ArtistsComponent {
      constructor() {}

      ngOnInit() {}

      get iframeHeights() {
        if ($(window).width() <= 350) {
          return {
            pHeight: 3650,
            gHeight: 2700
          };
        } else if ($(window).width() <= 400) {
          return {
            pHeight: 3350,
            gHeight: 2400
          };
        } else if ($(window).width() <= 450) {
          return {
            pHeight: 3250,
            gHeight: 2300
          };
        } else if ($(window).width() <= 600) {
          return {
            pHeight: 2950,
            gHeight: 2100
          };
        } else if ($(window).width() <= 1024) {
          return {
            pHeight: 2750,
            gHeight: 1900
          };
        } else {
          return {
            pHeight: 2750,
            gHeight: 1900
          };
        } // return {
        //   pHeight: (Math.ceil($(window).width()/50)*50)*(-2.8)+4630,
        //   gHeight: Math.ceil($(window).width()/50)*50,
        // }

      }

    };
    ArtistsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-artists',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./artists.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/artists/artists.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./artists.component.css */
      "./src/app/artists/artists.component.css")).default]
    })], ArtistsComponent);
    /***/
  },

  /***/
  "./src/app/community/community.component.css":
  /*!***************************************************!*\
    !*** ./src/app/community/community.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW11bml0eS9jb21tdW5pdHkuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/community/community.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/community/community.component.ts ***!
    \**************************************************/

  /*! exports provided: CommunityComponent */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommunityComponent", function () {
      return CommunityComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let CommunityComponent = class CommunityComponent {
      constructor() {}

      ngOnInit() {}

    };
    CommunityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-community',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./community.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/community/community.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./community.component.css */
      "./src/app/community/community.component.css")).default]
    })], CommunityComponent);
    /***/
  },

  /***/
  "./src/app/contact/contact.component.css":
  /*!***********************************************!*\
    !*** ./src/app/contact/contact.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".icon-content {\n  font-size: 24px;\n  margin-left: 12px;\n  margin-right: 12px;\n}\n\ni {\n  -webkit-transition: all .2s ease-in-out;\n  transition: all .2s ease-in-out;\n}\n\ni:hover { \n  -webkit-transform: scale(1.5); \n          transform: scale(1.5); \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVDQUErQjtFQUEvQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi1jb250ZW50IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG5pIHtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbn1cblxuaTpob3ZlciB7IFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7IFxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ContactComponent = class ContactComponent {
      constructor() {}

      ngOnInit() {}

    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.css */
      "./src/app/contact/contact.component.css")).default]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer {\n  height: 96px;\n  background-color: #2D2929;\n}\n\n.footer-content {\n  color: #FDFAFA;\n  font-size: 24px;\n  margin-top: 20px;\n  margin-left: 12px;\n  margin-right: 12px;\n}\n\ni {\n  -webkit-transition: all .2s ease-in-out;\n  transition: all .2s ease-in-out;\n}\n\ni:hover { \n  -webkit-transform: scale(1.5); \n          transform: scale(1.5); \n}\n\n.powered-by {\n  font-size: 1rem;\n}\n\na {\n  font-size: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1Q0FBK0I7RUFBL0IsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgaGVpZ2h0OiA5NnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQyOTI5O1xufVxuXG4uZm9vdGVyLWNvbnRlbnQge1xuICBjb2xvcjogI0ZERkFGQTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG5pIHtcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbn1cblxuaTpob3ZlciB7IFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7IFxufVxuXG4ucG93ZXJlZC1ieSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuYSB7XG4gIGZvbnQtc2l6ZTogdW5zZXQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let FooterComponent = class FooterComponent {
      constructor() {}

      ngOnInit() {}

    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\n  width: 100%;\n  height: auto;\n}\n\n.center {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n}\n\n.container {\n  overflow: auto;\n  width: 100%;\n  height: 100%;\n  -webkit-overflow-scrolling: touch !important;\n}\n\nform {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsMkJBQW9CO0VBQXBCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmNlbnRlciB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaCAhaW1wb3J0YW50O1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let HomeComponent = class HomeComponent {};
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/navigation-bar/navigation-bar.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/navigation-bar/navigation-bar.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navbar .navbar-collapse {\n  text-align: center;\n}\n\n.navbar-brand {\n  color: #f9ed27 !important;\n}\n\n.nav-item:hover {\n  background: #f9ed27 !important;\n  color: #2d2e74 !important;\n}\n\n.navbar-toggler {\n  /* background: #f9ed27 !important; */\n  border-color: transparent !important;\n}\n\n/* The progress container (grey background) */\n\n.progress-container {\n  width: 100%;\n  height: 4px;\n  background: #2d2e74 !important;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin-top: 56px;\n  -webkit-overflow-scrolling: touch !important;\n}\n\n/* The progress bar (scroll indicator) */\n\n.progress-bar {\n  height: 4px;\n  background: #f9ed27 !important;\n  width: 0%;\n  -webkit-overflow-scrolling: touch !important;\n  \n}\n\n.sticky {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 9;\n}\n\na {\n  color: #f9ed27 !important;\n}\n\n.fa-bars {\n  color: #f9ed27 !important;\n  font-size: 28px;\n}\n\n.bg-light {\n  background: #2d2e74 !important;\n}\n\nimg {\n  margin-top: -15px;\n}\n\n#lemon {\n  -webkit-transition: all 1s ease-in-out;\n  transition: all 1s ease-in-out;\n}\n\n#logo-text {\n  font-size: 40px !important;\n}\n\n#logo-text:hover {\n  text-decoration: none!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi1iYXIvbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsb0NBQW9DO0FBQ3RDOztBQUVBLDZDQUE2Qzs7QUFDN0M7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLDRDQUE0QztBQUM5Qzs7QUFFQSx3Q0FBd0M7O0FBQ3hDO0VBQ0UsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsNENBQTRDOztBQUU5Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsTUFBTTtFQUNOLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0NBQThCO0VBQTlCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24tYmFyL25hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIC5uYXZiYXItY29sbGFwc2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBjb2xvcjogI2Y5ZWQyNyAhaW1wb3J0YW50O1xufVxuXG4ubmF2LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjllZDI3ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMmQyZTc0ICFpbXBvcnRhbnQ7XG59XG5cbi5uYXZiYXItdG9nZ2xlciB7XG4gIC8qIGJhY2tncm91bmQ6ICNmOWVkMjcgIWltcG9ydGFudDsgKi9cbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4vKiBUaGUgcHJvZ3Jlc3MgY29udGFpbmVyIChncmV5IGJhY2tncm91bmQpICovXG4ucHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiAjMmQyZTc0ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXRvcDogNTZweDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoICFpbXBvcnRhbnQ7XG59XG4gIFxuLyogVGhlIHByb2dyZXNzIGJhciAoc2Nyb2xsIGluZGljYXRvcikgKi9cbi5wcm9ncmVzcy1iYXIge1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZDogI2Y5ZWQyNyAhaW1wb3J0YW50O1xuICB3aWR0aDogMCU7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaCAhaW1wb3J0YW50O1xuICBcbn1cblxuLnN0aWNreSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogOTtcbn1cblxuYSB7XG4gIGNvbG9yOiAjZjllZDI3ICFpbXBvcnRhbnQ7XG59XG5cbi5mYS1iYXJzIHtcbiAgY29sb3I6ICNmOWVkMjcgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyOHB4O1xufVxuXG4uYmctbGlnaHQge1xuICBiYWNrZ3JvdW5kOiAjMmQyZTc0ICFpbXBvcnRhbnQ7XG59XG5cbmltZyB7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xufVxuXG4jbGVtb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XG59XG5cbiNsb2dvLXRleHQge1xuICBmb250LXNpemU6IDQwcHggIWltcG9ydGFudDtcbn1cblxuI2xvZ28tdGV4dDpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/navigation-bar/navigation-bar.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/navigation-bar/navigation-bar.component.ts ***!
    \************************************************************/

  /*! exports provided: NavigationBarComponent */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function () {
      return NavigationBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let NavigationBarComponent = class NavigationBarComponent {
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

    NavigationBarComponent.ctorParameters = () => [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
    }];

    NavigationBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navigation-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navigation-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation-bar/navigation-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigation-bar.component.css */
      "./src/app/navigation-bar/navigation-bar.component.css")).default]
    })], NavigationBarComponent);
    /***/
  },

  /***/
  "./src/app/sour-patch/sour-patch.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/sour-patch/sour-patch.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvdXItcGF0Y2gvc291ci1wYXRjaC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/sour-patch/sour-patch.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/sour-patch/sour-patch.component.ts ***!
    \****************************************************/

  /*! exports provided: SourPatchComponent */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourPatchComponent", function () {
      return SourPatchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let SourPatchComponent = class SourPatchComponent {
      constructor() {}

      ngOnInit() {}

    };
    SourPatchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sour-patch',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sour-patch.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sour-patch/sour-patch.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sour-patch.component.css */
      "./src/app/sour-patch/sour-patch.component.css")).default]
    })], SourPatchComponent);
    /***/
  },

  /***/
  "./src/app/sponsors/sponsors.component.css":
  /*!*************************************************!*\
    !*** ./src/app/sponsors/sponsors.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nwb25zb3JzL3Nwb25zb3JzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/sponsors/sponsors.component.ts":
  /*!************************************************!*\
    !*** ./src/app/sponsors/sponsors.component.ts ***!
    \************************************************/

  /*! exports provided: SponsorsComponent */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SponsorsComponent", function () {
      return SponsorsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let SponsorsComponent = class SponsorsComponent {
      constructor() {}

      ngOnInit() {}

    };
    SponsorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sponsors',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sponsors.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sponsors/sponsors.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sponsors.component.css */
      "./src/app/sponsors/sponsors.component.css")).default]
    })], SponsorsComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function (module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/rohithsebastian/Documents/Lemon Zest Festival/lemon-zest-fest/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map