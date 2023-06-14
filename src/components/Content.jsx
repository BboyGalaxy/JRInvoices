/* eslint-disable react/prop-types */
import {Input } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addContent } from "../tools/InvoiceReducer"
import './Content.css'

const Content = ( { contentIndex } ) => {
    const dispatch = useDispatch()
    const contents = useSelector((state) => state.invoice.content)

    const [content, setContent] = useState({
        // contentIndex: contentIndex,
        // vin: "",
        // carDescription: ""
    })

    useEffect(() => {
        contents.map((storeContent) => {
            if(storeContent.contentIndex === contentIndex){
                setContent(storeContent)
            }
          })
    }, [])
    


    const sendData = () => {
        dispatch(addContent(content))
    }

    const handleChange = (e) => {
        if(e.target.name === 'vin'){
            setContent({...content, vin: e.target.value}); 
        }
        else{
            setContent({...content, carDescription: e.target.value});
        }
        sendData();
    }
    

    return (
        <div className="content-info">
            <Input name="vin" value={content.vin} required autoFocus clearable bordered label="VIN:"  className="cinfo-input" 
                onChange={(e) => handleChange(e)} onBlur={(e) => handleChange(e)}/>
            <Input name="carDescription" value={content.carDescription} required  clearable bordered label="Brand/Model/Year:" width="100%" className="cinfo-input" 
                onChange={(e) => handleChange(e)} onBlur={(e) => handleChange(e)}/> 
        </ div>
    )
}

export default Content