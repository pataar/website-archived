$(function() {
	window.checkNvidia = () => {
		Notification.requestPermission();
		alert("Started");
		setInterval(async () => {
			let r = await fetch("https://in-and-ru-store-api.uk-e1.cloudhub.io/DR/products/nl_nl/EUR/5355773200,5355772100,5088903300,5365805400,5088904100");
			let json = await r.json();

			let { status } = json.products.product[1].inventoryStatus;

			if(status === "PRODUCT_INVENTORY_IN_STOCK"){
				new Notification("Shield is in stock");
			}
		}, 10000);
	};
});
