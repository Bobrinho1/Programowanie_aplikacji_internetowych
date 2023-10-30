const a = document.querySelector(`#zmienna_a`);
const wynik = document.querySelector(`#wynik`);
const btn = document.querySelector('button');

btn.addEventListener(`click`, function () {
        let sekundy = parseInt(a.value);
        let godziny = sekundy / 3600;
        let sekundyzg = sekundy % 3600;
        let minuty = sekundyzg / 60;
        let sekundyzm = sekundyzg % 60;
        if (sekundy%60 >= 30)
                minuty = minuty - 1;


            wynik.innerHTML = godziny.toFixed(0) + "g" + minuty.toFixed() + "m" + sekundyzm + "s";
    }
)