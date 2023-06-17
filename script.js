/*
File: script.js
GUI Assignment 3: Creating an interactive dynamic multiplication table_stuff
The Anh Tran, UMass Lowell Computer Science, theanh_tran1@student.uml.edu
Copyright (c) 2022 by The Anh Tran. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
Updated on 6/16/23 at 9:00pm.
Instructor: Professor Wenjin Zhou
Sources of Help: W3Schools and Stackoverflow
Brief Overview: I created a website that is capable of creating a multiplication
table with the range from -50 to 50.
*/

function generateTable() {
    // Get the user-entered values from the form
    var startMultiplier = parseInt(document.getElementById("startMultiplier").value);
    var endMultiplier = parseInt(document.getElementById("endMultiplier").value);
    var startMultiplicand = parseInt(document.getElementById("startMultiplicand").value);
    var endMultiplicand = parseInt(document.getElementById("endMultiplicand").value);
  
    // Clear the previous table, if any
    var table = document.getElementById("multiplicationTable");
    table.innerHTML = "";

    // Validate input values Start Multiplier
    if (isNaN(startMultiplier)) {
      document.getElementById("errorMessage").textContent = "Please enter valid integer values (from -50 to 50) for Start Multiplier.";
      return;
    }
    else if (startMultiplier < -50 || startMultiplier > 50) {
      document.getElementById("errorMessage").textContent = "Your Start Multiplier is out of range. Please enter valid integer values (from -50 to 50) for Start Multiplier.";
      return;
    }

    // Validate input values End Multiplier
    if (isNaN(endMultiplier)) {
      document.getElementById("errorMessage").textContent = "Please enter valid integer values (from -50 to 50) for End Multiplier.";
      return;
    }
    else if (endMultiplier < -50 || endMultiplier > 50) {
      document.getElementById("errorMessage").textContent = "Your End Multiplier is out of range. Please enter valid integer values (from -50 to 50) for End Multiplier.";
      return;
    }

    // Validate input values Start Multiplicand
    if (isNaN(startMultiplicand)) {
      document.getElementById("errorMessage").textContent = "Please enter valid integer values (from -50 to 50) for Start Multiplicand.";
      return;
    }
    else if (startMultiplicand < -50 || startMultiplicand > 50) {
      document.getElementById("errorMessage").textContent = "Your Start Multiplicand is out of range. Please enter valid integer values (from -50 to 50) for Start Multiplicand.";
      return;
    }

    // Validate input values End Multiplicand
    if (isNaN(endMultiplicand)) {
      document.getElementById("errorMessage").textContent = "Please enter valid integer values (from -50 to 50) for End Multiplicand.";
      return;
    }
    else if (endMultiplicand < -50 || endMultiplicand > 50) {
      document.getElementById("errorMessage").textContent = "Your End Multiplicand is out of range. Please enter valid integer values (from -50 to 50) for End Multiplicand.";
      return;
    }
  
    // Create the table rows and columns dynamically
    for (var i = startMultiplicand - 1; i <= endMultiplicand; i++) {
      var row = table.insertRow();
  
      for (var j = startMultiplier - 1; j <= endMultiplier; j++) {
        var cell = row.insertCell();
        if (i === startMultiplicand - 1 && j === startMultiplier - 1) {
          cell.innerHTML = "";
        } else if (i === startMultiplicand - 1) {
          cell.innerHTML = j;
        } else if (j === startMultiplier - 1) {
          cell.innerHTML = i;
        } else {
          cell.innerHTML = i * j;
        }
      }
    }
  }
  