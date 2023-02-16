import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION, MealType } from "../storageConfig";
import { DateGetAll } from "../date/dateGetAll";
import { MealsGetAllByDate } from "./mealsGetAllByDate";
import { DateCreate } from "../date/dateCreate";
import { UpdateStatistic } from "@storage/statistic/updateStatistic";



export async function MealCreate(newMeal: MealType) {
    try {
        const storagedDates = await DateGetAll();

        const dateExists = storagedDates.includes(newMeal.date);

        if (!dateExists) {
            await DateCreate(newMeal.date);
        }

        const storagedMeals = await MealsGetAllByDate(newMeal.date);
        const meals = [...storagedMeals, newMeal];

        const orderedMeals = meals.sort(
            (meal1, meal2) =>
                new Date(meal2.hour).getTime() - new Date(meal1.hour).getTime()
        );


        const storage = JSON.stringify(orderedMeals);
        await AsyncStorage.setItem(`${MEAL_COLLECTION}-${newMeal.date}`, storage);
        await UpdateStatistic();

    } catch (error) {
        throw error;
    }
}