import config from '../config'
import { getAuthenticationHeaders } from './auth'

export const addComment = (comment) => ({
  type: 'ADD_COMMENT',
  comment
})

export const startAddComment = ({post_id, comment} = {}) => {
  return (dispatch) => {
    return fetch(`${config.URL}/posts/${post_id}/comments`, {
      method: 'post',
      headers: getAuthenticationHeaders(),
      body: JSON.stringify({comment: comment})
    }).then(res => {
      if (res.status === 200) {
        return res.json()
      } else {
        throw res
      }
    }).then(resComment => {
        console.log(resComment)
        dispatch(addComment(resComment))
        return resComment
      }, error => {
        return error.status
      }
    )
  }
}

export const setComments = ( {comments: comments} ) => ({
  type: 'SET_COMMENTS',
  comments

})

export const startSetComments = (id) => {

  return (dispatch) => {
    return fetch(`${config.URL}/posts/${id}/comments`, {
      headers: getAuthenticationHeaders()
    })
            .then(res => {
              return res.json()
              }, error => console.log(error)
            ).then(json => {
              console.log(json)
              dispatch(setComments({ comments: json }))
            }, error => console.log(error)
          )
        }
      }

export const addError = (error) => {
  console.log(error)
}
