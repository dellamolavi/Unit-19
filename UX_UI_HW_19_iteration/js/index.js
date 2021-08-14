$(document).ready(function() {
    console.log('JS loaded');

  $('button').click(function(){
    $('p').fadeToggle('slow');
  });
})