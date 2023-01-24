import { MEALS_COLLECTION } from '@storage/storageConfig'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ProductItem } from '@reducers/MealHistory/reducer'

export async function mealsGetAll() {
  // eslint-disable-next-line
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION)

    const meals = storage ? JSON.parse(storage) : []

    return meals
  } catch (error) {
    throw error
  }
}
