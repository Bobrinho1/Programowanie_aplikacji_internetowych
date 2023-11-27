const a = document.querySelector(`#zmienna_a`);
const wynik = document.querySelector(`#wynik`);
const btn = document.querySelector('button');

btn.addEventListener(`click`, function () {
        let liczba_a = parseFloat(a.value);
        if (liczba_a >= 10 && liczba_a <= 99){
            if (liczba_a % 2 == 0){
                wynik.innerHTML = "Liczba jest dwucyfrowa parzysta.";
            }
            else
                wynik.innerHTML = "Liczba jest dwucyfrowa nieparzysta.";
        }
        else
            wynik.innerHTML = "Liczba nie jest dwucyfrowa."
    }
)