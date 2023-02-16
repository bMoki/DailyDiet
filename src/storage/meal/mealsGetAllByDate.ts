import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION, MealType } from "../storageConfig";
import dayjs from "dayjs";

export async function MealsGetAllByDate(date: string) {
    try {
        const MealStorage = await AsyncStorage.getItem(`${MEAL_COLLECTION}-${date}`);

        const meals: MealType[] = MealStorage ? JSON.parse(MealStorage) : [];

        return meals;
    } catch (error) {
        throw error;
    }
}