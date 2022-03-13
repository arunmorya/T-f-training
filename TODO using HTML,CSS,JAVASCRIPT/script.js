
function generate(){
   
  var txt=document.getElementById("textBox").value;
  var listItems=document.createElement("li");
  listItems.className="liItem";
  t=document.createTextNode(txt);
  listItems.appendChild(t);
  listItems.setAttribute("onclick","strik();");


  // ADDING CROSS BUTTON
  var pan=document.createElement("button");
  var tpan=document.createTextNode("\u00D7")
  pan.className="delete";
  pan.appendChild(tpan);
  pan.setAttribute("onclick","remove();");
  listItems.appendChild(pan);


  it=document.getElementById("items");


  it.appendChild(listItems);
  document.getElementById("textBox").value="";
}





function remove()
{
    var close = document.getElementsByClassName("delete");
    var i;
    for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    // div.remove();
    // div.style.text-decoration = "line-through";
    // div.style.display = "line-through";
  }
}
}

function strik(){
    // var tmp=document.getElementsByClassName("liItem")
    // var i;
    // for (i = 0; i < close.length; i++) {
    //     close[i].onclick = function() {
    //       var div = this;
    //       div.style.display = "none";
    //       // div.remove();
    //       // div.style.text-decoration = "line-through";
    //       // div.style.display = "line-through";
    //     }
    //   }

    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }, false);

   

}

