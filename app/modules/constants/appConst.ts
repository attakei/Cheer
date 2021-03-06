import { secret } from './secret';

const LP_DOMAIN =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://cheer.konkonta.com';

const appConst = {
  // Number
  CHANNEL_HISTORY_LIMIT: 10,
  DEFAULT_WINDOW_X: 500,
  DEFAULT_WINDOW_Y: 500,

  ENV_DEBUG: 'DEBUG',

  ACCOUNT_NAME_API_KEY: 'apiKey',
  ACCOUNT_NAME_CHANNEL_ID: 'channelId',
  SERVICE_NAME: 'Cheer',

  URL_SCHEME: 'cheer-kontam',

  // LPのパス
  LP_START_URL: `${LP_DOMAIN}/start`,
  LP_INVITE_BOT_URL: `${LP_DOMAIN}/start#inviteBot`,
  LP_SECTION_CHANNELID: 'channelId',

  // Slack認証
  SLACK_AUTH_URL: 'https://slack.com/oauth/v2/authorize',
  SLACK_SCOPE: ['users:read', 'channels:read', 'users.profile:read'],
  SLACK_BOT_SCOPE: ['channels:history', 'chat:write'],

  // Slack情報フォーム
  FORM_SLACK_INFO: 'slackInfo',
  FIELD_SLACK_INFO_TOKEN: 'token',
  FIELD_SLACK_INFO_CHANNEL_ID: 'channelId',

  // Screen設定フォーム
  FORM_SCREEN_SETTING: 'screenSetting',
  FIELD_SCREEN_SETTING_MODE: 'mode',
  FIELD_SCREEN_SETTING_CONVEYOR_AMOUNT: 'conveyorAmount',
  FIELD_SCREEN_SETTING_CONVEYOR_OVERFLOW: 'conveyorOverflow',
  FIELD_SCREEN_SETTING_CONVEYOR_LIMIT: 'conveyorLimit',
  FIELD_SCREEN_SETTING_ACTIVE_CELL: 'activeCell',
  FIELD_SCREEN_SETTING_GRID_OVERFLOW: 'gridOverflow',
  FIELD_SCREEN_SETTING_GRID_LIMIT: 'gridLimit',

  // MainMenu
  MAIN_MENU_PREFERENCE: 'preference',
  MAIN_MENU_LOGOUT: 'logout',
  MAIN_MENU_SELECT_CHANNEL: 'select_channel',
  MAIN_MENU_QUIT: 'quit',

  // Process間通信チャンネル
  IPC_REQUEST_APIKEY: 'IPC_REQUEST_APIKEY',
  IPC_RESPONSE_APIKEY: 'IPC_RESPONSE_APIKEY',
  IPC_REQUEST_CHANNEL_ID: 'IPC_REQUEST_CHANNEL_ID',
  IPC_RESPONSE_CHANNEL_ID: 'IPC_RESPONSE_CHANNEL_ID',
  IPC_REQUEST_PREFERENCE: 'IPC_REQUEST_PREFERENCE',
  IPC_RESPONCE_PREFERENCE: 'IPC_REQUEST_PREFERENCE',
  IPC_REQUEST_SETTING: 'IPC_REQUEST_SETTING',
  IPC_RECIEVE_TOKEN: 'IPC_RECIEVE_TOKEN',
  IPC_LOGOUT: 'IPC_LOGOUT',
  IPC_LOGOUT_COMPLETE: 'IPC_LOGOUT_COMPLETE',
  IPC_LOGIN_COMPLETE: 'IPC_LOGIN_COMPLETE',
  IPC_SELECT_CHANNEL: 'IPC_SELECT_CHANNEL',

  // 表示モード名
  SCREEN_MODE_GRID: 'GRID',
  SCREEN_MODE_CONVEYOR: 'CONVEYOR',

  // Configの項目名(electron-store)
  CONFIG_SETTING: 'setting',

  // electron-storeに保存する項目
  STORAGE_CHANNEL_HISTORIES: 'STORAGE_CHANNEL_HISTORIES',

  // 期待するエラーメッセージ
  ERROR_NOT_IN_CHANNEL: 'not_in_channel',

  ...secret,
} as const;

export default appConst;
