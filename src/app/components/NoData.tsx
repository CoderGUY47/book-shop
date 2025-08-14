import Image from 'next/image';
import React from 'react'

interface NoDataProps {
    message: string;
    imageUrl: string;
    description: string;
    onClick: () => void;
    buttonText: string;
}

const NoData: React.FC<NoDataProps> = ({message, imageUrl, description, onClick, buttonText="Retry"}) => {
  return (
    <div className='flex flex-col items-center justify-center p-6 bg-gray-300/50 shadow-md rounded-lg overflow-x-hidden space-y-6 mx-auto'>
        <div className="relative w-60 md:w-80">
            <Image 
            src={imageUrl} 
            alt="no_data" 
            width={320}
            height={320}
            className='shadow-md hover:shadow-lg transition duration-500'/>
        </div>
        <div className="max-w-md text-center space-y-2">
            <p className='text-2xl text-gray-900 font-bold tracking-wide'>{message}</p>
            <p className='text-base text-gray-600 leading-relaxed'>{description}</p>
        </div>
        {onClick && (
            <button 
                onClick={onClick} 
                className='mt-4 px-6 w-60 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-xl 
                shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-500 ease-in-out'>
                    {buttonText}
            </button>
        )}
    </div>
  )
}

export default NoData