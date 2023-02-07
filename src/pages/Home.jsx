import { Box, ButtonGroup, Collapse, Image, Slide, SlideFade, Text, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import IconComponent from '../components/IconComponent';
import logoThunder from '../assets/icons/thunder.png';
import chatIcon from '../assets/icons/chat.png';
import chatIconActive from '../assets/icons/chat_white.png';
import renderIcon from '../assets/icons/render.png';
import renderIconActive from '../assets/icons/render_white.png';
import BgActive from '../components/BgActive';
import BoxChat from '../components/chat_component/BoxChat';
import { motion } from 'framer-motion';
import BoxToDo from '../components/todo_component/BoxToDo';
import apiToDo from '../services/apiToDo';


const Home = () => {
    const [openQuicks, setOpenQuicks] = useState(false);
    const [openChat, setOpenChat] = useState(false);
    const [openToDo, setOpenToDo] = useState(false);
    const { isOpen, onToggle } = useDisclosure();
    const [loading, setLoading] = useState(true);
    const [todos, setTodos] = useState([]);

    const onOpenQuicks = () => {
        onToggle();
        setOpenQuicks(!openQuicks);
    }

    const onOpenChat = () => {
        setOpenChat(!openChat);
        setOpenToDo(false);
    }

    const onOpenToDO = () => {
        setOpenToDo(!openToDo);
        setOpenChat(false);
        getAllTodo();
    }

    const getAllTodo = async() => {
        await apiToDo.getAll()
            .then(response => {
                const result = response.data; 
                setTodos(result);
            })
        setLoading(false);
    }

    // useEffect(() => {
    //     getAllTodo()
    // }, [])

    return (
        <Layout>
            <Text
                fontSize={'50px'}
                textAlign={'center'}
            >
                Simple Quicks
            </Text>
            <ButtonGroup
                position={'absolute'}
                bottom={'0'}
                right={'0'}
                px={'34px'}
                py={'27px'}
                gap={'26px'}
            >
                {openChat || openToDo ?
                    <BgActive />
                    :
                    <Box
                        order={3}
                    >
                        <motion.div
                            whileTap={{ scale: 0.9 }}
                        >
                            <IconComponent
                                bg={'primary.blue'}
                                icon={<Image src={logoThunder} />}
                                hover={{ bg: 'hover.blue' }}
                                onCLickBtnIcon={() => onOpenQuicks()}
                            />
                        </motion.div>
                    </Box>

                }
                <Box
                    display={openQuicks ? 'block' : 'none'}
                    order={openChat ? 2 : 2}
                >
                    <motion.div
                        whileTap={{ scale: 0.9 }}
                    >
                        <SlideFade
                            offsetX={'50px'}
                            in={isOpen}
                        >
                            <IconComponent
                                icon={<Image src={openChat ? chatIconActive : chatIcon} />}
                                bg={openChat ? 'indicators.purple' : 'indicators.white'}
                                onCLickBtnIcon={() => onOpenChat()}
                                hover={{ bg: openChat ? 'hover.purple' : 'primary.white' }}
                            />
                        </SlideFade>
                    </motion.div>

                </Box>
                <Box
                    display={openQuicks ? 'block' : 'none'}
                    order={openToDo ? 2 : 1}
                >
                    <motion.div
                        whileTap={{ scale: 0.9 }}
                    >
                        <SlideFade
                            offsetX={'150px'}
                            in={isOpen}
                        >
                            <IconComponent
                                icon={<Image src={openToDo ? renderIconActive : renderIcon} />}
                                bg={openToDo ? 'indicators.orange' : 'indicators.white'}
                                hover={{ bg: openToDo ? 'hover.orange' : 'primary.white' }}
                                onCLickBtnIcon={() => onOpenToDO()}
                            />
                        </SlideFade>
                    </motion.div>
                </Box>
            </ButtonGroup>
            {
                openChat ?
                    <BoxChat />
                    :
                    <></>
            }
            {
                openToDo ?
                <BoxToDo todos={todos} isLoading={loading} />
                :
                <></>
            }
        </Layout>
    );
}

export default Home;
