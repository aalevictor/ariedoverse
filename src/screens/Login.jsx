import { Key, TwitchLogo } from 'phosphor-react';
import React, { useState } from 'react';
import { Body } from '../components/Body';
import { Form } from '../components/Form';
import { TextInput } from '../components/TextInput';
import { Button } from '../components/Button';
import axios from 'axios';
import { useEffect } from 'react';
import Alert from '../components/Alert';
import { useSearchParams } from 'react-router-dom';

const Login = () =>{
  const baseURL = 'https://balp-api.herokuapp.com/'
  // const baseURL = 'http://127.0.0.1:8000/'
  const [alerts, setAlerts] = useState(<></>)
  const [searchParams, ] = useSearchParams();

  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault();

    const twitch = event.target.login.value;
    const password =  event.target.password.value;

    log(twitch, password)
  }

  useEffect(() => {
		var url = `${baseURL}refresh`
    try {
      const refresh = sessionStorage.getItem('refresh')
      if (refresh){
        refreshToken(url, refresh)
      }     
    } catch {}

    if (searchParams.get('activate')){
      if(searchParams.get('activate') === 'true'){
        setAlerts(
          <Alert
            title='Sucesso!'
            type='great'
          >Sua conta foi ativada.</Alert>
        )
      }
    }
  }, [ searchParams ])

  function refreshToken(url, refresh) {
    axios({
      method: "post",
      url: url,
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        refresh: refresh
      }
    })
    .then((response) => {
      if (response.status === 200){
        sessionStorage.setItem('access', response.data.access)
        window.location.href = "/" 
      } else {
        sessionStorage.clear()
      }
    });
  } 

  function log(twitch, password){
		var url = `${baseURL}login`
    setAlerts(<></>)

    axios({
      method: "post",
      url: url,
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        twitch,
        password
      },
    })
    .then((response) => {
      console.log(response)
      if (response.status === 200){
        sessionStorage.setItem('refresh', response.data.refresh)
        sessionStorage.setItem('access', response.data.access)
        window.location.href = "/"
      }
    }).catch((response) => {
      if (response.response.status === 401)
          setAlerts(
            <Alert
              title='Erro ao logar'
            >Login e/ou senha incorreto(s)</Alert>
          )
      else
          setAlerts(
            <Alert
              title='Erro inesperado'
            >Tente novamente mais tarde</Alert>
          )
          
    });
  }

  return (
    <>
      {alerts}
      <Body className="flex items-center justify-center max-sm:bg-grey-1">
        <Form.Root onSubmit={handleSubmit}>
          <Form.Content className='flex flex-col text-offwhite w-fit gap-2'>
            <div className='flex flex-col text-offwhite gap-2 h-fit'>
              <span className=''>Login</span>
              <TextInput.Root>
                <TextInput.Icon children={<TwitchLogo />} />
                <TextInput.Input placeholder="Usuário da twitch" name="login" required />
              </TextInput.Root>
            </div>
            <div className='flex flex-col text-offwhite gap-2 h-fit'>
              <span className=''>Senha</span>
              <TextInput.Root>
                <TextInput.Icon children={<Key />} />
                <TextInput.Input type="password" placeholder="Senha" name="password" required />
              </TextInput.Root>
            </div>
            <Button className="mt-6 w-full" type="submit">Entrar</Button>
          </Form.Content>
          <a href='/register' className='underline text-xs mt-5 text-offwhite'>Não tem uma conta? Cadastre-se!</a>
        </Form.Root>
      </Body>
    </>
  )
}

export default Login;