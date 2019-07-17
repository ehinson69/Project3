//**Function to focus on Name field as soon as form is displayed.*/
$(document).ready(function () {
      $('#name').focus();

      //**Change function to show/hide Other field.*/
      $('#other-title').hide();
      $('#title').change(function () {
        if ($('#title').val() == 'other') {
          $('#other-title').show().focus();
        } else {
          $('#other-title').hide();
        }
      });

      //******************************T-shirt section********************************/
      //**Select a t-shirt design and a color will show/hide.*/
      // $('#color option', '#design option:first').hide();

      $('#color option').hide(); // Extra credit.
      $('#design option:first').hide();
      $("#colors-js-puns").hide();
      $('#design').on('change', function () {
        $('#color option').hide();

        if ($('#design option:selected').val() == "js puns") {
          $('#color option:contains("JS Puns shirt only")').show();
          $("#colors-js-puns").show(); // Extra credit.
          $('#color').val("cornflowerblue");
        } else {
          $('#color option:contains("JS shirt only")').show();
          $("#colors-js-puns").show(); // Extra credit.
          $('#color').val("tomato");
        }
      });

      // //***********************************Activities Section********************/
      //When each activity checkbox is checked, the cost will add or subtract. 
      $(":checkbox").change(function () {
        $(".conflict").remove();
        $("#activityerror").remove();

        var frameworks = $("input[name='js-frameworks']");
        var express = $("input[name='express']");
        var libraries = $("input[name='js-libs']");
        var node = $("input[name='node']");
        //Conflicts with the same day and times to disable if chosen and grayed out.
        function timeConflict(workshop, conflict) {
          if (workshop.is(":checked")) {
            conflict.attr("disabled", true);
            conflict.parent().after("<p class='conflict'>This workshop conflicts with your current selection.</p>");
            conflict.parent().css('color', 'gray');
          } else {
            conflict.attr("disabled", false);
            conflict.parent().css('color', '#000');
          }
        }
        timeConflict(frameworks, express);
        timeConflict(express, frameworks);
        timeConflict(libraries, node);
        timeConflict(node, libraries);
      });
      //Users select activities to register and receive a running total.
      $(":checkbox").change(function () {
        var total = 0;
        $("#cost").remove();
        //Only the Main Conference is $200, so when checked, it will add up.
        if ($("input[name='all']").is(":checked")) {
          total += 200;
        }
        //Workshops that are not the Main Conference are $100, so when checked, they will add to total.
        $(".activities input:not([name='all'])").each(function () {
          if ($(this).is(":checked")) {
            total += 100;
          }
        });
        //Append the activities and get a total cost for the user.
        if (total > 0) {
          $(".activities").append("<p id='cost'>Total cost: $" + total + " </p>");
        }
      });


      //*****************************Payment Information section*****************************/
      //Show credit card as default option and hide the PayPal and Bitcoin options until selected.
      //Adding classes to the other payment option divs to make them easier to work with.
      $('#credit-card').show().next().addClass('paypal').hide();
      $('#credit-card').show().next().next().addClass('bitcoin').hide();

      $('#credit-card').show();
      $('#payment option[value="credit card"]').prop('selected', true);

      $('#payment option[value="select_method"]').hide();

      $('#payment').change((event) => {
        let selected = $('#payment option:selected').text();
        $('.paypal').hide();
        $('#credit-card').hide();
        $('.bitcoin').hide();

        if (selected === "Credit Card") {
          $('#credit-card').show();
          $("#cc-num").focus();
        } else if (selected === "PayPal") {
          $('.paypal').show();
        } else if (selected === "Bitcoin") {
          $('.bitcoin').show();
        }
      });

      //************************************Validation Section*************************/
      //Validating Fields and returning true or false to determine which fields are invalid

      function validateName() {
        let nameRegex = /^([a-zA-Z ]){2,30}$/;

        if (!nameRegex.test($('#name').val())) {
          $('#name').removeClass('success').addClass('error');
          $('#name').prev().text('Name field is required.').css('color', 'red');
          return false;
        } else {
          $('#name').removeClass('error').addClass('success')
          $('#name').prev().text('Name:').css('color', '');
          return true;
        }
      }

      function validateEmail() {
        let emailAdress = /^[^@]+@[^@.]+\.[a-z]+$/i;

        if (emailAdress.test($('#mail').val())) {
          $('#mail').removeClass('error').addClass('success');
          $('#mail').prev().text('Email:').css('color', '');
          return true;
        } else if ($('#mail').val() !== '') {
          $('#mail').removeClass('success').addClass('error');
          $('#mail').prev().text('Email is Invalid').css('color', 'red');
          return false;
        } else {
          $('#mail').removeClass('success').addClass('error');
          $('#mail').prev().text('Email is Invalid.').css('color', 'red');
          return false;
        }
      }

      function validateCreditCard() {
        let creditCard = /^\d{13,16}$/;

        if (creditCard.test($('#cc-num').val())) {
          $('#cc-num').removeClass('error').addClass('success');
          $('#cc-num').prev().text('Card Number:').css('color', '');
          return true;
        } else {
          $('#cc-num').removeClass('success').addClass('error');
          $('#cc-num').prev().text('card number needs to be 13 to 16 digits').css('color', 'red');
          return false;
        }
      }

      function validateZipCode() {
        let zipCode = /^\d{5}(?:[-\s]\d{4})?$/;

        if (zipCode.test($('#zip').val())) {
          $('#zip').removeClass('error').addClass('success');
          $('#zip').prev().text('Zip Code:').css('color', 'black');
          return true;
        } else {
          $('#zip').removeClass('success').addClass('error');
          $('#zip').prev().text('Invalid zip code').css('color', 'red');
          return false;
        }
      }

      function validateCVV() {
        let cvvNumber = /^[0-9]{3}$/;

        if (cvvNumber.test($('#cvv').val())) {
          $('#cvv').removeClass('error').addClass('success');
          $('#cvv').prev().text('CVV:').css('color', 'black');
          return true;
        } else {
          $('#cvv').removeClass('success').addClass('error');
          $('#cvv').prev().text('Invalid cvv number').css('color', 'red');
          return false;
        }
      }

      function validateActivities() {
        if ($('.activities input:checked').length === 0) {
          $('.activities legend').text('Please Select an Activity').css('color', 'red');
          return false;
        } else {
          $('.activities legend').text('Register for Activities:').css('color', '');
          return true;
        }
      }

      function validateAll() {
        validateName();
        validateEmail();
        validateCreditCard();
        validateZipCode();
        validateCVV();
        validateActivities();
      }

      // $('button:submit').click(function (event) {
      //   nameError = true;
      //   emailError = true;
      //   creditCardError = true;
      //   zipCodeError = true;
      //   cvvError = true;
      //   activitiesError = true;
      //   event.preventDefault();
      //   validateAll();

      //submit event function that will scroll to the top if errors exist
      $('form').on('submit', function (e) {
        if ($('#payment').val() === 'credit card') {
          if (validateName() && validateEmail() && validateActivities() && validateCreditCard() && validateCVV() && validateZipCode()) {
            alert('Success!');
            return true;
          } else {
            e.preventDefault();
            $("html, body").animate({
              scrollTop: 0
            }, "slow");
            $('fieldset legend').first().after().text('Form is incomplete. Please fill out all required fields marked in red.').css('color', 'red');
            return false;
          }
        } else {
          if (validateName() && validateEmail() && validateActivities()) {
            alert('Success!');
          } else {
            e.preventDefault();
            $("html, body").animate({
              scrollTop: 0
            }, "slow");
            $('fieldset legend').first().after().text('Form is incomplete. Please fill out all required fields marked in red.').css('color', 'red');
          }
        };

      });

submitButton.addEventListener("click", validateForm);

});