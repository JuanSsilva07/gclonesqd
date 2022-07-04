document.addEventListener("DOMContentLoaded", function() {
  // Código que será executado quando o navegador carregar
});

async function fetchPhots() {
  const request = await fetch('https://us-central1-squid-apis.cloudfunctions.net/test-front-basic');
  return request.json();
}

const newTagPhoto = ( height, width, url) => {
  const divPhoto = document.createElement('div');
  const newImg = document.createElement('img');

  newImg.src = url;
  newImg.width = width;
  newImg.height = height;
  document.getElementById('feed').appendChild(divPhoto);
  divPhoto.appendChild(newImg);
};

const mapPhotos = (getPhotos) => {
  console.log(getPhotos)
  getPhotos.map(({imagens: { thumbnail: { height, width, url } } }) => {
    newTagPhoto( height, width, url);
  });

};

window.onload = async function () {
  const getPhotos = await fetchPhots();
  mapPhotos(getPhotos);
};

const btn = document.querySelector(".btn-fixed");

window.addEventListener("scroll",function () {
  if (window.scrollY == 0){
    btn.classList.remove("visible");
  } else {
    btn.classList.add("visible");
  }
})