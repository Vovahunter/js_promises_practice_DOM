parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n=new Promise(function(n,e){document.body.addEventListener("click",function(){n(" First promise was resolved")}),setTimeout(function(){e(new Error(" First promise was rejected"))},3e3)}),e=new Promise(function(n,e){document.body.addEventListener("click",function(){n("Second promise was resolved")}),document.body.addEventListener("contextmenu",function(){n(" Second promise was resolved ")})}),t=new Promise(function(n,e){var t=!1,o=!1;document.body.addEventListener("mouseup",function(e){0===e.button&&(t=!0),2===e.button&&(o=!0),t&&o&&n("Third promise was resolved ")})});function o(n){document.body.insertAdjacentHTML("beforeend",'\n    <div class="success" data-qa="notification">\n      '.concat(n,"\n    </div>\n  "))}function i(n){document.body.insertAdjacentHTML("beforeend",'\n    <div class="warning" data-qa="notification">\n      '.concat(n,"\n    </div>\n  "))}n.then(o,i),e.then(o,i),t.then(o,i);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.57d69087.js.map