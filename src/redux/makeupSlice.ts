import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';


export interface MakeupProduct {
  id: number;
  name: string;
  brand: string;
  price: string;
  image_link: string;
  product_type: string;
  category: string;
  description: string;
}

export interface MakeupState {
  products: MakeupProduct[];
  favorites: number[]; 
  loading: boolean;
  error: string | null;
  currentPage: number;
  productsPerPage: number;
  isLoaded: boolean;
}

const initialState: MakeupState = {
  products: [],
  favorites: [],
  loading: false,
  error: null,
  currentPage: 1,
  productsPerPage: 12,
  isLoaded: false,
};

export const fetchMakeupProducts = createAsyncThunk(
  'makeup/fetchProducts',
  async () => {
    const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json');
    const data = await response.json();
    return data;
  }
);

export const checkLocalStorage = createAsyncThunk(
  'makeup/checkLocalStorage',
  async () => {
    const makeupStore = JSON.parse(localStorage.getItem('makeupStore') || '{}');
    return makeupStore.makeup && Array.isArray(makeupStore.makeup.products) && makeupStore.makeup.products.length === 0;
  }
);

const makeupSlice = createSlice({
  name: 'makeup',
  initialState,
  reducers: {
    setMakeupProducts: (state, action) => {
      state.products = action.payload;
      state.isLoaded = true;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    addProduct: (state, action: PayloadAction<MakeupProduct>) => {
      state.products.push(action.payload)
    },
    updateProduct: (state, action: PayloadAction<MakeupProduct>) => {
      const updatedProduct = action.payload;
      const index = state.products.findIndex((product) => product.id === updatedProduct.id);
      if (index !== -1) {
        state.products[index] = updatedProduct;
      }
    },
    toggleFavorite: (state, action) => {
      const productId = action.payload;
      if (state.favorites.includes(productId)) {
        state.favorites = state.favorites.filter((id) => id !== productId);
      } else {
        state.favorites.push(productId);
      }
    },
    removeProduct: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter((product) => product.id !== productId);
      state.favorites = state.favorites.filter((id) => id !== productId);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMakeupProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMakeupProducts.fulfilled, (state, action) => {
        if (!state.isLoaded) {
          state.products = action.payload;
          state.isLoaded = true;
        }
        state.loading = false;
      })
      .addCase(fetchMakeupProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load products';
      })
      .addCase(checkLocalStorage.fulfilled, (state, action) => {
        if (action.payload) {
          state.isLoaded = false;
        }
      });
  },
});

export const { addProduct, updateProduct, toggleFavorite, removeProduct, setMakeupProducts, setCurrentPage } = makeupSlice.actions;
export default makeupSlice.reducer;