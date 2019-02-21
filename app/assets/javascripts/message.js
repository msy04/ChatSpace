$(function(){
  function buildSendMessageHTML(message){
    var html = `<div class = "message" data-id = ${message.id}>
                  <div class = "upper-message">
                    <div class = "upper-message__user-name">
                      ${message.user_name}
                    </div>
                    <div class="upper-message__date">
                      ${message.created_time}
                    </div>
                  </div>
                  <div class="lower-meesage">
                    <p class = "lower-message__content">
                      ${message.content}
                    </p>
                  </div>
                </div>`
    return html;
  }
  function buildMessage(message){
    var messages = $('.messages').append(`<div class = "message" data-id = ${message.id}>
                                            <div class = "upper-message">
                                              <div class = "upper-message__user-name">
                                                ${message.user_name}
                                              </div>
                                              <div class="upper-message__date">
                                                ${message.created_time}
                                              </div>
                                            </div>
                                            <div class="lower-meesage">
                                              <p class = "lower-message__content">
                                                ${message.content}
                                              </p>
                                            </div>
                                          </div>`);
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildSendMessageHTML(message);
      $('.messages').append(html)
      $('.form__message').val('')
    })
    .fail(function(){
      alert('error');
    })
  })

  $(function(){
    setInterval(update, 5000);
  });
  function update(){
    if($('.message')[0]){
      var message_id = $('.message:last').data('id');
    } else {
      var message_id = 0
    }
    $.ajax({
      url: location.href,
      type: 'GET',
      data: {
        message: { id: message_id }
      },
      dataType: 'json'
    })
    .always(function(data){
      $.each(data, function(i, data){
        buildMessage(data);
      });
    });
  }
})
