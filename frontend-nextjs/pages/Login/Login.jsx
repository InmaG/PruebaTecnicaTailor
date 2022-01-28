import React, {useState} from 'react'
import Title from '../../components/Title/Title'
import Label from '../../components/Label/Label'
import Input from '../../components/Input/Input'



const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState ('');
    const [passwordError, setPasswordError] = useState(false);

    function handleChange (name, value) {
        if( name === 'e-mail'){
            setEmail(value)

        } else{

            setPassword(value)
        }

    }

    function handleSubmit () {
        let account = { email, password}
        if (account){

        }
    }
        return (
            <div className='login-container'>
                <Title text = 'Bienvenido' />
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
                      
                />
                 

                <button onClick={ handleSubmit} >
                    Login
                </button>

            </div>
        )
};

export default Login;
