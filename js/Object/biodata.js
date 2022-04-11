let person = {
    firstName: "Lerian",
    lastName: "Febriana",
    title: "A.Md.Kom",
    based: "Kota Tasikmalaya, Indonesia",
    aboutMe: "I'm a Informatics Engineer based in Kota Tasikmalaya, Indonesia. I specialise in Web Development, IT Support, IoT Development and Network Engineer. I'm always striving to grow and learn something new. I'm passionate about IoT Development and Electrical Engineering 👋"
}

document.getElementById("nama").innerHTML = person.firstName + " " + person.lastName;
document.getElementById("tentang").innerHTML = person.aboutMe;