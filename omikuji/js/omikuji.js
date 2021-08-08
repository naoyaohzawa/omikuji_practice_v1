const omikuji = document.querySelector("#omikuji");
const result = document.querySelector("#result");
const echo = document.querySelector("#echo");

omikuji.onclick = function (e) {

const n = Math.ceil(Math.random()*5);
let veiw = "";
if (n===1) {
    veiw = '<img src="omikuji/img/omikuji_daikichi.png" alt="">';
}
if (n===2) {
    veiw = '<img src="omikuji/img/omikuji_chuukichi.png">';
}
if (n===3) {
    veiw = '<img src="omikuji/img/omikuji_syoukichi.png" alt="">';
}
if (n===4) {
    veiw = '<img src="omikuji/img/omikuji_kichi.png" alt="">';
}
if (n===5) {
    veiw = '<img src="omikuji/img/omikuji_kyou.png" alt="">';
}

echo.innerHTML = veiw;

}

