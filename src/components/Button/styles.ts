import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { Plus } from 'phosphor-react-native'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  min-height: 56px;

  background-color: ${({ theme }) => theme.COLORS['gray-300']};
  flex-direction: row;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.md}px;
    font-family: ${theme.FONT_FAMILY.bold};
    color: ${theme.COLORS['gray-700']};
  `}
`

export const IconPlus = styled(Plus).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS['gray-700'],
  weight: 'bold',
}))`
  margin-right: 5px;
`
