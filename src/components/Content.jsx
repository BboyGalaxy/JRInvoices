/* eslint-disable react/prop-types */
import {Input } from "@nextui-org/react"
import './Content.css'

const Content = () => {
    return (
        <div className="content-info">
                <Input required clearable bordered label="VIN:" />
                <Input required clearable bordered label="Brand/Model/Year:" width="100%"/>
        </ div>
    )
}

export default Content