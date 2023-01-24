import {
  addNewItemAction,
  removeItemAction,
  resetAllAction,
} from '@reducers/MealHistory/actions'
import { ProductItem, mealHistoryReducer } from '@reducers/MealHistory/reducer'
import { mealsGetAll } from '@storage/meals/mealsGetAll'
import { MEALS_COLLECTION } from '@storage/storageConfig'
import uuid from 'react-native-uuid'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import { AsyncStorage } from 'react-native'

type MealHistoryContextType = {
  items: ProductItem[]
  addNewItem: (item: ProductItem) => void
  removeItem: (id: string) => void
  resetAll: () => void
}

export const MealHistoryContext = createContext({} as MealHistoryContextType)

type MealHistoryProviderProps = {
  children: ReactNode
}

export function MealHistoryContextProvider({
  children,
}: MealHistoryProviderProps) {
  const mealsFromAsyncStorage = mealsGetAll()

  const [mealHistoryState, dispatch] = useReducer(
    mealHistoryReducer,
    {
      items: [],
    },
    () => {
      const storedStateAsJSON = [
        {
          id: uuid.v4(),
          name: 'ref 1',
          description: 'ref livre',
          data: new Date(),
          inDiet: true,
        },
      ]
      // const storedStateAsJSON = mealsGetAll()
      return { items: storedStateAsJSON }
    },
  )

  const { items } = mealHistoryState

  useEffect(() => {
    async function setItemInStorage() {
      const stateJSON = JSON.stringify(mealHistoryState)
      await AsyncStorage.setItem(MEALS_COLLECTION, stateJSON)
    }

    setItemInStorage()
  }, [mealHistoryState])

  function addNewItem(item: ProductItem) {
    const tryFindItemOnmealHistory = items.find((i) => i.id === item.id)
    if (tryFindItemOnmealHistory) {
      // dispatch(sumItemAction(item.id, item.amount))
    } else {
      dispatch(addNewItemAction(item))
    }
    // setTotal((state) => state + item.amount * item.price)
  }

  function removeItem(id: string) {
    // const item = items.find((coff) => coff.id === id)
    // setTotal((state) => state - item.amount * item.price)
    dispatch(removeItemAction(id))
    // console.log('item removido do carrinho: ', id)
  }

  function resetAll() {
    dispatch(resetAllAction())
  }

  return (
    <MealHistoryContext.Provider
      value={{
        items,
        addNewItem,
        removeItem,
        resetAll,
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
