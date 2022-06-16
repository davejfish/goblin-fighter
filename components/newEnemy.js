export default function createNewEnemy(root, { handleCreateEnemy }) {
    const form = root.querySelector('form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const name = data.get('name');

        handleCreateEnemy(name);
        form.reset();
    });

    return ({ battleGroup }) => {

    };
}