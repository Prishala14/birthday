input.onButtonPressed(Button.AB, function () {
    birthday = 5
    basic.showNumber(birthday)
    while ((5 as any) < (4 as any)) {
        if (0 <= 0) {
            basic.showNumber(input.lightLevel())
        } else {
            basic.pause(100)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    if (input.buttonIsPressed(Button.A)) {
        music.ringTone(262)
    } else {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    }
})
let birthday = 0
basic.showNumber(randint(0, 10))
basic.forever(function () {
	
})
