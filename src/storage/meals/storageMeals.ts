import { MEALS_COLLECTION } from '@storage/storageConfig'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ProductItemDTO } from 'src/dtos/ProductItemDTO'

export async function storageMealsGetAll() {
  const storage = await AsyncStorage.getItem(MEALS_COLLECTION)

  const meals: ProductItemDTO[] = storage ? JSON.parse(storage) : []

  return meals
}

export async function storageMealsHistorySave(meals: ProductItemDTO[]) {
  await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(meals))
}
