!function(){var n=document.body.firstElementChild.nextElementSibling,e=n.nextElementSibling;n.addEventListener("click",(function(t){e.disabled=!1,changeColorId=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),n.disabled=!0})),e.addEventListener("click",(function(t){n.disabled=!1,clearInterval(changeColorId),e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.51ef40ca.js.map
