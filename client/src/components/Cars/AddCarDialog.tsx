import React from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  TextField,
} from '@mui/material';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';

interface Props {
  open: boolean;
  onClose: () => void;
}

const AddCarDialog: React.FC<Props> = ({ open, onClose }): JSX.Element => {
    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>,
        ) => {
        console.log(event.target.files[0].name);
    };
    return (
        <div>
        <StyledEngineProvider injectFirst>
            <Dialog open={open} onClose={onClose}>
            <DialogTitle>Create New Car</DialogTitle>
            <DialogContent>
                <TextField autoFocus margin="dense" label="Car Name" />
                <TextField margin="dense" label="Team Name" />
                <DialogActions>
                <Button variant="contained">
                    Upload Car Picture
                    <input type="file" onChange={handleFileUpload} id="getFile" hidden />
                </Button>
                <Button>Cancel</Button>
                </DialogActions>
            </DialogContent>
            </Dialog>
        </StyledEngineProvider>
        </div>
    );
    };

export default AddCarDialog;
