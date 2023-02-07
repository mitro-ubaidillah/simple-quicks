import { Box, ButtonGroup, Image, SlideFade, Text, useDisclosure } from '@chakra-ui/react';
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
import axios from 'axios';


const Home = () => {
    const [openQuicks, setOpenQuicks] = useState(false);
    const [openChat, setOpenChat] = useState(false);
    const [openToDo, setOpenToDo] = useState(false);
    const { isOpen, onToggle } = useDisclosure();
    const [loading, setLoading] = useState(true);
    const [todos, setTodos] = useState([]);
    const [chat, setChat] = useState([]);
    const [addTodo, setAddTodo] = useState(false);
    const [typeTodo, setTypeTodo] = useState('mytask');

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
    }

    const getAllTodo = async (todo) => {
        setLoading(true)
        let url = `https://quicks.free.beeceptor.com/todos/${todo}`;
        
        await axios.get(url)
            .then(response => {
            const result = response.data;
            console.log(result)
            setTodos(result);
        })
        setLoading(false);
    }

    const getAllChats = async () => {
        setLoading(true);
        let url = `https://testapi.io/api/mitro/chat`;

        await axios.get(url)
            .then(response => {
                const result = response.data;
                setChat(result);
            })
    }

    const handleChangeTodo = (e) => {
        setTypeTodo(e);
    }

    const newTodo = todos.filter((data) => data.type == typeTodo);

    useEffect(() => {
        // getAllTodo(typeTodo);
        getAllChats();
    },[typeTodo]);

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
                    <BoxToDo
                        todos={todos}
                        isLoading={loading}
                        onClick={() => setAddTodo(!addTodo)}
                        input={addTodo}
                        valueTodo={typeTodo}
                        onChangeTodo={(e) => handleChangeTodo(e.target.value)}
                    />
                    :
                    <></>
            }
        </Layout>
    );
}

export default Home;
