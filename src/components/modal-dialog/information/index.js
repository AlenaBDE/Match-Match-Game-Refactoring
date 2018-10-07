import {Tasks} from '../tasks/index';

export class Information {
    constructor() {

    }

    loadForm(infoText) {
        $('head').append('<link rel="stylesheet" type="text/css" href="../../../src/components/modal-dialog/information/index.css">');
        $('#windows').empty()
            .load('../../../src/components/modal-dialog/information/index.html', () => {
                $('#information-text span').text(infoText);
            });
        setTimeout(this.returnToTask,3000);
    }

    returnToTask(){
        new Tasks().loadTasks();
    }

}