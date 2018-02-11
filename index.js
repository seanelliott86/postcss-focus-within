const postcss = require('postcss');

module.exports = postcss.plugin('postcss-focus-within', function () {

    return function (root) {

        root.walkRules(function (rule) {
            if (rule.selector.indexOf(':focus-within') !== -1 ) {
                let newRule = rule.toString();
                newRule = newRule.replace(/:focus-within/g, '.focus-within');
                root.insertAfter(rule, ' ' + newRule);
            }
        });

    };
});
