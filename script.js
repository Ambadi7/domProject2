const clock = document.querySelector('#clock')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const section = document.querySelector('#section')

const displayTime = () => {
    let hrs = new Date().getHours()
    let mins = new Date().getMinutes()
    let sec = new Date().getSeconds()

    if (hrs >= 12){
        section.innerHTML= "PM"
    }
    else{
        section.innerHTML = "AM"
    }
    if(hrs >12){
        hrs = hrs-12
    }
    if(sec < 10){
        seconds.innerHTML = "0" + sec
    }
    else{
        seconds.innerHTML = sec
    }
    hours.innerHTML = hrs
    // minutes.innerHTML = mins
    // seconds.innerHTML = sec
}
setInterval(displayTime,10) 


