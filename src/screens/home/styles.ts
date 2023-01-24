import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS['gray-600']};
  padding: 24px;
  width: 100%;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`

export const Logo = styled.Image`
  width: 82px;
  height: 40px;
`

export const HistoryMeals = styled.View`
  margin-top: 20px;
  width: 100%;
  height: 100%;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.xxl}px;
    font-family: ${theme.FONT_FAMILY.bold};
    color: ${theme.COLORS['teal-700']};
  `}
`
export const DataText = styled.Text`
  margin-bottom: 15px
    ${({ theme }) => css`
      font-size: ${theme.FONT_SIZE.xl}px;
      font-family: ${theme.FONT_FAMILY.bold};
      color: ${theme.COLORS['gray-200']};
    `};
`
