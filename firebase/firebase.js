$(document).ready(function() {
  // Chat example
  // Get a reference to the root of the chat data.
  var messagesRef = new Firebase('https://flickering-heat-7952.firebaseio.com');

  // When the user presses enter on the message input, write the message to firebase.
  $('#messageInput').keypress(function (event) {
    if (event.keyCode == 13) {
      var name = $('#nameInput').val();
      var text = $('#messageInput').val();
      messagesRef.push({name:name, text:text});
      $('#messageInput').val('');
    }
  });

  // Add a callback that is triggered for each chat message.
  messagesRef.on('child_added', function (snapshot) {
    var message = snapshot.val();
    $('<div/>').text(message.text).prepend($('<em/>').text(message.name+': ')).appendTo($('#messagesDiv'));
    $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
  });
});
