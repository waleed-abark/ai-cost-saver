/* eslint-disable react/jsx-curly-brace-presence */
import { Box, Stack, Container, Typography, Button, TextField, Card } from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'src/routes/hooks';

export default function InvoiceAdd() {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);
  const [showInvoicePath, setShowInvoicePath] = useState(false);
  const toggle = () => {
    setShowForm(!showForm);
  };
  const toggleInvoicePath = () => setShowInvoicePath(!showInvoicePath);
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          position: 'relative',
        }}
      >
        {showForm && (
          <Box
            sx={{
              position: 'fixed',
              background: '#00000038',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 9999,
              backdropFilter: 'blur(5px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card sx={{ minWidth: 600, px: 2, py: 4 }}>
              <Typography variant="body1" sx={{ fontWeight: 'medium', mb: 2, fontSize: '18px' }}>
                Session Name
              </Typography>
              <TextField fullWidth variant="outlined" placeholder="Enter session name" />
              <Stack justifyContent={'center'} alignItems={'center'}>
                <Button
                  onClick={() => {
                    router.push('/chat');
                  }}
                  variant="contained"
                  sx={{
                    mt: 2,
                    px: 12,
                    py: 1,
                    display: 'inline-flex',
                    justifyContent: 'center',
                    alighnItems: 'center',
                  }}
                >
                  Add
                </Button>
              </Stack>
            </Card>
          </Box>
        )}
        {showInvoicePath && (
          <Box
            sx={{
              position: 'fixed',
              background: '#00000038',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 9999,
              backdropFilter: 'blur(5px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card sx={{ minWidth: 600, px: 2, py: 4 }}>
              <Typography variant="body1" sx={{ fontWeight: 'medium', mb: 2, fontSize: '18px' }}>
                Invoice Path
              </Typography>
              <TextField fullWidth variant="outlined" placeholder="Enter Invoice path link" />
              <Stack justifyContent={'center'} alignItems={'center'}>
                <Button
                  onClick={() => {
                    router.push('/chat');
                  }}
                  variant="contained"
                  sx={{
                    mt: 2,
                    px: 12,
                    py: 1,
                    display: 'inline-flex',
                    justifyContent: 'center',
                    alighnItems: 'center',
                  }}
                >
                  Add
                </Button>
              </Stack>
            </Card>
          </Box>
        )}
      </Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h3">Invoice</Typography>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          width: '100%',
        }}
      >
        <Box
          sx={{
            border: '3px dashed #4880FF ',
            width: '80%',
            height: '80vh',
            borderRadius: '10px',
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Box component="img" src="/assets/images/invoice/invoice.png" />
          <Box>
            <Typography maxWidth={350} textAlign={'center'}>
              Easily upload an existing invoice from your device or cloud. (single, multiple,
              folder)
            </Typography>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              sx={{ mt: 2, mb: 1, gap: 2 }}
            >
              <Button
                fullWidth
                onClick={toggleInvoicePath}
                sx={{
                  py: 1.5,
                }}
                variant="outlined"
                startIcon={<Box component="img" src="/assets/images/invoice/link.svg" />}
              >
                Upload Invoice Path
              </Button>
              <Button
                sx={{
                  py: 1.5,
                }}
                startIcon={<Box component="img" src="/assets/images/invoice/folder.svg" />}
                fullWidth
                variant="contained"
                onClick={toggle}
              >
                Upload Invoice
              </Button>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}
