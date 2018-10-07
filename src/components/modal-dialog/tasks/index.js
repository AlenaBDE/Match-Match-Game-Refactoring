import {Arifmetic} from '../../modal-dialog/arifmetic/index';
import {Audio} from '../../modal-dialog/audio/index';
import {Translate} from "../translate";

export class Tasks {
    constructor() {
        this.loadCompleteTask = this.loadCompleteTask.bind(this);
    }

    loadForms(patch, callback) {
        $('head').append('<link rel="stylesheet" type="text/css" href="' + patch + '/index.css">');
        $('#windows').empty()
            .load(patch + '/index.html', callback);
    }

    loadTasks() {
        this.loadForms('../../components/modal-dialog/tasks', this.loadCompleteTask);
    }

    loadCompleteTask() {
        $('#arifmetic').on('click', this.arifmetic);
        $('#audio').on('click', this.audio);
        $('#translate').on('click', this.translate);
    }

    audio() {
        $('#windows').off('click');
        new Audio().loadForm();
    }

    translate() {
        $('#windows').off('click');
        new Translate().loadForm();
    }

    arifmetic() {
        $('#windows').off('click');
        new Arifmetic().loadForm();
    }

}