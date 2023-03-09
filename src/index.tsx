import '@styles/index.scss';
import { createRoot } from 'react-dom/client';
import { App } from '@/App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ColorProvider } from '@context/ColorContext/ColorProvider';
import store from '@/store';

const root = createRoot(document.getElementById('root'));

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<ColorProvider>
				<App />
			</ColorProvider>
		</BrowserRouter>
	</Provider>
);
