// import logo from '../logo.svg';
import Header from './Header';
import Footer from './Footer';
import Noteh from './Noteh';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Button from '@material-ui/core/Button';
import Notes from './Notes'; 
import './App.css';
import { useState } from 'react';

const App = () => {

  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // alert('you click on button');
    setAddItem((preData) => {
      return[...preData,note];
    });

  ;}

  const onDelete = (id) => {
    setAddItem((olddata) => {
      return olddata.filter((currdata, indx) =>{
        return indx !== id;
      });
    });
  };

  return (
    <>
      <Header />
      <div style={{ backgroundColor:"#202124", color:"#ffff", minHeight: "84vh"}}>
      <Noteh passNote={addNote}/> 
          <div className="container px-2">
            <div className="row">
              {addItem.map((val,index) => {
                return <Notes 
                  key ={index}
                  id={index}
                  title={val.title}
                  content={val.content}
                  deleteItem={onDelete}
                />
              })}
            </div>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
