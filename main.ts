radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        CutebotPro.pwmCruiseControl(0, 50)
    }
    if (receivedNumber == 2) {
        CutebotPro.pwmCruiseControl(50, 0)
    }
    if (receivedNumber == 0) {
        CutebotPro.pwmCruiseControl(100, 100)
    }
    if (receivedNumber == 3) {
        CutebotPro.fullAstern()
    }
    if (receivedNumber == 0) {
        t_start = input.runningTime()
    }
    if (receivedNumber == geheimpje) {
        basic.showIcon(IconNames.Yes)
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else {
        music.stopAllSounds()
    }
    if (true) {
    	
    }
})
let t_start = 0
let geheimpje = 0
basic.showLeds(`
    # # . # #
    # # . # #
    # # . # #
    # # . # #
    # # . # #
    `)
radio.setGroup(1)
CutebotPro.colorLight(CutebotProRGBLight.RGBL, 0x7f00ff)
geheimpje = randint(0, 20)
basic.forever(function () {
    radio.sendNumber(geheimpje)
})
