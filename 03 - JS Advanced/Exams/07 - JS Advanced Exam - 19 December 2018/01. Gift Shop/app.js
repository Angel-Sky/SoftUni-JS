function solution() {
	const toyTipeInp = document.querySelector("#toyType");
	const toyPriceInp = document.querySelector("#toyPrice");
	const toyDescriptionInp = document.querySelector("#toyDescription");

	const giftsSection = document.querySelector("#christmasGiftShop");
	
	document.querySelector("#fields > button").addEventListener("click", addGifts);

	function addGifts() {
		const toyTip = toyTipeInp.value.trim(), toyPrice = Number(toyPriceInp.value.trim()), toyDescription = toyDescriptionInp.value.trim();

		if (toyTip !== "" && !isNaN(toyPrice) && toyDescription.length <= 50) {
			const buyBtn = genEl("button", `Buy it for $${toyPrice.toFixed(2)}`)
			const gift = genEl("div", [
				genEl("img", "", {src: "gift.png"}),
				genEl("h2", toyTip),
				genEl("p", toyDescription),
				buyBtn
			], {className: "gift"})

			giftsSection.appendChild(gift);
			toyPriceInp.value = '', toyTipeInp.value = '', toyDescriptionInp.value = '';

			buyBtn.addEventListener("click", () => {
				gift.remove()
			})
		}
	}

	function genEl(tag, content, attributes){
		const element = document.createElement(tag);
		if (attributes) {
			Object.assign(element, attributes);
		}
		if (Array.isArray(content)) {
			content.forEach(appendEl)
		} else {
			appendEl(content);
		}
		function appendEl(node) {
			if (typeof node == 'string' || typeof node == "number") {
				node = document.createTextNode(node);
			}
			element.appendChild(node);
		}
		return element;
	}
}