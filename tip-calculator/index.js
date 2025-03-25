let mongondun = document.getElementById("mongonDun");
let tipPercent = document.getElementById("tipPercent");
let niitDun = document.getElementById("niitDun");
console.log(niitDun)

console.log(mongondun);


function myFunction(){
    const a = mongondun.value;
    const huwi = a * 5 /100;
    const total= Math.round(huwi+a);
    niitDun.innerText = "Total " + total;

}
