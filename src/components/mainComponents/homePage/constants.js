import { ONLINEIMAGES } from '../../../Constants'

export const cardsArray = [
  {
    key: Math.floor(Math.random() * 10000000).toString(),
    username: 'Lebron James',
    email: '@King_James23',
    time: '2 hours ago',
    caption: "The new Fenti drip looks dope y'all",
    profilePic: ONLINEIMAGES.profileImage,
    image: ONLINEIMAGES.chinos,
    price: 9900,
    comments: 24,
    drips: 13,
    activityPage: true,
    sharedPage: true
  },
  {
    key: Math.floor(Math.random() * 10000000).toString(),
    username: 'Stephen Curry',
    email: '@SC30',
    time: '3 hours ago',
    caption: 'Lock in!!! DubNation',
    image: ONLINEIMAGES.chinos,
    profilePic: ONLINEIMAGES.profileImage,
    price: 3400,
    comments: 5,
    drips: 17,
    activityPage: true,
    sharedPage: true
  }
]
