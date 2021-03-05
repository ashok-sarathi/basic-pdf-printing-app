import { Component, OnInit } from '@angular/core';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  user: User = {
    firstName: "",
    lastName: ""
  }
  model: User;

  modalConfig: ModalOptions = {
    id: 1,
    ignoreBackdropClick: true,
  }

  constructor(
    private userService: UserService,
    private bsModalService: BsModalService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.userService.get().subscribe(data => {
      this.users = data;
    });
  }

  save() {
    if (this.model.id != null) {
      this.userService.update(this.model).subscribe(data => {
        this.toastrService.success("Updated Succesfully");
        this.close();
        this.getData();
      });
    }
    else {
      this.userService.create(this.model).subscribe(data => {
        this.toastrService.success("Created Succesfully");
        this.close();
        this.getData();
      });
    }
  }

  edit(data, template) {
    this.model = { ...data }
    this.bsModalService.show(template, this.modalConfig);
  }

  delete(id) {
    this.userService.delete(id).subscribe(data => {
      this.toastrService.success("Deleted Succesfully");
      this.getData();
    });
  }

  showPopup(template) {
    this.model = { ...this.user }
    this.bsModalService.show(template, this.modalConfig);
  }

  close() {
    this.bsModalService.hide(1);
  }

}
