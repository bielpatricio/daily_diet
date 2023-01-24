import { StatusBar } from 'react-native'
import { defaultTheme } from './src/styles/themes/default'
import { ThemeProvider } from 'styled-components/native'
import {
  useFonts,
  // eslint-disable-next-line
  Roboto_400Regular,
  // eslint-disable-next-line
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { Loading } from '@components/Loading'
import { Routes } from './src/routes/index'
import { MealHistoryContextProvider } from '@hooks/useMealHistory'

export default function App() {
  // eslint-disable-next-line
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <ThemeProvider theme={defaultTheme}>
      <MealHistoryContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </MealHistoryContextProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </ThemeProvider>
  )
}
