import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
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

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
