import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-relay',
  templateUrl: './relay.component.html',
  styleUrls: ['./relay.component.scss']
})
export class RelayComponent implements AfterViewInit{

  icon = 'M11.25 13.05V2.9h1.5v10.15Zm.75 8q-1.85 0-3.488-.712Q6.875 19.625 5.65 18.4q-1.225-1.225-1.937-2.863Q3 13.9 3 12.05q0-2 .85-3.738.85-1.737 2.4-3.088l1.05 1.05q-1.325 1.075-2.062 2.562T4.5 12.05q0 3.125 2.188 5.313T12 19.55q3.125 0 5.313-2.187T19.5 12.05q0-1.725-.738-3.238Q18.025 7.3 16.75 6.275l1.075-1.05q1.5 1.275 2.337 3.05Q21 10.05 21 12.05q0 1.85-.712 3.488-.712 1.637-1.925 2.863-1.212 1.225-2.85 1.938Q13.875 21.05 12 21.05Z'


  @ViewChild('darkModeSwitch1', { read: ElementRef }) element1!: ElementRef;
  @ViewChild('darkModeSwitch2', { read: ElementRef }) element2!: ElementRef;
  @ViewChild('darkModeSwitch3', { read: ElementRef }) element3!: ElementRef;
  @ViewChild('darkModeSwitch4', { read: ElementRef }) element4!: ElementRef;
  @ViewChild('darkModeSwitch5', { read: ElementRef }) element5!: ElementRef;
  @ViewChild('darkModeSwitch6', { read: ElementRef }) element6!: ElementRef;
  @ViewChild('darkModeSwitch7', { read: ElementRef }) element7!: ElementRef;
  @ViewChild('darkModeSwitch8', { read: ElementRef }) element8!: ElementRef;



  ngAfterViewInit() {
    this.element1.nativeElement.querySelector('.mdc-switch__icon--on').firstChild.setAttribute('d', this.icon);
    this.element1.nativeElement.querySelector('.mdc-switch__icon--off').firstChild.setAttribute('d', this.icon);
    this.element2.nativeElement.querySelector('.mdc-switch__icon--on').firstChild.setAttribute('d', this.icon);
    this.element2.nativeElement.querySelector('.mdc-switch__icon--off').firstChild.setAttribute('d', this.icon);
    this.element3.nativeElement.querySelector('.mdc-switch__icon--on').firstChild.setAttribute('d', this.icon);
    this.element3.nativeElement.querySelector('.mdc-switch__icon--off').firstChild.setAttribute('d', this.icon);
    this.element4.nativeElement.querySelector('.mdc-switch__icon--on').firstChild.setAttribute('d', this.icon);
    this.element4.nativeElement.querySelector('.mdc-switch__icon--off').firstChild.setAttribute('d', this.icon);
    this.element5.nativeElement.querySelector('.mdc-switch__icon--on').firstChild.setAttribute('d', this.icon);
    this.element5.nativeElement.querySelector('.mdc-switch__icon--off').firstChild.setAttribute('d', this.icon);
    this.element6.nativeElement.querySelector('.mdc-switch__icon--on').firstChild.setAttribute('d', this.icon);
    this.element6.nativeElement.querySelector('.mdc-switch__icon--off').firstChild.setAttribute('d', this.icon);
    this.element7.nativeElement.querySelector('.mdc-switch__icon--on').firstChild.setAttribute('d', this.icon);
    this.element7.nativeElement.querySelector('.mdc-switch__icon--off').firstChild.setAttribute('d', this.icon);
    this.element8.nativeElement.querySelector('.mdc-switch__icon--on').firstChild.setAttribute('d', this.icon);
    this.element8.nativeElement.querySelector('.mdc-switch__icon--off').firstChild.setAttribute('d', this.icon);
  }
}
