let mode_input = document.querySelector('.mode-container .toggle input');
let mode_container = document.querySelector('.mode-container');

mode_input.addEventListener('change', function() {
    if (this.checked) {
        console.log('Light mode');
        document.documentElement.style.setProperty('--background-color', '#eaeaea');
        document.documentElement.style.setProperty('--input-color', '#f2f2f2');
        document.documentElement.style.setProperty('--user-color', '#f2f2f2');
        document.documentElement.style.setProperty('--text-color', '#181818');
        document.documentElement.style.setProperty('--icon-color', '#36363b');
        document.documentElement.style.setProperty('--suggestion-color', '#cdcdcd');
    }
    else {
        console.log('Dark mode');
        document.documentElement.style.setProperty('--background-color', '#4a4a53');
        document.documentElement.style.setProperty('--input-color', '#4f4f55');
        document.documentElement.style.setProperty('--user-color', '#36363b');
        document.documentElement.style.setProperty('--text-color', '#f2f2f2');
        document.documentElement.style.setProperty('--icon-color', '#f2f2f2');
        document.documentElement.style.setProperty('--suggestion-color', '#2b2a2e');
    }
});