import { useState } from "react"
import axios from "axios"
import { headers } from "../services"
import { useHistory } from 'react-router'

const BASE_URL = `https://api.airtable.com/v0/appXNlhVJ6AfbKMdN/news`

const defaultForm = {
  title: "",
  abstract: "",
  link: "",
}

export default function AddNews() {
  const [input, setInput] = useState(defaultForm)
  const history = useHistory()

  const handleChange = (event) => {
    const { name, value } = event.target
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(BASE_URL, { fields: input }, { headers })
    console.log(res)
    history.push(`/news/${res.data.id}`)
  }

  return (
    <div>
      <h3>Add a News Article</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <br />
        <input name="title" value={input.title} onChange={handleChange} placeholder="Title" />
        <br />
        <label>Abstract</label>
        <br />
        <input name="abstract" value={input.abstract} onChange={handleChange} placeholder="Abstract" />
        <br />
        <label>Link</label>
        <br />
        <input name="link" value={input.link} onChange={handleChange} placeholder="URL" />
        <br />
        <button>Add News Article</button>
      </form>
    </div>
  )
}