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
})
});

//**T-shirt section*/
//**Select a t-shirt design and a color will show/hide.*/
$('#colors-js-puns', '#colors-heart-js').hide();

var shirtSelection = false;
$('#design').on('change', function() {
  if($('design option:selection').val() == "js puns") {
    $('#colors-js-puns').show();
    $('#color').html(<option value="cornflowerblue">Cornflower Blue (js puns shirt only)</option>);
    $('#color').html(<option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>); 
    $('#color').html(<option value="gold">Gold (JS Puns shirt only)</option>);
    shirtSelection = true;
    return shirtSelection;
  } else {
    $('#color-heart js').hide();
    shirtSelection = false;
    return shirtSelection;
  }

  if($('design option:selection').val() == "heart js") {
    $('#color-heart-js').show();
    $('#color').html(<option value="tomato">Tomato (I &#9829; JS shirt only)</option>);
    $('#color').html(<option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option>); 
    $('#color').html(<option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>);
    shirtSelection = true;
    return shirtSelection;
  } else {
    $('#color-js-puns').hide();
    shirtSelection = false;
    return shirtSelection;
  }
});
