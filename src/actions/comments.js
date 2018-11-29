import config from '../config'
import { getAuthenticationHeaders } from './auth'

export const setComments = ( comments ) => ({
  type: 'SET_COMMENTS',
  comments
})

export const startSetComments = (id) => {

  return (dispatch) => {
    console.log('here')
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
