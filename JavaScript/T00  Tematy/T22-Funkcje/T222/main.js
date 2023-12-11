const wynik = document.querySelector(`#wynik`);
const btn = document.querySelector('button');


function potega(a, b) {
    let p = 1;
    for (i = 0; i >= b; )
    return `x = ${a} <br>
    y = ${b} <br>
    x<sup>y</sup> = ${a}<sup>${b}</sup> = ${p};
    `
}

btn.addEventListener(`click`, function () {
    wynik.innerHTML = potega(-6, 2);
    }
)