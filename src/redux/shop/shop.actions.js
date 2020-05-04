import ShopTypes from './shop.types'

export const updateCollections = collectionsMap => {
  return {
    type: ShopTypes.UPDATE_COLLECTIONS ,
    payload: collectionsMap
  }
}