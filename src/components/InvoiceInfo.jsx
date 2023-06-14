import {  Card, Checkbox, Input, Text } from "@nextui-org/react";
import "./InvoiceInfo.css"
import { useSelector, useDispatch } from 'react-redux'
import { changeInvoiceId, changeCustomerName, changeInvoiceDate, changeTaxCheck } from '../tools/InvoiceReducer'

const InvoiceInfo = () => {
    const total = useSelector((state) => state.invoice.total)
    const dispatch = useDispatch()


    return (
        <Card variant="bordered" css={{ p: "$5", mw: "800px"}} className='card-info'>
            <Card.Header >
                <Text b h3>
                    Invoice information:
                </Text>
            </Card.Header>
            <Input required clearable bordered label="Invoice number:" type='number' pattern="\d*" 
                onChange={(e) => { dispatch(changeInvoiceId(e.target.value)) }}/>
            <Input required clearable bordered label="Customer name:" width="100%"
                onChange={(e) => { dispatch(changeCustomerName(e.target.value)) }}/>
            <Input required bordered width="100%" label="Date:" type="date" 
                onChange={(e) => { dispatch(changeInvoiceDate(e.target.value))}}/>
            <Checkbox color="warning" 
                onChange={(e) => { dispatch(changeTaxCheck(e)) }}>Tax (7%)</Checkbox>
            <Input bordered label="Total:" readOnly className="total" value={total}/>
        </Card>
    )
}

export default InvoiceInfo