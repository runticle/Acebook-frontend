import config from '../config'
import { getAuthenticationHeaders } from './auth'

export const addPost = (post) => ({
  type: 'ADD_POST',
  post
})

export const startAddPost = (post = {}) => {
  return (dispatch) => {
    return fetch(`${config.URL}/posts`, {
      method: 'post',
      headers: getAuthenticationHeaders(),
      body: JSON.stringify({message: post})
    }).then(res => {
      if (res.status === 200) {
        return res.json()
      } else {
        throw Error(res.status)
      }
    }).then(resPost => {
        console.log(resPost)
        dispatch(addPost(resPost))
        return resPost
      }, error => error
    )
  }
}

export const setPosts = ({ posts }) => ({
  type: 'SET_POSTS',
  posts
})

export const startSetPosts = () => {
  return (dispatch) => {
    return fetch(`${config.URL}/posts`)
            .then(res => {
              return res.json()
              }, error => console.log(error)
            ).then(json => {
              dispatch(setPosts({ posts: json }))
            }, error => console.log(error)
          )
        }
      }

export const addError = (error) => {
  console.log(error)
}
