import { hydrate, prerender as ssr } from 'preact-iso';
import App from './app/main.tsx';
import './style/app.css';




if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
