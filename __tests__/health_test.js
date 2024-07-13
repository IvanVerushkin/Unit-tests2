import healthLevel from '../src/js/health';

test('health > 50 should return "healthy"', () => {
    const character = { name: 'Маг', health: 90 };
    expect(healthLevel(character)).toEqual('healthy');
});

test('health <= 50 and health > 15 should return "wounded"', () => {
    const character = { name: 'Маг', health: 30 };
    expect(healthLevel(character)).toEqual('wounded');
});

test('health < 15 should return "critical"', () => {
    const character = { name: 'Маг', health: 8 };
    expect(healthLevel(character)).toEqual('critical');
});



test('name === "мечник" and health == 10 should return "мечник"', () => {
});

test('name === "маг" and health == 100 should return "маг"', () => {
});

test('name === "лучник" and health == 80 should return "лучник"', () => {
});