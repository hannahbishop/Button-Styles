$(document).ready(function() {
  $('button').click(function(){
    if ($('button').hasClass('click')){
      $('button').removeClass('click');
    } else {
      $('button').addClass('click');
    }
  });
});
