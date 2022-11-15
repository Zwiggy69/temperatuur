let temperatuur = 0
input.onButtonPressed(Button.A, function () {
    temperatuur = input.temperature()
    basic.showNumber(input.temperature())
})
loops.everyInterval(50000, function () {
    temperatuur = input.temperature()
    basic.showNumber(input.temperature())
})
basic.forever(function () {
    temperatuur = input.temperature()
    basic.showNumber(input.temperature())
})
