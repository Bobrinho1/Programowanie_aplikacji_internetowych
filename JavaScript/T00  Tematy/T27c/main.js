function Uruchom() {
    let losowaTablica = generujLosowaTablice();
    let indeksyNajwiekszychWierszy = znajdzNajwiekszeWiersze(losowaTablica);
    let obroconaTablica = obrocTablice(losowaTablica);

    let wyniki = `
    <strong>Oryginalna tablica:</strong><br>
    ${formatujTablice(losowaTablica)}<br><br>

    <strong>Indeksy wierszy o największej sumie: ${indeksyNajwiekszychWierszy.join(', ')}</strong><br><br>

    <strong>Odwrócona tablica:</strong><br>
    ${formatujTablice(obroconaTablica)}
  `;

    document.getElementById("wyniki").innerHTML = wyniki;
}


function generujLosowaTablice() {
    let tablica = [];
    for (let i = 0; i < 4; i++) {
        tablica[i] = [];
        for (let j = 0; j < 4; j++) {
            tablica[i][j] = Math.round(Math.random());
        }
    }
    return tablica;
}

function znajdzNajwiekszeWiersze(tablica) {
    let maxSuma = -1;
    let indeksyNajwiekszychWierszy = [];

    for (let i = 0; i < tablica.length; i++) {
        const sumaWiersza = tablica[i].reduce((suma, liczba) => suma + liczba, 0);
        if (sumaWiersza === maxSuma) {
            indeksyNajwiekszychWierszy.push(i);
        } else if (sumaWiersza > maxSuma) {
            maxSuma = sumaWiersza;
            indeksyNajwiekszychWierszy = [i];
        }
    }

    return indeksyNajwiekszychWierszy;
}

function obrocTablice(tablica) {
    let obroconaTablica = [];
    for (let i = 0; i < tablica[0].length; i++) {
        obroconaTablica[i] = [];
        for (let j = tablica.length - 1; j >= 0; j--) {
            obroconaTablica[i].push(tablica[j][i]);
        }
    }
    return obroconaTablica;
}

function formatujTablice(tablica) {
    return tablica.map(row => row.join(' ')).join('<br>');
}
