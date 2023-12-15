function yourMsg(){
$("#chat-room").submit(function(event) {
    event.preventDefault();    
  
  // Your onsubmit code here
    var sentences = ["Hello!",
    "How are you doing?",
    "Life is so good!",
    "Did I hear party?",
    "Oh well, life is full of surprises!",
    "The sky is the limit.",
    "It's a clear day, thankfully.",
    "It's pouring outside, what a dreary day it is!",
    "What a day!","Oh really!"];

    var $value = $(this).find("#chat");
    var value = $value.val();
  
  // The DOM for the div of textarea
    var locat = $("#messages")
    //console.log(value);
  
  // $('#messages').text(value);
    $("<li>")
    .html(value)
    .appendTo('#message')
    .addClass("messageR bubbleR");
    
  //add a line break
    $("<br>")
    .appendTo('#message');

    $("<li>")
    .html(new Date().toLocaleString())
    .appendTo('#message')
    .addClass("messageR time");
    
  // random selection of messages to be   displayed in response
    $("<li>")
    .addClass("messageL bubbleL")
    .html(sentences[Math.floor(Math.random()*10)])
    .appendTo('#message');
    
  // add a line break  
    $("<br>")
    .appendTo('#message');
    
     $("<li>")
    .html(new Date().toLocaleString())
    .appendTo('#message')
    .addClass("messageL time");
  
  // Now scroll to the bottom
    locat.scrollTop(locat[0].scrollHeight);

  // empty text area
    $('#chat').val('');
     
})
}
