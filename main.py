def my_function():
    global fire
    fire = 1
    basic.pause(100)
    fire = 0
GAME_ZIP64.on_button_press(GAME_ZIP64.ZIP64ButtonPins.UP,
    GAME_ZIP64.ZIP64ButtonEvents.DOWN,
    my_function)

fire = 0
GAME_ZIP64.set_buzzer_pin()
display = GAME_ZIP64.create_zip64_display()
display.set_brightness(25)
color_proj = GAME_ZIP64.rgb(0, 0, 0)
y = 7
x = 4
fire_end = 1
projy = 0
projx = 0
# display updater

def on_forever():
    display.clear()
    display.set_matrix_color(x, y, GAME_ZIP64.rgb(255, 255, 255))
    display.set_matrix_color(x, y - 1, GAME_ZIP64.rgb(255, 255, 255))
    display.set_matrix_color(x + 1, y, GAME_ZIP64.rgb(255, 255, 255))
    display.set_matrix_color(x - 1, y, GAME_ZIP64.rgb(255, 255, 255))
    display.set_matrix_color(projx, projy, color_proj)
    display.show()
basic.forever(on_forever)

def on_forever2():
    global projx, projy, color_proj
    if fire == 1:
        projx = x
        projy = y + 2
        color_proj = GAME_ZIP64.rgb(255, 0, 0)
    else:
        color_proj = GAME_ZIP64.rgb(0, 0, 0)
basic.forever(on_forever2)

def on_forever3():
    global fire_end
    if projy <= 0:
        fire_end = 1
    else:
        fire_end = 0
basic.forever(on_forever3)

def on_forever4():
    global projy
    while fire_end == 0:
        basic.pause(10)
        projy += -1
basic.forever(on_forever4)
