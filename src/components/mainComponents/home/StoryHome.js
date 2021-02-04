import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from "react-native"
import { storyData } from "./storyData"

const StoryHome = () => {

    const dataStory = storyData.map((story, index) => (
        <View key={index} style={styles.dataContainer}>
            <View>
                <Image source={story.img} style={{
                    width: 40,
                    height: 40,
                    borderRadius: 100,
                    marginLeft: 10
                }} />
            </View>
            <Text style={{ textAlign: 'center' }}>{story.text}</Text>
        </View>

    ))

    return (
        <View style={{ top: 50 }}>
            <Text style={{
                top: 40,
                marginLeft: 15,
                fontWeight: "700",
                fontSize: 18,
                fontStyle: "normal",
                lineHeight: 22.05,
                color: "#15243C"
            }}>Stories</Text>
            <ScrollView horizontal style={styles.scrollContainer}>
                {dataStory}
            </ScrollView>
        </View>



    );
};

const styles = StyleSheet.create({
    dataContainer: {
        marginTop: 70,
        margin: 10
    },
    scrollContainer: {
        flexDirection: "row",



    }
})

export default StoryHome;