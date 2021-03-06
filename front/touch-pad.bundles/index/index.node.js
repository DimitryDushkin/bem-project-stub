function dropRequireCache(requireFunc, filename) {
    var module = requireFunc.cache[filename];
    if (module) {
        if (module.parent) {
            if (module.parent.children) {
                var moduleIndex = module.parent.children.indexOf(module);
                if (moduleIndex !== -1) {
                    module.parent.children.splice(moduleIndex, 1);
                }
            }
            delete module.parent;
        }
        delete module.children;
        delete requireFunc.cache[filename];
    }
};
global.modules = require("ym");
dropRequireCache(require, require.resolve("../../libs/bem-core/common.blocks/i-bem/i-bem.vanilla.js"));
require("../../libs/bem-core/common.blocks/i-bem/i-bem.vanilla.js");
dropRequireCache(require, require.resolve("../../libs/bem-core/common.blocks/i-bem/__internal/i-bem__internal.vanilla.js"));
require("../../libs/bem-core/common.blocks/i-bem/__internal/i-bem__internal.vanilla.js");
dropRequireCache(require, require.resolve("../../libs/bem-core/common.blocks/inherit/inherit.vanilla.js"));
require("../../libs/bem-core/common.blocks/inherit/inherit.vanilla.js");
dropRequireCache(require, require.resolve("../../libs/bem-core/common.blocks/identify/identify.vanilla.js"));
require("../../libs/bem-core/common.blocks/identify/identify.vanilla.js");
dropRequireCache(require, require.resolve("../../libs/bem-core/common.blocks/next-tick/next-tick.vanilla.js"));
require("../../libs/bem-core/common.blocks/next-tick/next-tick.vanilla.js");
dropRequireCache(require, require.resolve("../../libs/bem-core/common.blocks/objects/objects.vanilla.js"));
require("../../libs/bem-core/common.blocks/objects/objects.vanilla.js");
dropRequireCache(require, require.resolve("../../libs/bem-core/common.blocks/functions/functions.vanilla.js"));
require("../../libs/bem-core/common.blocks/functions/functions.vanilla.js");
dropRequireCache(require, require.resolve("../../libs/bem-core/common.blocks/events/events.vanilla.js"));
require("../../libs/bem-core/common.blocks/events/events.vanilla.js");