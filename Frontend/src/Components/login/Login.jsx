import React from 'react'
import { useForm } from 'react-hook-form';
import'./Login.css'
function Login() {
  let { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <div>
        <h1>Login</h1>
        <div className='row'>
        <div className='col-11 col-sm-10 col-md-6 mx-auto'>
            <form action="" className='p-5 login rounded'>
            <div className='mb-3'>
         <label htmlFor="username" className='form-label'>Username</label>
         <input type="text" id='username'{...register('username',{required:true})} className='form-control' />
          {errors.username?.type==='required' && <p className='text-danger'>Username required</p>}
        </div>
        <div className='mb-3'>
         <label htmlFor="password" className='form-label'>Password</label>
         <input type="text" id='password'{...register('password',{required:true})} className='form-control' />
          {errors.password?.type==='required' && <p className='text-danger'>Password required</p>}
        </div>
        <div className='d-flex justify-content-evenly'>
            <button className=' btn btn-primary'>Login</button>
        </div>
        </form>
         </div>
        </div>
    </div>
  )
}

export default Login