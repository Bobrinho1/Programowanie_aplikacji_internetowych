const wynik = document.querySelector(`#wynik`);
const btn = document.querySelector('button');


function bezwzględna(a) {
    const liczba = (a > 0)? a : a * -1;
    return liczba;
}

btn.addEventListener(`click`, function () {
    wynik.innerHTML = bezwzględna(-6);
    }
)