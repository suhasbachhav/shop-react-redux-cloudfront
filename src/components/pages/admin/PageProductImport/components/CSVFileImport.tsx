import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";

type CSVFileImportProps = {
  url: string;
  title: string;
};

export default function CSVFileImport({ url, title }: CSVFileImportProps) {
  const [file, setFile] = React.useState<File>();

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFile(file);
    }
  };

  const removeFile = () => {
    setFile(undefined);
  };

  const uploadFile = async () => {
    console.log("uploadFile to", url);
    if (!file) {
      console.log("File is undefined");
      return;
    }
    // Get the presigned URL
    const tokenFromLocalStorage = localStorage.getItem("authorization_token");
    try {
      const response = await axios({
        method: "GET",
        url,
        params: {
          fileName: encodeURIComponent(file.name),
        },
        headers: {
          Authorization: `Basic ${tokenFromLocalStorage}`,
        },
      });

      console.log("File to upload: ", file.name);
      console.log("Uploading to: ", response.data);
      const result = await fetch(response.data, {
        method: "PUT",
        body: file,
      });
      console.log("Result: ", result);
    } catch (err) {
      console.error(err);
    }
    setFile(undefined);
  };
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {!file ? (
        <input type="file" onChange={onFileChange} />
      ) : (
        <div>
          <button onClick={removeFile}>Remove file</button>
          <button onClick={uploadFile}>Upload file</button>
        </div>
      )}
    </Box>
  );
}
