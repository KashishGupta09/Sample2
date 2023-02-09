const iId = document.getElementById('India');
let Ibtn = document.getElementById('iBtn');
const kId = document.getElementById('Korea');
let Kbtn = document.getElementById('kBtn');
const bId = document.getElementById('China');
let Bbtn = document.getElementById('bBtn');


let IndiaTime =  () => {
    // const d = new Date();
    // const localTime = d.getTime();
    // const localOffset = d.getTimezoneOffset() * 60000;

    // const utc = localTime  + localOffset;
    // const offset = 0;
    // const india = utc + (3600000 * offset);

    iId.innerHTML = new Date().toLocaleString();

}

Ibtn.onclick =  () => {

        let interval;
        IndiaTime();
        interval = setInterval(IndiaTime, 1000);
        clearDataI(interval);

}
let KoreaTime = function () {
    const d = new Date();
    const localTime = d.getTime();
    const localOffset = d.getTimezoneOffset() * 60000;

    const utc = localTime  + localOffset;
    const offset = 9;
    const korea = utc + (3600000 * offset);

    kId.innerHTML = new Date(korea).toLocaleString();

}

Kbtn.onclick = () => {
    let interval;
    
        KoreaTime();
        interval = setInterval(KoreaTime, 1000);
        clearDataK(interval);
    }
    

let ChinaTime =  () => {
    const d = new Date();
    const localTime = d.getTime();
    const localOffset = d.getTimezoneOffset() * 60000;

    const utc = localTime  + localOffset;
    const offset = 8;
    const china = utc + (3600000 * offset);

    bId.innerHTML = new Date(china).toLocaleString();

}

Bbtn.onclick =  () => {

        let interval;
        ChinaTime();
        interval = setInterval(ChinaTime, 1000);
        clearDataC(interval);

}

function clearDataC(id) {
    setTimeout( () => {
        bId.innerHTML = "";
        clearInterval(id);
    } , 3000);    

}

function clearDataK(id) {
    setTimeout( () => {
        kId.innerHTML = "";
        clearInterval(id);
    } , 3000);    

}

function clearDataI(id) {
    setTimeout( () => {
        iId.innerHTML = "";
        clearInterval(id);
    } , 3000);    

}






