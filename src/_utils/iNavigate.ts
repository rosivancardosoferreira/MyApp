import {RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';

interface QuestionParams {
  matter: string;
}

export type RootStackParamList = {
  Home: undefined;
  Question: QuestionParams;
};

export type IRootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;

export type IRouterProps = StackNavigationProp<
  RootStackParamList,
  keyof RootStackParamList
>;
