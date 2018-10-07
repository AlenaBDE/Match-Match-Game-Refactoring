import {TaskWords} from '../../../js/vocabulary';
import {Information} from "../information";

export class Translate {
    constructor() {
        this.loadComplete = this.loadComplete.bind(this);
        this.word = new TaskWords();
        this.self = this;
    }

    loadForm() {
        $('head').append('<link rel="stylesheet" type="text/css" href="../../../src/components/modal-dialog/translate/index.css">');
        $('#windows').empty()
            .load('../../../src/components/modal-dialog/translate/index.html', this.loadComplete);
    }

    loadComplete() {
        $('#translate').text(this.word.getWord());
        $('#vvod').on('keydown', this.keyEvent.bind(this));
        $('#button-result').on('click', this.keyEvent.bind(this));
    }

    keyEvent(obj) {
        if ((obj.type === 'click') || (obj.keyCode === 13)) {
            let val = $("#vvod").val();
            if (val !== '') {
                $("#win").off('click keydown')
                    .empty();
                if (this.word.checkWord(val)) {
                    new Information().loadForm('Правильно!');
                }
                else {
                    new Information().loadForm('Не правильно!');
                }
            }
        }
    }
}