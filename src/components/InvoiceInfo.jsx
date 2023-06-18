import {  Card, Checkbox, Input, Text } from "@nextui-org/react";
import "./InvoiceInfo.css"
import { useSelector, useDispatch } from 'react-redux'
import { changeInvoiceId, changeCustomerName, changeInvoiceDate, changeTaxCheck } from '../tools/InvoiceReducer'
import { supabase } from '../tools/client'
import { useEffect } from "react";

const InvoiceInfo = () => {
    const total = useSelector((state) => state.invoice.total)
    const invoiceId = useSelector((state) => state.invoice.invoiceId)
    const dispatch = useDispatch()

    useEffect(() => {
        async function lastId(){
            const result = await supabase.from('invoice').select('invoice_id')
            .order('invoice_id', { ascending: false })
            .limit(1)
            var invoiceId = 1 //await result.data[0].invoice_id
            if(result.data.length > 0){
                invoiceId = parseInt(result.data[0].invoice_id) + 1
            }
            dispatch(changeInvoiceId(invoiceId))
        }
        lastId()
    }, [])
    


    return (
        <Card variant="bordered" css={{ p: "$5", mw: "800px"}} className='card-info'>
            <Card.Header >
                <Text b h3>
                    Invoice information:
                </Text>
            </Card.Header>
            <Input required clearable bordered label="Invoice number:" type='number' pattern="\d*" value={invoiceId}
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