import { OnInit, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GlobalvarsService implements OnInit{
    constructor() {}
    chipID:string | undefined;
    title:string | undefined;
    type:string | undefined;


    ngOnInit():void {

    }
}
