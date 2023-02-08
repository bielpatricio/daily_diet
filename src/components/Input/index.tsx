import { TextInputProps, TextInput } from 'react-native'
import { Container, InputText, Text } from './styles'
import { useTheme } from 'styled-components/native'
import { RefObject } from 'react'

type InputProps = TextInputProps & {
  errorMessage?: string | null
}

export function Input({ errorMessage = null, ...rest }: InputProps) {
  const { COLORS } = useTheme()
  return (
    <Container>
      <InputText
        // ref={inputRef}
        placeholderTextColor={COLORS['gray-300']}
        {...rest}
      />
      {errorMessage !== null && <Text>{errorMessage}</Text>}
    </Container>
  )
}
