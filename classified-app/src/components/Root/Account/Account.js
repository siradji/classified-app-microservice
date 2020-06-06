import React from 'react'


import {useMutation} from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { useSelector, useDispatch} from 'react-redux'
import styled from 'styled-components'
import {clearSession} from "#root/store/ducks/session"

const mutation = gql `
  mutation($sessionId: ID!) {
    deleteUserSession(sessionId: $sessionId) 
  }
`

const Account = () => {
  const dispatch  = useDispatch()
  const [deleteUserSession ] = useMutation(mutation)
  const session = useSelector(state => state.session)
  return (
    <Wrapper>
      Logged in as
      <Email>{session.user.email}</Email>
      <LogoutLink onClick={e => {
        e.preventDefault()
        dispatch(clearSession())
        deleteUserSession({variables: {sessionId: session.id}})
      }}>LOg out</LogoutLink>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: ${props => props.theme.mortar};
  font-size: 0.9em;
`

const Email = styled.div`
  color: ${props => props.theme.nero};
  font-size: 1.1em;
  margin-top: 0.25em;
`


const LogoutLink = styled.a.attrs({href: "#"})`
color: blue;
display: block;
`
export default Account
