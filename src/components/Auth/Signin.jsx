import React from 'react'
import { SignIn } from '@clerk/clerk-react'
function Signin() {
  return (
    <div className='flex justify-center mt-6 mb-6'>
      <SignIn/>
    </div>
  )
}

export default Signin
