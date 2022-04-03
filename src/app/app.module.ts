import { NgModule } from '@angular/core';
// @ts-ignore
import { BrowserModule } from '@angular/platform-browser';// @ts-ignore
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {DragDropModule} from "@angular/cdk/drag-drop";
// @ts-ignore
import { ModelsComponent } from './models/models.component';
import { BoardComponent } from './models/board/board.component';
import { ColumnComponent } from './models/column/column.component';
import { HelloComponent } from './hello/hello.component';
@NgModule({
  declarations: [
    AppComponent,
    ModelsComponent,
    BoardComponent,
    ColumnComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
