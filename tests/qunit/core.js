module('core');

asyncTest('asyncTest', 1, function() {
    ok(true, 'ok');
    start();
});

test('test', function() {
    ok(true, 'ok');
});