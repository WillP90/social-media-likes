console.log("Hello World");

var likeCounter = document.querySelector(".likeCounter");
var counter = 0;
function addLike() {
    counter++;
    console.log(counter);
    likeCounter.innerText = counter + " like(s)";
}