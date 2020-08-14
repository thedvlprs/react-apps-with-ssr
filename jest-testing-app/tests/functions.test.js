functions = require('../functions');

/* test('Test Add Function', () => {
    expect(functions.add(2, 3)).toBe(4);
}); */

test('toBe Demo', () => {
    expect(functions.add(2, 3)).toBe(5);
});

test('toEqual Demo', () => {
    var data = { name: 'John' };
    data['country'] = 'US';
    expect(data).toEqual({
        name: 'John',
        country: 'US',
    });
});

test('truth of null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});
test('truth of zero', () => {
    const n = 0;
    expect(n).not.toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

test('comparison', () => {
    const value = 4 + 0.2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    expect(value).toBeCloseTo(4.2);
});

test('String Matcher', () => {
    expect('Sophie is a Developer').toMatch(/Sophie/);
});

const countries = ['Russia', 'United States', 'Japan', 'China', 'Canada'];

test('Matcher for Iterables', () => {
    expect(countries).toContain('United States');
    expect(new Set(countries)).toContain('Russia');
});
