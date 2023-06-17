import {Observable} from 'rxjs'

export abstract class HttpService<T = unknown> {
  constructor(protected readonly baseUrl: string) {}

  protected abstract request<R = T, D = void>(
    method: string,
    path: string,
    data?: T | D
  ): Observable<R>

  abstract get<R>(path: string): Observable<R>

  abstract post<D = void, R = D>(path: string, data: D, optios: object): Observable<R>

  abstract put<R, D = void>(path: string, data: D, options: object): Observable<R>

  abstract delete<R>(path: string, options: object): Observable<R>
}
