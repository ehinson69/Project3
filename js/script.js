$(document).ready(function() {
  // Placing focus on first text field by default.
  $("#name").focus();

  // Revealing text field when the "Other" option is selected from the "Job Role" drop down menu.
  $("#other-title").hide(); // Hiding the 'other' input field first.

  $("#title").change(function () {
    if ($(this).val() === "other") {
      $("#other-title").show();
    } else {
      $("#other-title").hide();
    }
  });

  //*********************************T-shirt section - display right color options ***************/

  $("#colors-js-puns").hide(); // Extra credit: Hiding "Color" label and select menu until a T-Shirt design is selected from the "Design" menu.
  $('#design option:first-child').hide(); // Hiding the select theme option.
  $("#color option").hide(); //hiding all color options before showing right ones

  $("#design").on('change', function () { //show right colors for selected design.
    $("#color option").hide();

    if ($(this).val() === "js puns") {
      $("#color option[value='cornflowerblue']").show(); //show right colors
      $("#color option[value='darkslategrey']").show();
      $("#color option[value='gold']").show();
      $("#color").val("cornflowerblue"); //select the first one as default
      $("#colors-js-puns").show();
    } else {
      ($(this).val() === "heart js")
      $("#color option[value='tomato']").show();
      $("#color option[value='steelblue']").show();
      $("#color option[value='dimgrey']").show();
      $("#color").val("tomato");
      $("#colors-js-puns").show();
    }
  });

  //******************************** Register for Activities section ****************************/

  // Set variables for activities
  var jsFrameworks = $("input[name='js-frameworks'");
  var jsLibraries = $("input[name='js-libs']");
  var express = $("input[name='express']");
  var nodeJS = $("input[name='node']");

  // Add total cost of activities
  var totalCost = 0;
  $('.activities').append('<div id="total"></div>');

  var updateCost = function (cost) {
    totalCost += cost;
    document.getElementById("total").innerHTML = "Total: $" + totalCost;
  };

  $("input[name='all']").change(function () {
    if ($(this).prop("checked")) {
      updateCost(200);
    } else {
      updateCost(-200);
    }
  });

  jsFrameworks.change(function () {
    if ($(this).prop("checked")) {
      express.prop("disabled", true);
      express.parent().addClass("disabled");
      express.parent().append('<span class="unavailable">&nbsp;&nbsp;&nbsp;&nbsp;Unavailable</span>');
      updateCost(100);
    } else {
      express.prop("disabled", false);
      express.parent().removeClass("disabled");
      express.parent().find('.unavailable').remove();
      updateCost(-100);
    }
  });

  jsLibraries.change(function () {
    if ($(this).prop("checked")) {
      nodeJS.prop("disabled", true);
      nodeJS.parent().addClass("disabled");
      nodeJS.parent().append('<span class="unavailable">&nbsp;&nbsp;&nbsp;&nbsp;Unavailable</span>');
      updateCost(100);
    } else {
      nodeJS.prop("disabled", false);
      nodeJS.parent().removeClass("disabled");
      nodeJS.parent().find('.unavailable').remove();
      updateCost(-100);
    }
  });

  express.change(function () {
    if ($(this).prop("checked")) {
      jsFrameworks.prop("disabled", true);
      jsFrameworks.parent().addClass("disabled");
      jsFrameworks.parent().append('<span class="unavailable">&nbsp;&nbsp;&nbsp;&nbsp;Unavailable</span>');
      updateCost(100);
    } else {
      jsFrameworks.prop("disabled", false);
      jsFrameworks.parent().removeClass("disabled");
      jsFrameworks.parent().find('.unavailable').remove();
      updateCost(-100);
    }
  });

  nodeJS.change(function () {
    if ($(this).prop("checked")) {
      jsLibraries.prop("disabled", true);
      jsLibraries.parent().addClass("disabled");
      jsLibraries.parent().append('<span class="unavailable">&nbsp;&nbsp;&nbsp;&nbsp;Unavailable</span>');
      updateCost(100);
    } else {
      jsLibraries.prop("disabled", false);
      jsLibraries.parent().removeClass("disabled");
      jsLibraries.parent().find('.unavailable').remove();
      updateCost(-100);
    }
  });

  $("input[name='build-tools']").change(function () {
    if ($(this).prop("checked")) {
      updateCost(100);
    } else {
      updateCost(-100);
    }
  });

  $("input[name='npm']").change(function () {
    if ($(this).prop("checked")) {
      updateCost(100);
    } else {
      updateCost(-100);
    }
  });

  //***//**************************************Payment Information section*****************************/

  $("#payment option[value='select_method']").hide(); //Hiding the select Payment Method.
  $("#payment").val("credit card"); //Showing credit Card by default
  $('div p:contains("If you selected the PayPal option")').hide(); //Hiding the <p> tag elements initially.
  $('div p:contains("If you selected the Bitcoin option")').hide();


  $("#payment").on('change', function () {

    if ($("#payment").val() === "credit card") {
      $("#credit-card").show();
      $('div p:contains("If you selected the PayPal option")').hide();
      $('div p:contains("If you selected the Bitcoin option")').hide();
    } else if

    ($("#payment").val() === "paypal") {
      $("#credit-card").hide();
      $("#payment option[value='paypal']").show();
      $('div p:contains("If you selected the Bitcoin option")').hide();
      $('div p:contains("If you selected the PayPal option")').show();

    } else {
      ($("#payment").val() === "bitcoin")
      $("#credit-card").hide();
      $("#payment option[value='bitcoin']").show();
      $('div p:contains("If you selected the PayPal option")').hide();
      $('div p:contains("If you selected the Bitcoin option")').show();
    }
  });

  //****************************** Form Validation and Validation Messages ***************************/

  // Add Error/Success Indicators on Keyup for fun
  $('#name, #mail, #cc-num, #zip, #cvv, #other-field').keyup(function () {
    if ($(this).val() === "") {
      $(this).removeClass('success');
      $(this).addClass('error');
    } else {
      $(this).removeClass('error');
      $(this).addClass('success');
    }
  });

  var emailAddress = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
  var creditCard = /^[0-9]{13,16}$/;
  var zipCode = /^[0-9]{5}$/;
  var cvv = /^[0-9]{3}$/;
  var errorMessage = "";

  $('form').prepend('<p id="error-message"></p>');
  $('#error-message').hide();
  $('form').submit(function (e) {
    e.preventDefault();

    if ($('#name').val() === "") {
      console.log("Error!");
      $("html, body").animate({
        scrollTop: 0
      }, "slow");
      errorMessage = "<h2>Error!</h2> Please enter a valid first and last name."; //Extra credit
      errorMessage = errorMessage.fontcolor("red"); //Extra credit
      $('#name').css('border-color', 'red'); //Extra credit
      $('#mail').css('border-color', ''); //Not displaying border color
      $("#cc-num").css('border-color', '');
      $("#cvv").css('border-color', '');
      $("#zip").css('border-color', '');
      $('#name').addClass('error');
      $('#name').focus();

    } else if (!emailAddress.test($('#mail').val())) {
      $("html, body").animate({
        scrollTop: 0
      }, "slow");
      errorMessage = "<h2>Error!</h2> Please enter a valid email address."; //Extra credit
      errorMessage = errorMessage.fontcolor("red"); //Extra credit
      $('#mail').css('border-color', 'red'); //Extra credit
      $("#cc-num").css('border-color', '');
      $("#cvv").css('border-color', '');
      $("#zip").css('border-color', '');
      $('#name').css('border-color', '');
      $('#mail').focus();

    } else if ($(".activities > label > input:checked").length === 0) {
      $("html, body").animate({
        scrollTop: 0
      }, "slow");
      errorMessage = "<h2>Error!</h2> Please select at least one activity."; //Extra credit
      errorMessage = errorMessage.fontcolor("red"); //Extra credit
      $(".activities").css('color', 'red');
      $('#name').css('border-color', '');
      $("#cc-num").css('border-color', '');
      $("#cvv").css('border-color', '');
      $("#zip").css('border-color', '');
      $('#mail').css('border-color', '');
      $('.activities').focus();
    } else if ($("#payment").val() === "credit card" && !creditCard.test($("#cc-num").val())) {
      $("html, body").animate({
        scrollTop: 0
      }, "slow");
      errorMessage = "<h2>Error!</h2>Please enter a valid credit card number between 13 and 16 digits.";
      errorMessage = errorMessage.fontcolor("red"); //Extra credit
      $("#cc-num").css('border-color', 'red'); //Extra credit
      $('#mail').css('border-color', '');
      $("#cvv").css('border-color', '');
      $('#name').css('border-color', '');
      $("#zip").css('border-color', '');
      $('#cc-num').focus();

    } else if ($("#payment").val() === "credit card" && !zipCode.test($("#zip").val())) {
      $("html, body").animate({
        scrollTop: 0
      }, "slow");
      errorMessage = "<h2>Error!</h2>Please enter a 5 digit zip code.";
      errorMessage = errorMessage.fontcolor("red");
      $("#zip").css('border-color', 'red'); //Extra credit
      $("#cc-num").css('border-color', '');
      $('#mail').css('border-color', '');
      $("#cvv").css('border-color', '');
      $('#zip').focus();

    } else if ($("#payment").val() === "credit card" && !cvv.test($("#cvv").val())) {
      $("html, body").animate({
        scrollTop: 0
      }, "slow");
      errorMessage = "<h2>Error!</h2>Please enter a 3 digit CVV";
      errorMessage = errorMessage.fontcolor("red");
      $("#cvv").css('border-color', 'red'); //Extra credit
      $('#mail').css('border-color', '');
      $("#zip").css('border-color', '');
      $("#cc-num").css('border-color', '');
      $('#cvv').focus();

    } else {
      $("html, body").animate({
        scrollTop: 0
      }, "slow");
      errorMessage = "";
      alert("Thanks for registering!");
      $("#cvv").css('border-color', '');
      $("#zip").css('border-color', '');
      $("#cc-num").css('border-color', '');
      $('#mail').css('border-color', '');

      location.reload();
    }
    document.getElementById('error-message').innerHTML = errorMessage;
    $('#error-message').show();

  });


});