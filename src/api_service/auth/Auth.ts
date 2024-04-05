import { catchAxiosError } from '../../../utils/axios'
import { postRequest } from '../../../utils/auth'

export const userLogin = (data: any) => {
  return catchAxiosError(postRequest(`/public/users/login`, data))
}

export const userRegister = (data: any) => {
    return catchAxiosError(postRequest(`/public/users/register`, data))
  }