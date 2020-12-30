// import React from 'react';
// import {
//   ScrollView,
//   StyleSheet,
//   Image,
//   TouchableWithoutFeedback,
//   ImageBackground,
//   Dimensions,
// } from 'react-native';
// //galio
// import { Block, Text, theme } from 'galio-framework';
// //argon
// import { articles, Images, argonTheme } from '../constants/';
// import { Card } from '../components/';

// const { width } = Dimensions.get('screen');

// const thumbMeasure = (width - 48 - 32) / 3;
// const cardWidth = width - theme.SIZES.BASE * 2;
// const categories = [
//   {
//     title: 'Faisal Mosque',
//     description:
//       'The Faisal Mosque is a mosque in Islamabad, the federal national capital city of the Islamic Republic of Pakistan. It is Pakistan largest, as well as its National mosque of Pakistan respectively.',
//     image:
//       'https://i0.wp.com/www.wefindyougo.com/wp-content/uploads/2016/04/Shah-Faisal-Masjid.jpg?resize=798%2C599&ssl=1',
//     price: 'Islamabad',
//   },
//   {
//     title: 'Pakistan Monument',
//     description:
//       'The Pakistan Monument is a national monument and heritage museum located on the western Shakarparian Hills in Islamabad, Pakistan. The monument was constructed to symbolize the unity of the Pakistani people.',
//     image:
//       'https://aroundpakistan.com/wp-content/uploads/2017/08/National_Monument-604x355.jpg',
//     price: 'Islamabad',
//   },
//   {
//     title: 'Daman-e-Koh',
//     description:
//       'Daman-e-Koh is a viewing point and hill top garden north of Islamabad and located in the middle of the Margalla Hills. Its name is a conjunction of two Persian words, which together means foot hills.',
//     image:
//       'https://ak.jogurucdn.com/media/image/p25/place-2018-02-15-16-2b57397203684e23d8160df94272f6fa.jpg',
//     price: 'Islamabad',
//   },
//   {
//     title: 'Rawal Lake',
//     description:
//       'Rawal Lake in Pakistan is an artificial reservoir that provides the water needs for the cities of Rawalpindi and Islamabad.',
//     image:
//       'https://media-cdn.tripadvisor.com/media/photo-s/02/53/cb/b9/rawal-lake.jpg',
//     price: 'Islamabad',
//   },
// ];

// class TouristPoints extends React.Component {
//   renderProduct = (item, index) => {
   
//     const { navigation } = this.props;

//     return (
//       <TouchableWithoutFeedback
//         style={{ zIndex: 3 }}
//         key={`product-${item.name}`}
//        // onPress={() => navigation.navigate('Pro', { product: item })}
//       >
//         <Block center style={styles.productItem}>
//           <Image
//             resizeMode='cover'
//             style={styles.productImage}
//             source={{ uri: item.icon }}
//           />
//           <Block center style={{ paddingHorizontal: theme.SIZES.BASE }}>
//             <Text
//               center
//               size={16}
//               color={theme.COLORS.MUTED}
//               style={styles.productPrice}
//             >
//               {item.business_status}
//             </Text>
//             <Text center size={34}>
//               {item.geometry}
//             </Text>
//             <Text
//               center
//               size={16}
//               color={theme.COLORS.MUTED}
//               style={styles.productDescription}
//             >
//               {item.rating}
//             </Text>
//           </Block>
//         </Block>
//       </TouchableWithoutFeedback>
//     );
//   };

//   renderCards = () => {
//     const cafe = this.props.route.params.data;
//     console.log(' testing '+cafe);
//     return (
//       <Block flex style={styles.group}>
//         <Text bold size={16} style={styles.title}>
//           Tourist Attractions Points
//         </Text>
//         <Block flex>
//           {/*<Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
//             <Card item={articles[0]} horizontal />
//             <Block flex row>
//               <Card
//                 item={articles[1]}
//                 style={{ marginRight: theme.SIZES.BASE }}
//               />
//               <Card item={articles[2]} />
//             </Block>
//             <Card item={articles[4]} full />
//             <Block flex card shadow style={styles.category}>
//               <ImageBackground
//                 source={{ uri: Images.Products['View article'] }}
//                 style={[
//                   styles.imageBlock,
//                   { width: width - theme.SIZES.BASE * 2, height: 252 },
//                 ]}
//                 imageStyle={{
//                   width: width - theme.SIZES.BASE * 2,
//                   height: 252,
//                 }}
//               >
//                 <Block style={styles.categoryTitle}>
//                   <Text size={18} bold color={theme.COLORS.WHITE}>
//                     View article
//                   </Text>
//                 </Block>
//               </ImageBackground>
//             </Block>
//           </Block>*/}
//           <Block flex style={{ marginTop: theme.SIZES.BASE / 2 }}>
//             <ScrollView
//               horizontal={true}
//               pagingEnabled={true}
//               decelerationRate={0}
//               scrollEventThrottle={16}
//               snapToAlignment='center'
//               showsHorizontalScrollIndicator={false}
//               snapToInterval={cardWidth + theme.SIZES.BASE * 0.375}
//               contentContainerStyle={{
//                 paddingHorizontal: theme.SIZES.BASE / 2,
//               }}
//             >
//               {cafe &&
//                 cafe.map((item, index) =>
//                   this.renderProduct(item, index)
//                 )}
//             </ScrollView>
//           </Block>
//         </Block>
//       </Block>
//     );
//   };

//   render() {
//     return (
//       <Block flex center>
//         <ScrollView showsVerticalScrollIndicator={false}>
//           {this.renderCards()}
//         </ScrollView>
//       </Block>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   title: {
//     paddingBottom: theme.SIZES.BASE,
//     paddingHorizontal: theme.SIZES.BASE * 2,
//     marginTop: 22,
//     color: argonTheme.COLORS.HEADER,
//   },
//   group: {
//     paddingTop: theme.SIZES.BASE,
//   },
//   albumThumb: {
//     borderRadius: 4,
//     marginVertical: 4,
//     alignSelf: 'center',
//     width: thumbMeasure,
//     height: thumbMeasure,
//   },
//   category: {
//     backgroundColor: theme.COLORS.WHITE,
//     marginVertical: theme.SIZES.BASE / 2,
//     borderWidth: 0,
//   },
//   categoryTitle: {
//     height: '100%',
//     paddingHorizontal: theme.SIZES.BASE,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   imageBlock: {
//     overflow: 'hidden',
//     borderRadius: 4,
//   },
//   productItem: {
//     width: cardWidth - theme.SIZES.BASE * 2,
//     marginHorizontal: theme.SIZES.BASE,
//     shadowColor: 'black',
//     shadowOffset: { width: 0, height: 7 },
//     shadowRadius: 10,
//     shadowOpacity: 0.2,
//   },
//   productImage: {
//     width: cardWidth - theme.SIZES.BASE,
//     height: cardWidth - theme.SIZES.BASE,
//     borderRadius: 3,
//   },
//   productPrice: {
//     paddingTop: theme.SIZES.BASE,
//     paddingBottom: theme.SIZES.BASE / 2,
//   },
//   productDescription: {
//     paddingTop: theme.SIZES.BASE,
//     // paddingBottom: theme.SIZES.BASE * 2,
//   },
// });

// export default TouristPoints;
import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  
  View, 
  FlatList, 
   TouchableOpacity
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { Button, Select, Icon, Input, Header, Switch } from '../components/';
//import { Button } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";
import { Card, Rating } from 'react-native-elements';
const { width, height } = Dimensions.get("screen");
import { useNavigation } from '@react-navigation/native';
const thumbMeasure = (width - 48 - 32) / 3;
//onPress={() => navigation.navigate('CarDetails')};

function Item({ item }) {
  console.log(item);
  const navigation = useNavigation();
  const test=false;
  const open=item;

 if (item.includes("name")){
  test =true;
 }
 
//const open= item.opening_hours.open_now;
  return (
     
      <TouchableOpacity style={styles.listItem} onPress={() =>navigation.navigate('CCInput', {
         item
      })}>
     
     <Image source={{uri:item.icon}}  style={{width:100, height:100,borderRadius:1}} />
      <View style={{alignItems:"center",flex:1}}>
        <Text style={{fontWeight:"bold",marginTop:10}}>{item.name}</Text>
        <Rating
              type='star'
              imageSize={15}
              readonly
              style={{ paddingRight: 10, marginTop:7 }}
              startingValue={item.rating}
            />
            <Text size={11} style={{color:"green", marginTop:7}}>{test ? 'Open':'Closed'}</Text>
      </View>
      
      {/* <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
        <Text size={13} style={{color:"#3944BC",marginTop:80}}>Details...</Text>
      </TouchableOpacity> */}
    </TouchableOpacity>
     
    
  );
}
class TouristPoints extends React.Component {
  
  state = {
    data:[
        {
            "name": "Toyota",
            "price": "$23",
            "rating": "3",
            "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3gLAMkW3_Q8vTh-JkXBW0Q14OsfMS29Bqw&usqp=CAU"
        },
        {
            "name": "Honda",
            "price": "$23",
            "rating": "3",
            "photo": "https://i.pinimg.com/originals/3c/01/89/3c01897db89b6e406128b4fa03303137.png"
        },
        {
            "name": "BMW",
            "price": "$23",
            "rating": "3",
            "photo": "https://lh3.googleusercontent.com/proxy/GD4ns-wNUuiz94s3cYOeA9XE_hmsLNtMK3Vrjvsic9Al-sgRZ_Beqy1JG48aG3slwAh45B6SpftfCn2gmK4k3l6CS809AdCqsA"
        },
        {
            "name": "Renee Sims",
            "price": "$23",
            "rating": "3",
            "photo": "https://lh3.googleusercontent.com/proxy/Znb8RQBARN0JDWtCp7uVvZrY5tHwXrMApOs75ftrZyHzyXqCLFz7EgI1unyR1P12PkD7e3jzMLsCkNwAYiBdYwg5XfD5EFjaIaifZogDrdCjjYmjK70kX9RqqFpR"
        },
        {
          "name": "Toyata",
          "price": "$23",
          "rating": "3",
          "photo": "https://i.pinimg.com/originals/6d/16/ab/6d16abc949cc76afd3c8782079b8bc62.png"
        },
        {
          "name": "Toyata",
          "price": "$23",
          "rating": "3",
          "photo": "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"
        },
        {
          "name": "Toyata",
          "price": "$23",
          "rating": "3",
          "photo": "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"
        },
        {
          "name": "Toyata",
          "price": "$23",
          "rating": "3",
          "photo": "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"
        }
        ,
        {
          "name": "Toyata",
          "price": "$23",
          "rating": "3",
          "photo": "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"
        },
        {
          "name": "Toyata",
          "price": "$23",
          "rating": "3",
          "photo": "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"
        }
        ,
        {
          "name": "Toyata",
          "price": "$23",
          "rating": "3",
          "photo": "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"
        }
        ,
        {
          "name": "Toyata",
          "price": "$23",
          "rating": "3",
          "photo": "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"
        }
        ,
        {
          "name": "Toyata",
          "price": "$23",
          "rating": "3",
          "photo": "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"
        }
        ,
      ]     
  }
  render(){
        const cafe = this.props.route.params.data;
    // console.log(" here cafe"+cafe);
    const info = this.props.route.params.info;
    console.log('here'+info);
   
    return (
      // <View style={styles.container}>
      //   <FlatList
      //     style={{flex:1}}
      //     data={this.state.data}
      //     renderItem={({ item }) => <Item item={item}/>}
      //     keyExtractor={item => item.email}
      //   />
      // </View>
      <Block flex style={styles.profile}>
        
      <Block flex >
        <ImageBackground
          source={Images.ProfileBackground}
          style={styles.profileContainer}
          imageStyle={styles.profileBackground}
        >
            <Block style={{ marginBottom: theme.SIZES.BASE }}>
          <Header
          
             transparent
             white
             title="Profile"
             navigation={this.props.navigation}
           
          />
        </Block>
        <Block left style={styles.nameInfo}>
                    {/* <Text bold size={28} color="white">
                      Jessica Jones, 27
                    </Text> */}
                    <Text bold size={16} color="white" style={{  marginLeft:10 }}>
                    Places Nearby You
                    </Text>
                  </Block>
           {/* <Block flex style={styles.profileCard}> */}
          
         <FlatList
          style={{flex:1}}
          data={cafe}
          renderItem={({ item }) => <Item item={item}/>}
          //keyExtractor={item => item.email}
        />
     
         {/*   </Block> */}
          
        </ImageBackground>
      </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight :0,
  // marginBottom: -HeaderHeight * 2,
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop:60
  },
  listItem:{
    margin:9,
  
    backgroundColor:"#FFF",
    width:"90%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:1,
    height:100,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1,
  //  marginTop:100,
  },
  profileBackground: {
    width: width,
    height: height / 2,
    
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
   // marginTop: 100,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  //  backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop:50
  },
  info: {
    paddingHorizontal: 40
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 15
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF"
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  }
});

export default TouristPoints;
