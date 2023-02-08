import { TouchableOpacityProps } from 'react-native'
import { ColorCircle, Container, DataText, Title } from './styles'
import { ProductItemDTO } from 'src/dtos/ProductItemDTO'
import moment from 'moment'

type Props = TouchableOpacityProps & {
  item: ProductItemDTO
}

export function MealField({ item, ...rest }: Props) {
  return (
    <Container type={item.inDiet} {...rest}>
      <DataText>{`${moment(item.data).format('HH:mm')}`}</DataText>
      <DataText> | </DataText>
      <Title>{item.name}</Title>
      <ColorCircle type={item.inDiet}></ColorCircle>
    </Container>
  )
}
