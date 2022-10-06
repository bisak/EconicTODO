import { useDispatch } from 'react-redux';
import { AppDispatch } from '../model/Store';

export const useAppDispatch: () => AppDispatch = useDispatch;
