const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

const trimSlashes = (value) => value.replace(/^\/+|\/+$/g, "")

const getApiBaseUrl = () => {
  if (!API_BASE_URL || !API_KEY) {
    throw new Error("Missing required environment variables: VITE_API_BASE_URL and VITE_API_KEY")
  }

  return `${API_BASE_URL.replace(/\/+$/g, "")}/api/${encodeURIComponent(API_KEY)}`
}

const buildApiUrl = (path) => {
  const cleanPath = trimSlashes(path)

  return cleanPath ? `${getApiBaseUrl()}/${cleanPath}` : getApiBaseUrl()
}

const parseResponseBody = async (response) => {
  const text = await response.text()

  if (!text) {
    return null
  }

  try {
    return JSON.parse(text)
  } catch {
    return text
  }
}

const getErrorMessage = (data, response) => {
  if (data && typeof data === "object") {
    return data.message || data.error || response.statusText
  }

  return data || response.statusText
}

export const apiRequest = async (path, options = {}) => {
  const { body, headers = {}, ...config } = options
  const requestOptions = {
    ...config,
    headers: {
      ...headers,
    },
  }

  if (body !== undefined) {
    requestOptions.headers["Content-Type"] = "application/json"
    requestOptions.body = JSON.stringify(body)
  }

  const response = await fetch(buildApiUrl(path), requestOptions)
  const data = await parseResponseBody(response)

  if (!response.ok) {
    const message = getErrorMessage(data, response)
    throw new Error(`API request failed with status ${response.status}: ${message}`)
  }

  return data
}
