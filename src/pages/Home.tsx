/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import CustomStep from '../components/CustomStep/CustomStep';

import studentProfile from '../data/studentProfile';

const VerticalLinearStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Student Registration
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ mt: 1, maxWidth: 400, height: 'auto', overflow: 'hidden' }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {studentProfile.map((step, index, array) => (
            <CustomStep
              key={step.label}
              index={index}
              label={step.label}
              fields={step.fields}
              handleNext={() => handleNext()}
              handleBack={() => handleBack()}
              numSteps={array.length}
            />
          ))}
        </Stepper>
        {activeStep === studentProfile.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    </>
  );
};

export default VerticalLinearStepper;
