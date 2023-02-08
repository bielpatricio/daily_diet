import {
  ArrowUpRightIcon,
  Container,
  PercentTypeStyleProps,
  Subtitle,
  Title,
} from './styles'
import { TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
  percent: number
}

export function Percent({ percent, ...rest }: Props) {
  const type: PercentTypeStyleProps = percent >= 65 ? 'primary' : 'secondary'
  return (
    <Container typeColor={type} {...rest}>
      <ArrowUpRightIcon />
      <Title>{percent}%</Title>
      <Subtitle>of meals in the diet</Subtitle>
    </Container>
  )
}
