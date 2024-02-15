import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {BrowserRouter as Router} from "react-router-dom";
import ErrorBoundary from "./Error.Boundary.tsx";
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <ErrorBoundary>
      <Provider store={store}>
      <App/>
      </Provider>
    </ErrorBoundary>
  </Router>,
)
