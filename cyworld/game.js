function startword() {
    const word = document.getElementById("word").innerText // 코드캠프
    const lastword = word[word.length-1] // 프
    
    const myword = document.getElementById("myword").value // (프랑스)
    const firstword = myword[0] // 프
    
    if(lastword === firstword){
        document.getElementById("result").innerText = "정답"
        document.getElementById("word").innerText = myword
        // 정답일 때 쓰는 곳
    }else{
        document.getElementById("result").innerText = "오답"
        // 오답일 때 쓰는 곳
    }
}

function randomlotto(){
    // const lottobutton = String(Math.floor(Math.random() * 1000000)).padStart(6, 0) 
    // document.getElementById("wrapper__lotto__body").innerText = lottobutton
    
    const lotto1 = String(Math.floor(Math.random() * 100))
    document.getElementById("lotto1").innerText = lotto1
    const lotto2 = String(Math.floor(Math.random() * 100))
    document.getElementById("lotto2").innerText = lotto2
    const lotto3 = String(Math.floor(Math.random() * 100))
    document.getElementById("lotto3").innerText = lotto3
    const lotto4 = String(Math.floor(Math.random() * 100))
    document.getElementById("lotto4").innerText = lotto4
    const lotto5 = String(Math.floor(Math.random() * 100))
    document.getElementById("lotto5").innerText = lotto5
    const lotto6 = String(Math.floor(Math.random() * 100))
    document.getElementById("lotto6").innerText = lotto6
}