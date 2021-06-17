import Head from 'next/head'
import { useState } from 'react'

import Player from '../components/player'
import Queue from '../components/queue'
import SearchContainer from '../components/searchcontainer'

export default function Home() {
  const [videoData, updateVideoData] = useState([])
  const [currentVideoId, updateCurrentVideoId] = useState(null)

  const playNext = () => {
    updateVideoData(videoData.slice(1))    
    if (videoData.length > 0) {
      updateCurrentVideoId(videoData[0].id.videoId)
    }
  }

  const addToQueue = (video) => {
    console.log(video)
    updateVideoData(videoData => [...videoData, video])

    if (currentVideoId == null) {
      updateCurrentVideoId(video.id.videoId)
    }

  }

  return (
    <div className="p-48">
      <Head>
        <title>Youtube Social</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h3 className="font-bold">youtube-social</h3>

      <main>
        <div className="flex flex-col">
          <div className="flex flex-row">
            
            {videoData.length > 0 &&
              <Player videoId={currentVideoId} onEnd={playNext} />
            }

            {videoData.length === 0 &&
              <div className="block px-64 py-48 bg-gray-300 rounded" style={{ width: '640px', height: '360px' }}>
                <h2>Empty Queue</h2>
              </div>
            }

            <Queue data={videoData} />
          </div>
          <SearchContainer queueFunc={addToQueue} />
        </div>
      </main>

    </div>
  )
}
