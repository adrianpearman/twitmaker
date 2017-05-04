// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

// 0. wait for dom to be ready
$(function(){
// 1. listen for the submit event
  $('#create-tweet').on('submit', function (e){
// 2. prevent the default behaviour
    e.preventDefault();

// 3. submit the AJAX request to the server
    $.ajax({
      url: $(this).attr('action'),
      method: $(this).attr('method'),
      data: $(this).serialize(),
      dataType: 'html'
    }).done(function(data){
      console.log('Submit was successful');
      console.log(data);
    }).fail(function(){
      console.log('Submit was unsuccessful');
    }).always(function(){

    });
  });


});
