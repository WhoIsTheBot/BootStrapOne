let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function loadProducts() {
  let list = document.getElementById('produc-list');
  let productElements = '';

  arr.forEach(() => {
    let div = `
               <div class="card" style="width: 260px;">
            <img class="card-img-top" src="./assets/images/products/course_1.jpg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">Yoga Course One</h5>
                <p class="card-text">This course was created for you to understand yourself and your environment. </p>
                <a href="#" class="btn btn-primary">Go start</a>
            </div>
        </div>`;
    productElements += div;
  });
  list.innerHTML = productElements;
}

loadProducts();
