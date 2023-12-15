import { footerLinks } from '@/constants/index'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
      <div className='flex max-md:flex-col flex-wrap justify-between sm:px-16 px-6 py-10 gap-5'>
        <div className='flex flex-col gap-5 justify-start items-start'>
          <Link href='/' className='flex justify-center items-center'>
            <Image
              src='/logo.svg'
              alt='Car Hub Logo'
              className='object-contain'
              width={118}
              height={18}
            />
          </Link>
          <p className='text-base text-gray-700'>
            Car Hub 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className='footer__links'>
          {footerLinks.map((link) => (
            <div key={link.title} className='footer__link'>
              <h3 className='font-bold'>{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className='text-gray-500'
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 gap-5'>
        <p> &copy;2023 All rights reserved</p>
        <div className='footer_copyrights-link'>
          <Link href='/' className='text-gray-500'>
            Privacy policy
          </Link>
        </div>
        <div className='footer_copyrights-link'>
          <Link href='/' className='text-gray-500'>
            terms of use
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
