"use strict";
document.addEventListener("DOMContentLoaded", function() {

var menuElement = document.querySelector(".for-dropdown");
var menuList = document.querySelector(".for-dropdown .dropdown");

menuElement.addEventListener("mouseover", function() {
  menuList.style.display = "block";
menuElement.addEventListener("mouseout", function() {
  menuList.style.display ="none";
});

  });

})
