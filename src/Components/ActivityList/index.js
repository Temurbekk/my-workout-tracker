import React, { useState } from "react";
import { withFirebase } from "../Firebase";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  DeleteIcon,
  EditIcon,
} from "../../MaterialUI";

function ActivityList(props) {
  const {
    activities,
    editActivity,
    setOpenSnackbar,
    setSnackbarMsg,
    setEditing,
  } = props;

  const deleteActivity = (i) => {
    // Get key of activity in firebase
    const activityKey = Object.keys(activities)[i];
    // Connect to our firebase API
    const emptyActivity = {
      date: null,
      duration: null,
      type: null,
      name: null,
    };

    props.firebase.updateActivity(
      props.authUser.uid,
      emptyActivity,
      activityKey
    );

    // Show notification
    setOpenSnackbar(true);
    setSnackbarMsg("Deleted activity");
    setTimeout(() => {
      setOpenSnackbar(false);
    }, 3000);

    // stop editing
    setEditing(false);
  };

  return (
    <>
      {activities === "not set" || activities === null ? (
        <p>No activities added yet.</p>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(activities).map((activity, i) => {
                let { name, type, duration } = activity;
                switch (activity.type) {
                  case 1:
                    type = "Weight Training";
                    break;
                  case 2:
                    type = "Cardio";
                    break;
                  case 3:
                    type = "Calisthenics";
                    break;
                  case 4:
                    type = "Cross Training";
                    break;
                  default:
                    type = "Not set";
                }
                return (
                  <TableRow key={i}>
                    <TableCell style={crossStyle}>{name}</TableCell>
                    <TableCell style={crossStyle}>{type}</TableCell>
                    <TableCell style={crossStyle}>{duration}</TableCell>
                    <TableCell>
                      <DeleteIcon onClick={(e) => deleteActivity(i)} />
                      <EditIcon
                        onClick={(e) => editActivity(activity, i)}
                        style={{ marginLeft: "20px" }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
export default withFirebase(ActivityList);
