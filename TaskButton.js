import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native"

const TaskButton = props =>(
    <TouchableOpacity style={styles.addTask} onPress={props.onAddTask}>
        <Text> + Add Task </Text>        
    </TouchableOpacity>
)

const styles = StyleSheet.create(
    {
        addTask:{
            borderWidth:1,
            marginTop: 10,
            marginBottom:10,
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius:5,
            width: Dimensions.get('window').width - 40,
            height: 40,
            justifyContent:'center'
            
        }
    }
)

export default TaskButton
