import { Image } from '@chakra-ui/image';
import { AspectRatio, Box, Button, Container, Flex, HStack, Icon, SimpleGrid, Tag, Text, Tooltip, VStack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { BsFillRecordFill } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';
import TransitionWrapper from '../components/Transition';

import Estate from "../src/assets/projects/02_Estate.png";
import InsiderJobs from "../src/assets/projects/01_InsiderJobs.png";
import Portfolio from "../src/assets/projects/03_Portfolio.png";
import Todolist from "../src/assets/projects/04_Todolist.png";
import GithubPortfolio from "../src/assets/projects/05_GithubPortfolio.png";
import SignatureApp from "../src/assets/projects/06_SignatureApp.png";

const Projects = () => {
  const projectsList = [
  {
    title: 'InsiderJobs: Job Portal',
    description: 'InsideJobs is a modern job portal platform designed to streamline the recruitment process for companies and job seekers. It features company registration, job posting, resume management, and applicant tracking. With a clean UI and intuitive dashboard, it bridges the gap between recruiters and talent efficiently',
    cover: InsiderJobs,
    techStack: ['ReactJS', 'Tailwind.css', 'Node.js', 'Express.js', 'MongoDB', 'Clerk Auth', 'Sentry', 'Postman',],
    url: 'https://github.com/TanishqPawar12/Job-Portal',
    live: 'https://job-portal-new-client-ashy.vercel.app/',
  },
  {
    title: 'Estate: Real State App.',
    description: 'Estate is a responsive real estate web application built with React and Tailwind CSS. It allows users to browse, search, and filter property listings with a modern UI. The platform provides details about property type, location, and pricing—ideal for showcasing homes or commercial spaces online.',
    cover: Estate,
    techStack: ['React.js', 'Tailwind.css', 'Vite'],
    url: 'https://github.com/TanishqPawar12/RealState-by-React',
    live: 'https://real-state-by-react.vercel.app/',
  },
  {
    title: 'Personal Portfolio',
    description: 'This is my personal portfolio website showcasing my skills, expertise, projects, achievements and more.',
    cover: Portfolio,
    techStack: ['ChakraUI', 'React', 'Vite'],
    url: 'https://github.com/DeependraParmar/Deependra-Parmar-Portfolio',
    live: 'https://TanishqPawar12.github.io',
  },
  {
    title: 'Todo List: Daily Task',
    description: 'This is my personal TodoList App, a simple and responsive task management tool built with React.js, Next.js, and Tailwind CSS. It allows users to add, view, and manage tasks with a clean UI and dynamic state handling. Designed for ease of use and scalability, it includes optional local storage support for task persistence.',
    cover: Todolist,
    techStack: ['React.js', 'Next.js', 'Tailwind.css', 'Vite'],
    url: 'https://github.com/TanishqPawar12/TodoListApp-by-react-next.js/tree/main/todolist',
    live: 'https://todo-list-app-by-react-next-js-bool.vercel.app/',
  },
  {
    title: 'Github Portfolio',
    description: 'A public showcase of my development work, including full-stack apps, UI prototypes, and open-source projects built using React, Next.js, and more.',
    cover: GithubPortfolio,
    techStack: ['HTML', 'CSS'],
    url: 'https://github.com/TanishqPawar12',
    live: 'https://github.com/TanishqPawar12',
  },
  {
    title: 'Quick Signature App',
    description: 'A simple web app using HTML, CSS, and JS that lets users draw, customize, and save digital signatures with support for LocalStorage and Canvas API.',
    cover: SignatureApp,
    techStack: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://github.com/TanishqPawar12/practice-miniproject-webdev/tree/master/Quick%20Signature%20App',
    live: 'https://github.com/TanishqPawar12/practice-miniproject-webdev/tree/master/Quick%20Signature%20App',
  },
  ];

  return (
    <TransitionWrapper>
      <Container maxW="7xl" mx="auto" px={['0','3']}>
        <SimpleGrid columns={[1, 3]} spacing={4} mt={4}>
          {projectsList.map((project, index) => (
            <TransitionWrapper>
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                cover={project.cover}
                techStack={project.techStack}
                url={project.url}
                live={project.live}
              />
            </TransitionWrapper>
          ))}
        </SimpleGrid>
      </Container>
    </TransitionWrapper>
  )
}


const LazyImage = (props) => {
  const { src, width, height, size, layout, rounded } = props;

  return (
    <Image
      src={src}
      objectFit="cover"
      alt="cover image"
      width={width}
      height={height}
      size={size}
      layout={layout}
      rounded={rounded}
    />
  );
};

const ProjectCard = (props) => {
  const { title,description, cover, techStack, url, live } = props;

  const handleLinkClick = (e, link) => {
    window.open(link);
    e.stopPropagation();
  };

  return (
    <Box cursor="pointer" size="xl" _hover={{ transform: 'translateY(-10px)' }} transition={'all 0.4s ease-in-out'}>
      <VStack
        rounded="xl"
        bg={'#25282c'}
        _hover={{
          shadow: 'lg',
          textDecoration: 'none'
        }}
        overflow="hidden"
        align="start"
        spacing={4}
      >
        <Box position="relative" w="100%">
          <AspectRatio
            ratio={16/9}
            w="100%"
            borderColor={useColorModeValue('gray.100', 'gray.700')}
          >
            <LazyImage src={cover} />
          </AspectRatio>
        </Box>

        <VStack py={2} px={4} spacing={2} align="start" w="100%">
          <Flex justifyContent="space-between" width="100%">
            <Tooltip hasArrow label="Github link" placement="top">
              <HStack>
                <Icon color={'white'} as={FiGithub} boxSize="0.9em" mt="1px" />
                <Text
                  fontSize="sm"
                  noOfLines={1}
                  color={'white'}
                  fontWeight="600"
                  align="left"
                  onClick={(e) => handleLinkClick(e, url)}
                >
                  {title}
                </Text>
              </HStack>
            </Tooltip>
          </Flex>
          <Text color={'gray'} fontSize={'xs'} noOfLines={2}>{description}</Text>
          <Flex justifyContent="space-between" width="100%">
            <Box>
              <HStack spacing="1">
                {techStack.map((tech, index) => (
                  <Tag key={index} size="sm" color={'white'} colorScheme="purple">
                    <Text fontSize={['0.55rem', 'inherit', 'inherit']}>{tech}</Text>
                  </Tag>
                ))}
              </HStack>
            </Box>
          </Flex>

          <Button mt={4} border={'1px solid black'} background={'black'} color={'white'} size={'sm'} onClick={e => handleLinkClick(e, live)} gap={2} _hover={{border: '1px solid red'}}>Live <BsFillRecordFill color='red' /> </Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Projects