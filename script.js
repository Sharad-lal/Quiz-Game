// document.getElementById("btn").addEventListener("click", displayDate);

// function displayDate() {
//     document.getElementById("demo").innerHTML = Date();
// }

//Toggle Button
document.getElementById("toggleBtn").addEventListener("click", toggleButton);

function toggleButton() {
    document.body.classList.toggle("dark-mode");
}

//Button to navigate to other page
const btn = document.getElementsByClassName("btn");
for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        if (i === 0) {
            window.location.href = 'play.html';
        }
        else if (i === 1) {
            window.location.href = 'achievers.html';
        }
    }
}





