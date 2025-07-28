const { default: mongoose } = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  serves: { type: Number, required: false },
  prepTime: { type: Number, required: false },
  category: { type: String, required: false },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
