

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurgerSVG = document.querySelector('.menu-burger');
const mobileMenuListas = document.querySelector('.mobile-menu');
const carIcon = document.querySelector('.navbar-shopping-cart');
const carIconListas = document.querySelector('#detail-product-car');
const flechaReturn = document.querySelector('.return-flecha');
const detailAdd = document.querySelector('#detail-product-add')
const mainContainer = document.querySelector('.main-container');
const contadorNav = document.querySelector('.contador');
const productDetailClose = document.querySelector('.product-detail-close');
const myOrderContent = document.querySelector('.container-shopping-cart');
const orderTotalId = document.querySelector('#total');
const btnWpp = document.querySelector("#btn-wpp");




function closeDetailProduct() {
   const detailAddClose = detailAdd.classList.contains('inactive');
   if (!detailAddClose) {
      detailAdd.classList.add('inactive');
   }
}


function flechaReturnDetail() {
   const carIconListasClose = carIconListas.classList.contains('inactive');
   if (!carIconListasClose) {
      carIconListas.classList.add('inactive');
   }
}
function toggleDesktopMenu() {
   const carIconListasClose = carIconListas.classList.contains('inactive');
   desktopMenu.classList.toggle('inactive');
   if (!carIconListasClose) {
      carIconListas.classList.add('inactive');
   }

}
function toggleMobileMenuBurger() {
   mobileMenuListas.classList.toggle('inactive');
}
function toggleCarIcon() {
   const iconDesktopMenu = desktopMenu.classList.contains('inactive');
   carIconListas.classList.toggle('inactive');
   if (!iconDesktopMenu) {
      desktopMenu.classList.add('inactive');
   }
}
function imgClick() {
   const detailAddContain = detailAdd.classList.contains('inactive');
   if (detailAddContain) {
      detailAdd.classList.remove('inactive');
   }
}
menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerSVG.addEventListener('click', toggleMobileMenuBurger);
carIcon.addEventListener('click', toggleCarIcon);
flechaReturn.addEventListener('click', flechaReturnDetail);
productDetailClose.addEventListener('click', closeDetailProduct);

const productList = [];
const carrito = [];


function generatePDF(suma) {
   var pdf = new jsPDF({
       orientation: 'p',
       unit: 'mm',
       format: 'a5',
       putOnlyUsedFonts:true
       });
   const nameCarrito = carrito.map((element)=>element.name);
   const priceCarrito = carrito.map((element)=>element.price);
   const cadenaName = nameCarrito.join('-');
   const priceCarritoCadena = priceCarrito.join('-');
   pdf.text("Lista de productos es: ", 20, 20);
   pdf.text(cadenaName, 20, 30);
   pdf.text("El costo de cada producto es: ", 20, 40);
   pdf.text(priceCarritoCadena, 20, 50);
   pdf.text(20, 70, 'total: ' + suma);
   pdf.save('Lista de productos.pdf');
}

btnWpp.addEventListener('click', function () {
   let sumaCarritoTotal = carrito.reduce((a, b) => a + b.price, 0);
   let valuebtnWpp = btnWpp.value;
   let relmsg = valuebtnWpp.replace(/ /g, "%20");
   generatePDF(sumaCarritoTotal)

   window.open('https://wa.me/51949360557?text=' + relmsg + `los cuales tiene un precio total de: $/. ${sumaCarritoTotal}.00`);

})


productList.push(
   {

      name: 'Pelota tricolor',
      price: 89.00,
      image: './imagenes/pelota3.jpeg',
      id: 1

   }
);
productList.push(
   {
      name: 'Guantes flex - naranja',
      price: 85.00,
      image: './imagenes/guante1.jpg',
      id: 2

   }
);
productList.push(
   {
      name: 'Pelota-naranja',
      price: 89.00,
      image: './imagenes/pelota1.jpeg',
      id: 3

   }
);
productList.push(
   {
      name: 'guante flex - azul',
      price: 95.00,
      image: './imagenes/guante3.jpg',
      id: 4

   }
);
productList.push(
   {
      name: 'guante flex-negro',
      price: 99.00,
      image: './imagenes/guantenuevo1.jpg',
      id: 5

   }
);
productList.push(
   {
      name: 'guante new-grix',
      price: 110.00,
      image: './imagenes/guantenuevo2.jpg',
      id: 6

   }
);
productList.push(
   {
      name: 'guante new-azul',
      price: 110.00,
      image: './imagenes/guantenuevo3.jpg',
      id: 7

   }
);
productList.push(
   {
      name: 'Guantes flex',
      price: 89.00,
      image: './imagenes/guante1.jpg',
      id: 8

   }
);
productList.push(
   {
      name: 'Pelota',
      price: 95.00,
      image: './imagenes/pelota3.jpeg',
      id: 9

   }
);
productList.push(
   {
      name: 'Guantes flex',
      price: 89.00,
      image: './imagenes/guante1.jpg',
      id: 10

   }
);
productList.push(
   {
      name: 'Guantes flex',
      price: 79.00,
      image: './imagenes/guante3.jpg',
      id: 11

   }
);
productList.push(
   {
      name: 'Pelota',
      price: 89.00,
      image: './imagenes/pelota3.jpeg',
      id: 12

   }
);
productList.push(
   {
      name: 'Guantes flex',
      price: 68.00,
      image: './imagenes/guante1.jpg',
      id: 13

   }
);
productList.push(
   {
      name: 'Pelota',
      price: 75.00,
      image: './imagenes/pelota3.jpeg',
      id: 14

   }
);
productList.push(
   {
      name: 'Guantes flex',
      price: 89.00,
      image: './imagenes/guante1.jpg',
      id: 15

   }
);
AddProduct(productList);




function AddProduct(arr) {
   arr.forEach((product) => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      const img = document.createElement('img');
      img.setAttribute('src', product.image);
      img.addEventListener('click', imgClick);
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
      const productInfoDiv = document.createElement('div');
      const productPrice = document.createElement('p');
      productPrice.textContent = 'S/. ' + product.price;
      const productName = document.createElement('p');
      productName.textContent = product.name;
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);
      const figure = document.createElement('figure');
      figure.classList.add('btn-add-car');
      figure.setAttribute('id', `agregar${product.id}`);
      const figureImg = document.createElement('img');
      figureImg.setAttribute('src', './imagenes/recursos/bt_add_to_cart.svg');
      figure.appendChild(figureImg);
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(figure);
      productCard.appendChild(img);
      productCard.appendChild(productInfo);
      mainContainer.appendChild(productCard);
      const idFigure = document.getElementById(`agregar${product.id}`);
      idFigure.addEventListener('click', () => {
         agregarCarrito(product.id);
         contadorNav.textContent = carrito.length;

      })
   })

}

const quitarCarrito = (objId) => {
   const item = carrito.find((product) =>
      product.id === objId);
   const indice = carrito.indexOf(item);
   createOrderProduct();
   carrito.splice(indice, 1)
   let valorTotal = carrito.reduce((a, b) => a + b.price, 0);
   orderTotalId.innerHTML = `S/. ${valorTotal}.00`;
   contadorNav.textContent = carrito.length;
   

}
const agregarCarrito = (objId) => {

   const item = productList.find((prod) =>
      prod.id === objId);
   carrito.push(item);
   
   createOrderProduct();
   let valorTotal = carrito.reduce((a, b) => a + b.price, 0);
   orderTotalId.innerHTML = `S/. ${valorTotal}.00`;

}

function createOrderProduct() {
   myOrderContent.innerHTML = "";
   carrito.forEach((prod) => {
      const div = document.createElement('div');
      div.classList.add('shopping-cart');
      div.innerHTML = `
     <figure>
        <img src = ${prod.image} ></img>
     </figure>
     <p> ${prod.name} </p>
     <p> Precio: S/. ${prod.price}.00</p>
     <img id ="bx-tachito ${prod.id}" src= "./imagenes/recursos/bxs-tachito.svg " alt="close">`;
      myOrderContent.appendChild(div);
      

      const idIcon = document.getElementById(`bx-tachito ${prod.id}`); 
      idIcon.addEventListener("click",()=>{
         quitarCarrito(prod.id)
      })
   })

}
