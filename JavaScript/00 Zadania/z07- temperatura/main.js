const a = document.querySelector(`#zmienna_a`);
const wynik = document.querySelector(`#wynik`);
const btn = document.querySelector('button');

btn.addEventListener(`click`, function () {
        let celsjusze = parseFloat(a.value);
        let kelviny = celsjusze + 273.15;
        let farenheity = 1.8 * celsjusze + 32;



        wynik.innerHTML = "Celsjusze: " + celsjusze + "<br>Kelviny: " + kelviny + "<br>Farenheity: " + farenheity;

    }
)