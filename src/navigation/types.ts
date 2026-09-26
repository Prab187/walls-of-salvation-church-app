import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';

export type RootTabParamList = {
  Home: undefined;
  Events: undefined;
  Sermons: undefined;
  Giving: undefined;
  More: NavigatorScreenParams<MoreStackParamList> | undefined;
};

export type MoreStackParamList = {
  MoreMenu: undefined;
  About: undefined;
  OurPeople: undefined;
  Ministries: undefined;
  Gallery: undefined;
  Contact: undefined;
  Fundraising: undefined;
  Prayer: undefined;
  Newcomer: undefined;
  Settings: undefined;
};

export type RootTabScreenProps<T extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, T>,
  NativeStackScreenProps<MoreStackParamList>
>;

export type MoreStackScreenProps<T extends keyof MoreStackParamList> = NativeStackScreenProps<
  MoreStackParamList,
  T
>;
