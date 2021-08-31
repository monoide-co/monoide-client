import React from 'react';
import {
  Stack,
  FormControl,
  Button,
  SimpleGrid,
  VisuallyHidden,
} from '@chakra-ui/react';
import { InputControl } from 'components/forms/InputControl';
import { FacebookIcon, GithubIcon, GoogleIcon } from 'components/icons';
import { DividerWithText } from 'components/texts/DividerWithText';
import { useFormik } from 'formik';

interface Props {
  onSubmit(param: { email: string; password: string }): void;
}

export const RegisterForm = ({ onSubmit }: Props) => {
  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit,
  });
  return (
    <form>
      <Stack spacing={3}>
        <InputControl
          id="fullname"
          type="text"
          label="Ingresa tu nombre"
          error={formik.errors.fullname}
          touched={formik.touched.fullname}
          value={formik.values.fullname}
          onChange={formik.handleChange}
        />
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
        <InputControl
          id="confirmPasword"
          type="password"
          label="Confirma tu contraseña"
          error={formik.errors.confirmPassword}
          touched={formik.touched.confirmPassword}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />
        <FormControl id="login-button">
          <Button type="submit" isFullWidth colorScheme="orange">
            Sign up
          </Button>
        </FormControl>
        <DividerWithText>Registrate usando...</DividerWithText>
        <SimpleGrid mt="6" columns={3} spacing="3">
          <Button color="currentColor" variant="outline">
            <VisuallyHidden>Register with Facebook</VisuallyHidden>
            <FacebookIcon />
          </Button>
          <Button color="currentColor" variant="outline">
            <VisuallyHidden>Register with Google</VisuallyHidden>
            <GoogleIcon />
          </Button>
          <Button color="currentColor" variant="outline">
            <VisuallyHidden>Register with Github</VisuallyHidden>
            <GithubIcon />
          </Button>
        </SimpleGrid>
      </Stack>
    </form>
  );
};
