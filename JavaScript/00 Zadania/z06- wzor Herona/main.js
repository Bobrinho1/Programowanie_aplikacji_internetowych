const a = document.querySelector(`#zmienna_a`);
const b = document.querySelector(`#zmienna_b`);
const c = document.querySelector(`#zmienna_c`);
const wynik = document.querySelector(`#wynik`);
const btn = document.querySelector('button');

btn.addEventListener(`click`, function () {
        let liczba_a = parseFloat(a.value);
        let liczba_b = parseFloat(b.value);
        let liczba_c = parseFloat(c.value);

        let p = 0.5*(liczba_a + liczba_b + liczba_c);
        let pole = Math.sqrt(p * (p - liczba_a)*(p - liczba_b)*(p - liczba_c));




        wynik.innerHTML = "Pole wynosi " + pole.toFixed(2);

    }
)