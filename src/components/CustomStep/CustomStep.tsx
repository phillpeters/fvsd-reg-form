import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

type Props = {
  index: number;
  label: string;
  numSteps: number;
  handleNext: () => void;
  handleBack: () => void;
  fields: {
    label: string;
    value: string | number;
  }[];
};

const CustomStep = (props: Props) => {
  const { numSteps, handleNext, handleBack, fields, ...otherProps } = props;
  const { index, label } = otherProps;

  return (
    // 👆👆 funky prop forwarding for when you create custom components out of mui components
    <Step {...otherProps}>
      <StepLabel
        optional={
          index === 6 ? (
            <Typography variant="caption">Last step</Typography>
          ) : null
        }
      >
        {label}
      </StepLabel>
      <StepContent>
        <Typography sx={{ fontSize: '22px' }} gutterBottom>
          {label}
        </Typography>
        {fields.map((field) => (
          <>
            <Typography key={field.label} gutterBottom>
              {field.label}
            </Typography>
            <Typography>{`Current Record: ${field.value}`}</Typography>
            <TextField label="Corrections" />
          </>
        ))}
        <Box sx={{ mb: 2 }}>
          <div>
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ mt: 1, mr: 1 }}
            >
              {index === numSteps - 1 ? 'Finish' : 'Continue'}
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
  );
};

export default CustomStep;
