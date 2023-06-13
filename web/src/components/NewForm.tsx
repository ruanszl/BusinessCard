'use client'
import { useState, ChangeEvent, useEffect } from 'react'
import {
  ExternalLink,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  SpellCheck2,
  Twitter,
  Youtube,
} from 'lucide-react'

import cookie from 'js-cookie'
import Image from 'next/image'

interface User {
  name: string
  email: string
  picture: string
}

export function NewForm() {
  const [formValues, setFormValues] = useState({
    Titulo: '',
    Facebook: '',
    Instagram: '',
    Twitter: '',
    Youtube: '',
    Github: '',
    Linkedin: '',
    Site: '',
  })

  function handleOnChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = event.target
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  function handleForm(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(formValues, 'nwddd')
  }

  const [userInfo, setUserInfo] = useState<User | null>(null)
  const access_token = cookie.get('session')

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        if (access_token) {
          const response = await fetch('http://localhost:3333/user', {
            cache: 'no-cache',
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
            credentials: 'include',
          })
          const data = await response.json()
          setUserInfo(data)
        }
      } catch (error) {
        console.log('Error fetching user data:', error)
      }
    }

    fetchUserInfo()
  }, [access_token])

  if (!userInfo) {
    return null
  }
  let socialMidia = {
    Titulo: '',
    Facebook: '',
    Instagram: '',
    Twitter: '',
    Youtube: '',
    Github: '',
    Linkedin: '',
    Site: '',
  }
  socialMidia = formValues
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 min-h-screen">
      <form
        onSubmit={handleForm}
        className="flex flex-col justify-center pl-[10% ] sm:pl-[20%] md:pl-[30%] lg:pl-[50%] xl:pl-[50%] min-w-[700px] gap-6 overflow-hidden"
      >
        <div className="flex items-center space-x-2">
          <SpellCheck2 className="w-10 h-10" />
          <textarea
            name="Titulo"
            onChange={handleOnChange}
            value={formValues.Titulo}
            spellCheck={false}
            className="h-14 w-full resize-none  bg-transparent p-3 text-lg leading-relaxed text-purple-700 placeholder:text-gray-800 focus:outline-none"
            placeholder="Digite o titulo"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Facebook className="w-10 h-10" />
          <textarea
            name="Facebook"
            onChange={handleOnChange}
            value={formValues.Facebook}
            spellCheck={false}
            className="h-14 w-full resize-none  bg-transparent p-3 text-lg leading-relaxed text-purple-700 placeholder:text-gray-800 focus:outline-none"
            placeholder="Cole o link para o Facebook"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Instagram className="w-10 h-10" />
          <textarea
            name="Instagram"
            onChange={handleOnChange}
            value={formValues.Instagram}
            spellCheck={false}
            className="h-14 w-full resize-none  bg-transparent p-3 text-lg leading-relaxed text-purple-700 placeholder:text-gray-800 focus:outline-none"
            placeholder="Cole o link para o Instagram"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Twitter className="w-10 h-10" />
          <textarea
            name="Twitter"
            onChange={handleOnChange}
            value={formValues.Twitter}
            spellCheck={false}
            className="h-14 w-full resize-none  bg-transparent p-3 text-lg leading-relaxed text-purple-700 placeholder:text-gray-800 focus:outline-none"
            placeholder="Cole o link para o Twitter"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Youtube className="w-10 h-10" />
          <textarea
            name="Youtube"
            onChange={handleOnChange}
            value={formValues.Youtube}
            spellCheck={false}
            className="h-14 w-full resize-none  bg-transparent p-3 text-lg leading-relaxed text-purple-700 placeholder:text-gray-800 focus:outline-none"
            placeholder="Cole o link para o Youtube"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Github className="w-10 h-10" />
          <textarea
            name="Github"
            onChange={handleOnChange}
            value={formValues.Github}
            spellCheck={false}
            className="h-14 w-full resize-none  bg-transparent p-3 text-lg leading-relaxed text-purple-700 placeholder:text-gray-800 focus:outline-none"
            placeholder="Cole o link para o Github"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Linkedin className="w-10 h-10" />
          <textarea
            name="Linkedin"
            onChange={handleOnChange}
            value={formValues.Linkedin}
            spellCheck={false}
            className="h-14 w-full resize-none  bg-transparent p-3 text-lg leading-relaxed text-purple-700 placeholder:text-gray-800 focus:outline-none"
            placeholder="Cole o link para o Linkedin"
          />
        </div>
        <div className="flex items-center space-x-2">
          <ExternalLink className="w-10 h-10" />
          <textarea
            name="Site"
            onChange={handleOnChange}
            value={formValues.Site}
            spellCheck={false}
            className="h-14 w-full resize-none  bg-transparent p-3 text-lg leading-relaxed text-purple-700 placeholder:text-gray-800 focus:outline-none"
            placeholder="Cole o link para o seu Site"
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center h-10 w-24 rounded-2xl bg-purple-800"
        >
          Salvar
        </button>
      </form>
      <div className="flex items-center lg:justify-center md:justify-center overflow-hidden">
        <div className="flex flex-col items-center w-[500px] h-[700px] border-4 p-5 gap-36 border-purple-900/20 rounded-xl bg-purple-800/20">
          <div className="flex flex-col items-center">
            <Image
              src={userInfo.picture}
              alt=""
              width={400}
              height={400}
              className="h-24 w-24 rounded-full"
            />
            <p className="text-xl font-alt text-purple-700 m-3 ">
              {userInfo.name}
            </p>
            <p className="text-xl text-purple-400 m-3">{formValues.Titulo}</p>
          </div>
          <div className="flex flex-col items-center gap-16 ">
            <div className="flex gap-7">
              {socialMidia.Facebook && (
                <a
                  href={socialMidia.Facebook}
                  className="inline-block cursor-pointer"
                >
                  <Facebook className="h-10 w-10" />
                </a>
              )}
              {socialMidia.Instagram && (
                <a
                  href={socialMidia.Instagram}
                  className="inline-block cursor-pointer"
                >
                  <Instagram className="h-10 w-10" />
                </a>
              )}
              {socialMidia.Twitter && (
                <a
                  href={socialMidia.Twitter}
                  className="inline-block cursor-pointer"
                >
                  <Twitter className="h-10 w-10" />
                </a>
              )}
              {socialMidia.Youtube && (
                <a
                  href={socialMidia.Youtube}
                  className="inline-block cursor-pointer"
                >
                  <Youtube className="h-10 w-10" />
                </a>
              )}
            </div>
            <div className="flex gap-7">
              {socialMidia.Linkedin && (
                <a
                  href={socialMidia.Linkedin}
                  className="inline-block cursor-pointer"
                >
                  <Linkedin className="h-10 w-10" />
                </a>
              )}
              {socialMidia.Github && (
                <a
                  href={socialMidia.Github}
                  className="inline-block cursor-pointer"
                >
                  <Github className="h-10 w-10" />
                </a>
              )}
              {socialMidia.Site && (
                <a
                  href={socialMidia.Site}
                  className="inline-block cursor-pointer"
                >
                  <ExternalLink className="h-10 w-10" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
