  import './App.css';
  import { ThemeProvider } from './context/ThemeContext';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import HomePage from './components/HomePage';
  //import Dashboard from './components/Dashboard';
  import AppBar from './components/AppBar';
  import Products from './components/Products';
  import People from './components/People';
  import Billing from './components/Billing';
  import Reports from './components/Reports';
  import AddProduct from './utils/AddProduct';
  import EditProduct from './components/EditProduct';
  import ViewProduct from './components/ViewProduct';

  function App() {
    return (
      <ThemeProvider>
        <Router>
          <div className="App">
            <AppBar />
            <div className='container overflow-hidden h-full mt-16'>
              <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                <Route path="/products" element={<Products />} />
                <Route path="/people" element={<People />} />
                <Route path="/billing" element={<Billing />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/edit-product/:id" element={<EditProduct />} />
                <Route path="/view-product/:id" element={<ViewProduct />} />
              </Routes>
            </div>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
  export default App;


