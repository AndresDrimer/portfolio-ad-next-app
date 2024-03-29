import Head from 'next/head'

//components
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'


import data from '../data'


export default function Home() {
  return (
    <>
      <Head>
        <title>Andrés Drimer | Web developer</title>
        <meta name="description" content="Andrés Drimer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoAD2023-4.ico" />
      </Head>
  
     
      <Main data={data} />
      <About data={data} />
      <Skills data={data} />
      <Projects data={data} />
      <Contact data={data} />
    </>
  )
}
