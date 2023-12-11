const wynik = document.querySelector(`#wynik`);
const btn = document.querySelector('button');


function kolory(a, b) {
    let x;
   if (a > b){
       x = "<p style='color: red'> ${a} <span style='color: blue'> ${b} </span></p>"
   }
   else if (a < b){
       return "<p style='color: blue'> ${a} <span style='color: red'> ${b} </span></p>"
   }
   else
       return "<p style='color: green'> ${a}, ${b} </p>"
}

btn.addEventListener(`click`, function () {
    wynik.innerHTML = kolory(10, 12);
    }
)