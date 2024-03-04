document.querySelector('button').addEventListener('click',
    function () {
        function generujLosowaLitere() {
            let litery = ['a', 'b', 'c', 'd', 'e'];
            let i = Math.floor(Math.random() * litery.length);
            return litery[i];
        }

        let liczbaWierszy = 7;
        let liczbaKolumn = 7;
        let tablica = [];
        for (let i = 0; i < liczbaWierszy; i++) {
            tablica[i] = [];
            for (let j = 0; j < liczbaKolumn; j++) {
                tablica[i][j] = generujLosowaLitere();
            }
        }
        let liczbaA = tablica.flat().filter(litera => litera === 'a').length;
        let BWiersz = [];
        for (const wiersz of tablica) {
            BWiersz.push(wiersz.filter(litera => litera === 'b').length);
        }
        let maxLiczbaB = Math.max(...BWiersz);
        let maxB = BWiersz.reduce((b, liczba, indeks) => {
            if (liczba === maxLiczbaB) {
                b.push(indeks + 1);
            }
            return b;
        }, []);

        let wynik = document.getElementById('wynik');
        wynik.innerHTML = `
    <p>Wygenerowana tablica:</p>
    <p>${tablica.map(wiersz => wiersz.join(' ')).join('<br>')}</p>
    <p>Liczba wystąpień litery 'a': ${liczbaA}</p>
    <p>Numery wierszy, w których najczęściej występuje litera 'b': ${maxB.join(', ')}</p>
  `;
    });
