/* eslint-disable react/prop-types */
import {Input } from "@nextui-org/react"
import './Content.css'

const Content = () => {
    return (
        <div className="content-info">
                <Input required clearable bordered label="VIN:"  className="cinfo-input"/>
                <Input required clearable bordered label="Brand/Model/Year:" width="100%" className="cinfo-input"/>
        </ div>
    )
}

export default Content