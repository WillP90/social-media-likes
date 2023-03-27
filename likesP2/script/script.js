console.log("Hello World")

let counter = [0, 0, 0]
let likes = [document.querySelector(".likes0"),
            document.querySelector(".likes1"),
            document.querySelector(".likes2")]
function addLike(id) {
    counter[id]++
    likes[id].innerText = counter[id]
    console.log(counter[id])
}