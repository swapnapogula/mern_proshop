import React from 'react'
import { Alert } from 'react-bootstrap'

const message = ({ variant, children}) => {  
   
    //@variant=whtever we pass into this component as a variant// 
  ///@children =whtever text we want
    return (
    <Alert variant={variant}>  
         {children} 
    </Alert>
  )
}

message.defaultProps = {
    variant: 'info'
}//@info= bluecolor

export default message
