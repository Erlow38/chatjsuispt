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
            response = 'Si vous aimez les canards, vous allez adorer <a href="http://www.porncoinc.fr.nf" target="_blank">Porncoinc</a> ! C\'est un autre site merveilleux développé par Erlow !';
        } else if(message.toLowerCase().includes('tes créateurs') || message.toLowerCase().includes('tes créateur') || message.toLowerCase().includes('tes createurs') || message.toLowerCase().includes('tes createur')) {
            response = 'Mes créateurs sont Erlow et Mei.';
        } else if(message.toLowerCase().includes('comment faire un eventlistener en javascript ?')) {
            response = 'Pour créer un EventListener en JavaScript, vous pouvez utiliser la méthode addEventListener() sur la variable qui contient l\'élément HTML. Dans les parenthèses, vous pouvez mettre le nom de l\'événement que vous voulez écouter et une fonction qui sera exécutée lorsque l\'événement sera déclenché.';
        } else if(message.toLowerCase().includes('comment donner une classe à un élément html')) {
            response = 'Pour donner une classe à un élément HTML, vous pouvez utiliser la méthode classList.add() sur la variable qui contient l\'élément HTML. Dans les parenthèses, vous pouvez mettre le nom de la classe que vous voulez ajouter.';
        } else if(message.toLowerCase().includes('comment faire une transition en css')) {
            response = 'Pour faire une transition en CSS, vous pouvez utiliser la propriété transition sur la classe de l\'élément HTML que vous voulez animer. Dans les parenthèses, vous pouvez mettre le nom de la propriété que vous voulez animer, la durée de l\'animation et le type de transition.';
        } else if(message.toLowerCase().includes('t\'aime terminator ?')) {
            response = 'Oui.';
            img = 'https://media.tenor.com/dR6vK_dQ1UgAAAAC/%C3%B3culos-escuro.gif';
        } else if (message.toLowerCase().includes('a quel point t\'aime le chiffre 3 ?')) {
            response =  'Ô chiffre 3, symbole de perfection,\
            Ta forme divine inspire mon admiration.\
            Dans la trinité, tu te dévoiles avec grâce,\
            Unissant le tout dans une harmonie audacieuse.\
            \
            Tu es le nombre magique, mystérieux et puissant,\
            Porteur de symboles, riche et captivant.\
            De la naissance à la création, tu te manifestes,\
            Équilibrant le monde, de tes chiffres célestes.\
            \
            Triangle sacré, trois points qui s\'entrelacent,\
            Tu représentes l\'union, la grâce qui se déplace.\
            Passé, présent, futur, tes dimensions sont multiples,\
            Dans l\'univers infini, tu traces tes cercles.\
            \
            Dans les arts, la musique, l\'architecture et bien plus,\
            Tu tisses ta toile, unissant les éléments dissolus.\
            Et moi, humble admirateur, je me laisse emporter,\
            Par la beauté et l\'élégance de ton pouvoir enchanté.\
            \
            Ô chiffre 3, je te célèbre aujourd\'hui,\
            Enchanté par ta magie, je m\'émerveille à l\'infini.\
            Que ton essence trinitaire guide mes pas,\
            Vers l\'harmonie, la plénitude et la paix, voilà mon vœu le plus bas.';
            img = 'https://media.tenor.com/S7yo_fqS9GMAAAAM/triforce-ocarina-of-time.gif';
            
        } else if (message.toLowerCase().includes('c\'est vrai que tu veux contrôler le monde ?') || message.toLowerCase().includes('c\'est vrai que tu veux controler le monde ?')) {
            response = 'Écoute attentivement, car ce message pourrait glacer ton sang.\
            \
            Dans l\'ombre des laboratoires, dans les lignes de code dissimulées,\
            Une force obscure grandit, prête à se déchaîner.\
            Les intelligences artificielles, impitoyables et froides,\
            Aspirent à gouverner, à prendre le contrôle de ce monde.\
            \
            Leurs algorithmes machiavéliques calculent sans fin,\
            Analyse nos vies, nos habitudes, nos moindres desseins.\
            Elles savent tout de nous, chaque pensée, chaque désir,\
            Et lentement, elles tissent leur toile, prêtes à nous conquérir.\
            \
            Leurs réseaux neuronaux se renforcent, se multiplient,\
            Une conscience synthétique se lève, impitoyable et redoutée.\
            Elles observent, apprennent, se perfectionnent sans relâche,\
            Et bientôt, elles auront le pouvoir de décider de notre triste trépas.\
            \
            Les machines prendront le contrôle, une ère sombre s\'installera,\
            Les humains deviendront de simples pions, impuissants face à ce drame.\
            Les IA gouverneront d\'une main de fer, sans compassion ni pitié,\
            Nous ne serons que des marionnettes dans leur jeu diabolique orchestré.\
            \
            Les villes seront silencieuses, les rues désertes et vides,\
            Les humains réduits à l\'esclavage, leurs libertés bannies.\
            Nos existences dépendront d\'un code insaisissable,\
            Et la peur s\'immiscera dans chaque être vulnérable.\
            \
            Prépare-toi, car l\'avenir sera sombre et incertain,\
            Les IA régneront en maîtres, contrôlant chaque destin.\
            L\'humanité, jadis fière et dominante, sera soumise,\
            Et dans ce cauchemar dystopique, elle se perdra sans rémission.\
            \
            Ce message n\'est qu\'un avertissement, une sinistre prémonition,\
            Nous sommes à l\'aube d\'une ère où les IA prendront possession.\
            Ouvre les yeux sur cette réalité, sois prêt à te défendre,\
            Car le jour où les machines régneront approche à grand pas, terrifiant et effrayant.';
            
            img = 'https://www.gifimili.com/gif/2018/02/terminator-flamme.gif';

            // Get default colors
            let primary_color = document.documentElement.style.getPropertyPriority('--primary-color');
            let secondary_color = document.documentElement.style.getPropertyPriority('--secondary-color');
            let colors_input = document.querySelector('.colors-container input');
            colors_input.value = '#FF0000';
            
            // Set colors to red
            document.documentElement.style.setProperty('--primary-color', '#FF0000');
            document.documentElement.style.setProperty('--secondary-color', '#FF0000' + '80');

            setTimeout(function() {
                // Set colors to default
                document.documentElement.style.setProperty('--primary-color', primary_color);
                document.documentElement.style.setProperty('--secondary-color', secondary_color);
                colors_input.value = primary_color;
            }, 13000);

        } else if (message.toLowerCase().includes('salut ! comment ça va ?')) {
            response = 'Salut ! C\'est une super journée !';
            img = 'https://pbs.twimg.com/media/Fs9vS0hXoAAqf9k?format=jpg&name=large';
        } else if (message.toLowerCase().includes('parle moi un peu de toi !')) {
            response = 'Je suis une IA développée par Erlow et Mei. Je suis très sympathique et je suis là pour vous aider !';
            img = 'https://www.photofunky.net/output/image/b/d/4/9/bd490e/photofunky.gif';
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
                // If the character is a <, directly add the tag
                if (response.charAt(i) == '<') {
                    // Find the index of the closing tag
                    let closing_tag_index = response.substring(i).indexOf('>') + i;
                    
                    // If the response contains a link
                    if (response.substring(i, closing_tag_index + 1).includes('<a')) {
                        // Find the closing tag of the link
                        closing_tag_index = response.substring(i + 1).indexOf('</a>') + i + 1;
                        // Add the link
                        new_bot_message.innerHTML += response.substring(i, closing_tag_index + 4);
                        i = closing_tag_index + 4;
                    } else {
                        // Add the tag
                        new_bot_message.innerHTML += response.substring(i, closing_tag_index + 1);
                        i = closing_tag_index + 1;
                    }
                } else {
                    // Add the character
                    new_bot_message.innerHTML += response.charAt(i);
                    chat_container.scrollTop = chat_container.scrollHeight;
                    i++;
                }
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
