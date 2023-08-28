import { Button, Card, Container, Input, Text } from "@nextui-org/react"
import "./Login.css"

const Login = () => {
     return <Container className="login-container">
        <Text h2>Login</Text>
        <Card className="login-card">
            <Text className="text">Username:</Text>
            <Input name="username"  required autoFocus clearable bordered  width="90%" />
            <Text className="text">Password:</Text>
            <Input name="password" type="password"  required autoFocus clearable bordered  width="90%" />
            <Button type="submit" color="primary" variant="shadow" auto  className="button">Log in</Button>
        </Card>
     </Container>
}

export default Login