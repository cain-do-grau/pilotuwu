menuListArray = ["Pizza Vegetariana","Pizza de Catupiry","Pizza de Gelo","Pizza Portuguesa","Pizza Quatro Queijos","Pizza de um porco inteiro","Pizza de Sallllllo","Pizza de maçã",];

function getMenu(){
var htmldata;

}

function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+imgtags+ menuListArray[i]+'<br>';
}
document.getElementById("displayAddedMenu").innerHTML = htmldata

}
function getMenu(){
    var htmldata;

}

function addTop(){

}