// Obtém o botão "Adicionar ao Carrinho"
var addToCartButton = document.getElementById('add-to-cart-button');

// Adiciona um listener de evento de clique ao botão
addToCartButton.addEventListener('click', function(event) {
  event.preventDefault();

  // Obtém as informações do produto
  var productImage = document.querySelector('#img1').src;
  var productName = document.querySelector('.product-name').textContent;
  var productPrice = document.querySelector('.product-price').textContent;
  var productQuantity = document.querySelector('input[type="number"]').value;
  var productSubtotal = parseFloat(productPrice.replace('R$', '')) * parseInt(productQuantity);

  // Cria um objeto com os dados do produto
  var productData = {
    image: productImage,
    name: productName,
    price: productPrice,
    quantity: productQuantity,
    subtotal: productSubtotal.toFixed(2)
  };

  // Verifica se há produtos no carrinho no Armazenamento Local
  var cartProducts = localStorage.getItem('cartProducts');
  if (cartProducts) {
    // Se já houver produtos no carrinho, converte a string JSON em um array
    cartProducts = JSON.parse(cartProducts);
  } else {
    // Se não houver produtos no carrinho, cria um novo array vazio
    cartProducts = [];
  }

  // Adiciona o novo produto à lista de produtos
  cartProducts.push(productData);

  // Armazena a lista de produtos no Armazenamento Local
  localStorage.setItem('cartProducts', JSON.stringify(cartProducts));

  // Redireciona para a página do carrinho
  window.location.href = 'cart.html';
});

//   var cartTableBody = document.querySelector('#cart tbody');
//   var newRow = document.createElement('tr');
//   newRow.innerHTML = `
//     <td><a href=""><i class="far fa-times-circle"></i></a></td>
//     <td><img src="${productImage}" alt=""></td>
//     <td>${productName}</td>
//     <td>${productPrice}</td>
//     <td><input type="number" value="${productQuantity}"></td>
//     <td>R$${productSubtotal.toFixed(2)}</td>
//   `;

//   cartTableBody.appendChild(newRow);
// });