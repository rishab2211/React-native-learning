import { StyleSheet } from 'react-native'

export const indexStyles = StyleSheet.create({
    container : {
        width:"100%",
        height:"100%",
        display:"flex",
        justifyContent:"space-between"
    },
    cards:{
        width:"100%",
        height:"auto",
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        marginTop:8
    }
})

export const headerStyles = StyleSheet.create({
    container :{
        width:"100%",
        display: "flex",
        flexDirection : "row",
        justifyContent : "space-between",
        padding:10,
        // backgroundColor: "lightblue",
        alignItems:"center",
        borderBottomWidth:0.5
    },
    dateStyle:{
        color : "gray"
    },
    greetTextStyle:{
        fontSize:20,
        fontWeight:"700"
    },
    innerContainer :{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
})


export const cardStyle = StyleSheet.create({
    container:{
        width:"50%",
        height:100,   
        padding:3     
    },
    innerContainer :{
        height:"100%",
        margin:6,
        padding:8,
        borderWidth:0.5,
        borderRadius:5,
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
    },
    innerInnerContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    title:{
        fontSize:16,
        fontWeight:"500"

    },
    num:{
        fontSize:30,
        fontWeight:"500"
    }
})


export const chartCardStyle = StyleSheet.create({
    container:{
        width:"100%"
    },
    imageStyle :{
        width:"100%",
        
    },
    chartHeadStyle :{
        display : "flex",
        flexDirection:"row",
        justifyContent:"space-between",
        margin:10
    },
    chartTitleSyle:{
        fontWeight:"500",
        fontSize:22
    },
    appliedStyle:{

    },
    qualifiedStyle:{

    },
    statusContainer :{
        display:"flex",
        flexDirection:"row",
        gap:8
    },
    green:{
        width:10,
        height:10,
    },
    blue:{
        width:12,
        height:12,
    },
    image:{
        width:"100%",
        height:300
    },
    ekSaath:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:3
    }
})


export const footerNavStyle = StyleSheet.create({
    container:{
        width:"100%",
        height:60,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        borderTopWidth:0.25
    },
    innerContainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
})

