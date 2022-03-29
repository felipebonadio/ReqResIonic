import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  users :User[] = [];
  page=1;
  total_pages:number;

  constructor(private service: UserService) {}

  ngOnInit(): void {
   this.getAllUser(this.service.urlApi);
  }

  getAllUser(url:string): void{
      this.users =[];
      this.service.getAllUsers(url).subscribe((user) => {
        this.page = user['page']   
        this.total_pages = user['total_pages']     
        user['data'].forEach(
          users => this.users.push(users))
        });
    }

    proximaPagina():void {
      this.page +=1;
      this.getAllUser(`${this.service.urlApi}?page=${this.page}`)
    }

    paginaAnterior(url:string){     
      this.page -=1;
      this.getAllUser(this.service.urlApi + '?page='+ this.page)
    }
}
