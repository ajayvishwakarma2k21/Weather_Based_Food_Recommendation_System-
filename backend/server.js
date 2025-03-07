const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;


app.use(cors(
  {
    origin:["https://cloudy-bites-eight.vercel.app/"],
    methods:["POST", "GET"],
    credentials:true
  }
));
app.use(express.json());

app.get("/" (req, res) =>{
  res.json("hello");
}
// Weather API key (from .env file)
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

// Endpoint to get food recommendations
app.post('/api/recommend', async (req, res) => {
  const { location } = req.body;

  try {
    // Fetch weather data
    const weatherData = await fetchWeatherData(location);
    const temperature = weatherData.main.temp - 273.15; // Convert Kelvin to Celsius

    // Get food recommendations based on temperature
    const recommendations = getFoodRecommendations(temperature);

    res.json({ recommendations });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch recommendations' });
  }
});


// Function to fetch weather data
const fetchWeatherData = async (location) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WEATHER_API_KEY}`;
  const response = await axios.get(url);
  return response.data;
};

// Enhanced rule-based logic for food recommendations
const getFoodRecommendations = (temperature) => {
  if (temperature > 40) {
    return [
      {
        name: 'Cold Watermelon Slices',
        description: 'A refreshing and hydrating fruit rich in vitamins and antioxidants.',
        calories: 30,
        ingredients: ['Watermelon'],
        image: 'https://images.pexels.com/photos/7543206/pexels-photo-7543206.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        name: 'Buttermilk (Chaas)',
        description: 'A cooling probiotic drink that aids digestion and keeps you hydrated.',
        calories: 50,
        ingredients: ['Curd', 'Water', 'Cumin', 'Salt'],
        image: 'https://images.pexels.com/photos/15522898/pexels-photo-15522898/free-photo-of-two-cups-of-milk-with-straws-on-a-counter.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        name: 'Cucumber & Mint Salad',
        description: 'A light and hydrating salad packed with freshness.',
        calories: 40,
        ingredients: ['Cucumber', 'Mint', 'Lemon', 'Salt'],
        image: 'https://images.pexels.com/photos/16854493/pexels-photo-16854493/free-photo-of-fresh-salad-with-mint.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        name: 'Tender Coconut Water',
        description: 'A natural electrolyte-rich drink that keeps the body cool.',
        calories: 20,
        ingredients: ['Tender Coconut Water'],
        image: 'https://images.pexels.com/photos/12954736/pexels-photo-12954736.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
      },
      {
        name: 'Mango Lassi',
        description: 'A delicious yogurt-based drink providing hydration and energy.',
        calories: 150,
        ingredients: ['Mango', 'Yogurt', 'Honey'],
        image: 'https://images.pexels.com/photos/14509267/pexels-photo-14509267.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        name: 'Poha with Nuts',
        description: 'A light and nutritious breakfast made with flattened rice, peanuts, and spices.',
        calories: 180,
        ingredients: ['Flattened Rice', 'Peanuts', 'Turmeric', 'Green Chilies'],
        image: 'https://images.pexels.com/photos/30769669/pexels-photo-30769669/free-photo-of-traditional-indian-poha-breakfast-dish.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        name: 'Vegetable Khichdi',
        description: 'A wholesome lunch option with rice, lentils, and vegetables.',
        calories: 250,
        ingredients: ['Rice', 'Moong Dal', 'Carrots', 'Peas', 'Turmeric'],
        image: 'https://images.pexels.com/photos/6363501/pexels-photo-6363501.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        name: 'Cucumber Raita with Rice',
        description: 'A cooling yogurt-based side dish served with light rice.',
        calories: 120,
        ingredients: ['Curd', 'Cucumber', 'Mint', 'Salt'],
        image: 'https://i0.wp.com/lovelaughmirch.com/wp-content/uploads/2021/05/Carrot-and-Cucumber-Raita-4.jpg?resize=945%2C1024&ssl=1'
      },
      {
        name: 'Lauki (Bottle Gourd) Sabzi with Chapati',
        description: 'A light and hydrating dinner with fiber-rich vegetables.',
        calories: 200,
        ingredients: ['Bottle Gourd', 'Tomato', 'Cumin', 'Chili Powder'],
        image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/lauki-ki-sabji-recipe.jpg'
      }
    ];
} else if (temperature > 30 && temperature <= 40) {
  return [
    {
      name: 'Fruit Salad',
      description: 'A mix of hydrating fruits like melon, papaya, and citrus.',
      calories: 120,
      ingredients: ['Watermelon', 'Papaya', 'Orange', 'Mint'],
      image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Cold Sandwiches',
      description: 'A whole wheat sandwich with fresh veggies and light dressing.',
      calories: 250,
      ingredients: ['Whole Wheat Bread', 'Lettuce', 'Tomato', 'Cucumber', 'Hummus'],
      image: 'https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Iced Green Tea',
      description: 'A refreshing antioxidant-rich tea.',
      calories: 20,
      ingredients: ['Green Tea', 'Ice', 'Lemon'],
      image: 'https://images.pexels.com/photos/3090274/pexels-photo-3090274.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Oats with Yogurt & Fruits',
      description: 'A nutritious and cooling breakfast option.',
      calories: 200,
      ingredients: ['Oats', 'Yogurt', 'Banana', 'Berries'],
      image: 'https://images.pexels.com/photos/1590137/pexels-photo-1590137.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Lemon Rice with Curd',
      description: 'A light and tangy rice dish, best paired with curd.',
      calories: 220,
      ingredients: ['Rice', 'Lemon', 'Mustard Seeds', 'Curd'],
      image: 'https://images.pexels.com/photos/6544243/pexels-photo-6544243.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Vegetable Pulao',
      description: 'A mild and nutritious rice dish cooked with seasonal veggies.',
      calories: 300,
      ingredients: ['Rice', 'Carrots', 'Peas', 'Beans'],
      image: 'https://images.pexels.com/photos/30965501/pexels-photo-30965501/free-photo-of-delicious-shrimp-and-vegetable-casserole-on-wooden-board.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Masoor Dal with Chapati',
      description: 'A protein-packed dal served with whole wheat chapati.',
      calories: 250,
      ingredients: ['Masoor Dal', 'Tomato', 'Cumin', 'Ginger'],
      image: 'https://www.spicingyourlife.com/wp-content/uploads/2012/08/Masoor-Dal-Tadka.jpg'
    }
  ];
}
else if (temperature > 20 && temperature <= 30) {
  return [
    {
      name: 'Grilled Paneer Wrap',
      description: 'A healthy wrap filled with grilled paneer and veggies.',
      calories: 300,
      ingredients: ['Paneer', 'Whole Wheat Wrap', 'Lettuce', 'Tomato'],
      image: 'https://images.pexels.com/photos/15481448/pexels-photo-15481448/free-photo-of-delicious-homemade-lunch-on-plate-on-table.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Fruit Chaat',
      description: 'A tangy and refreshing fruit salad.',
      calories: 150,
      ingredients: ['Apple', 'Banana', 'Pomegranate', 'Chaat Masala'],
      image: 'https://images.pexels.com/photos/8364102/pexels-photo-8364102.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      name: 'Moong Dal Cheela',
      description: 'A protein-rich breakfast option made from lentil batter.',
      calories: 220,
      ingredients: ['Moong Dal', 'Cumin', 'Green Chilies'],
      image: 'https://www.indianveggiedelight.com/wp-content/uploads/2023/03/moong-dal-chilla.jpg'
    },
    {
      name: 'Vegetable Stir Fry with Brown Rice',
      description: 'A balanced meal rich in fiber and nutrients.',
      calories: 350,
      ingredients: ['Broccoli', 'Carrots', 'Brown Rice', 'Soy Sauce'],
      image: 'https://simpleveganblog.com/wp-content/uploads/2015/11/Brown-rice-stir-fry-with-vegetables.jpg'
    }
  ];
}
else if (temperature > 10 && temperature <= 20) {
  return [
    {
      name: 'Porridge with Nuts',
      description: 'A warm and nutritious breakfast option.',
      calories: 250,
      ingredients: ['Oats', 'Milk', 'Almonds', 'Honey'],
      image: 'https://images.pexels.com/photos/6072374/pexels-photo-6072374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Vegetable Soup',
      description: 'A hearty and warming soup for lunch.',
      calories: 180,
      ingredients: ['Carrots', 'Beans', 'Tomato', 'Pepper'],
      image: 'https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Chapati with Dal',
      description: 'A balanced meal rich in protein and fiber.',
      calories: 300,
      ingredients: ['Whole Wheat Flour', 'Lentils', 'Turmeric'],
      image: 'https://images.pexels.com/photos/25440306/pexels-photo-25440306/free-photo-of-silver-plate-with-ingredients-for-traditional-dish.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Masala Tea',
      description: 'A spiced tea to keep you warm and refreshed.',
      calories: 50,
      ingredients: ['Tea Leaves', 'Milk', 'Spices'],
      image: 'https://images.pexels.com/photos/15023065/pexels-photo-15023065/free-photo-of-close-up-shot-of-masala-chai-tea.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];
}
else if (temperature > 0 && temperature <= 10) {
    return [
      {
      name: 'Porridge with Berries',
      description: 'A warm and nutritious breakfast option.',
      calories: 250,
      ingredients: ['Oats', 'Milk', 'Berries', 'Honey'],
      image: 'https://www.healthyfood.com/wp-content/uploads/2023/02/Oat-Bran-porridge.jpg'
      },
      {
      name: 'Grilled Cheese Sandwich',
      description: 'A comforting and warm lunch option.',
      calories: 300,
      ingredients: ['Bread', 'Cheese', 'Butter'],
      image: 'https://natashaskitchen.com/wp-content/uploads/2021/08/Grilled-Cheese-Sandwich-3.jpg'
      },
      {
      name: 'Tomato Soup',
      description: 'A warm and hearty soup for lunch or dinner.',
      calories: 150,
      ingredients: ['Tomatoes', 'Onion', 'Garlic', 'Basil'],
      image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
      name: 'Chicken Stew',
      description: 'A rich and filling dinner option.',
      calories: 350,
      ingredients: ['Chicken', 'Potatoes', 'Carrots', 'Celery'],
      image: 'https://images.pexels.com/photos/6916860/pexels-photo-6916860.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
      name: 'Hot Chocolate',
      description: 'A sweet and warm drink to keep you cozy.',
      calories: 250,
      ingredients: ['Milk', 'Cocoa', 'Sugar'],
      image: 'https://images.pexels.com/photos/3551717/pexels-photo-3551717.png?auto=compress&cs=tinysrgb&w=600'
      }
    ];
  } else if (temperature > -5 && temperature <= 0) {
    return [
      {
        name: 'Hot Soup',
        description: 'A warm and comforting meal.',
        calories: 200,
        ingredients: ['Broth', 'Vegetables', 'Chicken'],
        image: 'https://images.pexels.com/photos/4103375/pexels-photo-4103375.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        name: 'Warm Stew',
        description: 'A rich and filling meal.',
        calories: 350,
        ingredients: ['Beef', 'Potatoes', 'Carrots'],
        image: 'https://images.pexels.com/photos/3186736/pexels-photo-3186736.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        name: 'Hot Coffee',
        description: 'A warm drink to keep you cozy.',
        calories: 30,
        ingredients: ['Coffee Beans', 'Water'],
        image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
    ];
  } else {
    return [
      {
        name: 'Hot Chocolate',
        description: 'A sweet and warm drink.',
        calories: 250,
        ingredients: ['Milk', 'Cocoa', 'Sugar'],
        image: 'https://images.pexels.com/photos/3551717/pexels-photo-3551717.png?auto=compress&cs=tinysrgb&w=600'
      },
      {
        name: 'Spicy Curry',
        description: 'A hot and flavorful meal.',
        calories: 400,
        ingredients: ['Chicken', 'Spices', 'Rice'],
        image: 'https://images.pexels.com/photos/9880715/pexels-photo-9880715.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        name: 'Warm Porridge',
        description: 'A hearty and filling breakfast.',
        calories: 300,
        ingredients: ['Oats', 'Milk', 'Honey'],
        image: 'https://images.pexels.com/photos/15820609/pexels-photo-15820609/free-photo-of-porridge-for-breakfast.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
    ];
  }
};

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
