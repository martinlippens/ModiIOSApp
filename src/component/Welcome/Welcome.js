import React, { Component } from 'react';
import { Animated, SafeAreaView, Image, StyleSheet, StatusBar } from 'react-native';
import { Box, Text } from '../../UI';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { theme } from '../Theme/Theme';
import Image1 from '../../assets/images/OnBoarding/image1.png';
import Image2 from '../../assets/images/OnBoarding/image2.png';
import Image3 from '../../assets/images/OnBoarding/image3.png';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Storage from "../../Utils/Storage";
import { getApiToken } from "../../Utils/Helpers";
export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: [
                {
                    title: 'Professional home cleaning is an amenity',
                    description: "Every complex has designated cleaners, so you will always have the same cleaners who have been background checked and vetted by us.",
                    image: Image1
                },
                {
                    title: '1 free hour of cleaning included per month',
                    description: 'Schedule a "Basic Cleaning" for free or you can eassily upgrade your service to a "Deep Cleaning" for a nominal fee.',
                    image: Image2
                },
                {
                    title: 'Verify your account and schedule a cleaning',
                    description: "Use the email address on your lease agreement to verify your account, create a password, complete your profile, and you're ready to go!",
                    image: Image3
                },
            ],
            completed: false,
            token: null,
            scrollX: new Animated.Value(0)

        };
    }

    async componentDidMount() {
        const token = await getApiToken();
        this.setState({ token });
        const { scrollX, pages } = this.state;
        const width = wp("100%");
        scrollX.addListener(({ value }) => {
            if ((Math.round(value / width)) === pages.length - 1) {
                console.log("completed");
                this.setState({ completed: true })
            }
        });
    }
    componentWillUnmount() {
        this.state.scrollX.removeAllListeners();
    }

    renderItemHandler = ({ item, index }) => (
        <Box key={index}>
            <Box style={styles.topTextContainer} width={wp("100%")}>
                <Text size={3.2} center marginTop={5} marginBottom={5} capitalize color={theme.color.white}>Step {index + 1}</Text>
                <Text style={{ maxWidth: wp("80%"), alignSelf: "center" }} size={4} center marginTop={5} marginBottom={5} capitalize color={theme.color.white}>{item.title}</Text>
            </Box>
            <Image
                source={item.image}
                style={styles.photo}
                resizeMode="contain"
            />
            <Box style={styles.bottomTextContainer} width={wp("100%")}>
                <Text size={3.3} center color={theme.color.white}>{item.description}</Text>
            </Box>
        </Box>
    )

    renderContent = () => {
        const { pages } = this.state;
        return (
            <Box container>
                <Animated.FlatList
                    data={pages}
                    horizontal
                    ref={this.boardingRef}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    scrollEnabled
                    decelerationRate="fast"
                    scrollEventThrottle={16}
                    snapToAlignment="center"
                    onScroll={Animated.event([
                        { nativeEvent: { contentOffset: { x: this.state.scrollX } } }
                    ], { useNativeDriver: false })}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={this.renderItemHandler}
                />
            </Box>
        )
    }

    handleNext = async () => {
        await Storage.set('welcome', "true");
        const { token } = this.state;
        StatusBar.setHidden(false);
        if (token) {
            this.props.navigation.replace("Main");
        } else {
            this.props.navigation.replace("Auth");
        }
    }

    renderDots = () => {
        const { pages, scrollX } = this.state;
        const dotPosition = Animated.divide(scrollX, wp("100%"));
        return (
            <Box flexDirection="row" alignItems="center" justifyContent="center">
                {pages.map((_, index) => {
                    const dotOpacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: "clamp"
                    });
                    const dotSize = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [7, 9, 10],
                        extrapolate: "clamp"
                    })
                    return (
                        <Box key={index} marginHorizontal={10}>
                            <TouchableWithoutFeedback
                                onPress={() => this.scrollToIndex(index)}
                            >
                                <Animated.View
                                    style={[{
                                        width: dotSize,
                                        height: dotSize,
                                        borderRadius: 10,
                                        backgroundColor: theme.color.white,
                                        opacity: dotOpacity
                                    }]}
                                ></Animated.View>
                            </TouchableWithoutFeedback>
                        </Box>
                    )
                })}
            </Box>
        )
    }

    scrollToIndex = index => {
        this.boardingRef.current.scrollToIndex({ index: index, animated: true })
    }

    render() {
        const { completed } = this.state;
        return (
            <SafeAreaView style={theme.base}>
                <Box container alignItems="center" backgroundColor={theme.color.link} justifyContent="center">
                    {this.renderContent()}
                    <Box style={styles.dotsContainer}>
                        {this.renderDots()}
                    </Box>
                    {!completed ? (
                        <Box style={{
                            position: 'absolute',
                            bottom: 10,
                            left: 0,
                            borderTopRightRadius: 20,
                            borderBottomRightRadius: 20,
                        }}
                            alignItems="center" justifyContent="center"
                            paddingHorizontal={15} paddingVertical={7}>
                            <TouchableWithoutFeedback
                                onPress={this.handleNext}>
                                <Text size={4} center capitalize color={theme.color.white} bold>Skip</Text>
                            </TouchableWithoutFeedback>
                        </Box>
                    ) :
                        (<Box style={{
                            position: 'absolute',
                            bottom: 10,
                            right: 0,
                            borderTopLeftRadius: 20,
                            borderBottomLeftRadius: 20,
                        }}
                            alignItems="center" paddingHorizontal={15} paddingVertical={7} justifyContent="center">
                            <TouchableWithoutFeedback
                                onPress={this.handleNext}>
                                <Box flexDirection="row" alignItems="center">
                                    <Text size={3.5} marginRight={5} marginBottom={1} center color={theme.color.white} bold>Let's go</Text>
                                    <AntDesign
                                        name="arrowright"
                                        color={theme.color.white}
                                        size={20}
                                        style={{ fontFamily: theme.typography.bold }}
                                    />
                                </Box>
                            </TouchableWithoutFeedback>
                        </Box>
                        )
                    }
                </Box>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    photo: {
        width: wp("100%"),
        height: hp("25%"),
        marginTop: hp("25%")
    },
    topTextContainer: {
        position: 'absolute',
        top: hp("2%")
    },
    bottomTextContainer: {
        position: 'absolute',
        bottom: hp("30%"),
    },
    dotsContainer: {
        position: 'absolute',
        bottom: hp("10%"),

    }
})