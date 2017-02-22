$(document).ready(function() {
  $('button').click(function(click){
    var $target = $(click.target).closest('button');
    if ($target.hasClass('active')){
      $target.removeClass('active');
    } else {
      $target.addClass('active');
    }
  });
});
