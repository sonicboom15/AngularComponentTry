import { Component } from '@angular/core';
import { Cards } from './mockdata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentapp';
  cards = Cards
}
