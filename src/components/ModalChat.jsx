import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import React from 'react'

const ModalChat = ({isOpen, onClose}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalContent
                width={'734px'}
                height={'737px'}
                bg={'white'}
                px={'32px'}
                py={'34px'}
            >
                <ModalCloseButton />
                <ModalBody>
                    <Lorem count={2} />
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default ModalChat;