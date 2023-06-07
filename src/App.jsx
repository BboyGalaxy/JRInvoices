import { Container, NextUIProvider } from '@nextui-org/react';
import { Text } from "@nextui-org/react";
import "./App.css"
import InvoicePage from './components/InvoicePage';

function App() {
 

  return (
    <NextUIProvider>
      <Container fluid justify='center' align='center' className='banner'>
        <Text h1 >JR Upholstery</Text>
      </Container>
      <InvoicePage></InvoicePage>
    </NextUIProvider>
  )
}

export default App
