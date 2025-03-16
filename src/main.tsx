import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import router from './router.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
