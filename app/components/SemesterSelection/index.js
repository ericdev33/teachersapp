import React from 'react';
import * as PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function SemesterSelection({
  handleClose,
}) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    open: false,
    age: '',
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: Number(event.target.value) });
  };

  return (
    <div>
      <Dialog disableBackdropClick disableEscapeKeyDown open onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Age</InputLabel>
              <Select
                value={state.age}
                onChange={handleChange('age')}
                input={<Input id="age-simple" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Age</InputLabel>
              <Select
                value={state.age}
                onChange={handleChange('age')}
                input={<Input id="age-simple" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

SemesterSelection.propTypes = {
  setSelectedSlices: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default SemesterSelection;