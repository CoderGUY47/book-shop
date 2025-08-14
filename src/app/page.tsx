'use client'
import Image from "next/image";
import { ArrowRightCircle, BookOpen, Camera, CreditCard, Library, Search, ShoppingBag, Store, Tag, Truck, Wallet } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import NewBooks from "./components/NewBooks";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const bannerImages = [
    "/images/book1.jpg",
    "/images/book2.jpg",
    "/images/book3.jpg",
  ];
  
  const blogPosts = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1604866830893-c13cafa515d5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b25saW5lJTIwc2VsbCUyMGJvb2tzfGVufDB8fDB8fHww",
      title: "Where & how to sell books online?",
      description:
        "Get started with selling your used books online and earn money from your old books.",
      icon: <BookOpen className="w-6 h-6 text-gray-700" />,
    },
    {
      imageSrc:
        "https://media.istockphoto.com/id/910384920/photo/kid-reading-near-locked-door.webp?a=1&b=1&s=612x612&w=0&k=20&c=J3FL4ZVORItw_bkLzlVo4WO-xUy22S7Qqbuq2xusNnc=",
      title: "What to do with old books?",
      description:
        "Learn about different ways to make use of your old books and get value from them.",
      icon: <Library className="w-6 h-6 text-gray-700" />,
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1492539438225-2666b2a98f93?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG9sZCUyMCUyMGJvb2tzfGVufDB8fDB8fHww",
      title: "What is Book-Shop?",
      description:
        "Discover how Book-Shop helps you buy and sell used books online easily.",
      icon: <Store className="w-6 h-6 text-gray-700" />,
    },
  ];

  const sellSteps = [
    {
      step: "Step 1",
      title: "Post an ad for selling used books",
      description:
        "Post an ad on Book-shop describing your book details to sell your old books online.",
      icon: <Camera className="h-8 w-8 text-gray-700" />,
    },
    {
      step: "Step 2",
      title: "Set the selling price for your books",
      description: "Set the price for your books at which you want to sell them.",
      icon: <Tag className="h-8 w-8 text-gray-700" />,
    },
    {
      step: "Step 3",
      title: "Get paid into your UPI/Bank account",
      description:
        "You will get money into your account once you receive an order for your book.",
      icon: <Wallet className="h-8 w-8 text-gray-700" />,
    },
  ];
  
  const buySteps = [
    {
      step: "Step 1",
      title: "Select the used books you want",
      description: "Search from over thousands of used books listed on Book-shop.",
      icon: <Search className="h-8 w-8 text-gray-700" />,
    },
    {
      step: "Step 2",
      title: "Place the order by making payment",
      description:
        "Then simply place the order by clicking on the 'Buy Now' button.",
      icon: <CreditCard className="h-8 w-8 text-gray-700" />,
    },
    {
      step: "Step 3",
      title: "Get the books delivered at your doorstep",
      description: "The books will be delivered to you at your doorstep!",
      icon: <Truck className="h-8 w-8 text-gray-700" />,
    },
  ];

  // started from here
  // State to manage the current image index for the 
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerImages.length)
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer); // Cleanup the timer on component unmount
  },[])

  return (
    <main className="min-h-screen">
      <section className="relative h-[600px] overflow-hidden">
        {bannerImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              fill
              alt="banner"
              className="object-cover"
              priority={index === 0} // Load the first image immediately
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}

        <div className="relative flex flex-col container mx-auto px-4 h-full items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-6xl w-[1200px] font-bold mb-4">
            Introduce to you the new Online Buying & Selling Mart in Bangladesh
          </h1>
          <div className="flex flex-col sm:flex-row gap-5 py-8">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-purple-400 to-purple-700 hover:from-purple-700 hover:to-purple-400 text-white px-8 py-7 rounded-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg  group-hover:bg-white/30 transition-colors">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <Link href="/book-sell">
                  <div className="text-left">
                    <div className="text-md font-mono font-black opacity-90">
                      Start Shopping in our Mart
                    </div>
                    <div className="font-semibold font-lg">
                      Available for buying used Books
                    </div>
                  </div>
                </Link>
              </div>
            </Button>
            <Button
              size="lg"
              className="group bg-gradient-to-r from-purple-400 to-purple-700 hover:from-purple-700 hover:to-purple-400 text-white px-8 py-7 rounded-xl duration-500"
            >
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 duration-500 transition-colors">
                  <ShoppingBag className="h-6 w-6" />
                </div>
                <Link href="/book-sell">
                  <div className="text-left">
                    <div className="text-md font-mono font-black opacity-90">
                      Start Shopping in our Mart
                    </div>
                    <div className="font-semibold font-lg">
                      Available for buying used Books
                    </div>
                  </div>
                </Link>
              </div>
            </Button>
          </div>
        </div>
      </section>
      <NewBooks />
      <Button
        size="lg"
        className="flex mt-10 mb-10 mx-auto group bg-gradient-to-r from-purple-400 to-purple-700 hover:from-purple-700 hover:to-purple-400 text-gray-50 px-8 py-7 rounded-md"
      >
        <Link href="/books">
          <div className="text-lg font-bold font-mono">Browsing our books here</div>
        </Link>
      </Button>

      {/* selling system */}
      <section className="py-20 group bg-gradient-to-b from-blue-50 to-purple-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-7">
            <h2 className="text-3xl font-bold mb-2 text-gray-700">
              How to Sell Your Used Books Online?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to sell your used books online with
              Book-Shop.😉
            </p>
          </div>

          <div className="relative grid md:grid-cols-3 gap-8">
            {/* Dashed line as a background connector */}
            <div className="absolute md:block hidden left-1/4 top-1/2 right-1/4 h-0.5 border-t-2 border-dashed -z-10" />
            {/* Step cards */}
            {sellSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col h-full">
                <div className="flex flex-col flex-grow bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] text-center">
                  <div
                    className="absolute top-3 -right-6 -translate-x-1/2 bg-gradient-to-r from-green-500 to-[#a4fd00] text-gray-700 
                  px-4 py-1 rounded-full text-sm font-semibold z-10"
                  >
                    {step.step}
                  </div>
                  <div className="w-16 h-16 mb-5 flex mx-auto bg-[#a4fd00]/40 rounded-full items-center justify-center">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm flex-grow text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* selling system */}


      {/* buying system */}
      <section className="py-12 pb-28 group bg-gradient-to-b from-purple-200 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-7">
            <h2 className="text-3xl font-bold mb-2 text-gray-700">
              How to Buy used or new Books in Book-Shop in Online?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get a limited dicscount and get the best price for your books in
              Book-Shop.😉
            </p>
          </div>

          <div className="relative grid md:grid-cols-3 gap-8">
            {/* Dashed line as a background connector */}
            <div className="absolute md:block hidden left-1/4 top-1/2 right-1/4 h-0.5 border-t-2 border-dashed -z-10" />
            {/* Step cards */}
            {buySteps.map((step, index) => (
              <div key={index} className="relative flex flex-col h-full">
                <div className="flex flex-col flex-grow bg-purple-100 backdrop-blur-md rounded-xl p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] text-center">
                  <div className="absolute top-3 -right-6 -translate-x-1/2 bg-gradient-to-r from-green-500 to-[#a4fd00] text-gray-700
                  px-4 py-1 rounded-full text-sm font-semibold z-10"
                  >
                    {step.step}
                  </div>
                  <div className="w-16 h-16 mb-5 flex mx-auto group bg-[#a4fd00]/40 rounded-full items-center justify-center">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm flex-grow text-gray-700">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* buying system */}

      {/* blogs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-gray-700 font-bold text-center mb-12">
            Read our <span className="text-gray-700">Blog</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="h-full flex flex-col overflow-hidden transition-all shadow-xl duration-300 py-0"
              >
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={post.imageSrc}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="flex items-center text-xl font-semibold h-10 mb-5 gap-2">
                      <div className="bg-primary/10 p-2 rounded-full">
                        {post.icon}
                      </div>
                      <span className="flex-grow">{post.title}</span>
                    </h3>
                    <p className="text-gray-600 text-sm flex-grow">
                      {post.description}
                    </p>
                    <Button
                      variant="link"
                      className="flex mt-4 p-0 items-center text-sm"
                    >
                      Read More <ArrowRightCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* blogs */}
    </main>
  );
}