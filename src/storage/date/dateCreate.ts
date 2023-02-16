import AsyncStorage from "@react-native-async-storage/async-storage";
import { DATE_COLLECTION } from "../storageConfig";
import { DateGetAll } from "./dateGetAll";
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat);

export async function DateCreate(newDate: string) {
    try {
        const storagedDates = await DateGetAll();
        const dateExists = storagedDates.includes(newDate);
        if (!dateExists) {
            const dates = [...storagedDates, newDate];

            const sortedDates = dates.sort(
                (date1, date2) =>
                    dayjs(date2, 'DD/MM/YYYY').toDate().getTime() - dayjs(date1, 'DD/MM/YYYY').toDate().getTime()
            );

            const storage = JSON.stringify(sortedDates);

            await AsyncStorage.setItem(DATE_COLLECTION, storage);
        }



    } catch (error) {
        throw error;
    }
}