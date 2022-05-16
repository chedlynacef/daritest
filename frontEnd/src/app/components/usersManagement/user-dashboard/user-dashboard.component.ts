import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/userServices/user.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  public users!: User[];
  public user: User= {
    userId: 0,
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    date: new Date(),
    cDate: new Date(),
    lDate: new Date(),
    notLocked: false,
    role: "",
    password:"",
  };
  private subs = new SubSink();

  constructor(private service: UserService) { }

  ngOnInit(){
    this.getUser();
  }

  public getUser(): void {
    this.subs.add(
      this.service.getUsers().subscribe(
        (response) => {
          if (response.body != null) {

            this.users = response.body;
            // console.log(response.body);
          }
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  onAddUser(addForm: NgForm) {
 
    this.subs.add(
      this.service.addUser(addForm.value).subscribe(

        (response) => {
          addForm.onReset();
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  public setUser(user: User) {
    this.user = user;
  }

public onUpdate(editForm: NgForm){
  
  editForm.value.userId = this.user.userId;

  if (editForm.value.username == '') {
    editForm.value.username = this.user.username;
  }
  if (editForm.value.email == '') {
    editForm.value.email = this.user.email;
  }
  if (editForm.value.firstName == '') {
    editForm.value.firstName = this.user.firstName;
  }
  if (editForm.value.lastName == '') {
    editForm.value.lastName = this.user.lastName;
  }
  if (editForm.value.date == '') {
    editForm.value.date = this.user.date;
  }
  if (editForm.value.role == '') {
    editForm.value.role = this.user.role;
  }
  this.subs.add(
    this.service.updateUser(editForm.value).subscribe(
      (response) => {
        console.log(response);
        // location.reload();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  );
}

public onPasswordChange(editForm: NgForm){
  this.subs.add(
    this.service.changePassword(this.user.userId,editForm.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  );
}

  public deleteUser(id: number) {
    this.subs.add(
      this.service.deleteUser(id).subscribe(
        (response) => {
          console.log(response);
          location.reload();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      )
    );
  }


}
