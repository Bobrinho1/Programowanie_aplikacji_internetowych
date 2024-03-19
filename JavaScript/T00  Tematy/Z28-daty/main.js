const wynik = document.querySelector(`#wynik`);
function DzisiejszaData() {
    const dzisiaj = new Date();
    const dzien = String(dzisiaj.getDate()).padStart(2, '0');
    const miesiac = String(dzisiaj.getMonth()+1).padStart(2,'0');
    const rok = dzisiaj.getFullYear();
    return `${dzien}.${miesiac}.${rok}r.`
}
function DataRzymskie() {
    let miesiace = ['I','II','III',"IV",'V','VI','VII','VIII',"IX",'X','XI','XII']
    const dzisiaj = new Date();
    const dzien = String(dzisiaj.getDate()).padStart(2, '0');
    const miesiac = miesiace[dzisiaj.getMonth()];
    const rok = dzisiaj.getFullYear();
    return `${dzien}.${miesiac}.${rok}r.`
}
function DataSlowna() {
    let miesiace = ['styczeń','luty','marzec',"kwiecień",'maj','czerwiec','lipiec','sierpień',"wrzesień",'październik','listopad','grudzień']
    const dzisiaj = new Date();
    const dzien = String(dzisiaj.getDate()).padStart(2, '0');
    const miesiac = miesiace[dzisiaj.getMonth()];
    const rok = dzisiaj.getFullYear();
    return `${dzien}.${miesiac}.${rok}r.`
}
function Wyswietlanie(){
    wynik.innerHTML = `${DzisiejszaData()}<br> ${DataSlowna()}<br>${DataRzymskie()}`
    }

