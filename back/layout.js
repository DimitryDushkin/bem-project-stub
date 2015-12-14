module.exports = function(content){
    return {
        block: 'page',
        title: 'Hello, World!',
        styles: [
            { elem: 'css', url: '/desktop.bundles/index/index.css' }
        ],
        scripts: [
            { elem: 'js', url: '/desktop.bundles/index/index.js' }
        ],
        content: [
            { block: 'header' },
            content
        ]
    };
};
