let textPort = "";
let portofolio = [
    {
        nama: "Tarbiyah Sunnah Learing",
        sampul: "banner-tsl.jpg",
        linkApps: "https://kanglerian.github.io/tarbiyah",
        deskripsi: "https://github.com/kanglerian/tarbiyah/blob/master/README.md",
    }
];

portofolio.forEach(portFunction);
document.getElementById("contentPort").innerHTML = textPort;

function portFunction(item){
    textPort += `<div class="col-12 col-md-6 col-lg-6 col-xl-6"><div class="card"><a href="${item.linkApps}" target="_blank"><img src="./img/banner/${item.sampul}" class="card-img-top"/></a><a href="${item.deskripsi}" target="_blank" class="btn btn-primary btn-sm mt-3">Description</a></div></div>`
}