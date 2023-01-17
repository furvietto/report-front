import { MessageService } from './../services/message.service';

import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private messageService:MessageService) {}

  username!: string;

  ngOnInit(): void {
    this.messageService.getMessage().subscribe(res => {
      this.username = res['text'];
    },
    err => console.log(err));
  }

}
