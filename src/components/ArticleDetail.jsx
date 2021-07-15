import React from 'react'
import {useParams}  from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from './Loader'
import { BASE_URL, headers } from '../services'
import './Detail.css'
import DeleteButton from './DeleteButton'

export default function ArticleDetail() {

  const [article, setArticle] = useState({})
  const { id } = useParams()
  // const history = useHistory()
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const fetchArticle = async () => {
      const URL = `${BASE_URL}/${id}`
      const res = await axios.get(URL, { headers })
      setArticle(res.data)
    }
    fetchArticle()
  }, [id])

  // const handleDelete = async () => {
  //   const URL = `${BASE_URL}/${id}`
  //   await axios.delete(URL, {headers})
  //   history.push('/all-articles')
  // }

  if (!article.fields) {
    return <Loader />
  }

  return (
    <div className='info'>
      <h2 id='title'>{article.fields?.title}</h2>
      <h3 id='authors'>{article.fields?.authors}</h3>
      <p id='abstract'>{article.fields?.abstract}</p>
      <a href={article.fields?.link} id='read-more'>Link to Article</a>
      <br />
      <div>
        <input
          id='delete-button'
          type="button"
          value="Delete Article"
          onClick={togglePopup}/>
        {isOpen && <DeleteButton
          content={
            <div>
            </div>}
          handleClose={togglePopup}/>}
      </div>
    </div>
  )
}
