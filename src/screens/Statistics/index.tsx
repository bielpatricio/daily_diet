import { StaticsField } from '@components/StatisticsField'
import { Body, Container, Line, SubTitle } from './styles'
import { View } from 'react-native'
import { Header } from '@components/Header'
import { useMealHistory } from '@hooks/useMealHistory'
import { Button } from '@components/Button'
import { useNavigation } from '@react-navigation/native'
import { Alert } from '@components/Alert'
import { useState } from 'react'

export function Statistics() {
  const { percentFit, resetAll } = useMealHistory()
  const [openAlert, setOpenAlert] = useState(false)

  async function handleRemoveAllHistory() {
    setOpenAlert(false)
    await resetAll()
    handleGoHome()
  }

  const navigation = useNavigation()

  function handleGoHome() {
    navigation.navigate('home')
  }

  return (
    <Container>
      {openAlert && (
        <Alert
          buttonOk={handleRemoveAllHistory}
          buttonCancel={() => setOpenAlert(false)}
          title="Do you really want to delete all the meal history?"
        />
      )}
      <Header title={`${percentFit.percent}%`} healthy={percentFit.percent} />
      <Body>
        <SubTitle>General stats</SubTitle>
        <StaticsField
          title="59"
          subTitle="Best sequence of dishes within the diet"
        />
        <StaticsField
          title={`${percentFit.total}`}
          subTitle="registered meals"
        />

        <Line>
          <StaticsField
            title={`${percentFit.inDiet}`}
            subTitle="diet meals"
            inDiet="green"
          />
          <StaticsField
            title={`${percentFit.total - percentFit.inDiet}`}
            subTitle="off-diet meals"
            inDiet="red"
          />
        </Line>
        <Button onPress={() => setOpenAlert(true)} title="Remove History" />
      </Body>
    </Container>
  )
}
