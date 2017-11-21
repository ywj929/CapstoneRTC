import { Rooms } from '../../models/room.model';
import {ROOMS} from '../../room-mock'
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  rooms:Rooms[]=ROOMS;
  constructor() { }

  getRooms(): Rooms[]{
    return this.rooms;
  }

  getRoom(id:number):Rooms{
    return this.rooms.find((rooms)=>rooms.id===id)
  }
}
