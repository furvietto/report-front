import { Injectable } from '@angular/core';
import { Subject,Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  private subject = new Subject<any>();

  public sendMessage(message:string):void {
    this.subject.next({text:message})
  }

  public getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
