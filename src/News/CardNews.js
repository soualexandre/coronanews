import React from "react";

import { FlatList, SafeAreaView, StyleSheet, Text, View , Image} from "react-native";
import { ScreenStackHeaderRightView } from "react-native-screens";
import { startClock } from "react-native-reanimated";
class App extends React.Component {
    state = {
        data: [
            { id: "00", name: "Notícia 1" },
            { id: "01", name: "Notícia  2" },
            { id: "02", name: "Notícia 3" },
            { id: "03", name: "Notícia 4" }
        ]
    };
    render() {
        return (
            <SafeAreaView style={styles.box}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.item}>
                                <Image
                                    style={styles.image}
                                    source={{
                                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                                    }}
                                />
                                <Text style={styles.text}>{item.name}</Text>
                            </View>
                        );
                    }}
                />
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    item: {
        alignItems: "center",
        backgroundColor: "#F8F9FA",
        flexGrow: 1,
        margin: 4,
        borderRadius: 15,
        height: 150,
        justifyContent: 'space-between',
    },
    text: {
        color: "#333333"
    },
    box: {
        marginTop: 70
    },
    image:{
        marginLeft:-270,
        height:150,
        width:150
    }
});
export default App;