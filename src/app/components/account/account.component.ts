import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit{
  edit:boolean = true;
  editbtn: string = 'Edit';
  constructor() { }

  ngOnInit(): void {
  }

  readonly() {
    this.edit = !this.edit;
    if (this.editbtn === 'Edit') {
      this.editbtn = 'Save';
    } else {
      this.editbtn = 'Edit'
    }
  }
}
