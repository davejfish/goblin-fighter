import state from '../state.js';
export default function createUpdatePlayer(root) {
    return ({ battleGroup }) => {
        const playerHP = root.querySelector('#hero-hp');
        playerHP.textContent = battleGroup[0].hp;

        const enemiesDefeated = root.querySelector('#enemies-defeated');
        enemiesDefeated.textContent = `defeated enemies: ${state.battleGroup[0].enemiesDefeated}`;
    };
}