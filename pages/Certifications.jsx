import { AspectRatio, Button, Card, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { BsFillRecordFill } from 'react-icons/bs';
import { LuBadgeCheck } from "react-icons/lu";
import { Link } from 'react-router-dom';
import Apna_College_WebD from "../src/assets/certificates/Apna_College_WebD.png";
import Apna_college_Java_new from "../src/assets/certificates/Apna_college_Java_new.png";
import AWS_Academy_Cloud_Architecting from "../src/assets/certificates/AWS_Academy_Cloud_Architecting.png";
import Java_Bootcamp from "../src/assets/certificates/Java_Bootcamp.jpg";
import NPTEL from "../src/assets/certificates/NPTEL.png";
import OS_Certificate from "../src/assets/certificates/OS_Certificate.png";
import ICA6NT_BEST_PAPER_TANISHQ from "../src/assets/certificates/ICA6NT_BEST_PAPER_TANISHQ.png";
import ICA6NT_Certificate_Tanishq from "../src/assets/certificates/ICA6NT_Certificate_Tanishq.png";
import AUROCON_Certificate_Tanishq from "../src/assets/certificates/AUROCON_Certificate_Tanishq.png";
import ICT_Academy_Cloud from "../src/assets/certificates/ICT_Academy_Cloud.jpg";
import ISEA_Cyber_Hygiene from "../src/assets/certificates/ISEA_Cyber_Hygiene.png";
import Coursera_Jira from "../src/assets/certificates/Coursera_Jira.png";
import Coursera_Jira_Scrum_Project from "../src/assets/certificates/Coursera_Jira_Scrum_Project.png";
import TransitionWrapper from '../components/Transition';

const Certifications = () => {
  const certificates = [
    {
      title: '🏆 Best Paper Award - ICA6NT 2025',
      description: 'I was honored with the Best Paper Award at the 5th International Conference on Artificial Intelligence, 6G Communications and Network Technologies (ICA6NT 2025) held at Velammal Institute of Technology, Chennai. My research paper, titled "Giftible: An E-Commerce Portal For Empowering Specially-Abled Artisans," was recognized for its innovation, social impact, and technical relevance. This achievement reflects my commitment to leveraging technology for inclusive and meaningful change.',
      url: ICA6NT_BEST_PAPER_TANISHQ,
      link: 'https://drive.google.com/file/d/1T-KrU5wVvW9tDSkjnWqIrtulr7bhPC32/view',
      issuer: 'Velammal Institute of Technology'
    },
    {
      title: '🎓 Participation - AUROCON 2025',
      description: 'Presented a co-authored research paper titled “Giftible: An e-Commerce Portal for Empowering Specially-Abled Artisans” at Aurocon 2025 – National Multidisciplinary Conference on Challenges & Opportunities of Industry 4.0, held on 29th March 2025 at Sri Aurobindo Institute of Technology, Indore. The conference highlighted technological innovations shaping Industry 4.0, and the paper was appreciated for its inclusive approach and practical relevance.',
      url: AUROCON_Certificate_Tanishq,
      link: 'https://drive.google.com/file/d/1aWquhBO-tv8bFeToIw5VlU2cxmjECDf3/view',
      issuer: 'Sri Aurobindo Institute of Technology, Indore'
    },
    {
      title: 'Software Engineering',
      description: 'This NPTEL course on Software Engineering by IIT Kharagpur provided deep insights into software development methodologies, project management, and quality assurance. It helped strengthen my understanding of the complete software development lifecycle.',
      url: NPTEL,
      link: 'https://drive.google.com/file/d/1g_G5Wsh2AvIZemGN8iWGeLIVNfm0lv_c/view',
      issuer: 'NPTEL'
    },
    {
      title: 'Cloud Computing Certificate',
      description: 'Completed a Cloud Computing course with Grade A+ under the Infosys Foundation Finishing School for Employability Program. Gained strong foundational knowledge in cloud concepts, services, and deployment models.',
      url: ICT_Academy_Cloud,
      link: 'https://drive.google.com/file/d/1kgSq56l8dcaDpYBlbIU0KoLLt3EvNOwK/view',
      issuer: 'Infosys Foundation'
    },
    {
      title: 'AWS Academy Cloud Architecting',
      description: 'AWS Cloud Architect is the most interesting certificate I have ever done. It was a great learning experience.',
      url: AWS_Academy_Cloud_Architecting,
      link: 'https://drive.google.com/file/d/1OYU9Q5BPJbuOTgilPjQN-plWvQ54JcmX/view',
      issuer: 'AWS'
    },
    {
      title: 'Full Stack MERN Dev Course',
      description: 'This course was a great learning experience. I learned a lot about MERN stack, testing and much more.',
      url: Apna_College_WebD,
      link: 'https://drive.google.com/file/d/1HI4XmiN_CA95f5EHyELHHCh7VOkFOv-R/view',
      issuer: 'ApnaCollege'
    },
    {
      title: 'DSA With Java',
      description: 'This course was a great learning experience. I learned a lot about Data Structures and Algorithms using Java, problem-solving approaches, and much more.',
      url: Apna_college_Java_new,
      link: 'https://drive.google.com/file/d/1hz_mtDMoSK7rpFegJ4Tkqpg_ogiI92Sw/view',
      issuer: 'ApnaCollege'
    },
    {
      title: '📄 Participation - ICA6NT 2025',
      description: 'Presented my paper "Giftible" at ICA6NT 2025, Velammal Institute of Technology, and received the Best Paper Award for its innovation and social impact.',
      url: ICA6NT_Certificate_Tanishq,
      link: 'https://drive.google.com/file/d/1t_kg_Cj99Y4ahtv3-qSbgK-HYNOhmDFB/view',
      issuer: 'Velammal Institute of Technology, Chennai'
    },
    {
      title: 'Operating System',
      description: 'The Operating Systems course by Infosys Springboard helped me grasp fundamental OS concepts such as process management, memory management, and scheduling. It was a valuable addition to my core CS knowledge.',
      url: OS_Certificate,
      link: 'https://drive.google.com/file/d/1UINUParb0JUZ7pqYAf_CzhItVjSJnY-9/view',
      issuer: 'Infosys Springboard'
    },
    {
      title: 'Get started with Jira',
      description: 'Completed a hands-on project exploring the fundamentals of Jira. Gained practical experience in navigating the Jira interface, managing tasks, creating issues, and organizing projects using agile boards—laying a solid foundation in project tracking and team collaboration.',
      url: Coursera_Jira,
      link: 'https://drive.google.com/file/d/1VF-8uMsvIQA-vUeZ8iaSTNTgncY2DMNd/view',
      issuer: 'Coursera'
    },
    {
      title: 'Jira SCRUM Project',
      description: 'Learned to build and manage SCRUM projects within Jira. This project-based course focused on configuring agile boards, defining sprints, managing backlog items, and applying SCRUM practices for efficient sprint planning and execution.',
      url: Coursera_Jira_Scrum_Project,
      link: 'https://drive.google.com/file/d/1HSYRV8U9Z8qNKLPSlui3_vK9bPnORlSZ/view',
      issuer: 'Coursera'
    },
    {
      title: 'Java Bootcamp',
      description: 'This 3-day Java Bootcamp by LetsUpgrade was a great learning experience. I got to revise core Java concepts, understand real-world use cases, and build hands-on coding confidence.',
      url: Java_Bootcamp,
      link: 'https://drive.google.com/file/d/1L42ZOtGvnNkXTKihlSBkBZMaN7ieGNgF/view',
      issuer: 'LetsUpgrade'
    },
    {
      title: 'Cybersecurity Training',
      description: 'Completed a comprehensive cybersecurity training program under the Information Security Education & Awareness (ISEA) initiative by CDAC. The program provided essential skills in network security, ethical hacking, and cyber awareness. A valuable step toward building a strong foundation in information security.',
      url: ISEA_Cyber_Hygiene,
      link: 'https://drive.google.com/file/d/1g9_JSV-dDqnMfA_JaTKe-GOpcdHlK-1F/view',
      issuer: '(ISEA) initiative by CDAC'
    },
  ];
  return (
    <>
      <TransitionWrapper>
        <HStack position={'relative'} alignItems={'flex-start'} gap={4} justifyContent={'space-evenly'} wrap={'wrap'}  >
          {
            certificates.map((certificate, index) => {
              return (
                <Card _hover={{ transform: 'translateY(-10px)' }} transition={'all 0.4s ease-in-out'} mb={4} bg={'#25282c'} w={['full', '45%', '30%', '30%']} key={index} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                  <AspectRatio >
                    <Image width={'full'} src={certificate.url} alt="certificate" />
                  </AspectRatio>

                  <VStack p={4} color={'white'} fontSize={'sm'} justifyContent={'flex-start'} alignItems={'flex-start'}>
                    <HStack>
                      <Text color={''} noOfLines={1} fontWeight={'600'}>{certificate.title}</Text>
                      <LuBadgeCheck color='gold' size={16} />
                    </HStack>
                    <Text fontSize={'xs'} color={'gray'} noOfLines={'7'}>{certificate.description}</Text>
                    <Text fontSize={'xs'} color={'gray'} noOfLines={'1'}>Issued by: <span className='highlight' style={{ color: 'white' }}>{certificate.issuer}</span></Text>
                    <Button border={'1px solid black'} _hover={{ borderColor: 'red' }} gap={1} mt={2} bg={'black'} color={'white'} size={'sm'}><Link to={certificate.link} target='_blank'>Live</Link> <BsFillRecordFill color='red' /></Button>
                  </VStack>
                </Card>
              )
            })
          }
        </HStack>
      </TransitionWrapper>
    </>
  )
}

export default Certifications;