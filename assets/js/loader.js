ldcon = document.getElementById("loader-container");
setTimeout(function () {ldcon.style.opacity = "0.8";}, 1000);
setTimeout(function () {ldcon.style.opacity = "0.5";ldcon.style.height = "1000px"}, 1500);
setTimeout(function () {ldcon.style.opacity = "0.2";}, 2000);
setTimeout(function () {ldcon.style.opacity = "1"; ldcon.style.height = "0"}, 3000);