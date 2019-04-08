
"use strict";
var delivInfo = {};
var delivSummary = document.getElementById("deliverTo");
var foodInfo = {};
var foodSummary = document.getElementById("order");

// function that process the pizza choices
function processFood() {
  var prop;
  var crustOpt = document.getElementsByName("crust");
  var toppings = 0;
  var toppingBoxes = document.getElementsByName("toppings");
  var instr = document.getElementById("instructions");

  if (crustOpt[0].checked) {
    foodInfo.crust = crustOpt[0].value;
  }
  else {
    foodInfo.crust = crustOpt[1].value;
  }

  foodInfo.size = document.getElementById("size").value;

  for (var i = 0; i < toppingBoxes.length; i++){
    if (toppingBoxes[i].checked) {
      toppings++;
      foodInfo["topping" + toppings] = toppingBoxes[i].value;
    }
  }

  if (instr.value !== "" ) {
    foodInfo.instructions = instr.value;
  }
  else {
    foodInfo.instructions = "";
  }

  foodSummary.innerHTML += "<p><span>Crust</span>: " + foodInfo.crust + "</p>";
  foodSummary.innerHTML += "<p><span>Size</span>: " + foodInfo.size + "</p>";
  foodSummary.innerHTML += "<p><span>Topping(s)</span>: " + "</p>";
  foodSummary.innerHTML += "<ul>";

  for (var i = 1; i < 6; i++) {
    if (foodInfo["topping" + i]) {
      foodSummary.innerHTML += "<li>" + foodInfo["topping" + i] + "</li>";
    }
  }

  foodSummary.innerHTML += "<ul>";
  foodSummary.innerHTML += "<p><span>Instructions</span>: " + foodInfo.instructions;
  document.getElementById("order").style.display = "block";
}

// function that recieves the information from the form
function processDeliveryInfo() {
  var prop;
    delivInfo.name = document.getElementById("nameinput").value;
    delivInfo.addr = document.getElementById("addrinput").value;
    delivInfo.city = document.getElementById("cityinput").value;
    delivInfo.email = document.getElementById("emailinput").value;
    delivInfo.phone = document.getElementById("phoneinput").value;

  for (prop in delivInfo) {
    delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
  }
  document.getElementById("deliverTo").style.display = "block";
}

// fuction that sidplays the order information
function previewOrder() {
  processDeliveryInfo();
  processFood();
  document.getElementsByTagName("section")[0].style.display = "block";
}

// event listen for the preview order button
function createEventListener() {
  var submitButton = document.getElementById("previewBtn");
  if(submitButton.addEventListener){
    submitButton.addEventListener("click", previewOrder, false);
  }
  else if (submitButton.attachEventListener) {
    submitButton.attachEventListener("onclick", previewOrder);
  }
}
if (window.addEventListener) {
  window.addEventListener("load", createEventListener, false);
}
else if (window.attachEventListener) {
  window.attachEventListener("onload", createEventListener);
}
