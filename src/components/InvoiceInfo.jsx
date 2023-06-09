import { Card, Checkbox, Input, Text } from "@nextui-org/react";
import "./InvoiceInfo.css"

const InvoiceInfo = () => {
    return (
        <Card variant="bordered" css={{ p: "$5", mw: "800px"}} className='card-info'>
            <Card.Header >
                <Text b h3>
                    Invoice information:
                </Text>
            </Card.Header>
            <Input required clearable bordered label="Invoice number:"/>
            <Input required clearable bordered label="Customer name:" width="100%"/>
            <Input required bordered width="100%" label="Date:" type="date" />
            <Checkbox color="warning">Tax (7%)</Checkbox>
            <Input bordered width="60%" label="Total:" labelLeft  readOnly className="total"/>
        </Card>
    )
}

export default InvoiceInfo