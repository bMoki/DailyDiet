export const MEAL_COLLECTION = '@daily-diet:meals';
export const DATE_COLLECTION = '@daily-diet:dates';
export const STATISTIC_COLLECTION = '@daily-diet:statistic';

export type MealType = {
    id: string,
    name: string,
    description: string,
    date: string,
    hour: Date,
    onDiet: boolean,
}

export type Statistic = {
    mealsAmount: number,
    offDietMealsAmount: number,
    onDietMealsAmount: number,
    sequenceOfMealsOnDiet: number,
    onDietMealsPercentage: string
}

