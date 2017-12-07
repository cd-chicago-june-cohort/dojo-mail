import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emails = [
    {email: 'baldmike@Email.com', importance: true, subject: 'Call me on the telephone', content: 'To talk'}, 
    {email: 'HarrySTruman@Email.com', importance: false, subject: 'The Bears', content: 'are awful'},
    {email: 'EdgarAllenPoe@Email.com', importance: true, subject: 'The Raven says', content: 'You are screwed.'},
    {email: 'Ginger@Email.com', importance: false, subject: 'Last Night', content: 'Thanks for nothing.'},
  ]
}
