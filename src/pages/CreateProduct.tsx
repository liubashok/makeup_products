import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { addProduct } from '../redux/makeupSlice';
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CreateProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.makeup.products);
  const existingIds = products.map((product) => product.id);
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [product_type, setProductType] = useState('');
  const [image_link, setImageLink] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const generateUniqueId = (existingIds: number[]): number => {
    let newId = Date.now();
  
    while (existingIds.includes(newId)) {
      newId = Date.now() + Math.floor(Math.random() * 1000);
    }
  
    return newId;
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageLink(imageUrl);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const id = generateUniqueId(existingIds);
    dispatch(addProduct({ id, name, brand, price, image_link, product_type, category, description }));

    setName('');
    setBrand('');
    setPrice('');
    setProductType('');
    setImageLink('');
    setCategory('');
    setDescription('');
  };

  return (
    <div style={{ margin: '20px 100px'}}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>Create New Product</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid size={{xs: 12}}>
            <TextField
              fullWidth
              label="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Grid>
          <Grid size={{xs: 12}}>
            <TextField
              fullWidth
              label="Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              required
            />
          </Grid>
          <Grid size={{xs: 12}}>
            <TextField
              fullWidth
              label="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </Grid>
          <Grid size={{xs: 12}}>
            <TextField
              fullWidth
              label="Product Type"
              value={product_type}
              onChange={(e) => setProductType(e.target.value)}
              required
            />
          </Grid>
          <Grid size={{xs: 12}}>
            <TextField
              fullWidth
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </Grid>
          <Grid size={{xs: 12}}>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {image_link && <img src={image_link} alt="Preview" style={{ width: '100px', height: 'auto', marginTop: '10px' }} />}
          </Grid>
          <Grid size={{xs: 12}}>
            <Button type="submit" variant="contained" color="primary" sx={{ marginRight: 2 }}>
              Create Product
            </Button>
            <Button variant="contained" color="primary" component={Link} to="/products">
          Back to Products
        </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CreateProduct;