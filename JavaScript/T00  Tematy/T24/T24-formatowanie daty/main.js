const wynik = document.querySelector(`#wynik`);
const btn = document.querySelector('button');

btn.addEventListener(`click`, function () {
    let a = document.querySelector(`#zmienna_a`).value;
    let tekst = a.split(" ")
    let imie = tekst[0]
    let nazwisko = tekst[1]
    imie = imie.charAt(0).toUpperCase() + imie.slice(1).toLowerCase();
    nazwisko = nazwisko.charAt(0).toUpperCase() + nazwisko.slice(1).toLowerCase();
    wynik.innerHTML = `Twoje imię to: ${imie}, a nazwisko: ${nazwisko}`;
    }
)