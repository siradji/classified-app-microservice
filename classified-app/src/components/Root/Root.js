import React, {
  useEffect,
  useState
} from 'react'

import {
  useDispatch
} from 'react-redux'
import gql from 'graphql-tag'
import graphqlClient from '#root/api/graphqlClient'

import {
  setSession
} from '#root/store/ducks/session'
import styled from 'styled-components'
import AccountDetails from './AccountDetails'
import Login from './Login/Login'


const query = gql `
  {
    userSession(me: true) {
      id
      user {
        email
        id
      }
    }
  }
`

const Root = () => {
  const dispatch = useDispatch()
  const [initialised, setInitialized] = useState(false)

  useEffect(() => {
    graphqlClient
      .query({
        query,
      })
      .then(data => {
        console.log(data.data.userSession)

        if (data.data.userSession) {
          dispatch(setSession(data.data.userSession))
        }
        setInitialized(true)
      })
  }, [])

  if (!initialised) return <h1 > LOading.. < /h1>
  return ( <
    Wrapper >
    <
    Container >
    <
    Content > content < /Content>{' '} <
    Sidebar >
    <
    AccountDetails / >
    <
    /Sidebar>{' '} < /
    Container > {
      ' '
    } <
    /Wrapper>
  )
}

const Container = styled.div `
  display: flex;
  flex-flow: row nowrap;
  margin: auto;
  width: 80rem;
`
const Content = styled.div `
  flex: 1;
  margin-right: 1rem;
`
const Sidebar = styled.div `
  flex: 0 auto;
  width: 10rem;
`

const Wrapper = styled.div `
  box-sizing: border-box;
  height: 100vh;
  padding: 1rem;
  width: 100%;
`
export default Root