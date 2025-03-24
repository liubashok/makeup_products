import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMakeupProducts, toggleFavorite, removeProduct, setMakeupProducts, setCurrentPage } from '../redux/makeupSlice';
import { RootState, AppDispatch } from '../redux/store';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import useNavigateToHome from '../hooks/useNavigateToHome';
import Tooltip from '@mui/material/Tooltip';

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const products = useSelector((state: RootState) => state.makeup.products);
  const loading = useSelector((state: RootState) => state.makeup.loading);
  const favorites = useSelector((state: RootState) => state.makeup.favorites);
  const currentPage = useSelector((state: RootState) => state.makeup.currentPage);
  const productsPerPage = useSelector((state: RootState) => state.makeup.productsPerPage);

  const [currentPageFavorites, setCurrentPageFavorites] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'favorites'>('all');

  const isLoaded = useSelector((state: RootState) => state.makeup.isLoaded);
  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      dispatch(setMakeupProducts(JSON.parse(storedProducts)));
    }
    else if (!isLoaded) {
      dispatch(fetchMakeupProducts());
    }
  }, [dispatch, isLoaded]);

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const favoriteProducts = filteredProducts.filter(product => favorites.includes(product.id));

  const indexOfLastProductAll = currentPage * productsPerPage;
  const indexOfFirstProductAll = indexOfLastProductAll - productsPerPage;
  const currentProductsAll = filteredProducts.slice(indexOfFirstProductAll, indexOfLastProductAll);

  const indexOfLastProductFav = currentPageFavorites * productsPerPage;
  const indexOfFirstProductFav = indexOfLastProductFav - productsPerPage;
  const currentProductsFavorites = favoriteProducts.slice(indexOfFirstProductFav, indexOfLastProductFav);

  const paginateAll = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
  };
  
  const paginateFavorites = (pageNumber: number) => {
    setCurrentPageFavorites(pageNumber);
  };

  const handleToggleFavorite = (id: number) => {
    dispatch(toggleFavorite(id));
  };

  const handleRemoveProduct = (id: number) => {
    dispatch(removeProduct(id));
  };

  const handleViewDetails = (id: number) => {
    navigate(`/products/${id}`);
  };

  const handleCreateProduct = (pageName: string) => {
    navigate(pageName);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    paginateAll(1);
  };

  const handleFilterChange = (newFilter: 'all' | 'favorites') => {
    setFilter(newFilter);
  };
  const handleToHome = useNavigateToHome();

  return (
    <div>
      <h1 onClick={handleToHome}
      role="button" 
      style={{ cursor: 'pointer', margin: '10px 15px' }}
      >Makeup Products
      </h1>
      {loading && <CircularProgress />}
  
      <TextField
        label="Search Products"
        value={searchQuery}
        onChange={handleSearchChange}
        sx={{ margin: 'auto 15px' }}
      />
      <Button onClick={() => handleFilterChange('all')} variant={filter === 'all' ? 'contained' : 'outlined'} sx={{ m: 2 }}>
        All Products
      </Button>
      <Button onClick={() => handleFilterChange('favorites')} variant={filter === 'favorites' ? 'contained' : 'outlined'}>
        Favorite Products
      </Button>

      <Grid container spacing={3} sx={{ m: 2 }}>
        {(filter === 'all' ? currentProductsAll : currentProductsFavorites).map((product) => (
          <Grid size={{xs: 12, sm: 6, md: 2}} key={product.id}>
            <Card
              onClick={() => handleViewDetails(product.id)}
              sx={{ cursor: 'pointer', maxWidth: 300, minHeight: '400px', maxHeight: '550px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
              <img src={product.image_link} alt={product.name} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
              onError={(e) => (e.currentTarget.src = `${process.env.PUBLIC_URL}/no-products-found.png`)} 
              />
              </div>
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <Tooltip title={product.name} arrow>
                <Typography
                  variant="h6"
                  sx={{
                    height: '50px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {product.name}
                </Typography>
                </Tooltip>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    height: '40px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {product.brand}
                </Typography>
                <Tooltip title={product.price} arrow>
                <Typography variant="body1"
                sx={{
                  height: '40px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
                >${product.price}
                </Typography>
                </Tooltip>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    height: '20px',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {product.product_type}
                </Typography>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                  <IconButton onClick={(event) => { event.stopPropagation(); handleToggleFavorite(product.id); }} color="primary">
                    {favorites.includes(product.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </IconButton>
                  <IconButton onClick={(event) => { event.stopPropagation(); handleRemoveProduct(product.id); }} color="secondary">
                    <DeleteIcon />
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {filter === 'all' ? (
        <div style={{ margin: '0 15px'}}>
          <Button onClick={() => paginateAll(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </Button>
          <Button onClick={() => paginateAll(currentPage + 1)} disabled={currentPage === Math.ceil(filteredProducts.length / productsPerPage)}>
            Next
          </Button>
        </div>
      ) : (
        <div style={{ margin: '0 15px'}}>
          <Button onClick={() => paginateFavorites(currentPageFavorites - 1)} disabled={currentPageFavorites === 1}>
            Previous
          </Button>
          <Button onClick={() => paginateFavorites(currentPageFavorites + 1)} disabled={currentPageFavorites === Math.ceil(favoriteProducts.length / productsPerPage)}>
            Next
          </Button>
        </div>
      )}
       <div style={{ margin: '0 15px'}}>
      <Button onClick={() => handleCreateProduct('/create-product')}>Create product</Button>
    </div>
    </div>
  );
};

export default Products;