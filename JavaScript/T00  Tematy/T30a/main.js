const obraz= document.querySelector(`img`)
const range = document.range
function rysujRamke(){
    kolor = document.querySelector(`#kolor`).value
    suwak = document.querySelector(`#suwak`).value

    obraz.style.borderColor = kolor
    obraz.style.borderWidth = `${suwak}px`
    console.log(kolor)
    console.log(suwak)
}