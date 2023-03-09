import React, { useState, useEffect, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useParams } from "react-router-dom";
import CharacterDetails from "./CharacterDetails.js";

const BookCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [url, setUrl] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://anapioficeandfire.com/api/books/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(
          data.characters.map((item, index) => ({
            index: index + 1,
            value: item,
          }))
        );
      });
  }, [id]);

  const columnDefs = [
    {
      field: "index",
      width: 200,
      resizable: true,
      sortable: true,
      filter: true,
    },
    { field: "value", flex: 1, resizable: true, sortable: true, filter: true },
  ];

  const onRowClicked = useCallback((params) => setUrl(params.data.value), []);

  return (
    <>
      <h2 style={{ marginLeft: "30px" }}> {characters.length} Characters </h2>
      <div style={{display:"flex"}}>
        <div
          className="ag-theme-alpine"
          style={{
            display: "flex",
            flexDirection: "column",
            height: "800px",
            width: "700px",
            marginLeft: "30px",
          }}
        >
          <AgGridReact
            rowData={characters}
            columnDefs={columnDefs}
            onRowClicked={onRowClicked}
          ></AgGridReact>
        </div>
        <div
          style={{
            display: "flex",
            visibility: !url ? "hidden" : "",
          }}
        >
          <CharacterDetails url={url} />
        </div>
      </div>
    </>
  );
};

export default BookCharacters;
