$(document).ready(function() {
  'other';
$('#name').focus();
$('other').append('input type="text" id="other-title" name="job_role_other" placeholder="Your Job Role"');
$('#user-title').click(function(){
  $(".target").change();
  if($('#title option:selected').val() === "Job Role"){
    $('other').show();
  } else {
    $('other').hide();
  }
})
});