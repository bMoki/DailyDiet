import { MealsGetAllByDate } from "./mealsGetAllByDate";

export async function MealGetById(mealId: string, date: string) {
    try {
        const meals = await MealsGetAllByDate(date);

        const meal = meals.find((meal => meal.id === mealId));

        if (!meal) {
            throw new Error('Meal not found');
        }

        return meal;
    } catch (error) {
        throw error;
    }
}