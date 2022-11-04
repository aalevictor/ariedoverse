import { DiscordLogo, EnvelopeSimple, Key, TwitchLogo, User } from 'phosphor-react';
import React from 'react';
import { Body } from '../components/Body';
import { Form } from '../components/Form';
import { TextInput } from '../components/TextInput';
import { Button } from '../components/Button';
import { useState } from 'react';
import axios from 'axios';

const Register = () =>{
  const [errorTwitch, setErrorTwitch] = useState('')
  const [errorName, setErrorName] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [errorDiscord, setErrorDiscord] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [errorPassword2, setErrorPassword2] = useState('')
  const baseURL = 'https://balp-api.herokuapp.com/'

  function searchValue(key, value){
    const url = `${baseURL}verify?${key}=${value}`
    axios({
        method: "get",
        url: url,
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    .then((response) => {
      const av = response.data.available
      switch(key) {
        case 'twitch':
          setErrorTwitch(av ? '' : 'Login já cadastrado')
          break
        case 'email':
          setErrorEmail(av ? '' : 'E-mail já cadastrado')
          break
        case 'discord':
          setErrorDiscord(av ? '' : 'Discord já cadastrado')
          break
        default:
          break
      }
    });
  }

  function verifyForm(){
    // var stat = errorTwitch === '' & errorName === '' & errorEmail === '' & errorDiscord === '' & errorPassword === '' & errorPassword2 === ''
    return errorTwitch === '' & errorName === '' & errorEmail === '' & errorDiscord === '' & errorPassword === '' & errorPassword2 === ''
  }

  const handleSubmit = event => {
    const url = `${baseURL}user/register`
    event.preventDefault();
    if (verifyForm()){
      const twitch = event.target.twitch.value;
      const name = event.target.name.value;
      const email = event.target.email.value;
      const discord = event.target.discord.value;
      const password =  event.target.password.value;

      axios({
        method: "post",
        url: url,
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: {
          twitch,
          password,
          name,
          email,
          discord
        },
      }).then((response) => {
        console.log(response)
      })
    }
  }

  function checkPassword(key) {
    const pass  = document.getElementById("password").value
    const pass2 = document.getElementById("password2").value
    
    if ((pass !== '' && pass2 !== '') & pass !== pass2){
      key === '1' ? setErrorPassword('Senhas não coincidem') : setErrorPassword2('Senhas não coincidem')
    } else if ((pass !== '' && pass2 !== '') & pass === pass2) {
      setErrorPassword('')
      setErrorPassword2('')
    }
  }

  function handleTwitch(e){
    const twitch = e.target.value
    if (twitch !== ''){
      searchValue('twitch', twitch)
    } else {
      setErrorTwitch('Esse campo é obrigatório')
    }
  }

  function handleName(e){
    const name = e.target.value
    if (name !== ''){
      setErrorName('')
    } else {
      setErrorName('Esse campo é obrigatório')
    }
  }

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  function handleEmail(e){
    const email = e.target.value
    if (email !== ''){
      if (validateEmail(email)){
        searchValue('email', email)
      } else {
        setErrorEmail('E-mail inválido')
      }
    } else {
      setErrorEmail('Esse campo é obrigatório')
    }
  }

  function handleDiscord(e){
    const discord = e.target.value.replace('#', '@')
    if (discord !== ''){
      searchValue('discord', discord)
    } else {
      setErrorDiscord('Esse campo é obrigatório')
    }
  }

  function handlePassword(e){
    const pass = e.target.value
    if (pass !== ''){
      setErrorPassword('')
      checkPassword('1')
    } else {
      setErrorPassword('Esse campo é obrigatório')
    }
  }

  function handlePassword2(e){
    const pass = e.target.value
    if (pass !== ''){
      setErrorPassword2('')
      checkPassword('2')
    } else {
      setErrorPassword2('Esse campo é obrigatório')
    }
  }

  return (
    <Body className="flex items-center justify-center max-sm:bg-grey-1">
      <Form.Root onSubmit={handleSubmit}>
        <Form.Content className='flex flex-col text-offwhite w-fit gap-2'>
          <div className='flex flex-col text-offwhite gap-2 h-fit'>
            <span className=''>Login</span>
            <TextInput.Root>
              <TextInput.Icon children={<TwitchLogo />} />
              <TextInput.Input placeholder="Usuário da twitch" name="twitch" onBlur={handleTwitch} required />
            </TextInput.Root>
            <small className='text-bad mt-[-8px]'>{errorTwitch}</small>
          </div>
          <div className='flex flex-col text-offwhite gap-2 h-fit'>
            <span className=''>Nome</span>
            <TextInput.Root>
              <TextInput.Icon children={<User />} />
              <TextInput.Input placeholder="Nome" name="name" onBlur={handleName} required />
            </TextInput.Root>
            <small className='text-bad mt-[-8px]'>{errorName}</small>
          </div>
          <div className='flex flex-col text-offwhite gap-2 h-fit'>
            <span className=''>E-mail</span>
            <TextInput.Root>
              <TextInput.Icon children={<EnvelopeSimple />} />
              <TextInput.Input placeholder="E-mail" name="email" onBlur={handleEmail} required />
            </TextInput.Root>
            <small className='text-bad mt-[-8px]'>{errorEmail}</small>
          </div>
          <div className='flex flex-col text-offwhite gap-2 h-fit'>
            <span className=''>Discord</span>
            <TextInput.Root>
              <TextInput.Icon children={<DiscordLogo />} />
              <TextInput.Input placeholder="Usuário#0000" name="discord" onBlur={handleDiscord} required />
            </TextInput.Root>
            <small className='text-bad mt-[-8px]'>{errorDiscord}</small>
          </div>
          <div className='flex flex-col text-offwhite gap-2 h-fit'>
            <span className=''>Senha</span>
            <TextInput.Root>
              <TextInput.Icon children={<Key />} />
              <TextInput.Input type="password" placeholder="Senha" id="password" name="password" onBlur={handlePassword} required />
            </TextInput.Root>
            <small className='text-bad mt-[-8px]'>{errorPassword}</small>
          </div>
          <div className='flex flex-col text-offwhite gap-2 h-fit'>
            <span className=''>Senha</span>
            <TextInput.Root>
              <TextInput.Icon children={<Key weight='duotone' />} />
              <TextInput.Input type="password" placeholder="Confirmar senha" id="password2" name="password2" onBlur={handlePassword2} required />
            </TextInput.Root>
            <small className='text-bad mt-[-8px]'>{errorPassword2}</small>
          </div>
          <Button className="mt-6 w-full" type="submit">Cadastrar</Button>
        </Form.Content>
      </Form.Root>
    </Body>
  )
}

export default Register;