"use client"
import React, { useState } from 'react'
import GithubIcon from '../../../public/github-icon.svg'
import LinkedinIcon from '../../../public/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

export const EmailSection = () => {
  const [emailSubmitted, seEmailSubmitted] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if(response.status === 200) {
      console.log('Mensagem enviada.')
      seEmailSubmitted(true)
    }

  }
  return (
    <section id='contact' className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
      <div className='z-10'>
        <h5 className='text-xl font-bold text-white my-2'>Entre em contato</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
          {" "}
          Atualmente estou em busca de novas oportunidades, minha caixa de entrada está sempre
          aberta. Se você tiver alguma dúvida ou quiser apenas dizer oi, vou
          tentar dar o meu melhor para te responder!
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link href="www.github.com">
            <Image src={GithubIcon} alt='Github Icon' />
          </Link>
          <Link href="www.linkedin.com">
            <Image src={LinkedinIcon} alt='Linkedin Icon' />
          </Link>
        </div>
      </div>
      <div>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label 
              htmlFor="email" 
              className='text-white block text-sm mb-2 font-medium'
            >
              Seu email
            </label>
            <input 
              name='email'
              type='email' 
              id='email' 
              required 
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder='teste@teste.com'  
            />  
          </div>
          <div className='mb-6'>
            <label 
              htmlFor="subject" 
              className='text-white block text-sm mb-2 font-medium'
            >
              Assunto
            </label>
            <input 
              name='subject'
              type='text' 
              id='subject' 
              required 
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder='Diga somente oi'  
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='message'
              className='text-white block text-sm mb-2 font-medium'
            >
              Mensagem
            </label>
            <textarea
              name='message'
              id='message'
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder='Vamos falar sobre...'
            />
          </div>
          <button
            type='submit'
            className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full '
          >
            Envie sua mensagem
          </button>
          {
            emailSubmitted && (
              <p className='text-green-500 text-sm mt-2'>
                Mensagem enviada com sucesso!
              </p>
            )
          }
        </form>
      </div>
    </section>
  )
}
