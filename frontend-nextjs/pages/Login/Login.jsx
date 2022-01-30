import { useRouter } from 'next/router';
import { createContext, useState, useEffect } from 'react';
import Title from '../../components/Title/Title'
import Label from '../../components/Label/Label'
import Input from '../../components/Input/Input'


const baseUrl = process.env.BASE_API_URL;

const AuthContext = createContext({
  user: null,
  signup: () => {},
  login: () => {},
  logout: () => {},
  authReady: false, 
})
const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState ('');
    const [passwordError, setPasswordError] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [hasError, setHasError] = useState (false);

    function handleChange (name, value) {
        if( name === 'e-mail'){
            setEmail(value)
            setHasError(false)

        } else{
            if(value.length < 6){
                setPasswordError(true)
                setHasError(false)
            }else{
                setPasswordError(false)
                setPassword(value)
                setHasError(false)
            }

            
        }

    }

    function ifMatch (param) {
        if (param.email.length > 0 && param.password.length > 0){
            if (param.email === 'Inma' && param.password === '123456'){
                const {email, password} = param
                let ac = {email, password}
                let account = JSON.stringify(ac)
                localStorage.setItem ('account', account)
                setIsLogin(true)
            } else {

                setIsLogin(false)
                setHasError(true)
            }
        } else{

            setIsLogin(false)
            setHasError(true)
        }
    }

    function handleSubmit () {
        let account = { email, password}
        if (account){
            ifMatch(account)
        }
    }
        return (
            <div className='login-container'>
                { !isLogin ? 
                    <div className='home-container'>
                         <h1>Hola!! {email}</h1> 
                         <label>Enhorabuena! Estás logeado.</label>
                     </div>
                :
                     <div  className ='login-content'>
                         <Title text = 'Bienvenido' />
                    {hasError &&
                        <label className = 'label-alert'>Su contraseña o usuario no son correctos,
                             o no está registrado en nuestra App
                        </label>
                }
                        <Label text = 'Email' />
                        <Input 
                            attribute = {{
                                id: 'e-mail',
                                name: 'e-mail',
                                type: "e-mail",
                                placeholder: "Introduzca su e-mail"
                             }}
                        handleChange={handleChange}
                    
                        />
                 
                               
                    <Label text = 'Password' />
                         <Input 
                             attribute = {{
                                 id: 'password',
                                 name: 'password',
                                 type: "password",
                                  placeholder: "Introduzca su contraseña"
                            }}
                             handleChange={handleChange}
                             param = {passwordError}
                        />
                { passwordError && 
                     <label className='label-error'>
                         Contraseña incorrecta o incompleta, minimo 6 caracteres
                    </label>
                 }

                <div className='sumbit-button-container'>
        
                    <button onClick={ handleSubmit} className='submit-button'>
                        Login
                    </button>
                </div>
                </div>
                }
            </div>
        
        )
};

export default Login;
