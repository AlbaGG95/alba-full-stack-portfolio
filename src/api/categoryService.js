import { apiRequest } from "./apiClient"

export const getCategories = () => apiRequest("/categories")

export const getCategoryById = (categoryId) => apiRequest(`/categories/${categoryId}`)

export const createCategory = (categoryData) =>
  apiRequest("/categories", {
    method: "POST",
    body: categoryData,
  })

export const updateCategory = (categoryId, categoryData) =>
  apiRequest(`/categories/${categoryId}`, {
    method: "PUT",
    body: categoryData,
  })

export const deleteCategory = (categoryId) =>
  apiRequest(`/categories/${categoryId}`, {
    method: "DELETE",
  })
