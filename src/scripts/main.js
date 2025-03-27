document.addEventListener('DOMContentLoaded', () => {
  const thumbnails = document.querySelectorAll('.scdetail__img-list .thumb');
  const mainImage = document.querySelector('.scdetail__img-main img');

  thumbnails.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const newSrc = thumb.querySelector('img').src;

      mainImage.src = newSrc;

      thumbnails.forEach((t) => t.classList.remove('--active'));

      thumb.classList.add('--active');
    });
  });
});

const loadProducts = () => {
  const products = [
    {
      name: 'Syltherine',
      description: 'Stylish cafe chair',
      priceReal: 100,
      priceOriginal: 150,
      discount: '-30%',
      image: './public/images/product-01.jpg',
      isNew: false,
    },
    {
      name: 'Leviosa',
      description: 'Stylish cafe chair',
      priceReal: 800,
      priceOriginal: null,
      discount: null,
      image: './public/images/product-02.jpg',
      isNew: false,
    },
    {
      name: 'Lolito',
      description: 'Luxury big sofa',
      priceReal: 600,
      priceOriginal: 750,
      discount: '-50%',
      image: './public/images/product-03.jpg',
      isNew: false,
    },
    {
      name: 'Respira',
      description: 'Stylish cafe chair',
      priceReal: 200,
      priceOriginal: null,
      discount: null,
      image: './public/images/product-04.jpg',
      isNew: true,
    },
    {
      name: 'Grifo',
      description: 'Night lamp',
      priceReal: 750,
      priceOriginal: null,
      discount: null,
      image: './public/images/product-05.jpg',
      isNew: false,
    },
    {
      name: 'Muggo',
      description: 'Small mug',
      priceReal: 300,
      priceOriginal: null,
      discount: null,
      image: './public/images/product-06.jpg',
      isNew: true,
    },
    {
      name: 'Pingky',
      description: 'Cute bed set',
      priceReal: 500,
      priceOriginal: 950,
      discount: '-50%',
      image: './public/images/product-07.jpg',
      isNew: false,
    },
    {
      name: 'Potty',
      description: 'Minimalist flower pot',
      priceReal: 500,
      priceOriginal: null,
      discount: null,
      image: './public/images/product-08.jpg',
      isNew: true,
    },
  ];

  const productList = document.getElementById('product-list');

  products.forEach((product) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    // Tạo tag Sale hoặc New
    if (product.discount) {
      productDiv.innerHTML += `<div class="tag --sale">${product.discount}</div>`;
    } else if (product.isNew) {
      productDiv.innerHTML += `<div class="tag">New</div>`;
    }

    // Thêm hình ảnh và thông tin sản phẩm
    productDiv.innerHTML += `
    <a class="thumb" href="./src/pages/shop-details.html">
      <img src="${product.image}" alt="${product.name}" />
    </a>
    <div class="textbox">
      <a href="./src/pages/shop-details.html">
        <h3 class="heading --h3">${product.name}</h3>
      </a>
      <p class="desc">${product.description}</p>
      <div class="price">
        <p class="price-real">${product.priceReal}$</p>
        ${
          product.priceOriginal
            ? `<del class="price-original">${product.priceOriginal}$</del>`
            : ''
        }
      </div>
    </div>
  `;

    productList.appendChild(productDiv);
  });
};
loadProducts();
