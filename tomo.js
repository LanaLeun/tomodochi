const thework = document.getElementById("thework")
const button = document.getElementById("button")
const result = document.getElementById("result")
let food = false
let game = false

button.addEventListener('click', () => {
    const w = thework.value

    if (w === "eat") {
        if (food) {
            result.innerHTML = "Он сытый, поиграй с ним"
        } else {
            result.innerHTML = "Ты покормил егооо"
            food = true
            game = false
        }

    } else if (w === "play") {
        if (game) {
            result.innerHTML = "Он устал, покорми его"
        } else {
            result.innerHTML = "Ты поиграл с ним"
            game = true
            food = false
        }

    }
})