import { Button, Card, Container, Row, Spacer, Text } from "@nextui-org/react";
import { useState } from "react";
import Content from "./Content";
import "./InvoiceContent.css"

const InvoiceContent = () => {

    const [components, setComponents] = useState([])
    const [count, setCount] = useState(0)
    const handleAdd = () => {
        setCount(count + 1);
        setComponents([...components, <Content key={count} />]);
    }

    const handleDelete = (index) => {
        console.log(index)
        const updatedComponents = [...components];
        updatedComponents.splice(index, 1);
        setComponents(updatedComponents);
        console.log(components)
    };
    return (
        <div>
            <Text h3 b>Content:</Text>
            {components.map((component, index) => (
                <Card variant='bordered' key={index} className='card-content'>
                    <Card.Header>
                        {component}
                    </Card.Header>
                    <Card.Divider />
                    <Card.Body>

                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                        <Row justify="flex-start" gap={2} className="card-btns">
                            <Button color='success' size='sm'>+ Add details</Button>
                            <Button color='error' size='sm' onClick={() => handleDelete(index)}>Delete</Button>
                        </Row>
                    </Card.Footer>
                </Card>
            ))}
            <Spacer  y={2}/>
            <Container fluid justify='center' align='center'>
                <Button color="success" onClick={handleAdd}> + Add content</Button>
            </Container>
        </div>

    )
}

export default InvoiceContent