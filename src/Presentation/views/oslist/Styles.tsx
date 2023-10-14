import { StyleSheet } from "react-native"

const OsStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerList: {
        width: '100%',
        height: '90%',
        padding: 20
    },
    listItem: {
        borderRadius: 5,
        marginBottom: 10,
        padding: 20,
        borderWidth: 1,
        borderColor: 'red',

    },
    containerButton: {
        width: '100%',
        height: '6%'
    },
    button: {
        width: 200,
        borderRadius: 10,
        backgroundColor: '#b91c1c',
        alignSelf: 'center',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        alignSelf: 'center',
        color: 'white'
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
        height: 50,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    backRightBtnLeft: {
        backgroundColor: '#1d4ed8',
        right: 75,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    backRightBtnRight: {
        backgroundColor: '#b91c1c',
        right: 0,
    },
    backTextWhite: {
        color: 'white',
    },
    rowBack: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    rowFront: {
        marginBottom: 10,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#ccc',
        justifyContent: 'center',
        height: 50,
    }
})

export default OsStyles