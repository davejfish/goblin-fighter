import state from '../state.js';
export default function createUpdatePlayer(root) {
    return ({ battleGroup }) => {
        const playerHP = root.querySelector('#hero-hp');
        playerHP.textContent = battleGroup[0].hp;

        const enemiesDefeated = root.querySelector('#enemies-defeated');
        enemiesDefeated.textContent = `defeated enemies: ${state.battleGroup[0].enemiesDefeated}`;

        if (state.battleGroup[0].hp <= 0) {
            let heroImage = document.querySelector('#hero-image');
            heroImage.classList.add('dead');
        }
    };
}