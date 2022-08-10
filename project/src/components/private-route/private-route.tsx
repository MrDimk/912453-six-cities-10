import { Navigate } from 'react-router-dom';
import { AccessType } from '../../const';

type PrivateRouteProps = {
  children: JSX.Element,
  access: AccessType,
};

function PrivateRoute({ children, access }: PrivateRouteProps): JSX.Element {
  const hasAccess = access === AccessType.authorized;
  return hasAccess ? children : <Navigate to={'/login'} />;
}

export default PrivateRoute;
