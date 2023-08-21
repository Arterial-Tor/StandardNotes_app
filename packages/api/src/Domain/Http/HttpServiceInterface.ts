import { LegacySession, Session } from '@standardnotes/domain-core'
import { HttpRequest, HttpRequestParams, HttpResponse, HttpResponseMeta } from '@standardnotes/responses'

import { HttpRequestOptions } from './HttpRequestOptions'

export interface HttpServiceInterface {
  setHost(host: string): void
  getHost(): string

  get<T>(path: string, params?: HttpRequestParams, options?: HttpRequestOptions): Promise<HttpResponse<T>>
  getExternal<T>(url: string, params?: HttpRequestParams): Promise<HttpResponse<T>>
  post<T>(path: string, params?: HttpRequestParams, options?: HttpRequestOptions): Promise<HttpResponse<T>>
  put<T>(path: string, params?: HttpRequestParams, options?: HttpRequestOptions): Promise<HttpResponse<T>>
  patch<T>(path: string, params: HttpRequestParams, options?: HttpRequestOptions): Promise<HttpResponse<T>>
  delete<T>(path: string, params?: HttpRequestParams, options?: HttpRequestOptions): Promise<HttpResponse<T>>
  runHttp<T>(httpRequest: HttpRequest): Promise<HttpResponse<T>>

  setSession(session: Session | LegacySession): void
  refreshSession(): Promise<boolean>
  setCallbacks(
    updateMetaCallback: (meta: HttpResponseMeta) => void,
    refreshSessionCallback: (session: Session) => void,
  ): void

  deinit(): void
}
