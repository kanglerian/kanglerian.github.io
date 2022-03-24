let person = {
    firstName: "Lerian",
    lastName: "Febriana",
    title: "A.Md.Kom",
    photo: "lerian.jpg",
    role: "Informatics Engineer",
    based: "Kota Tasikmalaya, Indonesia",
    status: "1",
    aboutMe: "I'm a Informatics Engineer based in Kota Tasikmalaya, Indonesia. I specialise in Web Development, IT Support, IoT Development and Network Engineer. I'm always striving to grow and learn something new. I'm passionate about IoT Development and Electrical Engineering 👋"
}
document.getElementById("nama").innerHTML = person.firstName + " " + person.lastName + ", " + person.title;
document.getElementById("role").innerHTML = person.role;
document.getElementById("based").innerHTML = person.based;
document.getElementById("aboutMe").innerHTML = person.aboutMe;
document.getElementById("photo").style.backgroundImage = `url('../img/${person.photo}')`;

let status = document.getElementById("status");
if( person.status == "1"){
    status.innerHTML = "Open to work";
    status.style.backgroundColor = "#0FBA00";
    status.style.color = "#fff";
}else{
    status.innerHTML = "Not open";
    status.style.backgroundColor = "#ED1C24";
    status.style.color = "#fff";
}