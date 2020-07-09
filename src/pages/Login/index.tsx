import React, { ComponentType, useState, FC, FormEvent } from 'react'
import { Form, Input, Button, message } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import { RouteComponentProps } from 'react-router-dom'
import { useService } from '../../hooks'
import { FetchConfig } from '../../modals/http'

import './index.scss'

type LoginProps = RouteComponentProps & FormComponentProps

const Login: FC<LoginProps> = (props: LoginProps) => {
  const [fetchConfig, setFetchConfig] = useState<FetchConfig>({
    url: '', method: 'GET', params: {}, config: {}
  })
  const { response = {} } = useService(fetchConfig)
  const { getFieldDecorator } = props.form
  const { code = 0, data = {} } = response || {}

  /* 登录成功 */
  if (code === 1) {
    const { msg, token } = data
    localStorage.setItem('token', token)
    message.success(msg)
    props.history.push('/')
  }

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault()
    const { form } = props
    form.validateFields(async (err, values) => {
      if (!err) {
        const { username, password } = values
        const loginConfig: FetchConfig = {
          url: 'inner/login',
          method: 'POST',
          params: { username, password },
          config: {}
        }
        setFetchConfig(Object.assign({}, loginConfig))
      }
    })
  }

  // const handleFormSubmit = (e: FormEvent) => {
  //   e.preventDefault()
  //   const { form } = props;
  //   form.validateFields(async (err,values) => {
  //     if(!err) {
  //       const {username, password} = values
  //       console.log(values)
  //       const result = await login({account: username, password})
  //       sessionStorage.setItem('id', result.id)
  //       // sessionStorage.setItem('userName', result.user_name)
  //       console.log(result)
        
  //       // props.history.push('/')
  //     }
  //   }) 
  // }
  return (
    <div className="login">
      <div className="login__header">
        <h1><i>登录</i></h1>
      </div>

      <section className="login__section">
        <div id="fade-box">
          <div className="login__form">
            <Form  onSubmit={ handleFormSubmit }>
              <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入用户名!' }],
              })(
                <Input placeholder="Username" />
              )}
              </Form.Item>

              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码!' }]
                })(
                  <Input placeholder="Password" />
                )}
              </Form.Item>
              <Button htmlType="submit">Log In</Button> 
            </Form>

          </div>
        </div>

        <div className="hexagons">
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <br />
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>

          <br />
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span> 
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          
          <br />
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <br />
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
          <span>&#x2B22;</span>
        </div> 
      </section>

      <div id="circle1">
        <div id="inner-cirlce1">
          <h2> </h2>
        </div>
      </div>

      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}

export default Form.create({name: 'loginForm'})(Login) as ComponentType;