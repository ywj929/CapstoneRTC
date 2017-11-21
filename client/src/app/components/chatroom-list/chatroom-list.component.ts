import { Component, OnInit } from '@angular/core';
import { Rooms } from '../../models/room.model';
import {DataService} from '../../services/data/data.service';

@Component({
  selector: 'app-chatroom-list',
  templateUrl: './chatroom-list.component.html',
  styleUrls: ['./chatroom-list.component.css']
})
export class ChatroomListComponent implements OnInit {
  rooms: Rooms[];
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.getRooms();
  }

  getRooms():void{
    this.rooms= this.dataService.getRooms();
  }
}
