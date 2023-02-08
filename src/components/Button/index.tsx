import { Container, IconPlus, Title } from './styles'
import { TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
  title: string
  icon?: boolean
  color?: 'red' | 'teal' | 'off' | 'gray'
}

export function Button({
  title,
  icon = false,
  color = 'gray',
  ...rest
}: Props) {
  return (
    <Container colorBg={color} {...rest}>
      {!!icon && <IconPlus />}
      <Title colorBg={color}>{title}</Title>
    </Container>
  )
}
