let colors_input = document.querySelector('.colors-container input');

colors_input.addEventListener('change', function() {
    document.documentElement.style.setProperty('--primary-color', this.value);
    document.documentElement.style.setProperty('--secondary-color', this.value + '80');
    console.log('Color changed to ' + this.value);
});
