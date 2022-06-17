import state from '../state.js';

export default function createBattleText(root) {
    const text = root.querySelector('.combat-text');
    
    return ({ messages }) => {
        text.innerHTML = '';

        for (let i = 0; i < messages.length; i++) {
            let span = document.createElement('span');
            span.textContent = messages[i];
            text.append(span);
        }
        state.messages = [];
    };
}