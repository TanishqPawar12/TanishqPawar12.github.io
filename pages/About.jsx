import { ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react'
import React from 'react'
import TransitionWrapper from '../components/Transition'

const About = () => {
  return (
    <>
      <TransitionWrapper>
        <VStack gap={4} fontSize={['smaller', 'sm']} alignItems={'flex-start'}>
          <Text>Hey everyone 👋, I’m <span className="highlight">Tanishq Pawar</span>, a final year B.Tech. student (2022–25) from <span className="highlight">Acropolis Institute of Technology & Research, Indore</span>, pursuing Computer Science & Engineering.</Text>

          <Text>From being an ambivert kid who used to quietly observe the world around him to becoming someone who’s building real-world tech solutions — my journey has been all about <span className="highlight">growth through curiosity</span> and <span className="highlight">learning by doing</span>.</Text>

          <Text>I wasn’t someone who always knew he’d be in tech. But things started changing when I began exploring how websites work, how logic turns into code, and how digital products shape the world. The turning point? Probably during the lockdown — when most people were binge-watching, I was busy binge-learning. I discovered <span className="highlight">Web Development</span>, and it felt like something clicked.</Text>

          <Text>Since then, I’ve dived deep into <span className="highlight">ReactJS, Tailwind.css</span>, and slowly started understanding the backend ecosystem too. I built multiple projects, including one that’s very close to my heart — <span className="highlight">Giftible.in</span>, an e-commerce platform that showcases products crafted by specially-abled children. It was more than just a college project; it gave me purpose.</Text>

          <Text>I believe in <span className="highlight">consistency over perfection</span>. I’m not the smartest person in the room, but I’m always the one who will <span className="highlight">keep showing up</span>, keep learning, and keep iterating. Whether it's solving a DSA problem or exploring how <span className="highlight">DevOps</span> will shape my future career — I’m in it for the long haul.</Text>

          <Text>Some life lessons that I carry with me:</Text>
          <UnorderedList pl={4}>
            <ListItem>Growth starts where comfort ends.</ListItem>
            <ListItem>You don’t need motivation every day — you just need discipline.</ListItem>
            <ListItem>It’s okay to not know everything, but it’s not okay to stop being curious.</ListItem>
          </UnorderedList>
        </VStack>
      </TransitionWrapper>
    </>
  )
}

export default About
