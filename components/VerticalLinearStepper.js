import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

 

export default function VerticalLinearStepper({steps = []}) {
  const [activeStep, setActiveStep] = React.useState(0);

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
    <Box sx={{backgroundColor: '#f2f2f2',   padding: 2, borderLeft: '4px solid green',borderTop: '1px solid green',borderBottom: '1px solid green',borderRight: '2px solid green',  margin: 1, boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }}>
       
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label} active={true}>
            <StepLabel>
              <div className="font-semibold" style={{fontSize: 18}}>{step.label}</div>
            </StepLabel>
            <StepContent>
              <div style={{fontSize: 18 , textAlign: 'justify'}}>{step.description}</div>
               
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
