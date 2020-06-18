import React, { ComponentType, FC, FormEvent } from 'react'
import { Form, Input, Button } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import { RouteComponentProps } from 'react-router-dom'
import { login } from '../../api/api'

import './index.scss'

type LoginProps = RouteComponentProps & FormComponentProps

const Login: FC<LoginProps> = (props: LoginProps) => {
  console.log(props)
  const { getFieldDecorator } = props.form

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault()
    const { form } = props;
    form.validateFields(async (err,values) => {
      if(!err) {
        const {usename, password} = values
        await login({usename, password})
        props.history.push('/')
      }
    }) 
  }
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