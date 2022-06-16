// set state to an empty object
const state = {};

state.battleGroup = [{
    name: 'hero',
    hp: 20,
    defeated: false,
    enemy: false,
},
{
    name: 'biggie',
    hp: 8,
    defeated: false,
    enemy: true,
},
{
    name: 'smalls',
    hp: 8,
    defeated: false,
    enemy: true,
},
];
state.messages = [
    'here is some text',
    'another line of text',
    'and one more',
];
state.damage = [0, 1, 1, 2, 2, 3];

// initialize state, also used in test
export function initialize() {
    // What is the initial shape of state?
    // For example:
    // state.game = null;
    // state.pastGames = [];
}
// call initialize
initialize();
// export state as primary (default) export
export default state;

// export dispatch functions that modify state