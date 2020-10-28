import {createStackNavigator} from '@react-navigation/stack'
import {createAppContainer} from '@react-navigation/native'
import Home from '../Screens/home'
import ReviewDetails from '../Screens/reviewDetails'
<NavigationContainer>
<Stack.Navigator>
  <Stack.Screen name="Home" component={HomeScreen} />
</Stack.Navigator>
</NavigationContainer>