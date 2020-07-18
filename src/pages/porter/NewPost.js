import React, { useState } from 'react'
import { Editor, EditorState } from 'draft-js'

const NewPost = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  return (
    <div className="new-post">
      <h1>Post</h1>
      <Editor editorState={editorState} onChange={setEditorState} />
      {console.log(editorState)}
    </div>
  )
}

export default NewPost
