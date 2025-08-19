'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Lock, Package, PiggyBank, ShoppingCart, Search, Heart, User, User2, LogOut, ChevronRight, FileTerminal, HelpCircle, BookLock, Menu, Icon} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { toggleLoginDialog } from '@/store/slice/userSlice'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import AuthPage from './AuthPage'


const Header = () => {
  const [isDropdownOpen,setIsDropdownOpen] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()
  const isLoginOpen = useSelector((state:RootState) => state.user.isLoginDialogOpen)
  
  const user = {
    profilePicture:"",
    name:"",
    email:""
  }
  const userPlaceholder = ''

  const handleLoginClick = () =>{
    dispatch(toggleLoginDialog())
    setIsDropdownOpen(false)
  }

//for giving privacy in account section
  const handleProtectNavigation = (href:string) => {
    if(user){
      router.push(href)
      setIsDropdownOpen(false)
    }
    else{
      dispatch(toggleLoginDialog())
      setIsDropdownOpen(false)
    }
  }

  const handleLogout = ()=>{

  }
  
  const menuItems=[
    ...(user && user ? [  //if user loged in, show this content
      {
        href: "account/profile",
        content:(
          <div className="flex gap-x-4 items-center p-2 border-b">
                <Avatar className='w-12 h-12 -ml-2 rounded-full'>
                  {user?.profilePicture ? (
                    <AvatarImage alt='user_iamge'></AvatarImage>
                  ):(
                    <AvatarFallback>{userPlaceholder}</AvatarFallback>
                  )}
                </Avatar>
                <div className="flex flex-col">
                  <span className='font-semibold text-md'>
                    {user.name}
                  </span>
                  <span className='text-xs text-gray-500'>
                    {user.email}
                  </span>
                </div>
          </div>
        )
      }
    ]:[
      {
        icon: <Lock className='h-5 w-5'/>,
        lable: "Login /Signup",
        onclick: handleLoginClick
      },
    ]),
      {
        icon: <Lock className='h-5 w-5'/>,
        lable: "Login /Signup",
        onclick: handleLoginClick
      },
      {
        icon: <User className='h-5 w-5'/>,
        lable: "Profile",
        onclick: () => handleProtectNavigation('/account/profile')
      },
      {
        icon: <Package className='h-5 w-5'/>,
        lable: "Oders",
        onclick: () => handleProtectNavigation('/account/orders')
      },
      {
        icon: <PiggyBank className='h-5 w-5'/>,
        lable: "Selling orders",
        onclick: () => handleProtectNavigation('/account/selling-products')
      },
      {
        icon: <ShoppingCart className='h-5 w-5'/>,
        lable: "Carts",
        onclick: () => handleProtectNavigation('/checkout/cart')
      },
      {
        icon: <Heart className='h-5 w-5'/>,
        lable: "Wishlist",
        onclick: () => handleProtectNavigation('/account/wishlist')
      },
      {
        icon: <User2 className='h-5 w-5'/>,
        lable: "About us",
        href: '/about-us'
      },
      {
        icon: <FileTerminal className='h-5 w-5'/>,
        lable: "Terms & Conditions",
        href: '/terms-of-use'
      },
      {
        icon: <BookLock className='h-5 w-5'/>,
        lable: "Privacy & Policy",
        href: '/privacy-policy'
      },
      {
        icon: <HelpCircle className='h-5 w-5'/>,
        lable: "Helps",
        href: '/how-it-works'
      },
      ...(user &&[
        {
          icon: <LogOut className='h-5 w-5'/>,
          lable: "Logout",
          onclick: handleLogout
        }
      ])
  ]

  const MenuItems = ({className=""})=>(
    <div className={className}>
      {menuItems?.map((item,index) =>
      item?.href ?(
          <Link
            key={index}
            href={item.href} 
            className='flex items-center gap-x-3 px-4 py-2 text-sm rounded-md hover:bg-gray-200'
            onClick={() => setIsDropdownOpen(false)}
          >
            {item.icon}
            <span>{item?.lable}</span>
            {item?.content && <div className='mt-1'>{item?.content}</div>}
            <ChevronRight className='w-4 h-4 ml-auto'/>
          </Link>
        ):(
          <button
            key={index}
            className='flex w-full items-center font-inconsolata font-bold gap-x-3 px-4 py-2 text-sm rounded-md hover:bg-gray-200'
            onClick={item.onclick}
          >
            {item.icon}
            <span>{item?.lable}</span>
            <ChevronRight className='w-4 h-4 ml-auto'/>
          </button>
        )
      )}
    </div>
  )


  return (
    <header className='bg-white shadow-lg sticky top-0 z-50'>
      <div className="container w-full mx-auto hidden lg:flex items-center justify-between p-4">
        <Link href='/' className='flex items-center'>
          <Image src='/images/web-logov2.png'
          width={200}
          height={100}
          alt='desktop-logo'
          className='h-10 w-auto'
          />
        </Link>
        <div className="flex flex-1 items-center justify-center max-w-xl px-4">
          <div className="relative w-full">
            <Input
            type='text'
            placeholder='Book Name  >  Author   >  Subject  >  Publisher'
            className='w-full pr-10 font-black !text-black font-mono border-2 shadow-sm'
            // value=''
            // onChange={() => {}}
            />
            <Button
            size='icon'
            variant='ghost'
            className='absolute right-0 top-1/2 -translate-y-1/2'
            >
            <Search className='h-5 w-5'/>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-x-4 mr-6">
          <Link href='/book-sell'>
            <Button variant='secondary' 
            className='group bg-gradient-to-r font-mono font-bold from-purple-400 to-purple-700 hover:from-purple-700 hover:to-purple-400 text-white rounded-x'>
              Sell Books
            </Button>
          </Link>

          <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' className='font-semibold'>
                <Avatar className='w-8 h-8 rounded-full'>
                  {user?.profilePicture ? (
                    <AvatarImage alt='user_iamge'></AvatarImage>
                  ): userPlaceholder ? (
                    <AvatarFallback>{userPlaceholder}</AvatarFallback>
                  ):(
                    <User className='mt-2 ml-2'/> 
                  )}
                </Avatar>
                My Account 
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 p-2">
                <MenuItems/>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href='/checkout/cart'>
              <div className="relative">
                <Button variant='ghost' className='relative font-semibold'>
                  <ShoppingCart className='h-5 w-5 mr-2'/> 
                  Cart
                </Button>
                {user && (
                  <span className='absolute top-2 left-7 bg-red-500 text-white text-xs font-semibold rounded-full
                  transform -translate-x-1/2 -translate-y-1/2 px-1'>
                    3
                  </span>
                )}
              </div>
          </Link>
        </div>
      </div>
      {/* mobile header*/}

      <div className="container mx-auto flex lg:hidden items-center justify-between p-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='ghost' size='icon'>
              <Menu className='h-6 w-6'/>
            </Button>
          </SheetTrigger>
          <SheetContent side='left' className='w-80 p-0'>
            <SheetHeader>
              <SheetTitle className='sr-only'></SheetTitle>
            </SheetHeader>
            <div className="border-b p-4">
              <Link href='/'>
                <Image src='/images/web-logov2.png'
                  width={150}
                  height={40}
                  alt='mobile-logo'
                  className='h-10 w-auto'
                />
              </Link>
            </div>
            <MenuItems className='py-2'/>
          </SheetContent>
        </Sheet>
        <Link href='/' className='flex items-center'>
          <Image src='/images/web-logov2.png'
          width={450}
          height={100}
          alt='desktop-logo'
          className='h-8 md:h-10 w-24 md:w-auto'
          />
        </Link>
        <div className="flex flex-1 items-center justify-center max-w-xl px-4">
          <div className="relative w-full">
            <Input
            type='text'
            placeholder='Search Books...'
            className='w-full pr-10'
            // value=''
            // onChange={() => {}}
            />
            <Button
            size='icon'
            variant='ghost'
            className='absolute right-0 top-1/2 -translate-y-1/2'
            >
            <Search className='h-5 w-5'/>
            </Button>
          </div>
        </div>
          <Link href='/checkout/cart'>
            <div className="relative">
              <Button variant='ghost' className='relative'>
                <ShoppingCart className='h-5 w-5 mr-2'/> 
              </Button>
              {user && (
                <span className='absolute top-2 left-7 bg-red-500 text-white text-xs font-semibold rounded-full
                transform -translate-x-1/2 -translate-y-1/2 px-1'>
                  3
                </span>
              )}
            </div>
          </Link>
      </div>
      <AuthPage isLoginOpen={isLoginOpen} setIsLoginOpen={handleLoginClick}/>
    </header>
  )
}

export default Header
