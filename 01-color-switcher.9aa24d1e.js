!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=null;function a(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}t.addEventListener("click",(function(){t.disabled=!0,n=setInterval(a,1e3)})),e.addEventListener("click",(function(){clearInterval(n),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.9aa24d1e.js.map
