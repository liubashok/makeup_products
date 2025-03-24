import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { Typography, Button, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2'
import useNavigateToHome from '../hooks/useNavigateToHome';
import { useState } from 'react';
import { updateProduct, MakeupProduct } from '../redux/makeupSlice';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const products = useSelector((state: RootState) => state.makeup.products); 
  const product = products.find((product) => product.id === Number(id));
  const handleToHome = useNavigateToHome();
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState<MakeupProduct | undefined>(product);

  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (editedProduct) {
      dispatch(updateProduct(editedProduct));
      setIsEditing(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct!,
      [name]: value,
    }));
  };

  return (
    <Grid container sx={{ width: '100%', maxWidth: 1300, margin: '0 50px' }}>
        <Grid size={{xs: 12, sm: 8, md: 6}}>
       <h1 onClick={handleToHome}
      role="button" 
      style={{ cursor: 'pointer' }}
       >Makeup Products</h1> 
      <img
          src={product.image_link}
          alt={product.name}
          style={{ width: '80%', maxHeight: '600px', objectFit: 'cover' }}
          onError={(e) => (e.currentTarget.src = `${process.env.PUBLIC_URL}/no-products-found.png`)}
      />
      </Grid>
      <Grid size={{xs: 12, sm: 8, md: 6}} sx={{ marginTop: 10 }}>
      {isEditing ? (
          <>
            <TextField
              label="Name"
              name="name"
              value={editedProduct?.name || ''}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Brand"
              name="brand"
              value={editedProduct?.brand || ''}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Price"
              name="price"
              value={editedProduct?.price || ''}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Product Type"
              name="product_type"
              value={editedProduct?.product_type || ''}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Description"
              name="description"
              value={editedProduct?.description || ''}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveClick}
              sx={{ marginTop: 5, marginBottom: 3 }}
            >
              Save
            </Button>
          </>
        ) : (
          <>
          <Typography variant="h5">{product.name}</Typography>
          <Typography variant="body1">{product.brand}</Typography>
          <Typography variant="h6">${product.price}</Typography>
          <Typography variant="body2" sx={{ marginBottom: 2 }}>{product.product_type}</Typography>
          <Typography variant="body2" color="textSecondary">
              {product.description}
            </Typography>
        <Button variant="contained" 
        color="primary" 
        component={Link} 
        to="/products" 
        sx={{ marginTop: 5, marginBottom: 3, marginRight: 2 }}>
          Back to Products
        </Button>
        <Button
              variant="outlined"
              color="secondary"
              onClick={handleEditClick}
              sx={{ marginTop: 5, marginBottom: 3 }}
            >
              Edit Product
            </Button>
        </>
        )}
      </Grid>
      </Grid>
  );
};

export default ProductDetails;