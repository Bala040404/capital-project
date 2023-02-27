let country = document.querySelector("#country");
let f = document.querySelector("#form");
let sub = document.querySelector("#a");
f.addEventListener("submit", (e) => {
    e.preventDefault();
    let n = country.value
    let el = document.querySelector("#ans");


    let add = "https://restcountries.com/v3.1/name/" + n;
    fetch(add)
        .then(response => response.json())
        .then(function (data) {
            try {
                let text = `The capital of ${n} is : ${data[1].capital[0]}`;
                el.innerText = text;
            }
            catch {
                let text = `The capital of ${n} is : ${data[0].capital[0]}`;
                el.innerText = text;
            }


        })
        .catch(err => console.error(err));

})    
