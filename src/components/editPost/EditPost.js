import "./editPost.css"
import React, { useContext, useState, useEffect } from 'react'
import {Close} from '@material-ui/icons'

function EditPost({closeEditPopup, post, i, handleEdit}) {
  return (
    <div className="formContainer">
      <div className="logo">
        Post It
      </div>
      <h1 className="h1-register">Edit Post</h1>
        <form onSubmit={(e)=>{handleEdit(e)}, closeEditPopup}>
          <label className="label1" htmlFor="description"> Post Text: </label>
            <input
              className="username"
              type="text"
              id="description"
              defaultValue={post.description}
              onChange={(e) => post.description = e.target.value}
              name="description"
              placeholder="enter a description of your trip!"
          />
            <input className="edit" type="submit" value="Edit Post" />
            <Close
            className="registerCancel"
            onClick={closeEditPopup}
            />
        </form>
      </div>
  );
}

export default EditPost;
