import React, { useState, useEffect } from 'react';
import axios from 'axios'
import 'rsuite/dist/styles/rsuite-default.css';

import ExpenseReport from './components/ExpenseReport'

import {
  Container,
  Content,
  Header,
  Navbar,
  Nav,
  Footer,
  Panel,
} from 'rsuite'

const mockReceipts = [
  {
    description: "Receipt 1 Desc",
    amount: 3.00,
    currency: 'CAD',
  },
  {
    description: "Receipt 1 Desc",
    amount: 3.00,
    currency: 'CAD',
  },
  {
    description: "Receipt 1 Desc",
    amount: 3.00,
    currency: 'CAD',
  },
  {
    description: "Receipt 1 Desc",
    amount: 3.00,
    currency: 'CAD',
  },
]

function App() {

  useEffect( () => {
    axios.get('https://api.exchangeratesapi.io/latest?base=CAD')
    .then(res => {
      console.log({ res })
    })
  }, [])

  const [ receipts, setReceipts ] = useState([])

  const onAddReceipt = receipt => {
    setReceipts( current => {
      if ( current.length === 5 ) return
      return [ ...current, receipt ]
    } )
  }

  return (
    <Container className="main-layout">
      <Header>
      <Navbar appearance="inverse">
        <Navbar.Header style={{ backgroundColor: '#fff' }}>
          <a href="/">
            <img
              src="Paytm_Logo_(standalone).svg"
              alt="PayTM Demo Home"
              style={{ margin: '0.8rem 1rem', display: 'inline-block' }}
              height="30"
            />
          </a>
        </Navbar.Header>

        <Navbar.Body>
          <Nav>
          </Nav>

          <Nav pullRight>
            <h2 style={{ color: '#fff', marginRight: '1rem' }}>
              Expense Reports Demo
            </h2>
          </Nav>
        </Navbar.Body>

      </Navbar>
      </Header>

      <Content className="content">
        <h1>Expense Report</h1>

        <ExpenseReport receipts={ receipts } onAddReceipt={ onAddReceipt } />

      </Content>

      <Footer>
        <Panel>
          <p style={{ borderTop: '1px solid #ddd', paddingTop: '1rem', textAlign: 'center' }}>
            Demo App by Mark Davidson ( mdavidson357@gmail.com )
          </p>
        </Panel>
      </Footer>
    </Container>
  );
}

export default App;
