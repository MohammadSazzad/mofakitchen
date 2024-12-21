# Mofa's Kitchen Buddy API Documentation

## Introduction
Welcome to the Mofa's Kitchen Buddy API documentation. This API allows you to interact with the Mofa's Kitchen Buddy application programmatically.

## Base URL
```
https://api.mofaskitchenbuddy.com/v1
```

## Authentication
All endpoints require authentication using an API key. Include the API key in the `Authorization` header:
```
Authorization: Bearer YOUR_API_KEY
```

## Endpoints

### 1. Get Recipes
Retrieve a list of recipes.

**URL:** `/recipes`

**Method:** `GET`

**Headers:**
```
Authorization: Bearer YOUR_API_KEY
```

**Response:**
```json
[
    {
        "id": "1",
        "name": "Spaghetti Carbonara",
        "ingredients": ["spaghetti", "eggs", "parmesan cheese", "bacon"],
        "instructions": "Boil spaghetti. Cook bacon. Mix eggs and cheese. Combine all."
    },
    ...
]
```

### 2. Get Recipe Details
Retrieve detailed information about a specific recipe.

**URL:** `/recipes/{id}`

**Method:** `GET`

**Headers:**
```
Authorization: Bearer YOUR_API_KEY
```

**Response:**
```json
{
    "id": "1",
    "name": "Spaghetti Carbonara",
    "ingredients": ["spaghetti", "eggs", "parmesan cheese", "bacon"],
    "instructions": "Boil spaghetti. Cook bacon. Mix eggs and cheese. Combine all.",
    "nutrition": {
        "calories": 400,
        "protein": 20g,
        "fat": 15g,
        "carbs": 50g
    }
}
```

### 3. Add a New Recipe
Create a new recipe.

**URL:** `/recipes`

**Method:** `POST`

**Headers:**
```
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
```

**Body:**
```json
{
    "name": "New Recipe",
    "ingredients": ["ingredient1", "ingredient2"],
    "instructions": "Step by step instructions."
}
```

**Response:**
```json
{
    "id": "2",
    "name": "New Recipe",
    "ingredients": ["ingredient1", "ingredient2"],
    "instructions": "Step by step instructions."
}
```

### 4. Update a Recipe
Update an existing recipe.

**URL:** `/recipes/{id}`

**Method:** `PUT`

**Headers:**
```
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json
```

**Body:**
```json
{
    "name": "Updated Recipe",
    "ingredients": ["ingredient1", "ingredient2"],
    "instructions": "Updated instructions."
}
```

**Response:**
```json
{
    "id": "2",
    "name": "Updated Recipe",
    "ingredients": ["ingredient1", "ingredient2"],
    "instructions": "Updated instructions."
}
```

### 5. Delete a Recipe
Delete a recipe.

**URL:** `/recipes/{id}`

**Method:** `DELETE`

**Headers:**
```
Authorization: Bearer YOUR_API_KEY
```

**Response:**
```json
{
    "message": "Recipe deleted successfully."
}
```

## Error Handling
All error responses will include a status code and a message explaining the error.

**Example Error Response:**
```json
{
    "status": 401,
    "message": "Unauthorized. Invalid API key."
}
```

## Conclusion
This documentation provides an overview of the available endpoints for the Mofa's Kitchen Buddy API. For further assistance, please contact our support team.
