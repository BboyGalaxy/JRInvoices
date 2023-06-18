import { Container, NextUIProvider, Image } from '@nextui-org/react';
import { Text } from "@nextui-org/react";
import "./App.css"
import InvoicePage from './components/InvoicePage';


function App() {
 

  return (
    <NextUIProvider>
      <Container fluid justify='center' align='center' className='banner'>
        <Image
          width={200}
          height={200}
          src="/logo.png"
        />
        <Text h1 >JR Upholstery</Text>
      </Container>
      <InvoicePage></InvoicePage>
    </NextUIProvider>
  )
}

export default App
