import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-alert',
    template: '<h3>This is an alert {{  message }}</h3>',
    styles: [`
    h3 {
        border: 1px solid black;
        color: salmon;
        font-size: 20px;
        padding: 10px;
        margin: 20px;
    }
    `],
})

export class AlertComponent implements OnInit {
    ParamVaue: any;
    message = null;

    constructor(private _route: ActivatedRoute) { }

    ngOnInit() {

    }

}