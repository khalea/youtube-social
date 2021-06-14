import Head from 'next/head'
import {useState} from 'react'

import Player from '../components/player'
import Queue from '../components/queue'
import TestQueue from '../data/test-queue.json'

export default function Home() {
  const [videoData, updateVideoData] = useState(TestQueue.items)
  const [currentVideoId, updateCurrentVideoId] = useState(videoData[0].id.videoId)

  const playNext = () => {
    videoData.shift()
    if (videoData.length > 0) {
      updateCurrentVideoId(videoData[0].id.videoId)
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
        <div className="flex flex-row">
          <Player videoId={currentVideoId} onEnd={playNext}/>
          <Queue data={videoData}/>
        </div>
      </main>
    </div>
  )
}

// Why is Tailwind kinda not working?
// For Part II (Youtube API), add null currentVideoId default and conditional rendering for the player