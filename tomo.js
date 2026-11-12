const thework = document.getElementById("thework")
const button = document.getElementById("button")
const result = document.getElementById("result")
let food = 0
let game = 0


button.addEventListener('click', () => {
    const w = thework.value

    if (w === "eat") {
        if (food === 0) {
            result.innerHTML = "Ты покормил егооо"
            food = 1
            game = 0
        } else {
            result.innerHTML = "Он сытый"
        }

    } else if (w === "play") {
        if (game === 0) {
            result.innerHTML = "Ты поиграл с ним"
            game = 1
            food = 0
        } else {
            result.innerHTML = "Он устал"
        }
    } else if (w === "sleep") {
        if (game === 1 || food === 1) {
            result.innerHTML = "Ты уложил его спать"
            food = 0
            game = 0
        } else {
            result.innerHTML = "Он не хочет спать"
        }
    }
})