export enum ActionType {
  REGISTER = '[Auth] Register',
  REGISTER_SUCCESS = '[Auth] Register success',
  REGISTER_FAILURE = '[Auth] Register failure',

  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login success',
  LOGIN_FAILURE = '[Auth] Login failure',

  GET_CURRENT_USER = '[Auth] Get Current User',
  GET_CURRENT_USER_SUCCESS = '[Auth] Get Current User success',
  GET_CURRENT_USER_FAILURE = '[Auth] Get Current User failure',

  GET_FEED = '[Feed] Get Feed',
  GET_FEED_SUCCESS = '[Feed] Get Feed success',
  GET_FEED_FAILURE = '[Feed] Get Feed failure',

  GET_TAGS = '[Tags] Get Tags',
  GET_TAGS_SUCCESS = '[Tags] Get Tags success',
  GET_TAGS_FAILURE = '[Tags] Get Tags failure',
}
