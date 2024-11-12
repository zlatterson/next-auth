'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useState } from 'react'


export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      const result = await signIn('resend', { email })
      if (result?.error) {
        setMessage('Failed to send email. Please try again.')
      } else {
        setMessage('Check your email for the login link.')
      }
    } catch (error) {
      setMessage('An unexpected error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen justify-center pt-20">
      <div className="w-full md:w-[407px] px-10 py-8">
        <h2 className="text-[24px]  leading-7 lg:leading-8 font-bold  mb-4 ">
          Sign In
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex relative">
            <div className="absolute w-5 h-5 mt-[12px] ml-[10px] pl-[3px] pr-[2.68px] py-0.5 flex-col justify-center items-center gap-[0.30px]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5785 12.7301C10.3896 12.8481 10.1771 12.8954 9.98819 12.8954C9.79929 12.8954 9.58678 12.8481 9.39787 12.7301L0 6.99219V14.6191C0 16.2484 1.32231 17.5707 2.95159 17.5707H17.0484C18.6777 17.5707 20 16.2484 20 14.6191V6.99219L10.5785 12.7301Z" fill="#8D8D8D" />
                <path d="M17.0487 2.63281H2.95187C1.55872 2.63281 0.37808 3.62455 0.0947266 4.94686L10.0121 10.9917L19.9058 4.94686C19.6225 3.62455 18.4418 2.63281 17.0487 2.63281Z" fill="#8D8D8D" />
              </svg>

            </div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              className="w-full pl-[40px] pr-[15px] py-3 bg-neutral-800 rounded-[10px] border border-neutral-700 justify-start items-center gap-2 inline-flex grow shrink basis-0 text-neutral-200 text-sm font-medium leading-[22px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
              aria-required="true"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`font-medium w-full px-4 py-2 rounded-[10px] border justify-center items-center gap-2 inline-flex  ${loading ? 'bg-gray-500 border-gray-500' : 'bg-primary border-primary'}`}
          >
            {loading && (
              <div className="w-5 h-5 relative">
                <div className="w-5 h-5 border-2 border-t-transparent border-white border-solid rounded-full animate-spin"></div>
              </div>
            )}
            {loading ? "Sending Email Link" : "Continue with Email"}
          </button>
        </form>

        <div className="flex flex-row items-center mt-8 mb-5">
          <div className="flex-1 h-[1px]"
            style={{
              background: "linear-gradient(270deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.00) 100%)"
            }}
          ></div>
          <div className="flex-0  text-sm font-medium mx-4">or sign in with</div>
          <div className="flex-1 h-[1px]"
            style={{
              background: "linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.30) 100%)"
            }}
          ></div>
        </div>


        <button
          onClick={() => signIn('google')}
          aria-label="Sign in with Google"
          className="inline-flex items-center justify-center w-full rounded-[10px] px-4 py-2.5 mb-2.5 bg-gray-100"
        >
          <div className="mr-3">
            <Image src={"/assets/google.png"} height={20} width={20} alt="Google Logo" />
          </div>
          <div className="font-normal text-[#344054]">
            Google
          </div>
        </button>
        <div className="flex flex-row gap-3">
          <button
            className="inline-flex items-center justify-center w-full rounded-[10px] px-4 py-2.5 mb-2.5 bg-[#7289DA]"
          >
            <div className="mr-3">
              <Image src={"/assets/discord.svg"} height={20} width={20} alt="Google Logo" />
            </div>
            <div
              onClick={() => signIn('discord')}
              aria-label="Sign in with Discord"
              className="font-normal "
            >
              Discord
            </div>
          </button>
          <button
            className="inline-flex items-center justify-center w-full rounded-[10px] px-4 py-2.5 mb-2.5 bg-gray-100"
          >
            <div className="mr-3">
              <Image src={"/assets/x.svg"} height={20} width={20} alt="Google Logo" />
            </div>
            <div className="font-normal text-[#344054]">
              X
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}