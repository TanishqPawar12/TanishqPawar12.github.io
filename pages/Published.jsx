import {
  Box,
  Button,
  Circle,
  Container,
  Flex,
  HStack,
  Heading,
  Text,
  VStack
} from '@chakra-ui/react';
import { BsFillRecordFill } from 'react-icons/bs';
import { FaTools } from 'react-icons/fa';
import { FiBarChart2, FiCheckCircle, FiHome, FiPackage } from 'react-icons/fi';
import { Link } from "react-router-dom";
import TransitionWrapper from '../components/Transition';

const Milestones = () => {
  const linkColor = ['#38B2AC', '#F56565', '#48BB78','#4299e1'];

  return (
    <Container maxW="7xl" p={{ base: 2, sm: 10 }}>
      <VStack fontSize={['sm','md']} textAlign="start" align="start" mb={5} gap={8}>
        <TransitionWrapper>
          <Text fontSize={['lg', 'xl']} textAlign={'center'} color={'gold'} width={'full'} fontFamily={'Sofia'}>"Every research you share is a Contribution & every paper you publish is a Milestone."</Text>
        </TransitionWrapper>

        <TransitionWrapper>
          <HStack width={'full'} justifyContent={'space-evenly'} alignItems={'flex-start'} wrap={'wrap'}>
            <VStack _hover={{ transform: 'translateY(-10px)' }} transition={'all 0.4s ease-in-out'} cursor={'pointer'} bg={'#25282c'} alignItems={'flex-start'} w={['95%', '95%', '30%', '30%']} border={'1px solid'} borderColor={'#25282c'} borderRadius={'10px'} p={4}>
              <Text fontWeight={'600'} noOfLines={1} color={'gold'}>🏆 Paper Published At - ICA6NT 2025</Text>
              <Text fontSize={'xs'}>I was honored with the <span className="highlight">Best Paper Award</span> at the 5th International Conference on Artificial Intelligence, 6G Communications and Network Technologies <span className="highlight">ICA6NT 2025</span> held at Velammal Institute of Technology, Chennai. My research paper, titled "Giftible: An E-Commerce Portal For Empowering Specially-Abled Artisans," was recognized for its innovation, social impact, and technical relevance. This achievement reflects my commitment to leveraging technology for inclusive and meaningful change.</Text>
              <Button gap={2} _hover={{ bg: 'black', borderColor: 'red' }} border={'1px solid black'} size={'xs'} bg={'black'} color={'white'}><Link target='_blank' to={'https://drive.google.com/file/d/1L_SUSubadqf6MymloSES10VwVRAUJh3X/view'}>See Research Paper</Link> <BsFillRecordFill color='red' /></Button>
            </VStack>

            <VStack _hover={{ transform: 'translateY(-10px)' }} transition={'all 0.4s ease-in-out'} cursor={'pointer'} bg={'#25282c'} alignItems={'flex-start'} w={['95%', '95%', '30%', '30%']} border={'1px solid'} borderColor={'#25282c'} borderRadius={'10px'} p={4}>
              <Text fontWeight={'600'} noOfLines={1} color={'gold'}>🏆 Paper Published At - AUROCON 2025</Text>
              <Text fontSize={'xs'}>Presented a co-authored research paper titled “Giftible: An e-Commerce Portal for Empowering Specially-Abled Artisans” at <span className="highlight">Aurocon 2025</span> – National Multidisciplinary Conference on Challenges & Opportunities of Industry 4.0, held on 29th March 2025 at Sri Aurobindo Institute of Technology, Indore. The conference highlighted technological innovations shaping Industry 4.0, and the paper was appreciated for its inclusive approach and practical relevance.</Text>
              <Button gap={2} _hover={{ bg: 'black', borderColor: 'red' }} border={'1px solid black'} size={'xs'} bg={'black'} color={'white'}><Link target='_blank' to={'https://drive.google.com/file/d/1_pnHFTj63lg0DkGmMO-gZBbofpnjo8Tm/view'}>See Research Paper</Link> <BsFillRecordFill color='red' /></Button>
            </VStack>
          </HStack>
        </TransitionWrapper>  
      </VStack>
    </Container>
  );
};


const MilestoneItem = ({
  icon = FiCheckCircle,
  color = 'gold',
  boxProps = {},
  skipTrail = false,
  children,
  ...props
}) => {;
  return (
    <TransitionWrapper>
      <Flex minH={20} {...props}>
        <Flex flexDir="column" alignItems="center" mr={4} pos="relative">
          <Circle
            size={12}
            bg={'#25282c'}
            border={'1px solid'}
            borderColor={color}
          />
          <Box as={icon} size={"1.25rem"} color={color} pos="absolute" left={"0.875rem"} top={"0.875rem"} />
          {!skipTrail && <Box w="1px" flex={1} bg={color} my={1} />}
        </Flex>
        <Box pt={{ base: 1, sm: 3 }} {...boxProps}>
          {children}
        </Box>
      </Flex>
    </TransitionWrapper>
  );
};

export default Milestones;