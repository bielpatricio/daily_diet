import { ArrowLeft } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS['gray-600']};
  width: 100%;
  position: relative;
  justify-content: center;
`
export const Body = styled.View`
  padding: 24px;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100%;
  margin-top: -20px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.COLORS['gray-500']};

  position: relative;
`
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.xxl}px;
    font-family: ${theme.FONT_FAMILY.bold};
    color: ${theme.COLORS['gray-700']};
  `}
`
export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.md}px;
    font-family: ${theme.FONT_FAMILY.regular};
    color: ${theme.COLORS['gray-700']};
  `}
`
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.xl}px;
    font-family: ${theme.FONT_FAMILY.bold};
    color: ${theme.COLORS.white};
  `}
  margin-bottom: 24px;
`
export const Line = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 90px;
  flex: 1;
`
