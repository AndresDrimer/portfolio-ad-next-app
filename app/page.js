import Head from 'next/head'

//components
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import NewMain from '../components/NewMain'
import NewSkills from '../components/NewSkills'
import NewProjects from '../components/NewProjects'

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
  
      <NewMain data={data} />
      <NewSkills data={data} />
      <NewProjects data={data} />
      
      <Contact data={data} />
    </>
  )
}
