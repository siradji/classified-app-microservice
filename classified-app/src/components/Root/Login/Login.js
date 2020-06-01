import React from 'react'
import styled from 'styled-components'

import {useForm} from 'react-hook-form'


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
              <LabelText>Hello</LabelText>
          </Label>
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

export default Login
