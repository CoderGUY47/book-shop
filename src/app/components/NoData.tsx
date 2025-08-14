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
    <div className='flex flex-col items-center justify-center p-6 bg-white overflow-x-hidden space-y-6 mx-auto'>
        <div className="relative w-60 md:w-80">
            <Image 
            src={imageUrl} 
            alt="No Data" 
            width={300}
            height={320}
            className='shadow-md hover:shadow-lg transition duration-500'/>
        </div>
        <div className="text-center">
            <h2 className='text-lg font-semibold'>{message}</h2>
            <p className='text-sm text-gray-500'>{description}</p>
            <button onClick={onClick} className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'>
                {buttonText}
            </button>
        </div>
    </div>
  )
}

export default NoData