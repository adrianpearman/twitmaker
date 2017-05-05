// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(function(){
  $('#new_tweet').on('submit', function (e){
    e.preventDefault();

    // $.ajax({
    //   url: $(this).attr('action'),
    //   method: $(this).attr('method'),
    //   data: $(this).serialize(),
    //   dataType: 'html'
    // }).done(function(response){
    //   console.log(response);
    // })
    $.ajax({
      url: $(this).attr('action'),
      method: $(this).attr('method'),
      data: $(this).serialize(),
      dataType: 'json'
    }).done(function(response){
      console.log(response);
      var tweet = $('<li class = "tweet">').html(response).attr('class', 'tweet')
      $(.tweet).prepend(tweet)
    })

  });


});
