import { catchAxiosError } from '../../../utils/axios'
import { getRequest, postRequest } from '../../../utils/auth'

export const getBooks = (filter: string, searchKeyword: string, sortBy: string, offset: number, limit: number) => {
  return catchAxiosError(getRequest(`/private/books/get/all?filterBy=${filter}&keyword=${searchKeyword}&sortBy=${sortBy}&offset=${offset}&limit=${limit}`))
}