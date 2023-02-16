export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            stats: {
                mealsAmount: number,
                offDietMealsAmount: number,
                onDietMealsAmount: number,
                sequenceOfMealsOnDiet: number,
                onDietMealsPercentage: string
            };
            form: {
                mealId: string,
                mealDate: string,
            } | undefined;
            meal: {
                mealId: string,
                date: string,
            };
            feedback: {
                onDiet: boolean
            }

        }
    }
}