const getToken = () => {
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, 0);
  document.getElementById("number").innerText = token;

  let count = 3;


  setInterval(() => {
    if (count >= 0) {
      document.getElementById("counter").innerText = count;
    }
    if (count === 0) {
      document.getElementById("done").setAttribute("disabled", "true");
    }
    count = count - 1;
  }, 1000);





  // let count = 180
  // setInterval( () => {
  //     if(count >=0){
  //         const minutes = Math.floor(count/60)
  //         const seconds = count%60
  //         document.getElementById("counter").innerText = minutes +":" + seconds
  //         count = count - 1
  //     }
  //
  // => 3분 타이머
};
