import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";
import { MealsGetAllByDate } from "./mealsGetAllByDate";
import { dateRemove } from "../date/dateRemove";
import dayjs from "dayjs";
import { UpdateStatistic } from "@storage/statistic/UpdateStatistic";

export async function mealRemoveById(mealDeletedId: string, date: string) {
    try {
        const storagedMeals = await MealsGetAllByDate(date);
        const filtered = storagedMeals.filter(meal => meal.id !== mealDeletedId);

        if (filtered.length === 0) {
            await dateRemove(date);
        } else {
            const meals = JSON.stringify(filtered);

            await AsyncStorage.setItem(`${MEAL_COLLECTION}-${date}`, meals);
        }

        await UpdateStatistic();

    } catch (error) {
        throw error;
    }
}