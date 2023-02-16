import AsyncStorage from "@react-native-async-storage/async-storage";
import { STATISTIC_COLLECTION, Statistic } from "../storageConfig";

export async function StatisticGetAll() {
    try {
        const storage = await AsyncStorage.getItem(STATISTIC_COLLECTION);

        const statistic: Statistic = storage ? JSON.parse(storage) : {
            mealsAmount: 0,
            offDietMealsAmount: 0,
            onDietMealsAmount: 0,
            sequenceOfMealsOnDiet: 0,
            onDietMealsPercentage: '0'
        } as Statistic;

        return statistic;
    } catch (error) {
        throw error;
    }
}