module.exports = function(content){
    return {
        block: 'page',
        title: 'Hello, World!',
        styles: [
            { elem: 'css', url: 'index.min.css' }
        ],
        scripts: [
            { elem: 'js', url: 'index.min.js' }
        ],
        content: [
            { block: 'header' },
            content
        ]
    };
};
