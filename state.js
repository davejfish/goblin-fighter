import { getRandomItem } from './utils.js';

// set state to an empty object
const state = {};

state.battleGroup = [];
state.messages = [];
state.damage = [];
state.hp = [];

// initialize state, also used in test
export function initialize() {
    state.hp = [1, 2, 3, 4, 5];

    state.battleGroup = [{
        name: 'hero',
        hp: 20,
        defeated: false,
        enemy: false,
        enemiesDefeated: 0,
    },
    {
        name: 'biggie',
        hp: getRandomItem(state.hp),
        defeated: false,
        enemy: true,
        enemiesDefeated: 0,
    },
    {
        name: 'smalls',
        hp: getRandomItem(state.hp),
        defeated: false,
        enemy: true,
        enemiesDefeated: 0,
    },
    ];
    
    state.messages = ['attack an enemy'] ;
    
    state.damage = [0, 1, 1, 2, 2, 3];
}
// call initialize
initialize();
// export state as primary (default) export
export default state;

// export dispatch functions that modify state

export function updateBattleGroup(name) {
    const enemy = {
        name,
        hp: getRandomItem(state.hp),
        defeated: false,
        enemy: true,
        enemiesDefeated: 0,
    };
    state.battleGroup.push(enemy);
}

export function updateHP(combatant, damage) {
    const index = state.battleGroup.indexOf(combatant);
    const fighter = state.battleGroup[index];
    fighter.hp -= damage;
    if (fighter.hp <= 0) {
        fighter.hp = 0;
        fighter.defeated = true;
        state.messages.push(`${fighter.name} has been defeated`);
    }
}

export function removeFighter(combatant) {
    const index = state.battleGroup.indexOf(combatant);
    state.battleGroup.splice(index, 1);
}