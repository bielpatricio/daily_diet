import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

type Props = {
  type: boolean
}

export const Container = styled(TouchableOpacity)<Props>`
  border: 1px solid ${({ theme }) => theme.COLORS['gray-500']};
  border-radius: 8px;
  /* border: 1px solid
    ${({ theme, type }) =>
    type === true ? theme.COLORS['teal-300'] : theme.COLORS['orange-300']}; */
  background-color: ${({ theme }) => theme.COLORS['gray-700']};

  padding: 0px 16px;

  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 60px;

  margin-bottom: 10px;
`
export const Title = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.md}px;
    font-family: ${theme.FONT_FAMILY.bold};
    color: ${theme.COLORS['gray-100']};
  `}
`
export const DataText = styled.Text`
  margin-right: 8px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.sm}px;
    font-family: ${theme.FONT_FAMILY.bold};
    color: ${theme.COLORS['gray-200']};
  `}
`
export const ColorCircle = styled.View<Props>`
  background-color: ${({ theme, type }) =>
    type === true ? theme.COLORS['teal-300'] : theme.COLORS['red-500']};
  border-radius: 999px;
  width: 15px;
  height: 15px;
`
