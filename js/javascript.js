// JavaScript Alert
function myGreeting(){
    var greeting;
    if(confirm("Apa kabar kamu hari ini? 😄")){
        greeting = "Alhamdulillah, semoga harimu baik ya! 👋";
        document.getElementById("greeting").style.backgroundColor = "#000";
        document.getElementById("greeting").style.color = "#fff";
    }else{
        greeting = "Mudah-mudahan, apapun masalahnya segera selesai ya! 👋"
        document.getElementById("greeting").style.backgroundColor = "#0173ff2c";
        document.getElementById("greeting").style.color = "#000";
    }
    document.getElementById("greeting").innerHTML = greeting;
    document.getElementById("greeting").style.display = "block";
}

function myAlert(){
    alert("Maaf, fungsi ini belum tersedia! 👋");
}
