const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const clock = setInterval(function time(){
    let date = new Date()

    let hr = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    
    if(hr < 10){
        hr = '0'+hr
    }else{
        hr = hr
    }
    if(min < 10){
        min = '0'+min
    }else{
        min = min
    }
    if(sec < 10){
        sec = '0'+sec
    }else{
        sec = sec
    }
    
    horas.innerHTML = hr
    minutos.innerHTML = min
    segundos.innerHTML = sec
})
