import { Controller, useForm } from 'react-hook-form'
import {
  Body,
  ButtonDate,
  ButtonForm,
  CircleColor,
  ColumnLeft,
  ColumnRight,
  Container,
  Form,
  Line,
  SubTitle,
  Text,
  TextError,
} from './styles'
import { z } from 'zod'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { useMealHistory } from '@hooks/useMealHistory'
import { useCallback, useState } from 'react'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { Header } from '@components/Header'
import moment from 'moment'
import DateTimePicker from '@react-native-community/datetimepicker'
import { zodResolver } from '@hookform/resolvers/zod'
import { MealSavedWithSuccess } from '../../components/MealSavedWithSuccess/index'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'
import { ProductItemDTO } from 'src/dtos/ProductItemDTO'

const newMealFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be 3 or more characters long' }),
  description: z
    .string()
    .min(3, { message: 'Description must be 3 or more characters long' }),
  date: z.date({
    required_error: 'Please select a date and time',
    invalid_type_error: "That's not a date!",
  }),
  hour: z.date(),
  inDiet: z.boolean({
    required_error: 'This field is required',
  }),
})

type newMealFormSchemaType = z.infer<typeof newMealFormSchema>

type RouteParams = {
  mealId: string
}

export function CreateAndEditionMeals() {
  const [buttonFormSelected, setButtonFormSelected] = useState<boolean>()

  const [saved, setSaved] = useState(false)
  const [openDate, setOpenDate] = useState(false)
  const [openHour, setOpenHour] = useState(false)

  const navigation = useNavigation()

  function handleGoBackHome() {
    navigation.navigate('home')
  }

  const route = useRoute()

  const { mealId } = route.params as RouteParams

  const { addNewItem, fetchGetDetailMeallById } = useMealHistory()

  let mealSelectedDetails: ProductItemDTO = fetchGetDetailMeallById(mealId)

  // const [mealSelectedDetails, setMealSelectedDetails] =
  //   useState<ProductItemDTO>()

  useFocusEffect(
    useCallback(() => {
      if (mealId !== null) {
        mealSelectedDetails = fetchGetDetailMeallById(mealId)
        setButtonFormSelected(mealSelectedDetails?.inDiet)
      }
    }, []),
  )

  const {
    control,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm<newMealFormSchemaType>({
    resolver: zodResolver(newMealFormSchema),
    defaultValues: {
      name: mealSelectedDetails?.name || '',
      description: mealSelectedDetails?.description || '',
      hour:
        mealSelectedDetails.data !== undefined
          ? new Date(mealSelectedDetails.data)
          : new Date(),
      date:
        mealSelectedDetails.data !== undefined
          ? new Date(mealSelectedDetails.data)
          : new Date(),
      inDiet: mealSelectedDetails?.inDiet || undefined,
    },
  })

  async function handleAddNewMeal(data: newMealFormSchemaType) {
    const { name, description, inDiet, date, hour } = data

    const newHour = Number(moment(hour).format('HH'))
    const newMinutes = Number(moment(hour).format('mm'))

    addNewItem({
      name,
      description,
      data: moment(date)
        .set('hour', newHour)
        .set('minute', newMinutes)
        .format(),
      id: uuidv4(),
      inDiet,
    })

    setSaved(true)
  }

  return (
    <Container>
      {saved ? (
        <Body>
          <MealSavedWithSuccess inDiet={buttonFormSelected === true} />
          <Button onPress={handleGoBackHome} title="Back to initial page" />
        </Body>
      ) : (
        <>
          <Header
            detail={mealId === null ? null : mealSelectedDetails?.inDiet}
            title={mealId !== null ? 'Edit Meal' : 'New Meal'}
          />
          <Body>
            <Form showsVerticalScrollIndicator={false}>
              <SubTitle>Name</SubTitle>
              <Controller
                control={control}
                name="name"
                render={({ field }) => {
                  return (
                    <Input
                      placeholder="Meals name"
                      value={field.value}
                      onChangeText={field.onChange}
                      errorMessage={errors.name?.message}
                    />
                  )
                }}
              />

              <SubTitle>Description</SubTitle>
              <Controller
                control={control}
                name="description"
                render={({ field }) => {
                  return (
                    <Input
                      placeholder="Meals description"
                      multiline={true}
                      numberOfLines={4}
                      textAlignVertical="top"
                      value={field.value}
                      onChangeText={field.onChange}
                      errorMessage={errors.description?.message}
                    />
                  )
                }}
              />

              <SubTitle>Is in your Diet?</SubTitle>
              <Controller
                control={control}
                name="inDiet"
                render={({ field }) => {
                  return (
                    <>
                      <Line>
                        <ColumnRight>
                          <ButtonForm
                            healthy={buttonFormSelected === true ? true : null}
                            onPress={() => {
                              setButtonFormSelected(true)
                              field.onChange(true)
                            }}
                          >
                            <CircleColor healthy={true}></CircleColor>
                            <Text>Yes</Text>
                          </ButtonForm>
                        </ColumnRight>
                        <ColumnLeft>
                          <ButtonForm
                            healthy={
                              buttonFormSelected === false ? false : null
                            }
                            onPress={() => {
                              setButtonFormSelected(false)
                              field.onChange(false)
                            }}
                          >
                            <CircleColor healthy={false}></CircleColor>
                            <Text>No</Text>
                          </ButtonForm>
                        </ColumnLeft>
                      </Line>
                      {errors.inDiet?.message !== null && (
                        <TextError>{errors.inDiet?.message}</TextError>
                      )}
                    </>
                  )
                }}
              />

              <Line>
                <ColumnRight>
                  <SubTitle>Data</SubTitle>
                  <Controller
                    control={control}
                    name="date"
                    render={({ field }) => {
                      return (
                        <>
                          <ButtonDate onPress={() => setOpenDate(true)}>
                            <Text>
                              {moment(field.value).format('DD/MM/yyyy')}
                            </Text>
                          </ButtonDate>
                          {openDate && (
                            <DateTimePicker
                              mode="date"
                              value={field.value}
                              onChange={(event, selectedDate) => {
                                console.log('field.value', field.value)
                                field.onChange(selectedDate)
                                setOpenDate(false)
                              }}
                            />
                          )}
                        </>
                      )
                    }}
                  />
                </ColumnRight>
                <ColumnLeft>
                  <SubTitle>Hour</SubTitle>
                  <Controller
                    control={control}
                    name="hour"
                    render={({ field }) => {
                      return (
                        <>
                          <ButtonDate onPress={() => setOpenHour(true)}>
                            <Text>{moment(field.value).format('HH:mm')}</Text>
                          </ButtonDate>
                          {openHour && (
                            <DateTimePicker
                              mode="time"
                              value={field.value}
                              is24Hour={true}
                              onChange={(event, selectedDate) => {
                                setOpenHour(false)
                                field.onChange(selectedDate)
                              }}
                            />
                          )}
                        </>
                      )
                    }}
                  />
                </ColumnLeft>
              </Line>
            </Form>
            <Button
              color={buttonFormSelected === false ? 'red' : 'teal'}
              onPress={handleSubmit(handleAddNewMeal)}
              title="Save Meal"
            />
          </Body>
        </>
      )}
    </Container>
  )
}
