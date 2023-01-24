import { Container, IconPlus, Title } from './styles'
import { TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
  title: string
  icon?: boolean
}

export function Button({ title, icon, ...rest }: Props) {
  return (
    <Container {...rest}>
      {!!icon && <IconPlus />}
      <Title>{title}</Title>
    </Container>
  )
}
