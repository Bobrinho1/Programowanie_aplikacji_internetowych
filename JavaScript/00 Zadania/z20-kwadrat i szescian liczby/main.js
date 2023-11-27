const a = document.querySelector(`#zmienna_a`);
const wynik = document.querySelector(`#wynik`);
const btn = document.querySelector('button');

btn.addEventListener(`click`, function () {
    let liczba_a = parseFloat(a.value);

    let kwadrat = Math.pow(liczba_a, 2);
    let szescian = Math.pow(liczba_a, 3);
    wynik.innerHTML = "Kwadrat liczby " + liczba_a + ", to: " + kwadrat + ", a sześcianem tej liczby jest: " + szescian;
    }
)