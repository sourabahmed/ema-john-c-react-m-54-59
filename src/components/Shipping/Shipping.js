import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipping.css'
import useAuth from '../../hooks/useAuth'

const Shipping = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const {user} = useAuth();
    return (
        <div className="shipping-form">
            <form onSubmit={handleSubmit(onSubmit)}>
               
                <input placeholder="Name" defaultValue={user?.displayName} {...register("Name")} />
                <input placeholder="Email" defaultValue={user?.email} {...register("exampleRequired", { required: true })} />
                {errors.exampleRequired && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue=""{...register("address")}/>
                <input placeholder="City" defaultValue=""{...register("city")}/>
                <input placeholder="Phone number" defaultValue=""{...register("phone")}/>

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;