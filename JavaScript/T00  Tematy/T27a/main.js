
const btn = document.querySelector('button')
function tworzenietablicy() {
    const tablica = [];
    for (let i = 0; i < 3; i++) {
        const row = [];
        for (let j = 0; j < 3; j++) {
            row.push(Math.floor(Math.random() * 10));
        }
        tablica.push(row);
    }
    return tablica;
}

function sumowanieprzekatnych(tablica) {
    let lg_pd_sum = 0;
    let pg_ld_sum = 0;

    for (let i = 0; i < tablica.length; i++) {
        lg_pd_sum += tablica[i][i];
        pg_ld_sum += tablica[i][tablica.length - 1 - i];
    }

    return { lg_pd_sum, pg_ld_sum };
}

function wyswietltablice(tablica) {
    const wynikDiv = document.getElementById('wynik');
    wynikDiv.innerHTML = 'Wygenerowana tablica:<br>';

    for (let i = 0; i < tablica.length; i++) {
        wynikDiv.innerHTML += tablica[i].join('\t') + '<br>';
    }
}
btn.addEventListener("click", function(){
    const tablica = tworzenietablicy();
    wyswietltablice(tablica);
    const sumaprzekatnych = sumowanieprzekatnych(tablica);
    const wynikDiv = document.getElementById('wynik');
    wynikDiv.innerHTML += '<br>Suma przekątnej lewa góra - prawy dół: ' + sumaprzekatnych.lg_pd_sum;
    wynikDiv.innerHTML += '<br>Suma przekątnej prawa góra - lewy dół: ' + sumaprzekatnych.pg_ld_sum;

    if (sumaprzekatnych.lg_pd_sum > sumaprzekatnych.pg_ld_sum) {
        wynikDiv.innerHTML += '<br>Suma przekątnej lewa góra - prawy dół jest większa.';
    } else if (sumaprzekatnych.lg_pd_sum < sumaprzekatnych.pg_ld_sum) {
        wynikDiv.innerHTML += '<br>Suma przekątnej prawa góra - lewy dół jest większa.';
    } else {
        wynikDiv.innerHTML += '<br>Sumy przekątnych są równe.';
    }
})
