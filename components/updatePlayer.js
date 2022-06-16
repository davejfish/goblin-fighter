export default function createUpdatePlayer(root) {
    return ({ battleGroup }) => {
        const playerHP = root.querySelector('#hero-hp');
        playerHP.textContent = battleGroup[0].hp;
    };
}