import React from 'react'
import { FlexboxGrid, Col,  } from 'rsuite';
import Receipt from './Receipt'
import AddReceiptForm from './AddReceiptForm'

export default function ExpenseReport( props ) {
  const { receipts, onAddReceipt } = props

  const handleAddReceipt = receipt => {
    onAddReceipt && onAddReceipt( receipt )
  }

  const reportTotal = receipts
    .map( receipt => parseFloat( receipt.amount ) )
    .reduce( (prev, curr) => prev + curr, 0);

  return (
    <>
      <FlexboxGrid style={{ paddingTop: '1rem' }} justify="start">
        { receipts.map( (receipt, idx) => {
          const recProps = { ...receipt, id: idx }
          return (
            <FlexboxGrid.Item style={{ minWidth: '200px' }} componentClass={ Col } colspan={ 24 } md={ 8 }>
              <Receipt { ...recProps} />
            </FlexboxGrid.Item>
          )
        } ) }
      </FlexboxGrid>

      <h2>Report Total: ${ reportTotal }</h2>

      <AddReceiptForm onSubmitFrom={ handleAddReceipt } />
    </>
  )
}
