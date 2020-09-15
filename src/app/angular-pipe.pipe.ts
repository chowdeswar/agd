import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "angularTimeSeconds"
})

export class AngularPipePipe implements PipeTransform {
    constructor() {}

    transform(value: any) {
        return value;
    }
}