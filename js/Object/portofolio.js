let textPort = "";
let portofolio = [
    {
        nama: "Tarbiyah Sunnah Learning",
        sampul: "banner-tsl.jpg",
        tipe: "Front End Development",
        linkApps: "https://kanglerian.github.io/tarbiyah",
        deskripsi: "https://github.com/kanglerian/tarbiyah/blob/master/README.md",
    },
    {
        nama: "Links Apps",
        sampul: "banner-tsl.jpg",
        tipe: "Front End Development",
        linkApps: "https://kanglerian.github.io/tarbiyah",
        deskripsi: "https://github.com/kanglerian/links",
    },
    {
        nama: "Daily Apps",
        sampul: "banner-tsl.jpg",
        tipe: "Front End Development",
        linkApps: "https://kanglerian.github.io/daily/",
        deskripsi: "https://github.com/kanglerian/daily",
    },
    {
        nama: "Dirgahayu RI 77",
        sampul: "banner-tsl.jpg",
        tipe: "Front End Development",
        linkApps: "https://codepen.io/kanglerian/pen/LYeQPZo",
        deskripsi: "https://github.com/kanglerian/kanglerian-v2",
    },
    {
        nama: "Eid Mubarak 1443H",
        sampul: "banner-tsl.jpg",
        tipe: "Front End Development",
        linkApps: "https://codepen.io/kanglerian/pen/mdpXyGZ",
        deskripsi: "https://github.com/kanglerian/kanglerian-v2",
    },
];

portofolio.forEach(portFunction);
document.getElementById("contentPort").innerHTML = textPort;

function portFunction(item, index){
    textPort += `
        <div class="col-md-4 col-12">
            <div class="port-container" data-aos="fade-down" data-aos-delay="${index}00">
                <h6>${item.tipe}</h6>
                <span>${item.nama}</span>
                <a href="${item.linkApps}" target="_blank"><div class="port-image" style="background-image:url('./img/banner/${item.sampul}')"></div></a>
            </div>
        </div>`
}