import { Button, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { FaCoffee } from "react-icons/fa";
import { FiGithub, FiTwitter } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { PiGraduationCapLight, PiYoutubeLogo } from "react-icons/pi";
import { TiPlus } from "react-icons/ti";
import { Link } from 'react-router-dom';
import profile from "../src/assets/me3.png";
import TransitionWrapper from "./Transition";

const Sidebar = () => {
    return (
        <>
            <VStack width={['full', 'full', '30%', '30%']} borderRadius={'10px'} mx={[0, 0, 0, 2]} my={[2, 2, 2, 8]} p={4}>
                <VStack width={'full'} alignItems={'flex-start'} justifyContent={'flex-start'}>
                    <TransitionWrapper>
                        <Stack flexDirection={['row', 'row', 'column', 'column']} alignItems={['flex-start', '', '', 'center']} justifyContent={'center'} gap={4}>
                            <Image width={['38%', '40%', '90%', '90%']} borderRadius="full" transition="0.3s ease" _hover={{ boxShadow: '0 0 10px #3b82f6', cursor: 'pointer' }}
                                style={{ filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.2))' }} name="Tanishq Pawar" src={profile} />
                            <VStack alignItems={'flex-start'} justifyContent={'center'} gap={1}>
                                <Heading fontSize={['xl', 'xl', '2xl', '3xl']}>Tanishq Pawar</Heading>
                                <Text color={'gray'} fontSize={['xs', 'xs', 'sm', 'md']} fontWeight={'semibold'}></Text>
                                <Text color={'gray'} fontSize={['xs', 'xs', 'sm', 'md']}>MERN Stack Engineer from India, trying to be the best version of myself by being persistent, consistent & passionate.</Text> <br />
                                <HStack display={['none', 'none', 'none', 'flex']} mb={4} gap={2}>
                                    <Link to="https://www.linkedin.com/in/tanishq-pawar-11844424a/" target='_blank'><Button gap={1} background='purple.100' color={'white'} size={['xs', 'sm', 'sm', 'sm']} _hover={{ backgroundColor: 'purple.200' }}>Follow <TiPlus /></Button></Link>
                                    {/* <Link to="https://buymeacoffee.com/deependraparmar" target='_blank'><Button gap={1} size={['xs', 'sm', 'sm', 'sm']}>Coffee <FaCoffee /></Button></Link>/* */}
                                </HStack>
                            </VStack>
                        </Stack>
                    </TransitionWrapper>



                    <VStack fontSize={['sm', 'sm', 'sm', 'md']} justifyContent={'flex-start'} alignItems={'flex-start'}>
                        <TransitionWrapper>
                            <HStack display={['flex', 'flex', 'flex', 'none']} mb={4} gap={2}>
                                <Link to="https://www.linkedin.com/in/tanishq-pawar-11844424a/" target='_blank'><Button gap={1} background='purple.100' color={'white'} size={'sm'} _hover={{ backgroundColor: 'purple.200' }}>Follow <TiPlus /></Button></Link>
                                {/* <Link to="https://buymeacoffee.com/deependraparmar" target='_blank'><Button gap={1} size={'sm'}>Coffee <FaCoffee /></Button></Link>*/}
                            </HStack>
                        </TransitionWrapper>
                        <TransitionWrapper>
                            <HStack className='sidebar_links' gap={2} justifyContent={'flex-start'} color={'gray'}><IoLocationOutline size={18} /><Text>India</Text> <Image position={'relative'} width={'30px'} src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_India.png/1280px-Flag_of_India.png' /></HStack>
                        </TransitionWrapper>

                        <TransitionWrapper>
                            <HStack className='sidebar_links' gap={2} justifyContent={'flex-start'} color={'gray'}><PiGraduationCapLight size={18} /><Text noOfLines={1}>AITR, Indore</Text> </HStack>
                        </TransitionWrapper>

                        <TransitionWrapper>
                            <HStack className='sidebar_links' gap={2} justifyContent={'flex-start'} color={'gray'}><AiOutlineMail size={18} /><Link to={'mailto:pawartanishq@gmail.com'} target='_blank' >pawartanishq@gmail.com</Link> </HStack>
                        </TransitionWrapper>

                        <TransitionWrapper>
                            <HStack className='sidebar_links' gap={2} justifyContent={'flex-start'} color={'gray'}><FiGithub size={18} /><Link to={'https://github.com/TanishqPawar12'} target='_blank' >TanishqPawar12</Link></HStack>
                        </TransitionWrapper>
                         
                        <TransitionWrapper>
                            <HStack className='sidebar_links' gap={2} justifyContent={'flex-start'} color={'gray'}><AiOutlineLinkedin size={18} /><Link to={'https://www.linkedin.com/in/tanishq-pawar-11844424a/'} target='_blank' >Tanishq Pawar</Link></HStack>
                        </TransitionWrapper>

                        <TransitionWrapper>
                            <HStack className='sidebar_links' gap={2} justifyContent={'flex-start'} color={'gray'}><BsGlobe size={18} /><Link to={'https://vercel.com/tanishq-pawars-projects'} target='_blank' >tanishqpawar.vercel.app</Link></HStack>
                        </TransitionWrapper>
                    </VStack>
                </VStack>
            </VStack>
        </>
    )
}

export default Sidebar
