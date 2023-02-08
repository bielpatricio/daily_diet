import styled, { css } from 'styled-components/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
type TitleProps = {
  inDiet: boolean
}

export const Title = styled.Text<TitleProps>`
  ${({ theme, inDiet }) => css`
    font-size: ${theme.FONT_SIZE.xxl}px;
    font-family: ${theme.FONT_FAMILY.bold};
    color: ${inDiet ? theme.COLORS['teal-700'] : theme.COLORS['orange-700']};
  `}
  margin-bottom: 15px;
  text-align: center;
  width: 100%;
`
export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.lg}px;
    font-family: ${theme.FONT_FAMILY.regular};
    color: ${theme.COLORS['gray-200']};
  `}
  text-align: center;
  margin-bottom: 24px;
`
export const WorkoutImg = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
  size: 256,
  color: theme.COLORS['gray-200'],
}))``
