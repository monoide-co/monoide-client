import React from 'react';
import {
  FormControl,
  Button,
  Stack,
  VisuallyHidden,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { DividerWithText } from 'components/texts/DividerWithText/DividerWithText';
import { FacebookIcon, GithubIcon, GoogleIcon } from 'components/icons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { InputControl } from 'components/forms/InputControl';

const loginSchema = Yup.object().shape({
  email: Yup.string().required(),
  password: Yup.string().required(),
});

interface LoginFormProps {
  onSubmit(param: { email: string; password: string }): void;
}

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={4}>
        <InputControl
          id="email"
          type="email"
          label="Dirección de correo"
          error={formik.errors.email}
          touched={formik.touched.email}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <InputControl
          id="password"
          type="password"
          label="Contraseña"
          error={formik.errors.password}
          touched={formik.touched.password}
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <Text as="u" color="orange.500" fontWeight="semibold" fontSize="sm">
          Forgot your password?
        </Text>
        <FormControl id="login-button">
          <Button type="submit" isFullWidth colorScheme="orange">
            Sign in
          </Button>
        </FormControl>
        <DividerWithText>Ingresar usando...</DividerWithText>
        <SimpleGrid mt="6" columns={3} spacing="3">
          <Button color="currentColor" variant="outline">
            <VisuallyHidden>Login with Facebook</VisuallyHidden>
            <FacebookIcon />
          </Button>
          <Button color="currentColor" variant="outline">
            <VisuallyHidden>Login with Google</VisuallyHidden>
            <GoogleIcon />
          </Button>
          <Button color="currentColor" variant="outline">
            <VisuallyHidden>Login with Github</VisuallyHidden>
            <GithubIcon />
          </Button>
        </SimpleGrid>
      </Stack>
    </form>
  );
};
