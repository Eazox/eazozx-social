import React from 'react'
import { View, Image } from 'react-native'
import { CustomText } from '../../subComponents/CustomFontComponents'
import Delivery from '../../../images/delivery.png'
import ReturnBox from '../../../images/returnBox.png'
import Shipping from '../../../images/shipping.png'

// create a component
const DeliveryReturns = () => {
  return (
    <View
      style={{
        marginTop: 16,
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 16,
        paddingVertical: 8
      }}
    >
      <CustomText style={{ marginBottom: 8, color: '#3B485B' }}>Delivery & Returns</CustomText>
      <View style={{ flexDirection: 'row', paddingVertical: 8 }}>
        <Image source={Shipping} style={{ width: 24, height: 24 }} resizeMode='contain' />
        <CustomText style={{ fontSize: 16, marginLeft: 14, left: -3.5 }}> Free Shipping</CustomText>
      </View>
      <View style={{ flexDirection: 'row', paddingVertical: 8 }}>
        <Image source={Delivery} style={{ width: 24, height: 24 }} resizeMode='contain' />
        <CustomText style={{ fontSize: 16, marginLeft: 14, left: 0.5 }}>
          Delivered with 5 working days.
        </CustomText>
      </View>
      <View style={{ flexDirection: 'row', paddingVertical: 8 }}>
        <Image source={ReturnBox} style={{ width: 24, height: 24 }} resizeMode='contain' />
        <CustomText style={{ fontSize: 16, marginLeft: 14 }}>
          Return within 7 days after delivery
        </CustomText>
      </View>
    </View>
  )
}

export default DeliveryReturns
