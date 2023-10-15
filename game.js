function init() { }
let x = 0
let y = 0

setInterval(update, 100)
function update() {
    console.log('ok')
    x += 1
    y += 1    
}

setInterval(drawImage, 1)
function drawImage() {
    drawImg('kufte', x, y, 100, 100)
}
