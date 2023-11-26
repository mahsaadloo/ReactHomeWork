import React, { type FC } from 'react'
import Textfield from '../Component/textfield';
import Button from '../Component/button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const registerSchema = yup.object({
    email: yup.string().required("Email field shouldn't be empty").email("Your email is not valid !"),
    password: yup.string().required("Password field shouldn't be empty"),
});

const LoginPage: FC = () => {

    const { register, handleSubmit, formState:{errors} } = useForm({resolver: yupResolver(registerSchema)});

    const [formData, setFormData ] = React.useState ({
        email: '' ,
        password: ''
    });

    const handleSubmitForm = (e: React.FormEvent): void => {console.log(formData); e.preventDefault();};

    return <div className='h-screen flex'>
        <img className='flex-1 object-cover' src="/loginnn.jpg" alt="" />
        <form onSubmit={handleSubmit((data) => {console.log(data)})} className='flex-1 px-10 py-4 w-full' action="">
            <h3 className='flex justify-center text-xl font-bold text-rose-600'> Login !</h3>
            <div className='py-3 flex flex-col gap-2'>
                <Textfield 
                    type="email"
                    placeholder='JohnsenJames@text.com'
                    label="Enter Your Email"
                    validation={register('email')}
                    helperText={<> {errors.email?.message ?? ''} </>}
                    onChange={(e) => setFormData((prevState) =>{ return {...prevState, email: e.target.value}})} />
                
                <Textfield
                    type="password"
                    label="Enter Your Password"
                    validation={register('password')}
                    helperText= {<>{errors.password?.message ?? ''}</>}
                    onChange={(e) => setFormData((prevState) => { return {...prevState, password: e.target.value}})} />
            </div>
            <Button varient='outline' onClick={handleSubmitForm}> Log in </Button>
        </form>
    </div>
}
export default LoginPage;