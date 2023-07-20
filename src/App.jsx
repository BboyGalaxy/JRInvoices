import { Container, NextUIProvider, Image } from '@nextui-org/react';
import { Text } from "@nextui-org/react";
import { Outlet } from 'react-router-dom';
import "./App.css"
import Menu from './components/menu/Menu';


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
      <Menu></Menu>
      <Outlet />
    </NextUIProvider>
  )
}

export default App
