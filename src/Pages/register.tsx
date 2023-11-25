import React, {type FC} from 'react'
import Textfield from '../Component/textfield';
import Button from '../Component/button';

const RegisterPage: FC = () => {
    return <div className='h-screen flex'>
        <img className='flex-1 object-cover' src="/register.jpg" alt="" />
        <form className='flex-1' action="">
            <h3> Sign Up Form!</h3>
            <Textfield type="text" placeholder='Johnsen James' label="Enter your Name" />
            <Textfield type="email" placeholder='JohnsenJames@text.com' label="Enter your Email" />
            <Textfield type='radio' label="Enter your Gender" />
            <Textfield type="text" placeholder='Message' label="Enter your Address" />
            <Textfield type="tel" placeholder='09*********' label="Enter your Phone Number" />
            <Textfield type="password" placeholder='At least 5 characters' label="Enter your Password" />
            <Textfield type="password" placeholder='Johnsen' label="Repeat Password" />
            <Button> Sign Up </Button>
        </form>
    </div>
}
export default RegisterPage;