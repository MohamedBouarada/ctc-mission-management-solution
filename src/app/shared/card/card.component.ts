import { Component, Input, OnInit } from '@angular/core';
import { formation } from 'src/app/models/formation.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() formation!: formation;
  constructor() {}

  ngOnInit(): void {}
}
