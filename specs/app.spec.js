// Ceci est juste une simple fonction pour l'exemple
function sum(a, b) {
    return a + b;
}

// Le test lui-même
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
  