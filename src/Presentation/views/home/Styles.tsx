import { StyleSheet } from "react-native"

const HomeStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        opacity: 0.6
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '15%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoImage: {
        width: 80,
        height: 80,
        marginBottom: 30
    },
    logoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold',
        letterSpacing: 1
    },
    form: {
        width: '100%',
        height: '50%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        padding: 30
    },
    formTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 1,
        marginBottom: 30
    },
    formInput: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 10
    },
    formTextInput: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#9ca3af',
        padding: 12,
        fontSize: 15,
        borderRadius: 5
    },
    roundedButton: {
        width: '100%',
        backgroundColor: '#16a34a',
        padding: 15,
        borderRadius: 10,
        marginTop: 50
    },
    textButton: {
        color: 'white',
        textAlign: 'center'
    }
})

export default HomeStyles