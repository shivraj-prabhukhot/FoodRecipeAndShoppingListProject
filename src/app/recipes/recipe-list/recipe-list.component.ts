import { Component, OnInit } from '@angular/core';
import{Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: [
  ]
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe("paneer tikka","Indian style cuisine", "https://www.seriouseats.com/2017/02/20170216-detroit-style-pizza-47-1500x1125-1.jpg"),
    new Recipe("Sandwitch", "Continental","https://realfood.tesco.com/media/images/RFO-1400x919-ChickenClubSandwich-0ee77c05-5a77-49ac-a3bd-4d45e3b4dca7-0-1400x919.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
