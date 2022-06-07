let textExp = "";
let experience = [
    {
        nama: "Politeknik LP3I Kampus Tasikmalaya",
        jabatan: "IT Support",
        tahunBergabung: "Sept 2018",
        tahunSelesai: "Present",
        logo: "lp3i.svg",
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
    `
    <div class="col-md-6 col-12" data-aos="fade-down" data-aos-delay="${index}00">
      <div class="card card-body">
        <div class="content">
          <img src="/img/icon/${item.logo}" class="img-exp">
          <span class="title-exp">${item.nama}</span>
          <p class="desc-exp">${item.deskripsi}</p>
        </div>
      </div>
    </div>`
}