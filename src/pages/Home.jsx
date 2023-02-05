import { Box, ButtonGroup, Image, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Layout from '../components/Layout';
import IconComponent from '../components/IconComponent';
import logoThunder from '../assets/icons/thunder.png';
import chatIcon from '../assets/icons/chat.png';
import chatIconActive from '../assets/icons/chat_white.png';
import renderIcon from '../assets/icons/render.png';
import renderIconActive from '../assets/icons/render_white.png';
import BgActive from '../components/BgActive';

const Home = () => {
    const [openQuicks, setOpenQuicks] = useState(false);
    const [openChat, setOpenChat] = useState(false);
    const [openToDo, setOpenToDo] = useState(false);

    const onOpenChat = () => {
        setOpenChat(!openChat);
        setOpenToDo(false);
    }

    const onOpenToDO = () => {
        setOpenToDo(!openToDo);
        setOpenChat(false);
    }

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
                    <IconComponent
                        bg={'primary.blue'}
                        icon={<Image src={logoThunder} />}
                        hover={{ bg: 'hover.blue' }}
                        onCLickBtnIcon={() => setOpenQuicks(!openQuicks)}
                        order={3}
                    />

                }

                {openQuicks &&
                    <>
                        <IconComponent
                            icon={<Image src={openChat ? chatIconActive : chatIcon} />}
                            bg={openChat ? 'indicators.purple' : 'indicators.white'}
                            order={openChat ? 2 : 2}
                            onCLickBtnIcon={() => onOpenChat()}
                            hover={{ bg: openChat ? 'hover.purple' : 'primary.white' }}
                        />
                        <IconComponent
                            icon={<Image src={openToDo ? renderIconActive : renderIcon} />}
                            bg={openToDo ? 'indicators.purple' : 'indicators.white'}
                            hover={{ bg: openToDo ? 'hover.purple' : 'primary.white' }}
                            order={openToDo ? 2 : 1}
                            onCLickBtnIcon={() => onOpenToDO()}
                        />
                    </>
                }
            </ButtonGroup>
        </Layout>
    );
}

export default Home;
