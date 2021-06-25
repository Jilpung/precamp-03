let count = 180
setInterval(()=>{
    if(count >= 0){
        const minutes = Math.floor(count/60)
        const seconds = count%60
        console.log(minutes + ":" + seconds)
        count = count-1
    }
}, 1000)

// 3분스톱워치