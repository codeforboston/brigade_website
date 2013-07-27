'use strict';

navigator.id.watch({
	onlogin: function(assertion) {
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "/persona/verify", true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.addEventListener("loadend", function(e) {
			var data = JSON.parse(this.responseText);
			if (data && data.status === "okay") {
				document.getElementById('login').classList.add('hidden');
				document.getElementById('logout').classList.remove('hidden');
				console.log("You have been logged in as: " + data.email);
			}
		}, false);

		xhr.send(JSON.stringify({
			assertion: assertion
		}));
	},
	onlogout: function() {
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "/persona/logout", true);
		xhr.addEventListener("loadend", function(e) {
			document.getElementById('logout').classList.add('hidden');
			document.getElementById('login').classList.remove('hidden');
			console.log("You have been logged out");
		});
		xhr.send('POST,PLS');
	}
});

document.addEventListener('DOMContentLoaded', function() {
	var login_element = document.querySelector("#login");
	login_element.addEventListener("click", function(event) {
		event.preventDefault();
		navigator.id.request();
	}, false);

	var logout_element = document.querySelector("#logout");
	logout_element.addEventListener("click", function(event) {
		event.preventDefault();
		navigator.id.logout();
	}, false);
}, false);
