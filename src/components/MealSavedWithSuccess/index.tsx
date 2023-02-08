import { Container, WorkoutImg, Subtitle, Title } from './styles'

type MealSavedWithSuccessProps = {
  inDiet: boolean
}

export function MealSavedWithSuccess({ inDiet }: MealSavedWithSuccessProps) {
  return (
    <Container>
      <Title inDiet={inDiet}>{inDiet ? 'Keep it up!' : 'Shame on you!'}</Title>
      <Subtitle>
        {inDiet
          ? 'You are still on the diet. Very well!'
          : `You got off the diet this time, but keep pushing and don't give up!`}
      </Subtitle>
      {/* <WorkoutImg name="weight-lifter" /> */}
      <WorkoutImg name={inDiet ? 'weight-lifter' : 'run'} />
    </Container>
  )
}
