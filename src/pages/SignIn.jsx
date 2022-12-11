import { Link } from 'react-router-dom';

export default function SignIn() {
    return (
        <Container size={420} my={40} >
            <Title
                align="center"
                sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
            >
                Welcome back!
            </Title>
            <Text color="dimmed" size="sm" align="center" mt={5}>
                Do not have an account yet?{' '}
                <Link to="/sign_up" >
                    Create account
                </Link>
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                <TextInput label="Email" placeholder="you@mantine.dev" required />
                <PasswordInput label="Password" placeholder="Your password" required mt="md" />
                <Group position="apart" mt="lg">
                    <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
                    <Link to="/forgot_password" >
                        Forgot Password
                    </Link>
                </Group>
                <Button fullWidth mt="xl">
                    Sign in
                </Button>
            </Paper>
        </Container>
    );
}