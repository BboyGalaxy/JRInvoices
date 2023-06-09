import { Button, Card, Container, Row, Spacer, Text } from "@nextui-org/react";
import { useState } from "react";
import Content from "./Content";
import ContentDetail from "./ContentDetail";
import "./InvoiceContent.css"

const InvoiceContent = () => {

    const [components, setComponents] = useState([])
    const [details, setDetails] = useState([])
    const [count, setCount] = useState(0)
    const [countDetails, setCountDetails] = useState(0)

    const handleAddContent = () => {
        setCount(count + 1);
        setComponents([...components, <Content key={count} contentIndex={count} />]);
        console.log(count)

    }

    const handleDeleteContent = (index) => {
        const updatedComponents = [...components];
        updatedComponents.splice(index, 1);
        setComponents(updatedComponents);
        console.log(components)
    };

    const handleAddDetail = (index) => {
        setCountDetails(countDetails + 1 )
        setDetails([...details, {"index": index, "detail": <ContentDetail key={countDetails} contentIndex={index}/>}])
        console.log(details)
    }

    const handleDeleteDetail = (index) => {
        const updatedDetails = [...details];
        updatedDetails.splice(index, 1);
        setDetails(updatedDetails);
        console.log(details)
    }
    return (
        <div>
            <Text h3 b>Content:</Text>
            {components.map((component, contentIndex) => (
                <Card variant='bordered' key={contentIndex} className='card-content'>
                    <Card.Header className="card-header">
                        {component}
                    </Card.Header>
                    <Card.Divider />
                    <Card.Body>
                        {
                            details.map((detail, index) => {
                                if(detail.index == contentIndex)
                                    return (
                                        <div key={index} className='details'>
                                            {   detail.detail }
                                        <Button color='error' size='sm' onClick={() => handleDeleteDetail(index)}>Delete</Button>
                                        </div>
                                    )
                                          
                            })
                        }
                    </Card.Body>
                    <Card.Divider />
                    <Card.Footer>
                        <Row justify="flex-start" gap={2} className="card-btns">
                            <Button color='success' size='sm' onClick={() => handleAddDetail(contentIndex)}>+ Add details</Button>
                            <Button color='error' size='sm' onClick={() => handleDeleteContent(contentIndex)}>Delete</Button>
                        </Row>
                    </Card.Footer>
                </Card>
            ))}
            <Spacer  y={2}/>
            <Container fluid justify='center' align='center'>
                <Button color="success" onClick={handleAddContent}> + Add content</Button>
            </Container>
        </div>

    )
}

export default InvoiceContent