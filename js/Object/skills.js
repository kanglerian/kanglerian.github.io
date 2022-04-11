let textSkills = "";
let skills = [
    {
        nama: "Front End Development",
        icon: `<i class="fa-solid fa-laptop-code fa-2x"></i>`,
        desc: "Build a quality website with the best technology and optimization on search engine."
    },{
        nama: "IoT Enthusiast",
        icon: `<i class="fa-solid fa-microchip fa-2x"></i>`,
        desc: "Build a quality website with the best technology and optimization on search engine."
    },{
        nama: "IT Support",
        icon: `<i class="fa-solid fa-screwdriver-wrench fa-2x"></i>`,
        desc: "Build a quality website with the best technology and optimization on search engine."
    }
];

skills.forEach(skillsFunction);
document.getElementById("contentSkills").innerHTML = textSkills;

function skillsFunction(item, index){
    textSkills +=
    `<div class="col-12 col-md-4">
        <div class="card card-body" data-aos="fade-down" data-aos-delay="${index}00">
            <span>${item.icon}</span>
            <h3>${item.nama}</h3>
            <p>${item.desc}</p>
            <a href="#"><span>Show more</span> <i class="fa-solid fa-arrow-right-long ml-2"></i></a>
        </div>
    </div>`
}