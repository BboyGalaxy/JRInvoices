import { Button, Card, Container, Row, Spacer, Text } from "@nextui-org/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContent, addDetail, deleteContent, deleteDetail } from "../tools/InvoiceReducer";
import Content from "./Content";
import ContentDetail from "./ContentDetail";
import "./InvoiceContent.css"

const InvoiceContent = () => {

    const [content, setContent] = useState([])
    const [details, setDetails] = useState([])
    const [count, setCount] = useState(0)
    const [countDetails, setCountDetails] = useState(0)

    const dispatch = useDispatch()

    const handleAddContent = () => {
        setCount(count + 1);
        setContent([...content,{contentIndex: count, content: <Content key={count} contentIndex={count} />}]);
        dispatch(addContent({contentIndex: count, vin: "", carDescription: ""}))

    }

    const handleDeleteContent = (index, contentIndex) => {
        const updatedcontents = [...content];
        var updatedDetails = []
        details.map((detail) => {
            if(detail.contentIndex !== contentIndex){
                updatedDetails.push(detail)
            }
        })
        updatedcontents.splice(index, 1);
        setContent(updatedcontents);
        setDetails(updatedDetails)
        dispatch(deleteContent(contentIndex))
    };

    const handleAddDetail = (contentIndex) => {
        setCountDetails(countDetails + 1 )
        setDetails([...details, {contentIndex: contentIndex, index: countDetails, detail: <ContentDetail key={countDetails} contentIndex={contentIndex} index={countDetails}/>}])
        dispatch(addDetail({contentIndex: contentIndex, index: countDetails, service: "", amount: 0}))
    }

    const handleDeleteDetail = (index) => {
        const updatedDetails = [...details];
        const detailIndex = updatedDetails[index].index
        
        updatedDetails.splice(index, 1);
        setDetails(updatedDetails);
        dispatch(deleteDetail(detailIndex))
    }
    return (
        <div>
            <Text h3 b>Content:</Text>
            {content.map((content, contentIndex) => (
                <Card variant='bordered' key={contentIndex} className='card-content'>
                    <Card.Header className="card-header">
                        {content.content}
                    </Card.Header>
                    <Card.Divider />
                    <Card.Body>
                        {
                            details.map((detail, index) => {
                                if(detail.contentIndex == content.contentIndex)
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
                            <Button color='success' size='sm' onClick={() => handleAddDetail(content.contentIndex)}>+ Add details</Button>
                            <Button color='error' size='sm' onClick={() => handleDeleteContent(contentIndex, content.contentIndex)}>Delete</Button>
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