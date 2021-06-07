import React from "react";
// @material-ui/core components
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
    fontWeight: "500",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 180,
    objectFit: "cover",
  },
  box: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
};

function TypographyPage() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>My Recent Projects</h4>
        <p className={classes.cardCategoryWhite}>
          All the projects are made with React
        </p>
      </CardHeader>
      <CardBody className={classes.box}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/wildfire-tracker.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Wild-Fire Tracker
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Wild-Fire Tracker detects and tracks the natural wildfires
                occurring around the world and depicts the data in an
                interactive way. Built with google maps and NASA api.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              target="_blank"
              href="https://github.com/akash-arelli/wildfiretracker"
              size="small"
              color="primary"
            >
              GitHub
            </Button>
            <Button
              target="_blank"
              href="https://wizardly-benz-af417f.netlify.app/"
              size="small"
              color="primary"
            >
              Live Demo
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/todo-list.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                To-Do List
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                A simple app to organize your tasks with very easy to use
                interface. ToDo can help you to make list of your tasks. Built
                the Front-End with React and Redux is used for state management.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              target="_blank"
              href="https://github.com/akash-arelli/To-Do-app"
              size="small"
              color="primary"
            >
              GitHub
            </Button>
            <Button
              target="_blank"
              href=""
              size="small"
              color="primary"
            ></Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/fb.jp2"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Facebook Messenger
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                A messaging app used for instant messaging, sharing views, for
                group chats. The app has user authentication functionality.
                Backend and databases are built with firebase.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              target="_blank"
              href="https://github.com/akash-arelli/facebook-messenger"
              size="small"
              color="primary"
            >
              GitHub
            </Button>
            <Button
              target="_blank"
              href="https://nifty-bell-3db659.netlify.app"
              size="small"
              color="primary"
            >
              Live Demo
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/image-gallery.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Image - Gallery
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Image Gallary is used when you want to display a series of
                photos in a gallery on a page.Files can be uploaded to the
                database. Backend and databases are built with firebase.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              target="_blank"
              href="https://github.com/akash-arelli/Image-Gallery"
              size="small"
              color="primary"
            >
              GitHub
            </Button>
            <Button
              target="_blank"
              href="https://optimistic-golick-167462.netlify.app"
              size="small"
              color="primary"
            >
              Live Demo
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/hotel-admin.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Hotel Admin
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Built complete Front-End of Hotel Management system for both
                admin and user side as part of freelance project. Worked with
                Rest Api's and designed dashboard for user and admin.Backend is
                supported by Node js.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              target="_blank"
              href=""
              size="small"
              color="primary"
            ></Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/instagram.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Instagram Clone
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Instagram app with post sharing and user authentication
                functionality. Built with Firebase and Firestore. Material UI is
                used for styling.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              target="_blank"
              href="https://github.com/akash-arelli/Instagram-clone"
              size="small"
              color="primary"
            >
              GitHub
            </Button>
            <Button
              target="_blank"
              href=""
              size="small"
              color="primary"
            ></Button>
          </CardActions>
        </Card>

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              style={{ height: "250px", objectFit: "contain" }}
              image="/signal.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Signal-Clone (React Native)
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Signal Clone is a chating app built with React Native(Expo).
                User authentication , creating groups , Joining groups ,
                messaging functionalities are added. Backend is powered with
                firebase.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              target="_blank"
              href="https://github.com/akash-arelli/Signal-Clone"
              size="small"
              color="primary"
            >
              GitHub
            </Button>
            <Button
              target="_blank"
              href="https://signal-clone-76b37.web.app/"
              size="small"
              color="primary"
            >
              Live Demo
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              style={{ height: "250px", objectFit: "cover", width: "100%" }}
              image="/amazon-logo-s3f.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Amazon Clone
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Clone of Amazon with Orders, Checkout , Adding to cart
                functionalities. Payment system has also been integrated using
                stripe payments. Backend is powered with firebase cloud
                functions.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              target="_blank"
              href="https://github.com/akash-arelli/amazon-clone"
              size="small"
              color="primary"
            >
              GitHub
            </Button>
            <Button
              target="_blank"
              href="https://clone-4bc31.web.app"
              size="small"
              color="primary"
            >
              Live Demo
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              style={{
                height: "250px",
                objectFit: "cover",
                width: "",
              }}
              image="/maxresdefault.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Frieghtleap Tool
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                It is a tool for registration for services of supply-chain and
                logistic company services.Built with Next js (framework) ,
                Google places API , Ant Design.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              target="_blank"
              href=""
              size="small"
              color="primary"
            ></Button>
            <Button
              target="_blank"
              href=""
              size="small"
              color="primary"
            ></Button>
          </CardActions>
        </Card>
      </CardBody>
    </Card>
  );
}

TypographyPage.layout = Admin;

export default TypographyPage;
