import { FlatList, Text } from 'react-native'
import {
  Container,
  DataText,
  Header,
  HistoryMeals,
  Logo,
  Title,
} from './styles'

import logoImg from '@assets/logo.png'
import { Avatar } from '@components/Avatar'
import { Percent } from '@components/Percent'
import { Button } from '@components/Button'
import { MealField } from '@components/MealField'
import { useMealHistory } from '../../hooks/useMealHistory'
import { ListEmpty } from '@components/ListEmpity'
import { ProductItem } from '@reducers/MealHistory/reducer'
import moment from 'moment'

export function Home() {
  const { items } = useMealHistory()
  // const meals: ProductItem[] = items
  console.log('items ==========>', items)
  const hour = moment().hour()
  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <Avatar />
      </Header>
      <Percent percent={23.56} />
      <Button icon={true} title="New Meal" />
      <HistoryMeals>
        <FlatList // substituir o map -> ele renderiza apenas os elementos que cabem na tela
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <>
              <DataText>{moment().format('DD.MM.YY')}</DataText>
              <MealField
                title={item.name}
                hour={`${moment(item.data).hours()}:${moment(
                  item.data,
                ).minutes()}`}
                // handleRemoveParticipant={handleRemoveParticipant}
                key={item.id}
              />
            </>
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <ListEmpty message="Ainda nao possui participantes na lista" />
          )}
          contentContainerStyle={[
            { paddingBottom: 100 },
            items.length === 0 && { flex: 1 },
          ]}
        />
      </HistoryMeals>
    </Container>
  )
}
