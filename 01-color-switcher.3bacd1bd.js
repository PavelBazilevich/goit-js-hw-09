!function(){var e=document.body.firstElementChild.nextElementSibling,n=e.nextElementSibling;n.disabled=!0;e.addEventListener("click",(function(t){n.disabled=!1,timerId=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),e.disabled=!0})),n.addEventListener("click",(function(t){e.disabled=!1,clearInterval(timerId),n.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.3bacd1bd.js.map
