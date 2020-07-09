import { createContext } from 'react'
import { UserInfoStroe } from '../store'
export const storeContext = createContext({
  UserInfoStore: new UserInfoStroe()
})