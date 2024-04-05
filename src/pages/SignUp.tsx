import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import TextInput from '../components/inputs/FormInput';
import { userRegister } from '../api_service/auth/Auth';
import { useState } from 'react';

// And now we can use these
const SignUp = () => {
    const [message, setMessage] = useState("")
    const register = async (data: any) => {
        try {
            await userRegister(data).then((response) => {
                if (response.data.status.success)
                {
                    setMessage("User has been registered successfully!");
                    setTimeout(() => {
                        setMessage("")
                      }, 5000);
                }
            })
        } catch (error: any) {
                setMessage(error.message);
                setTimeout(() => {
                    setMessage("")
                  }, 5000);
        }
    }
  return (
    <div className='flex w-screen h-screen items-center justify-center'>
        <div className='flex justify-center items-center w-2/3'>
            <div className='flex flex-col justify-center items-center w-[50%] h-max py-10 shadow-md'>
                <h1 className='text-[#26a0da] text-2xl font-bold tracking-widest'>Signup</h1>
                <Formik
                    initialValues={{
                    firstName: '',
                    lastName: '',
                    user_name: '',
                    password: ''
                    }}
                    validationSchema={Yup.object({
                    password: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                        user_name: Yup.string()
                        .required('Required'),
                        firstName: Yup.string()
                        .required('Required'),
                        lastName: Yup.string()
                        .required('Required')
                    })}
                    onSubmit={register}
                >
                    <Form className='flex flex-col justify-center items-center w-full'>
                    <TextInput
                        label="First Name"
                        name="firstName"
                        type="text"
                        placeholder="Enter your first name"
                    />
                    <TextInput
                        label="Last Name"
                        name="lastName"
                        type="text"
                        placeholder="Enter your last name"
                    />
                    <TextInput
                        label="Username"
                        name="user_name"
                        type="text"
                        placeholder="Enter your username"
                    />
                    <TextInput
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                    {message}
                    <Button type="submit" text='Signup' className='btn-primary bg-gradient-to-r from-[#314755] to-[#26a0da] mt-3'/>
                    <p className='mt-4'>Already have an account? <Link to={'/login'} className='text-[#26a0da] mt-4'>Login</Link></p>
                    </Form>
                </Formik>
            </div>
        </div>
    </div>
  );
};

export default SignUp