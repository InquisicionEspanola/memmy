/* eslint react/no-unstable-nested-components: 0 */

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "native-base";
import React from "react";
import {
  IconBell,
  IconNotes,
  IconPlanet,
  IconSearch,
  IconUserCircle,
} from "tabler-icons-react-native";
import CommunityAboutScreen from "./components/screens/feeds/CommunityAboutScreen";
import CommunityFeedScreen from "./components/screens/feeds/CommunityFeedScreen";
import FeedsIndexScreen from "./components/screens/feeds/FeedsIndexScreen";
import InboxScreen from "./components/screens/inbox/InboxScreen";
import AddAccountScreen from "./components/screens/onboarding/AddAccountScreen";
import CreateAccountScreen from "./components/screens/onboarding/CreateAccountScreen";
import OnboardingIndexScreen from "./components/screens/onboarding/OnboardingIndexScreen";
import NewCommentScreen from "./components/screens/comments/NewCommentScreen";
import NewPostScreen from "./components/screens/post/NewPostScreen";
import PostScreen from "./components/screens/post/PostScreen";
import SearchScreen from "./components/screens/search/SearchScreen";
import EditAccountScreen from "./components/screens/settings/Account/EditAccountScreen";
import SettingsIndexScreen from "./components/screens/settings/SettingsIndexScreen";
import ViewAccountsScreen from "./components/screens/settings/Account/ViewAccountsScreen";
import BlockedCommunitiesScreen from "./components/screens/userProfile/BlockedCommunitiesScreen";
import UserProfileScreen from "./components/screens/userProfile/UserProfileScreen";
import LoadingView from "./components/ui/Loading/LoadingView";
import {
  selectAccounts,
  selectAccountsLoaded,
} from "./slices/accounts/accountsSlice";
import { selectSite } from "./slices/site/siteSlice";
import { useAppSelector } from "./store";
import ReadSettingsScreen from "./components/screens/settings/Content/ReadSettingsScreen";
import ThemeSelectionScreen from "./components/screens/settings/Appearance/ThemeSelectionScreen";
import ViewerScreen from "./components/screens/ViewerScreen";
import EditCommentScreen from "./components/screens/comments/EditCommentScreen";
import OnboardingInfoScreenOne from "./components/screens/onboarding/infoScreens/OnboardingInfoScreenOne";
import OnboardingInfoScreenTwo from "./components/screens/onboarding/infoScreens/OnboardingInfoScreenTwo";
import OnboardingInfoScreenThree from "./components/screens/onboarding/infoScreens/OnboardingInfoScreenThree";
import OnboardingInfoScreenFour from "./components/screens/onboarding/infoScreens/OnboardingInfoScreenFour";
import OnboardingInfoScreenFive from "./components/screens/onboarding/infoScreens/OnboardingInfoScreenFive";
import OnboardingInfoScreenSix from "./components/screens/onboarding/infoScreens/OnboardingInfoScreenSix";
import OnboardingInfoScreenSeven from "./components/screens/onboarding/infoScreens/OnboardingInfoScreenSeven";
import HubDiscoveryScreen from "./components/screens/onboarding/hubDiscovery/HubDiscoveryScreen";
import InstanceScreen from "./components/ui/hubDiscovery/InstanceScreen";
import NewPostBodyScreen from "./components/screens/post/NewPostBodyScreen";
import TraverseScreen from "./components/screens/traverse/TraverseScreen";
import SearchResultsScreen from "./components/screens/search/SearchResultsScreen";
import AppearanceScreen from "./components/screens/settings/Appearance/AppearanceScreen";
import ContentScreen from "./components/screens/settings/Content/ContentScreen";
import AccountSettingsScreen from "./components/screens/settings/Account/AccountSettingsScreen";
import AboutScreen from "./components/screens/settings/About/AboutScreen";
import GeneralSettingsScreen from "./components/screens/settings/General/GeneralSettingsScreen";
import UserCommentsScreen from "./components/screens/userProfile/UserCommentsScreen";
import UserPostsScreen from "./components/screens/userProfile/UserPostsScreen";
import UserSavedPostsScreen from "./components/screens/userProfile/UserSavedPostsScreen";

const FeedStack = createNativeStackNavigator();

function FeedStackScreen() {
  return (
    <FeedStack.Navigator screenOptions={{}}>
      <FeedStack.Group>
        <FeedStack.Screen
          name="FeedScreen"
          component={FeedsIndexScreen}
          options={{
            title: "Feed",
          }}
        />
        <FeedStack.Screen name="Post" component={PostScreen} />
        <FeedStack.Screen name="Community" component={CommunityFeedScreen} />
        <FeedStack.Screen name="Profile" component={UserProfileScreen} />
        <FeedStack.Screen
          name="UserComments"
          component={UserCommentsScreen}
          options={{
            title: "Comments",
          }}
        />
        <FeedStack.Screen
          name="UserPosts"
          component={UserPostsScreen}
          options={{
            title: "Posts",
          }}
        />
        <FeedStack.Screen
          name="UserSavedPosts"
          component={UserSavedPostsScreen}
          options={{
            title: "Saved Posts",
          }}
        />
      </FeedStack.Group>

      <FeedStack.Group
        screenOptions={{
          presentation: "modal",
        }}
      >
        <FeedStack.Screen
          name="NewComment"
          component={NewCommentScreen}
          options={{ title: "New Comment" }}
        />
        <SearchStack.Screen
          name="EditComment"
          component={EditCommentScreen}
          options={{ title: "Edit Comment" }}
        />
        <FeedStack.Screen
          name="NewPost"
          component={NewPostScreen}
          options={{ title: "New Post" }}
        />
        <FeedStack.Screen
          name="NewPostBody"
          component={NewPostBodyScreen}
          options={{ title: "New Post" }}
        />
        <FeedStack.Screen
          name="CommunityAbout"
          component={CommunityAboutScreen}
          options={{ title: "About" }}
        />
      </FeedStack.Group>
    </FeedStack.Navigator>
  );
}

const InboxStack = createNativeStackNavigator();

function InboxStackScreen() {
  return (
    <InboxStack.Navigator>
      <InboxStack.Group>
        <InboxStack.Screen
          name="Inbox"
          component={InboxScreen}
          options={{
            title: "Inbox",
          }}
        />
        <InboxStack.Screen
          name="FeedScreen"
          component={FeedsIndexScreen}
          options={{
            title: "Feed",
          }}
        />
        <InboxStack.Screen name="Post" component={PostScreen} />
        <InboxStack.Screen name="Community" component={CommunityFeedScreen} />
        <InboxStack.Screen name="Profile" component={UserProfileScreen} />
        <InboxStack.Screen
          name="UserComments"
          component={UserCommentsScreen}
          options={{
            title: "Comments",
          }}
        />
        <InboxStack.Screen
          name="UserPosts"
          component={UserPostsScreen}
          options={{
            title: "Posts",
          }}
        />
        <InboxStack.Screen
          name="UserSavedPosts"
          component={UserSavedPostsScreen}
          options={{
            title: "Saved Posts",
          }}
        />
      </InboxStack.Group>

      <InboxStack.Group
        screenOptions={{
          presentation: "modal",
        }}
      >
        <InboxStack.Screen
          name="NewComment"
          component={NewCommentScreen}
          options={{ title: "New Comment" }}
        />
        <InboxStack.Screen
          name="EditComment"
          component={EditCommentScreen}
          options={{ title: "Edit Comment" }}
        />
        <InboxStack.Screen
          name="NewPost"
          component={NewPostScreen}
          options={{ title: "New Post" }}
        />
        <InboxStack.Screen
          name="NewPostBody"
          component={NewPostBodyScreen}
          options={{ title: "New Post" }}
        />
        <InboxStack.Screen
          name="CommunityAbout"
          component={CommunityAboutScreen}
          options={{ title: "About" }}
        />
      </InboxStack.Group>
    </InboxStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        freezeOnBlur: true,
      }}
    >
      <ProfileStack.Group>
        <ProfileStack.Screen name="Profile" component={UserProfileScreen} />
        <ProfileStack.Screen
          name="UserComments"
          component={UserCommentsScreen}
          options={{
            title: "Comments",
          }}
        />
        <ProfileStack.Screen
          name="UserPosts"
          component={UserPostsScreen}
          options={{
            title: "Posts",
          }}
        />
        <ProfileStack.Screen
          name="UserSavedPosts"
          component={UserSavedPostsScreen}
          options={{
            title: "Saved Posts",
          }}
        />
        <ProfileStack.Screen
          name="BlockedCommunities"
          component={BlockedCommunitiesScreen}
          options={{ title: "Blocked Communities" }}
        />

        <ProfileStack.Screen
          name="Settings"
          component={SettingsIndexScreen}
          options={{
            title: "Settings",
          }}
        />
        <ProfileStack.Screen
          name="ViewAccounts"
          component={ViewAccountsScreen}
          options={{
            title: "Manage Accounts",
          }}
        />
        <ProfileStack.Screen
          name="EditAccount"
          component={EditAccountScreen}
          options={{
            title: "Edit Account",
          }}
        />
        <ProfileStack.Screen
          name="ReadSettings"
          component={ReadSettingsScreen}
          options={{
            title: "Mark Post Read On...",
          }}
        />
        <ProfileStack.Screen
          name="Viewer"
          component={ViewerScreen}
          options={{
            title: "View",
          }}
        />
        <ProfileStack.Screen
          name="AccountSettings"
          component={AccountSettingsScreen}
          options={{
            title: "Accounts",
            freezeOnBlur: true,
          }}
        />
        <ProfileStack.Screen
          name="Content"
          component={ContentScreen}
          options={{
            title: "Content",
            freezeOnBlur: true,
          }}
        />
        <ProfileStack.Screen
          name="Appearance"
          component={AppearanceScreen}
          options={{
            title: "Appearance",
            freezeOnBlur: true,
          }}
        />
        <ProfileStack.Screen
          name="ThemeSelection"
          component={ThemeSelectionScreen}
          options={{
            title: "Theme",
          }}
        />
        <ProfileStack.Screen
          name="GeneralSettings"
          component={GeneralSettingsScreen}
          options={{
            title: "General",
            freezeOnBlur: true,
          }}
        />
        <ProfileStack.Screen
          name="About"
          component={AboutScreen}
          options={{
            title: "About",
            freezeOnBlur: true,
          }}
        />

        <ProfileStack.Screen
          name="FeedScreen"
          component={FeedsIndexScreen}
          options={{
            title: "Feed",
          }}
        />
        <ProfileStack.Screen name="Post" component={PostScreen} />
        <ProfileStack.Screen name="Community" component={CommunityFeedScreen} />
      </ProfileStack.Group>

      <ProfileStack.Group
        screenOptions={{
          presentation: "modal",
          freezeOnBlur: true,
        }}
      >
        <ProfileStack.Screen
          name="NewComment"
          component={NewCommentScreen}
          options={{ title: "New Comment" }}
        />
        <ProfileStack.Screen
          name="EditComment"
          component={EditCommentScreen}
          options={{ title: "Edit Comment" }}
        />
        <ProfileStack.Screen
          name="NewPost"
          component={NewPostScreen}
          options={{ title: "New Post" }}
        />
        <ProfileStack.Screen
          name="NewPostBody"
          component={NewPostBodyScreen}
          options={{ title: "New Post" }}
        />
        <ProfileStack.Screen
          name="CommunityAbout"
          component={CommunityAboutScreen}
          options={{ title: "About" }}
        />
      </ProfileStack.Group>
    </ProfileStack.Navigator>
  );
}

const SearchStack = createNativeStackNavigator();

function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Group>
        <SearchStack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: "Search",
          }}
        />
        <SearchStack.Screen
          name="Results"
          component={SearchResultsScreen}
          options={{
            title: "Search",
          }}
        />
        <SearchStack.Screen
          name="FeedScreen"
          component={FeedsIndexScreen}
          options={{
            title: "Feed",
          }}
        />
        <SearchStack.Screen name="Post" component={PostScreen} />
        <SearchStack.Screen name="Community" component={CommunityFeedScreen} />
        <SearchStack.Screen name="Profile" component={UserProfileScreen} />
        <SearchStack.Screen
          name="UserComments"
          component={UserCommentsScreen}
          options={{
            title: "Comments",
          }}
        />
        <SearchStack.Screen
          name="UserPosts"
          component={UserPostsScreen}
          options={{
            title: "Posts",
          }}
        />
        <SearchStack.Screen
          name="UserSavedPosts"
          component={UserSavedPostsScreen}
          options={{
            title: "Saved Posts",
          }}
        />
      </SearchStack.Group>

      <SearchStack.Group
        screenOptions={{
          presentation: "modal",
        }}
      >
        <SearchStack.Screen
          name="NewComment"
          component={NewCommentScreen}
          options={{ title: "New Comment" }}
        />
        <SearchStack.Screen
          name="EditComment"
          component={EditCommentScreen}
          options={{ title: "Edit Comment" }}
        />
        <SearchStack.Screen
          name="NewPost"
          component={NewPostScreen}
          options={{ title: "New Post" }}
        />
        <SearchStack.Screen
          name="NewPostBody"
          component={NewPostBodyScreen}
          options={{ title: "New Post" }}
        />
        <SearchStack.Screen
          name="CommunityAbout"
          component={CommunityAboutScreen}
          options={{ title: "About" }}
        />
      </SearchStack.Group>
    </SearchStack.Navigator>
  );
}

const TraverseStack = createNativeStackNavigator();

function TraverseStackScreen() {
  return (
    <TraverseStack.Navigator>
      <TraverseStack.Group>
        <TraverseStack.Screen
          name="Traverse"
          component={TraverseScreen}
          options={{ title: "Traverse" }}
        />
        <TraverseStack.Screen
          name="FeedScreen"
          component={FeedsIndexScreen}
          options={{
            title: "Feed",
          }}
        />
        <TraverseStack.Screen name="Post" component={PostScreen} />
        <TraverseStack.Screen
          name="Community"
          component={CommunityFeedScreen}
        />
        <TraverseStack.Screen
          name="Profile"
          component={UserProfileScreen}
          options={{ freezeOnBlur: true }}
        />
        <TraverseStack.Screen
          name="UserComments"
          component={UserCommentsScreen}
          options={{
            title: "Comments",
          }}
        />
        <TraverseStack.Screen
          name="UserPosts"
          component={UserPostsScreen}
          options={{
            title: "Posts",
          }}
        />
        <TraverseStack.Screen
          name="UserSavedPosts"
          component={UserSavedPostsScreen}
          options={{
            title: "Saved Posts",
          }}
        />
      </TraverseStack.Group>

      <TraverseStack.Group
        screenOptions={{
          presentation: "modal",
        }}
      >
        <TraverseStack.Screen
          name="NewComment"
          component={NewCommentScreen}
          options={{ title: "New Comment" }}
        />
        <TraverseStack.Screen
          name="EditComment"
          component={EditCommentScreen}
          options={{ title: "Edit Comment" }}
        />
        <TraverseStack.Screen
          name="NewPost"
          component={NewPostScreen}
          options={{ title: "New Post" }}
        />
        <TraverseStack.Screen
          name="NewPostBody"
          component={NewPostBodyScreen}
          options={{ title: "New Post" }}
        />
        <TraverseStack.Screen
          name="CommunityAbout"
          component={CommunityAboutScreen}
          options={{ title: "About" }}
        />
      </TraverseStack.Group>
    </TraverseStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function Tabs() {
  const { unread } = useAppSelector(selectSite);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: "Feed",
        freezeOnBlur: false,
      }}
    >
      <Tab.Screen
        name="FeedStack"
        component={FeedStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <IconNotes color={color} />,
          tabBarLabel: "Feed",
          freezeOnBlur: false,
        }}
      />
      <Tab.Screen
        name="TraverseStack"
        component={TraverseStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <IconPlanet color={color} />,
          tabBarLabel: "Traverse",
          freezeOnBlur: false,
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <IconUserCircle color={color} />,
          tabBarLabel: "Profile",
          freezeOnBlur: false,
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <IconSearch color={color} />,
          tabBarLabel: "Search",
          freezeOnBlur: false,
        }}
      />
      <Tab.Screen
        name="InboxStack"
        component={InboxStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <IconBell color={color} />,
          tabBarLabel: "Inbox",
          tabBarBadge:
            unread.replies + unread.mentions + unread.privateMessage > 0
              ? // ? unread.replies + unread.mentions + unread.privateMessage
                unread.replies
              : null,
          freezeOnBlur: false,
        }}
      />
    </Tab.Navigator>
  );
}

const MainStack = createNativeStackNavigator();

function Stack() {
  const theme = useTheme();
  const accounts = useAppSelector(selectAccounts);
  const accountsLoaded = useAppSelector(selectAccountsLoaded);

  const MyTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: theme.colors.app.accent,
      background: theme.colors.app.bg,
      card: theme.colors.app.navBarBg,
      text: theme.colors.app.textPrimary,
      border: theme.colors.app.border,
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <MainStack.Navigator>
        {(!accountsLoaded && (
          <MainStack.Screen
            name="AppLoading"
            component={LoadingView}
            options={{ title: "Loading..." }}
          />
        )) ||
          (accounts && accounts.length > 0 && (
            <MainStack.Screen
              name="Tabs"
              component={Tabs}
              options={{ headerShown: false }}
            />
          )) || (
            <>
              <MainStack.Screen
                name="Onboarding"
                component={OnboardingIndexScreen}
                options={{ title: "Welcome", headerShown: false }}
              />
              <MainStack.Screen
                name="OnboardingInfoOne"
                component={OnboardingInfoScreenOne}
                options={{ headerShown: false }}
              />
              <MainStack.Screen
                name="OnboardingInfoTwo"
                component={OnboardingInfoScreenTwo}
                options={{ headerShown: false }}
              />
              <MainStack.Screen
                name="OnboardingInfoThree"
                component={OnboardingInfoScreenThree}
                options={{ headerShown: false }}
              />
              <MainStack.Screen
                name="OnboardingInfoFour"
                component={OnboardingInfoScreenFour}
                options={{ headerShown: false }}
              />
              <MainStack.Screen
                name="OnboardingInfoFive"
                component={OnboardingInfoScreenFive}
                options={{ headerShown: false }}
              />
              <MainStack.Screen
                name="OnboardingInfoSix"
                component={OnboardingInfoScreenSix}
                options={{ headerShown: false }}
              />
              <MainStack.Screen
                name="OnboardingInfoSeven"
                component={OnboardingInfoScreenSeven}
                options={{ headerShown: false }}
              />
              <MainStack.Screen
                name="HubDiscovery"
                component={HubDiscoveryScreen}
                options={{ title: "Hubs" }}
              />
              <MainStack.Screen
                name="Instance"
                component={InstanceScreen}
                options={{ title: "Instance" }}
              />
              <MainStack.Screen
                name="AddAccount"
                component={AddAccountScreen}
                options={{ title: "Add Account" }}
              />
              <MainStack.Screen
                name="CreateAccount"
                component={CreateAccountScreen}
                options={{ title: "Create Account" }}
              />
              <MainStack.Screen
                name="Viewer"
                component={ViewerScreen}
                options={{
                  title: "View",
                  freezeOnBlur: true,
                }}
              />
            </>
          )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default Stack;
