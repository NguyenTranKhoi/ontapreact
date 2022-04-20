import axios from 'axios'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

type Inputs = {
    name: string,
    email: string,
    password: string
}

type Props = {
}

const Signup = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<Inputs> = async data => {
        axios.post(`http://localhost:3001/products/${data}`);
        navigate("/signin");
        toastr.success("Đăng ký thành công");
    }
    return (
        <div>
            <h2>Đăng ký</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name address</label>
                    <input type="text" {...register('name', { required: true })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {errors.name && <span>Không được để trống</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" {...register('email', { required: true })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {errors.email && <span>Không được để trống</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" {...register('password', { required: true })} className="form-control" id="exampleInputPassword1" />
                    {errors.password && <span>Không được để trống</span>}
                </div>
                <button type="submit" className="btn btn-primary">Đăng ký</button>
            </form>

        </div>
    )
}

export default Signup