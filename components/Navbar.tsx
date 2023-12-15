import Image from 'next/image'
import Link from 'next/link'
import CustomButton from './CustomButtom'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-x-[144px] flex justify-between mx-auto items-center sm:px-16 px-6 py-4'>
        <Link href='/' className='flex justify-center items-center'>
          <Image
            src='/logo.svg'
            alt='Car Hub Logo'
            className='object-contain'
            width={118}
            height={18}
          />
        </Link>
        <CustomButton
          title='Sign In'
          btnType='button'
          containerStyles='text-primary-blue bg-white rounded-full w-min-[130px]'
        />
      </nav>
    </header>
  )
}
export default Navbar
