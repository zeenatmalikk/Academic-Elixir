import {
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  Link,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./Register.css";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles((theme) => ({
  studentheading: {
    // textAlign: "center",
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2),
    fontSize: 20,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  btn:{
      backgroundColor:"#2B2B7F",
      fontSize:16,
      fontFamily:"Arial",
      color:"white",
      "&:hover":{
backgroundColor:"white",
color:"#2B2B7F"
      }
  },
  btnreg:{
    backgroundColor:"#272C34",
    fontSize:16,
    fontFamily:"Arial",
    color:"white",
    "&:hover":{
backgroundColor:"white",
color:"#272C34"
    }
},
regform:{
    textAlign:"center",
    color:"#fff", 
    fontSize:45,
    lineHeight:2
}
}));

const Register = () => {
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [genderopen, setgenderOpen] = React.useState(false);


  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const [value, setValue] = React.useState("");
  const [schoolvalue, setschoolValue] = React.useState("");

  const handleChangesubject = (event) => {
    setValue(event.target.value);
  };

  const handleChangesubjectschool = (event) => {
    setschoolValue(event.target.value);
  };

  const classes = useStyles();
  return (
    <div style={{backgroundColor:"#2B2B7F"}}>
      <Container style={{padding: 0, }}>
      <Typography variant="h2" className={classes.regform}>
                      Registeration form
                  </Typography>
        <Grid container style={{margin:0 , padding:0,  }}>
          <Grid item md={12} xs={12} className="container" >
          
            <Card style={{ width: "90%", padding:15 }}>
              <CardContent >
                  
                <Typography className={classes.studentheading} variant="h5">
                  Student's name <span style={{ color: "red" }}>*</span>
                </Typography>
                <div className="student-name">
                  <TextField variant="outlined" label="first" size="medium" />
                  <TextField variant="outlined" label="middle" size="medium" />
                  <TextField variant="outlined" label="last" size="medium" />
                </div>
                {/* <Typography className={classes.studentheading} variant="h5">
                Gender<span style={{ color: "red" }}>*</span>
              </Typography> */}
                {/* <div className="flex"> */}
                <div className="gender">
                <Typography className={classes.studentheading} variant="h5">
                Gender <span style={{ color: "red" }}>*</span>
                </Typography>
                <TextField id="select" variant="outlined" label="Gender" fullWidth  select>
  <MenuItem value="Male">Male</MenuItem>
  <MenuItem value="Female">Female</MenuItem>
</TextField>
</div>
                <div className="email">
                  <Typography className={classes.studentheading} variant="h5">
                    Student's Mail <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <TextField
                    variant="outlined"
                    fullWidth
                    label="Enter your mail.."
                  />
                </div>
                <div className="flex">
                <div className="subject">
                  <Button className={classes.btn} onClick={handleClickOpen}>Select Subject for XI-XII</Button>
                  <Dialog
                    disableBackdropClick
                    disableEscapeKeyDown
                    open={open}
                    onClose={handleClose}
                  >
                    <DialogTitle>Fill the form</DialogTitle>
                    <DialogContent>
                      <RadioGroup
                        aria-label="gender"
                        name="gender1"
                        value={value}
                        onChange={handleChangesubject}
                      >
                        <FormControlLabel
                          value="English"
                          control={<Radio />}
                          label="English"
                        />
                        <FormControlLabel
                          value="Math"
                          control={<Radio />}
                          label="Math"
                        />
                        <FormControlLabel
                          value="Chemistry"
                          control={<Radio />}
                          label="Chemistry"
                        />
                        <FormControlLabel
                          value="Physics"
                          control={<Radio />}
                          label="Physics"
                        />
                        <FormControlLabel
                          value="Biology"
                          control={<Radio />}
                          label="Biology"
                        />
                        <FormControlLabel
                          value="Computer Science"
                          control={<Radio />}
                          label="Computer Science"
                        />
                      </RadioGroup>
                    </DialogContent>
                    <DialogActions>
                      <Button  onClick={handleClose} color="primary">
                        Cancel
                      </Button>
                      <Button onClick={handleClose} color="primary">
                        Ok
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
                <div className="subject">
                  <Button className={classes.btn} onClick={handleClickOpen}>Select Subject for VIII-X</Button>
                  <Dialog
                    disableBackdropClick
                    disableEscapeKeyDown
                    open={open}
                    onClose={handleClose}
                  >
                    <DialogTitle>Fill the form</DialogTitle>
                    <DialogContent>
                      <RadioGroup
                        aria-label="gender"
                        name="gender1"
                        value={schoolvalue}
                        onChange={handleChangesubjectschool}
                      >
                        <FormControlLabel
                          value="English 1"
                          control={<Radio />}
                          label="English 1"
                        />
                        <FormControlLabel
                          value="English 2"
                          control={<Radio />}
                          label="English 2"
                        />
                        <FormControlLabel
                          value="Math 1"
                          control={<Radio />}
                          label="Math 1"
                        />
                        <FormControlLabel
                          value="Math 2"
                          control={<Radio />}
                          label="Math 2"
                        />
                        <FormControlLabel
                          value="Science 1"
                          control={<Radio />}
                          label="Science 1"
                        />
                        <FormControlLabel
                          value="Science 2"
                          control={<Radio />}
                          label="Science 2"
                        />
                        <FormControlLabel
                          value="Computer Science"
                          control={<Radio />}
                          label="Computer Science"
                        />
                        <FormControlLabel
                          value="Hindi"
                          control={<Radio />}
                          label="Hindi"
                        />
                        <FormControlLabel
                          value="Marathi"
                          control={<Radio />}
                          label="Marathi"
                        />
                      </RadioGroup>
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
                </div>
                <div className="other">
                <Typography className={classes.studentheading} variant="h5">
                    Other <span style={{ color: "red" }}>*</span>
                  </Typography>
                    <TextField variant="outlined" fullWidth label="Other subjects" placeholder="eg. Jee, CAT"/>
                </div>
                <div className="register">
                    <Button className={classes.btnreg}>
                        Register
                    </Button>

                </div>
                <div className="redirect-login">
                  <h2 className="red-pg-log">
                    <span className="bgwhitelog">
                     Already have an account?
                      <Link to="/login">
                   
                        <span>Login</span>
                      </Link>
                    </span>
                  </h2>
                </div>
                {/* </div> */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Register;
