
const btn = document.querySelector('button')
const wynik = document.querySelector("#wynik");

function generujLiczbyPseudolosowe(n) {
    const tablicaLiczb = Array.from({length: n}, () => Math.random());
    return tablicaLiczb;
}
btn.addEventListener("click", function() {
    const nElement = document.getElementById("zmienna_a");
    const n = parseInt(nElement.value);
    const tablicaLiczb = generujLiczbyPseudolosowe(n);
    const maxWartosc = Math.max(...tablicaLiczb);
    wynik.innerHTML = (`Tablica liczb pseudolosowych: ${tablicaLiczb}, Największa wartość w tablicy: ${maxWartosc}`)
})