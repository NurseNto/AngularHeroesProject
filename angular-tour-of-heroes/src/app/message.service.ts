import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];
// add a message to cache
  add(message: string) {
    this.messages.push(message);
  }
// clear a cache
  clear() {
    this.messages = [];
  }
}
