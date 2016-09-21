// task fucntion 
 function task(){
  var inputtext = document.getElementById('taskinput');
  var text = inputtext.value;
  if (!text || text =="") {alert("!! write somting !!");return false; }  

// creat    
  var newli = document.createElement('li');
  var newtext = document.createElement('span');
  var donebutton = document.createElement('button')
  var neweditbutton = document.createElement('button')
  var newdeletebutton = document.createElement('button')
  var todo = document.getElementById('mytodo');

// set id from date,hours,minutes,seconds
  newtext.innerHTML = text;
  var date = new Date();
  var id = "" + date.getHours() +date.getMinutes() + date.getSeconds() + date.getMilliseconds();

// set id to id   
  var index = (newli.id = "li_"+id);
  var spanid = (newtext.id = "sp_"+id);
  var doneid = (donebutton.id = "done_"+id);
  var editid = (neweditbutton.id = "edit_"+id);

// style newli, new done button, new edit button 
  newli.className = "list-group-item liclass col-md-12";
  newtext.contentEditable = "false";
  newtext.className = "text-left col-md-9 col-xs-6";

  donebutton.textContent = "Done"
  donebutton.className = "donebutton col-md-1 col-xs-2 btn btn-primary btn-xs active buttonstyle" 
  newdeletebutton.textContent = "Delete"
  newdeletebutton.className = "deletetaskbutton col-md-1 col-xs-2 btn btn-danger btn-xs active buttonstyle"
  newdeletebutton.style.float = "right"
  
  neweditbutton.textContent = "Edit"
  neweditbutton.className = "editbutton col-md-1 col-xs-2 btn btn-warning btn-xs active buttonstyle"
  neweditbutton.style.float = "right"
  
// add value to all new element 
  var newlielement = todo.appendChild(newli);
  newlielement.appendChild(newtext);
  newlielement.appendChild(newdeletebutton);
  newlielement.appendChild(neweditbutton);
  newlielement.appendChild(donebutton);
 
// edit button events onclick 
    neweditbutton.onclick = changetext;  
    function changetext(){
           var editablestatus;
           if (document.getElementById(spanid).contentEditable == "false"){
             neweditbutton.textContent = "OK";
             neweditbutton.className = "editbutton col-md-1 col-xs-2 btn btn-success btn-xs active";
             return document.getElementById(spanid).contentEditable = true;}
           else{
             document.getElementById(spanid).contentEditable = false;
             neweditbutton.textContent = "Edit"   ;          
             neweditbutton.className = "editbutton col-md-1 col-xs-2 btn btn-warning btn-xs active";
             if (document.getElementById(spanid).innerText == "") {
             var deletetask = document.getElementById(index);
             alert("!! You have to type someting !!");
             deletetask.parentNode.removeChild(deletetask);  } } }

// done button & delete button events onclick 
  donebutton.onclick = movetodone;
  newdeletebutton.onclick = deletetask;
  
// move to done function -- after done button.onclick  
  function movetodone() {
  var li_index = index
  var done = document.getElementById('done');
  var move = document.getElementById(li_index);
  done.appendChild(move);
  document.getElementById(editid).style.visibility = "hidden";
  document.getElementById(doneid).style.visibility = "hidden"; } 
 
// delete function -- after delete button.onclick
  function deletetask(){
  var li_index = index
  var deletetask = document.getElementById(li_index);
  deletetask.parentNode.removeChild(deletetask); }
}