import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { apiCall } from "../../services/api";
export const BlogForm = () => {
  const { id } = useParams();
  console.log(id);
  const [formFields, setFormFields] = useState({ title: "", description: "" });
  const onFormFieldChange = (e) => {
    if (e.target.type == "file") {
      setFormFields({ ...formFields, [e.target.name]: e.target.files });
    } else {
      setFormFields({ ...formFields, [e.target.name]: e.target.value });
    }
    // console.dir(e)
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const fileFields = ["coverImage", "galleryImages"];
    const data = {};
    Object.keys(formFields).map(function (key, index) {
      if (fileFields.includes(key)) {
        console.log("odje file obraditi", formFields[key].length);
        if (formFields[key].length > 1) {
          for (let i = 0; i < formFields[key].length; i++) {
            const file = formFields[key][i];

            formData.append(`files.${key}`, file, file.name);
          }
        } else {
          const file = formFields[key][0];
          formData.append(`files.${key}`, file, file.name);
        }
      } else {
        console.log("odje tekst");
        data[key] = formFields[key];
      }
    });
    formData.append("data", JSON.stringify(data));
    console.log(formData, data, Array.from(formData));
    apiCall("/blogs", { method: "POST", data: formData })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    // axios
    //   .post("http://localhost:1337/blogs", formData)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        name="title"
        value={formFields.title}
        onChange={onFormFieldChange}
      />{" "}
      <br></br>
      <input
        type="text"
        name="description"
        value={formFields.description}
        onChange={onFormFieldChange}
      />
      <br></br>
      <label>Cover Image:</label>
      <input type="file" name="coverImage" onChange={onFormFieldChange} />
      <br></br>
      <label>Gallery Image:</label>
      <input
        type="file"
        name="galleryImages"
        multiple
        onChange={onFormFieldChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Blog
      </Button>
    </form>
  );
};
