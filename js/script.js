// Copyright (c) 2024 David.E All rights reserved
//
// Created by: David.E
// Created on: April 2024
// This file contains the JS functions for index.html

/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  alwaysOnButtonChecked = document.getElementById('option-positive').checked

  if (alwaysOnButtonChecked == true) {
    document.getElementById("radio-button-value").innerHTML = (x >= 0 && x <= 10)
  } else {
    document.getElementById("radio-button-value").innerHTML =
      "<p>Value is: -buttonClicked</p>"
  }
}
