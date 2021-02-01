import React , { Component }from 'react';
import { Dimensions, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';

import Svg,{    
    Path,
    Polygon,  
    Defs,
    ClipPath,
    Image,
    Circle,
    
} from 'react-native-svg';

export default class HexagoneImg1 extends Component {
  //************************************** Constructor start*****************************//
  constructor(props){
    super(props);

    self= this;
    this.state = {

    }


  }
  

  render(){
     
      return(
          <View  >
            <Svg
                height="300"
                width="260"
                style={{}}
            >
                <Defs>
                    <ClipPath id="clip">
                    <Path d="M108.25317547305482 12.499999999999998Q129.9038105676658 0 151.55444566227678 12.499999999999998L238.15698604072062 62.5Q259.8076211353316 75 259.8076211353316 100L259.8076211353316 200Q259.8076211353316 225 238.15698604072062 237.5L151.55444566227678 287.5Q129.9038105676658 300 108.25317547305482 287.5L21.65063509461097 237.5Q0 225 0 200L0 100Q0 75 21.65063509461097 62.5Z" /> 
                    </ClipPath>
                </Defs>
                <Image
                    width='100%'
                    height='100%'
                    href={{uri: `${this.props.imageUrl}`}}                     
                    x={0}
                    y={0}                    
                    clipPath="url(#clip)"  
                    preserveAspectRatio="xMidYMid slice"                  
                    />
            </Svg>
            
            </View>
      )
  }
}