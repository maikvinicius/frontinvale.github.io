"use strict";var frontinvale=function(){var e=function(){n(),t(),o(),c(),i()},n=function(){setTimeout(function(){document.body.classList.remove("loading")},2e3)},t=function(){for(var e=document.querySelectorAll("section:not(.welcome)"),n=0;n<e.length;n++)e[n].style.minHeight=window.innerHeight+0+"px"},o=function(){var e=null;window.onresize=function(){null!=e&&clearTimeout(e),e=setTimeout(function(){t()},100)}},i=function(){document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0].addEventListener("click",function(e){document.getElementById("menu-control").checked=!1})},c=function(){var e=document.getElementById("iframe-box");e&&(e.addEventListener("click",function(){document.getElementById("iframe").style.pointerEvents="auto"},!1),e.addEventListener("mouseleave",function(){document.getElementById("iframe").style.pointerEvents="none"},!1))};return{init:e}}();window.onload=frontinvale.init;