!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("h6c0i"),r=document.querySelector(".form"),u=document.querySelector('input[name="delay"]'),a=document.querySelector('input[name="step"]'),c=document.querySelector('input[name="amount"]'),l=function(e,n){return new Promise((function(t,o){var i=Math.random()>.3;setTimeout((function(){i&&t({position:e,firstDelay:n}),o({position:e,firstDelay:n})}),n)}))};function f(e){var n=e.position,t=e.firstDelay;i.Notify.success("Fulfilled promise ".concat(n," in ").concat(t," ms"))}function s(e){var n=e.position,t=e.firstDelay;i.Notify.failure("Rejected promise ".concat(n," in ").concat(t," ms"))}r.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(u.value),t=Number(a.value),o=Number(c.value),i=1;i<=o;i+=1)l(i,n).then(f).catch(s),n+=t}))}();
//# sourceMappingURL=03-promises.c989221a.js.map