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

document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const strengthIndicator = document.getElementById('strength-indicator');
    

    const strength = calculateStrength(password);
    
    strengthIndicator.style.width = strength.percent + '%';

    if (strength.level === 'weak') {
        strengthIndicator.className = 'strength-indicator strength-weak';
    } else if (strength.level === 'medium') {
        strengthIndicator.className = 'strength-indicator strength-medium';
    } else if (strength.level === 'strong') {
        strengthIndicator.className = 'strength-indicator strength-strong';
    } else {
        strengthIndicator.className = 'strength-indicator';
    }
});

function calculateStrength(password) {
    let score = 0;

    if (password.length >= 6) score += 1;
    if (/[A-Z]/.test(password)) score += 2;
    if (/[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    if (/[ñ,Ñ]/.test(password)) score += 2;

    let percent = (score / 5) * 100;
    let level;

    if (score <= 1) {
        level = 'weak';
    } else if (score <= 3) {
        level = 'medium';
    } else {
        level = 'strong';
    }
    return { percent, level };
}
function solicitarPlan(plan) {
    document.getElementById('modalText').innerText = 'gracias por solicitar el  ' + plan;
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}
