import { useContext } from 'react';
import { AuthContext, IAuthContext } from '../../components/App/context';

export const useAuth = () => useContext(AuthContext) as IAuthContext;
