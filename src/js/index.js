
getImages();
async function getImages(){
  let response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10', {
      method: 'GET',
      headers: {
       'x-api-key': '78548d1d-d031-4322-95c7-877bd83d7a10'
      }
    });
    
    let result = await response.json();
    console.log(JSON.stringify(result));
    showImages(result);
}

// funzione che mi mostra tutte le img 
function showImages(result){
result.forEach(function(obj) {

  let img = document.createElement("img");  //creo img per ogni iterazione
  const urlstring = ''+obj.url;             //creo una variabile e ci assegno l'url dell'immagine iterata
  img.src = obj.url;                           //setto l'src dell'img creata con url 
 // img.setAttribute("onclick", "showImg(this)"); //setto l'onclick all'img questa è giusta
 img.onclick = function() {
  showImg(img);
}
  img.setAttribute("urlAttr", urlstring);       //setto l'url dentro un attributo "urlAttr" così me lo riprendo al click dell'immaginina
  document.getElementById("contImg").appendChild(img); //appendo l'img creata nel contenitore principale con id contImg
});
}

//Funzione che parte quando clicco una delle immaginine
function showImg(element){
const imgURL = element.getAttribute("urlAttr"); // mi prendo l'url dall'attributo 
let img = document.createElement("img");        // creo un img 
img.src =  imgURL;                               // assegno all'immagine creata l'src con l'url che stava nell'attributo urlAttr
document.getElementById("viewImageFull").appendChild(img);    //appendo l'img creata nel contenitore viewImageFull (cioè il contenitore che sovrasterà tutte le altre immaginine)  

let div = document.createElement('div');  //  creo il div che sarà il contenitore del tasto chiudi 
div.textContent = 'X';                    //  scrivo la "X" nel div creato
//div.setAttribute("onclick", "closeViewImageFull()");  //setto l'onclick al div   qui mi ha detto di fare questa modifica ed io lho fatta ma no se bene  
div.onclick = function() {
  closeViewImageFull();
} 
div.setAttribute("id", "closebtn");       //setto l'id al div 
document.getElementById("viewImageFull").appendChild(div); //appendo il div creato nel contenitore viewImageFull (quello grande)

document.getElementById("viewImageFull").style.display = "block"; //siccome è impostato nel css a "display none" dall'inizio per far vedere prima le immaginine, con questa istruzione lo faccio vedere
document.getElementById("closebtn").style.display = "block"; //siccome è impostato nel css a "display none" dall'inizio per far vedere prima le immaginine, con questa istruzione lo faccio vedere
document.getElementById("contImg").style.display = "none"; // nascondo il contenitore delle immaginine 
}

// funzione che parte quando clicco la X per chiudere la foto grannde
function closeViewImageFull(){
document.getElementById("viewImageFull").style.display = "none";  // nascondo il contenitore Grande con la foto dentro
document.getElementById("closebtn").style.display = "none";       // nascondo il div del pulsante con la foto dentro
document.getElementById("contImg").style.display = "block";     // mostro il div delle immaginine
document.getElementById("viewImageFull").innerHTML = '';        // svuoto il div dove avevo caricato la foto grande e il pulsante close
}