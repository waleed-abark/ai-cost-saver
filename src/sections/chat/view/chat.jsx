
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { Box, Grid, IconButton, Paper, TextField, Typography } from '@mui/material';
import InputField4 from 'src/components/input/InputField4';

// import SendIcon from "@mui/icons-material/Send";

// ----------------------------------------------------------------------

export default function ChatView() {

  const data = [
    {
      left: { title: "Total Net", value: "$196" },
      right: { title: "Total Tax", value: "$96" },
    },
    {
      left: { title: "Total Net", value: "$196" },
      right: { title: "Over billed Taxes", value: "$96" },
    },
    {
      left: { title: "Purchase Order Number", value: "24/12/2024" },
      right: { title: "Reference Numbers", value: "24/12/2024" },
    },
  ];
  return (
    <Container maxWidth="xl">
      <Stack direction="row" alignItems="center" >
        <Typography variant="h3">Session Name </Typography>
        <Box src="/assets/images/edit-icon.svg" component="img" sx={{ mx: 2, cursor: "pointer" }} />
      </Stack>
      <Grid container sx={{ backgroundColor: "white", borderRadius: "10px", padding: "20px",mt:5 }}>

        <Grid item xs={12} sm={6}  sx={{px:2}}>

          <Box sx={{ display: "flex", gap: "10px", alignItems:"start"}}>

            <Box src="/assets/images/person-icon.svg" component="img" />
            <Typography sx={{ fontWeight: "400", fontSize: "16px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Typography>
          </Box>
          <Box sx={{ mt: 4, display: "flex", gap: 2, justifyContent: "end", mx: 2 }}>
            <Box
              sx={{
                backgroundColor: "#F5F6FA",
                borderRadius: "10px",
                height: "58px",
                px: 3,
                display: "flex", // Flexbox for centering
                justifyContent: "center", // Center horizontally
                alignItems: "center", // Center vertically
              }}
            >
              <Typography sx={{ fontWeight: "400", fontSize: "16px" }}>
                Can you share the detailed summary?
              </Typography>
            </Box>
            <Box component="img" src="/assets/images/avatars/avatar_1.jpg" sx={{ borderRadius: "50%", width: "50px", height: "50px" }} />
          </Box>
      <Box sx={{mt:"430px"}}>
        <InputField4 border="1px solid #D8D8D8" placeholder="Write a message" endAdornment={<Box src="/assets/images/Subtract.png" component="img"/>}/>
      </Box>

        </Grid>
        <Grid item xs={12} sm={6} sx={{ borderLeft: "2px solid #D8D8D8" ,px:2}} >

          <Box>
            {data.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: index === 0 ? 0 : 5,
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: "14px" }}>{item.left.title}</Typography>
                  <Typography>
                    Value: <strong>{item.left.value}</strong>
                  </Typography>
                </Box>
                <Box >
                  <Typography sx={{ fontSize: "14px" }}>{item.right.title}</Typography>
                  <Typography>
                    Value: <strong>{item.right.value}</strong>
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Box sx={{ border: "2px solid #D8D8D8", width: "100%", my: 7 }} />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{  height: "60px", alignContent:"center",px:2 ,borderBottom:"1px solid #D8D8D8"}}>
              Overall
            </Box>
            <Box sx={{ backgroundColor: "#E0EAFF", height: "60px", alignContent:"center",px:2 ,borderBottom:"1px solid #D8D8D8"}}>
              Invoice 1
            </Box>
            <Box sx={{  height: "60px", alignContent:"center",px:2 ,borderBottom:"1px solid #D8D8D8"}}>
              Invoice 1
            </Box> <Box sx={{  height: "60px", alignContent:"center",px:2 ,borderBottom:"1px solid #D8D8D8"}}>
              Invoice 1
            </Box> <Box sx={{  height: "60px", alignContent:"center",px:2 ,borderBottom:"1px solid #D8D8D8"}}>
              Invoice 1
            </Box> <Box sx={{  height: "60px", alignContent:"center",px:2 ,borderBottom:"1px solid #D8D8D8"}}>
              Invoice 1
            </Box>
          </Box>
        </Grid>
      </Grid>


    </Container>
  );
}
