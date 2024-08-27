import React from 'react'
import './Region.css'
import { useForm } from 'react-hook-form';
function Region() {
  let { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <div>
        <h1>Region</h1>
        <div className='row'>
        <div className='col-11 col-sm-10 col-md-6 mx-auto'>
            <form action="" className='p-5 login rounded'>
            <div className='mb-3'>
         <label htmlFor="state" className='form-label'>State</label>
         <input type="text" id='state'{...register('state',{required:true})} className='form-control' />
          {errors.state?.type==='required' && <p className='text-danger'>State required</p>}
        </div>
        <div className='mb-3'>
         <label htmlFor="district" className='form-label'>District</label>
         <input type="text" id='district'{...register('district',{required:true})} className='form-control' />
          {errors.district?.type==='required' && <p className='text-danger'>Districtname required</p>}
        </div>
        <div className='mb-3'>
         <label htmlFor="village" className='form-label'>Village</label>
         <input type="text" id='village'{...register('village',{required:true})} className='form-control' />
          {errors.village?.type==='required' && <p className='text-danger'>Villagename required</p>}
        </div>
        <div className='d-flex justify-content-evenly'>
            <button className='btn btn-primary'>Select Region</button>
        </div>
      </form>
      </div>
    </div>
    </div>
  )
}

export default Region