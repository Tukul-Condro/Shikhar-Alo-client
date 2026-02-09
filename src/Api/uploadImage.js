import axios from 'axios';
import React from 'react';

const uploadImage = async(imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile);

    const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_api_Key}`,formData)

    return res.data.data.url;
};

export default uploadImage;