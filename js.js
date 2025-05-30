function updateTime() {
    const timeElement = document.getElementById('tm');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    const timeString = `${hours}:${minutes}`;
    timeElement.textContent = timeString;
  }
  
  setInterval(updateTime, 1000); 
  updateTime(); 


  function appentera(audioPath) {
    var audio = new Audio('imgs/clicksound.mp3');
    audio.play();
  }
  function startup() {
    const audio = new Audio('imgs/startup.mp3');
    audio.play();
  }


 

  function cor(){
 var coor = document.getElementById("coris").value;

 document.getElementById("bod").style.backgroundColor = coor
  }  




  function func(){

 let resp = Number(document.getElementById("data").value);
 
 let cert = 141008;

  resp == cert ? window.location.assign("becuriosa.html") : alert("errado :(")
 

}