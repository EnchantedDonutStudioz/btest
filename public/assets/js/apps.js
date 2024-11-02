fetch('/assets/json/apps.json')
    .then(response => response.json())
    .then(apps => {
        const appsContainer = document.querySelector('.apps');

        apps.forEach(app => {
            const appElement = document.createElement('div');
            appElement.className = 'app';

            appElement.innerHTML = `
        <img src="${app.image}" alt="${app.name}">
        <h3>${app.name}</h3>
      `;

            appElement.addEventListener('click', async () => {
                var ute = app.url;
                if (localStorage.getItem("proxy") == "uv") {
                    ute = __uv$config.prefix + __uv$config.encodeUrl(ute);
                }
                else if (localStorage.getItem("proxy") == "rammerhead") {
                    rhEncode();
                }
                localStorage.setItem('url', ute);
                window.location.href = '/browser.html';
            });

            appsContainer.appendChild(appElement);
        });
    });

async function rhEncode() {
    ute = await RammerheadEncode(ute);
}