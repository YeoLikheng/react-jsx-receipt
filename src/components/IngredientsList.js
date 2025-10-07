import React from "react";
import Ingredient from "./Ingredients";

export default function IngredientsList({ ingredients }) {
    return (
        <ul className="ingredients">
            {ingredients.map((ingredient, i) => (
                <Ingredient key={i} {...ingredient} />
            ))}
        </ul>
    )
}
