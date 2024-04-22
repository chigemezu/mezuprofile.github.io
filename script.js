document.querySelector('.hamburger-menu').addEventListener('click', function(){
    document.querySelector('.cheat-sheet-menu').classList.toggle('active');
});
 //JavaScript for contact modal
var modal = document.getElementById("contact-modal");
var btn = document.getElementById("contact-btn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}