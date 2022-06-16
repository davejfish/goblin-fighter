export default function createDisplayEnemies(root, { handleAttack }) {
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

                if (combatant.defeated) {
                    button.addEventListener('click', () => {
                        div.classList.add('hidden');
                        return;
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