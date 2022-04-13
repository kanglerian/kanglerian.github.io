let textExp = "";
let experience = [
    {
        nama: "Politeknik LP3I Kampus Tasikmalaya",
        jabatan: "IT Support",
        tahunBergabung: "Sept 2018",
        tahunSelesai: "Present",
        logo: "aisin.svg",
        deskripsi: "Jobdesc yang dilakukan adalah melakukan maintenance komputer secara berkala, melakukan troubleshooting dan instalasi hardware & software."
    },
    {
        nama: "PT. Aisin Indonesia",
        jabatan: "Production Operator",
        tahunBergabung: "Sept 2016",
        tahunSelesai: "April 2017",
        logo: "aisin.svg",
        deskripsi: "Jobdesc yang dilakukan adalah melakukan perakitan doorhinge, memastikan stock komponen doorhinge tersedia, melakukan pengambilan komponen secara berkala, mengatur stock komponen dan pesanan agar tidak melebihi permintaan."
    }
];

experience.forEach(expFunction);
document.getElementById("contentExp").innerHTML = textExp;

function expFunction(item){
    textExp += 
    `<div class="row my-5 justify-content-center align-items-center" data-aos="fade-down" data-aos-delay="100">
        <div class="col-md-8 col-12">
            <h3 class="company-name">${item.nama}</h3>
            <span class="company-role">${item.jabatan}</span>
            <span class="company-year"><i class="fa-solid fa-calendar-days"></i> ${item.tahunBergabung} - ${item.tahunSelesai}</span>
            <p class="company-desc">${item.deskripsi}</p>
        </div>
        <div class="col-md-4 col-12 text-center" data-aos="fade-down" data-aos-delay="200">
            <img src="./img/icon/${item.logo}" class="img-fluid company-brand">
        </div>
    </div>`
}