document.getElementById("Glist").innerHTML = '';
var x = document.getElementById("Submit");
x.addEventListener('click', function() {
    console.log("clicked");
    var y=document.getElementById("input").value;
    console.log(y);
    var Glist=document.getElementById("Glist");
    
    
    var ustring=`<li class="glist" id="Glist">${y}</li>`;
    Glist.innerHTML+=ustring;
    document.getElementById("input").value='';


});