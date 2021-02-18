// import liraries
import React from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'
import { Icon } from 'native-base'
import { ONLINEIMAGES } from '../../../Constants'
import { CustomText, CustomBuyNow } from '../../subComponents/CustomFontComponents'

// create a component
const CatalogueItem = ({ grid }) => {
  return (
    <View
      style={[
        grid ? { width: '50%' } : { width: '100%' },
        { padding: 8, height: 200, marginVertical: 10 }
      ]}
    >
      <View style={{ position: 'relative', marginBottom: 8 }}>
        <Image
          resizeMode='cover'
          source={{ uri: ONLINEIMAGES.bag }}
          style={{ width: '100%', height: 120, borderRadius: 7 }}
        />
        <View style={{ flexDirection: 'row', position: 'absolute', right: 8, top: 4 }}>
          <Icon name='star' style={{ fontSize: 16, marginRight: 5, color: '#FFD700' }} />
          <CustomText style={{ fontSize: 14, color: 'white', fontFamily: 'Gilroy_medium' }}>
            3.5
          </CustomText>
        </View>
      </View>
      <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
        <View style={[grid ? { width: '100%' } : { width: '50%' }]}>
          <View style={{ width: '100%' }}>
            <CustomText style={{ marginBottom: 6, fontSize: 14 }}>Female Leather Bags</CustomText>
          </View>
          <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }]}>
            <CustomText
              style={{
                width: '30%',
                alignSelf: 'center',
                fontSize: 14,
                fontFamily: 'Gilroy_medium'
              }}
            >
              $310
            </CustomText>
            {grid && (
              <View
                style={{
                  width: '70%',
                  alignItems: 'flex-end',
                  flexDirection: 'row',
                  justifyContent: 'flex-end'
                }}
              >
                <CustomBuyNow
                  style={{ height: 26 }}
                  textStyle={[
                    grid ? { fontSize: 12 } : {},
                    { marginLeft: -16, marginRight: -8, fontFamily: 'Gilroy_bold' }
                  ]}
                  iconStyle={[[grid ? { fontSize: 14 } : {}], { marginRight: 4, marginLeft: 5 }]}
                />
              </View>
            )}
          </View>
        </View>
        {!grid && (
          <View
            style={[
              {
                width: '50%',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignSelf: 'center'
              }
            ]}
          >
            <CustomBuyNow style={{ height: 40 }} />
          </View>
        )}
      </View>
    </View>
  )
}

CatalogueItem.propTypes = {
  grid: PropTypes.bool
}

// make this component available to the app
export default CatalogueItem
