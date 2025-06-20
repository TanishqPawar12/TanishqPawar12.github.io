import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import TransitionWrapper from '../components/Transition';

const Skills = () => {
  const languages = ['Java', 'JavaScript'];
  const frontend = ['HTML', 'CSS', 'React', 'Bootstrap', 'Tailwind CSS', 'Material UI', 'Redux Toolkit'];
  const backend = ['Node.js', 'Express.js', 'MongoDB', 'NextAuth', 'AuthJS', 'JWT'];
  const database = ['MongoDB'];
  const tools = ['Git', 'GitHub', 'VS Code', 'Postman', 'Clerk Auth', 'Sentry'];
  const clouds = ['Vercel'];
  const softskills = ['Problem Solving', 'Networking', 'Public Speaking', 'Communication'];

  return (
    <>
      <TransitionWrapper>
        <Accordion width={'full'} index={[0, 1, 2, 3, 4, 5, 6]} allowMultiple allowToggle>
          <AccordionItem my={'4'} border={'none'}>
            <AccordionButton fontSize={['xs', 'xs', 'sm', 'sm']} _hover={{ bg: '#25282c' }} p={4} bg={'#25282c'}>
              <Box as='span' flex='1' textAlign='left'>
                Languages I prefer programming in
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel border={'1px solid #25282c'} pb={4}>
              <HStack w={'full'} wrap="wrap" justifyContent={'flex-start'} alignItems={'flex-start'}>
                {languages.map((skill, index) => (
                  <Skill key={index} skill={skill} />
                ))}
              </HStack>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem my={'4'} border={'none'}>
            <AccordionButton fontSize={['xs', 'xs', 'sm', 'sm']} _hover={{ bg: '#25282c' }} p={4} bg={'#25282c'}>
              <Box as='span' flex='1' textAlign='left'>
                Frontend Technologies I am proficient in
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel border={'1px solid #25282c'} pb={4}>
              <HStack wrap={'wrap'} w={'full'} justifyContent={'flex-start'} alignItems={'flex-start'}>
                {frontend.map((skill, index) => (
                  <Skill key={index} skill={skill} />
                ))}
              </HStack>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem my={'4'} border={'none'}>
            <AccordionButton fontSize={['xs', 'xs', 'sm', 'sm']} _hover={{ bg: '#25282c' }} p={4} bg={'#25282c'}>
              <Box as='span' flex='1' textAlign='left'>
                Backend Technologies I have mastered
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel border={'1px solid #25282c'} pb={4}>
              <HStack wrap={'wrap'} w={'full'} justifyContent={'flex-start'} alignItems={'flex-start'}>
                {backend.map((skill, index) => (
                  <Skill key={index} skill={skill} />
                ))}
              </HStack>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem my={'4'} border={'none'}>
            <AccordionButton fontSize={['xs', 'xs', 'sm', 'sm']} _hover={{ bg: '#25282c' }} p={4} bg={'#25282c'}>
              <Box as='span' flex='1' textAlign='left'>
                Databases & ORM's I prefer using
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel border={'1px solid #25282c'} pb={4}>
              <HStack wrap={'wrap'} w={'full'} justifyContent={'flex-start'} alignItems={'flex-start'}>
                {database.map((skill, index) => (
                  <Skill key={index} skill={skill} />
                ))}
              </HStack>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem my={'4'} border={'none'}>
            <AccordionButton fontSize={['xs', 'xs', 'sm', 'sm']} _hover={{ bg: '#25282c' }} p={4} bg={'#25282c'}>
              <Box as='span' flex='1' textAlign='left'>
                Tools that makes my life easier
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel border={'1px solid #25282c'} pb={4}>
              <HStack w={'full'} wrap="wrap" justifyContent={'flex-start'} alignItems={'flex-start'}>
                {tools.map((skill, index) => (
                  <Skill key={index} skill={skill} />
                ))}
              </HStack>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem my={'4'} border={'none'}>
            <AccordionButton fontSize={['xs', 'xs', 'sm', 'sm']} _hover={{ bg: '#25282c' }} p={4} bg={'#25282c'}>
              <Box as='span' flex='1' textAlign='left'>
                My Cloud Skills
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel border={'1px solid #25282c'} pb={4}>
              <HStack w={'full'} wrap="wrap" justifyContent={'flex-start'} alignItems={'flex-start'}>
                {clouds.map((skill, index) => (
                  <Skill key={index} skill={skill} />
                ))}
              </HStack>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem my={'4'} border={'none'}>
            <AccordionButton fontSize={['xs', 'xs', 'sm', 'sm']} _hover={{ bg: '#25282c' }} p={4} bg={'#25282c'}>
              <Box as='span' flex='1' textAlign='left'>
                My Soft Skills that makes me unique
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel border={'1px solid #25282c'} pb={4}>
              <HStack w={'full'} wrap="wrap" justifyContent={'flex-start'} alignItems={'flex-start'}>
                {softskills.map((skill, index) => (
                  <Skill key={index} skill={skill} />
                ))}
              </HStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </TransitionWrapper>
    </>
  );
};

const Skill = ({ skill }) => {
  return (
    <Text py={1} fontSize={['xs', 'xs', 'sm', 'sm']} fontWeight={'semibold'} px={4} borderRadius={'10px'} bg={'#25282c'} cursor={'pointer'}>
      {skill}
    </Text>
  );
};

export default Skills;
