const Recipe = require("../models/recipeModel");


async function createRecipe(data) {
  try {
    const recipe = new Recipe(data);
    return await recipe.save();
  } catch (error) {
    throw new Error("Error creating recipe: " + error.message);
  }
}


async function getAllRecipes() {
  try {
    return await Recipe.find();
  } catch (error) {
    throw new Error("Error fetching recipes: " + error.message);
  }
}


async function getRecipeById(id) {
  try {
    return await Recipe.findById(id);
  } catch (error) {
    throw new Error("Error fetching recipe by ID: " + error.message);
  }
}


async function updateRecipe(id, data) {
  try {
    return await Recipe.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    throw new Error("Error updating recipe: " + error.message);
  }
}


async function deleteRecipe(id) {
  try {
    return await Recipe.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Error deleting recipe: " + error.message);
  }
}

module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
};
