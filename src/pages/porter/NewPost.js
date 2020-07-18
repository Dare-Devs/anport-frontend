import React, { useState } from 'react'
import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

const NewPost = () => {
  const [editorContent, setEditorContent] = useState(null)

  return (
    <div className="new-report">
      <h1 className="report-title">New Report</h1>
      <CKEditor
        editor={ClassicEditor}
        onChange={(event, editor) => setEditorContent(editor.getData())}
      />
    </div>
  )
}

export default NewPost
