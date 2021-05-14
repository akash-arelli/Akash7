import React, { useState } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";
import { Input, InputLabel } from "@material-ui/core";
import { TextField, FormControl, InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const styles = {
  form: {},
};

const ContactForm = ({ showNotification }) => {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
     
      setInputs({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    showNotification("tr");
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/f/mpzkwvdy",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
        console.log(error);
      });
  };
  return (
    <main>
      <Typography variant="h6" gutterBottom>
        Contact Me
      </Typography>
      <FormControl>
        <form onSubmit={handleOnSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="name"
                name="name"
                label="Your Name"
                fullWidth
                onChange={handleOnChange}
                value={inputs.name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="email"
                type="email"
                name="_replyto"
                label="Your Email"
                onChange={handleOnChange}
                fullWidth
                value={inputs.email}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                id="subject"
                name="subject"
                label="Subject"
                onChange={handleOnChange}
                fullWidth
                value={inputs.subject}
                autoComplete=""
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                multiline={true}
                id="message"
                name="message"
                label="Message"
                onChange={handleOnChange}
                fullWidth
                rows={10}
                value={inputs.message}
                autoComplete=""
              />
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
          <Button
            variant="contained"
            style={{ backgroundColor: "#ac00e6", color: "white" }}
            type="submit"
            disabled={status.submitting}
          >
            {!status.submitting
              ? !status.submitted
                ? "Send Message"
                : "Message Sent"
              : "Sending..."}
          </Button>
        </form>
      </FormControl>
    </main>
  );
};

export default ContactForm;
