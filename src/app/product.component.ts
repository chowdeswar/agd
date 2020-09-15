import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-product',
    template: '<h3>Het this id from product route "  {{ ParamVaue  }}  "</h3>',
})

export class ProductComponent implements OnInit {
    ParamVaue: any;

    constructor(private _route: ActivatedRoute, private title: Title) {}

    ngOnInit() {
        console.log(this.title.getTitle());
        this._route.paramMap.subscribe((param) => {
            console.log(param.get('name'));
            this.ParamVaue = param.get('name');
        })
    }

}