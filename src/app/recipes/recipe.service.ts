import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      "Tasty Scnitzel",
      "A super-tasty snitzel - just awesome!",
      "https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg",
      [new Ingredient("Meat", 1), new Ingredient("French fries", 20)]
    ),
    new Recipe(
      "Big fat burger",
      "What else you need to say?",
      "https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg",
      [new Ingredient("Bread", 2), new Ingredient("Meat", 1)]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
