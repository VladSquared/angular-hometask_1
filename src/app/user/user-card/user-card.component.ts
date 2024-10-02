import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../user.model'

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input() user!: User;
  @Input() index!: number;
  @Output() delete = new EventEmitter<number>();

  toggleActivation() {
    this.user.activated = !this.user.activated;
  }

  deleteUser() {
    this.delete.emit(this.index);
  }
}
