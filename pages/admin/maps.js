import React from "react";
// layout for this page
import { makeStyles } from "@material-ui/core/styles";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px",
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    fontWeight: "500",
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
  root: {
    maxWidth: 345,
  },
  media: {
    height: 245,
    objectFit: "contain",
  },
  box: {
    display: "flex",
    flexWrap:"wrap",
    justifyContent: "space-between",
  },
  container: {
    paddingTop: "50px",
  },
  content: {},
};

function Maps() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <Card plain className={classes.container}>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Certificates</h4>
        <p className={classes.cardCategoryWhite}>
          Internship and Course Certificates
        </p>
      </CardHeader>
      <CardBody className={classes.box}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/intellify.png"
              title="Contemplative Reptile"
            />
            <CardContent className={classes.content}>
              <Typography gutterBottom variant="h5" component="h2">
                INTELLIFY (NSS IITD)
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              href="/Arelli Akash NSS Volunteering Certificate.pdf"
              target="_blank"
              size="small"
              color="primary"
            >
              View
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/iiit.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                IIIT Hyderabad
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              href="/SERC_certificate_COMPLETION _Akash Arelli copy.pdf"
              target="_blank"
              size="small"
              color="primary"
            >
              View
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/Problem Solving through Programming in C.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                NPTEL
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              href="/Problem Solving through Programming in C.jpg"
              target="_blank"
              size="small"
              color="primary"
            >
              View
            </Button>
          </CardActions>
        </Card>
  
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/Koi.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                OFFER LETTER(🇮🇳KoiReader Technologies)
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              href="/Akash_Arelli_Internship_WFH_Offer_Letter.pdf"
              target="_blank"
              size="small"
              color="primary"
            >
              View
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/python.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Python Data Structures
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              target="_blank"
              href="https://www.coursera.org/account/accomplishments/certificate/6CR4S6RHGVZD"
              size="small"
              color="primary"
            >
              View
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/internshala.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Internshala Student Partner
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              target="_blank"
              href="/ISP 19 - joining letter.pdf"
              size="small"
              color="primary"
            >
              View
            </Button>
          </CardActions>
        </Card>
      </CardBody>
    </Card>
  );
}

Maps.layout = Admin;

export default Maps;
