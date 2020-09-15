import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-guess-number',
    templateUrl: './guess-number.component.html',
    styles: ['']
})

export class GuessNumberComponent implements OnInit {

    guess: number;
    guessTimes: number = 0;
    original: number;
    deviation: number;
    guessFlag: boolean = false;

    constructor() {}

    ngOnInit() {
        this.initialize();
    }

    initialize() {
        this.guess = null;
        this.guessTimes = 0;
        this.original = Math.floor((Math.random() * 1000) + 1);
        this.deviation = null;
    }

    verifyNumber() {
        if(this.guess) {

            this.deviation = this.original - this.guess;
            this.guessTimes++;
            this.guessFlag = false;
            console.log('gussed number: ', this.guess, this.guessTimes,this.original,  this.deviation);
        } else {
            this.guessFlag = true;
        }
    }

    restartNumber() {
        this.guessTimes = 0;
        this.guess = null;
        this.deviation = null;
        this.guessFlag = false;
        console.log('guess times: ', this.guessTimes);
    }
}