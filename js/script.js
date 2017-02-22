$(document).ready(function() {
  $('button').click(function(click){
    $target = $(click.target);
    if ($target.hasClass('click')){
      $target.removeClass('click');
    } else {
      $target.addClass('click');
    }
  });
});
