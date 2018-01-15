import React from 'react'
import {
    StyleSheet,
    Dimensions,
} from 'react-native'

let { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        width: width,
        borderBottomWidth: 0.3,
        borderColor: 'grey',
    },

    imageBackground: {
        width: width,
        height: 70,
        justifyContent: 'center',
    },

    imageBackgroundMask: {
        zIndex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },

    content: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: 'transparent',
    },

    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 10,
        alignItems: 'center'
    },

    leftImage: {
        width: 45,
        height: 45,
        borderRadius: 2,
        marginTop: 5,
    },

    titleContainer: {
        paddingLeft: 10,
        justifyContent: 'center',
    },

    titleAndSubtitleContainer: {
        paddingLeft: 10,
        justifyContent: 'flex-start',
    },

    title: {
        paddingTop: 5,
        fontSize: 20,
        fontWeight: 'bold',
        width: 250,
    },

    subtitle: {
        fontSize: 15,
        color: 'grey',
        width: 190,
    },

    rightContainer: {
        padding: 10,
        alignItems: 'flex-end',
    },

    rightSubtitle: {
        color: 'grey',
        width: 100,
    }
})