//**Function to focus on Name field as soon as form is displayed.*/
$(document).ready(function() {
  $('#name').focus();

  //**Change function to show/hide Other field.*/
    $('#other-title').hide();
    $('#title').change(function() {
      if($('#title').val() == 'other'){
        $('#other-title').show();
      } else {
        $('#other-title').hide();
      }
    });

  //**T-shirt section*/
  //**Select a t-shirt design and a color will show/hide.*/
    // $('#color option', '#design option:first').hide();
    $('#color option').hide();
    $('#design option:first').hide();

    $('#design').on('change', function() {
      $('#color option').hide();

      if($('#design option:selected').val() == "js puns") {
        $('#color option:contains("JS Puns shirt only")').show();
      } else {
        $('#color option:contains("JS shirt only")').show();
      }
    });


//**Users can register for activities. Real-time validation.Reset the sum and all checkboxes before calculation occurs. */
$('.activities').append("<span id='totalCost'></span>");

$('.activities').on('change', function() {
let totalSum = 0;

let activities = $('.activities.input[type=checkbox]');

for(let i = 0; i = activities.length; i++) {
  let activity = activities[i];
  let activityText = activity.parentElement.innerText;
  let dollarValue = parseInt(activityText.slice(activityText.indexOf('$') + 1));
}

  if((activities).prop('checked')) {
    console.log('activities');
    totalSum += dollarValue;
  }

  if($('input[name="all"]').prop('checked')) {
    totalSum += 200;
  } 

  if($('input[name="js-frameworks"]').prop('checked')) {
    totalSum += 100;
    $('input[name="express"]').prop('disabled', true);
  } else if($('input[name="express"]').prop('checked')) {
    totalSum += 100;
    $('input[name="js-frameworks"]').prop('disabled', false);
    }

  if($('input[name="js-libs"]').prop('checked')) {
    totalSum += 100;
    $('input[name="node"]').prop('disabled', true);
  } else if($('input[name="node"]').prop('checked')) {
    totalSum += 100;
    $('input[name="js-libs"]').prop('disabled', false);
    }

  if($('input[name="build-tools"]').prop('checked')) {
    totalSum += 100;
  }

  if($('input[name="npm"]').prop('checked')) {
    totalSum += 100;
  }

  let totalCostSpan = $('#totalCost');
  $('#totalCost').text("Total: $" + totalSum);
});

//***Payment Information section*/
//show credit card as default option and hide the PayPal and Bitcoin options
//hide all the payment sections
//then show the selected payment section
function showPaymentMethod() {
  ccPaymentSection.style.display = "none";
  paypalPaymentSection.style.display = "none";
  bitcoinPaymentSection.style.display = "none";

  if (paymentSelect.value === 'credit card') {
    ccPaymentSection.style.display = "block";
  } else if (paymentSelect.value === 'paypal') {
    paypalPaymentSection.style.display = 'initial';
  } else {
    bitcoinPaymentSection.style.display = 'initial';
  }
paymentSelect.addEventListener("change", showPaymentMethod);
};

//validate name
function displayFieldsetError(fieldset) {
  fieldset.classList.add("error");

  if (nameField.value === "") {
    e.preventDefault();
    displayError(nameField, "Name cannot be blank.");
  }

};
//validate email
var validateEmail = function(mail) {
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
var validateActivities = function(){
  var re = /^[0-9]{}$/;
  return re.test();
};
var activityCount = 0;
  for (var i = 0; i < activities.length; i++) {
    if (activities[i].checked) {
      activityCount++;
    }
  }
  if (activityCount == 0) {
    e.preventDefault();
    displayFieldsetError(activitiesFieldset);
  }

//validate credit card number
var validateCCNum = function(number) {
  var re = /^[0-9]{13,16}$/;
  return re.test(number);
};
//Credit Card validation
  //Only validate if Paypal or Bitcoin is selected.
  if (paymentSelect.value == 'credit card') {
    if (ccNumber.value == "") {
      e.preventDefault();
      displayError(ccNumber, "Credit card number cannot be blank");
    } else {  
      if (!validateCCNum(ccNumber.value)) {
        e.preventDefault();
        displayError(ccNumber, "Credit card number must be a 13-16 digit number");
      }
    }
  }

//validate zip code
var validateZipCode = function(number) {
  var re = /^[0-9]{5}$/;
  return re.test(number);
};
if (zipCode.value == "") {
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
if (CVV.value == "") {
  e.preventDefault();
  displayError(CVV, "Enter the CVV code on the back of your card.");
} else {
  if (!validateCVV(CVV.value)) {
    e.preventDefault();
    displayError(CVV, "CVV must be a 3 digit number");
  }
}
submitButton.addEventListener("click", validateForm);
});


