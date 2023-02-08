import { Header } from '@components/Header'
import {
  Body,
  ButtonsField,
  ColorCircle,
  Container,
  InDietField,
  SubTitle,
  Text,
  TextInDietField,
  Title,
} from './styles'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { useMealHistory } from '@hooks/useMealHistory'
import { useCallback, useState } from 'react'
import { ProductItemDTO } from 'src/dtos/ProductItemDTO'
import moment from 'moment'
import { Button } from '@components/Button'
import { Alert } from '@components/Alert'

type RouteParams = {
  mealId: string
}

type MealSelectedDetailsType = {}

export function Details() {
  const route = useRoute()

  const { mealId } = route.params as RouteParams

  const navigation = useNavigation()

  const { fetchGetDetailMeallById, removeItem } = useMealHistory()

  const [mealSelectedDetails, setMealSelectedDetails] =
    useState<ProductItemDTO>()

  useFocusEffect(
    useCallback(() => {
      setMealSelectedDetails(fetchGetDetailMeallById(mealId))
    }, []),
  )

  function handleGoToCreateAndEditionMeals(id: string) {
    navigation.navigate('createAndEditionMeals', {
      mealId: id,
    })
  }

  function handleGoHome() {
    navigation.navigate('home')
  }

  const [openAlert, setOpenAlert] = useState(false)

  async function handleRemoveItem(id: string) {
    setOpenAlert(false)
    await removeItem(id)
    handleGoHome()
  }

  return (
    <Container>
      {openAlert && (
        <Alert
          buttonOk={() => handleRemoveItem(mealSelectedDetails!.id)}
          buttonCancel={() => setOpenAlert(false)}
          title="Do you really want to delete all the meal history?"
        />
      )}
      <Header title={`Meal`} detail={mealSelectedDetails?.inDiet} />
      <Body>
        <Title>{mealSelectedDetails?.name}</Title>
        <Text>{mealSelectedDetails?.description}</Text>

        <SubTitle>Date and Time</SubTitle>
        <Text>
          {moment(mealSelectedDetails?.data).format(`DD/MM/yyyy hh:mm a`)}
        </Text>

        <InDietField>
          <ColorCircle inDiet={!!mealSelectedDetails?.inDiet}></ColorCircle>
          <TextInDietField>
            {mealSelectedDetails?.inDiet
              ? 'Following the diet!'
              : 'A litle mistake!'}
          </TextInDietField>
        </InDietField>

        <ButtonsField>
          <Button
            color={mealSelectedDetails?.inDiet === false ? 'red' : 'teal'}
            onPress={() =>
              handleGoToCreateAndEditionMeals(mealSelectedDetails!.id)
            }
            title="Edit Meal"
          />
          <Button
            color={'off'}
            onPress={() => setOpenAlert(true)}
            title="Delete Meal"
          />
        </ButtonsField>
      </Body>
    </Container>
  )
}
