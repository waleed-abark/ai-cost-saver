import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { Checkbox } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import { useRouter } from 'src/routes/hooks';

// ----------------------------------------------------------------------

export default function LoginView() {
  const theme = useTheme();

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    router.push('/');
  };

  const renderForm = (
    <>
      <Stack spacing={6}>
        <Stack direction="column" alignItems="start" spacing={2}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 'semi-bold',
            }}
          >
            Email address
          </Typography>
          <TextField name="email" fullWidth variant="outlined" />
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

          <TextField fullWidth sx={{}} name="password" type="password" />
        </Stack>
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-start" sx={{ my: 3 }}>
        <Checkbox />

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
        onClick={handleClick}
        sx={{ my: 3 }}
      >
        Login
      </LoadingButton>
    </>
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

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
