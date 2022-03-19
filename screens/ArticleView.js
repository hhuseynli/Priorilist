import React from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity} from "react-native";

const ArticleView = () => {
    return (<TouchableOpacity style={{borderColor:"black", margin:10, borderWidth:3, borderRadius:10, paddingBottom:30}}>
        <Image
        style={{height: Dimensions.get('window').height/2, width: Dimensions.get('window').width - 70, margin:25}}
        source={{
          uri: 'https://cdn-prod.medicalnewstoday.com/content/images/articles/324/324312/frustrated-man-with-his-head-in-his-hands-in-front-of-his-laptop.jpg',
        }}
      />
        <Text style={{marginLeft:25, fontSize:20}}>How to start a difficult task that requires high amount of effort and motivation?</Text>
    </TouchableOpacity>)
}
export default ArticleView