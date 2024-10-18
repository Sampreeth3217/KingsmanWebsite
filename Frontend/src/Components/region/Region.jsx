import React from 'react';
import './Region.css';
import { useForm } from 'react-hook-form';

function Region() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Placeholder for submission logic
    };

    return (
        <div className="region-container">
            <div className="region-box mx-auto">
                <h1>Select Region</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="region-form rounded">
                    <div className="mb-3">
                        <label htmlFor="state" className="form-label">State</label>
                        <input
                            type="text"
                            id="state"
                            {...register('state', { required: true })}
                            className="form-control"
                        />
                        {errors.state?.type === 'required' && <p className="error-text">State required</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="district" className="form-label">District</label>
                        <input
                            type="text"
                            id="district"
                            {...register('district', { required: true })}
                            className="form-control"
                        />
                        {errors.district?.type === 'required' && <p className="error-text">District required</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="village" className="form-label">Village</label>
                        <input
                            type="text"
                            id="village"
                            {...register('village', { required: true })}
                            className="form-control"
                        />
                        {errors.village?.type === 'required' && <p className="error-text">Village required</p>}
                    </div>
                    <div className="button-container">
                        <button type="submit" className="btn btn-primary">Select Region</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Region;
