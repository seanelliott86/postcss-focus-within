var postcss = require('postcss');

var plugin = require('./');

function run(input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(result => {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
}


it('adds addtional rule with focus-within class', () => {
    return run('a:focus-within {}', 'a:focus-within {} a.focus-within {}');
});
