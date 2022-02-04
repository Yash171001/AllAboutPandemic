
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import AppWithRouterAccess  from './AppWithRouterAccess'

// import Header from './components/Header';
// import Home from './components/home/Home';
// import DetailView from './components/posts/DetailView';
// import CreateView from './components/posts/CreateView';
// import UpdateView from './components/posts/UpdateView';


function App() {
  return (
    <>
    <BrowserRouter>
    <AppWithRouterAccess />
    </BrowserRouter>
    </>
  );
}

export default App;
