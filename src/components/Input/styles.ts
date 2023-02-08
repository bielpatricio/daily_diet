import styled, { css } from 'styled-components/native'
import { TextInput } from 'react-native'

export const Container = styled.View`
  flex: 1;
  margin-bottom: 24px;
`
export const InputText = styled(TextInput)`
  flex: 1;
  min-width: 56px;
  border-radius: 6px;
  padding: 16px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS['gray-200']};
    color: ${theme.COLORS['gray-700']};
    font-size: ${theme.FONT_SIZE.md}px;
    font-family: ${theme.FONT_FAMILY.regular};
  `}
`
export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS['red-500']};
    font-size: ${theme.FONT_SIZE.sm}px;
    font-family: ${theme.FONT_FAMILY.regular};
  `}
  margin-top: 5px;
  margin-bottom: -14px;
`
