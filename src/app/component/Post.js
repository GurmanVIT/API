import React, { useState, useEffect } from 'react';
import HttpHelper, { entpoits1 } from '../../common/httphelper'

function Post() {



    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [newproduct, setNewproduct] = useState({})

    useEffect(() => {
        // Example GET request
        let res = HttpHelper.get(entpoits1.getProducts)
        console.log(res);
        // Example POST request
    }, []);

    useEffect(() => {
    }, [newproduct]);

    const createPorduct = async (data) => {
        let res = HttpHelper.post(entpoits1.addProducts, data)
        console.log(res);
    }

    const newProductData = (data) => {
        setNewproduct(data);
    }

    return (
        <div className='post'>
            <h1>Post API</h1>
            <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} name="name" /> <br /> <br />
            <input type='text' value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" /> <br /> <br />
            <input type='text' value={mobile} onChange={(e) => { setMobile(e.target.value) }} name="mobile" /> <br /> <br />

            <button onClick={() => { createPorduct({ "title": name, "email": email, "mobile": mobile }) }} >create new product by method</button>
            <button onClick={() => { newProductData({ "title": name, "email": email, "mobile": mobile }) }} >create new prodct by set state</button>
        </div>
    )
}

export default Post;
