const a = document.querySelector(`#zmienna_a`);
const b = document.querySelector(`#zmienna_b`);
const wynik = document.querySelector(`#wynik`);
const btn = document.querySelector('button');

btn.addEventListener(`click`, function () {
        let min = parseFloat(a.value);
        let max = parseFloat(b.value);
        let liczba_1 = Math.floor(Math.random() * (max - min + 1) + min);
        let liczba_2 = Math.floor(Math.random() * (max - min + 1) + min);
        let liczba_3 = Math.floor(Math.random() * (max - min + 1) + min);
        let liczba_4 = Math.floor(Math.random() * (max - min + 1) + min);
        let liczba_5 = Math.floor(Math.random() * (max - min + 1) + min);

        let suma = liczba_1 + liczba_2 + liczba_3 + liczba_4 + liczba_5;
        let srednia = (liczba_1 + liczba_2 + liczba_3 + liczba_4 + liczba_5)/5;
        let iloczyn = liczba_1 * liczba_2 * liczba_3 * liczba_4 * liczba_5;

        wynik.innerHTML = liczba_1 + ", " + liczba_2 + ", " + liczba_3 + ", " + liczba_4 + ", " + liczba_5 + "<br> Suma wynosi:" + suma + "<br> Średnia wynosi: " + srednia + "<br>Iloczyn wynosi: " + iloczyn;
    }
)