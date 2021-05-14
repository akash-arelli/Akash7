import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// layout for this page
import Admin from "layouts/Admin.js";
import Link from "next/link";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    fontWeight: "500",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "400",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  social: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "15px",
    paddingRight: "150px",
  },
};

function UserProfile() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Social Profile</h4>
              <p className={classes.cardCategoryWhite}>Web Developer</p>
            </CardHeader>
            <CardBody>
              <div>
                {" "}
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Email :
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      akasharelli@gmail.com
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Freelance:
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Available
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      City:
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Hyderabad
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActionArea>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                    ></Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    ></Typography>
                  </CardContent>
                </CardActionArea>
              </div>
              <div className={classes.social}>
                <a
                  target="_blank"
                  href="https://www.facebook.com/akasharelli7/"
                >
                  <FacebookIcon fontSize="large" color="primary" />
                </a>
                <a target="_blank" href="https://github.com/akash-arelli">
                  <GitHubIcon fontSize="large" style={{ color: "black" }} />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/akasharelli/"
                >
                  <InstagramIcon fontSize="large" color="secondary" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/akash-arelli-2199a81a2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkAhY4dNrQFi2piEhnB%2BrgA%3D%3D"
                >
                  <LinkedInIcon fontSize="large" color="primary" />
                </a>
                <a href="mailto: akasharelli@gmail.com">
                  <MailIcon fontSize="large" color="secondary"/>
                </a>
              </div>
            </CardBody>
            <CardFooter>
              <Button href="/admin/notifications" color="primary">
                CONTACT
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem style={{marginTop:"2%"}} xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src="/akash.png" alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>Front End Developer</h6>
              <h4 className={classes.cardTitle}>Akash Arelli</h4>
              <p className={classes.description}>
                I am a curious person. I love learning new things and
                technologies. I am open to internship and freelance
                oppurtunities.
              </p>
              <Button href="/Akash.pdf"  color="primary" round download>
                Resume
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

UserProfile.layout = Admin;

export default UserProfile;
