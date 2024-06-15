GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Left, GAME_ZIP64.ZIP64ButtonEvents.Down, function () {
    if (x > 1) {
        x = x - 1
    }
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Right, GAME_ZIP64.ZIP64ButtonEvents.Down, function () {
    if (x < 6) {
        x = x + 1
    }
})
GAME_ZIP64.onButtonPress(GAME_ZIP64.ZIP64ButtonPins.Up, GAME_ZIP64.ZIP64ButtonEvents.Down, function () {
    fire = 1
    basic.pause(100)
    fire = 0
})
let gameover = 0
let getshot = 0
let eney = 0
let enex = 0
let projy = 0
let projx = 0
let fire = 0
let x = 0
GAME_ZIP64.setBuzzerPin()
let display = GAME_ZIP64.createZIP64Display()
display.setBrightness(25)
let color_proj = GAME_ZIP64.rgb(0, 0, 0)
let y = 7
x = 4
let fire_end = 1
// display updater
basic.forever(function () {
    display.clear()
    display.setMatrixColor(x, y, GAME_ZIP64.rgb(255, 255, 255))
    display.setMatrixColor(x, y - 1, GAME_ZIP64.rgb(255, 255, 255))
    display.setMatrixColor(x + 1, y, GAME_ZIP64.rgb(255, 255, 255))
    display.setMatrixColor(x - 1, y, GAME_ZIP64.rgb(255, 255, 255))
    display.setMatrixColor(projx, projy, color_proj)
    display.setMatrixColor(enex, eney, GAME_ZIP64.colors(ZipLedColors.Blue))
    display.show()
})
basic.forever(function () {
    if (fire_end == 1) {
        color_proj = GAME_ZIP64.rgb(0, 0, 0)
        projx = 8
        projy = 8
    }
})
basic.forever(function () {
    if (fire == 1) {
        projx = x
        projy = y - 2
        color_proj = GAME_ZIP64.rgb(255, 0, 0)
    }
})
basic.forever(function () {
    if (projy <= 0) {
        fire_end = 1
    } else {
        fire_end = 0
    }
})
basic.forever(function () {
    while (fire_end == 0) {
        basic.pause(100)
        projy = projy - 1
    }
})
basic.forever(function () {
    if (eney == projy && enex == projx || (eney + 1 == projy && enex == projx || (eney - 1 == projy && enex == projx || (eney == projy && enex + 1 == projx || eney == projy && enex - 1 == projx)))) {
        getshot = 1
    } else {
        basic.pause(1000)
        getshot = 0
    }
})
basic.forever(function () {
    if (eney >= 6) {
        gameover = 1
        basic.showString("game over")
    } else {
        gameover = 0
    }
})
basic.forever(function () {
    while (gameover == 0 && getshot == 0) {
        while (!(enex >= 8) && (gameover == 0 && getshot == 0)) {
            enex = enex + 1
            basic.pause(500)
        }
        enex = 0
        eney = eney + 1
        basic.pause(500)
    }
    eney = 0
    enex = 0
})
