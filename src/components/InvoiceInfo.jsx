import { Card, Input, Text } from "@nextui-org/react"

const InvoiceInfo = () => {
    return (
        <Card variant="bordered" css={{ p: "$5", mw: "800px"}}>
            <Card.Header >
                <Text b h3>
                    Invoice information:
                </Text>
            </Card.Header>
            <Input required clearable bordered label="Invoice number:"/>
            <Input required clearable bordered label="Customer name:" width="100%"/>
            <Input required bordered width="100%" label="Date:" type="date" 
        />
        </Card>
    )
}

export default InvoiceInfo