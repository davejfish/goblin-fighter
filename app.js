// import services and utilities

// import component creators
import createBattleText from './components/battleText.js';
import createDisplayEnemies from './components/displayEnemies.js';
// import state and dispatch functions
import state from './state.js';
// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 

const displayBattleText = createBattleText(document.querySelector('#battle-text'));
const displayEnemies = createDisplayEnemies(document.querySelector('#enemy-box'));

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    displayBattleText({ messages: state.messages });
    displayEnemies({ battleGroup: state.battleGroup });
}

// Call display on page load
display();
