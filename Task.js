import { Text,  StyleSheet, TouchableOpacity, Dimensions } from "react-native"

const thisMonth = { month: 'short', day: 'numeric', weekday: 'long', hour:'numeric', minute:'numeric'}
const thisYear = { month: 'short', day: 'numeric'}
const nextYears = { month: 'short', day: 'numeric', year:"numeric"}

const Task = props => {
    
    return (
        
        <TouchableOpacity style={styles.task}>
            <Text style={styles.textName}>{props.name}</Text>     
            <Text style={styles.textDate}>{props.due.toLocaleDateString(undefined, 
                props.due.getYear() === new Date().getYear() 
                ? (props.due.getMonth() === new Date().getMonth() 
                ? thisMonth: thisYear)  
                
                : nextYears)}</Text>           
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    task:{
        borderWidth:1,
        marginTop: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius:5,
        width: Dimensions.get('window').width - 40
        
    },
    textName:{
        fontSize: 17,
    },
    textDate:{
        fontSize: 14,
        color:'#bf0404'
    }
})

export default Task