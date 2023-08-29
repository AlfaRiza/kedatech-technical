import { SyntheticEvent, useState } from 'react'
import Button from '../Button'
import Input from '../Input/Input'

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <div>
      <form className='flex flex-col gap-4 h-full'>
        <Input
          type='text'
          value={email}
          onChange={(event: SyntheticEvent<HTMLInputElement, Event>) => setEmail(event.currentTarget.value)}
          customStyle={`py-2.5 rounded-md`}
          autoComplete={'off'}
          placeholder="Email"
        />
        <Input
          value={password}
          onChange={(event: SyntheticEvent<HTMLInputElement, Event>) => setPassword(event.currentTarget.value)}
          placeholder="Password"
        />
        <div className="mt-10">
        <Button type='primary' onClick={() => {}}>
          Login
        </Button>
        </div>
      </form>
    </div>
  )
}

export default Login
