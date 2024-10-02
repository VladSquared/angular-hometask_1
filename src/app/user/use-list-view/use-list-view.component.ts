import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user.model'

@Component({
  selector: 'app-use-list-view',
  templateUrl: './use-list-view.component.html',
  styleUrl: './use-list-view.component.css'
})
export class UseListViewComponent {
  @Input() users: User[] = [];
  @Output() deleteUserIndex = new EventEmitter<number>();

  deleteUser(index: number) {
    this.deleteUserIndex.emit(index);
  }
}
