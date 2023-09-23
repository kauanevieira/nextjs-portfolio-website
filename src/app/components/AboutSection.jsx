"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import { TabButton } from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>React.js</li>
        <li>Node.js</li>
        <li>JavaScript</li>
        <li>Bootstrap</li>
        <li>Tawilind</li>
        <li>HTML, CSS</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>Universidade Cruzeiro do Sul - Técnologo em Design Gráfico</li>
        <li>Universidade Cruzeiro do Sul - Técnologo em Análise de Sistemas</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className='list-disc pl-2'>
        <li>Universidade Cruzeiro do Sul - Técnologo em Design Gráfico</li>
        <li>Universidade Cruzeiro do Sul - Técnologo em Análise de Sistemas</li>
      </ul>
    )
  }
]

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    })
  }
  return (
    <section id='about' className="text-white">
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src='/images/about-image1.jpg' width={500} height={500} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>Sobre mim</h2>
          <p className='text-base lg:text-lg'>Sou desenvolvedora full stack que adora criar aplicações web interativas e responsivas. Tenho experiência trabalhando com JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS e Git. Tenho facilidade em aprender e estou constantemente buscando expandir meu conhecimento e conjunto de habilidades. Adoro trabalhar em equipe e estou entusiasmado para colaborar com outras pessoas na criação de aplicações incríveis.</p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton 
              selectTab={() => handleTabChange("skills")} 
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton 
              selectTab={() => handleTabChange("education")} 
              active={tab === "education"}
            >
              {" "}
              Educação{" "}
            </TabButton>
            <TabButton 
              selectTab={() => handleTabChange("certifications")} 
              active={tab === "certifications"}
            >
              {" "}
              Certificados{" "}
            </TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}
