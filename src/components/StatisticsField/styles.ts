import styled, { css } from 'styled-components/native'

type Props = {
  inDiet: 'green' | 'red' | null
}

export const Container = styled.View<Props>`
  align-items: center;
  background-color: ${({ theme, inDiet }) => {
    switch (inDiet) {
      case 'red':
        return theme.COLORS['red-300']
      case 'green':
        return theme.COLORS['teal-300']
      default:
        return theme.COLORS['gray-100']
    }
  }};
  flex: 1;
  width: 100%;
  max-height: 90px;
  min-height: 90px;
  justify-content: center;
  /* padding: 24px; */
  border-radius: 12px;
  margin: 0
    ${({ inDiet }) => {
      switch (inDiet) {
        case 'red':
          return 0
        default:
          return 10
      }
    }}px
    24px
    ${({ inDiet }) => {
      switch (inDiet) {
        case 'green':
          return 0
        default:
          return 10
      }
    }}px;
`
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.xl}px;
    font-family: ${theme.FONT_FAMILY.bold};
    color: ${theme.COLORS['gray-700']};
  `}
`
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.md}px;
    font-family: ${theme.FONT_FAMILY.bold};
    color: ${theme.COLORS['gray-600']};
  `}
  text-align: center;
`
