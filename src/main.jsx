import { createRoot } from 'react-dom/client';
import RoutesRoutes from './Routes/Routes.routes';
import './index.css';

const element = document.getElementById('root');
const root = createRoot(element);
root.render(<RoutesRoutes />);
