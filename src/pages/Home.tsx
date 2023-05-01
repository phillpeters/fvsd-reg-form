/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { studentInfo, otherInfo } from '../data/studentInfo';

// const steps = [
//   {
//     label: legalName.label,
//     description:
//       'An ad group contains one or more ads which target a shared set of keywords.'
//   },
//   {
//     label: akaName.label,
//     description:
//       'An ad group contains one or more ads which target a shared set of keywords.'
//   },
//   {
//     label: mailingAddress.label,
//     description:
//       'An ad group contains one or more ads which target a shared set of keywords.'
//   },
//   {
//     label: physicalAddress.label,
//     description:
//       'An ad group contains one or more ads which target a shared set of keywords.'
//   },
//   {
//     label: dob.label,
//     description:
//       'An ad group contains one or more ads which target a shared set of keywords.'
//   },
//   {
//     label: homePhone.label,
//     description:
//       'An ad group contains one or more ads which target a shared set of keywords.'
//   },
//   {
//     label: emailAddress.label,
//     description:
//       'An ad group contains one or more ads which target a shared set of keywords.'
//   }
// ];

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
    <Box sx={{ maxWidth: 400, height: 'auto', overflow: 'hidden' }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {studentInfo.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{`Current Record: ${step.value}`}</Typography>
              <Box>
                <Typography>Corrections</Typography>
                <TextField variant="outlined" />
              </Box>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === studentInfo.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === studentInfo.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default VerticalLinearStepper;
