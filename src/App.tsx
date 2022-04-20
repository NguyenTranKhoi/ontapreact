import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { ProductType } from './types/Product'
import axios from 'axios';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import { Route, Routes } from 'react-router-dom';
import ListPr from './pages/ListPr';
import AddPr from './pages/AddPr';
import EditPr from './pages/EditPr';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import { User } from './types/User';

function App() {
  const [products, setProduct] = useState<ProductType[]>([]);

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get("http://localhost:3001/products");
      setProduct(data);
    }
    getProduct();
  }, []);

  //Add Pr
  const CreateProduct = async (product: any) => {
    const { data } = await axios.post("http://localhost:3001/products", product);
    setProduct([...products, data]);
    toastr.success("Thêm sản phẩm thành công");
  }
  //Edit Pr
  const UpdateProduct = async (product: ProductType) => {
    const { data } = await axios.put(`http://localhost:3001/products/${product.id}`, product);
    setProduct(products.map(item => item.id === product.id ? product : item));
    toastr.success("Sửa thành công");
  }
  //Remove Pr
  const RemoveProduct = async (id: number) => {
    axios.delete(`http://localhost:3001/products/${id}`);
    const confirm = window.confirm("Bạn muốn xoá sản phẩm này không ?");
    toastr.success("Xoá thành công");
    if (confirm) {
      setProduct(products.filter(item => item.id !== id));
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ListPr ListPr={products} onRemove={RemoveProduct} />} />
        <Route path='/products/add' element={<AddPr onAdd={CreateProduct} />} />
        <Route path='/products/:id/edit' element={<EditPr onEdit={UpdateProduct} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </div>
  )
}

export default App
