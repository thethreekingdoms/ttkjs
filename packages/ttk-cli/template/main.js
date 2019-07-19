function getBaseUrl() {
    var baseUrl = ''
    var scripts = document.querySelectorAll("script");
    for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].src && (
            scripts[i].src.indexOf('ttk-main.js') != -1 ||
            scripts[i].src.indexOf('ttk-main.min.js') != -1
        )) {
            baseUrl = scripts[i].src.substr(0, scripts[i].src.lastIndexOf('/') + 1)
        }
    }
    return baseUrl
}

var baseUrl = getBaseUrl()

function fix(target) {
    return baseUrl + target
}

require.config({
    baseUrl: "./",
    paths: {
        'react': fix('react.development'),
        'react-dom': fix('react-dom.development'),
        'prop-types': fix('prop-types'),
        'redux': fix('redux'),
        'react-redux': fix('react-redux'),
        'immutable': fix('immutable'),
        'ttk': fix('ttk-sdk'),
        <ext>
    },
    shim: {
    },
    map: {
        '*': {
            css: fix('css.js')
        }
    },
    waitSeconds: 0
})

require(['ttk'], function (ttk) {
    window.TTK = ttk
    window["main"] && window["main"](ttk)
    window['onTTKReady'] && window['onTTKReady'](ttk)
});
