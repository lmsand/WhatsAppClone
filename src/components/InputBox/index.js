import { View, TextInput, StyleSheet } from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'

const InputBox = (props) => {
  const [newMessage, setNewMessage] = useState('')

  const onSend = () => {
    console.warn('new message')
    setNewMessage('')
  }

  return (
    <View style={styles.container}>
      {/* Icon */}
      <AntDesign name='plus' size={20} color='royalblue' />

      {/* Text Input */}
      <TextInput value={newMessage} onChange={setNewMessage} placeholder='type your message...' style={styles.input} />

      {/* Icon */}
      <MaterialIcons onPress={onSend} name='send' size={16} color='white' style={styles.send} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    padding: 5,
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,

    borderRadius: 50,
    borderColor: 'lightgray',
    borderWidth: StyleSheet.hairlineWidth
  },
  send: {
    backgroundColor: 'royalblue',
    padding: 7,
    borderRadius: 15,
    overflow: 'hidden'
  }
})

export default InputBox
