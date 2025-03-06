var a;
const subjects= [{coureCode:"SE221",type:"LEC"},{coureCode:"SE414",type:"LEC"},{coureCode:"SE221",type:"LEC"},{coureCode:"CC124",type:"LEC"},{coureCode:"SE311",type:"LEC"}]
var room;
function beingClicked(id){
a=id;
document.body.classList.toggle("body");
document.getElementById("editer").classList.toggle("invisible");
}
function handler(){
   room = document.getElementById("room").value;
   if(!room){
      document.getElementById("warning").classList.toggle("invisible")
   }
   else{
      onEdit()
   }
}
function onEdit(){
   let v= parseInt(document.getElementById("select").value);
   document.getElementById(a).innerHTML=`<b>${subjects[v-1].coureCode}</b>(${subjects[v-1].type}) <br> <b>${room}</b>`;
   console.log(v,room)
   document.body.classList.toggle("body");
   document.getElementById("editer").classList.toggle("invisible");
   
}