let products = [];

function addProductToList() {
    let productAdd = document.getElementById("productAdd").value;
    products.push(productAdd);
    let count = products.length;
    document.getElementById("productCount").innerText = `${count} products`
    displayProduct()
}

function displayProduct() {
    document.getElementById("result").innerHTML = "";
    for (let i = 0; i < products.length; i++) {
        document.getElementById("result").innerHTML += `
            <tr>
                  <td>${products[i]}</td>
                  <td style="text-align: center;"><button type="button" class="btn edit" onclick="editProduct(${i})"">Edit</button></td>
                  <td style="text-align: center;"><button type="button" class="btn delete"  onclick="deleteProduct(${i})">Delete</button></td>
            </tr>
            `
    }

}

function editProduct(index) {
    let productReplace = prompt("Dien ten san pham thay the");
    products.splice(index, 1, productReplace);
    displayProduct();
}

function deleteProduct(index) {
    products.splice(index, 1);
    displayProduct()
}