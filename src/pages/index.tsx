import { LoadableComponent } from '../components'


const Login = LoadableComponent(() => import('./Login'))

export {
  Login
}