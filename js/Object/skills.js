let textSkills = "";
let skills = [
    {
        nama: "HTML5",
        nilai: 50,
        icon: `<i class="fa-brands fa-html5"></i>`
    },{
        nama: "CSS3",
        nilai: 50,
        icon: `<i class="fa-brands fa-css3-alt"></i>`
    },{
        nama: "Javascript",
        nilai: 50,
        icon: `<i class="fa-brands fa-js-square"></i>`
    },{
        nama: "Vue JS",
        nilai: 40,
        icon: `<i class="fa-brands fa-vuejs"></i>`
    },{
        nama: "PHP",
        nilai: 50,
        icon: `<i class="fa-brands fa-php"></i>`
    },{
        nama: "Laravel",
        nilai: 70,
        icon: `<i class="fa-brands fa-laravel"></i>`
    },{
        nama: "Docsify",
        nilai: 80,
        icon: `<i class="fa-solid fa-keyboard"></i>`
    },{
        nama: "Linux",
        nilai: 80,
        icon: `<i class="fa-brands fa-linux"></i>`
    },{
        nama: "IoT Development",
        nilai: 30,
        icon: `<i class="fa-solid fa-microchip"></i>`
    }
];

skills.forEach(skillsFunction);
document.getElementById("contentSkills").innerHTML = textSkills;

function skillsFunction(item){
    textSkills += `<div class="col-12 col-lg-6 col-xl-6 my-2"><label class="fw-bold">${item.icon} ${item.nama}</label><input type="range" class="form-range" value="${item.nilai}" disabled /></div>`
}