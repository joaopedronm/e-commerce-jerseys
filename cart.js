// Obtém o elemento da tabela de produtos
var cartTableBody = document.querySelector('#cart tbody');

// Verifica se há produtos no carrinho no Armazenamento Local
var cartProducts = localStorage.getItem('cartProducts');
if (cartProducts) {
  // Se houver produtos no carrinho, converte a string JSON em um array
  cartProducts = JSON.parse(cartProducts);

  // Percorre a lista de produtos e cria as linhas da tabela
  cartProducts.forEach(function (product, index) {
    var row = document.createElement('tr');

    // Cria as células da linha com os dados do produto
    var removeCell = document.createElement('td');
    var removeLink = document.createElement('a');
    removeLink.href = '#';
    removeLink.innerHTML = '<i class="far fa-times-circle"></i>';
    // Adiciona um atributo de data com o índice do produto para identificação posterior
    removeLink.setAttribute('data-product-index', index);
    removeCell.appendChild(removeLink);
    row.appendChild(removeCell);

    var imageCell = document.createElement('td');
    var image = document.createElement('img');
    image.src = product.image;
    image.alt = '';
    imageCell.appendChild(image);
    row.appendChild(imageCell);

    var nameCell = document.createElement('td');
    nameCell.textContent = product.name;
    row.appendChild(nameCell);

    var priceCell = document.createElement('td');
    priceCell.textContent = product.price;
    row.appendChild(priceCell);

    var quantityCell = document.createElement('td');
    var quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.min = 0
    quantityInput.value = product.quantity;
    quantityCell.appendChild(quantityInput);
    row.appendChild(quantityCell);

    var subtotalCell = document.createElement('td');
    subtotalCell.textContent = 'R$' + product.subtotal;
    row.appendChild(subtotalCell);

    // Adiciona a linha à tabela
    cartTableBody.appendChild(row);

    // Atualiza o subtotal quando a quantidade for alterada
    quantityInput.addEventListener('input', function () {
      var newQuantity = parseInt(this.value);
      var price = parseFloat(product.price.replace('R$', '').replace(',', '.'));
      var newSubtotal = newQuantity * price;

      // Atualiza o objeto do produto
      product.quantity = newQuantity;
      product.subtotal = 'R$' + newSubtotal.toFixed(2);

      // Atualiza a célula do subtotal
      subtotalCell.textContent = product.subtotal;

      // Atualiza a lista de produtos no Armazenamento Local
      localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    });

    // Adiciona um listener de evento de clique à célula de remover
    removeLink.addEventListener('click', function (event) {
      event.preventDefault();

      // Obtém o índice do produto a ser removido a partir do atributo de data
      var productIndex = parseInt(this.getAttribute('data-product-index'));

      // Remove o produto da lista de produtos
      cartProducts.splice(productIndex, 1);

      // Atualiza a lista de produtos no Armazenamento Local
      localStorage.setItem('cartProducts', JSON.stringify(cartProducts));

      // Remove a linha da tabela
      cartTableBody.removeChild(row);
    });
  });
}


// Obtém o elemento da tabela de produtos
// var cartTableBody = document.querySelector('#cart tbody');

// // Verifica se há produtos no carrinho no Armazenamento Local
// var cartProducts = localStorage.getItem('cartProducts');
// if (cartProducts) {
//   // Se houver produtos no carrinho, converte a string JSON em um array
//   cartProducts = JSON.parse(cartProducts);

//   // Percorre a lista de produtos e cria as linhas da tabela
//   cartProducts.forEach(function(product, index) {
//     var row = document.createElement('tr');

//     // Cria as células da linha com os dados do produto
//     var removeCell = document.createElement('td');
//     var removeLink = document.createElement('a');
//     removeLink.href = '#';
//     removeLink.innerHTML = '<i class="far fa-times-circle"></i>';
//     // Adiciona um atributo de data com o índice do produto para identificação posterior
//     removeLink.setAttribute('data-product-index', index);
//     removeCell.appendChild(removeLink);
//     row.appendChild(removeCell);

//     var imageCell = document.createElement('td');
//     var image = document.createElement('img');
//     image.src = product.image;
//     image.alt = '';
//     imageCell.appendChild(image);
//     row.appendChild(imageCell);

//     var nameCell = document.createElement('td');
//     nameCell.textContent = product.name;
//     row.appendChild(nameCell);

//     var priceCell = document.createElement('td');
//     priceCell.textContent = product.price;
//     row.appendChild(priceCell);

//     var quantityCell = document.createElement('td');
//     var quantityInput = document.createElement('input');
//     quantityInput.type = 'number';
//     quantityInput.value = product.quantity;
//     quantityCell.appendChild(quantityInput);
//     row.appendChild(quantityCell);

//     var subtotalCell = document.createElement('td');
//     // subtotalCell.textContent = 'R$' + product.subtotal;
//     subtotalCell.innerHTML = quantityInput.value * product.subtotal;
//     row.appendChild(subtotalCell);

//     // Adiciona a linha à tabela
//     cartTableBody.appendChild(row);

//     // Adiciona um listener de evento de clique à célula de remover
//     removeLink.addEventListener('click', function(event) {
//       event.preventDefault();

//       // Obtém o índice do produto a ser removido a partir do atributo de data
//       var productIndex = parseInt(this.getAttribute('data-product-index'));

//       // Remove o produto da lista de produtos
//       cartProducts.splice(productIndex, 1);

//       // Atualiza a lista de produtos no Armazenamento Local
//       localStorage.setItem('cartProducts', JSON.stringify(cartProducts));

//       // Remove a linha da tabela
//       cartTableBody.removeChild(row);
//     });
//   });
// }



// document.addEventListener('DOMContentLoaded', function() {
//     // Verifica se existe um produto armazenado no Armazenamento Local
//     if (localStorage.getItem('cartProduct')) {
//       // Obtém os dados do produto do Armazenamento Local
//       var productData = JSON.parse(localStorage.getItem('cartProduct'));
  
//       // Cria uma nova linha na tabela do carrinho
//       var cartTableBody = document.querySelector('#cart tbody');
//       var newRow = document.createElement('tr');
//       newRow.innerHTML = `
//         <td><a href=""><i class="far fa-times-circle"></i></a></td>
//         <td><img src="${productData.image}" alt=""></td>
//         <td>${productData.name}</td>
//         <td>${productData.price}</td>
//         <td><input type="number" value="${productData.quantity}"></td>
//         <td>R$${productData.subtotal}</td>
//       `;
  
//       // Adiciona a nova linha ao tbody da tabela do carrinho
//       cartTableBody.appendChild(newRow);
  
//       // Remove os dados do produto do Armazenamento Local
//     //   localStorage.removeItem('cartProduct');
//     }
//   });