var proxySelect = document.getElementById("proxy-select");

if (proxySelect) {
    proxySelect.value = localStorage.getItem("proxy") || "uv";
    proxySelect.addEventListener("change", function () {
        localStorage.setItem("proxy", proxySelect.value);
    });
}