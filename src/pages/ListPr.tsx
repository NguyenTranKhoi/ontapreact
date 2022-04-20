import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../types/Product'

type Props = {
    ListPr: ProductType[]
    onRemove: (id: number) => void
}

const ListPr = (props: Props) => {
    return (
        <div>
            <Link to={'/products/add'}><button className='btn btn-primary'> Add Product</button></Link>
            <br />
            <br />
            <Link to={'/signup'}><button className='btn btn-primary'>Đăng ký</button></Link>
            <br />
            <br />
            <Link to={'/signin'}><button className='btn btn-primary'>Đăng nhập</button></Link>
            <br />
            <br />
            <h2>Danh sách sản phẩm</h2>
            <br />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {props.ListPr.map((item, index) => {
                        return <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td><Link to={`/products/${item.id}/edit`}><button className='btn btn-success'>Edit</button></Link></td>
                            <td><button className='btn btn-danger' onClick={() => props.onRemove(item.id)}>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default ListPr