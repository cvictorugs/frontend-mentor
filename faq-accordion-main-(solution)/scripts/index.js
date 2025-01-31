function toggle () {
    const images = [
        './assets/images/icon-minus.svg',
        './assets/images/icon-plus.svg'

    ];
    const dropdownContent = document.getElementById('dropdown-content');

    const dropdownImage = document.getElementById('dropdown-switch').children[0]

    if (dropdownContent.style.display === 'none') {

        dropdownContent.style.display = 'block'
    
        dropdownImage.setAttribute('src', images[0])
    } else {

        dropdownContent.style.display = 'none';

        dropdownImage.setAttribute('src', images[1]);
    }
}