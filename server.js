const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const RecipeController = require("./controllers/recipeController");

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error connecting to MongoDB:", error));

// Routes
app.post("/recipes", RecipeController.create);
app.get("/recipes", RecipeController.getAll);
app.put("/recipes/:id", RecipeController.update);
app.delete("/recipes/:id", RecipeController.deleteRecipe);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
