// Copyright (c) 2024 David.E All rights reserved
//
// Created by: David.E
// Created on: April 2024
// This file contains the JS functions for index.html

/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  const positiveButtonChecked = document.getElementById('option-positive').checked;
  const negativeButtonChecked = document.getElementById('option-negative').checked;

  let value;
  if (positiveButtonChecked) {
    value = Math.floor(Math.random() * 6) + 1; // Generates a number between 1 and 6
  } else if (negativeButtonChecked) {
    value = -(Math.floor(Math.random() * 6) + 1); // Generates a number between -1 and -6
  } else {
    value = "No option selected";
  }

  document.getElementById("radio-button-value").innerHTML = `Value is: ${value}`;
  }
