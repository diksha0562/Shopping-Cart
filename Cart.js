var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);

        document.getElementById("Shirt").innerHTML = "<h4>" + "Name: " + myObj.name[0] + "</h4>" + "<br>" + "<h3> Price:" + myObj.price[0] + "<br>" + "<button onclick=\"addToCart(0)\" >Add To Cart </button>";
        //
        //        document.getElementById("Tanktop").innerHTML = "<h4>" + "Name: " + myObj.name[1] + "</h4>" + "<br>" + "<h3> Price:" + myObj.price[1] + "<br>" + "<button onclick=\"addToCart(1)\" >Add To Cart </button>";
        //        
        //        document.getElementById("Trousers").innerHTML = "<h4>" + "Name: " + myObj.name[2] + "</h4>" + "<br>" + "<h3> Price:" + myObj.price[2] + "<br>" + "<button onclick=\"addToCart(2)\" >Add To Cart </button>";
        //
        //        document.getElementById("T Shirt").innerHTML = "<h4>" + "Name: " + myObj.name[3] + "</h4>" + "<br>" + "<h3> Price:" + myObj.price[3] + "<br>" + "<button onclick=\"addToCart(3)\" >Add To Cart </button>";
        //
        //        document.getElementById("Frock").innerHTML = "<h4>" + "Name: " + myObj.name[4] + "</h4>" + "<br>" + "<h3> Price:" + myObj.price[4] + "<br>" + "<button onclick=\"addToCart(4)\" >Add To Cart </button>";
        //        
        //        document.getElementById("Boys' T-shirt").innerHTML = "<h4>" + "Name: " + myObj.name[5] + "</h4>" + "<br>" + "<h3> Price:Rs." + myObj.price[5] + "<br>" + "<button onclick=\"addToCart(5)\" >Add To Cart </button>";


    }
};
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);

        //        document.getElementById("Shirt").innerHTML = "<h4>" + "Name: " + myObj.name[0] + "</h4>" + "<br>" + "<h3> Price:" + myObj.price[0] + "<br>" + "<button onclick=\"addToCart(0)\" >Add To Cart </button>";
        document.getElementById("Tanktop").innerHTML = "<h4>" + "Name: " + myObj.name[1] + "</h4>" + "<br>" + "<h3> Price:" + myObj.price[1] + "<br>" + "<button onclick=\"addToCart(1)\" >Add To Cart </button>";
        //        
        //        document.getElementById("Trousers").innerHTML = "<h4>" + "Name: " + myObj.name[2] + "</h4>" + "<br>" + "<h3> Price:" + myObj.price[2] + "<br>" + "<button onclick=\"addToCart(2)\" >Add To Cart </button>";
        //
        //        document.getElementById("T Shirt").innerHTML = "<h4>" + "Name: " + myObj.name[3] + "</h4>" + "<br>" + "<h3> Price:" + myObj.price[3] + "<br>" + "<button onclick=\"addToCart(3)\" >Add To Cart </button>";
        //
        //        document.getElementById("Frock").innerHTML = "<h4>" + "Name: " + myObj.name[4] + "</h4>" + "<br>" + "<h3> Price:" + myObj.price[4] + "<br>" + "<button onclick=\"addToCart(4)\" >Add To Cart </button>";
        //        
        //        document.getElementById("Boys' T-shirt").innerHTML = "<h4>" + "Name: " + myObj.name[5] + "</h4>" + "<br>" + "<h3> Price:Rs." + myObj.price[5] + "<br>" + "<button onclick=\"addToCart(5)\" >Add To Cart </button>";


    }


};
xmlhttp.open("GET", "https://raw.githubusercontent.com/SaloniTomar/Shopping-Cart/master/product.json", true);
xmlhttp.send();

function addToCart(index) {
    if (localStorage.cart === undefined) {
        localStorage.cart = index;
        alert(localStorage.cart.length);
    } else {
        localStorage.cart += "," + index;
        alert(localStorage.cart.length);
    }

}


function cartLoad() {
    var xmlhttp1 = new XMLHttpRequest();
    xmlhttp1.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var myObj2 = JSON.parse(this.responseText);
            alert(localStorage.cart);
            var display = "";
            var ShoppingCart = localStorage.cart.split(",");
            for (var k = 0; k < ShoppingCart.length; k++) {
                var t = parseInt(ShoppingCart.cart[k]);
                display += "<tr>" + "<td>" + myObj2.name[t] + "</td>" + "<td>" + myObj2.price[t] + "</td>" + "</tr>";
            }
            document.getElementById("cartTable").innerHTML = display;
        }
    };
    xmlhttp1.open("GET", "https://raw.githubusercontent.com/SaloniTomar/Shopping-Cart/master/product.json", true);
    xmlhttp.send();

}

function checkout() {
    var i;
    var result = document.getElementById("cartTable");
    var totalprice = 0;
    for (i = 0; i < ShoppingCart.length; i++) {
        totalprice += result.rows[i].cells[1];
    }
    alert(totalprice);
}