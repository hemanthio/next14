import React from 'react'
import { Input } from '@/components/ui/input'

function Form() {
  return (
    
 <form action="" className='flex justify-between gap-4 flex-col md:flex-row'>

<Input
type='text'
name='message'
placeholder='your message...'
minLength={1}
maxLength={80}
required
></Input>
 </form>
   
  )
}

export default Form