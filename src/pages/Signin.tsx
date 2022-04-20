import axios from 'axios'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

type Inputs = {
    email: string,
    password: string
}

type Props = {}

const Signin = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        axios.post(`http://localhost:3001/products/${data}`);
        navigate("/");
        toastr.success("Đăng nhập thành công");
    }
    return (
        <div>
            <h2>Đăng nhập</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Đăng nhập</button>
            </form>

        </div>
    )
}

export default Signin