import React, {type FC } from 'react'
import Textfield from '../Component/textfield';
import Button from '../Component/button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const registerSchema = yup.object({
    email: yup.string().required("Email field shouldn't be empty").email("Your email is not valid !"),
    password: yup.string().required("Password field shouldn't be empty"),
});

const RegisterPage: FC = () => {

    const { register, handleSubmit, formState:{errors} } = useForm({resolver: yupResolver(registerSchema)});

    const [formData, setFormData ] = React.useState({
        name: '',
        email: '' ,
        gender: '',
        address: '',
        phoneNumber: '',
        password: ''
    });

    const handleSubmitForm = (e: React.FormEvent):void => { console.log(formData); e.preventDefault();};

    return <div className='h-screen flex'>
        <img className='flex-1 object-cover' src="/register.jpg" alt="" />
        <form onSubmit={handleSubmit((data) => {console.log(data)})} className='flex-1 px-10 py-4 w-full' action="">
            <h3 className='flex justify-center text-xl font-bold text-rose-600'> Sign Up Form!</h3>
            <div className='py-3 flex flex-col gap-2'>
                <Textfield 
                    type="text"
                    placeholder='Johnsen James'
                    label="Name"
                    onBlur={(e) => setFormData((prevState) => { return {...prevState, name: e.target.value}})} />
                
                <Textfield 
                    type="email"
                    placeholder='JohnsenJames@text.com'
                    label="Email"
                    validation={register('email')}
                    helperText={<> {errors.email?.message ?? ''} </>}
                    onBlur={(e) => setFormData((prevState) => { return {...prevState, email: e.target.value}})} />
                
                <Textfield
                    type='radio'
                    label="Gender"
                    onBlur={(e) => setFormData((prevState) => { return {...prevState, gender: e.target.value}})} />
                
                <Textfield
                    type="text"
                    placeholder='Address'
                    label="Address"
                    onBlur={(e) => setFormData((prevState) => { return {...prevState, address: e.target.value}})} />
                
                <Textfield
                    type="tel"
                    placeholder='09*********'
                    label="Phone Number"
                    onBlur={(e) => setFormData((prevState) => { return {...prevState, phoneNumber: e.target.value}})} />
                
                <Textfield
                    type="password"
                    placeholder='At least 5 characters'
                    label="Password"
                    validation={register('password')}
                    helperText= {<>{errors.password?.message ?? ''}</>}
                    onBlur={(e) => setFormData((prevState) => { return {...prevState, password: e.target.value}})} />
                
                <Textfield
                    type="password"
                    placeholder='Johnsen'
                    label="Repeat Password" />
            </div>
            <Button onClick={handleSubmitForm}> Sign Up </Button>
        </form>
    </div>
}
export default RegisterPage;