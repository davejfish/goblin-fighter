export default function createBattleText(root) {
    const text = root.querySelector('.combat-text');

    text.innerHTML = '';
    return ({ messages }) => {
        for (let message of messages) {
            let span = document.createElement('span');
            span.textContent = message;

            text.append(span);
        }
    };
}