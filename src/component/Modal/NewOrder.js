import React from 'react';
import Modal from 'react-native-modal';
import { Box, Text } from '../../UI';
import { theme } from '../Theme/Theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NewOrderPopup = ({ visible, toggleModal, acceptOrder }) => {
    return (
        <Box>
            <Modal
                useNativeDriver={true}
                isVisible={visible}
                style={{ flex: 1 }}
                onSwipeComplete={() => toggleModal && toggleModal()}
                swipeDirection="down"
            >
                <Box>
                    <Box borderRadius={5} backgroundColor={theme.color.black}>
                        <Box alignSelf="flex-end" padding={5}>
                            <MaterialCommunityIcons
                                name="close"
                                size={25}
                                onPress={() => toggleModal && toggleModal()}
                                color={theme.color.white}
                            />
                        </Box>
                        <Box flexDirection="row" alignItems="center" justifyContent="center">
                            <Text marginRight={10} size={4.5} color={theme.color.white}>UberX</Text>
                            <Box backgroundColor="#2382e0" border={3} borderColor={theme.color.white} padding={7} borderRadius={100}>
                                <MaterialCommunityIcons
                                    name="account"
                                    size={30}
                                    color={theme.color.white}
                                />
                            </Box>
                            <Text color={theme.color.white} marginRight={5} marginLeft={10}>5.0</Text>
                            <MaterialCommunityIcons
                                name="star"
                                size={17}
                                color={theme.color.white}
                            />
                        </Box>
                        <Box paddingVertical={15}>
                            <Text size={7} lineHeight={50} center color={theme.color.white} marginRight={5} marginLeft={10}>2 min</Text>
                            <Text size={5} center color={theme.color.white} marginRight={5} marginLeft={10}>0.3 m</Text>
                        </Box>
                        <Box style={{ borderTopWidth: 1 }} borderColor="#595959" marginTop={10} />
                        <Box flexDirection="row" paddingVertical={10} alignItems="center" justifyContent="center">
                            <MaterialCommunityIcons
                                name="star"
                                size={17}
                                color={theme.color.white}
                            />
                            <Text handleClick={() => acceptOrder && acceptOrder()} color={theme.color.white} marginRight={5} marginLeft={5}>Toward your destination</Text>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </Box>
    )
}

export default NewOrderPopup;