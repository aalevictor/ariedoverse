import { EnvelopeSimple, Key, TwitchLogo, User } from 'phosphor-react';
import React from 'react';
import { Body } from '../components/Body';
import { Form } from '../components/Form';
import { TextInput } from '../components/TextInput';
import { Button } from '../components/Button';

const Register = () =>{
  return (
    <Body className="flex items-center justify-center max-sm:bg-grey-1">
      <Form.Root>
        <Form.Content className='flex flex-col text-offwhite w-fit gap-2'>
          <div className='flex flex-col text-offwhite gap-2 h-fit'>
            <span className=''>Login</span>
            <TextInput.Root>
              <TextInput.Icon children={<TwitchLogo />} />
              <TextInput.Input placeholder="Usuário da twitch" name="login" />
            </TextInput.Root>
          </div>
          <div className='flex flex-col text-offwhite gap-2 h-fit'>
            <span className=''>Nome</span>
            <TextInput.Root>
              <TextInput.Icon children={<User />} />
              <TextInput.Input placeholder="Nome" name="name" />
            </TextInput.Root>
          </div>
          <div className='flex flex-col text-offwhite gap-2 h-fit'>
            <span className=''>E-mail</span>
            <TextInput.Root>
              <TextInput.Icon children={<EnvelopeSimple />} />
              <TextInput.Input placeholder="E-mail" name="email" />
            </TextInput.Root>
          </div>
          <div className='flex flex-col text-offwhite gap-2 h-fit'>
            <span className=''>Senha</span>
            <TextInput.Root>
              <TextInput.Icon children={<Key />} />
              <TextInput.Input type="password" placeholder="Senha" name="password" />
            </TextInput.Root>
          </div>
          <div className='flex flex-col text-offwhite gap-2 h-fit'>
            <span className=''>Senha</span>
            <TextInput.Root>
              <TextInput.Icon children={<Key weight='duotone' />} />
              <TextInput.Input type="password" placeholder="Confirmar senha" name="password2" />
            </TextInput.Root>
          </div>
          <Button className="mt-6 w-full" type="submit">Cadastrar</Button>
        </Form.Content>
      </Form.Root>
    </Body>
  )
}

export default Register;