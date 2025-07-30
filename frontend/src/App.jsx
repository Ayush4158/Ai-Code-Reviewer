import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"
import './App.css'
import Editor from 'react-simple-code-editor'
import axios from 'axios'
import Markdown from 'react-markdown'

function App() {
  const [code, setCode] = useState(``)

  const [review, setReview] = useState('')  

  useEffect(()=>{
    prism.highlightAll()
  },[])

  async function reviewCode(){
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_BASE_URL}/ai/get-review`, {code})
    // console.log(response.data)
    setReview(response.data)
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
          <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                borderRadius: "5px",
                height: "100%",
                width: "100%",
                overflow: "auto"
              }}
            />
          </div>
          <div className="review" onClick={reviewCode}>Review</div>
        </div>
        <div className="right">
          <Markdown>{review}</Markdown>

          <a href='http://localhost:3000' className="review" onClick={reviewCode}>Back</a>
        </div>
      </main>
    </>
  )
}

export default App
