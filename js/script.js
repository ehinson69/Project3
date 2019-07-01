$(document).ready(function() {
  'other';
$('#name').focus();
$('other-title').append('input type="text" id="other-title" name="job_role_other" placeholder="Your Job Role"');
$('other-title').hide();
$('#title').change(function(){
  if($('#title option:selected').val() === "other"){
    $('other-title').show();
  } else {
    $('other-title').hide();
  }
}
});