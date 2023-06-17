let message_input = document.querySelector('.input-container input');
let message_button = document.querySelector('.input-container button');
let chat_container = document.querySelector('.chat-container');
let suggestions_container = document.querySelector('.suggestion-container');
let suggestions = document.querySelectorAll('.suggestion-container p');
let delete_chat_button = document.querySelector('.delete-chat');

function addMessage() {
    // Get the message from the input
    let message = message_input.value;
    if (message != '') {
        // Delete the suggestions
        suggestions_container.style.display = 'none';

        // Disable the button and the input
        message_button.disabled = true;
        message_input.disabled = true;
        delete_chat_button.disabled = true;

        // Show the message in the chat
        let new_user_message = document.createElement('div');
        new_user_message.classList.add('message', 'user-message');
        new_user_message.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>' + message;
        chat_container.appendChild(new_user_message);
        message_input.value = '';

        // Scroll to the bottom of the chat
        chat_container.scrollTop = chat_container.scrollHeight;

        // Generate the bot response
        let response = 'Bienvenido a la página de contacto de la empresa. ¿En qué podemos ayudarte?';
        let img;

        if(message.toLowerCase().includes('canard') || message.toLowerCase().includes('duck') || message.toLowerCase().includes('coin coin') || message.toLowerCase().includes('coinc')) {
            response = 'Si vous aimez les canards, allez voir ce merveilleux site développé par un de mes créateurs, Erlow : ';
        } else if(message.toLowerCase().includes('tes créateurs') || message.toLowerCase().includes('tes créateur') || message.toLowerCase().includes('tes createurs') || message.toLowerCase().includes('tes createur')) {
            response = 'Mes créateurs sont Erlow et Mei.';
        } else if(message.toLowerCase().includes('test gif')) {
            response = 'Voici un gif :';
            img = 'https://media.giphy.com/media/3o7aD2X9Y5W5XxUdqo/giphy.gif';
        }
        
        setTimeout(function() {
            // Show the bot response in the chat
            let new_bot_div = document.createElement('div');
            new_bot_div.classList.add('message', 'bot-message');
            new_bot_div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: rgba(242, 242, 242, 1);"><path d="M21.928 11.607c-.202-.488-.635-.605-.928-.633V8c0-1.103-.897-2-2-2h-6V4.61c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5c-1.103 0-2 .897-2 2v2.997l-.082.006A1 1 0 0 0 1.99 12v2a1 1 0 0 0 1 1H3v5c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5a1 1 0 0 0 1-1v-1.938a1.006 1.006 0 0 0-.072-.455zM5 20V8h14l.001 3.996L19 12v2l.001.005.001 5.995H5z"></path><ellipse cx="8.5" cy="12" rx="1.5" ry="2"></ellipse><ellipse cx="15.5" cy="12" rx="1.5" ry="2"></ellipse><path d="M8 16h8v2H8z"></path></svg>';
            let new_bot_message = document.createElement('div');
            new_bot_message.classList.add('message-content');
            new_bot_div.appendChild(new_bot_message);
            chat_container.appendChild(new_bot_div);

            let i = 0;
            let timer = setInterval(function() {
              if (i < response.length) {
                new_bot_message.innerHTML += response.charAt(i);
                chat_container.scrollTop = chat_container.scrollHeight;
                i++;
              } else {
                // After the response is shown
                clearInterval(timer);
      
                message_button.disabled = false;
                message_input.disabled = false;
                delete_chat_button.disabled = false;
                message_input.focus();

                // Show the image in the chat
                if (img) {
                    new_bot_message.innerHTML += '<img src="' + img + '" alt="Image" width="500">';
                    chat_container.scrollTop = chat_container.scrollHeight;
                }
              }
            }, 5); // Adjust the speed of the response here (ms)

        }, 1000);
    }
}

// Listen for the enter key
message_input.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        message_button.click();
    }

    if (message_input.value != '') {
        message_button.disabled = false;
    } else {
        message_button.disabled = true;
    }
});

// Listen for the button click
message_button.addEventListener('click', addMessage);

// Listen for the suggestions click
for (let i = 0; i < suggestions.length; i++) {
    suggestions[i].addEventListener('click', function() {
        message_input.value = suggestions[i].innerHTML;
        message_button.click();
    });
}

// Listen for the delete chat button click
delete_chat_button.addEventListener('click', function() {
    //supprimer les elements possedant la classe message
    let messages = document.querySelectorAll('.message');
    for (let i = 0; i < messages.length; i++) {
        messages[i].remove();
    }
    suggestions_container.style.display = 'flex';
});
