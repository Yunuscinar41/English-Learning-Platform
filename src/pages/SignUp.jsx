import {
    TextInput,
    PasswordInput,
    Checkbox,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
} from '@mantine/core';

import { Link } from 'react-router-dom';

export default function SignUp() {
    return (
        <Container size={420} my={40} >
            <Title
                align="center"
                sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
            >
                Welcome back!
            </Title>
            <Text color="dimmed" size="sm" align="center" mt={5}>
                Do you have already an account?{' '}
                <Link to="/sign_in" >
                    Sign In
                </Link>
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="Email" placeholder="you@gmail.com" required />
                <TextInput label="Name" placeholder="Name" required />
                <TextInput label="UserName" placeholder="UserName" required />
                <PasswordInput label="Password" placeholder="Your password" required mt="md" />
                <PasswordInput label="Password Repeat" placeholder="Your password repeat" required mt="md" />
                <Button fullWidth mt="xl">
                    Sign in
                </Button>
            </Paper>
        </Container>
    );
}