
getImages();
async function getImages() {
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

function showImages(result) {
  result.forEach(function (obj, i) {

    let divContImg = document.createElement("div");

    divContImg.setAttribute("id", "contImgPreview"+obj.id+"");

    let img = document.createElement("img");
    const urlstring = '' + obj.url;
    img.src = obj.url;
    
    img.onclick = function () {
      showImg(img);
    }
    img.setAttribute("urlAttr", urlstring);   

    document.getElementById("contSliderImg").appendChild(divContImg);   
    document.getElementById("contImgPreview"+obj.id+"").appendChild(img); 
    if(i == 0){
      showImg(img);
    }

  });
}

function showImg(element) {
  const imgURL = element.getAttribute("urlAttr"); 
  let img = document.createElement("img");       
  img.src = imgURL;
  document.getElementById("previewImg").innerHTML = '';                                
  document.getElementById("previewImg").appendChild(img);      
}
