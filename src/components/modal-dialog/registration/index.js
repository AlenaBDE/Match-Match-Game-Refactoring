import {Tasks} from "../../../../src/components/modal-dialog/tasks/index.js";

let hTasks = new Tasks();


let score = [];
export let user = {name: '', count: 0};

export class Score {
    constructor() {
        if (localStorage.getItem('score') !== null) {
            score = JSON.parse(localStorage.getItem('score'));
        }
        else {
            localStorage.setItem('score', JSON.stringify(score));
        }
    }

    registration(event) {
        if ((event.type === 'click') || (event.keyCode === 13)) {
            let val = $("#fname").val();
            if (val !== '') {
                user.name = val;
                $("#win").off('click keydown')
                .hide();
                hTasks.loadTasks();
            }
        }
    }

    addScore(item) {

        function compareCount(a, b) {
            if (a.count < b.count) return 1;
            if (a.count > b.count) return -1;
        }

        if (score.length === 5) {
            score.forEach(function (t, number, arr) {
                    if (item.count > t.count) {
                        arr.splice(number, 1, item);
                        return;
                    }
                }
            )
        }
        else {
            score.push(item);
        }
        if (score.length > 1) {
            score.sort(compareCount);
        }
        localStorage.setItem('score', JSON.stringify(score));
    }


    showScore() {
        let tr = document.getElementById('score');
        score.forEach(function (item, index, arr) {
                tr.children[0].children[0].children[2 + index].children[1].innerHTML = item.name;
                tr.children[0].children[0].children[2 + index].children[2].innerHTML = item.count;
            }
        );
        document.getElementById('score').style.visibility = 'visible';
    }

    showRegistration() {

        function addStyle() {
            let promise = new Promise(function (resolve) {
                $('head').append('<link rel="stylesheet" type="text/css" href="../../components/modal-dialog/registration/index.css">');
                resolve();
            })
            return promise;
        }

        function load() {
            return new Promise(function (resolve) {
                $('#windows').load('../../components/modal-dialog/registration/index.html', function () {
                    resolve();
                });
            })
        }

        function addEvents() {
            $('#fname').on('keydown', this.registration.bind(Score));
            $('#button_registration').on('click', this.registration.bind(Score));
        }

        addStyle()
            .then(load)
            .then(addEvents.bind(this));
    }

}

// function registration(e) {
//     if ((e.id == button_registration) || (e.keyCode == 13)) {
//         user.name = document.getElementById('fname').value;
//         if (user.name != '') {
//             document.getElementById('win').style.visibility = 'hidden';
//             windowTask();
//         }
//     }
// }


// function addScore(item) {
//
//     function compareCount(a, b) {
//         if (a.count < b.count) return 1;
//         if (a.count > b.count) return -1;
//     }
//
//     if (score.length == 5) {
//         score.forEach(function (t, number, arr) {
//                 if (item.count > t.count) {
//                     arr.splice(number, 1, item);
//                     return;
//                 }
//             }
//         )
//     }
//     else {
//         score.push(item);
//     }
//     if (score.length > 1) {
//         score.sort(compareCount);
//     }
//     localStorage.setItem('score', JSON.stringify(score));
// }
//
// function showScore() {
//     let tr = document.getElementById('score');
//     score.forEach(function (item, index, arr) {
//             tr.children[0].children[0].children[2 + index].children[1].innerHTML = item.name;
//             tr.children[0].children[0].children[2 + index].children[2].innerHTML = item.count;
//         }
//     )
//     document.getElementById('score').style.visibility = 'visible';
// }