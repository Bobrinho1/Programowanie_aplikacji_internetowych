const wynik = document.querySelector(`#wynik`);
const btn = document.querySelector('button');


function miesiac(a) {
    if (a >= 1 && a <= 12){
        switch (a){
            case 1:
                return "Styczeń";
            case 2:
                return "Luty";
            case 3:
                return "Marzec";
            case 4:
                return "Kwiecień";
            case 5:
                return "Maj";
            case 6:
                return "Czerwiec";
            case 7:
                return "Lipiec";
            case 8:
                return "Sierpień";
            case 9:
                return "Wrzesień";
            case 10:
                return "Październik";
            case 11:
                return "Listopad";
            case 12:
                return "Grudzień";
        }
    }
    else
        return "Podana liczba nie jest numerem miesiąca!!!!"
}

btn.addEventListener(`click`, function () {
    wynik.innerHTML = miesiac(10);
    }
)