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

  if($('input[name=' + activities.name + ']').prop('checked')) {
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
