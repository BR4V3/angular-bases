
import {  Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],


})
export class ListComponent {
  public CharacterList: Character[] = [{
    name: 'Trunks',
    power: 10
  },
  {
    name: 'Goku',
    power: 9500
  },
  {
    name: 'Krillin',
    power: 500
  }
]
}
