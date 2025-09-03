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

  GET_ARTICLE_DETAILS = '[Article Details] Get Article Details',
  GET_ARTICLE_DETAILS_SUCCESS = '[Article Details] Get Article Details Success',
  GET_ARTICLE_DETAILS_FAILURE = '[Article Details] Get Article Details Failure',

  DELETE_ARTICLE_DETAILS = '[Article Details] Delete Article Details',
  DELETE_ARTICLE_DETAILS_SUCCESS = '[Article Details] Delete Article Details Success',
  DELETE_ARTICLE_DETAILS_FAILURE = '[Article Details] Delete Article Details Failure',

  CREATE_ARTICLE = '[Create Article] Create Article',
  CREATE_ARTICLE_SUCCESS = '[Create Article] Create Article Success',
  CREATE_ARTICLE_FAILURE = '[Create Article] Create Article Failure',

  UPDATE_ARTICLE = '[Edit Article] Update Article',
  UPDATE_ARTICLE_SUCCESS = '[Edit Article] Update Article Success',
  UPDATE_ARTICLE_FAILURE = '[Edit Article] Update Article Failure',
}
