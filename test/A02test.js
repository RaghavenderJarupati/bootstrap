QUnit.test("Here's a test that should always pass", function (assert) {
    assert.ok(1 <= "3", "1<3 - the first agrument is 'truthy', so we pass!");
});

QUnit.test('Testing the  MYEMI function with three sets of inputs', function (assert) {
    assert.equal(App.MYEMI(10000, 12,12),1766.66666, "works with three positive integers");
    assert.equal(App.MYEMI(-3, -3, -2),  Error('enter positive values'));
    assert.equal(App.MYEMI(null, null,null),  Error('The given argument is not a number'));
    
});






