import React from 'react'
import { Block, Text } from 'expo-ui-kit'
const Message = () => {
    return (
        <Block
            color="#88B04B"
            style={{
                alignItems: 'center',
                justifyContent: 'center',

            }}>
            <Text h2 white center>
                Completed message
        </Text>
        </Block>
    )
}

export default Message

