let addButton = document.getElementById("addButton");
addButton.addEventListener("click", add);
let removeButton=document.getElementById("removeButton")
removeButton.addEventListener('click',remove)
let body = document.getElementById("tb");
function add() {
  let name = document.getElementById("iName");
  let nametext = name.value;
  let namenode = document.createTextNode(nametext);
  let author = document.getElementById("inputAuthor");
  let authortext = author.value;
  let authornode = document.createTextNode(authortext);
if((nametext=='')||(authortext=='')){
    return false;
}
else{
    let radionode = document.createTextNode(checkButton());
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    var checkbox=document.createElement('input');
checkbox.type='checkbox'
checkbox.setAttribute('id','check')
    td1.appendChild(namenode);
    td2.appendChild(authornode);
    td3.appendChild(radionode);
    tr.appendChild(checkbox)
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    body.appendChild(tr);
 
}
name.value=''
author.value=''
  
}
function checkButton() {
  if (document.getElementById("fiction").checked) {
    radiocheck = document.getElementById("fiction").value;
  } else if (document.getElementById("crp").checked) {
    radiocheck = document.getElementById("crp").value;
  } else if (document.getElementById("cooking").checked) {
    radiocheck = document.getElementById("cooking").value;
  }
  return radiocheck;
}

function remove(){
let x=body.children
for (let index = 0; index < x.length; index++) {
  while(x[index]&&x[index].children[0].checked){
  body.removeChild(x[index])

  }
}

} 