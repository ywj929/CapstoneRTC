import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {DataService} from './services/data/data.service';

import { AppComponent } from './app.component';
import { ChatroomListComponent } from './components/chatroom-list/chatroom-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatroomListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
