import { Navigate, useLocation } from 'react-router-dom';
import useUser from '../useUser';
import Swal from 'sweetalert2';
import Loading from '../../../components/ui/Loading';

const ProtectedRoutes = ({ children, roles }) => {
    const { user, isAuth } = useUser();
    const location = useLocation();

    if (!isAuth) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Necesitas iniciar sesión para acceder a este sitio.",
        });
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user || !user.role) {
        return <Loading />;
    }

    if (roles && !roles.includes(user.role)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No tienes permisos para acceder a este sitio",
        });
        return <Navigate to="/" replace />;
    }

    return children;
}

export default ProtectedRoutes
