function updateClock(){
    var currentTime=new Date();
    var hours= currentTime.getHours();
    var minutes= currentTime.getMinutes();

    hours= padZero(hours);
    minutes=padZero(minutes);

    var timeString = hours +":"+ minutes;
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; 
    var dateString = currentTime.toLocaleDateString('es-ES', options);

    document.getElementById("time").textContent= timeString;
    document.getElementById("fecha").textContent = dateString;

    setTimeout(updateClock,1000);
}
function padZero (number){
    return number <10 ? "0" + number: number;
}
updateClock();