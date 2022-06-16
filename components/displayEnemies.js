export default function createDisplayEnemies(root) {
    const enemyBox = root.querySelector('.repeat-grid');

    enemyBox.innerHTML = '';

    return ({ battleGroup }) => {
        for (let combatant of battleGroup) {
            if (combatant.enemy) {
                const div = document.createElement('div');
                div.classList.add('enemy-box');

                let span1 = document.createElement('span');
                span1.textContent = combatant.name;

                let button = document.createElement('button');
                
                let img = document.createElement('img');
                img.src = './assets/goblin.png';
                
                let span2 = document.createElement('span');
                span2.textContent = `hp: ${combatant.hp}/8`;

                button.append(img, span2);
                div.append(span1, button);
                enemyBox.append(div);
            }
        }
    };
}