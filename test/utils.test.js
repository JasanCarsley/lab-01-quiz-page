import { countsAsAYes } from '../counts-as-a-yes.js';

const test = QUnit.test;

test('countsAsAYes should take in a yes and return a true', (expect) => {
    
    const yes = 'yes';
    const expected = true;
    const actual = countsAsAYes(yes);
    expect.equal(expected, actual);
});

test('countsAsAYes should take in a no and return false.', (expect) => {

    const no = 'no';
    const expected = false;
    const actual = countsAsAYes(no);
    expect.equal(expected, actual);
});




