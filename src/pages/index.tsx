import React, { ChangeEvent, useState } from "react";
import { Box, Button, Card, CardActions, CardContent, Grid, TextField, Typography } from "@mui/material";
import theme from "@/theme";
import Head from "next/head";
import FAB from "@/components/common/FAB";
import DefaultLayout from "@/components/common/Layout/DefaultLayout";
import { palette } from "@/theme/palette";

export default function Home() {
  const [phrase, setPhrase] = useState("");
  const isReminded = false; // make this into a useState
  const handlePhraseChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhrase(event.target.value);
  };

  const handleGenerateMnemonic = () => {
    // Add your logic for generating the mnemonic here
  };

  const handleRemindMe = () => {
    // Add your logic for reminding the user next week
  };

  return (
    <>
      <Head>
        <title>Viglo</title>
        <meta name="description" content="Viglo app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <main>
        <DefaultLayout>
          <FAB />
          <Grid container height="90vh" justifyContent="center">
            <Grid item xs={11} sm={8} md={5} lg={4} display="flex" justifyContent="center" alignItems="center">
              <Card sx={{ width: "100%" }}>
                <CardContent sx={{ paddingBottom: theme.spacing(1) }}>
                  <Typography variant="body1" fontWeight={700} marginBottom={1}>
                    Enter Spanish phrase here
                  </Typography>
                  <TextField
                    id="rounded"
                    variant="outlined"
                    fullWidth
                    value={phrase}
                    onChange={handlePhraseChange}
                    helperText={`Character limit ${phrase.length}/50`}
                    placeholder="Ex: El sol brilla en mi corazón"
                  />
                  <Box
                    marginTop={theme.spacing(1)}
                    marginBottom={theme.spacing(3)}
                    justifyContent="center"
                    alignItems="center"
                    display="flex"
                  >
                    <Button variant="contained" size="large" onClick={handleGenerateMnemonic}>
                      Generate Mnemonic
                    </Button>
                  </Box>
                  <Typography variant="body1" fontWeight={700} marginBottom={1}>
                    Generated Mnemonic
                  </Typography>
                  <TextField className="squared-text-field" fullWidth rows={10} multiline />
                </CardContent>
                <CardActions
                  sx={{
                    alignItems: "start",
                    paddingBottom: theme.spacing(3),
                    paddingTop: 0,
                    justifyContent: "flex-end",
                    marginRight: theme.spacing(2),
                  }}
                >
                  {!isReminded ? (
                    <Button size="small" onClick={handleRemindMe}>
                      Remind me next week
                    </Button>
                  ) : (
                    <Typography variant="body2" fontWeight={theme.typography.fontWeightMedium} color={palette.text.muted}>
                      Reminders for next week will be sent via email
                    </Typography>
                  )}
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </DefaultLayout>
      </main>
    </>
  );
}
