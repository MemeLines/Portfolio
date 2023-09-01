const abmebutton = document.querySelector('#aboutbutton'); // Corrected selector
const contactButton = document.querySelector('#contactbutton'); // Corrected selector for the contact button

abmebutton.addEventListener('mouseover', function(event) {
    abmebutton.querySelector('a').style.color = 'white';
});

abmebutton.addEventListener('mouseout', function(event) {
    abmebutton.querySelector('a').style.color = ''; // Reset to the default color
});

contactButton.addEventListener('mouseover', function(event) {
    contactButton.querySelector('a').style.color = 'white';
});

contactButton.addEventListener('mouseout', function(event) {
    contactButton.querySelector('a').style.color = ''; // Reset to the default color
});
