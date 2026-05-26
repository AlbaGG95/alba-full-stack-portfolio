import { apiRequest } from "./apiClient"

export const getPosts = () => apiRequest("/posts")

export const getPostById = (postId) => apiRequest(`/posts/${postId}`)

export const getPostsByCategory = (categoryId) => apiRequest(`/posts?category_id=${categoryId}`)

export const getPostsByPage = (page) => apiRequest(`/posts?page=${page}`)

export const createPost = (postData) =>
  apiRequest("/posts", {
    method: "POST",
    body: postData,
  })

export const updatePost = (postId, postData) =>
  apiRequest(`/posts/${postId}`, {
    method: "PUT",
    body: postData,
  })

export const deletePost = (postId) =>
  apiRequest(`/posts/${postId}`, {
    method: "DELETE",
  })
