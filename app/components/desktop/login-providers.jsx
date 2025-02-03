import Image from 'next/image'
import googleLogo from '../../assets/images/google-logo.png'
import appleLogo from '../../assets/images/apple-logo.png'

export default function LoginProvidersDesktop() {
  return (
    <>
      <div className='cursor-pointer flex gap-4 items-center justify-center w-3/4 bg-black mt-5 rounded-3xl py-1'>
        <Image src={googleLogo} width={30} h={30} alt='google logo' />
        <h1 className='text-white'> Continue with Google </h1>
      </div>
      <div className='cursor-pointer flex items-center justify-center w-3/4 gap-4 bg-white shadow-lg mt-2 rounded-3xl py-1'>
        <Image src={appleLogo} width={30} h={30} alt='google logo' />
        <h1 className='text-black'> Continue with Apple </h1>
      </div>
    </>
  );
}
