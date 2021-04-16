/* eslint-disable react/prop-types */
import { TouchableOpacity, FlatList, View, Modal } from 'react-native'
import React, { useState } from 'react'
import { Button, CheckBox, Icon } from 'native-base'
import PropTypes from 'prop-types'
import { CustomLabel, CustomInput } from '../../subComponents/CustomFontComponents'
const CustomSelect = ({ showModal, toggleModal, values, tags, inputValue }) => {
  const [addTagInput, setAddTagInput] = useState('')
  const [filteredTags, setFilteredTags] = useState(() => tags)

  // update state of "add more tags" inputText
  const setAddTagInputFunction = e => {
    setAddTagInput(e)
    const filtered = tags.filter(tagName => tagName.includes(e.trim().toLowerCase()))
    setFilteredTags(filtered)
  }

  // function for clear button on "Add more tags" inputText
  const clearAddTagInputFunction = () => {
    setAddTagInput('')
    setFilteredTags(tags)
  }

  // Function of add button
  const updateTagsFunction = value => {
    if (value !== '') {
      inputValue('tags', [...values, value.trim().toLowerCase()])
      clearAddTagInputFunction()
    }
  }

  const deleteTags = name => {
    const newValues = values.filter(e => e !== name)
    inputValue('tags', newValues)
  }

  const Chip = ({ name }) => {
    return (
      <TouchableOpacity
        onPress={() => deleteTags(name)}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: 6,
          marginLeft: 8,
          borderRadius: 7,
          height: 40,
          alignItems: 'center',
          backgroundColor: '#eee'
        }}
      >
        <CustomLabel style={{ marginTop: -6, marginLeft: 10 }}>{name}</CustomLabel>
        <Icon
          active
          name='cross'
          type='Entypo'
          style={{
            fontSize: 24,
            color: 'white',
            marginTop: 2,

            marginRight: -4
          }}
        />
      </TouchableOpacity>
    )
  }

  // Component of each checkbox component
  const OptionComp = ({ name }) => {
    const isChecked = valueName => {
      if (values.some(e => e === valueName)) {
        return true
      }
      return false
    }

    // onPress function for the OptionComp
    const checkFunction = () => {
      if (values.some(e => e === name)) {
        deleteTags(name)
      } else {
        inputValue('tags', [...values, name.trim().toLowerCase()])
      }
    }

    return (
      <>
        <TouchableOpacity
          onPress={checkFunction}
          style={{
            flexDirection: 'row',
            height: 40,
            width: '100%',
            justifyContent: 'space-between',
            paddingHorizontal: 16
          }}
        >
          <CustomLabel>{name}</CustomLabel>
          <CheckBox
            color='#578dde'
            checked={isChecked(name)}
            style={{ alignSelf: 'center', marginRight: 10 }}
          />
        </TouchableOpacity>
        <View style={{ width: '100%', height: 1, alignSelf: 'center', backgroundColor: '#ccc' }} />
      </>
    )
  }
  return (
    <Modal visible={showModal} animationType='fade'>
      <CustomLabel
        style={{
          fontSize: 20,
          marginVertical: 16,
          marginLeft: 8,
          fontFamily: 'Gilroy_medium',
          color: '#578dde'
        }}
      >
        Select Business Tags
      </CustomLabel>
      {!!values.length && (
        <FlatList
          data={values}
          horizontal
          style={{ marginVertical: 12, maxHeight: 40, marginRight: 8, marginTop: 0 }}
          renderItem={({ item }) => <Chip name={item} />}
          keyExtractor={item => item}
        />
      )}
      <View
        style={{
          backgroundColor: '#f1f1f1',
          width: '100%',
          borderBottomWidth: 1,
          flexDirection: 'row'
        }}
      >
        <TouchableOpacity onPress={() => updateTagsFunction(addTagInput)}>
          <Icon
            active
            name='add'
            style={{
              padding: 15,
              paddingLeft: 16,
              fontSize: 28,
              color: '#578dde',
              marginTop: 0
            }}
          />
        </TouchableOpacity>
        <CustomInput
          onChangeText={setAddTagInputFunction}
          value={addTagInput}
          placeholder='Add more tags...'
          style={[
            {
              paddingTop: 12,
              paddingBottom: 12,
              marginTop: 4,
              paddingLeft: 4
            }
          ]}
        />
        <TouchableOpacity onPress={clearAddTagInputFunction}>
          <Icon
            active
            name='cross'
            type='Entypo'
            style={{
              padding: 15,
              paddingRight: 12,
              fontSize: 28,
              color: '#578dde',
              marginTop: 0
            }}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredTags}
        style={{
          width: '100%',
          flex: 1
        }}
        renderItem={({ item }) => <OptionComp name={item} />}
        keyExtractor={item => item}
      />
      <View style={{ paddingHorizontal: 20, marginBottom: 30, alignItems: 'center' }}>
        <Button
          onPress={toggleModal}
          style={{
            elevation: 0,
            width: '100%',
            borderRadius: 40,
            justifyContent: 'center',
            backgroundColor: '#578dde'
          }}
        >
          <CustomLabel style={{ color: 'white', fontFamily: 'Gilroy_medium' }}>Done</CustomLabel>
        </Button>
      </View>
    </Modal>
  )
}
CustomSelect.propTypes = {
  showModal: PropTypes.bool,
  toggleModal: PropTypes.func,
  values: PropTypes.array,
  tags: PropTypes.array,
  inputValue: PropTypes.func
}

export default CustomSelect
