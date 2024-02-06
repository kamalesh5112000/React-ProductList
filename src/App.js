import './App.css';
import ProductForm from './components/Form/ProductForm.js';


function App() {

  const onSaveProductData =(product)=>{
    console.log(product)

  }


  return (
    <div className="App">

      <ProductForm onAddProduct={onSaveProductData}/>
      
      
    </div>
  );
}

export default App;
