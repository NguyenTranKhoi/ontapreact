import axios from 'axios'
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductType } from '../types/Product'

type Inputs = {
    name: string,
    price: number,
    description: string
}

type Props = {
    onEdit: (product: ProductType) => void
}

const EditPr = (props: Props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>();
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await axios.get(`http://localhost:3001/products/${id}`);
            reset(data);
        }
        getProduct();
    }, []);
    const onSubmit: SubmitHandler<Inputs> = data => {
        props.onEdit(data);
        navigate("/");
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" {...register('name', { required: true })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {errors.name && <span>Không được để trống</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                    <input type="text" {...register('price', { required: true })} className="form-control" id="exampleInputPassword1" />
                    {errors.price && <span>Không được để trống</span>}

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="text" {...register('description', { required: true })} className="form-control" id="exampleInputPassword1" />
                    {errors.description && <span>Không được để trống</span>}
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default EditPr