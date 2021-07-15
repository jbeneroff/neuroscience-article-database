import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL_2, headers } from '../services'
import Loader from './Loader'
import NewsCard from './NewsCard'
import { Link } from 'react-router-dom'
import './List.css'


export default function NewsList() {
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      const res = await axios.get(BASE_URL_2 , { headers })
      setNews(res.data.records)
    }
    fetchNews()
  }, [])

  if (news.length === 0) {
    return <Loader />
  }

  return (
    <div>
      <div id='list-div'>
        {news.map((news, key) => {
          return <NewsCard key={news.id} news={news} />
          })}
      </div>
      <button className='button'>
        <Link to='/new-news' className='add-button' >Add a News Article</Link>
      </button>
    </div>
  )
}