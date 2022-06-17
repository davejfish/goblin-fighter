// import services and utilities
import { getRandomItem } from './utils.js';
// import component creators
import createBattleText from './components/battleText.js';
import createDisplayEnemies from './components/displayEnemies.js';
import createNewEnemy from './components/newEnemy.js';
import createUpdatePlayer from './components/updatePlayer.js';
// import state and dispatch functions
import state, {
    updateBattleGroup,
    updateHP,
    removeFighter,
    restoreHP,
} from './state.js';
// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 

const newEnemy = createNewEnemy(document.querySelector('#create-enemy'), {
    handleCreateEnemy: (name) => {
        // add guard clause if there are 4 enemies already
        updateBattleGroup(name);
        state.messages.push(`${name} has joined the battle!`);
        display();
    }
});

const displayBattleText = createBattleText(document.querySelector('#battle-text'));

const displayEnemies = createDisplayEnemies(document.querySelector('#enemy-box'), { 
    handleAttack: (attacker, defender) => {
        const damage = getRandomItem(state.damage);
        state.messages.push(`${attacker.name} hit ${defender.name} for ${damage} damage`);
        updateHP(defender, damage);
        if (defender.defeated) {
            attacker.enemiesDefeated++;
            restoreHP(attacker);
        }
        if (!defender.defeated) {
            const counter = getRandomItem(state.damage);
            state.messages.push(`${defender.name} counters for ${counter} damage`);
            updateHP(attacker, counter);
        }
        display();
    },
    
    handleRemoveFighter: (combatant) => {
        removeFighter(combatant);
        display();
    }
});

const updatePlayer = createUpdatePlayer(document.querySelector('.player-grid'));

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    newEnemy({ battleGroup: state.battleGroup });
    displayEnemies({ battleGroup: state.battleGroup });
    updatePlayer({ battleGroup: state.battleGroup });
    displayBattleText({ messages: state.messages });
}

// Call display on page load
display();
