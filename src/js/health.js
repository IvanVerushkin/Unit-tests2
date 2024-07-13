export default function healthLevel(character) {
    if (character.health > 50) {
        return 'healthy'
    } if (character.health <= 50 && character.health > 15) {
        return 'wounded'
    }
    return 'critical';
}

let fighters = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
];

fighters.sort((a, b) => a.health < b.health ? 1 : -1);

export {fighters};