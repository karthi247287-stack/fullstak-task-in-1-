fetch("/products")
.then(res=>res.json())
.then(data=>{

    let output="";

    data.forEach(p=>{

        output += `
        <div class="card">
        <img src="${p.image}">
        <h2>${p.name}</h2>
        <h3>₹${p.price}</h3>
        <button onclick="addCart('${p.name}')">
        Add To Cart
        </button>
        </div>
        `;
    });

    document.getElementById(
        "products"
    ).innerHTML = output;
});

function addCart(name){

    fetch("/cart/add",{
        method:"POST",
        headers:{
            "Content-Type":
            "application/json"
        },
        body:JSON.stringify({name})
    });

    alert("Added to Cart");
}
