let person = {
    firstName: "Lerian",
    lastName: "Febriana",
    title: "A.Md.Kom",
    age: 24,
    role: "Informatics Engineer",
    based: "Kota Tasikmalaya, Indonesia",
    location: "🇮🇩 Kota Tasikmalaya, Indonesia",
    website: "kanglerian.github.io",
    github: "github.com/kanglerian"
}
document.getElementById("nama").innerHTML = person.firstName + " " + person.lastName + ", " + person.title;
document.getElementById("role").innerHTML = person.role;
document.getElementById("based").innerHTML = person.based;
document.getElementById("location").innerHTML = person.location;
document.getElementById("website").innerHTML = person.website;
document.getElementById("github").innerHTML = person.github;