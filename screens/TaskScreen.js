import React from "react"
import { FlatList, View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import Task from "../Task"
import { Dimensions } from 'react-native';
import { IndicatorViewPager, PagerDotIndicator } from '../rn-viewpager';
import TaskButton from "../TaskButton";

export default class TaskScreen extends React.Component{
    // hardcoded tasks for temporary use
    state = {
        tasks:[
            {
                id: 1,
                name:"Math HW",
                status:"to do",
                priority:1,
                due: new Date('January 16, 2024 03:00:00')
            },
            {
                id: 2,
                name:"History HW",
                status:"doing",
                priority:2,
                due: new Date('January 14, 2022 18:00:00')
            },
            {
                id: 3,
                name:"English HW",
                status:"done",
                priority:2,
                due: new Date('February 28, 2022 03:00:00')
            }
            
        ]
    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
      } 

    addContact = contact => {
        this.setState(prevState => ({tasks: [...prevState.tasks, contact]}), console.log(this.state.tasks))
    }


    render(){
        return (
            <View style={styles.container}>
            <View style={styles.date}> 
                <Text style={styles.weekday}>{new Intl.DateTimeFormat(undefined, { weekday: 'long' }).format(new Date())}</Text> 
                <Text style={styles.m_d_y}>{new Intl.DateTimeFormat(undefined, { month: 'long', day: 'numeric', year: "numeric" }).format(new Date())}</Text>
                </View>
                <View style={styles.line}/>
                {/* I changed the IndicatorViewPager file because it imported a removed file, 
                which i replaced with a current compatible one. 
                That's why the is in the source file, not in node modules.
                Just to note, indicatorviewpager does not work on web for some reason.*/}
                <IndicatorViewPager style={styles.tasks} indicator={this._renderDotIndicator()}>
                    <View style={styles.section} key="1" initialPage={0}>
                        <Text style={styles.sectionText}> To do </Text>
                        <FlatList
                        data={this.state.tasks}
                        renderItem={({item}) => item.status === 'to do' ? <Task {...item} ></Task> : null}
                         style={styles.flatList}
                        ListFooterComponent={<TaskButton onAddTask={() => {this.props.navigation.push('Add Task', {addContact: () => this.addContact})}} />}
                        ListEmptyComponent={<TaskButton onAddTask={() => {this.props.navigation.push('Add Task', {addContact: () => this.addContact})}} />}
                        />
                        
                    </View>
                    <View style={styles.section} key="2">
                        <Text style={styles.sectionText}> Doing </Text>
                        <FlatList
                        data={this.state.tasks}
                        renderItem={({item}) => item.status === 'doing' ? <Task {...item} ></Task> : null}
                        keyExtractor={item => item.id} style={styles.flatList}/>
                        
                    </View>
                    <View style={styles.section} key="3">
                        <Text style={styles.sectionText}> Done </Text>
                        <FlatList
                        data={this.state.tasks}
                        renderItem={({item}) => item.status === 'done' ? <Task {...item} ></Task> : null}
                        keyExtractor={item => item.id} style={styles.flatList}/>
                    </View>
                </IndicatorViewPager>
                
              </View>
            )
            
        
    }


}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    date: {
        marginTop: 20,
        marginLeft: 20,
        flexDirection: 'row'
      },
    weekday: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    m_d_y: {
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft:10,
        marginTop:15,
        color:'gray'
    },
    line:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        margin: 10
    },
    tasks:{
        flex:1,
        paddingBottom:30
    },
    flatList:{
        borderBottomColor:'black',
        borderBottomWidth:1
    },
    section:{
        alignItems:'center',
        width: Dimensions.get('window').width - 20
    },
    sectionText:{
        color:'blue',
        fontSize:17,
    }

})