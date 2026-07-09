// Register the Service Worker on load
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/static/uv/uv.sw.js', {
            scope: __uv$config.prefix
        }).then(() => {
            console.log('Aurora Core: Ultraviolet Service Worker successfully registered.');
        }).catch((err) => {
            console.error('Aurora Core: SW registration failed: ', err);
        });
    });
}

function routeProxy(event) {
    event.preventDefault();
    const input = document.getElementById('url-input').value;
    
    let targetUrl = input.trim();
    if (!targetUrl.startsWith('http://') && !targetUrl.startsWith('https://')) {
        if (targetUrl.includes('.') && !targetUrl.includes(' ')) {
            targetUrl = 'https://' + targetUrl;
        } else {
            targetUrl = `https://google.com{encodeURIComponent(targetUrl)}`;
        }
    }
    
    // Launch through the encoded Ultraviolet system
    window.location.href = __uv$config.prefix + __uv$config.encodeUrl(targetUrl);
}

function launchGame(url) {
    window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
}
