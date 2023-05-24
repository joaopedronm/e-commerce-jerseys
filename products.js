let url_atual = window.location.href;

// Selecionar todos os elementos com a classe "single-product"
const products = document.querySelectorAll('.single-product');

// Adicionar um evento de clique a cada produto
products.forEach(product => {
  product.addEventListener('click', () => {
    // Extrair as informações do produto
    const title = product.querySelector('h5').textContent;
    const price = product.querySelector('h4').textContent;
    const image1Src = product.querySelector('#img1').getAttribute('src');
    const image2Src = product.querySelector('#img2').getAttribute('src');
    const image3Src = product.querySelector('#img3').getAttribute('src');

    // Redirecionar para a página do produto com as informações
    window.location.href = `single-product.html?title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}&image=${encodeURIComponent(image1Src)}&image2=${encodeURIComponent(image2Src)}&image3=${encodeURIComponent(image3Src)}`;
  });
});
