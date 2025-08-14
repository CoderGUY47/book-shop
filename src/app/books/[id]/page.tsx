'use client'
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDistanceToNow } from 'date-fns';
import { Heart, Loader2, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react'

const page = () => {
  const params = useParams();
  const id = params.id;
  const [selectedImage, setSelectedImage] = useState(0);
  const router = useRouter();
  const [isAddToCart, setIsAddToCart] = useState(false);

  const book ={
          _id: "1",
      images:[],
      title: "The Alchemist",
      category: "Reading Books (Novels)",
      condition: "Excellent",
      classType: "B.Com",
      subject: "Fiction",
      price: 300,
      author: "Paulo Coelho",
      edition: "25th Anniversary Edition",
      description: "A philosophical book about a shepherd's journey to realize his dreams.",
      finalPrice: 250,
      shippingCharge: 50,
      paymentMode: "UPI",
      paymentDetails: {
        upiId: "example@upi"
      },
      createdAt: new Date("2024-01-01"),
      seller: { name: "John Doe", contact: "1234567890" }
  }
  const handleAddToCart = (productId:string) =>{
    setIsAddToCart(true);
    setTimeout(() => {
      setIsAddToCart(false);
    }, 2000);
  };

  const handleAddToWishlist = (productId:string) =>{};
    // Logic to add the book to the wishlist


  const bookImage = book?.images || [];
      const calculateDiscount = (price: number, finalPrice: number): number => {
          if (price > finalPrice && price) {    
            const discount = ((price - finalPrice) / price) * 100;
            return Math.round(discount);
          }
          return 0;
      };
  
      const formatDate = (dateString: Date) => {
          const date = new Date(dateString)
          return formatDistanceToNow(date, { addSuffix: true }); 
      };

  return (
    <div className='min-h-screen bg-gray-100'>
      <div className="container mx-auto px-4 py-8">
        <nav className='mb-5 flex items-center gap-2 text-sm text-muted-foreground'>
          <Link href='/' className='hover:underline font-bold text-primary'>
            {""}        {/*for gap*/}
            Home{""}
          </Link>
          <span>/</span>
          <Link href='/books' className='hover:underline font-medium text-primary'>
            Books
          </Link>
          <span>/</span>
          <span className='text-gray-600'>{book.category}</span>
          <span>/</span>
          <span className='text-gray-600'>{book.title}</span>
        </nav>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="sapce-y-4">
            <div className="relative h-[400px] overflow-hidden rounded-lg border bg-white shadow-md">
              <Image
              src={bookImage[selectedImage]}
              alt={book.title}
              fill
              className="object-contain"
              />                            
              {calculateDiscount(book.price, book.finalPrice) > 0 && (
                <span className='absolute left-0 top-2 rounded-r-lg px-2 py-1 text-xs font-medium bg-orange-600/90 text-white hover:bg-orange-700'>
                    {calculateDiscount(book.price, book.finalPrice)}%Off                                                                
                </span>
              )}
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {bookImage.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border 
                    transition-all duration-300 ${selectedImage === index ? 'ring-2 ring-blue-500 scale-105' : 'hover:scale-105'}`}
                >
                  <Image 
                  src={image} 
                  alt={`${book.title} - Image ${index + 1}`} 
                  fill 
                  className="object-cover" />
                </button>
              ))}
            </div>
          </div>
          {/** Book Details Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <h1 className='text-2xl font-bold'>{book.title}</h1>
                <p className='text-sm text-muted-foreground'>
                  Posted {formatDate(book.createdAt)}
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant='outline'>Share</Button>
                <Button
                variant='outline'
                size='sm'
                onClick={() => handleAddToWishlist(book._id)} 
                >
                  <Heart 
                  className={`h-4 w-4 mr-1 fill-red-500`} 
                />
                <span className='hidden md:inline'>Add</span>
              </Button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-baseline gap-2">
                <span className='text-3xl font-bold'>৳{book.finalPrice}</span>
                {book.price && (
                  <span className='text-lg text-muted-foreground line-through'>৳{book.price}</span>
                )}
                <Badge
                variant='secondary'
                className='text-green-600'
                >
                  Now Available
                </Badge>
              </div>
              <Button className='w-60 py-6 font-mono font-bold text-base group bg-gradient-to-r from-indigo-400 to-indigo-700 hover:from-indigo-700 hover:to-indigo-400' onClick={() => handleAddToCart(book._id)}>
                {isAddToCart ? (
                  <>
                    <Loader2 className='animate-spin mr-2' size={20}/>
                    Adding to Cart...
                  </>
                ) : (
                  <>
                    <ShoppingCart className='mr-2 h-5 w-5' />
                    Buy Now
                  </>
                )}
              </Button>
              <Card className='border border-gray-200 shadow-sm'>
                <CardHeader>
                  <CardTitle className='text-lg font-bold'>Book Details</CardTitle>
                </CardHeader>
                <CardContent className='grid gap-4'>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="font-medium text-muted-foreground">
                      Subject/Title
                    </div>
                    <div>{book.subject}</div>
                    <div className="font-medium text-muted-foreground">
                      Course
                    </div>
                    <div>{book.classType}</div>
                    <div className="font-medium text-muted-foreground">
                      Category
                    </div>
                    <div>{book.category}</div>
                    <div className="font-medium text-muted-foreground">
                      Author
                    </div>
                    <div>{book.author}</div>
                    <div className="font-medium text-muted-foreground">
                      Edition 
                    </div>
                    <div>{book.edition}</div>
                    <div className="font-medium text-muted-foreground">
                      Condition
                    </div>
                    <div>{book.condition}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className='mt-8 grid gap-8 md:grid-cols-2'>
        <Card className='border-none shadow-md'>
            <CardHeader>
              <CardTitle className='text-lg font-bold'>Description</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <p>{book.description}</p>
              <div className="border-t-2 pt-4">
                  <h3 className='font-medium mb-2'>Our Community</h3>
                  <p className='text-muted-foreground'>Join our community of book lovers and share your thoughts on this book!</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div>
                  Ad Id: {book._id}
                </div>
                <div>
                  Posted: {formatDate(book.createdAt)}
                </div>
              </div>
            </CardContent> 
        </Card>
        </div>
      </div>
    </div>
  )
}

export default page