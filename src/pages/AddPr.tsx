import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type Inputs = {
    name: string,
    price: number,
    description: string
}

type Props = {
    onAdd: (product: Inputs) => void
}

const AddPr = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<Inputs> = (dataInput) => {
        props.onAdd(dataInput);
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

export default AddPr