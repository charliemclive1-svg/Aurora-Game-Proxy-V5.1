// Bare-Mux / UV routing
function routeProxy(event) {
    event.preventDefault();
    const input = document.getElementById('url-input').value;
    
    // Fallback URL if they just type a word, otherwise encode through UV
    let proxyUrl = input.startsWith('http') ? input : `https://google.com{encodeURIComponent(input)}`;
    
    // Redirect through UV path defined in your Ultraviolet Config
    window.location.href = __uv$config.prefix + __uv$config.encodeUrl(proxyUrl);
}

function launchGame(url) {
    window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
}
