let textExp = "";
let experience = [
    {
        nama: "PT. Aisin Indonesia",
        jabatan: "Production Operator",
        tahunBergabung: "Sept 2016",
        tahunSelesai: "April 2017",
        logo: "aisin.svg"
    },{
        nama: "Politeknik LP3I Kampus Tasikmalaya",
        jabatan: "IT Support",
        tahunBergabung: "Sept 2018",
        tahunSelesai: "Present",
        logo: "lp3i.svg"
    }
];

experience.forEach(expFunction);
document.getElementById("contentExp").innerHTML = textExp;

function expFunction(item){
    textExp += `<div class="col-12 col-md-12 col-lg-6"><div class="card card-body"><div class="row"><div class="col-auto"><img src="./img/icon/${item.logo}" width="30px"/></div><div class="col-auto"><h6 class="fw-bold">${item.jabatan}</h6><p class="company">${item.nama}</p></div><p class="year">${item.tahunBergabung} - ${item.tahunSelesai}</p></div></div></div>`
}