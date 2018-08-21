import { Component, OnInit } from '@angular/core';
import { User } from './model/user';
import { DemoService } from './demo.service';

declare let jquery: any;
declare let $: any;

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  /*private toggleTitle() {
    $('.title').slideToggle();
  }*/

  private listUser: User[] = [];
  private user: User = new User();
  private isNull: Boolean = false;
  private isUpdate: Boolean = false;
  private srcEdit = '../../assets/images/demo/edit.png';
  private srcDelete = '../../assets/images/demo/delete.png';

  constructor(private demoService: DemoService) { }

  ngOnInit() {
    this.demoService.getUser().subscribe(data => {
      if (data != null) {
        this.listUser = data;
      }
      console.log(this.listUser);
    });

  }

  private delete(id) {
    this.demoService.deleteUser(id).subscribe(
      sucess => {
        window.location.reload();
      }, error => {
        console.log(error);
      }
    );
  }

  private add() {
    if (this.check(this.user)) {
      this.demoService.addUser(this.user).subscribe(
        sucess => {
          window.location.reload();
        }, error => {
          console.log(error);
        }
      );
    }
  }

  private edit(index) {
    this.isUpdate = true;
    for (let i in this.listUser) {
      if (i == index) {
        this.user.id = this.listUser[i].id;
        this.user.name = this.listUser[i].name;
        this.user.mail = this.listUser[i].mail;
      }
    }
  }

  private check(user: any) {
    if (user.mail == null || user.mail.trim() === '' || user.name == null || user.name.trim() === '') {
      this.isNull = true;
      return false;
    }
    this.isNull = false;
    return true;
  }

  private update() {
    if (this.check(this.user)) {
      this.demoService.editUser(this.user).subscribe(
        sucess => {
          window.location.reload();
        }, error => {
          console.log(error);
        }
      );
    }
  }

}
