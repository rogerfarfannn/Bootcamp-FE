export interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
}

export interface RecipeModel {
  id: number;
  name: string;
  isFavorite : boolean;
  description: string;
  imgUrl: string;
  ingredients: Ingredient[];

}
