export default function createBattleText(root) {
    const text = root.querySelector('.combat-text');

    return ({ messages }) => {
        text.innerHTML = '';
        for (let message of messages) {
            let span = document.createElement('span');
            span.textContent = message;

            text.append(span);
        }
    };
}