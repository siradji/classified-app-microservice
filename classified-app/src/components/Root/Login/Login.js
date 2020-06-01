import React from 'react'
import styled from 'styled-components'

import {useForm} from 'react-hook-form'
import {useMutation} from '@apollo/react-hooks'
import gql from 'graphql-tag'
 

import TextInput from '#root/components/common/TextInput'

const mutation  = gql`
mutation($email: String!, $password: String!) {
    createUserSession(email: $email, passowrd: $password) {
        id
        user{
           email
           id 
        }
    }
}

`

const Login = () => {
    const {
        formState : {isSubmitting},
        handleSubmit,
        register
    }  = useForm()
 
    const funcSubmit = handleSubmit(({email, password}) => {
        console.log(email, password)
    })

    return (
        <form onSubmit={funcSubmit}>
          <Label>
              <LabelText>email</LabelText>
              <TextInput disabled={isSubmitting} name="email" type="email" ref={register} />
          </Label>
          <Label>
              <LabelText>Password</LabelText>
              <TextInput disabled={isSubmitting} name="password" type="password" ref={register} />
          </Label>
          <Button disabled={isSubmitting} type="submit" > Login</Button>
        </form>
    )
}




const Label = styled.label`
display: block;

:not{:first-child} {
    margin-top: 0.75rem;
}
`

const LabelText  = styled.strong`
display: block;
font-size: 0.9rem;
margin-bottom: 0.25rem;
`

const Button = styled.button`
display: inline-block;
margin-top: .5rem;
`

export default Login
