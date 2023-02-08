import { Container, SubTitle, Title } from './styles'

type StaticsFieldProps = {
  title: string
  subTitle: string
  inDiet?: 'green' | 'red' | null
}

export function StaticsField({
  title,
  subTitle,
  inDiet = null,
}: StaticsFieldProps) {
  return (
    <Container inDiet={inDiet}>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  )
}
