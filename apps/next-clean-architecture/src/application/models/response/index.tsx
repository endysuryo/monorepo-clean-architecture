export default interface ResponseModel<T> {
  data: T[]
  error: boolean
  message: string
  status: number
}
