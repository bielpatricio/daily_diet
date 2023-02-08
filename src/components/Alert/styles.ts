import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  justify-content: center;
  align-items: center;
  width: 85%;
  padding: 24px;
  height: 192px;
  position: absolute;
  z-index: 1000;
  background-color: ${({ theme }) => theme.COLORS['gray-400']};
  border-radius: 12px;
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS['gray-200']};
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.md}px;
    font-family: ${theme.FONT_FAMILY.bold};
  `}
  margin-bottom: 20px;
  text-align: center;
`
export const ButtonsField = styled.View`
  justify-content: center;
  align-items: center;
  /* flex: 1; */
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`
export const ButtonsLine = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  margin: 0 5px;
`
