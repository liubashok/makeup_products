import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../redux/makeupSlice';

const useNavigateToHome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleToHome = () => {
    dispatch(setCurrentPage(1));
    navigate('/');
  };

  return handleToHome;
};

export default useNavigateToHome;