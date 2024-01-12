import { ViewProps } from "react-native-svg/lib/typescript/fabric/utils";

export default interface ISpacer extends ViewProps{
    size?:'sm'|'md'|'lg'|'xlg'
}