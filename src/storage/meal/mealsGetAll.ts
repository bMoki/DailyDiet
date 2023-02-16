import dayjs from "dayjs";
import { DateGetAll } from "../date/dateGetAll";
import { MealsGetAllByDate } from "./mealsGetAllByDate";

export async function MealGetAll() {
    try {
        const dates = await DateGetAll();

        const res = dates.map(async (date) => {

            const mealsByDate = await MealsGetAllByDate(date);
            return {
                title: date,
                data: mealsByDate.map((meal) => {
                    return {
                        ...meal,
                        date,
                        hour: dayjs(meal.hour).format('HH:mm')
                    }
                })
            }

        })

        const allMeals = await Promise.all(res);

        return allMeals;

    } catch (error) {
        throw error;
    }
}