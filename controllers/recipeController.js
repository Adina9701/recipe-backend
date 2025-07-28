const RecipeService = require('../services/recipeService');

// Function to create a new recipe
async function create(req, res) {
  try {
    const recipe = await RecipeService.createRecipe(req.body);
    res.status(201).send(recipe);
  } catch (error) {
    res.status(400).send(error);
  }
}

// Function to get all recipes
async function getAll(req, res) {
  try {
    const recipes = await RecipeService.getAllRecipes();
    res.send(recipes);
  } catch (error) {
    res.status(500).send(error);
  }
}

// Function to update a recipe by ID
async function update(req, res) {
  try {
    const recipe = await RecipeService.updateRecipe(req.params.id, req.body);
    if (!recipe) {
      return res.status(404).send();
    }
    res.send(recipe);
  } catch (error) {
    res.status(400).send(error);
  }
}

// Function to delete a recipe by ID
async function deleteRecipe(req, res) {
  try {
    const recipe = await RecipeService.deleteRecipe(req.params.id);
    if (!recipe) {
      return res.status(404).send();
    }
    res.send(recipe);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  create,
  getAll,
  update,
  deleteRecipe
};
