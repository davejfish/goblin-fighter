import state, {
    initialize,
    removeFighter,
    updateBattleGroup,
    updateHP,
    restoreHP,
    getEXP,
} from '../state.js';

// make sure state is at known starting point
QUnit.module('state', { beforeEach: initialize });

const test = QUnit.test;

test('adding member to battleGroup', (expect) => {
    expect.equal(state.battleGroup.length, 3);
    updateBattleGroup('gobinator');
    expect.equal(state.battleGroup.length, 4);
});

test('updating hp and defeated status', (expect) => {
    const combatant = state.battleGroup[0];
    
    const expected = {
        name: 'hero',
        hp: 18,
        defeated: false,
        enemy: false,
        enemiesDefeated: 0,
        level: 1,
        exp: 0,
    };
    updateHP(combatant, 2);
    expect.deepEqual(combatant, expected);

    updateHP(combatant, 9999);
    expect.equal(combatant.hp, 0);
    expect.equal(combatant.defeated, true);
});

test('testing removing fighter from battleGroup', (expect) => {
    const combatant = state.battleGroup[1];

    const expected = 2;
    removeFighter(combatant);
    const actual = state.battleGroup.length;

    expect.equal(actual, expected);
});

test('recovering hp', (expect) => {
    state.battleGroup[0].enemiesDefeated = 3;
    state.battleGroup[0].hp = 15;

    let actual = state.battleGroup[0];
    let expected = {
        name: 'hero',
        hp: 15,
        defeated: false,
        enemy: false,
        enemiesDefeated: 4,
        level: 1,
        exp: 0,
    };
    restoreHP(state.battleGroup[0]);
    expect.deepEqual(actual, expected);

    state.battleGroup[0].enemiesDefeated = 4;
    restoreHP(state.battleGroup[0]);
    actual = state.battleGroup[0];
    expected = {
        name: 'hero',
        hp: 20,
        defeated: false,
        enemy: false,
        enemiesDefeated: 5,
        level: 1,
        exp: 0,
    };
    expect.deepEqual(actual, expected);
    expect.deepEqual(state.messages, ['attack an enemy', `${state.battleGroup[0].name} recovered 5 hp!`]);
    
    state.battleGroup[0].hp = 18;
    state.battleGroup[0].enemiesDefeated = 4;
    restoreHP(state.battleGroup[0]);
    actual = state.battleGroup[0];
    expected = {
        name: 'hero',
        hp: 20,
        defeated: false,
        enemy: false,
        enemiesDefeated: 5,
        level: 1,
        exp: 0,
    };
    expect.deepEqual(actual, expected);
});

test('increasing exp and level state', (expect) => {
    getEXP(state.battleGroup[0]);
    let actual = state.battleGroup[0];
    let expected = {
        name: 'hero',
        hp: 20,
        defeated: false,
        enemy: false,
        enemiesDefeated: 0,
        level: 1,
        exp: 1,
    };
    expect.deepEqual(actual, expected);

    state.battleGroup[0].exp = 9;
    getEXP(state.battleGroup[0]);
    actual = state.battleGroup[0];
    expected = {
        name: 'hero',
        hp: 20,
        defeated: false,
        enemy: false,
        enemiesDefeated: 0,
        level: 2,
        exp: 10,
    };
    expect.deepEqual(actual, expected);
    expect.deepEqual(state.messages, ['attack an enemy', `hero has reached level 2`]);
});