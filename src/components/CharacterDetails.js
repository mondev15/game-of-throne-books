import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  main: { display: "flex", alignItems: "center", marginLeft: "10px" },
  label: {
    marginRight: "15px",
    color: "grey",
  },
  character: {
    padding: "30px",
    width: "550px",
    color: "white",
    background: "#202047",
    borderRadius: "5px",
    marginLeft: "50px",
  },
}));

const CharacterDetails = ({ url }) => {
  const classes = useStyles();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacter(data));
  }, [url]);

  return (
    <div className={classes.main}>
      <div className={classes.character}>
        <div>
          <label className={classes.label}> Name</label> {character?.name}
        </div>
        <div>
          <label className={classes.label}> Gender </label> {character?.gender}
        </div>
        <div>
          <label className={classes.label}> Culture</label> {character?.culture}
        </div>
        <div>
          <label className={classes.label}> Born </label> {character?.born}
        </div>
        <div>
          <label className={classes.label}> Died </label> {character?.died}
        </div>
        <div>
          <label className={classes.label}> Father </label> {character?.father}
        </div>
        <div>
          <label className={classes.label}> Mother </label> {character?.monther}
        </div>
        <div>
          <label className={classes.label}> Spouse </label> {character?.spouse}
        </div>
      </div>
    </div>
  );
};
export default CharacterDetails;
