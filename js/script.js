$(document).ready(function() {
  $('button').click(function(click){
    var $target = $(click.target).closest('button');
    if ($target.hasClass('click')){
      $target.removeClass('click');
    } else {
      $target.addClass('click');
    }
  });
});
