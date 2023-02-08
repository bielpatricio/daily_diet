import { SectionList } from 'react-native'
import { Container, Header, Logo, Title } from './styles'

import logoImg from '@assets/logo.png'
import { Avatar } from '@components/Avatar'
import { Percent } from '@components/Percent'
import { Button } from '@components/Button'
import { MealField } from '@components/MealField'
import { useMealHistory } from '../../hooks/useMealHistory'
import { ListEmpty } from '@components/ListEmpty'
import moment from 'moment'
import { useCallback, useState } from 'react'
import { MealsHistoryDTO } from 'src/dtos/MealsHistoryDTO'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

export function Home() {
  const navigation = useNavigation()

  function handleGoToStatistics() {
    navigation.navigate('statistics')
  }

  function handleGoToCreateAndEditionMeals() {
    navigation.navigate('createAndEditionMeals', { mealId: null })
  }

  function handleDetailsMeals(id: string) {
    console.log('details to go', id)
    navigation.navigate('details', { mealId: id })
  }

  const [mealsHistory, setMealsHistory] = useState<MealsHistoryDTO[]>([])
  const { percentFit, mealHistoryState } = useMealHistory()

  // function to create a view list for show a;ll meal in the state
  // this function create a new list witch the meal more recent are in the beginning
  function handleCreateHistoryMeals() {
    const mealsHistoryProvisory: MealsHistoryDTO[] = []

    mealHistoryState.forEach((meal) => {
      // check if alredy has a this day in the list
      const idxDate = mealsHistoryProvisory.findIndex(
        (mealTest) =>
          moment(mealTest.titleTime).format('DD.MM.YY') ===
          moment(meal.data).format('DD.MM.YY'),
      )

      if (idxDate === -1) {
        let idxMeal = 0
        mealsHistoryProvisory.map((mealMap, i) => {
          // get the last day after the new Day, so add in the list after that
          if (moment(meal.data).isBefore(mealMap.titleTime)) {
            idxMeal = i + 1
          }
          return idxMeal
        })
        if (idxMeal === -1) {
          mealsHistoryProvisory.splice(0, 0, {
            titleTime: moment(meal.data).format(),
            data: [meal],
          })
        } else {
          mealsHistoryProvisory.splice(idxMeal, 0, {
            titleTime: moment(meal.data).format(),
            data: [meal],
          })
        }
      } else {
        mealsHistoryProvisory[idxDate]?.data.unshift(meal)
      }
    })

    setMealsHistory(mealsHistoryProvisory)
  }

  useFocusEffect(
    useCallback(() => {
      handleCreateHistoryMeals()
    }, [mealHistoryState]),
  )

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <Avatar />
      </Header>
      <Percent onPress={handleGoToStatistics} percent={percentFit.percent} />
      <Button
        onPress={handleGoToCreateAndEditionMeals}
        icon={true}
        title="New Meal"
      />
      <SectionList
        sections={mealsHistory}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <MealField
              key={item.id}
              onPress={() => handleDetailsMeals(item.id)}
              item={item}
            />
          )
        }}
        renderSectionHeader={({ section }) => (
          <Title>{moment(section.titleTime).format('DD.MM.YY')}</Title>
        )}
        contentContainerStyle={
          mealsHistory.length === 0 && {
            flex: 1,
            justifyContent: 'center',
          }
        }
        ListEmptyComponent={() => (
          <ListEmpty message="Still don't has any meals registered." />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}
