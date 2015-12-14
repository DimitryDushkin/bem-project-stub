var enbBemTechs = require('enb-bem-techs'),
    borschikTech = require('enb-borschik/techs/borschik');

module.exports = function (config) {
    var isProd = process.env.YENV === 'production';

    config.nodes('front/desktop.bundles/*', function (nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [require('enb/techs/file-provider'), { target: '?.bemjson.js' }],
            [enbBemTechs.files],
            [enbBemTechs.deps],
            [enbBemTechs.bemjsonToBemdecl],

            // browser.js
            [require('enb-js/techs/browser-js'), {
                target: '?.js',
                includeYM: true
            }],
            [require('enb/techs/file-merge'), {
                target: '?.pre.js',
                sources: ['?.bemhtml.js', '?.browser.js']
            }],
            // bemhtml
            [require('enb-bemxjst/techs/bemhtml'), {
                devMode: process.env.BEMHTML_ENV === 'development',
                sourceSuffixes: ['bemhtml', 'bemhtml.js']
            }],

            // borschik
            // [borschikTech, { sourceTarget: '?.css', destTarget: '?.min.css', tech: 'cleancss', freeze: true, minify: isProd }],
            // [borschikTech, { sourceTarget: '?.js', destTarget: '?.min.js', freeze: true, minify: isProd }],
            // [borschikTech, { sourceTarget: '?.bemhtml.js', destTarget: '?.min.bemhtml.js', freeze: true, minify: isProd }]
        ]);

        nodeConfig.addTargets([
            '?.css',
            // '?.node.js',
            '?.js',
            '?.bemhtml.js'
        ]);
    });

    config.nodes('front/*desktop.bundles/*', function (nodeConfig) {
        nodeConfig.addTechs([
            // essential
            [enbBemTechs.levels, {
                levels: [
                    { path: 'libs/bem-core/common.blocks', check: false },
                    { path: 'libs/bem-core/desktop.blocks', check: false },
                    { path: 'libs/bem-components/common.blocks', check: false },
                    { path: 'libs/bem-components/desktop.blocks', check: false },
                    { path: 'libs/bem-components/design/common.blocks', check: false },
                    { path: 'libs/bem-components/design/desktop.blocks', check: false },
                    'front/common.blocks',
                    'front/desktop.blocks'
                ]
            }],
            // css
            [require('enb-stylus/techs/stylus'), {
                target: '?.css',
                autoprefixer: {
                    browsers: ['ie >= 10', 'last 2 versions', 'opera 12.1', '> 2%']
                }
            }]
        ]);
    });
    // config.nodes('*touch-pad.bundles/*', function (nodeConfig) {
    //     nodeConfig.addTechs([
    //         // essential
    //         [enbBemTechs.levels, {
    //             levels: [
    //                 { path: 'libs/bem-core/common.blocks', check: false },
    //                 { path: 'libs/bem-core/touch.blocks', check: false },
    //                 'common.blocks',
    //                 'touch.blocks',
    //                 'touch-pad.blocks'
    //             ]
    //         }],
    //         // css
    //         [require('enb-stylus/techs/stylus'), {
    //             target: '?.css',
    //             autoprefixer: {
    //                 browsers: ['android 4', 'ios 5']
    //             }
    //         }]
    //     ]);
    // });
};


