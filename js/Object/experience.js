let textExp = "";
let experience = [
    {
        nama: "Politeknik LP3I Kampus Tasikmalaya",
        jabatan: "IT Support",
        tahunBergabung: "Sept 2018",
        tahunSelesai: "Present",
        logo: "aisin.svg",
        deskripsi: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        nama: "PT. Aisin Indonesia",
        jabatan: "Production Operator",
        tahunBergabung: "Sept 2016",
        tahunSelesai: "April 2017",
        logo: "aisin.svg",
        deskripsi: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
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