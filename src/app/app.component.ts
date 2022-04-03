import { Component, VERSION, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList } from '@angular/cdk/drag-drop';

// @ts-ignore
import { Board } from './models/board.model';
// @ts-ignore
import { Column } from './models/column.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  name = 'Angular Material ' + VERSION.major + ' Kanban board';
  public board: Board = new Board('Test Board', [
    new Column('Ideas', '21', [
      'Some random idea',
      'This is another random idea'
    ]),
    new Column('Research', '32', [
      'Lorem ipsum',
      'foo'
    ])
  ]);

  constructor(){}

  public ngOnInit(): void {
    console.log(this.board);
  }

  public dropGrid(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.board.columns, event.previousIndex, event.currentIndex);
  }

  public drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
