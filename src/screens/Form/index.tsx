import 'react-native-get-random-values'
import { useCallback, useState } from "react";
import { View, KeyboardAvoidingView, Alert } from "react-native";
import { nanoid } from "nanoid";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import { Container, Divider, Label, Row } from "./style";
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native'

import { Button, Header, Input, Loading, RadioButton } from "@components";
import { MealCreate } from '@storage/meal/mealCreate';
import { MealGetById } from '@storage/meal/mealGetById';
import { mealRemoveById } from '@storage/meal/mealRemoveById';

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(customParseFormat);
dayjs.tz.setDefault("America/Sao_Paulo");

type selectedOptions = 'onDiet' | 'offDiet';
type RouteParams = {
    mealId?: string;
    mealDate?: string;
}

export function Form() {
    const route = useRoute();
    const params = route.params as RouteParams;


    const [selected, setSelected] = useState<selectedOptions>('onDiet');
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
    const [date, setDate] = useState(dayjs().format('DD/MM/YYYY'));
    const [hour, setHour] = useState(dayjs().format('HH:mm'));

    const [isLoading, setIsLoading] = useState(false);

    const { navigate } = useNavigation();



    function handleSelect(option: selectedOptions) {
        setSelected(option);
    }

    function verifyFields() {
        if (name.trim().length === 0) {
            throw new Error('Invalid name')
        }

        if (!dayjs(date + '-' + hour, 'DD/MM/YYYY-HH:mm').isValid()) {
            throw new Error('Invalid date or hour')
        }
    }

    async function handleNewMeal() {
        try {
            verifyFields();
            const newMeal = {
                id: nanoid(),
                name,
                description,
                date: date,
                hour: dayjs(date + '-' + hour, 'DD/MM/YYYY-HH:mm').toDate(),
                onDiet: selected === 'onDiet' ? true : false,
            }

            await MealCreate(newMeal);
            if (params?.mealDate && params?.mealId) {
                await mealRemoveById(params.mealId, params.mealDate);
            } else {
                return navigate('feedback', { onDiet: newMeal.onDiet });
            }
            return navigate('home');


        } catch (error) {
            Alert.alert('Nova refeição', 'Não foi possível criar uma nova refeição.');
            console.log(error);
        }
    }

    async function fetchMeal(mealId: string, mealDate: string) {
        try {
            setIsLoading(true);

            const res = await MealGetById(mealId, mealDate);

            setName(res.name);
            setDescription(res.description);
            setDate(res.date);
            setHour(dayjs(res.hour).format('HH:mm'));
            setSelected(res.onDiet ? 'onDiet' : 'offDiet');

        } catch (error) {
            Alert.alert('Refeição', 'Não foi possível carregar a refeição')
        } finally {
            setIsLoading(false);
        }
    }

    useFocusEffect(useCallback(() => {
        if (params?.mealDate && params?.mealId) {
            fetchMeal(params.mealId, params.mealDate);
        }

    }, [params]))

    return (
        <>

            <Header title={params ? 'Editar refeição' : 'Nova refeição'} />
            <Container>
                <KeyboardAvoidingView
                    style={{ justifyContent: 'space-between', flex: 1 }}
                    behavior="height"
                >

                    {isLoading && params ? <Loading /> :
                        <View>

                            <Input
                                label="Nome"
                                onChangeText={setName}
                                value={name}
                            />
                            <Input
                                textArea
                                label="Descrição"
                                onChangeText={setDescription}
                                value={description}
                            />

                            <Row>
                                <Input
                                    small
                                    label="Data"
                                    onChangeText={setDate}
                                    value={date}
                                />
                                <Divider size={24} />
                                <Input
                                    small
                                    label="Hora"
                                    onChangeText={setHour}
                                    value={hour}
                                />
                            </Row>

                            <Label>Está dentro da dieta?</Label>
                            <Row style={{ marginBottom: 'auto' }}>
                                <RadioButton
                                    variant="YES"
                                    selected={selected === 'onDiet'}
                                    onPress={() => handleSelect('onDiet')}
                                />
                                <Divider size={12} />
                                <RadioButton
                                    variant="NO"
                                    selected={selected === 'offDiet'}
                                    onPress={() => handleSelect('offDiet')}
                                />
                            </Row>

                        </View>
                    }

                    <Button
                        title={params ? "Salvar alterações" : "Cadastrar refeição"}
                        onPress={handleNewMeal}
                    />




                </KeyboardAvoidingView>
            </Container>
        </>
    )
}