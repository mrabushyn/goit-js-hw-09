!function(){var t=document.querySelector("input[name=delay]"),e=document.querySelector("input[name=step]"),n=document.querySelector("input[name=amount]"),o=document.querySelector("button[type=submit]");function c(t){console.log(t)}function u(t){console.log("error"),console.log(t)}console.log(o),o.addEventListener("submit",(function(o){o.preventDefault(),console.log(o);t.textContent,e.textContent,n.textContent;console.log(t.textContent);var r=setInterval((function(){var e,n;(e=2,n=t,new Promise((function(t,o){var c=Math.random()>.3;setTimeout((function(){c?t("esssss "+"".concat(e)):o("nooooo")}),n)}))).then(c).catch(u)}),e);clearInterval(r)}))}();
//# sourceMappingURL=03-promises.931723ff.js.map
