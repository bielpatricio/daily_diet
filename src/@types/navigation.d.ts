export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      statistics: undefined
      createAndEditionMeals: {
        mealId: string | null
      }
      details: {
        mealId: string
      }
    }
  }
}
