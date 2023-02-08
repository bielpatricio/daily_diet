import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { Plus } from 'phosphor-react-native'

type Props = {
  colorBg?: 'red' | 'teal' | 'off' | 'gray'
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  min-height: 56px;

  border: ${({ theme, colorBg }) => {
    if (colorBg === 'off') {
      return `2px solid ${theme.COLORS['gray-200']}`
    } else {
      return 'none'
    }
  }};

  background-color: ${({ theme, colorBg }) => {
    if (colorBg === 'red') {
      return theme.COLORS['red-300']
    } else if (colorBg === 'teal') {
      return theme.COLORS['teal-300']
    } else if (colorBg === 'off') {
      return 'transparent'
    } else {
      return theme.COLORS['gray-200']
    }
  }};
  flex-direction: row;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`

export const Title = styled.Text<Props>`
  color: ${({ theme, colorBg }) => {
    if (colorBg === 'off') {
      return theme.COLORS['gray-200']
    } else {
      return theme.COLORS['gray-700']
    }
  }};
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.md}px;
    font-family: ${theme.FONT_FAMILY.bold};
  `}
`

export const IconPlus = styled(Plus).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS['gray-700'],
  weight: 'bold',
}))`
  margin-right: 5px;
`
