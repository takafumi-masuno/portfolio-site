
import React from 'react'
import { Box, Typography, makeStyles, Link, Avatar } from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import { green, blue, purple } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
  blue: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[500],
  },
  purple: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
  },
}));

const Contact: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='h5' >
            Contact
          </Typography>
        </Box>
        <Box className={classes.root} display='flex' justifyContent='center' p={1}>
          <Link href='#' color='inherit'>
            <Avatar className={classes.green}>
              <MailIcon />
            </Avatar>
          </Link>
          <Link href='#' color='inherit'>
            <Avatar className={classes.blue}>
              <TwitterIcon />
            </Avatar>
          </Link>
          <Link href='#' color='inherit'>
            <Avatar className={classes.purple}>
              <GitHubIcon />
            </Avatar>
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default Contact;