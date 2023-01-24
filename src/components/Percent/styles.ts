import { ArrowUpRight } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type PercentTypeStyleProps = 'primary' | 'secondary'

type Props = {
  type: PercentTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  background-color: ${({ theme, type }) =>
    type === 'primary' ? theme.COLORS['teal-300'] : theme.COLORS['orange-300']};
  padding: 16px 16px 30px;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 120px;
  border-radius: 8px;
  margin-bottom: 20px;
`
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.xxl}px;
    font-family: ${theme.FONT_FAMILY.bold};
    color: ${theme.COLORS['gray-700']};
  `}
  margin-top: -15px;
  text-align: center;
  width: 100%;
`
export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.lg}px;
    font-family: ${theme.FONT_FAMILY.regular};
    color: ${theme.COLORS['gray-600']};
  `}
  text-align: center;
  width: 100%;
`
export const ArrowUpRightIcon = styled(ArrowUpRight).attrs<Props>(
  ({ theme, type }) => ({
    size: 24,
    // color: theme.COLORS['teal-700'],
    weight: 'bold',
    color:
      type === 'primary'
        ? theme.COLORS['teal-700']
        : theme.COLORS['orange-700'],
  }),
)``
