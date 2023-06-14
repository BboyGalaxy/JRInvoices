/* eslint-disable react/prop-types */
import { Input } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addDetail } from "../tools/InvoiceReducer"

const ContentDetail = ({ index }) => {
    const dispatcher = useDispatch()
    const details = useSelector((state) => state.invoice.details)


    const [detail, setDetail] = useState({
        // contentIndex: contentIndex,
        // index: index,
        // service: "",
        // amount: 0
    })

    useEffect(() => {
      details.map((storeDetail) => {
        if(storeDetail.index === index){
            setDetail(storeDetail)
        }
      })
    }, [])
    

    const handleChange = (e) => {
        if(e.target.name === 'service'){
            setDetail({...detail, service: e.target.value})
        }
        else{
            setDetail({...detail, amount: e.target.value})
        }

        sendData()
    }

    const sendData = () => {
        dispatcher(addDetail(detail))

    }
    return(
        <div className="content-info">
                <Input name="service" value={detail.service} required autoFocus clearable bordered label="Service:" width="100%"
                    onChange={(e) => handleChange(e)} onBlur={(e) => handleChange(e)}/>
                <Input name="amount" value={detail.amount} required clearable bordered label="Amount:" type="number" pattern="\d*"
                    onChange={(e) => handleChange(e)} onBlur={(e) => handleChange(e)} onClick={(e) => {e.target.value = ""}}/>
        </ div>

    )
    
}

export default ContentDetail