radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        CutebotPro.pwmCruiseControl(30, 100)
    }
    if (receivedNumber == 2) {
        CutebotPro.pwmCruiseControl(100, 30)
    }
    if (receivedNumber == 0) {
        CutebotPro.pwmCruiseControl(100, 100)
    }
    if (receivedNumber == 3) {
        CutebotPro.fullAstern()
    }
    if (receivedNumber == 4) {
        CutebotPro.cruiseControl(0, 0, CutebotProSpeedUnits.Cms)
        radio.setGroup(2)
    }
    if (receivedNumber == 0) {
        t_start = input.runningTime()
    }
})
radio.onReceivedString(function (receivedString) {
    t_Next = input.runningTime()
    T_tussen = t_Next - t_prev
    t_prev = t_Next
    radio.sendString("C")
    radio.setGroup(1)
    basic.showString(receivedString)
})
let T_tussen = 0
let t_Next = 0
let t_start = 0
let t_prev = 0
basic.showLeds(`
    # # . # #
    # # . # #
    # # . # #
    # # . # #
    # # . # #
    `)
radio.setGroup(1)
CutebotPro.colorLight(CutebotProRGBLight.RGBL, 0x7f00ff)
t_prev = 0
basic.forever(function () {
    radio.sendNumber(0)
})
