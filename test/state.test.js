import state, {
    initialize,
    updateBattleGroup,
    updateHP,
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
    };
    updateHP(combatant, 2);
    expect.deepEqual(combatant, expected);

    updateHP(combatant, 9999);
    expect.equal(combatant.hp, 0);
    expect.equal(combatant.defeated, true);
});