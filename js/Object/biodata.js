let person = {
    firstName: "Lerian",
    lastName: "Febriana",
    title: "A.Md.Kom",
    based: "Kota Tasikmalaya, Indonesia",
    aboutMe: "I'm a Software Engineer based in Tasikmalaya City, Indonesia. I specialise in Web Development and IT Support. I'm always striving to grow and learn something new. I'm interested about IoT Development and Electrical Engineering 👋"
}

document.getElementById("nama").innerHTML = `${person.firstName} ${person.lastName}, ${person.title}`;
document.getElementById("tentang").innerHTML = person.aboutMe;
