import React from 'react'

import {
    Dialog,
    DialogContent,
  } from "@/components/ui/dialog"

  import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
  

interface MeetingModalProps {
    isOpen: boolean
    onClose: () => void
    title: string
    children?: React.ReactNode
    className?: string
    handleClick?: () => void
    buttonText?: string
    image?: string
    buttonIcon?: string
}

const MeetingModal = ({ isOpen, onClose, title, children, className, handleClick, buttonText, image, buttonIcon }: MeetingModalProps) => (
    <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className='flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-2 px-6 py-9 text-white'>
            <div className='flex flex-col gap-6'>
                {image && (
                    <div className='flex justify-center'>
                        <Image src={image} width={72} height={72} alt={title} />
                    </div>
                )}

                <h1 className={cn('text-3xl font-bold leading-[42px]', className)}>{title}</h1>
                {children}
                <Button className='bg-blue-2 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg hover:bg-blue-1' onClick={handleClick}>
                    {buttonIcon && <Image src={buttonIcon} width={13} height={13} alt={title} />} &nbsp;
                    {buttonText || 'Schedule Meeting'}
                </Button>
            </div>
        </DialogContent>
    </Dialog>

)

export default MeetingModal