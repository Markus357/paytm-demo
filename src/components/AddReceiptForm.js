import React from 'react'
import {
  FlexboxGrid,
  Col,
  Panel,
  Form,
  FormGroup,
  ControlLabel,
  Input,
  HelpBlock,
  ButtonToolbar,
  Button,
} from 'rsuite'

import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function AddReceiptForm({ onSubmitFrom }) {
  const validationSchema = Yup.object().shape( {
    description: Yup
      .string()
      .required( 'This field is required' ),
    amount: Yup
      .number()
      .positive()
      .lessThan( 1000 )
      .required( 'This field is required' ),
  } )

  const formik = useFormik( {
    initialValues: { description: '', amount: 0 },
    validationSchema,
    onSubmit: async ( values, { setFieldError } ) => {
      onSubmitFrom && onSubmitFrom( values )
    },
  } )

  const { values, errors, touched, setTouched, isSubmitting, handleChange } = formik

  console.log({ errors })
  return (
    <FlexboxGrid style={{ paddingTop: '1rem' }} justify="space-around">
      <FlexboxGrid.Item componentClass={ Col } colspan={ 24 } >
        <Panel header="Add Receipt">
          <Form>
            <FormGroup>
              <ControlLabel>Amount</ControlLabel>
              <Input onChange={ (_, e) => handleChange(e) } name="amount"  />
              { errors.amount && <HelpBlock>{ errors.amount }</HelpBlock> }
            </FormGroup>

            <FormGroup>
              <ControlLabel>Description</ControlLabel>
              <Input onChange={ (_, e) => handleChange(e) } rows={5} name="description" componentClass="textarea"  />
            </FormGroup>
            <FormGroup>
              <ButtonToolbar>
                <Button appearance="primary" onClick={ formik.handleSubmit }>Submit</Button>
                <Button appearance="default">Cancel</Button>
              </ButtonToolbar>
            </FormGroup>
          </Form>
        </Panel>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  )
}
