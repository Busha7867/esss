import React from 'react'
import { useForm } from 'react-hook-form';

const Cta = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()


    const onSubmit = data => console.log(data);
    return (
       <></>
    )
}

export default Cta