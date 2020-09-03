// var body = document.querySelector("body");
// var h1 = document.querySelectorAll("h1");
// var isBlue = false;

// // setInterval(function() {
// //     if (isBlue) {
// //         body.style.background = "white";
// //     }
// //     else {
// //         body.style.background = "blue";
// //     }
// //     isBlue =! isBlue;
// // }, 1000);

// console.log(h1);
// h1[0].style.color = "pink";


// var tag = document.getElementById("highlight");
// console.log(tag);

// var cl = document.getElementsByClassName("bolded");
// console.log(cl);

// var tagname = document.getElementsByTagName("li");
// console.log(tagname);

// tagname[0].style.color = "blue";

var btn = document.querySelector("button");

function changecolor () {
    document.body.classList.toggle("bcol")
}


btn.addEventListener("click", changecolor);




