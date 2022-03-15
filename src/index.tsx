import ReactDOM from 'react-dom';
import Page from './Page';
import reportWebVitals from './reportWebVitals';
import { AlitaProvider } from 'redux-alita'
import './styles/antd/index.less';
import './index.css';

ReactDOM.render(
//   <React.StrictMode>
    <AlitaProvider>
        <Page />
    </AlitaProvider>
//   </React.StrictMode>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
