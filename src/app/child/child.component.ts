import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
})

export class ChildComponent implements OnInit {

    @Input() childInput: any;
    @Output() changed = new EventEmitter();

    constructor() {}

    ngOnInit() {

    }

    childClick(val) {
        this.changed.emit(val);
    }
}