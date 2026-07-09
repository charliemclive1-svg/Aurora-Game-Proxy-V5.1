self.__uv$config = {
    prefix: '/static/uv/service/',
    bare: 'https://benwoodworth.com', // Example fallback public Bare server
    encodeUrl: function(url) {
        if (!url) return url;
        return encodeURIComponent(url.split('').map((char, i) => i % 2 ? String.fromCharCode(char.charCodeAt(0) ^ 2) : char).join(''));
    },
    decodeUrl: function(url) {
        if (!url) return url;
        let [path, search] = url.split('?');
        return decodeURIComponent(path).split('').map((char, i) => i % 2 ? String.fromCharCode(char.charCodeAt(0) ^ 2) : char).join('') + (search ? '?' + search : '');
    },
    handler: '/static/uv/uv.handler.js',
    bundle: '/static/uv/uv.bundle.js',
    config: '/static/uv/uv.config.js',
    sw: '/static/uv/uv.sw.js',
};
