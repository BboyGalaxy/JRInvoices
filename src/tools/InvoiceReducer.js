
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    invoiceId: 0,
    customerName: "",
    invoiceDate: "",
    taxCheck: false,
    tax: 0,
    subtotal: 0,
    total: 0,
    content: [],
    details: []

}

const calculateSubtotal = (details) => {
    var subtotal = 0
    details.map((detail) => {
        subtotal += parseFloat(detail.amount) 
    })

    return subtotal
}

const calculateTax = (subtotal) => {
    return parseFloat(subtotal) * 0.07
}

const calculateTotal = (state) => {
    state.subtotal = calculateSubtotal(state.details)
            if(state.taxCheck) {
                state.tax = calculateTax(state.subtotal)
            }

    state.total = state.subtotal + state.tax
}

export const invoiceSlice = createSlice({
    name: "invoice",
    initialState,
    reducers: {
        changeInvoiceId: (state, action) => {
            state.invoiceId = action.payload
        },
        changeCustomerName: (state, action) => {
            state.customerName = action.payload
        },
        changeInvoiceDate: (state, action) => {
            state.invoiceDate = action.payload
        },
        changeTaxCheck: (state, action) => {
            state.taxCheck = action.payload
            if(!action.payload){
                state.tax = 0
            }
            calculateTotal(state)
        },
        addContent: (state, action) => {
            const { contentIndex, vin, carDescription} = action.payload
            var exists = false
            state.content.map((content, index) => {
                if(content.contentIndex === contentIndex){
                    exists = true
                    state.content[index].vin = vin
                    state.content[index].carDescription = carDescription
                }
            })
            if(!exists){
                state.content.push({contentIndex, vin, carDescription})
            }
        },
        addDetail: (state, action) => {
            const { contentIndex, index,  service, amount } = action.payload
            var exists = false
            state.details.map((detail, localIndex) => {
                if(detail.contentIndex === contentIndex && detail.index === index){
                    exists = true
                    state.details[localIndex].service = service
                    state.details[localIndex].amount = amount || 0
                }
            })
            if(!exists){
                state.details.push({ contentIndex, index, service, amount})
            }
            calculateTotal(state)
        },
        deleteDetail: (state, action) => {
            console.log(action.payload)
            var newDetails = []
            state.details.map((detail) => {
                if(detail.index !== action.payload){
                    newDetails.push(detail)
                }
            })
            state.details = newDetails
            calculateTotal(state)
        },
        deleteContent: (state, action) => {
            var newContent = []
            var newDetails = []
            state.content.map((content) => {
                if(content.contentIndex !== action.payload){
                    newContent.push(content)
                }
            })
            state.details.map((detail) => {
                if(detail.contentIndex !== action.payload){
                    newDetails.push(detail)
                }
            })
            state.content = newContent
            state.details = newDetails
            calculateTotal(state)
        }
    }
})

export const { 
    changeInvoiceId,
    changeCustomerName,
    changeInvoiceDate,
    changeTaxCheck,
    addContent,
    addDetail,
    deleteContent,
    deleteDetail } = invoiceSlice.actions
    
export default invoiceSlice.reducer