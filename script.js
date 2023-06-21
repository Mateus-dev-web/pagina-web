

function mudaHorar(){
    var data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    document.getElementById('relogio').innerHTML = `${hora}:${minutos}:${segundos}`
    document.getElementById('relogio').style.textAlign ='center'
}
setInterval(mudaHorar);


function mudarData(){
 var data = new Date()
 let dia = data.getDate()
 let mes = data.getMonth()
 let ano = data.getFullYear()

 document.getElementById('data').innerHTML = `${dia}/${mes}/${ano}`
}
setInterval(mudarData)