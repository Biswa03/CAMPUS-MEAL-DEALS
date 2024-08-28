
import { Utensils, UtensilsCrossed , Salad , Soup, CookingPot, Coffee, Sandwich  } from 'lucide-react';

// Monday
import Idli_Sambar from './Veg/Idli-Sambar.jpg';
import Paneer_Butter_Masala from './Veg/Paneer-Butter-Masala.jpg';
import Vegetable_Biryani from './Veg/Vegetable-Biryani.jpg';

// Tuesday
import Aloo_Paratha from './Veg/Aloo-Paratha.jpg';
import Chole_Bhature from './Veg/Chole-Bhature.jpg';
import Palak_Paneer from './Veg/Palak-Paneer.jpg';

// Wednesday
import Poha from './Veg/Poha.jpg';
import Rajma_Chawal from './Veg/Rajma-Chawal.jpg';
import Dal_Makhani from './Veg/Dal-Makhani.jpg';

// Thursday
import Masala_Dosa from './Veg/Masala-Dosa.png';
import Dal_Tadka from './Veg/Dal-Tadka.jpg';
import Aloo_Gobi from './Veg/Aloo-Gobi.jpg';

// Friday
import Upma from './Veg/Upma.jpg';
import Paneer_Tikka from './Veg/Paneer-Tikka.jpg';
import Matar_Paneer from './Veg/Matar-Paneer.jpg';

// Saturday
import Samosa from './Veg/Samosa.jpg';
import Veg_Kofta from './Veg/Veg-Kofta.jpg';
import Mushroom_Masala from './Veg/Mushroom-Masala.jpg';

// Sunday
import Dhokla from './Veg/Dhokla.jpg';
import Vegetable_Pulao from './Veg/Vegetable-Pulao.jpg';

// Non-Vegetarian Meals
import Chicken_Keema_Paratha from './Non-Veg/Chicken-Keema-Paratha.jpg';
import Butter_Chicken from './Non-Veg/Butter-Chicken.jpg';
import Chicken_Biryani from './Non-Veg/Chicken-Biryani.jpg';

import Egg_Bhurji from './Non-Veg/Egg-Bhurji.jpg';
import Fish_Curry from './Non-Veg/Fish-Curry.jpg';
import Mutton_Rogan_Josh from './Non-Veg/Mutton-Rogan-Josh.jpg';

import Chicken_Sandwich from './Non-Veg/Chicken-Sandwich.jpg';
import Prawn_Masala from './Non-Veg/Prawn-Masala.jpg';
import Chicken_Korma from './Non-Veg/Chicken-Korma.jpg';

import Egg_Dosa from './Non-Veg/Egg-Dosa.jpg';
import Chicken_Curry from './Non-Veg/Chicken-Chettinad.jpg';
import Fish_Fry from './Non-Veg/Fish-Fry.jpg';

import Chicken_Omelette from './Non-Veg/Chicken-Omelette.jpg';
import Mutton_Biryani from './Non-Veg/Mutton-Biryani.jpg';
import Chicken_Tikka_Masala from './Non-Veg/Chicken-Tikka-Masala.jpg';

import Egg_Paratha from './Non-Veg/Egg-Paratha.jpg';
import Chicken_Chettinad from './Non-Veg/Chicken-Chettinad.jpg';

import Chicken_Hyderabadi from './Non-Veg/Chicken-Hyderabadi.jpg';
import Mutton_Curry from './Non-Veg/Mutton-Curry.jpg';
import Egg_Curry from './Non-Veg/Egg-Curry.jpg';



export const couponPrice = {
    breakfast: 50,
    lunch: 120,
    dinner: 80,
}





export const mealsForWeek = {
    vegetarian: [
        {
            day: "Monday",
            icon: <Utensils />,
            meals: {
                breakfast: { name: "Idli Sambar", image: Idli_Sambar },
                lunch: { name: "Paneer Butter Masala", image: Paneer_Butter_Masala },
                dinner: { name: "Vegetable Biryani", image: Vegetable_Biryani },
            }
        },
        {
            day: "Tuesday",
            icon: <UtensilsCrossed />,
            meals: {
                breakfast: { name: "Aloo Paratha", image: Aloo_Paratha },
                lunch: { name: "Chole Bhature", image: Chole_Bhature },
                dinner: { name: "Palak Paneer", image: Palak_Paneer },
            }
        },
        {
            day: "Wednesday",
            icon: <Salad />,
            meals: {
                breakfast: { name: "Poha", image: Poha },
                lunch: { name: "Rajma Chawal", image: Rajma_Chawal },
                dinner: { name: "Dal Makhani", image: Dal_Makhani },
            }
        },
        {
            day: "Thursday",
            icon: <Soup />,
            meals: {
                breakfast: { name: "Masala Dosa", image: Masala_Dosa },
                lunch: { name: "Dal Tadka", image: Dal_Tadka },
                dinner: { name: "Aloo Gobi", image: Aloo_Gobi },
            }
        },
        {
            day: "Friday",
            icon: <CookingPot />,
            meals: {
                breakfast: { name: "Upma", image: Upma },
                lunch: { name: "Paneer Tikka", image: Paneer_Tikka },
                dinner: { name: "Matar Paneer", image: Matar_Paneer },
            }
        },
        {
            day: "Saturday",
            icon: <Sandwich />,
            meals: {
                breakfast: { name: "Samosa", image: Samosa },
                lunch: { name: "Veg Kofta", image: Veg_Kofta },
                dinner: { name: "Mushroom Masala", image: Mushroom_Masala },
            }
        },
        {
            day: "Sunday",
            icon: <Coffee />,
            meals: {
                breakfast: { name: "Dhokla", image: Dhokla },
                lunch: { name: "Vegetable Pulao", image: Vegetable_Pulao },
                dinner: { name: "Dal Makhani", image: Dal_Makhani },
            }
        },
    ],
    nonVegetarian: [
        {
            day: "Monday",
            icon: <Utensils />,
            meals: {
                breakfast: { name: "Chicken Keema Paratha", image: Chicken_Keema_Paratha },
                lunch: { name: "Butter Chicken", image: Butter_Chicken },
                dinner: { name: "Chicken Biryani", image: Chicken_Biryani },
            }
        },
        {
            day: "Tuesday",
            icon: <UtensilsCrossed />,
            meals: {
                breakfast: { name: "Egg Bhurji", image: Egg_Bhurji },
                lunch: { name: "Fish Curry", image: Fish_Curry },
                dinner: { name: "Mutton Rogan Josh", image: Mutton_Rogan_Josh },
            }
        },
        {
            day: "Wednesday",
            icon: <Salad />,
            meals: {
                breakfast: { name: "Chicken Sandwich", image: Chicken_Sandwich },
                lunch: { name: "Prawn Masala", image: Prawn_Masala },
                dinner: { name: "Chicken Korma", image: Chicken_Korma },
            }
        },
        {
            day: "Thursday",
            icon: <Soup />,
            meals: {
                breakfast: { name: "Egg Dosa", image: Egg_Dosa },
                lunch: { name: "Chicken Curry", image: Chicken_Curry },
                dinner: { name: "Fish Fry", image: Fish_Fry },
            }
        },
        {
            day: "Friday",
            icon: <CookingPot />,
            meals: {
                breakfast: { name: "Chicken Omelette", image: Chicken_Omelette },
                lunch: { name: "Mutton Biryani", image: Mutton_Biryani },
                dinner: { name: "Chicken Tikka Masala", image: Chicken_Tikka_Masala },
            }
        },
        {
            day: "Saturday",
            icon: <Sandwich />,
            meals: {
                breakfast: { name: "Egg Paratha", image: Egg_Paratha },
                lunch: { name: "Chicken Chettinad", image: Chicken_Chettinad },
                dinner: { name: "Fish Curry", image: Fish_Curry },
            }
        },
        {
            day: "Sunday",
            icon: <Coffee />,
            meals: {
                breakfast: { name: "Chicken Hyderabadi", image: Chicken_Hyderabadi },
                lunch: { name: "Mutton Curry", image: Mutton_Curry },
                dinner: { name: "Egg Curry", image: Egg_Curry },
            }
        },
    ]
};
