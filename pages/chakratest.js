// React
import * as React from "react"
import Head from 'next/head'
import Image from 'next/image'



// Navbar
import Navbar from '../components/navbar'

import { 
  ChakraProvider, 
  Checkbox, 
  CheckboxGroup,

  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,


  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react"


export default function Home() {
  // 

  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div className='homebody'>

      <Head>
        <title>Damac - Test Page for Chakra UI</title>
        <meta name="description" content="Damac Properties" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main home-main">


          <div class="container">
            
            <div className="row">
              
              <div className="col-md-6">
                <ChakraProvider>
                   <Checkbox defaultIsChecked>Checkbox</Checkbox>

                   <FormControl id="email">
                     <FormLabel>Email address</FormLabel>
                     <Input type="email" />
                     <FormHelperText>We'll never share your email.</FormHelperText>
                   </FormControl>

                </ChakraProvider>


                <>
                      <Button onClick={onOpen}>Open Modal</Button>

                      <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                          <ModalHeader>Modal Title</ModalHeader>
                          <ModalCloseButton />
                          <ModalBody>
                            <Lorem count={2} />
                          </ModalBody>

                          <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={onClose}>
                              Close
                            </Button>
                            <Button variant="ghost">Secondary Action</Button>
                          </ModalFooter>
                        </ModalContent>
                      </Modal>
                 </>


              

              </div>

            </div>

          </div>
          
        
      </main>


      
    </div>


  )
}

