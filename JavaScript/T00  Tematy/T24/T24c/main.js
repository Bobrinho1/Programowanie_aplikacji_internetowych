const wynik = document.querySelector(`#wynik`);
const btn = document.querySelector('button');

btn.addEventListener(`click`, function () {
        const ur1 = new Date(document.querySelector('#zmienna_b').value)
        const ur2 = new Date(document.querySelector('#zmienna_d').value)

        const imie1 = document.querySelector('#zmienna_a').value
        const imie2 = document.querySelector('#zmienna_c').value

        if (ur1.getTime() < ur2.getTime()){
                wynik.innerHTML = imie1 + " jest starszy niż " + imie2;
        }
        else if (ur1.getTime() > ur2.getTime()){
                wynik.innerHTML = imie2 + " jest staszy niż " + imie1;
        }
        else{
                wynik.innerHTML = imie1 + " i " + imie2 + " są w tym samym wieku";
        }
    }
)