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
                
                let span2 = document.createElement('span');
                span2.textContent = `hp: ${combatant.hp}`;

                button.append(img, span2);
                div.append(span1, button);
                enemyBox.append(div);

                button.addEventListener('click', () => {
                    console.log('clicked');
                    handleAttack(battleGroup[0], combatant);
                });
            }
            // const buttons = enemyBox.querySelectorAll('button');
            // console.log(buttons);
            
            
        }

        
    };
}