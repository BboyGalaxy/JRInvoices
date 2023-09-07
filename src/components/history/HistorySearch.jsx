import { Input, Text } from "@nextui-org/react"
import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { fetchHistoryAsync } from "../../tools/fetchHistoryAsync"
// import { setHistoryData } from "../../tools/HistoryReducer"
import "./HistorySearch.css"

const HistorySearch = () => {
    const [from, setFrom] = useState(dayjs().format('YYYY-MM-DD'))
    const [to, setTo] = useState(dayjs().format('YYYY-MM-DD'))
    const dispatch = useDispatch()

    const fromHandleChange = (e) => {
        const newFrom = dayjs(e.target.value).format('YYYY-MM-DD');
        setFrom(newFrom);
    }
    
    const toHandleChange = (e) => {
        const newTo = dayjs(e.target.value).format('YYYY-MM-DD');
        setTo(newTo);
    }


    useEffect(() => {
        fetchHistoryAsync(dispatch, from, to);
    },[dispatch, from, to]);

    return (
        <div className="history-search">
            <div>
                <Text className="text">From:</Text>
                <Input
                    name="from"
                    type="date"
                    className="input-search"
                    bordered
                    aria-label="Select starting date"
                    onChange={fromHandleChange}
                    value={from} />
                    
            </div>
            <div>
                <Text className="text">To:</Text>
                <Input
                    name="to"
                    type="date"
                    className="input-search"
                    bordered
                    aria-label="Select ending date"
                    onChange={toHandleChange}
                    value={to} />
            </div>
        </div>
    )
}

export default HistorySearch