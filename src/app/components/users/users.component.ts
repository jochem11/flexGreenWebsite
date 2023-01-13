import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  name : string = "";
  userid : number = 0;
  showEdit : boolean = false;
  showEditGroup : boolean = false;
  readonly1 : boolean = true;
  readonly2 : boolean = true;
  groupname : string = '';
  new_group_user : boolean = false;
  users = [
    {a: 'a'},
    {a: 'a'},
    {a: 'a'},
    {a: 'a'},
    {a: 'a'},
    {a: 'a'},
    {a: 'a'},
  ];


  groups = [
    {
      groupname : 'Owner',
      users: [
        {id : 1 ,name : 'owner1'},
        {id : 2 ,name : 'owner2'},
        {id : 3 ,name : 'heehe'}
      ]
    },
    {
      groupname : 'Admin(s)',
      users: [
        {id : 4 ,name : 'admin'}
      ]
    },
    {
      groupname : 'Only View',
      users: [
        {id : 5 ,name : 'viewer1'},
        {id : 6 ,name : 'viewer2'}
      ]
    },
    {
      groupname : 'Installer',
      users: [
        {id : 7,name : 'installer'}
      ]
    },
    {
      groupname : 'Unasigned',
      users: [
        {id : 8 ,name : 'user1'},
        {id : 9 ,name : 'user2'}
      ]
    },
  ];

  hideOverlay() {
    this.showEdit = false;
  }

  hideOverlayGroup() {
    this.showEditGroup = false;
  }

  hideOverlay1() {
    this.showEditGroup = false;
  }

  hideOverlay2() {
    this.new_group_user = false;
  }

  EditUser(id : number) {
    for (let group of this.groups) {
      for (let user of group.users) {
        if (user.id == id) {
          this.name = user.name;
          this.userid = user.id;
          this.showEdit = true;
        }
      }
    }
  }

  readonly(i : number) {
    switch (i) {
      case 1: {
        if (!this.readonly1) {
          this.readonly1 = true;
        } else {
          this.readonly1 = false;
          this.readonly2 = true;
        }
        break;
      }
      case 2 : {
        if (!this.readonly2) {
          this.readonly2 = true;
        } else {
          this.readonly1 = true;
          this.readonly2 = false;
        }
        break;
      }
    }
  }

  editGroup(groupname:string) {
    this.showEditGroup = true;
    this.groupname = groupname;
  }

  new_groupUser() {
    this.new_group_user = true;
  }
  

  ngOnInit(): void {

  }
  
}
