window.addEventListener("DOMContentLoaded", function () {
	let wallets = document.querySelectorAll(".wallet"),
		moneyList = document.querySelector(".method__e-money"),
		openPay = document.querySelector(".open-pay"),
		pay = document.querySelector(".payment__left");


	moneyList.addEventListener("click", function (e) {
		for (let i = 0; i < wallets.length; i++) {
			if (e.target === wallets[i].querySelector(".wallet__logo")) {
				removeActiveWallet();
				wallets[i].classList.add("wallet-active");
			}
		}
	});

	function removeActiveWallet() {
		wallets.forEach((wallet) => {
			wallet.classList.remove("wallet-active");
		})
	}

	openPay.addEventListener("click", function () {
		if (pay.classList.contains("open")){
			pay.classList.remove("open");
			pay.style.maxHeight = "0";
		} else{
			pay.classList.add("open");
			pay.style.maxHeight = pay.scrollHeight + "px";
			console.log(pay.scrollHeight);
		}
	})
});