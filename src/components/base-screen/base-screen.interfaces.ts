import {ScrollViewProps, ViewProps} from 'react-native';

type BaseViewScreen = ViewProps & {scroll:false};
type BaseScrollScreen = ScrollViewProps & {scroll:true};

type IBaseScreen =
  | BaseViewScreen
  | BaseScrollScreen;

export default IBaseScreen;
