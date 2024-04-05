import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from '../components/inputs/FormInput';
import { userLogin } from '../api_service/auth/Auth';
import { useState } from 'react';

// And now we can use these
const Login = () => {
    const router = useNavigate()
    const [message, setMessage] = useState("")

    const login = async (data: any) => {
        try {
            await userLogin(data).then((response) => {
                if (response.data.status.success)
                {
                    router("/dashboard")
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
                <h1 className='text-[#26a0da] text-2xl font-bold tracking-widest'>Login</h1>
                <Formik
                    initialValues={{
                    password: '',
                    user_name: '',
                    }}
                    validationSchema={Yup.object({
                    password: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    user_name: Yup.string()
                        .required('Required')
                    })}
                    onSubmit={login}
                >
                    <Form className='flex flex-col justify-center items-center w-full'>

                    <FormInput
                        label="Username"
                        name="user_name"
                        type="text"
                        placeholder="Enter your username"
                    />
                    <FormInput
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                    {message}
                    <Button type="submit" text='Login' className='btn-primary bg-gradient-to-r from-[#314755] to-[#26a0da] mt-3'/>
                    <p className='mt-4'>Don't have an account? <Link to={'/signup'} className='text-[#26a0da] mt-4'>SignUp</Link></p>
                    </Form>
                </Formik>
            </div>
        </div>
    </div>
  );
};

export default Login