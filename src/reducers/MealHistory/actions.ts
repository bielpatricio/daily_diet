import { ProductItem } from './reducer'

export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  RESET_ALL = 'RESET_ALL',
}

export function resetAllAction() {
  return {
    type: ActionTypes.RESET_ALL,
  }
}
export function addNewItemAction(item: ProductItem) {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      item,
    },
  }
}
export function removeItemAction(id: string) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      id,
    },
  }
}
