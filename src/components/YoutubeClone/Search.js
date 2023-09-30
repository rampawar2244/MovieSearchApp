import { TuneOutlined } from '@mui/icons-material'
import React from 'react'
import ChannelRow from './ChannelRow'
import VideoChannelRow from './VideoChannelRow'
import "./Assets/SearchPage.scss"

function Search() {
  return (
    <div className='search__page'>
        <div className="search__filter">
            <TuneOutlined />
            <h2>FILTER</h2>
        </div>
        <hr />
        <ChannelRow 
        image="https://i.ytimg.com/vi/Y8olOQ3GgAA/sddefault.jpg"
        channel="xyz programmer"
        verified
        subs="666K"
        noOfVideos={236}
        description="xyz programmer is the best programmer in IT industry"
        />
        <hr />
        <VideoChannelRow 
        title="Become a Web developer in 10 minutes 2019/2020"
        views="2.3M Views"
        timestamp="3 days ago"
        channelImage="https://img.freepik.com/premium-psd/youtube-video-thumbnail-web-banner-template-reaction-video_475351-87.jpg"
        channel="Demo developer"
        image="https://img.freepik.com/premium-psd/youtube-video-thumbnail-web-banner-template-reaction-video_475351-87.jpg"
      />
    </div>
  )
}

export default Search