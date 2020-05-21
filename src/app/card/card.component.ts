import { Component, OnInit, Input } from '@angular/core';
import { faCheck,faTimes } from '@fortawesome/free-solid-svg-icons'
import { Card } from '../cardData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card:Card;
  constructor() { }

  ngOnInit(): void {
  }
  faCheck = faCheck
  faTimes = faTimes
}
