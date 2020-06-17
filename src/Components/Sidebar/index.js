import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  EventNoteIcon,
  ExitToAppIcon,
  SettingsIcon,
  clsx,
  Drawer,
  IconButton,
  Divider,
  ChevronLeftIcon,
} from "../../MaterialUI";

import useStyles from "../../config/theme.dashboard";

function Sidebar(props) {
  let match = useRouteMatch();

  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(
          classes.drawerPaper,
          !props.open && classes.drawerPaperClose
        ),
      }}
      open={props.open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={props.handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListSubheader inset>Menu</ListSubheader>
        <Link to={`${match.url}`}>
          <ListItem button>
            <ListItemIcon>
              <EventNoteIcon />
            </ListItemIcon>
            <ListItemText primary="Workouts" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <div>
          <ListSubheader inset>Account</ListSubheader>
          <Link to={`${match.url}/admin`}>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Admin" />
            </ListItem>
          </Link>
          <ListItem button onClick={() => props.signOut()}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Log out" />
          </ListItem>
        </div>
      </List>
    </Drawer>
  );
}

export default Sidebar;
