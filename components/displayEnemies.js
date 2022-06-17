export default function createDisplayEnemies(root, { handleAttack, handleRemoveFighter }) {
    const enemyBox = root.querySelector('.repeat-grid');

    return ({ battleGroup }) => {
        enemyBox.innerHTML = '';
        for (let combatant of battleGroup) {
            if (combatant.enemy) {
                const div = document.createElement('div');
                div.classList.add('enemy-box');

                let span1 = document.createElement('span');
                span1.textContent = combatant.name;

                let button = document.createElement('button');
                button.id = 'combatant';
                
                let img = document.createElement('img');
                img.src = './assets/goblin.png';

                if (combatant.defeated) {
                    img.classList.add('dead');
                }
                
                let span2 = document.createElement('span');
                span2.textContent = `hp: ${combatant.hp}`;

                button.append(img, span2);
                div.append(span1, button);
                enemyBox.append(div);

                if (battleGroup[0].hp <= 0) return;

                if (combatant.defeated) {
                    button.addEventListener('click', () => {
                        handleRemoveFighter(combatant);
                    });
                }

                if (!combatant.defeated) {
                    button.addEventListener('click', () => {
                        handleAttack(battleGroup[0], combatant);
                    });
                }
            }
        }
    };
}