function showSection(sectionName) {
    var foodSection = document.getElementById('matMeny');
    var drinkSection = document.getElementById('drikkeMeny');

    if (sectionName === 'drikke') {
        foodSection.style.display = 'none';
        drinkSection.style.display = 'block';
    } else if (sectionName === 'mat') {
        foodSection.style.display = 'block';
        drinkSection.style.display = 'none';
    }

}

document.addEventListener('DOMContentLoaded', function() {
    showSection('drikke'); // Show the drink section by default
});


let mybtn = document.getElementById("topBtn");

// scroll down 1000px from the top, show the button.
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        mybtn.style.display = "block";

} else {

    mybtn.style.display = "none";
    }
}

// click on the button, scroll to the top.
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}


