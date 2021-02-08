import React from 'react'
import { Panel, List } from 'rsuite'

import './Receipt.css'

export default function Receipt(props) {
  const { id, description, amount, currency, style } = props

  return (
    <Panel className="receipt" style={ style } header={ `Receipt ${ id }` } shaded>
      <List>
        <List.Item>
          <span className="label">Amount</span>:
          <span className="value">${ amount } ({ currency || 'CAD' })</span>
        </List.Item>

        <List.Item className="item">
          <span className="label">Description</span>:
          <span className="value">{ description }</span>
        </List.Item>
      </List>
    </Panel>
  )
}
