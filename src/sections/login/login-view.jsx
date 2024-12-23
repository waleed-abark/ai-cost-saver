import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { Checkbox } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { useRouter } from 'src/routes/hooks';
import { useState } from 'react';

// ----------------------------------------------------------------------

export default function LoginView() {
  const theme = useTheme();

  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

  const renderForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  }) => (
    <Form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <Stack direction="column" alignItems="start" spacing={2}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 'semi-bold',
            }}
          >
            Email address
          </Typography>
          <Field
            name="email"
            fullWidth
            variant="outlined"
            as={TextField}
            error={errors.email && touched.email}
            helperText={errors.email && touched.email && errors.email}
          />
        </Stack>
        <Stack direction="column" alignItems="start" spacing={2}>
          <Typography
            sx={{
              fontWeight: 'semi-bold',
            }}
            variant="body1"
          >
            Password
          </Typography>

          <Field
            fullWidth
            name="password"
            type="password"
            as={TextField}
            error={errors.password && touched.password}
            helperText={errors.password && touched.password && errors.password}
          />
        </Stack>
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-start" sx={{ my: 3 }}>
        <Field name="remember" type="checkbox" as={Checkbox} />

        <Typography variant="subtitle2" underline="hover">
          Remember Password
        </Typography>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        color="primary"
        sx={{ my: 3 }}
        loading={isSubmitting}
      >
        Login
      </LoadingButton>
    </Form>
  );

  return (
    <Box
      sx={{
        height: 1,
        background: 'url(/assets/pages/login-page/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            px: 8,
            py: 15,
            width: 1,
            maxWidth: 600,
            textAlign: 'center',
          }}
        >
          <Typography variant="h3">Login to Account</Typography>

          <Typography variant="body1" sx={{ mt: 2, mb: 5 }}>
            Please enter your email and password to continue
          </Typography>

          <Formik
            initialValues={{ email: '', password: '', remember: false }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              console.log(values);
              await new Promise((resolve) => setTimeout(resolve, 500));
              handleClick();
              resetForm();
              setSubmitting(false);
            }}
          >
            {renderForm}
          </Formik>
        </Card>
      </Stack>
    </Box>
  );
}
