import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#F80"
        }
    }
})

interface FormDialogProps {
    open: boolean
    handleClose: () => void
}

const FormDialog = ({ open, handleClose }: FormDialogProps) => (
    <ThemeProvider theme={theme}>
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    try {
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries((formData as any).entries());
                        await axios.post(`${process.env.BACKEND}/api/appointment`, formJson);
                        handleClose();
                    } catch (err) {
                        console.error(err)
                        alert("Something went wrong")
                    }
                },
                sx: { bgcolor: "#fad7c0" }
            }}
        >
            <DialogTitle sx={{ color: "#F80", fontWeight: 700 }} >BOOK AN APPOINTMENT</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    name="name"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="phone"
                    name="phone"
                    label="Phone"
                    type="tel"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="concern"
                    name="concern"
                    label="Your Concern"
                    type="text"
                    multiline
                    minRows={3}
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button variant='contained' sx={{ bgcolor: "#FA0" }} type="submit">Book</Button>
            </DialogActions>
        </Dialog>
    </ThemeProvider>
)

export default FormDialog