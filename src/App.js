import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import  AllBooks  from './component/allBooks';
import  CreateBooks from './component/createBooks';
import EditBook from './component/editBook';
import { Button, PageHeader, Divider} from 'antd'



function App() {
  // const [count, setCount]= useState(0);
  // const [inputValue, changeInput]= useState( 'write some text' );
  const header = {
    display: 'flex',
    justifyContent: 'space-around'
  }

  
  return (
    <div className="App">
      <PageHeader style={header} title="Books App">
        
       <Link to='/'> <Button size='large' type='primary' > Home </Button> </Link> 
        <Link to='/books'> <Button size='large' type='primary'> Books </Button> </Link>
        <Link to ='/create'> <Button size='large' type='primary'> Create </Button></Link>
        
      </PageHeader>
      <Divider type='horizontal'/>
      <Routes>
        <Route path='/books' element={<AllBooks/>}/>
        <Route path='/books/:id' element={<EditBook/>}/>
        <Route path='/create' element={<CreateBooks/>}/>

      </Routes>
    </div>
  );
}

export default App;
