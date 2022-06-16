import state, {
    initialize,
    updateBattleGroup,
} from '../state.js';

// make sure state is at known starting point
QUnit.module('state', { beforeEach: initialize });

const test = QUnit.test;

test('adding member to battleGroup', (expect) => {
    expect.deepEqual(state.battleGroup, [{
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
    ]);

    updateBattleGroup('gobinator');
    expect.deepEqual(state.battleGroup, [{
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
    {
        name: 'gobinator',
        hp: 8,
        defeated: false,
        enemy: true,
    },
    ]);
});
