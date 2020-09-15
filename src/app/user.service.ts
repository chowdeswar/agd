import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
    // providedIn: 'root'
)

export class UserService implements OnInit {
    contextPath = "";
    constructor(private httpClient: HttpClient) { 
        console.log('this is called')
        console.log('on init called', this.contextPath,  typeof this.contextPath)
        this.httpClient.get('./../assets/schema.json').subscribe((response:any) => {
            this.contextPath = response.URL;
            console.log('response :: ', response , this.contextPath);

        })
    }
 
    ngOnInit() {
        
    }
}