// ==UserScript==
// @name         Skip reCAPTCHA
// @namespace    https://github.com/LydiaAgute/Skip-reCAPTCHA
// @description  A small tool to auto-click reCAPTCHA checkbox
// @version      1.0
// @updateURL    https://github.com/LydiaAgute/Skip-reCAPTCHA/raw/master/Skip-reCAPTCHA.meta.js
// @downloadURL  https://github.com/LydiaAgute/Skip-reCAPTCHA/raw/master/Skip-reCAPTCHA.user.js
// @author       LydiaAgute
// @match        https://www.google.com/recaptcha/**
// @grant        none
// @run-at document-end
// ==/UserScript==

(function () {
  "use strict";
  console.log(window.location);
  const clickCheck = setInterval(function () {
    if (document.querySelectorAll(".recaptcha-checkbox-checkmark").length > 0) {
      clearInterval(clickCheck);
      document.querySelector(".recaptcha-checkbox-checkmark").click();
    }
  }, 60);
})();
