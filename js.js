var btn = document.querySelectorAll("#delete");

for (let i = 0; i < btn.length; i++) {

    btn[i].addEventListener('click', function () {
        btn[i].parentElement.remove()
    })
}
var heart = document.querySelectorAll(".red")

for (let i = 0; i < heart.length; i++) {

    heart[i].addEventListener('click', function () {

        if (heart[i].style.backgroundColor == "white") {
            heart[i].style.backgroundColor = "red"

        } else {
            heart[i].style.backgroundColor = "white"
        }
    })
}

var number = document.getElementById("number").value
var totale = document.getElementById ("totale").value
var price = document.getElementById("price").value
function totalePrice() {
    totale += number*price;
    
}
