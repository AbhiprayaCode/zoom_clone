'use client'

import { DeviceSettings, useCall, VideoPreview } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button';

const MeetingSetup = ({ setIsSetupComplete }: { setIsSetupComplete: (value: boolean) => void}) => {

    const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);

    const call = useCall()

    if (!call) {
        throw new Error('Usecall must be used within StreamCall component')
    }

    useEffect(() => {

        if (isMicCamToggledOn) {
            call?.camera.disable();
            call?.microphone.disable();
        } else {
            call?.camera.enable()
            call?.microphone.enable()
        }
        
    }, [isMicCamToggledOn, call?.camera, call?.microphone])

  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-3 text-white'>
        <h1 className='text-2xl font-bold'>Setup your video</h1>
        <VideoPreview />
        <div className='flex h-16 items-center justify-center gap-3'>
            <label className='flex items-center justify-center gap-2 font-medium'>
                <input type="checkbox" checked={isMicCamToggledOn} onChange={(e) => setIsMicCamToggledOn(e.target.checked)} />
                Join with mic and camera off
            </label>

            <DeviceSettings />
        </div>
        <div>
            <Button className='bg-blue-2 hover:bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg' onClick={() => {
                    call.join()
                    setIsSetupComplete(true)
                    }}>
                Join Meeting
            </Button>
        </div>
    </div>
  )
}

export default MeetingSetup