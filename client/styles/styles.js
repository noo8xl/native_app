import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    flexContainer: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    title: {
        color: '#333',
        fontSize: 20
    },
    bottomNav: {
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        padding: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#333',
        padding: 10,
        width: '100%',
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#fff'
    },
    menusItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexShrink: 0
    },
    container: {
        width: '100%'
      },
    page: {
        width: '100%',
        padding: 20
    },
    activityIndicator: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: '40%'
    }
})