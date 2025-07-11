import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { Chat } from '../../interfaces/chat';

@Component({
  selector: 'app-side-bar',
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})

export class SideBarComponent {
  protected readonly window: Window = window;

  @Input() chats: Chat[] = [];
  @Input() activeChat: string = '';
  @Input() isOpen: boolean = true;
  @Output() selectChat = new EventEmitter<string>();
  @Output() addChat = new EventEmitter<void>();
  @Output() removeChat = new EventEmitter<string>();
  @Output() closeSidebar = new EventEmitter<boolean>();

  public openSidebar(): void {
    if (!this.isOpen) {
      this.isOpen = true;
      this.closeSidebar.emit(this.isOpen);
    }
  }

  public toCloseSidebar(): void {
    if (this.isOpen) {
      this.isOpen = false;
      this.closeSidebar.emit(this.isOpen);
    }
  }
}
