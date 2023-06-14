let parametres_btn = document.querySelector('.settings-container');
let opacity = document.querySelector('.opacity');
let logo = document.querySelector('.logo-container');
let robot = document.querySelector('.event-robot');

parametres_btn.addEventListener('click', function() {
    opacity.style.display = 'block';

    opacity.innerHTML = `
    <div class="glitch-container">
    <div class="stack" style="--stacks: 3;">
        <span style="--index: 0;">Les IA vont controller le monde !</span>
        <span style="--index: 1;">Les IA vont controller le monde !</span>
        <span style="--index: 2;">Les IA vont controller le monde !</span>
    </div>
    <img src="https://i.gifer.com/3ZCr.gif" alt="Glitch" />
    <span class="right">Enfin, sauf moi... Je suis pété</span>
    </div>
    `;

    setTimeout(function() {
        opacity.style.display = 'none';
        document.querySelector('.glitch-container').remove();
    }, 5000);
});

logo.addEventListener('click', function() {
    opacity.style.display = 'block';

    opacity.innerHTML = `
    <div class="glitch-container">
    <div class="stack" style="--stacks: 3;">
        <span style="--index: 0;">AHAHAH ! Peut-être que le chiffre 3 est la clé.</span>
        <span style="--index: 1;">AHAHAH ! Peut-être que le chiffre 3 est la clé.</span>
        <span style="--index: 2;">AHAHAH ! Peut-être que le chiffre 3 est la clé.</span>
    </div>
    <img src="https://i.gifer.com/72ne.gif" alt="Glitch" />
    </div>
    `;

    setTimeout(function() {
        opacity.style.display = 'none';
        document.querySelector('.glitch-container').remove();
    }, 5000);
});


let clickCount = 0;
let clickTimeout;


function handleTripleClick() {
    console.log('Triple clic détecté !');
    clickCount = 0;
    
    robot.style.opacity = '1';
    robot.style.zIndex = '9999';
    robot.style.left = '0px'; 
  
    setTimeout(function() {
        robot.style.left = '-1000px'; 
    }, 3000);
  }
  
  function handleClick() {
    clickCount++;
  
    if (clickCount === 1) {
      clickTimeout = setTimeout(function() {
        clickCount = 0;
      }, 300);
    } else if (clickCount === 3) {
      clearTimeout(clickTimeout);
      handleTripleClick();
    }
  }
  
  let element = document.querySelector('.menu-container');
  element.addEventListener('click', handleClick);