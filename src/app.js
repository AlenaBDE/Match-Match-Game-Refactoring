window.onload = startGame;

import {Monster} from '../src/js/monster.js';
import {Score} from "../src/components/modal-dialog/registration/index.js";
import {Tasks} from "../src/components/modal-dialog/tasks/index.js";

function startGame() {
    let hMonster = new Monster();
    hMonster.draw();

    let hScore = new Score();
    hScore.showRegistration();
}

