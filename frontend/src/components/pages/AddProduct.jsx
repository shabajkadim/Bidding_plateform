import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const AddProduct = () => {
    
    const [uploadedData, setUploadedDada] = useState({ name: "", price: "", image: "", category: "", productDetails:"",isAvailable:"",description: "" })

    function handleChange(e) {
        setUploadedDada({ ...uploadedData, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        if (uploadedData.name && uploadedData.price && uploadedData.image && uploadedData.category && uploadedData.isAvailable && uploadedData.description) {
            try {
                // const response = await api.post('/product/add-product', { uploadedData })
                const response=await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/product/add-product`,{uploadedData})
                if (response?.data.success) {
                    toast(response.data.message)
                    setUploadedDada({ name: "", price: "", image: "", category: "",isAvailable:"", productDetails:"",description: "" })
                }
            } catch (error) {
                toast(error)
            }
        } else {
            toast("All fields are required.")
        }
    }
    return (
        <div>
            <h1>AddProduct</h1>
            <form onSubmit={handleSubmit}>
                <label>Name :</label><br />
                <input type="text" value={uploadedData.name} onChange={handleChange} name='name' /><br />
                <label>Price :</label><br />
                <input type="number" value={uploadedData.price} onChange={handleChange} name="price" /><br />
                <label>Image :</label><br />
                <input type="url" value={uploadedData.image} onChange={handleChange} name='image' /><br />
                <label>Category :</label><br />
              
                <select  id='category' name='category' onChange={handleChange} value={uploadedData.category}>
                 <option value={"others"} >Select Category</option>
                 <option value={"jwellery"}>jwellery</option>
                 <option value={"watch"}>watch</option>
                 <option value={"sales"}>sales</option>
              </select><br />

              <label>isAvailable</label><br/>
              <select  id='isAvailable' name='isAvailable' onChange={handleChange} value={uploadedData.isAvailable}>
                 <option value={"others"} >Select Category</option>
                 <option value={"liveBid"}>liveBid</option>
                 <option value={"outOfStock"}>outOfStock</option>
              </select><br />
              
            <label>description :</label><br />
               <textarea id='description' onChange={handleChange} name='description' value={uploadedData.description} ></textarea>
    
     <input type="submit" value="Add Product" /><br />
            </form>
        </div>
    )
}

export default AddProduct






