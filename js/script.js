//**Function to focus on Name field as soon as form is displayed.*/
$(document).ready(function() {
  $('#name').focus();

  //**Change function to show/hide Other field.*/
    $('#other-title').hide();
    $('#title').change(function() {
      if($('#title').val() == 'other'){
        $('#other-title').show().focus();
      } else {
        $('#other-title').hide();
      }
    });

  //******************************T-shirt section********************************/
  //**Select a t-shirt design and a color will show/hide.*/
  // $('#color option', '#design option:first').hide();
       
    $('#color option').hide();// Extra credit.
    $('#design option:first').hide();
    $("#colors-js-puns").hide();
    $('#design').on('change', function() {
      $('#color option').hide();

      if($('#design option:selected').val() == "js puns") {
        $('#color option:contains("JS Puns shirt only")').show();
        $("#colors-js-puns").show();// Extra credit.
        $('#color').val("cornflowerblue");
      } else {
        $('#color option:contains("JS shirt only")').show();
        $("#colors-js-puns").show();// Extra credit.
        $('#color').val("tomato");
      }
    });

//***********************************Activities Section********************/
//**Users can register for activities but cannot choose two activities on the same day and time. */
  $('.activities').append("<span id='totalSum'></span>");
  let totalSum = 0;

//When each activity checkbox is checked, the cost will add or subtract. 
  $('.activities input:checkbox').on('change', function() {
    var inputFields = $(this).parent().text().split(/[—,$]/);
    var inputFields = $(this).parent().text().split(/[—$]/);
    console.log(inputFields);
    var title =  inputFields[0];
    var dateTime = inputFields[1];
    var price =  inputFields[3];
    console.log('title: '+title +' dateTime: '+dateTime +' price: '+price)
    console.log('title: '+title +' price: '+price)  
    
    alert($(dateTime).presence());

    if($(this).prop('checked')) {//checked boxes
      totalSum += parseInt(price)*1;
      $('.activities #totalSum').text('Total Cost $' + totalSum);
      $('.activities input').each(function(){
        if ($(this).parent().text().includes(dateTime) && (!$(this).parent().text().includes(title))){
          $(this).prop("disabled", true);
        }
      });
    }
    else {//unchecked boxes
          if($(this).prop('checked') == false) {
            totalSum -= parseInt(price)*1;
            $('.activities #totalSum').text('Total Cost $' + totalSum);
            $('.activities input').each(function(){
              if ($(this).parent().text().includes(dateTime) && (!$(this).parent().text().includes(title))){
                $(this).prop("disabled", false);
              }
            });
          }  
    }

  });

//*****************************Payment Information section*****************************/
  //Show credit card as default option and hide the PayPal and Bitcoin options until selected.
  //Adding classes to the other payment option divs to make them easier to work with.
  $('#credit-card').next().addClass('paypal').hide;
  $('#credit-card').next().next().addClass('bitcoin').hide;
  
  $('#credit-card').show();
  $('#payment option[value="credit card"]').prop('selected', true);
  
  $('#payment option[value="select_method"]').hide();
  
  $('#payment').change((event) => {
    let selected = $('#payment option:selected').text();
      $('.paypal').hide();
      $('#credit-card').hide();
      $('.bitcoin').hide();
      
      if ( selected === "Credit Card" ) {
          $('#credit-card').show();
          $("#cc-num").focus();
      } else if ( selected === "PayPal" ) {
          $('.paypal').show();
      } else if ( selected === "Bitcoin" ) {
          $('.bitcoin').show();
      }
  });

//************************************Validation Section*************************/
  //validate name
  function displayFieldsetError(fieldset) {
    fieldset.classList.add("error");

    if (nameField.value === "") {
      e.preventDefault();
      displayError(nameField, "Name cannot be blank.");
    }
  };

  //validate email
  var ValidateEmail = function(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)){
      return (true)
    }
      alert("Sorry, you have entered an invalid email address!")
      return (false)
  }
  var validateForm = function(e) {
    clearErrors();

  if (!validateEmail(emailField.value)) {
   e.preventDefault();
   displayError(emailField, "A valid email address is required.");
   }
  }

  //validate activity section
  var validateAcivities = function() {
    var re = /^[0-9]{}$/;
    return re.test();
  };

  let activities = $('.activities.input[type=checkbox]');
  var activityCount = 0;
    for (var i = 0; i < activities.length; i++) {
      if (activities[i].checked) {
        activityCount++;
    }
  }
    
  //Credit Card Number validation
  //Only validate if Paypal or Bitcoin is selected.
  var validateCardNumber = function(number) {
    var re = /^[0-9]{13,16}$/;
    return re.test(number);
  };

  if (payment.value === 'credit card') {

    if (cardNumber.value === "") {
    e.preventDefault();
    displayError(cardNumber, "Credit card number cannot be blank");
    } else {  
      if (!validateCardNumber(cardNumber.value)) {
        e.preventDefault();
        displayError(cardNumber, "Credit card number must be a 13-16 digit number");
      }
    }
  };

  //validate zip code
  var validateZipCode = function(number) {
    var re = /^[0-9]{5}$/;
    return re.test(number);
  };
  if (zipCode.value === "") {
    e.preventDefault();
    displayError(zipCode, "Zip Code must have 5 digits.");
  } else {
      if (!validateZipCode(zipCode.value)) {
      e.preventDefault();
      displayError(zipCode, "Zip Code must be a 5 digit number");
    }
  }

  //validate cvv number
  var validateCVV = function(number) {
    var re = /^[0-9]{3}$/;
    return re.test(number);
  };
  if (CVV.value === "") {
    e.preventDefault();
    displayError(CVV, "Enter the CVV code on the back of your card.");
  } else {
    
    if (!validateCVV(CVV.value)) {
      e.preventDefault();
      displayError(CVV, "CVV must be a 3 digit number");
    }
  }

submitButton.addEventListener("click", validateForm);
let totalCostSpan = $('#totalCost');
$('#totalCost').text("Total: $" + totalSum);
});