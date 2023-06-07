import { Input } from "@nextui-org/react"

const ContentDetail = () => {
    return(
        <div className="content-info">
                <Input required clearable bordered label="Service:" width="100%"/>
                <Input required clearable bordered label="Amount:" type="number"/>
        </ div>

    )
    
}

export default ContentDetail