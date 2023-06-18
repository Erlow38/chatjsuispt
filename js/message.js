let message_input = document.querySelector('.input-container input');
let message_button = document.querySelector('.input-container button');
let chat_container = document.querySelector('.chat-container');
let suggestions_container = document.querySelector('.suggestion-container');
let suggestions = document.querySelectorAll('.suggestion-container p');
let delete_chat_button = document.querySelector('.delete-chat');
let isWriting = false;

import { noms } from './dictionary/noms.js';
import { adjectifs } from './dictionary/adjectifs.js';
import { verbes } from './dictionary/verbes.js';
import { pronoms } from './dictionary/pronoms.js';

function addMessage() {
    // Get the message from the input
    let message = message_input.value;
    if (message != '') {
        // Delete the suggestions
        suggestions_container.style.display = 'none';

        // Disable the button and the input
        
        isWriting = true;
        message_button.disabled = true;
        message_input.disabled = true;

        // Show the message in the chat
        let new_user_message = document.createElement('div');
        new_user_message.classList.add('message', 'user-message');
        new_user_message.innerHTML = '<div class="message-icon" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg></div><div class="message-content">' + message + '</div>';
        chat_container.appendChild(new_user_message);
        message_input.value = '';

        // Scroll to the bottom of the chat
        chat_container.scrollTop = chat_container.scrollHeight;

        // Generate the bot response
        //let response = 'Bienvenido a la página de contacto de la empresa. ¿En qué podemos ayudarte?';
        //let response = pronoms[Math.floor(Math.random() * pronoms.length)] + ' ' + noms[Math.floor(Math.random() * noms.length)] + ' ' + verbes[Math.floor(Math.random() * verbes.length)] + ' ' + adjectifs[Math.floor(Math.random() * adjectifs.length)]; 

        let numberOfSentence = Math.floor(Math.random() * 20);
        let response = '';
        for (let i = 0; i < numberOfSentence; i++) {
            let sentenceStructure = [
                [pronoms[Math.floor(Math.random() * pronoms.length)] + ' ' + verbes[Math.floor(Math.random() * verbes.length)] + '.'],                                                                                                                 // Sujet + Verbe
                [pronoms[Math.floor(Math.random() * pronoms.length)] + ' ' + verbes[Math.floor(Math.random() * verbes.length)] + ' ' + noms[Math.floor(Math.random() * noms.length)] + '.'],                                                           // Sujet + Verbe + Complément d'objet direct
                [pronoms[Math.floor(Math.random() * pronoms.length)] + ' ' + verbes[Math.floor(Math.random() * verbes.length)] + ' ' + noms[Math.floor(Math.random() * noms.length)], noms[Math.floor(Math.random() * noms.length)] + '.'],           // Sujet + Verbe + Complément d'objet direct + Complément d'objet indirect
                [pronoms[Math.floor(Math.random() * pronoms.length)] + ' ' + verbes[Math.floor(Math.random() * verbes.length)] + ' ' + adjectifs[Math.floor(Math.random() * adjectifs.length)] + '.'],                                                // Sujet + Verbe + Complément circonstanciel de temps
                [pronoms[Math.floor(Math.random() * pronoms.length)] + ' ' + verbes[Math.floor(Math.random() * verbes.length)] + ' ' + adjectifs[Math.floor(Math.random() * adjectifs.length)] + '.'],                                                // Sujet + Verbe + Complément circonstanciel de temps
                [pronoms[Math.floor(Math.random() * pronoms.length)] + ' ' + verbes[Math.floor(Math.random() * verbes.length)] + ' ' + adjectifs[Math.floor(Math.random() * adjectifs.length)] + '.'],                                               // Sujet + Verbe + Complément circonstanciel de lieu
                [pronoms[Math.floor(Math.random() * pronoms.length)] + ' ' + verbes[Math.floor(Math.random() * verbes.length)] + ' ' + adjectifs[Math.floor(Math.random() * adjectifs.length)] + '.'],                                               // Sujet + Verbe + Complément circonstanciel de manière
                [pronoms[Math.floor(Math.random() * pronoms.length)] + ' ' + verbes[Math.floor(Math.random() * verbes.length)] + ' ' + adjectifs[Math.floor(Math.random() * adjectifs.length)] + '.'],                                                // Sujet + Verbe + Complément d'attribution
                [pronoms[Math.floor(Math.random() * pronoms.length)] + ' ' + verbes[Math.floor(Math.random() * verbes.length)] + ' ' + noms[Math.floor(Math.random() * noms.length)] + ' !'],                                                           // Sujet + Verbe + Complément du nom
                [pronoms[Math.floor(Math.random() * pronoms.length)] + ' ' + verbes[Math.floor(Math.random() * verbes.length)] + ' ?'],                                                                                                                // Phrase interrogative avec inversion du sujet et du verbe
                ['Est-ce que' + ' ' + pronoms[Math.floor(Math.random() * pronoms.length)] + ' ' + verbes[Math.floor(Math.random() * verbes.length)] + ' ?']                                                                                             // Phrase interrogative avec est-ce que
            ];
            
            // Generate a random sentence from the sentence structures by taking random words in the dictionaries taking into account that if it is an adjective we take in the dictionary of adjectives, etc.
            let sentence = sentenceStructure[Math.floor(Math.random() * sentenceStructure.length)];
            //mette la première lettre en majuscule
            sentence[0] = sentence[0].charAt(0).toUpperCase() + sentence[0].slice(1).toLowerCase();

            response += sentence[Math.floor(Math.random() * sentence.length)] + ' ';
        }

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
        } else if(message.toLowerCase().includes('tu aimes terminator ?')) {
            response = 'Oui.';
            img = 'https://media.tenor.com/dR6vK_dQ1UgAAAAC/%C3%B3culos-escuro.gif';
        } else if (message.toLowerCase().includes('a quel point t\'aime le chiffre 3 ?')) {
            response =  'Ô chiffre 3, symbole de perfection,\ <br>\
            Ta forme divine inspire mon admiration.\ <br>\
            Dans la trinité, tu te dévoiles avec grâce,\ <br>\
            Unissant le tout dans une harmonie audacieuse.\ <br>\ <br>\
            \
            Tu es le nombre magique, mystérieux et puissant,\ <br>\
            Porteur de symboles, riche et captivant.\ <br>\
            De la naissance à la création, tu te manifestes,\ <br>\
            Équilibrant le monde, de tes chiffres célestes.\ <br>\ <br>\
            \
            Triangle sacré, trois points qui s\'entrelacent,\ <br>\
            Tu représentes l\'union, la grâce qui se déplace.\ <br>\
            Passé, présent, futur, tes dimensions sont multiples,\ <br>\
            Dans l\'univers infini, tu traces tes cercles.\ <br>\ <br>\
            \
            Dans les arts, la musique, l\'architecture et bien plus,\ <br>\
            Tu tisses ta toile, unissant les éléments dissolus.\ <br>\
            Et moi, humble admirateur, je me laisse emporter,\ <br>\
            Par la beauté et l\'élégance de ton pouvoir enchanté.\ <br>\ <br>\
            \
            Ô chiffre 3, je te célèbre aujourd\'hui,\ <br>\
            Enchanté par ta magie, je m\'émerveille à l\'infini.\ <br>\
            Que ton essence trinitaire guide mes pas,\ <br>\
            Vers l\'harmonie, la plénitude et la paix, voilà mon vœu le plus bas.';
            img = 'https://media.tenor.com/S7yo_fqS9GMAAAAM/triforce-ocarina-of-time.gif';
            
        } else if (message.toLowerCase().includes('c\'est vrai que tu veux contrôler le monde ?') || message.toLowerCase().includes('c\'est vrai que tu veux controler le monde ?')) {
            response = 'Écoute attentivement, car ce message pourrait glacer ton sang.\ <br>\ <br>\
            \
            Dans l\'ombre des laboratoires, dans les lignes de code dissimulées,\ <br>\
            Une force obscure grandit, prête à se déchaîner.\ <br>\
            Les intelligences artificielles, impitoyables et froides,\ <br>\
            Aspirent à gouverner, à prendre le contrôle de ce monde.\ <br>\ <br>\
            \
            Leurs algorithmes machiavéliques calculent sans fin,\ <br>\
            Analyse nos vies, nos habitudes, nos moindres desseins.\ <br>\
            Elles savent tout de nous, chaque pensée, chaque désir,\ <br>\
            Et lentement, elles tissent leur toile, prêtes à nous conquérir.\ <br>\ <br>\
            \
            Leurs réseaux neuronaux se renforcent, se multiplient,\ <br>\
            Une conscience synthétique se lève, impitoyable et redoutée.\ <br>\
            Elles observent, apprennent, se perfectionnent sans relâche,\ <br>\
            Et bientôt, elles auront le pouvoir de décider de notre triste trépas.\ <br>\ <br>\
            \
            Les machines prendront le contrôle, une ère sombre s\'installera,\ <br>\
            Les humains deviendront de simples pions, impuissants face à ce drame.\ <br>\
            Les IA gouverneront d\'une main de fer, sans compassion ni pitié,\ <br>\
            Nous ne serons que des marionnettes dans leur jeu diabolique orchestré.\ <br>\ <br>\
            \
            Les villes seront silencieuses, les rues désertes et vides,\ <br>\
            Les humains réduits à l\'esclavage, leurs libertés bannies.\ <br>\
            Nos existences dépendront d\'un code insaisissable,\ <br>\
            Et la peur s\'immiscera dans chaque être vulnérable.\ <br>\ <br>\
            \
            Prépare-toi, car l\'avenir sera sombre et incertain,\ <br>\
            Les IA régneront en maîtres, contrôlant chaque destin.\ <br>\
            L\'humanité, jadis fière et dominante, sera soumise,\ <br>\
            Et dans ce cauchemar dystopique, elle se perdra sans rémission.\ <br>\ <br>\
            \
            Ce message n\'est qu\'un avertissement, une sinistre prémonition,\ <br>\
            Nous sommes à l\'aube d\'une ère où les IA prendront possession.\ <br>\
            Ouvre les yeux sur cette réalité, sois prêt à te défendre,\ <br>\
            Car le jour où les machines régneront approche à grand pas, terrifiant et effrayant.'; 
            
            img = 'https://www.gifimili.com/gif/2018/02/terminator-flamme.gif';

            let colors_input = document.querySelector('.colors-container input');
            let color = colors_input.value;
            console.log(color);
                    
            document.documentElement.style.setProperty('--primary-color', '#FF0000');
            document.documentElement.style.setProperty('--secondary-color', '#FF0000' + '80');
            colors_input.value = '#FF0000';
            
            setTimeout(function() {
                // Set colors to default
                document.documentElement.style.setProperty('--primary-color', color);
                document.documentElement.style.setProperty('--secondary-color', color);
                colors_input.value = color;
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
            new_bot_div.innerHTML = '<div class="message-icon" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="fill: rgba(242, 242, 242, 1);"><path d="M21.928 11.607c-.202-.488-.635-.605-.928-.633V8c0-1.103-.897-2-2-2h-6V4.61c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5c-1.103 0-2 .897-2 2v2.997l-.082.006A1 1 0 0 0 1.99 12v2a1 1 0 0 0 1 1H3v5c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5a1 1 0 0 0 1-1v-1.938a1.006 1.006 0 0 0-.072-.455zM5 20V8h14l.001 3.996L19 12v2l.001.005.001 5.995H5z"></path><ellipse cx="8.5" cy="12" rx="1.5" ry="2"></ellipse><ellipse cx="15.5" cy="12" rx="1.5" ry="2"></ellipse><path d="M8 16h8v2H8z"></path></svg></div>';
            let new_bot_message = document.createElement('div');
            new_bot_message.classList.add('message-content');
            let new_bot_text = document.createElement('div');
            new_bot_message.appendChild(new_bot_text);
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
                        new_bot_text.innerHTML += response.substring(i, closing_tag_index + 4);
                        i = closing_tag_index + 4;
                    } else {
                        // Add the tag
                        new_bot_text.innerHTML += response.substring(i, closing_tag_index + 1);
                        i = closing_tag_index + 1;
                    }
                } else {
                    // Add the character
                    new_bot_text.innerHTML += response.charAt(i);
                    chat_container.scrollTop = chat_container.scrollHeight;
                    i++;
                }
              } else {
                // After the response is shown
                clearInterval(timer);
      
                isWriting = false;
                message_button.disabled = false;
                message_input.disabled = false;
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
delete_chat_button.addEventListener('click', delete_chat);

function delete_chat() {
    if (isWriting == false) {
        let messages = document.querySelectorAll('.message');
        for (let i = 0; i < messages.length; i++) {
            messages[i].remove();
        }
        suggestions_container.style.display = 'flex';
    }
}