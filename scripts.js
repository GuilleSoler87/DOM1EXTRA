// Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.


// // const links = document.getElementsByTagName("a");

// function onSubmit(event) {
//   event.preventDefault();
// }

// for (let i = 0; i < links.length; i++) {
//   links[i].addEventListener('click', onSubmit);
// }


// // Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:

// // 2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.

const images = document.getElementsByTagName("img")

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function () {
    const randomNum = Math.floor(Math.random() * 4) + 1;
    const newSrc = `assets/magic-${randomNum}.gif`;
    images[i].setAttribute("src", newSrc);
  }

  );
}


// // // 2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

const changeColors = document.getElementsByTagName("p");

for (let i = 0; i < changeColors.length; i++) {
  changeColors[i].addEventListener('click', function () {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    changeColors[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    changeColors[i].style.color = `rgb(${256 - r}, ${256 - g}, ${256 - b})`;
  });
}



// // // 2.3 Bloques de article o section: Cambia el color de fondo.

const article = document.getElementsByTagName("article")
for (let i = 0; i < article.length; i++) {
  article[i].addEventListener('click', function () {

    article[i].style.backgroundColor = "#f9eac3"
  });
}


// // Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.

// // 3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.

const abraca = document.getElementsByTagName("img");
for (let i = 0; i < abraca.length; i++) {
  let oldsrc 
  abraca[i].addEventListener("mouseover", function () {
    oldsrc = abraca[i].src.substring(34,abraca[i].src.length)
    abraca[i].src = "assets/abracadabra.gif";
  });
  // (CÓMO VOLVER A LA IMAGEN DE ORIGEN????????)
  abraca[i].addEventListener("mouseout", function () {
    abraca[i].src = "index_files/"+oldsrc;
  });
}


// // 3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

const changeColorAl = document.getElementsByTagName("p");
for (let i = 0; i < changeColorAl.length; i++) {
  changeColorAl[i].addEventListener("mouseover", function () {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    changeColorAl[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    changeColorAl[i].style.color = `rgb(${256 - r}, ${256 - g}, ${256 - b})`;
  });
 
  changeColorAl[i].addEventListener("mouseout", function () {
    changeColorAl[i].style.backgroundColor = "white";
    changeColorAl[i].style.color = "black";
  });
}



// // 3.3 Bloques de article o section: Color de fondo distinto al de párrafo.

const articleCol = document.getElementsByTagName("article")
for (let i = 0; i < articleCol.length; i++) {
  articleCol[i].addEventListener("mouseover", function () {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    changeColors[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    articleCol[i].style.backgroundColor = `rgb(${256 - r}, ${256 - g}, ${256 - b})`;
  });
 
  articleCol[i].addEventListener("mouseout", function () {
    articleCol[i].style.backgroundColor = "white";
    articleCol[i].style.color = "black";
  });
}

// // NO HAGO EL PREMIUM PORQUE YA ME VA A EXPLOTAR LA CABEZA :_(