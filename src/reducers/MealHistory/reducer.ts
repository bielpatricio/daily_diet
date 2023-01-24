import { ActionTypes } from './actions'

export interface ProductItem {
  id: string
  name: string
  description: string
  data: Date
  inDiet: boolean
}

interface HistoryState {
  items: ProductItem[]
}

export function mealHistoryReducer(state: HistoryState, action: any) {
  switch (action.type) {
    case ActionTypes.RESET_ALL:
      return {
        items: [],
      }

    case ActionTypes.ADD_NEW_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload.item],
      }

    case ActionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((meal) => meal.id !== action.payload.id),
      }

    default: {
      return state
    }
  }
}
