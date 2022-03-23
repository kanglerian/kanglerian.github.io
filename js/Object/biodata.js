let person = {
    firstName: "Lerian",
    lastName: "Febriana",
    title: "A.Md.Kom",
    age: 24,
    role: "Informatics Engineer",
    based: "Kota Tasikmalaya, Indonesia"
}
document.getElementById("nama").innerHTML = person.firstName + " " + person.lastName + ", " + person.title;
document.getElementById("role").innerHTML = person.role;
document.getElementById("based").innerHTML = person.based;