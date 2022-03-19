import React from "react";
import { Button, Text } from "react-native";

export default class AddTaskScreen extends React.Component{
    render(){
        return <Button title="ADD" onPress={this.props.route.params.addContact({id: 4, name:"Task Added", status:"to do", priority: 2, due: new Date()})}/>
    }
}