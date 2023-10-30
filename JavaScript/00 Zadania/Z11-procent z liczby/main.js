const a = document.querySelector(`#zmienna_a`);
const b = document.querySelector(`#zmienna_b`);
const wynik = document.querySelector(`#wynik`);
const btn = document.querySelector('button');

btn.addEventListener(`click`, function () {
        let wartosc = parseInt(a.value);
        let procent = parseInt(b.value);
        let procenty = wartosc * procent / 100;


        wynik.innerHTML = procent + "% z " + wartosc + " to " + procenty;
    }
)