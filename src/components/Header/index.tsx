import { useNavigation } from '@react-navigation/native'
import { ButtonIcon, Container, HeaderTitle, Icon, Text, Title } from './styles'

type HeaderProps = {
  title: string
  healthy?: number | null
  detail?: boolean | null
}

export function Header({ title, healthy = null, detail = false }: HeaderProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('home')
  }

  const healthyBoolean = healthy !== null && healthy > 65

  return (
    <Container
      detail={detail}
      healthy={healthy !== null ? healthyBoolean : null}
    >
      <ButtonIcon onPress={handleGoBack}>
        <Icon />
      </ButtonIcon>
      <HeaderTitle>
        <Title>{title}</Title>
        {!!healthy && <Text>of meals in the diet</Text>}
      </HeaderTitle>
      <ButtonIcon disabled></ButtonIcon>
    </Container>
  )
}
