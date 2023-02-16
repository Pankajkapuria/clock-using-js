let hour=document.getElementById('hour');
let min=document.getElementById('minitus');
let seconds=document.getElementById('seconds')
setInterval(() => {
    let d=new Date();
    getH=d.getHours();
    getm=d.getMinutes();
    gets=d.getSeconds();

    rotainthour=30*getH+ getm/2;
    rotaintminiutes=6*getm+gets/10;
    rotaintseconds=6*gets;

    hour.style.transform=`rotate(${rotainthour}deg)`;
    min.style.transform=`rotate(${rotaintminiutes}deg)`;
    seconds.style.transform=`rotate(${rotaintseconds}deg)`;

}, 1000);