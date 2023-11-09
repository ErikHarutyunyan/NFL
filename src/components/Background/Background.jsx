// Styles
import {styles} from './Background.styles';
import { Image } from "react-native";
import backImg from "../../assets/images/background.png";
const Background = () => {
  return <Image style={styles.backImg} source={backImg} />;
};

export default Background;
