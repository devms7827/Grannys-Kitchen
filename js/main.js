// This is Granny's Kitchen Project Main JavaScript 
/* 	Documentation: ================================================================================
	#Project-Name:	Granny's Kitchen;
	#Created-By:	Manas Soni;
	#Date-Created:	04-Sept-2019;
	#Last-Edited:	07-Sept-2019;
*/

//JS function to bring the cart and apply the style when the user click the cart button

document.getElementById("cart-info").addEventListener("click", function() {
  const cart = document.getElementById("cart");
  cart.classList.toggle("show-cart");
  console.log(cart);
});


// JS function to identify extra space is coming from which div and to display that div in console

var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);