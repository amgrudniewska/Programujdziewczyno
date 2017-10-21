"use strict";
document.addEventListener("DOMContentLoaded", function() {

  var menuElement = document.querySelector(".for-dropdown");
  var menuList = document.querySelector(".for-dropdown .dropdown");

  menuElement.addEventListener("mouseover", function() {
    menuList.style.display = "block";
  });
  menuElement.addEventListener("mouseout", function() {
    menuList.style.display = "none";
  });
  // zadanie 2

  var buttons = document.querySelectorAll('.read-more');

  function showHide() {
    var textArea = this.previousElementSibling;
    if (textArea.style.display === 'none' || textArea.style.display === '') {
      textArea.style.display = "block";
      this.innerHTML = 'mniej<span class="glyphicon glyphicon-chevron-up"></span>';
    } else {
      textArea.style.display = "none";
      this.innerHTML = 'więcej<span class="glyphicon glyphicon-chevron-down"></span>';
    }
  }

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", showHide);
  }

  //zadanie 3//

  var Navigation = document.querySelector("nav.navbar");

  window.addEventListener("scroll", function() {
    Navigation.style.borderBottom = "1px solid #7f7f7f";

  });
});
