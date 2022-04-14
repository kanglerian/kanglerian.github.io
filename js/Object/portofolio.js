let textPort = "";
let portofolio = [
    {
        nama: "Links Apps",
        sampul: "",
        tipe: "Front End Development",
        linkApps: "https://kanglerian.github.io/links",
        deskripsi: "https://github.com/kanglerian/links",
    },{
        nama: "Aplikasi Perpustakaan",
        sampul: "",
        tipe: "Full Stack Development",
        linkApps: "https://library.codalecenter.com/",
        deskripsi: "https://github.com/kanglerian/codale-library",
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