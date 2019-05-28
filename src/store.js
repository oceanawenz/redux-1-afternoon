import { createStore } from 'redux';

//create an initial state and reducer
// add recipe name and category the initialState object
const initialState = {
    name: "",
    category: "",
    authorFirst: "",
    authorLast: "",
    ingredients: [],
    instructions: [],
    recipes: []
};

//create two action types. One for updating the recipe name.
// One for updating the recipe category.
// they will describe what the action will do. and make sure to export
export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_AUTHOR_FIRST = "UPDATE_AUTHOR_FIRST";
export const UPDATE_AUTHOR_LAST = "UPDATE_AUTHOR_LAST";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const ADD_INSTRUCTION = "ADD_INSTRUCTION";
export const ADD_RECIPE = "ADD_RECIPE";



//reducer takes in two things (state, action).
//use initialState as default value for the state paremeter

function reducer(state = initialState, action) {
    //destructure the action object so it can access its properties
    const { type, payload } = action;
    //switch should test the type property of the action object and return state unaltered as the default
    switch (type) {
        case UPDATE_NAME:
            return {...state, name: payload};

        case UPDATE_CATEGORY:
            return {...state, category: payload};

        case UPDATE_AUTHOR_FIRST:
            return {...state, authorFirst: payload};

        case UPDATE_AUTHOR_LAST:
            return {...state, authorLast: payload};

        case ADD_INGREDIENT:
            //... makes a copy of the ingredients list
            const newIngredients = [...state.ingredients, payload];
            // adds new ingredients to the copied list
            return {...state, ingredients: newIngredients};
        
        case ADD_INSTRUCTION:
            const newInstructions = [...state.instructions, payload];
            return {...state, instructons: newInstructions};

        case ADD_RECIPE:
            const {
                name,
                category,
                authorFirst,
                authorLast,
                ingredients,
                instructions           
            } = state;
            //build recipe object with values being stored by state
            const recipe = {
                name,
                category,
                authorFirst,
                authorLast,
                ingredients,
                instructions 
            }    
            //copy list of recipes
            const newRecipes = [...state.recipes, recipe];
            //add a new recipe value to recipe list
            return {...state, recipes: newRecipes };
        default:
        return state;
    }
}

export default createStore(reducer);