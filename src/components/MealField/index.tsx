import { TouchableOpacityProps } from 'react-native'
import { ColorCircle, Container, DataText, Title } from './styles'

type Props = TouchableOpacityProps & {
  title: string
  type?: boolean
  hour: string
}

export function MealField({ title, type = false, hour, ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      <DataText>{hour}</DataText>
      <DataText> | </DataText>
      <Title>{title}</Title>
      <ColorCircle type={type}></ColorCircle>
    </Container>
  )
}
