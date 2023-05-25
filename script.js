function dq(x) { return document.querySelector(x) }
function dqa(x) { return document.querySelectorAll(x) }

const car = dq(".part-2-car-imgs")
const long = dqa('.part-2-car-imgs img').length - 1

console.log(parseInt(car.style.right) < parseInt(long) * 100 || car.style.right == '');

function gauche() {
    let pourc
    if (car.style.right != '') pourc = parseInt(car.style.right.replace('%', ''))
    if (pourc > 0) {
        pourc -= 100
        car.style.right = (pourc + '%')
    } else if (car.style.right == '' || pourc == 0) {
        pourc = long * 100
        car.style.right = (pourc + '%')
    }
}

function droite() {
    let pourc
    if (car.style.right != '') pourc = parseInt(car.style.right.replace('%', ''))
    if (car.style.right == '') {
        car.style.right = '100%'
    } else if (pourc < long * 100) {
        pourc += 100
        car.style.right = (pourc + '%')
    } else if (pourc == long * 100) {
        pourc = 0
        car.style.right = ''
    }
}