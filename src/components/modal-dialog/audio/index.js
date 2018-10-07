import {Information} from "../information";

export class Audio {
    constructor() {
        this.loadComplete = this.loadComplete.bind(this);
        this.playWord = this.playWord.bind(this);
        this.mass = ['economic', 'inspiration', 'vocabulary', 'design', 'redundancy', 'run', 'probability'];
        this.word = this.mass[Math.floor(Math.random() * this.mass.length)];
    }

    loadForm() {
        $('head').append('<link rel="stylesheet" type="text/css" href="../../../src/components/modal-dialog/audio/index.css">');
        $('#windows').empty()
            .load('../../../src/components/modal-dialog/audio/index.html', this.loadComplete);
    }

    loadComplete() {
        $('#audio-img').on('click', this.playWord);
        $('#audio-edit').on('keydown', this.keyEvent);
        $('#audio-button').on('click', this.keyEvent);
    }

    playWord() {
        speechSynthesis.speak(new SpeechSynthesisUtterance(this.word));
    }

    keyEvent(obj) {
        if ((obj.type === 'click') || (obj.keyCode === 13)) {
            $("#win").off('click keydown')
                .empty();
            if ($("#audio-edit").val() == this.word) {
                new Information().loadForm('Правильно!');
            }
            else {
                new Information().loadForm('Не правильно!!!');
            }
        }
    }

}