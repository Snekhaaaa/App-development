import React from "react";
import { Typography, Container, Card, CardContent, Grid, Paper } from "@mui/material";
// import styles from "../assets/About.css"; // Import your CSS module
import styles from "../assests/About.css"; // Adjust the path as needed


const About = () => {
  return (
    <section className={styles.container}>
      <Container>
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          About Us
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card variant="outlined" className={styles.card}>
              <CardContent>
                <Typography variant="h4" component="h2" gutterBottom>
                  Our Mission
                </Typography>
                <Typography variant="body1">
                  We aim to provide a seamless and efficient mobile recharge experience. Our platform offers a variety of prepaid and postpaid plans, ensuring that our customers have access to the best deals and services.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Card variant="outlined" className={styles.card}>
              <CardContent>
                <Typography variant="h4" component="h2" gutterBottom>
                  Our Team
                </Typography>
                <Typography variant="body1">
                  Our team consists of dedicated professionals with a passion for technology and customer service. We work tirelessly to ensure that our platform meets the highest standards of quality and reliability.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
       
      </Container>
    </section>
  );
};

export default About;
