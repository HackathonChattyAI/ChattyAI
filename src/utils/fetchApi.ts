import baseApiConfig from "../constants/baseApiConfig"

const enum METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

type Options<T> = {
  body?: T | undefined
} & Omit<RequestInit, "body">

type Request<T> = (url: string, options?: Options<T>) => Promise<Response>

const configOptions = {
  method: METHODS.GET,
  headers: baseApiConfig.headers
}

export class FetchApi {
  static API_URL = baseApiConfig.url

  getApiUrl = () => {
    return FetchApi.API_URL
  }

  private buildUrl = (path: string) => {
    return FetchApi.API_URL + path
  }

  public get: Request<undefined> = async (url: string, options = {}) => {
    const buildedUrl = this.buildUrl(url)
    return fetch(buildedUrl, {
      ...options,
      ...configOptions,
    })
  }

  public post: Request<unknown> = async (url: string, options = {}) => {
    const buildedUrl = this.buildUrl(url)
    const { body } = options
    return fetch(buildedUrl, {
      ...options,
      ...configOptions,
      method: METHODS.POST,
      body: JSON.stringify(body),
    })
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new FetchApi()
