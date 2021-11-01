import DataTable from 'components/DataTable';
import Footer from 'components/Footer';
import NavBar from 'components/Navbar';
import React from 'react';
import './App.css';

function App() {
  return (
    <>
    <NavBar />
    <div className="text-primary">
      <div className="container">

        <h1>Bem viando ao React Spring</h1>
        <DataTable />

      </div>
    </div>
    <Footer />
    </>
  );
}

export default App;
