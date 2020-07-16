import http from 'http'
import { ParsedUrlQuery } from 'querystring';

export interface RequestContent {
  req: http.IncomingMessage
  res: http.ServerResponse
  method: string
  query: ParsedUrlQuery
  pathname: string | null
  pathArray: string[]
  body: {} | MinimumBodyContent
}

export interface StringKeyAccess {
  [key: string]: any
}

export interface DeleteResult {
  message: string
  objectId: number
  ok: boolean
}

export type RepositoryResult<TYPE> = Promise<TYPE | RepositoryResultError | RepositoryDeleteResult>

export interface RepositoryDeleteResult {
  message: string
  objectId: number
  ok: boolean
}

export interface RepositoryResultError {
  error: Error
  method: string
  ok: boolean
}

export type ServiceResult<TYPE> = TYPE | RepositoryResultError | RepositoryDeleteResult

export type MinimumBodyContent = { id: number }

export interface ValidationPattern {
  type: string
  optional?: boolean
  length?: number
  maxLength?: number
  minLength?: number
  maxValue?: number
  minValue?: number
  valueBetween?: [number, number]
  equalTo?: string | boolean | number
  timeFormat?: 'hh:mm' | 'hh:mm:ss' | 'hh:mm a' | 'hh:mm:ss a'
}
