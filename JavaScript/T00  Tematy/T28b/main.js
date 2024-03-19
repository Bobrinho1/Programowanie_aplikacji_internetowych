function obliczDniDoUrodzin() {
    let input = document.getElementById("zmienna_a").value;
    let dataUrodzenia = new Date(input);
    let dzisiaj = new Date();
    dataUrodzenia.setFullYear(dzisiaj.getFullYear());
    if (dataUrodzenia.getTime() < dzisiaj.getTime()) {
        dataUrodzenia.setFullYear(dzisiaj.getFullYear() + 1);
    }
    let roznicaCzasu = dataUrodzenia.getTime() - dzisiaj.getTime();
    let dniDoUrodzin = Math.ceil(roznicaCzasu / (1000 * 60 * 60 * 24));

    document.getElementById("wynik").innerHTML = "Pozostało " + dniDoUrodzin + " dni do Twoich urodzin!";
}