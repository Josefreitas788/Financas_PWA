import { Button } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";

function IconButton(props) {
  return (
    <Button>
      <Icon.Button
        {...props}
        />    
    </Button>
  );
}

export default IconButton;
