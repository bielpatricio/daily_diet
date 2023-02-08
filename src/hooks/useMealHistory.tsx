import {
  storageMealsGetAll,
  storageMealsHistorySave,
} from '@storage/meals/storageMeals'
import { MEALS_COLLECTION } from '@storage/storageConfig'
import uuid from 'react-native-uuid'
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { ProductItemDTO } from 'src/dtos/ProductItemDTO'
import moment from 'moment'
import { Alert } from 'react-native'

type reducePercentFit = {
  total: number
  inDiet: number
  percent: number
}

type MealHistoryContextType = {
  mealHistoryState: ProductItemDTO[]
  addNewItem: (item: ProductItemDTO) => void
  removeItem: (id: string) => void
  resetAll: () => void
  percentFit: reducePercentFit
  fetchGetDetailMeallById: (id: string) => ProductItemDTO
}

export const MealHistoryContext = createContext({} as MealHistoryContextType)

type MealHistoryProviderProps = {
  children: ReactNode
}

export function MealHistoryContextProvider({
  children,
}: MealHistoryProviderProps) {
  const [mealHistoryState, setMealHistoryState] = useState<ProductItemDTO[]>([])

  const percentFit: reducePercentFit = mealHistoryState.reduce(
    (totalMealsInDiet, meals) => {
      if (meals.inDiet) {
        totalMealsInDiet.inDiet += 1
      }
      totalMealsInDiet.total += 1

      totalMealsInDiet.percent = Number(
        ((totalMealsInDiet.inDiet / totalMealsInDiet.total) * 100).toFixed(2),
      )

      return totalMealsInDiet
    },
    {
      total: 0,
      inDiet: 0,
      percent: 0,
    },
  )

  // async function fetchMealHistory() {
  const fetchMealHistory = useCallback(async () => {
    const mealsFromAsyncStorage = await storageMealsGetAll()
    setMealHistoryState(mealsFromAsyncStorage)
    console.log(
      'mealsFromAsyncStorage mealsFromAsyncStorage',
      mealsFromAsyncStorage,
    )
  }, [])

  useEffect(() => {
    fetchMealHistory()
  }, [fetchMealHistory])

  async function addNewItem(item: ProductItemDTO) {
    setMealHistoryState((state) => {
      return [...state, item]
    })
    await storageMealsHistorySave([...mealHistoryState, item])
  }

  function fetchGetDetailMeallById(id: string) {
    const response = mealHistoryState.find((meal) => meal.id === id)
    if (response) {
      return response
    }
    return {} as ProductItemDTO
  }

  async function removeItem(id: string) {
    // const response = mealHistoryState.find((meal) => meal.id === id)
    setMealHistoryState((state) => {
      return state.filter((meals) => meals.id !== id)
    })
    await storageMealsHistorySave(
      mealHistoryState.filter((meals) => meals.id !== id),
    )
  }

  async function resetAll() {
    try {
      await storageMealsHistorySave([])
      setMealHistoryState([])
      Alert.alert('Done!')
    } catch (error) {
      Alert.alert(
        'Was not possible remove all history of meals! try again later.',
      )
    }
  }

  return (
    <MealHistoryContext.Provider
      value={{
        fetchGetDetailMeallById,
        mealHistoryState,
        addNewItem,
        removeItem,
        resetAll,
        percentFit,
      }}
    >
      {children}
    </MealHistoryContext.Provider>
  )
}

export function useMealHistory() {
  const context = useContext(MealHistoryContext)

  return context
}
