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

// //***********************************Activities Section********************/
//When each activity checkbox is checked, the cost will add or subtract. 
  $(":checkbox").change(function(){
    $(".conflict").remove();
    $("#activityerror").remove();

  var frameworks = $("input[name='js-frameworks']");
  var express = $("input[name='express']");
  var libraries = $("input[name='js-libs']");
  var node = $("input[name='node']");
//Conflicts with the same day and times to disable if chosen and grayed out.
  function timeConflict(workshop, conflict){
    if (workshop.is(":checked")) {
      conflict.attr("disabled", true);
      conflict.parent().after("<p class='conflict'>This workshop conflicts with your current selection.</p>");
      conflict.parent().css('color','gray');
      } else {
        conflict.attr("disabled", false);
        conflict.parent().css('color','#000');
      }
    }
  timeConflict(frameworks, express);
  timeConflict(express, frameworks);
  timeConflict(libraries, node);
  timeConflict(node, libraries);
  });
//Users select activities to register and receive a running total.
  $(":checkbox").change(function(){
    var total = 0;
    $("#cost").remove();
//Only the Main Conference is $200, so when checked, it will add up.
  if($("input[name='all']").is(":checked"))  {
    total += 200;
  }
//Workshops that are not the Main Conference are $100, so when checked, they will add to total.
  $(".activities input:not([name='all'])").each(function(){
    if ($(this).is(":checked")) {
      total += 100;
    }
  });
//Append the activities and get a total cost for the user.
  if(total > 0) {
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
  function validateName() {
    const nameRegex = /^[a-zA-Z]+$/;
    const name = $('#name').val();
  // let nameError = false;
  if(nameRegex.test(name)){
    $('#name').css('border-color', "black");
    $('#name').prev().css('color', "black");
    nameError = false;
  } else {
    $('#name').css('border-color', "red");
    $('#name').prev().css('color', "red");
    nameError = true;
  }
};
//validate email
  function validateEmail() {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email = $('#mail').val();
  // let emailError = false;
    if(emailRegex.test(email)){
      $('#mail').css('border-color', "black");
      $('#mail').prev().css('color', "black");
      emailError = false;
    } else {
    $('#mail').css('border-color', "red");
    $('#mail').prev().css('color', "red");
    emailError = true;
    }
  };
//validate activities
function validateActivities() {
  let activitiesCheck = [];
  $('.activities input:checked').each(() =>{
    activitiesCheck.push($(this).text());
  });
  if(activitiesCheck.length < 1){
    $('.activities legend').css('color', "red");
    activitiesError = true;
  } else {
    $('.activities legend').css('color', "black");
    activitiesError = false;
  };
}
//validate credit card
function validateCreditCard() {
  const ccRegex = /^[0-9]{13,16}$/;
  const credit = $('#cc-num').val();
  // let ccError = false;
  if(ccRegex.test(credit)){
    $('#cc-num').css('border-color', "black");
    $('#cc-num').prev().css('color', "black");
    ccError = false;
  } else {
    $('#cc-num').css('border-color', "red");
    $('#cc-num').prev().css('color', "red");
    ccError = true;
  }
};
//validate zip code
function validateZip() {
  const zipRegex = /^[0-9]{5}$/;
  const zip = $('#zip').val();
  // let zipError = false;
  if(zipRegex.test(zip)){
    $('#zip').css('border-color', "black");
    $('#zip').prev().css('color', "black");
    zipError = false;
  } else {
    $('#zip').css('border-color', "red");
    $('#zip').prev().css('color', "red");
    zipError = true;
  }
};
//validate cvv
function validateCVV() {
  const cvvRegex = /^[0-9]{3}$/;
  const cvv = $('#cvv').val();
  // let cvvError = false;
  if(cvvRegex.test(cvv)){
    $('#cvv').css('border-color', "black");
    $('#cvv').prev().css('color', "black");
    cvvError = false;
  } else {
    $('#cvv').css('border-color', "red");
    $('#cvv').prev().css('color', "red");
    cvvError = true;
  }
};
  
// if(submitcounter > 0) {
//   e.preventDefault();
//   console.log("Submit prevented");
//   console.log(submitcounter);
// } else {
//   console.log("Registration accepted");
//   alert("Registration accepted");
// };

  function validateAll() {
    validateName();
    validateEmail();
    creditCardError();
    validateActivities();
  }
  function creditCardError() {
    if('#payment option[value="credit card"]') {
    validateZip();
    validateCreditCard();
    validateCVV();
    }
  }
  $('button:submit').click(function(event){
    nameError = true;
    emailError = true;
    ccError = true;
    zipError = true;
    cvvError = true;
    activitiesError = true;
    event.preventDefault();
    validateAll();
  
  if(nameError && emailError && creditCardError && activitiesError){
    alert ('Please fix the errors in red.');
  } else {
  alert('Registration is complete!');
  location.reload(true);
  }
  console.log("name is" + nameError);
  console.log("email is" + emailError);
  console.log("cc is" + ccError);
  console.log("zip is" + zipError);
  console.log("cvv is" + cvvError);
  console.log("activities is" + activitiesError);
  });
  submitButton.addEventListener("click", validateForm);

});

