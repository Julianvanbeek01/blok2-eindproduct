import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import BlokScreen from "../screens/BlokScreen";
import Blok1 from "../screens/Blok1";
import Blok2 from "../screens/Blok2";

const Navigator = createStackNavigator({
  BlokScreen: BlokScreen,
  Blok1: Blok1,
  Blok2: Blok2
});

export default createAppContainer(Navigator);
