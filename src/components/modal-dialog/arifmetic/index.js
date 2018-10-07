import {Information} from "../information/index";

export class Arifmetic {
    constructor() {
        this.loadComplete = this.loadComplete.bind(this);
        this.massSign = ['+', '-', '*'];
        this.ran1 = Math.floor(Math.random() * (100 - 1 + 1)) + 100;
        this.ran2 = Math.floor(Math.random() * (100 - 1 + 1)) + 100;
        this.sum = '' + this.ran1 + ' ' + this.massSign[Math.floor(Math.random() * this.massSign.length)] + ' ' + this.ran2;
    }

    loadForm() {
        $('head').append('<link rel="stylesheet" type="text/css" href="../../../src/components/modal-dialog/arifmetic/index.css">');
        $('#windows').empty()
            .load('../../../src/components/modal-dialog/arifmetic/index.html', this.loadComplete);
    }

    loadComplete() {
        $('#arifmetic').text(this.sum);
        $('#vvod').on('keydown', this.keyEvent);
        $('#button-result').on('click', this.keyEvent);
    }


    keyEvent(obj) {
        if ((obj.type === 'click') || (obj.keyCode === 13)) {
            let val = $("#vvod").val();
            if ((val !== '') && (!isNaN(val))) {
                $("#win").off('click keydown')
                    .empty();
                if (eval(this.sum) == val) {
                    new Information().loadForm('Правильно!');
                }
                else {
                    new Information().loadForm('Не правильно!!!');
                }
            }
        }
    }
}