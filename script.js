var firstName=undefined;
var lastName=undefined;
var rollNo=undefined  ;

var stdarr=[];
function init(){
    firstName=document.getElementById("firstName");
    lastName=document.getElementById("lastName");
    rollNo=document.getElementById("rollNo");


    var mydata=localStorage.getItem("stddata");
    var myarr=JSON.parse(mydata);
    for(data of myarr){
          stdarr.push(data);
          add2table(data);
    }

  }

function process(){
     var vfirstName=firstName.value;
    var vlastName=lastName.value;
     var vrollNo=parseInt(rollNo.value);
    
     std={vfirstName,vlastName,vrollNo}
  
     stdarr.push(std);
   
    add2table(std);
}

  function add2table(obj){
     var tr=document.createElement("tr");

    var td1=document.createElement("td");
    td1.innerText=obj.vrollNo;
     tr.appendChild(td1);  

     var td2=document.createElement("td");
    td2.innerText=obj.vfirstName;
    tr.appendChild(td2);

    var td3=document.createElement("td");
    td3.innerText=obj.vlastName;
    tr.appendChild(td3);

    var td4=document.createElement("td");
    var btn=document.createElement("button");
    btn.innerText="Delete"
    btn.onclick=deleteData;
    btn.setAttribute("data-pos",stdarr.length-1);
    td4.appendChild(btn);
    tr.appendChild(td4);
    

   tbody.appendChild(tr);
 }


function deleteData(){
  //alert("Hello!!!");
  var pos=this.getAttribute("data-pos");
  //alert(pos);
  stdarr.splice(pos,1);
  this.parentElement.parentElement.remove();
}

 function save(){
        var stddata=JSON.stringify(stdarr);
        localStorage.setItem  ("stddata",stddata );
 }