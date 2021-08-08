import { Injectable } from '@angular/core';

export enum MessageType {
    Neutral = '',
    Info = 'info',
    Success = 'success',
    Warning = 'warning',
    Error = 'error'
}

export interface Message {
    type: MessageType;
    text: string;
    icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

    messages: Message[] = [];

    add(msg: Message) {
        this.messages.unshift(msg);
    }

    constructor() { }
}
