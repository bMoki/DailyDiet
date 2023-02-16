import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealGetAll } from "@storage/meal/mealsGetAll";
import { STATISTIC_COLLECTION } from "@storage/storageConfig";


export async function UpdateStatistic() {
    const res = await MealGetAll();

    let mealsAmount = 0;
    let offDietMealsAmount = 0;
    let onDietMealsAmount = 0;
    let sequenceOfMealsOnDiet = 0;


    res.reverse().map(day => {
        day.data.reverse().map(meal => {
            mealsAmount++;

            if (meal.onDiet) {
                onDietMealsAmount++;
                sequenceOfMealsOnDiet++;
            } else {
                offDietMealsAmount++;
                sequenceOfMealsOnDiet = 0;
            }
        })
    });

    const onDietMealsPercentage = ((onDietMealsAmount * 100) / mealsAmount).toFixed(2).replace('.', ',');

    const statistic = {
        mealsAmount,
        offDietMealsAmount,
        onDietMealsAmount,
        sequenceOfMealsOnDiet,
        onDietMealsPercentage
    }

    await AsyncStorage.setItem(STATISTIC_COLLECTION, JSON.stringify(statistic));

}