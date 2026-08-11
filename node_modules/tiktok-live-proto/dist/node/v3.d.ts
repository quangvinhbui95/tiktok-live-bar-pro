import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

//#region src/generated/node/v3/webcast/model/base/messages.d.ts
interface Content {
  name: string;
  fontColor: string;
  level: string;
}
interface ImageModel {
  urlList: string[];
  uri: string;
  height: number;
  width: number;
  avgColor: string;
  imageType: number;
  openWebUrl: string;
  content: Content | undefined;
  isAnimated: boolean;
}
declare const Content: MessageFns$53<Content>;
declare const ImageModel: MessageFns$53<ImageModel>;
interface MessageFns$53<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/data/messages.d.ts
declare enum ActionButtonType {
  UNKNOWN = 0,
  FOLLOW = 1,
  SET_GOAL = 2,
  START_MATCH = 3,
  ADD_STICKER = 4,
  ADD_CRM_STICKER = 5,
  START_COHOST = 6,
  INVITE_LEVEL_UP_GAMEPLAY = 7,
  SEND_GOODY_BAG = 8,
  PIN_MESSAGE = 9,
  ACTIVATE_UPGRADE_GIFT_GALLERY = 10,
  SET_FANS_CLUB_ID = 11,
  VIEWER_WISH = 12,
  OPEN_PLAY_BOOK = 13,
  LIVE_GOAL_PIN = 14,
  GUESSING_GAME = 15,
  LAUNCH_GAME_QUIZ = 16,
  PIN_COMMENT = 17,
  INVITE_ON_MIC = 18,
  UNRECOGNIZED = -1
}
declare enum AffiliatedInfoStickerShowScene {
  NORMAL = 0,
  SETTLING = 1,
  SETTLED = 2,
  UNRECOGNIZED = -1
}
declare enum AuditStatus {
  AUDIT_STATUS_UNKNOWN = 0,
  PASS = 1,
  FAILED = 2,
  REVIEWING = 3,
  FORBIDDEN = 4,
  UNRECOGNIZED = -1
}
declare enum AuditTaskType {
  DEFAULT = 0,
  APPEAL = 1,
  UNRECOGNIZED = -1
}
declare enum BadgeDisplayType {
  BADGE_DISPLAY_TYPE_UNKNOWN = 0,
  IMAGE = 1,
  TEXT = 2,
  STRING = 3,
  COMBINE = 4,
  UNRECOGNIZED = -1
}
declare enum BadgeExhibitionType {
  BADGE = 0,
  IDENTITY_LABEL = 1,
  UNRECOGNIZED = -1
}
declare enum BadgePriorityType {
  BADGE_PRIORITY_TYPE_UNKNOWN = 0,
  STRONG_RELATION = 10,
  PLATFORM = 20,
  RELATION = 30,
  ACTIVITY = 40,
  RANK_LIST = 50,
  UNRECOGNIZED = -1
}
declare enum BadgeSceneType {
  BADGE_SCENE_TYPE_UNKNOWN = 0,
  ADMIN = 1,
  FIRST_RECHARGE = 2,
  FRIENDS = 3,
  SUBSCRIBER = 4,
  BADGE_SCENE_TYPE_ACTIVITY = 5,
  BADGE_SCENE_TYPE_RANK_LIST = 6,
  NEW_SUBSCRIBER = 7,
  USER_GRADE = 8,
  STATE_CONTROLLED_MEDIA = 9,
  FANS = 10,
  LIVE_PRO = 11,
  ANCHOR = 12,
  CLASS_RANK = 13,
  ENIGMA = 14,
  UNRECOGNIZED = -1
}
declare enum BadgeTextPosition {
  BADGE_TEXT_POSITION_UNKNOWN = 0,
  RIGHT = 1,
  BELOW = 2,
  UNRECOGNIZED = -1
}
declare enum BattleABTestType {
  UNKNOWN_AB_TEST_TYPE = 0,
  MEANWHILE_INVITE = 1,
  SPECIFIED_GIFT = 2,
  RT_C_MESSAGE_CHANNEL = 3,
  CONNECTION_TIME_OUT = 4,
  REMATCH_SKIP_TEAMMATE = 5,
  OPT_INVITEE_4048 = 6,
  TIME_CALIBRATE = 7,
  LIVE_MATCH_IS_PLAY_BOOK_ENABLED = 8,
  LIVE_MATCH_PLAY_BOOK_IS_DESIGNATED_GIFT_ENABLED = 9,
  LIVE_MATCH_PLAY_BOOK_IS_PUNISH_EFFECT_ENABLED = 10,
  MATCH_ICE_SHOWDOWN = 11,
  UNRECOGNIZED = -1
}
declare enum BattleInviteType {
  BATTLE_INVITE_TYPE_NORMAL = 0,
  AGAIN = 1,
  TEAM_PAIR_INVITE_R = 2,
  TEAM_PAIR_QUICK_RECOMMEND_COHOST_INVITEE = 3,
  TEAM_PAIR_QUICK_RECOMMEND_SOLO_INVITEE = 4,
  UNRECOGNIZED = -1
}
declare enum BattleResultResult {
  WIN = 0,
  LOSE = 1,
  DRAW = 2,
  UNRECOGNIZED = -1
}
declare enum BattleScene {
  BATTLE_SCENE_NORMAL = 0,
  TEAM_PAIR = 1,
  UNRECOGNIZED = -1
}
declare enum BattleSettingsBattleStatus {
  BATTLE_NOT_STARTED = 0,
  BATTLE_STARTED = 1,
  BATTLE_FINISHED = 2,
  BATTLE_PUNISH_STARTED = 3,
  BATTLE_PUNISH_FINISHED = 4,
  UNRECOGNIZED = -1
}
declare enum BattleType {
  UNKNOWN_BATTLE_TYPE = 0,
  NORMAL_BATTLE = 1,
  TEAM_BATTLE = 2,
  INDIVIDUAL_BATTLE = 3,
  NUM_1_VN = 4,
  TAKE_THE_STAGE = 51,
  GROUP_SHOW = 52,
  BEANS = 53,
  GROUP_RANK_LIST = 54,
  UNRECOGNIZED = -1
}
declare enum ClassType {
  NONE = 0,
  D_5 = 100,
  D_4 = 200,
  D_3 = 300,
  D_2 = 400,
  D_1 = 500,
  C_5 = 600,
  C_4 = 700,
  C_3 = 800,
  C_2 = 900,
  C_1 = 1000,
  B_5 = 1100,
  B_4 = 1200,
  B_3 = 1300,
  B_2 = 1400,
  B_1 = 1500,
  A_5 = 1600,
  A_4 = 1700,
  A_3 = 1800,
  A_2 = 1900,
  A_1 = 2000,
  S = 2100,
  UNRECOGNIZED = -1
}
declare enum CoHostPermissoinType {
  NO_PERM = 0,
  COHOST_PERM = 1,
  MULTI_HOST_PERM = 2,
  UNRECOGNIZED = -1
}
declare enum CohostABTestType {
  COHOST_AB_TEST_TYPE_UNKNOWN = 0,
  LINK_TIME_OUT_STRATEGY = 1,
  COHOST_RESERVATION = 2,
  QUICK_PAIR_NEW_ARCH_SWITCH = 3,
  COHOST_INVITATION_TEXT = 4,
  UNRECOGNIZED = -1
}
declare enum CohostLayoutMode {
  COHOST_LAYOUT_MODE_NORMAL = 0,
  SCREEN_SHARE = 1,
  UNRECOGNIZED = -1
}
declare enum CohostNudgeInfo {
  COHOST_NUDGE_INFO_NONE = 0,
  YOUR_NUDGE = 1,
  NUDGED_YOU = 2,
  UNRECOGNIZED = -1
}
declare enum ContentSource {
  CONTENT_SOURCE_UNKNOWN = 0,
  CONTENT_SOURCE_NORMAL = 1,
  CAMERA = 2,
  UNRECOGNIZED = -1
}
declare enum DetailBlockReason {
  BLOCK_REASON_NONE = 0,
  IN_LINKMIC = 100,
  MULTI_HOST_FULL = 101,
  IN_COHOST_LINKMIC = 102,
  DEAL_OTHER_INVITE = 103,
  DEAL_OTHER_APPLY = 104,
  IN_PK_STATUS = 105,
  SELF_IN_PK_STATUS = 106,
  IN_COHOST_INVITE_APPLY = 107,
  IN_AUDIENCE_LINKMIC = 108,
  WAITING_AUTO_MATCH = 109,
  INVITE_NEED_TO_JOIN = 110,
  JOIN_NEED_TO_INVITE = 111,
  IN_TAKE_THE_STAGE_STATUS = 112,
  SELF_IN_TAKE_THE_STAGE_STATUS = 113,
  IN_CATCH_BEANS = 114,
  SELF_IN_CATCH_BEANS = 115,
  JOINING_LAST_SEAT = 116,
  IN_COHOST_X_MULTIGUEST = 117,
  SELF_IN_COHOST_X_MULTIGUEST = 118,
  NO_LINKMIC_PERMISSION = 200,
  ANCHOR_LINKMIC_SETTING_CLOSED = 202,
  ANCHOR_LINKMIC_REFUSE_NOT_FOLLOWER = 203,
  ANCHOR_LINKMIC_BLOCK_INVITATION_OF_LIVE = 204,
  ANCHOR_LINKMIC_REFUSE_FRIEND_INVITE = 205,
  ANCHOR_LINKMIC_REFUSE_FRIEND_APPLY = 206,
  ANCHOR_LINKMIC_REFUSE_NOT_FRIEND_INVITE = 207,
  ANCHOR_LINKMIC_REFUSE_NOT_FRIEND_APPLY = 208,
  ANCHOR_LINKMIC_BLOCK_INVITATION_OF_MULTI_HOST = 209,
  ANCHOR_LINKMIC_BLOCK_APPLY_OF_MULTI_HOST = 210,
  ROOM_PAUSED = 300,
  LIVE_TYPE_AUDIO = 301,
  ROOM_INTERACTION_CONFLICT = 302,
  RIVAL_VERSION_NOT_SUPPORT = 303,
  SELF_VERSION_NOT_SUPPORT = 304,
  MATURE_THEME_MISMATCH = 305,
  SELF_IN_OFFICIAL_CHANNEL = 306,
  RIVAL_IN_OFFICIAL_CHANNEL = 307,
  IN_OFFICIAL_BACKUP_CHANNEL = 308,
  RIVAL_RESERVE_FULL = 309,
  ANCHOR_NOT_LIVING = 310,
  ANCHOR_IS_SELF = 311,
  PRIVATE_ROOM = 312,
  BLOCKED_BY_RIVAL = 313,
  SELF_BLOCKED_RIVAL = 314,
  VIEWER_REGION_NOT_SUPPORT = 315,
  SUBSCRIBER_ROOM = 316,
  REGIONAL_BLOCK = 317,
  PENALTY_BANNED = 318,
  BLOCK_PROGRAM_LIVE_TAB_ROOM = 319,
  USER_NOT_ONLINE = 320,
  IN_LIVE_STUDIO = 321,
  ANCHOR_NO_FEATURE_ACCESS = 323,
  NETWORK_ERROR = 400,
  ROOM_FILTER_ERROR = 401,
  UNRECOGNIZED = -1
}
declare enum DisplayControlHorizontalOnclickTriggerType {
  ONCLICK_TRIGGER_TYPE_UNKNOWN = 0,
  ONCLICK_TRIGGER_TYPE_LEFT = 1,
  ONCLICK_TRIGGER_TYPE_MIDDLE = 2,
  ONCLICK_TRIGGER_TYPE_RIGHT = 3,
  ONCLICK_TRIGGER_TYPE_ALL_AREA = 4,
  UNRECOGNIZED = -1
}
declare enum DisplayStatus {
  DISPLAY_STATUS_NORMAL = 0,
  SHADOW = 1,
  UNRECOGNIZED = -1
}
declare enum EmotePrivateType {
  EMOTE_PRIVATE_TYPE_NORMAL = 0,
  SUB_WAVE = 1,
  GUESSING = 101,
  UNRECOGNIZED = -1
}
declare enum EmoteScene {
  SUBSCRIPTION = 0,
  GAME = 1,
  FANS_CLUB = 2,
  UNRECOGNIZED = -1
}
declare enum EmoteType {
  EMOTE_TYPE_NORMAL = 0,
  WITH_STICKER = 1,
  EMOTE_TYPE_FANS = 2,
  UNRECOGNIZED = -1
}
declare enum EntranceGroupType {
  ENTRANCE_GROUP_TYPE_DEFAULT = 0,
  GIFT = 1,
  E_COMMERCE = 2,
  ENTRANCE_GROUP_TYPE_GAME = 3,
  UNRECOGNIZED = -1
}
declare enum EnvelopeBusinessType {
  BUSINESS_TYPE_UNKNOWN = 0,
  BUSINESS_TYPE_USER_DIAMOND = 1,
  BUSINESS_TYPE_PLATFORM_DIAMOND = 2,
  BUSINESS_TYPE_PLATFORM_SHELL = 3,
  BUSINESS_TYPE_PORTAL = 4,
  BUSINESS_TYPE_PLATFORM_MER_CH = 5,
  BUSINESS_TYPE_E_OY_DIAMOND = 6,
  BUSINESS_TYPE_FANCLUB_GT_M = 7,
  BUSINESS_TYPE_PLATFORM_PORTAL = 9,
  BUSINESS_TYPE_EO_YG_TM_POPULARITY_TICKET = 10,
  BUSINESS_TYPE_EO_YG_TM_REVENUE_DIAMOND = 11,
  BUSINESS_TYPE_EO_YG_TM_GAME_DIAMOND = 12,
  BUSINESS_TYPE_CREATOR_LEAGUE_PROMOTION_GT_M = 13,
  BUSINESS_TYPE_MOY_GT_M_POPULARITY_TICKET = 14,
  SUPER_FAN_BOX = 19,
  UNRECOGNIZED = -1
}
declare enum EnvelopeDisplay {
  ENVELOPE_DISPLAY_UNKNOWN = 0,
  NEW = 1,
  HIDE = 2,
  UNRECOGNIZED = -1
}
declare enum EnvelopeFollowShowStatus {
  ENVELOPE_FOLLOW_SHOW_UNKNOWN = 0,
  ENVELOPE_FOLLOW_SHOW = 1,
  ENVELOPE_FOLLOW_NOT_SHOW = 2,
  UNRECOGNIZED = -1
}
declare enum GamepadTaskType {
  PARTNERSHIP = 0,
  PUBLISHER = 1,
  EVENT = 2,
  ORG = 3,
  UNRECOGNIZED = -1
}
declare enum GiftPanelBeaconBubbleType {
  GIFT_PANEL_BEACON_BUBBLE_TYPE_UNKNOWN = 0,
  GIFT_PANEL_BEACON_BUBBLE_TYPE_DEFAULT = 1,
  LYNX_DEFAULT = 2,
  LIVE_GOAL = 3,
  GIFT_GALLERY = 4,
  UG_HIGH_PRIORITY = 5,
  UG_LOW_PRIORITY = 6,
  VIEWER_PICKS = 7,
  UNRECOGNIZED = -1
}
declare enum GiftPermissionType {
  UNKNOWN_TYPE = 0,
  NO_GIFT_PERMISSION = 1,
  ANCHOR_CLOSE = 2,
  HAS_GIFT_PERMISSION = 3,
  ANCHOR_BANNED = 4,
  UNRECOGNIZED = -1
}
declare enum GiftShowType {
  GIFT_SHOW_DEFAULT = 0,
  GIFT_SHOW_NAME = 1,
  UNRECOGNIZED = -1
}
declare enum GiftStructSchemeGiftType {
  SCHEME_GIFT_TYPE_NONE = 0,
  SCHEME_GIFT_TYPE_MAGIC = 1,
  UNRECOGNIZED = -1
}
declare enum GiftTrayStyle {
  GIFT_TRAY_STYLE_DEFAULT = 0,
  GALLERY_REPURCHASE_FULL = 1,
  GALLERY_REPURCHASE_BACKGROUND = 2,
  UNRECOGNIZED = -1
}
declare enum GoalMessageSource {
  GOAL_MESSAGE_SOURCE_UNKNOWN = 0,
  COMMIT = 1,
  PROGRESS_UPDATE = 2,
  PIN = 3,
  UNPIN = 4,
  REVIEW_CALLBACK = 5,
  SUSPEND = 6,
  CHALLENGE_PROMPT = 7,
  UNRECOGNIZED = -1
}
declare enum GuestMicCameraChangeScene {
  CHANGE_SCENE_UNKNOWN = 0,
  LIVE_SHOW_BY_ANCHOR_AUTO = 1,
  LIVE_SHOW_BY_SERVER_NORMAL = 2,
  LIVE_SHOW_BY_SHOW_END = 3,
  COHOST_WITH_GUEST = 4,
  UNRECOGNIZED = -1
}
declare enum GuestMicCameraManageOp {
  OPEN_MIC = 0,
  OPEN_CAMERA = 1,
  CLOSE_MIC = 2,
  CLOSE_CAMERA = 3,
  CLOSE_MIC_PUNISH = 4,
  UNRECOGNIZED = -1
}
declare enum HashtagNamespace {
  GLOBAL = 0,
  GAMING = 1,
  UNRECOGNIZED = -1
}
declare enum HorizontalPaddingRule {
  USE_MIDDLE_AND_WIDTH = 0,
  USE_LEFT_AND_MIDDLE_AND_RIGHT = 1,
  UNRECOGNIZED = -1
}
declare enum IceShowdownSetting {
  ICE_SHOWDOWN_OFF = 0,
  ICE_SHOWDOWN_MANUAL = 1,
  ICE_SHOWDOWN_SYSTEM = 2,
  UNRECOGNIZED = -1
}
declare enum LinkListStatus {
  STATUS_UN_KOWN = 0,
  STATUS_WAITING = 1,
  STATUS_LINKED = 2,
  STATUS_FINISHED = 3,
  STATUS_WAITING_OR_LINKED = 4,
  UNRECOGNIZED = -1
}
declare enum LinkRoleType {
  TYPE_ROLE_TYPE_UN_KOWN = 0,
  TYPE_LEADER = 1,
  TYPE_PLAYER = 2,
  TYPE_INVITEE = 3,
  TYPE_APP_LIER = 4,
  UNRECOGNIZED = -1
}
declare enum LinkSilenceStatus {
  STATUS_UN_SILENCE = 0,
  STATUS_SILENCE_BY_SELF = 1,
  STATUS_SILENCE_BY_OWNER = 2,
  UNRECOGNIZED = -1
}
declare enum LinkType {
  TYPE_UNKNOWN = 0,
  TYPE_VIDEO = 1,
  TYPE_AUDIO = 2,
  TYPE_VIRTUAL = 3,
  UNRECOGNIZED = -1
}
declare enum LinkUserType {
  LINK_USER_TYPE_DEFAULT = 0,
  KARAOKE = 1,
  UNRECOGNIZED = -1
}
declare enum LinkmicApplierSortSetting {
  LINKMIC_APP_LIER_SORT_SETTING_NONE = 0,
  LINKMIC_APP_LIER_SORT_SETTING_BY_GIFT_SCORE = 1,
  UNRECOGNIZED = -1
}
declare enum LinkmicGiftExpressionStrategy {
  CONTROL_V1 = 0,
  EXPERIMENT_V1 = 1,
  EXPERIMENT_V2 = 2,
  UNRECOGNIZED = -1
}
declare enum LinkmicMultiLiveEnum {
  LINKMIC_MULTI_LIVE_ENUM_DEFAULT = 0,
  ANCHOR_USE_NEW_LAYOUT = 1,
  UNRECOGNIZED = -1
}
declare enum LinkmicPlayType {
  PLAY_TYPE_INVITE = 0,
  PLAY_TYPE_APPLY = 1,
  PLAY_TYPE_RESERVE = 2,
  PLAY_TYPE_OFF_LIVE = 3,
  PLAY_TYPE_OFFLINE = 4,
  UNRECOGNIZED = -1
}
declare enum LinkmicReplyType {
  RT_UNKNOWN = 0,
  RT_AGREE = 1,
  RT_REJECT = 2,
  UNRECOGNIZED = -1
}
declare enum LinkmicShareRevenueSetting {
  LINKMIC_SHARE_REVENUE_NOT_SET = 0,
  LINKMIC_SHARE_REVENUE_OPEN = 1,
  LINKMIC_SHARE_REVENUE_CLOSE = 2,
  UNRECOGNIZED = -1
}
declare enum LinkmicStatus {
  DISABLE = 0,
  ENABLE = 1,
  JUST_FOLLOWING = 2,
  MULTI_LINKING = 3,
  MULTI_LINKING_ONLY_FOLLOWING = 4,
  UNRECOGNIZED = -1
}
declare enum LinkmicUserSettingDisableVideoLinkmic {
  UN_SET = 0,
  OPEN_AND_SHOW = 1,
  CLOSE_AND_SHOW = 2,
  OPEN_AND_HIDE = 3,
  CLOSE_AND_HIDE = 4,
  UNRECOGNIZED = -1
}
declare enum LinkmicUserSettingLayout {
  GRID = 0,
  FLOATING = 1,
  UNRECOGNIZED = -1
}
declare enum LinkmicUserSettingMultiGuestApplyAutoApprove {
  NOT_SET = 0,
  ALL_AUDIENCE = 1,
  ONLY_FOLLOWER = 2,
  ONLY_FRIEND = 3,
  ONLY_GIFT_ER = 4,
  UNRECOGNIZED = -1
}
declare enum LinkmicUserSettingShowAction {
  CHECKED = 0,
  NOT_CHECKED = 1,
  LINKMIC_USER_SETTING_SHOW_ACTION_HIDE = 2,
  OPEN = 3,
  CLOSE = 4,
  UNRECOGNIZED = -1
}
declare enum LinkmicUserStatus {
  USER_STATUS_NONE = 0,
  USER_STATUS_LINKED = 1,
  USER_STATUS_APPLYING = 2,
  USER_STATUS_INVITING = 3,
  UNRECOGNIZED = -1
}
declare enum LiveEventInfoEventPayMethod {
  EVENT_PAY_METHOD_INVALID = 0,
  EVENT_PAY_METHOD_COINS = 1,
  EVENT_PAY_METHOD_CASH = 2,
  UNRECOGNIZED = -1
}
declare enum MatchGameplayOption {
  MATCH_OPTION_UNKNOWN = 0,
  MATCH_OPTION_SPECIFIC_GIFT = 1,
  MATCH_OPTION_ICE_SHOWDOWN = 2,
  UNRECOGNIZED = -1
}
declare enum MatchInfoMultiplierType {
  UNSPECIFIED = 0,
  CRITICAL_STRIKE = 1,
  TOP_2 = 2,
  TOP_3 = 3,
  VAULT_GLOVE = 4,
  UNRECOGNIZED = -1
}
declare enum MultiGuestOutsideRoomInviteSource {
  OUTSIDE_ROOM_INVITE_SOURCE_UNKNOWN = 0,
  OUTSIDE_ROOM_INVITE_SOURCE_PANEL = 1,
  OUTSIDE_ROOM_INVITE_SOURCE_CAPSULE = 2,
  OUTSIDE_ROOM_INVITE_SOURCE_EMPTY_POSITION = 3,
  UNRECOGNIZED = -1
}
declare enum OptPairStatus {
  OPT_PAIR_STATUS_UNKNOWN = 0,
  OFFLINE = 1,
  FINISHED = 2,
  UNRECOGNIZED = -1
}
declare enum PerceptionDialogIconType {
  ICON_TYPE_NONE = 0,
  ICON_TYPE_WARNING = 1,
  ICON_TYPE_LINKMIC = 2,
  ICON_TYPE_GUEST_LINKMIC = 3,
  ICON_TYPE_LIVE = 4,
  ICON_TYPE_TREASURE_BOX = 5,
  ICON_TYPE_MUTE = 6,
  ICON_GAMEPAD_ACCESS_REVOKED = 7,
  ICON_TYPE_BAN_REPORT_LIVE_SINGLE_ROOM = 8,
  ICON_TYPE_BAN_REPORT_LIVE_ALL_ROOM = 9,
  ICON_TYPE_BAN_REPORT_LIVE_GREEN_SCREEN = 10,
  ICON_TYPE_GIFT = 11,
  ICON_TYPE_APPEAL_SUCCESS = 12,
  ICON_TYPE_MATCH = 13,
  ICON_TYPE_LIVE_GOAL = 14,
  ICON_TYPE_SUBSCRIPTION = 15,
  ICON_TYPE_STAR_COMMENT = 16,
  ICON_TYPE_RANKING = 17,
  ICON_TYPE_COMMON = 18,
  UNRECOGNIZED = -1
}
declare enum PinCardType {
  UNKNOWN_PIN_CARD_TYPE = 0,
  CUSTOMIZED_BENEFIT_E_NUM = 1,
  SUB_GOAL_E_NUM = 2,
  UP_SELL_DM = 3,
  UP_SELL_LEAD_SGEN = 4,
  SMB_SUB_PLAN = 5,
  SMB_COURSE = 6,
  UNRECOGNIZED = -1
}
declare enum PollAppealStatus {
  POLL_APPEAL_STATUS_UNKNOWN = 0,
  POLL_APPEAL_STATUS_PASS = 1,
  FAIL = 2,
  UNRECOGNIZED = -1
}
declare enum PollEndType {
  POLL_END_BY_TIME = 0,
  POLL_END_BY_OWNER = 1,
  POLL_END_BY_OTHER = 2,
  POLL_END_BY_ADMIN = 3,
  UNRECOGNIZED = -1
}
declare enum PollKind {
  POLL_KIND_NORMAL = 0,
  POLL_KIND_GIFT = 1,
  CUSTOMIZABLE = 2,
  CUSTOMIZABLE_GIFT = 3,
  QUICK_GIFT = 4,
  EMOTE = 5,
  UNRECOGNIZED = -1
}
declare enum PollTemplateStatus {
  TO_BE_REVIEWED = 0,
  UNDER_REVIEW = 1,
  REVIEWED = 2,
  REFUSED = 3,
  UNRECOGNIZED = -1
}
declare enum Position {
  POSITION_UNKNOWN = 0,
  LEFT = 1,
  POSITION_RIGHT = 2,
  UNRECOGNIZED = -1
}
declare enum ProfitRankType {
  TYPE_HOURLY_RANK = 0,
  TYPE_WEEKLY_RANK = 1,
  TYPE_HOURLY_STAR_RANK = 2,
  TYPE_WEEKLY_RISING_RANK_ACTIVITY = 3,
  TYPE_WEEKLY_RISING_RANK = 4,
  TYPE_WEEKLY_ROOKIE = 5,
  TYPE_E_COMMERCE_WEEKLY = 6,
  TYPE_E_COMMERCE_DAILY = 7,
  TYPE_DAILY_RANK = 8,
  TYPE_FIRST_GIFT_RANK = 9,
  TYPE_GAME_RANK = 10,
  TYPE_DAILY_GAME = 11,
  TYPE_HALL_OF_FAME_RANK = 12,
  TYPE_RANK_LEAGUE = 13,
  DAILY_ROOKIE = 14,
  TYPE_TEAM_RANK = 15,
  TYPE_CLASS_RANK = 16,
  TYPE_DAILY_GAME_PUB_G = 20,
  TYPE_DAILY_GAME_MLB_B = 21,
  TYPE_DAILY_GAME_FREE_FIRE = 22,
  TYPE_WEEKLY_GAME_SUBCATEGORY_ONE = 23,
  TYPE_WEEKLY_GAME_SUBCATEGORY_TWO = 24,
  TYPE_WEEKLY_GAME_SUBCATEGORY_THREE = 25,
  TYPE_WEEKLY_E_COMMERCE_COLLECTIBLES = 26,
  TYPE_WEEKLY_E_COMMERCE_BEAUTY_PERSONAL_CARE = 27,
  TYPE_WEEKLY_E_COMMERCE_WOMEN_WEAR_UNDERWEAR = 28,
  TYPE_CAMPAIGN_LEAGUEMATCH_RANK = 101,
  UNRECOGNIZED = -1
}
declare enum PunishTypeId {
  PUNISH_TYPE_IDUN_KNOWN = 0,
  BAN_LINKMIC = 9,
  BAN_GAME_PARTNERSHIP = 25,
  REMOVE_GAME_PARTNERSHIP = 26,
  BAN_COHOST_LINKMIC = 55,
  AUTHORITY_LIMIT_MATCH = 57,
  BAN_VOICE_CHAT = 59,
  BAN_LIVE_GOAL = 64,
  VIEWER_LIMIT = 70,
  LIVE_CONSOLE_BAN = 76,
  UNRECOGNIZED = -1
}
declare enum ReserveReplyStatus {
  RESERVE_REPLY_STATUS_UNKNOWN = 0,
  WAIT_FORME = 1,
  UNRECOGNIZED = -1
}
declare enum RewardCondition {
  REWARD_CONDITION_SUBSCRIPTION = 0,
  SUB_WAVE_CUSTOM = 1,
  REWARD_CONDITION_FANS_CLUB = 2,
  UNRECOGNIZED = -1
}
declare enum RivalExtraInfoAnchorLayer {
  ANCHOR_LAYER_UNKNOWN = 0,
  ANCHOR_LAYER_TOP = 1,
  ANCHOR_LAYER_SMALL = 2,
  UNRECOGNIZED = -1
}
declare enum RivalExtraInfoBattleInfoBattleInfoType {
  BATTLE_INFO_TYPE_NONE = 0,
  BATTLE_INFO_TYPE_AVERAGE_SCORE = 1,
  BATTLE_INFO_TYPE_MAX_SCORE = 2,
  BATTLE_INFO_TYPE_LAST_SCORE = 3,
  BATTLE_INFO_TYPE_WIN_STREAK = 4,
  UNRECOGNIZED = -1
}
declare enum RivalExtraInfoInviteBlockReason {
  RIVAL_EXTRA_INFO_INVITE_BLOCK_REASON_NONE = 0,
  IS_LINKING = 1,
  INVITATION_DENIED = 2,
  PERMISSION_DENIED = 3,
  LOW_CLIENT_VERSION = 4,
  RIVAL_EXTRA_INFO_INVITE_BLOCK_REASON_ROOM_PAUSED = 5,
  LINKMIC_FULL = 6,
  MATURE_THEME_NOT_MATCH = 7,
  RESERVE_FULL = 8,
  RIVAL_EXTRA_INFO_INVITE_BLOCK_REASON_REGIONAL_BLOCK = 9,
  UNRECOGNIZED = -1
}
declare enum RivalExtraInfoTextType {
  TEXT_TYPE_UNKNOWN = 0,
  CURRO_OMF_AN_TICKET = 1,
  TOTAL_DIAMOND_COUNT = 2,
  DISTANCE = 3,
  DISTANCE_CITY = 4,
  UNRECOGNIZED = -1
}
declare enum SOVLockInfoType {
  SOV_LOCK_INFO_TYPE_NONE = 0,
  LOCK = 1,
  PREVIEW = 2,
  UNRECOGNIZED = -1
}
declare enum SOVMaskInfoType {
  SOV_MASK_INFO_TYPE_NONE = 0,
  SENSITIVE = 1,
  VIOLATION = 2,
  MUSIC_COPYRIGHT = 3,
  UNAVAILABLE = 4,
  UNRECOGNIZED = -1
}
declare enum SOVStatus {
  SOV_STATUS_UNKNOWN = 0,
  ON = 1,
  OFF = 2,
  UNRECOGNIZED = -1
}
declare enum SubPinCardTextTextType {
  SUB_PIN_CARD_TEXT_TEXT_TYPE_TEXT_TYPE_UNKNOWN = 0,
  TEXT_TYPE_ORIGINAL = 1,
  TEXT_TYPE_STARLING_KEY = 2,
  UNRECOGNIZED = -1
}
declare enum SubPinCardTextTextType_2 {
  UNKNOWN_TEXT_TYPE = 0,
  ORIGINAL_TEXT = 1,
  STARLING_KEY = 2,
  UNRECOGNIZED = -1
}
declare enum SubSplitPeriod {
  SUB_SPLIT_PERIOD_UNKNOWN = 0,
  ANNOUNCEMENT = 1,
  TRANSITION = 2,
  OFFICIAL = 3,
  UNRECOGNIZED = -1
}
declare enum TagType {
  CREATOR_CRM_TAG_TYPE_UNKNOWN = 0,
  CREATOR_CRM_TAG_TYPE_USER_GRADE = 1,
  CREATOR_CRM_TAG_TYPE_FANS_LEVEL = 2,
  CREATOR_CRM_TAG_TYPE_WATCH_ME_DAYS_AGO = 3,
  CREATOR_CRM_TAG_TYPE_CUSTOM = 4,
  CREATOR_CRM_TAG_TYPE_TITLE_GIFT = 5,
  CREATOR_CRM_TAG_TYPE_FIRST_JOINED_TEAM = 6,
  CREATOR_CRM_TAG_TYPE_PAY_ACCOMPANY_DAYS = 7,
  CREATOR_CRM_TAG_TYPE_SPONSOR_GIFT_LAST_ROOM = 8,
  CREATOR_CRM_TAG_TYPE_MATCH_MVP_LAST_ROOM = 9,
  CREATOR_CRM_TAG_TYPE_LARGE_AMOUNT_GIFT_LAST_ROOM = 10,
  CREATOR_CRM_TAG_TYPE_COMMENT_LAST_ROOM = 11,
  CREATOR_CRM_TAG_TYPE_RECENT_TITLED_GIFT = 12,
  CREATOR_CRM_TAG_TYPE_MEET_ANNIVERSARY = 13,
  CREATOR_CRM_TAG_TYPE_FANS_SLEEP = 14,
  CREATOR_CRM_TAG_TYPE_NOT_SEND_HEART_ME = 15,
  CREATOR_CRM_TAG_TYPE_NOT_JOIN_TEAM = 16,
  CREATOR_CRM_TAG_TYPE_FIRST_WATCH_LIVE = 17,
  CREATOR_CRM_TAG_TYPE_RECENT_COMMENT = 18,
  CREATOR_CRM_TAG_TYPE_RECENT_GIFT_TIMES = 19,
  CREATOR_CRM_TAG_TYPE_RECENT_WATCH_LIVE_DURATION = 20,
  CREATOR_CRM_TAG_TYPE_RECENT_GIFT = 21,
  CREATOR_CRM_TAG_TYPE_RECENT_LIVE_CONTRIBUTION_TOP = 22,
  CREATOR_CRM_TAG_TYPE_JUST_UPGRADE = 28,
  CREATOR_CRM_TAG_TYPE_FAN_TOTAL_WATCH_DURATION = 29,
  CREATOR_CRM_TAG_TYPE_FAN_TOTAL_COMMENT_NUM = 30,
  CREATOR_CRM_TAG_TYPE_FAN_TOTAL_GIFT_SENT_NUM = 31,
  CREATOR_CRM_TAG_TYPE_VAULT_HOLD_INVITATION = 32,
  CREATOR_CRM_TAG_TYPE_VAULT_GET_INVITATION_FROM_ROOM = 33,
  CREATOR_CRM_TAG_TYPE_VAULT_USER_RANK_TOP = 34,
  CREATOR_CRM_TAG_TYPE_VAULT_MOST_EXPENSIVE_GIFT_SENT_ALL_TIME = 35,
  CREATOR_CRM_TAG_TYPE_VAULT_MOST_EXPENSIVE_GIFT_SENT_LAST_ACTIVITY = 36,
  CREATOR_CRM_TAG_TYPE_VAULT_GIFT_ER = 37,
  CREATOR_CRM_TAG_TYPE_E_COMMERCE_TAG = 42,
  CREATOR_CRM_TAG_TYPE_NOT_FINISH_TICKET_TASK = 43,
  CREATOR_CRM_TAG_TYPE_GALLERY_PROGRESS = 44,
  CREATOR_CRM_TAG_TYPE_SEND_GIFT_NOT_FANS = 45,
  CREATOR_CRM_TAG_TYPE_WATCH_LIVE_NOT_FANS = 46,
  CREATOR_CRM_TAG_TYPE_TOP_3_NOT_FANS = 47,
  CREATOR_CRM_TAG_TYPE_UPGRADE_IN_ROOM = 48,
  CREATOR_CRM_TAG_TYPE_HIGH_VIEW = 51,
  CREATOR_CRM_TAG_TYPE_HIGH_VIEW_DURATION = 52,
  CREATOR_CRM_TAG_TYPE_HIGH_ACTIVE = 53,
  CREATOR_CRM_TAG_TYPE_HIGH_ACTIVE_NO_COMMENT = 54,
  CREATOR_CRM_TAG_TYPE_HIGH_VIEW_DURATION_NO_ACTIVE = 55,
  CREATOR_CRM_TAG_TYPE_REP_VIEWER = 56,
  CREATOR_CRM_TAG_TYPE_HIGH_VIEW_DURATION_THIS_ROOM = 57,
  CREATOR_CRM_TAG_TYPE_HIGH_ACTIVE_THIS_ROOM = 58,
  FANS_HIGHLIGHT = 100,
  UNRECOGNIZED = -1
}
declare enum TagV2TagClassification {
  TAG_V2_TAG_CLASSIFICATION_UNKNOWN = 0,
  COHOST_HISTORY = 1,
  FIRST_DEGREE_RELATION = 2,
  SECOND_DEGREE_RELATION = 3,
  RANK = 4,
  SIMILAR_INTERESTS = 5,
  UNRECOGNIZED = -1
}
declare enum TimerDetailAntidirtStatus {
  TIMER_DETAIL_ANTIDIRT_STATUS_PASS = 0,
  TIMER_DETAIL_ANTIDIRT_STATUS_FAILED = 1,
  UNRECOGNIZED = -1
}
declare enum TimerDetailAuditStatus {
  TIMER_DETAIL_AUDIT_STATUS_AUDIT_STATUS_UNKNOWN = 0,
  AUDIT_STATUS_PASS = 1,
  AUDIT_STATUS_FAILED = 2,
  AUDIT_STATUS_REVIEWING = 3,
  AUDIT_STATUS_FORBIDDEN = 4,
  UNRECOGNIZED = -1
}
declare enum TimerDetailAuditTaskType {
  AUDIT_TASK_TYPE_DEFAULT = 0,
  AUDIT_TASK_TYPE_APPEAL = 1,
  UNRECOGNIZED = -1
}
declare enum TimerStatus {
  NOT_STARTED = 0,
  RUNNING = 1,
  PAUSED = 2,
  CANCELLED = 3,
  TIMER_STATUS_FINISHED = 4,
  UNRECOGNIZED = -1
}
declare enum TopicActionType {
  TOPIC_ACTION_TYPE_UNKNOWN = 0,
  TOPIC_ACTION_TYPE_FOLLOW = 1,
  UNRECOGNIZED = -1
}
declare enum UserEmoteUploadSource {
  EMOTE_UPLOAD_SOURCE_ANCHOR = 0,
  EMOTE_UPLOAD_SOURCE_SUBSCRIBER = 1,
  EMOTE_UPLOAD_SOURCE_MODERATOR = 2,
  EMOTE_UPLOAD_SOURCE_AI = 3,
  UNRECOGNIZED = -1
}
declare enum UserEcommerceEntranceCreatorType {
  UNDEFINED = 0,
  USER_ECOMMERCE_ENTRANCE_CREATOR_TYPE_OFFICIAL = 1,
  MARKET = 2,
  USER_ECOMMERCE_ENTRANCE_CREATOR_TYPE_NORMAL = 3,
  UNRECOGNIZED = -1
}
declare enum UserEcommerceEntranceEntranceType {
  PROFILE = 0,
  SHOWCASE = 1,
  SHOP = 2,
  UNRECOGNIZED = -1
}
declare enum UserEcommerceEntranceSellingPointLiveSellingPointType {
  USER_ECOMMERCE_ENTRANCE_SELLING_POINT_LIVE_SELLING_POINT_TYPE_UNDEFINED = 0,
  QUALITY = 1,
  SOLD = 2,
  TRUST_BETTER_THAN_OTHER_SHOP = 3,
  TRUST_REPLY_IN_TIME = 4,
  TRUST_CREATE_SHIP_IN_TIME = 5,
  TRUST_POSITIVE_REVIEW_RATE = 6,
  UNRECOGNIZED = -1
}
declare enum UserEcommerceEntranceShopEntranceInfoStoreLabelShopIdentityLabelType {
  USER_ECOMMERCE_ENTRANCE_SHOP_ENTRANCE_INFO_STORE_LABEL_SHOP_IDENTITY_LABEL_TYPE_UNKNOWN = 0,
  TOP_BRAND = 1,
  OFFICIAL_SHOP = 2,
  AUTHORIZED_SHOP = 3,
  GOLDEN_SHOP = 4,
  SILVER_SHOP = 5,
  GB_TOP_BRAND = 51,
  MALL = 101,
  TOP_CHOICE = 102,
  NORMAL_BLUE_V = 1000,
  UNRECOGNIZED = -1
}
declare enum UserEcommerceEntranceShopEntranceInfoStoreLabelStoreBrandLabelType {
  USER_ECOMMERCE_ENTRANCE_SHOP_ENTRANCE_INFO_STORE_LABEL_STORE_BRAND_LABEL_TYPE_NONE = 0,
  USER_ECOMMERCE_ENTRANCE_SHOP_ENTRANCE_INFO_STORE_LABEL_STORE_BRAND_LABEL_TYPE_OFFICIAL = 1,
  AUTHORIZED = 2,
  STORE_BRAND_LABEL_TYPE_BLUE_V = 3,
  STORE_BRAND_LABEL_TYPE_TOP_CHOICE = 4,
  STORE_BRAND_LABEL_TYPE_MALL = 5,
  UNRECOGNIZED = -1
}
declare enum UserEcommerceEntranceViewVersion {
  VIEW_VERSION_UNKNOWN = 0,
  VIEW_VERSION_STAR_SHOP = 1,
  UNRECOGNIZED = -1
}
declare enum UserFansClubFansClubDataUserFansClubStatus {
  NOT_JOINED = 0,
  ACTIVE = 1,
  INACTIVE = 2,
  UNRECOGNIZED = -1
}
declare enum UserSubscribeInfoPayStatus {
  SUB_STATUS_UNKNOWN = 0,
  SUB_STATUS_ONE_TIME = 1,
  SUB_STATUS_AUTO_DEDUCTION = 2,
  SUB_STATUS_AUTO_DEDUCTION_CANCELED = 3,
  SUB_STATUS_REVOKE = 4,
  UNRECOGNIZED = -1
}
declare enum VerticalPaddingRule {
  USE_DEFAULT = 0,
  USE_TOP_AND_BOTTOM = 1,
  UNRECOGNIZED = -1
}
interface DiffInfo {
  diffUrl: UrlDataStruct | undefined;
  baseUrl: UrlDataStruct | undefined;
  extra: string;
}
interface EffectStruct {
  name: string;
  hint: string;
  hintIcon: UrlDataStruct | undefined;
  sdkVersion: string;
  appVersion: string;
  fileUrl: UrlDataStruct | undefined;
  iconUrl: UrlDataStruct | undefined;
  id: string;
  effectId: string;
  devicePlatform: string;
  types: string[];
  tags: string[];
  tagsUpdatedAt: string;
  parent: string;
  children: string[];
  effectType: number;
  music: string[];
  source: number;
  designerId: string;
  schema: string;
  requirements: string[];
  extra: string;
  isBusi: boolean;
  designerEncryptedId: string;
  sdkExtra: string;
  resourceId: string;
  adRawData: string;
  bindIds: string[];
  ptime: string;
  gradeKey: string;
  composerParams: string;
  hintFile: UrlDataStruct | undefined;
  useNumber: string;
  typesSec: string[];
  requirementsSec: string[];
  panel: string;
  modelNames: string;
  modelNamesSec: string;
  hintFileFormat: number;
  poiId: string;
  isPoi: boolean;
  challenge: string[];
  systemList: string[];
  originalEffectId: string;
  transFileUrl: UrlDataStruct | undefined;
  templateEffectId: string;
  recTag: string;
  templateEffectExtra: TemplateEffectExtra | undefined;
  fileDiff: DiffInfo | undefined;
  provider: number;
  packageSize: string;
  fromAppId: string;
}
interface EventUserInfo {
  userId: string;
  avatarUri: string;
}
interface MsgFilter {
  isGifter: boolean;
  isSubscribedToAnchor: boolean;
}
interface PaidEventPreview {
  allowPreview: string;
  allowPreviewTime: string;
}
interface SubSplitStatus {
  isOldSubCreator: boolean;
  curPeriod: SubSplitPeriod;
}
interface TemplateEffectExtra {
  resourceId: string;
}
interface UrlDataStruct {
  uri: string;
  urlList: string[];
  urlSubType: number;
  md5: string;
  urlPrefix: string[];
}
interface UserIdentity {
  isGiftGiverOfAnchor: boolean;
  isSubscriberOfAnchor: boolean;
  isMutualFollowingWithAnchor: boolean;
  isFollowerOfAnchor: boolean;
  isModeratorOfAnchor: boolean;
  isAnchor: boolean;
}
declare const DiffInfo: MessageFns$52<DiffInfo>;
declare const EffectStruct: MessageFns$52<EffectStruct>;
declare const EventUserInfo: MessageFns$52<EventUserInfo>;
declare const MsgFilter: MessageFns$52<MsgFilter>;
declare const PaidEventPreview: MessageFns$52<PaidEventPreview>;
declare const SubSplitStatus: MessageFns$52<SubSplitStatus>;
declare const TemplateEffectExtra: MessageFns$52<TemplateEffectExtra>;
declare const UrlDataStruct: MessageFns$52<UrlDataStruct>;
declare const UserIdentity: MessageFns$52<UserIdentity>;
interface MessageFns$52<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/chatroom/api.d.ts
interface EmoteModelAuditInfo {
  violationId: string;
  taskType: AuditTaskType;
}
interface SOVBriefInfo {
  cover: ImageModel | undefined;
  maskInfo: SOVMaskInfo | undefined;
  lockInfo: SOVLockInfoType;
  createTime: string;
  awemeId: string;
}
interface SOVMaskInfo {
  type: SOVMaskInfoType;
  title: string;
}
interface SOVPinCardInfo {
  recentlyUpdated: boolean;
  sovInfo: SubOnlyVideosBriefInfo | undefined;
}
interface SubGoalPinCard {
  goalId: string;
  timeToLive: string;
  desc: SubPinCardText | undefined;
  target: string;
  progress: string;
}
interface SubOnlyVideosBriefInfo {
  totalCountStr: string;
  totalCount: number;
  sovBriefInfo: SOVBriefInfo[];
  creatorStatus: SOVStatus;
  schema: string;
  isSovAdjustmentsEnabledForConsumer: boolean;
  newSovCount: number;
}
interface SubPinCard {
  timeToLive: string;
  title: Text$1 | undefined;
  desc: Text$1 | undefined;
  image: ImageModel | undefined;
  type: PinCardType;
  id: string;
  templateId: string;
  goalPinCard: SubGoalPinCard | undefined;
  actionSchema: string;
  lastPinTimestamp: string;
  extraInfo: SubPinCardExtra | undefined;
  highlightTextNum: string;
  icons: ImageModel[];
  pinSource: number;
}
interface SubPinCardExtra {
  sovInfo: SOVPinCardInfo | undefined;
}
interface SubPinCardText {
  type: SubPinCardTextTextType;
  content: string;
}
interface Text$1 {
  type: SubPinCardTextTextType;
  content: string;
}
interface TimerDetail {
  timerId: string;
  anchorId: string;
  startTimestampS: string;
  startCountdownTimeS: string;
  anchorSideTitle: string;
  userSideTitle: string;
  timeIncreasePerSubS: string;
  timeIncreaseCapS: string;
  subCount: number;
  timeIncreaseReachCap: boolean;
  totalPauseTimeS: string;
  lastPauseTimestampS: string;
  totalTimeS: string;
  remainingTimeS: string;
  timestampS: string;
  stickerX: string;
  stickerY: string;
  screenW: string;
  screenH: string;
  timerStatus: TimerStatus;
  antidirtStatus: TimerDetailAntidirtStatus;
  auditStatus: TimerDetailAuditStatus;
  auditInfo: TimerDetailAuditInfo | undefined;
}
interface TimerDetailAuditInfo {
  violationId: string;
  taskType: TimerDetailAuditTaskType;
}
declare const EmoteModelAuditInfo: MessageFns$51<EmoteModelAuditInfo>;
declare const SOVBriefInfo: MessageFns$51<SOVBriefInfo>;
declare const SOVMaskInfo: MessageFns$51<SOVMaskInfo>;
declare const SOVPinCardInfo: MessageFns$51<SOVPinCardInfo>;
declare const SubGoalPinCard: MessageFns$51<SubGoalPinCard>;
declare const SubOnlyVideosBriefInfo: MessageFns$51<SubOnlyVideosBriefInfo>;
declare const SubPinCard: MessageFns$51<SubPinCard>;
declare const SubPinCardExtra: MessageFns$51<SubPinCardExtra>;
declare const SubPinCardText: MessageFns$51<SubPinCardText>;
declare const Text$1: MessageFns$51<Text$1>;
declare const TimerDetail: MessageFns$51<TimerDetail>;
declare const TimerDetailAuditInfo: MessageFns$51<TimerDetailAuditInfo>;
interface MessageFns$51<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/base/user.d.ts
interface ArrowConfig {
  icon: ImageModel | undefined;
}
interface BadgeStruct {
  displayType: BadgeDisplayType;
  priorityType: BadgePriorityType;
  sceneType: BadgeSceneType;
  position: Position;
  displayStatus: DisplayStatus;
  greyedByClient: string;
  exhibitionType: BadgeExhibitionType;
  openweburl: string;
  display: boolean;
  privilegeLogExtra: PrivilegeLogExtra | undefined;
  image: ImageBadge | undefined;
  text: TextBadge | undefined;
  str: StringBadge | undefined;
  combine: CombineBadgeStruct | undefined;
  isCustomized: boolean;
}
interface BadgeText {
  key: string;
  defaultPattern: string;
  pieces: string[];
}
interface CombineBadgeBackground {
  image: ImageModel | undefined;
  backgroundColorCode: string;
  borderColorCode: string;
  stretchableBackgroundImage: StretchableBackgroundImage | undefined;
  leftSideImage: ImageModel | undefined;
}
interface CombineBadgeStruct {
  displayType: number;
  icon: ImageModel | undefined;
  text: BadgeText | undefined;
  str: string;
  padding: PaddingInfo | undefined;
  fontStyle: FontStyle | undefined;
  profileCardPanel: ProfileCardPanel | undefined;
  background: CombineBadgeBackground | undefined;
  backgroundDarkMode: CombineBadgeBackground | undefined;
  iconAutoMirrored: boolean;
  backgroundAutoMirrored: boolean;
  publicScreenShowStyle: number;
  personalCardShowStyle: number;
  ranklistOnlineAudienceShowStyle: number;
  multiGuestShowStyle: number;
  arrowConfig: ArrowConfig | undefined;
  paddingNewFont: PaddingInfo | undefined;
}
interface ComboBadgeInfo {
  icon: ImageModel | undefined;
  comboCount: string;
}
interface CreatorScoreDisplayInfo {
  ecommerceEntranceLabel: CreatorScoreLabelInfo | undefined;
  scoreLevel: number;
}
interface CreatorScoreLabelInfo {
  labelText: string;
  labelTextColorDark: string;
  labelTextColorLight: string;
  logoDark: ImageModel | undefined;
  logoLight: ImageModel | undefined;
  popUpInfo: PopUpInfo | undefined;
}
interface CreatorScoreProfile {
  finalScore: number;
  countryCode: string;
  displayInfo: CreatorScoreDisplayInfo | undefined;
  scoreInfoExtra: {
    [key: string]: string;
  };
}
interface CreatorScoreProfile_ScoreInfoExtraEntry {
  key: string;
  value: string;
}
interface EnigmaInfo {
  isEnigmaMaskOn: boolean;
}
interface FansClubInfo {
  isSleeping: boolean;
  fansLevel: string;
  fansScore: string;
  badge: ImageModel | undefined;
  fansCount: string;
  fansClubName: string;
}
interface FollowInfo {
  followingCount: string;
  followerCount: string;
  followStatus: string;
  pushStatus: string;
}
interface FontStyle {
  fontSize: number;
  fontWidth: number;
  fontColor: string;
  borderColor: string;
}
interface IconConfig {
  icon: ImageModel | undefined;
  background: CombineBadgeBackground | undefined;
}
interface ImageBadge {
  displayType: BadgeDisplayType;
  image: ImageModel | undefined;
}
interface LabelConfig {
  label: string;
  fontStyle: FontStyle | undefined;
  background: CombineBadgeBackground | undefined;
}
interface NumberConfig {
  number: string;
  fontStyle: FontStyle | undefined;
  background: CombineBadgeBackground | undefined;
}
interface OwnRoom {
  roomIds: string[];
  roomIdsStr: string[];
}
interface PaddingInfo {
  useSpecific: boolean;
  middlePadding: number;
  badgeWidth: number;
  leftPadding: number;
  rightPadding: number;
  iconTopPadding: number;
  iconBottomPadding: number;
  horizontalPaddingRule: HorizontalPaddingRule;
  verticalPaddingRule: VerticalPaddingRule;
}
interface PopUpInfo {
  title: string;
  description: string;
}
interface PrivilegeLogExtra {
  dataVersion: string;
  privilegeId: string;
  privilegeVersion: string;
  privilegeOrderId: string;
  level: string;
  startTime: string;
  endTime: string;
}
interface ProfileCardPanel {
  useNewProfileCardStyle: boolean;
  badgeTextPosition: BadgeTextPosition;
  projectionConfig: ProjectionConfig | undefined;
  profileContent: ProfileContent | undefined;
  separatorConfig: SeparatorConfig | undefined;
}
interface ProfileContent {
  useContent: boolean;
  iconList: IconConfig[];
  numberConfig: NumberConfig | undefined;
  labelConfig: LabelConfig | undefined;
}
interface ProjectionConfig {
  useProjection: boolean;
  icon: ImageModel | undefined;
}
interface SeparatorConfig {
  color: string;
}
interface StretchableBackgroundImage {
  image: ImageModel | undefined;
  flexSettings: string[];
}
interface StringBadge {
  displayType: BadgeDisplayType;
  str: string;
}
interface SubscribeBadge {
  originImg: ImageModel | undefined;
  previewImg: ImageModel | undefined;
  isCustomized: boolean;
}
interface SubscribeInfo {
  qualification: boolean;
  isSubscribe: boolean;
  badge: SubscribeBadge | undefined;
  enableSubscription: boolean;
  subscriberCount: number;
  isInGracePeriod: boolean;
  isSubscribedToAnchor: boolean;
  timerDetail: TimerDetail | undefined;
  userGiftSubAuth: boolean;
  anchorGiftSubAuth: boolean;
  status: UserSubscribeInfoPayStatus;
  subEndTime: string;
  packageId: string;
  solRoomDisplayText: string;
  isSolEligible: boolean;
  subSplitStatus: SubSplitStatus | undefined;
}
interface TextBadge {
  displayType: BadgeDisplayType;
  key: string;
  defaultPattern: string;
  pieces: string[];
}
declare const ArrowConfig: MessageFns$50<ArrowConfig>;
declare const BadgeStruct: MessageFns$50<BadgeStruct>;
declare const BadgeText: MessageFns$50<BadgeText>;
declare const CombineBadgeBackground: MessageFns$50<CombineBadgeBackground>;
declare const CombineBadgeStruct: MessageFns$50<CombineBadgeStruct>;
declare const ComboBadgeInfo: MessageFns$50<ComboBadgeInfo>;
declare const CreatorScoreDisplayInfo: MessageFns$50<CreatorScoreDisplayInfo>;
declare const CreatorScoreLabelInfo: MessageFns$50<CreatorScoreLabelInfo>;
declare const CreatorScoreProfile: MessageFns$50<CreatorScoreProfile>;
declare const CreatorScoreProfile_ScoreInfoExtraEntry: MessageFns$50<CreatorScoreProfile_ScoreInfoExtraEntry>;
declare const EnigmaInfo: MessageFns$50<EnigmaInfo>;
declare const FansClubInfo: MessageFns$50<FansClubInfo>;
declare const FollowInfo: MessageFns$50<FollowInfo>;
declare const FontStyle: MessageFns$50<FontStyle>;
declare const IconConfig: MessageFns$50<IconConfig>;
declare const ImageBadge: MessageFns$50<ImageBadge>;
declare const LabelConfig: MessageFns$50<LabelConfig>;
declare const NumberConfig: MessageFns$50<NumberConfig>;
declare const OwnRoom: MessageFns$50<OwnRoom>;
declare const PaddingInfo: MessageFns$50<PaddingInfo>;
declare const PopUpInfo: MessageFns$50<PopUpInfo>;
declare const PrivilegeLogExtra: MessageFns$50<PrivilegeLogExtra>;
declare const ProfileCardPanel: MessageFns$50<ProfileCardPanel>;
declare const ProfileContent: MessageFns$50<ProfileContent>;
declare const ProjectionConfig: MessageFns$50<ProjectionConfig>;
declare const SeparatorConfig: MessageFns$50<SeparatorConfig>;
declare const StretchableBackgroundImage: MessageFns$50<StretchableBackgroundImage>;
declare const StringBadge: MessageFns$50<StringBadge>;
declare const SubscribeBadge: MessageFns$50<SubscribeBadge>;
declare const SubscribeInfo: MessageFns$50<SubscribeInfo>;
declare const TextBadge: MessageFns$50<TextBadge>;
interface MessageFns$50<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/shared/messages.d.ts
interface AuthenticationInfo {
  customVerify: string;
  enterpriseVerifyReason: string;
  authenticationBadge: ImageModel | undefined;
}
interface EnhancementText {
  type: number;
  placeholderInfo: PlaceholderInfo[];
}
interface EnhancementTextInfo {
  enhancementTexts: EnhancementText[];
}
interface PlaceholderInfo {
  placeholder: string;
  value: string;
}
interface ShopLabelImage {
  height: number;
  width: number;
  minetype: string;
  thumbUri: string;
  thumbUriList: string[];
  uri: string;
  urlList: string[];
  color: string;
}
interface UserInfo$2 {
  userId: string;
  nickName: string;
  avatarThumb: ImageModel | undefined;
}
declare const AuthenticationInfo: MessageFns$49<AuthenticationInfo>;
declare const EnhancementText: MessageFns$49<EnhancementText>;
declare const EnhancementTextInfo: MessageFns$49<EnhancementTextInfo>;
declare const PlaceholderInfo: MessageFns$49<PlaceholderInfo>;
declare const ShopLabelImage: MessageFns$49<ShopLabelImage>;
declare const UserInfo$2: MessageFns$49<UserInfo$2>;
interface MessageFns$49<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/message_proto.d.ts
interface DisplayControl {
  priority: number;
  duration: string;
  targetGroupShowRst: {
    [key: number]: ShowResult;
  };
  horizontalTriggerType: DisplayControlHorizontalOnclickTriggerType;
}
interface DisplayControl_TargetGroupShowRstEntry {
  key: number;
  value: ShowResult | undefined;
}
interface EcommerceEntrance {
  entranceType: UserEcommerceEntranceEntranceType;
  creatorType: UserEcommerceEntranceCreatorType;
  schema: string;
  shopEntranceInfo: ShopEntranceInfo | undefined;
  showcaseEntranceInfo: ShowcaseEntranceInfo | undefined;
  viewVersion: UserEcommerceEntranceViewVersion;
}
interface PerceptionFeedbackOption {
  id: string;
  contentKey: string;
}
interface RankUserEnigmaInfo {
  isEnigmaMaskOn: boolean;
}
interface SellingPoint {
  showText: string;
  sellingPointType: UserEcommerceEntranceSellingPointLiveSellingPointType;
}
interface ShopEntranceInfo {
  shopId: string;
  shopName: string;
  shopRating: string;
  storeLabel: StoreLabel | undefined;
  formatSoldCount: string;
  soldCount: string;
  expRatePercentile: number;
  expRateTopDisplay: string;
  rateDisplayStyle: number;
  showRateNotApplicable: boolean;
  sellingPoint: SellingPoint[];
}
interface ShowResult {
  banned: boolean;
}
interface ShowcaseEntranceInfo {
  formatSoldCount: string;
  soldCount: string;
  showcaseName: string;
  sellingPoint: SellingPoint[];
  creatorScoreProfile: CreatorScoreProfile | undefined;
}
interface StoreIdentityLabel {
  labelType: UserEcommerceEntranceShopEntranceInfoStoreLabelShopIdentityLabelType;
  identityLabelText: string;
  identityLogoLight: ShopLabelImage | undefined;
  identityLogoDark: ShopLabelImage | undefined;
  identityLabelBgColorLight: string;
  identityLabelBgColorDark: string;
  identityLabelTextColorLight: string;
  identityLabelTextColorDark: string;
  shopExplanationPageSchema: string;
  shopIdentityLabelKey: string;
}
interface StoreLabel {
  officialLabel: StoreOfficialLabel | undefined;
  isBytemall: boolean;
  shopIdentityLabel: StoreIdentityLabel | undefined;
}
interface StoreOfficialLabel {
  labelImageLight: ShopLabelImage | undefined;
  labelImageDark: ShopLabelImage | undefined;
  labelType: UserEcommerceEntranceShopEntranceInfoStoreLabelStoreBrandLabelType;
  labelTypeStr: string;
}
declare const DisplayControl: MessageFns$48<DisplayControl>;
declare const DisplayControl_TargetGroupShowRstEntry: MessageFns$48<DisplayControl_TargetGroupShowRstEntry>;
declare const EcommerceEntrance: MessageFns$48<EcommerceEntrance>;
declare const PerceptionFeedbackOption: MessageFns$48<PerceptionFeedbackOption>;
declare const RankUserEnigmaInfo: MessageFns$48<RankUserEnigmaInfo>;
declare const SellingPoint: MessageFns$48<SellingPoint>;
declare const ShopEntranceInfo: MessageFns$48<ShopEntranceInfo>;
declare const ShowResult: MessageFns$48<ShowResult>;
declare const ShowcaseEntranceInfo: MessageFns$48<ShowcaseEntranceInfo>;
declare const StoreIdentityLabel: MessageFns$48<StoreIdentityLabel>;
declare const StoreLabel: MessageFns$48<StoreLabel>;
declare const StoreOfficialLabel: MessageFns$48<StoreOfficialLabel>;
interface MessageFns$48<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/gift/assets_face_recognition_meta.d.ts
interface FaceRecognitionMeta {
  version: string;
  requirement: string[];
  modelNames: string;
  sdkExtra: string;
}
declare const FaceRecognitionMeta: MessageFns$47<FaceRecognitionMeta>;
interface MessageFns$47<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/goal.d.ts
interface GoalComparison {
  coinsIncr: string;
  contributorIncr: string;
}
interface GoalPinInfo {
  pin: boolean;
  unpin: boolean;
  pinEndTime: string;
  subGoalId: string;
  subGoalIdStr: string;
}
interface GoalReward {
  rewardContent: string;
  topN: number;
  hasSticker: boolean;
  auditStatus: number;
}
interface GoalStats {
  totalCoins: string;
  totalContributor: string;
  comparison: GoalComparison | undefined;
  totalNewFans: string;
}
interface SubGoalContribution {
  id: string;
  contributionCount: string;
}
interface SubGoalPinInfo {
  pinStartTime: string;
  pinEndTime: string;
  pinReadyTime: string;
}
declare const GoalComparison: MessageFns$46<GoalComparison>;
declare const GoalPinInfo: MessageFns$46<GoalPinInfo>;
declare const GoalReward: MessageFns$46<GoalReward>;
declare const GoalStats: MessageFns$46<GoalStats>;
declare const SubGoalContribution: MessageFns$46<SubGoalContribution>;
declare const SubGoalPinInfo: MessageFns$46<SubGoalPinInfo>;
interface MessageFns$46<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/gift/model.d.ts
interface AssetBase {
  url: ImageModel | undefined;
  md5: string;
  faceMeta: FaceRecognitionMeta | undefined;
}
interface AssetExtra {
  effectStarlingKey: string;
}
interface AuditInfo {
  violationId: string;
  taskType: number;
}
interface BEFViewRenderSize {
  w: number;
  h: number;
}
interface DistributionStrategy {
  assetBase: AssetBase | undefined;
  resourceType: number;
}
interface DynamicRestriction {
  scenes: SceneRestriction | undefined;
  receivers: ReceiverRestriction[];
}
interface FlyingMicResources {
  pathImage: ImageModel | undefined;
  micImage: ImageModel | undefined;
  transitionConfigs: TransitionConfig[];
}
interface GiftColorInfo {
  colorId: string;
  colorName: string;
  colorValues: string[];
  colorImage: ImageModel | undefined;
  giftImage: ImageModel | undefined;
  colorEffectId: string;
  isDefault: boolean;
  colorImageSize: string;
  colorReason: string[];
  colorNameEnglish: string;
  giftDescribe: string;
}
interface GiftEffectCrossScreenStickerSpec {
  singleActionAssetIds: {
    [key: string]: number;
  };
  actionAssetIds: {
    [key: string]: number;
  };
  reactionAssetIds: {
    [key: string]: number;
  };
}
interface GiftEffectCrossScreenStickerSpec_SingleActionAssetIdsEntry {
  key: string;
  value: number;
}
interface GiftEffectCrossScreenStickerSpec_ActionAssetIdsEntry {
  key: string;
  value: number;
}
interface GiftEffectCrossScreenStickerSpec_ReactionAssetIdsEntry {
  key: string;
  value: number;
}
interface GiftEffectLynxSpec {
  assetIds: string[];
}
interface GiftEffectPrefabSpec {
  templateAssetId: string;
  prefabAssetIds: string[];
}
interface GiftEffectSerialSpec {
  serialAssetIds: string[];
}
interface GiftEffectSpecs {
  crossScreenSticker: GiftEffectCrossScreenStickerSpec | undefined;
  lynx: GiftEffectLynxSpec | undefined;
  prefab: GiftEffectPrefabSpec | undefined;
  serialSpec: GiftEffectSerialSpec | undefined;
  streamEffectSpec: GiftEffectStreamSpec | undefined;
}
interface GiftEffectStreamSpec {
  basicAssetId: string;
  extraAssetIds: string[];
}
interface GiftPanelBeaconBubble {
  lynxUrl: string;
  lynxExtra: string;
  type: GiftPanelBeaconBubbleType;
}
interface GiftResource {
  id: string;
  image: ImageModel | undefined;
  effectId: string;
}
interface LiveStreamGoal {
  id: string;
  type: number;
  status: number;
  subGoals: LiveStreamSubGoal[];
  description: string;
  auditStatus: number;
  cycleType: number;
  startTime: string;
  expireTime: string;
  realFinishTime: string;
  contributors: LiveStreamGoalContributor[];
  contributorsLength: number;
  idStr: string;
  auditDescription: string;
  stats: GoalStats | undefined;
  goalExtraInfo: string;
  mode: number;
  auditInfo: AuditInfo | undefined;
  challengeType: string;
  isUneditable: boolean;
  goalReward: GoalReward | undefined;
  createSource: number;
}
interface LiveStreamGoalContributor {
  userId: string;
  avatar: ImageModel | undefined;
  displayId: string;
  score: string;
  userIdStr: string;
  inRoom: boolean;
  isFriend: boolean;
  followByOwner: boolean;
  isFistContribute: boolean;
  subGoalContributions: SubGoalContribution[];
  enigmaInfo: EnigmaInfo | undefined;
}
interface LiveStreamGoalIndicator {
  key: string;
  op: number;
}
interface LiveStreamSubGoal {
  type: number;
  id: string;
  progress: string;
  target: string;
  gift: LiveStreamSubGoalGift | undefined;
  idStr: string;
  pinInfo: SubGoalPinInfo | undefined;
  source: number;
  recommendedText: string;
  recommendedHeader: string;
}
interface LiveStreamSubGoalGift {
  name: string;
  icon: ImageModel | undefined;
  diamondCount: string;
  type: number;
}
interface LokiExtraContent {
  giftType: string;
  giftDuration: string;
  needScreenShot: boolean;
  shouldMultiFrame: boolean;
  viewOverlay: string;
  befViewRenderSize: BEFViewRenderSize | undefined;
  befViewRenderFps: number;
  befViewFitMode: number;
  modelNames: string;
  requirements: string[];
}
interface LynxGiftExtra {
  id: string;
  code: string;
  type: string;
  params: string[];
  extra: string;
}
interface MatchInfo {
  critical: string;
  effectCardInUse: boolean;
  multiplierType: MatchInfoMultiplierType;
  multiplierValue: string;
}
interface PrefabBundle {
  prefabEffectIds: string[];
}
interface ReceiverRestriction {
  userId: string;
  hiddenGids: string[];
}
interface SceneRestriction {
  normalHiddenGids: string[];
  matchHiddenGids: string[];
  cohostHiddenGids: string[];
  multiguestHiddenGids: string[];
}
interface SecondaryEffectInfo {
  effectIds: string[];
  builtinStrings: string[];
  minuteGameGameplayId: string;
}
interface TransitionConfig {
  configId: string;
  resourceImage: ImageModel | undefined;
}
declare const AssetBase: MessageFns$45<AssetBase>;
declare const AssetExtra: MessageFns$45<AssetExtra>;
declare const AuditInfo: MessageFns$45<AuditInfo>;
declare const BEFViewRenderSize: MessageFns$45<BEFViewRenderSize>;
declare const DistributionStrategy: MessageFns$45<DistributionStrategy>;
declare const DynamicRestriction: MessageFns$45<DynamicRestriction>;
declare const FlyingMicResources: MessageFns$45<FlyingMicResources>;
declare const GiftColorInfo: MessageFns$45<GiftColorInfo>;
declare const GiftEffectCrossScreenStickerSpec: MessageFns$45<GiftEffectCrossScreenStickerSpec>;
declare const GiftEffectCrossScreenStickerSpec_SingleActionAssetIdsEntry: MessageFns$45<GiftEffectCrossScreenStickerSpec_SingleActionAssetIdsEntry>;
declare const GiftEffectCrossScreenStickerSpec_ActionAssetIdsEntry: MessageFns$45<GiftEffectCrossScreenStickerSpec_ActionAssetIdsEntry>;
declare const GiftEffectCrossScreenStickerSpec_ReactionAssetIdsEntry: MessageFns$45<GiftEffectCrossScreenStickerSpec_ReactionAssetIdsEntry>;
declare const GiftEffectLynxSpec: MessageFns$45<GiftEffectLynxSpec>;
declare const GiftEffectPrefabSpec: MessageFns$45<GiftEffectPrefabSpec>;
declare const GiftEffectSerialSpec: MessageFns$45<GiftEffectSerialSpec>;
declare const GiftEffectSpecs: MessageFns$45<GiftEffectSpecs>;
declare const GiftEffectStreamSpec: MessageFns$45<GiftEffectStreamSpec>;
declare const GiftPanelBeaconBubble: MessageFns$45<GiftPanelBeaconBubble>;
declare const GiftResource: MessageFns$45<GiftResource>;
declare const LiveStreamGoal: MessageFns$45<LiveStreamGoal>;
declare const LiveStreamGoalContributor: MessageFns$45<LiveStreamGoalContributor>;
declare const LiveStreamGoalIndicator: MessageFns$45<LiveStreamGoalIndicator>;
declare const LiveStreamSubGoal: MessageFns$45<LiveStreamSubGoal>;
declare const LiveStreamSubGoalGift: MessageFns$45<LiveStreamSubGoalGift>;
declare const LokiExtraContent: MessageFns$45<LokiExtraContent>;
declare const LynxGiftExtra: MessageFns$45<LynxGiftExtra>;
declare const MatchInfo: MessageFns$45<MatchInfo>;
declare const PrefabBundle: MessageFns$45<PrefabBundle>;
declare const ReceiverRestriction: MessageFns$45<ReceiverRestriction>;
declare const SceneRestriction: MessageFns$45<SceneRestriction>;
declare const SecondaryEffectInfo: MessageFns$45<SecondaryEffectInfo>;
declare const TransitionConfig: MessageFns$45<TransitionConfig>;
interface MessageFns$45<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/gift/assets.d.ts
interface AssetsModel {
  name: string;
  resourceUri: string;
  resourceUrl: ResourceModel | undefined;
  describe: string;
  id: string;
  resourceType: number;
  md5: string;
  size: string;
  lokiContent: LokiExtraContent | undefined;
  downloadType: number;
  resourceBytevc1Url: ResourceModel | undefined;
  bytevc1Md5: string;
  videoResourceList: VideoResource[];
  faceRecognitionArchiveMeta: FaceRecognitionMeta | undefined;
  lynxUrlSettingsKey: string;
  downgradeResourceType: number;
  assetExtra: AssetExtra | undefined;
  stickerAssetVariant: number;
  immediateDownload: boolean;
  stickerAssetVariantReason: number;
  forceUseImOrRespAsset: boolean;
  distributionStrategy: DistributionStrategy[];
}
interface ResourceModel {
  urlList: string[];
  uri: string;
}
interface VideoResource {
  videoTypeName: string;
  videoUrl: ResourceModel | undefined;
  videoMd5: string;
}
declare const AssetsModel: MessageFns$44<AssetsModel>;
declare const ResourceModel: MessageFns$44<ResourceModel>;
declare const VideoResource: MessageFns$44<VideoResource>;
interface MessageFns$44<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/messages.d.ts
interface ActivityRewardInfo {
  badge: ImageModel | undefined;
  storytag: ImageModel | undefined;
}
interface AnchorInfo {
  level: string;
}
interface AnchorLevel {
  level: number;
  experience: string;
  lowestExperienceThisLevel: string;
  highestExperienceThisLevel: string;
  taskStartExperience: string;
  taskStartTime: string;
  taskDecreaseExperience: string;
  taskTargetExperience: string;
  taskEndTime: string;
  profileDialogBg: ImageModel | undefined;
  profileDialogBgBack: ImageModel | undefined;
  stageLevel: ImageModel | undefined;
  smallIcon: ImageModel | undefined;
}
interface AudioResource {
  audioUrl: string;
  lyricsUrl: string;
  snippetId: string;
}
interface AuthenticationInfo$1 {
  customVerify: string;
  enterpriseVerifyReason: string;
  authenticationBadge: ImageModel | undefined;
  hasCert: boolean;
}
interface Author {
  videoTotalCount: string;
  videoTotalPlayCount: string;
  videoTotalFavoriteCount: string;
}
interface BatchGiftInfo {
  canBatchSend: boolean;
  availableCounts: string[];
}
interface BorderInfo {
  icon: ImageModel | undefined;
  level: string;
  source: string;
  profileDecorationRibbon: ImageModel | undefined;
  borderPrivilegeLogExtra: PrivilegeLogExtra | undefined;
  profilePrivilegeLogExtra: PrivilegeLogExtra | undefined;
  avatarBackgroundColor: string;
  avatarBackgroundBorderColor: string;
  nameStarlingKey: string;
  descStarlingKey: string;
  name: string;
  description: string;
  isTallerAvatarBackground: boolean;
}
interface ColorGroup {
  groupName: string;
  colorInfos: GiftColorInfo[];
}
interface ColorPickerInfo {
  groups: ColorGroup[];
}
interface CrossScreenEffectInfo {
  singleActionEffectIds: {
    [key: string]: number;
  };
  actionEffectIds: {
    [key: string]: number;
  };
  reactionEffectIds: {
    [key: string]: number;
  };
}
interface CrossScreenEffectInfo_SingleActionEffectIdsEntry {
  key: string;
  value: number;
}
interface CrossScreenEffectInfo_ActionEffectIdsEntry {
  key: string;
  value: number;
}
interface CrossScreenEffectInfo_ReactionEffectIdsEntry {
  key: string;
  value: number;
}
interface FansClubData {
  clubName: string;
  level: number;
  userFansClubStatus: UserFansClubFansClubDataUserFansClubStatus;
  badge: UserBadge | undefined;
  availableGiftIds: string[];
  anchorId: string;
}
interface FansClubMember {
  data: FansClubData | undefined;
  preferData: {
    [key: number]: FansClubData;
  };
}
interface FansClubMember_PreferDataEntry {
  key: number;
  value: FansClubData | undefined;
}
interface GiftBoxInfo {
  capacity: string;
  isPrimaryBox: boolean;
  schemeUrl: string;
  giftInfosInBox: GiftInfoInBox[];
}
interface GiftInfoInBox {
  giftId: string;
  effectId: string;
  colorId: string;
  remainTimes: number;
  asset: AssetsModel | undefined;
}
interface GiftLockInfo {
  lock: boolean;
  lockType: number;
  giftLevel: number;
  highlightEnabled: boolean;
  unlockButtonText: string;
  unlockSchema: string;
}
interface GiftRandomEffectInfo {
  randomGiftPanelBanner: RandomGiftPanelBanner | undefined;
  effectIds: string[];
  hostKey: string;
  audienceKey: string;
  randomGiftBubble: RandomGiftBubble | undefined;
}
interface GiftSeriesInfo {
  seriesName: string;
  giftIds: string[];
  enabled: boolean;
  containerBackground: ImageModel | undefined;
  sendGiftButtonColor: string;
  pointingBackTriColor: string;
  seriesNameColor: string;
  endTimeSec: string;
}
interface GiftSkin {
  giftSkinId: string;
  giftSkinName: string;
  staticImage: ImageModel | undefined;
  animatedImage: ImageModel | undefined;
}
interface GiftSkinToGiftTextsInfo {
  giftSkinId: string;
  giftTextIds: string[];
}
interface GiftSponsorInfo {
  sponsorId: string;
  sponsorCount: string;
  currentCount: string;
  leftCountToSponsor: string;
  canSponsor: boolean;
}
interface GiftText {
  giftTextId: string;
  giftTextName: string;
}
interface GiftsBoxInfo {
  giftsInfoInBox: GiftInfoInBox[];
}
interface GradeIcon {
  icon: ImageModel | undefined;
  iconDiamond: number;
  level: number;
  levelStr: string;
}
interface Hashtag {
  id: string;
  title: string;
  image: ImageModel | undefined;
  namespace: HashtagNamespace;
}
interface LikeEffect {
  version: string;
  effectCnt: string;
  effectIntervalMs: string;
  level: string;
}
interface LiveEventInfo {
  eventId: string;
  startTime: string;
  duration: string;
  title: string;
  description: string;
  hasSubscribed: boolean;
  isPaidEvent: boolean;
  ticketAmount: string;
  payMethod: LiveEventInfoEventPayMethod;
  walletPkgDict: {
    [key: string]: WalletPackage;
  };
  eventUserInfo: EventUserInfo[];
  subscribedCount: string;
  paidEventPreview: PaidEventPreview | undefined;
  walletPackage: WalletPackage | undefined;
  registerType: string;
  periodicSettings: string;
  periodicShows: string;
}
interface LiveEventInfo_WalletPkgDictEntry {
  key: string;
  value: WalletPackage | undefined;
}
interface LynxCrossScreenEffectInfo {
  effectIds: string[];
}
interface MusicGiftInfo {
  artistName: string;
  resource: AudioResource | undefined;
  songId: string;
  moodId: string;
  songName: string;
}
interface RandomGiftBubble {
  displayText: string;
  iconDynamicEffect: ImageModel | undefined;
}
interface RandomGiftPanelBanner {
  bgImage: ImageModel | undefined;
  shadingImage: ImageModel | undefined;
  targetNum: string;
  collectNum: string;
  displayText: string;
  leftIcon: ImageModel | undefined;
  schemaUrl: string;
  bgColorValues: string[];
  round: string;
  bannerPriority: number;
}
interface SchemeInfo {
  schemeGiftType: GiftStructSchemeGiftType;
  schemeUrl: string;
  schemeDescribe: string;
  schemeDescribeColor: string;
}
interface UGGiftStructInfo {
  isUgGift: boolean;
  ugPointsCost: string;
}
interface UserAttr {
  isMuted: boolean;
  isAdmin: boolean;
  isSuperAdmin: boolean;
  muteDuration: string;
  adminPermissions: {
    [key: number]: number;
  };
  hasVotingFunction: boolean;
  isChannelAdmin: boolean;
}
interface UserAttr_AdminPermissionsEntry {
  key: number;
  value: number;
}
interface UserBadge {
  icons: {
    [key: number]: ImageModel;
  };
  title: string;
}
interface UserBadge_IconsEntry {
  key: number;
  value: ImageModel | undefined;
}
interface UserHonor {
  deprecated20: string;
  diamondIcon: ImageModel | undefined;
  name: string;
  icon: ImageModel | undefined;
  nextName: string;
  level: number;
  nextIcon: ImageModel | undefined;
  deprecated23: string;
  deprecated24: string;
  deprecated25: string;
  gradeDescribe: string;
  gradeIconList: GradeIcon[];
  screenChatType: string;
  imIcon: ImageModel | undefined;
  imIconWithLevel: ImageModel | undefined;
  liveIcon: ImageModel | undefined;
  newImIconWithLevel: ImageModel | undefined;
  newLiveIcon: ImageModel | undefined;
  upgradeNeedConsume: string;
  nextPrivileges: string;
  background: ImageModel | undefined;
  backgroundBack: ImageModel | undefined;
  score: string;
  gradeBanner: string;
}
interface VoteUser {
  userId: string;
  nickName: string;
  avatarThumb: ImageModel | undefined;
  voteCount: string;
}
interface WalletPackage {
  iapId: string;
  usdPriceShow: string;
}
declare const ActivityRewardInfo: MessageFns$43<ActivityRewardInfo>;
declare const AnchorInfo: MessageFns$43<AnchorInfo>;
declare const AnchorLevel: MessageFns$43<AnchorLevel>;
declare const AudioResource: MessageFns$43<AudioResource>;
declare const AuthenticationInfo$1: MessageFns$43<AuthenticationInfo$1>;
declare const Author: MessageFns$43<Author>;
declare const BatchGiftInfo: MessageFns$43<BatchGiftInfo>;
declare const BorderInfo: MessageFns$43<BorderInfo>;
declare const ColorGroup: MessageFns$43<ColorGroup>;
declare const ColorPickerInfo: MessageFns$43<ColorPickerInfo>;
declare const CrossScreenEffectInfo: MessageFns$43<CrossScreenEffectInfo>;
declare const CrossScreenEffectInfo_SingleActionEffectIdsEntry: MessageFns$43<CrossScreenEffectInfo_SingleActionEffectIdsEntry>;
declare const CrossScreenEffectInfo_ActionEffectIdsEntry: MessageFns$43<CrossScreenEffectInfo_ActionEffectIdsEntry>;
declare const CrossScreenEffectInfo_ReactionEffectIdsEntry: MessageFns$43<CrossScreenEffectInfo_ReactionEffectIdsEntry>;
declare const FansClubData: MessageFns$43<FansClubData>;
declare const FansClubMember: MessageFns$43<FansClubMember>;
declare const FansClubMember_PreferDataEntry: MessageFns$43<FansClubMember_PreferDataEntry>;
declare const GiftBoxInfo: MessageFns$43<GiftBoxInfo>;
declare const GiftInfoInBox: MessageFns$43<GiftInfoInBox>;
declare const GiftLockInfo: MessageFns$43<GiftLockInfo>;
declare const GiftRandomEffectInfo: MessageFns$43<GiftRandomEffectInfo>;
declare const GiftSeriesInfo: MessageFns$43<GiftSeriesInfo>;
declare const GiftSkin: MessageFns$43<GiftSkin>;
declare const GiftSkinToGiftTextsInfo: MessageFns$43<GiftSkinToGiftTextsInfo>;
declare const GiftSponsorInfo: MessageFns$43<GiftSponsorInfo>;
declare const GiftText: MessageFns$43<GiftText>;
declare const GiftsBoxInfo: MessageFns$43<GiftsBoxInfo>;
declare const GradeIcon: MessageFns$43<GradeIcon>;
declare const Hashtag: MessageFns$43<Hashtag>;
declare const LikeEffect: MessageFns$43<LikeEffect>;
declare const LiveEventInfo: MessageFns$43<LiveEventInfo>;
declare const LiveEventInfo_WalletPkgDictEntry: MessageFns$43<LiveEventInfo_WalletPkgDictEntry>;
declare const LynxCrossScreenEffectInfo: MessageFns$43<LynxCrossScreenEffectInfo>;
declare const MusicGiftInfo: MessageFns$43<MusicGiftInfo>;
declare const RandomGiftBubble: MessageFns$43<RandomGiftBubble>;
declare const RandomGiftPanelBanner: MessageFns$43<RandomGiftPanelBanner>;
declare const SchemeInfo: MessageFns$43<SchemeInfo>;
declare const UGGiftStructInfo: MessageFns$43<UGGiftStructInfo>;
declare const UserAttr: MessageFns$43<UserAttr>;
declare const UserAttr_AdminPermissionsEntry: MessageFns$43<UserAttr_AdminPermissionsEntry>;
declare const UserBadge: MessageFns$43<UserBadge>;
declare const UserBadge_IconsEntry: MessageFns$43<UserBadge_IconsEntry>;
declare const UserHonor: MessageFns$43<UserHonor>;
declare const VoteUser: MessageFns$43<VoteUser>;
declare const WalletPackage: MessageFns$43<WalletPackage>;
interface MessageFns$43<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/base/user_2.d.ts
interface User {
  id: string;
  deprecated1: string;
  nickname: string;
  deprecated2: number;
  bioDescription: string;
  deprecated3: number;
  deprecated4: string;
  deprecated5: string;
  avatarThumb: ImageModel | undefined;
  avatarMedium: ImageModel | undefined;
  avatarLarge: ImageModel | undefined;
  verified: boolean;
  deprecated6: number;
  deprecated7: string;
  status: number;
  createTime: string;
  modifyTime: string;
  secret: number;
  shareQrcodeUri: string;
  deprecated8: number;
  badgeImageList: ImageModel[];
  followInfo: FollowInfo | undefined;
  payGrade: UserHonor | undefined;
  fansClub: FansClubMember | undefined;
  border: BorderInfo | undefined;
  specialId: string;
  avatarBorder: ImageModel | undefined;
  medal: ImageModel | undefined;
  realTimeIcons: ImageModel[];
  newRealTimeIcons: ImageModel[];
  topVipNo: number;
  userAttr: UserAttr | undefined;
  ownRoom: OwnRoom | undefined;
  payScore: string;
  ticketCount: string;
  anchorInfo: AnchorInfo | undefined;
  linkMicStats: LinkmicStatus;
  displayId: string;
  withCommercePermission: boolean;
  withFusionShopEntry: boolean;
  deprecated21: string;
  webcastAnchorLevel: AnchorLevel | undefined;
  verifiedContent: string;
  authorStats: Author | undefined;
  topFans: User[];
  secUid: string;
  userRole: number;
  deprecated9: Buffer;
  activityReward: ActivityRewardInfo | undefined;
  deprecated10: Buffer;
  deprecated11: Buffer;
  personalCard: ImageModel | undefined;
  authenticationInfo: AuthenticationInfo$1 | undefined;
  deprecated12: number;
  deprecated13: number;
  deprecated14: Buffer;
  mediaBadgeImageList: ImageModel[];
  deprecated15: number;
  userVipInfo: Buffer;
  commerceWebcastConfigIds: string[];
  borderList: BorderInfo[];
  comboBadgeInfo: ComboBadgeInfo | undefined;
  subscribeInfo: SubscribeInfo | undefined;
  badgeList: BadgeStruct[];
  mintTypeLabel: string[];
  fansClubInfo: FansClubInfo | undefined;
  deprecated19: boolean;
  allowFindByContacts: boolean;
  allowOthersDownloadVideo: boolean;
  allowOthersDownloadWhenSharingVideo: boolean;
  allowShareShowProfile: boolean;
  allowShowInGossip: boolean;
  allowShowMyAction: boolean;
  allowStrangeComment: boolean;
  allowUnfollowerComment: boolean;
  allowUseLinkmic: boolean;
  anchorLevel: AnchorLevel | undefined;
  avatarJpg: ImageModel | undefined;
  bgImgUrl: string;
  deprecated18: string;
  deprecated16: boolean;
  blockStatus: number;
  commentRestrict: number;
  constellation: string;
  disableIchat: number;
  enableIchatImg: string;
  exp: number;
  fanTicketCount: string;
  foldStrangerChat: boolean;
  followStatus: string;
  deprecated28: boolean;
  deprecated29: string;
  ichatRestrictType: number;
  idStr: string;
  isFollower: boolean;
  isFollowing: boolean;
  needProfileGuide: boolean;
  payScores: string;
  pushCommentStatus: boolean;
  pushDigg: boolean;
  pushFollow: boolean;
  pushFriendAction: boolean;
  pushIchat: boolean;
  pushStatus: boolean;
  pushVideoPost: boolean;
  pushVideoRecommend: boolean;
  stats: Buffer;
  deprecated17: boolean;
  verifiedReason: string;
  withCarManagementPermission: boolean;
  upcomingEventList: LiveEventInfo[];
  scmLabel: string;
  ecommerceEntrance: EcommerceEntrance | undefined;
  isBlock: boolean;
  isSubscribe: boolean;
  isAnchorMarked: boolean;
  enigmaInfo: EnigmaInfo | undefined;
}
declare const User: MessageFns$42<User>;
interface MessageFns$42<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/chatroom/api_emote_upload_info.d.ts
interface EmoteUploadInfo {
  userId: string;
  emoteUploadSource: UserEmoteUploadSource;
  userInfo: User | undefined;
  userIdStr: string;
}
declare const EmoteUploadInfo: MessageFns$41<EmoteUploadInfo>;
interface MessageFns$41<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/chatroom/model/interact_messages.d.ts
interface ActivityBadgeInfo {
  badgeText: LinkmicDisplayText | undefined;
  badgeTextDark: LinkmicDisplayText | undefined;
  backgroundColor: string;
  backgroundColorDark: string;
  eventTrace: {
    [key: string]: string;
  };
}
interface ActivityBadgeInfo_EventTraceEntry {
  key: string;
  value: string;
}
interface BattleGamePlayContent {
  battleId: string;
  groupChannelId: string;
  teamMember: TeamUser[];
  sourceType: string;
  inviteType: number;
}
interface BattleGamePlayContentUserInfo {
  userId: string;
  roomId: string;
  invitationRole: number;
}
interface BattleUserSettings {
  isTurnOn: boolean;
  acceptNotFollowerInvite: boolean;
  allowGiftToOtherAnchors: boolean;
}
interface CohostABInfo {
  liveMatchButtonOpt: boolean;
  isCohostMultiguest: boolean;
  isMatchPlaybookEnabled: boolean;
  isCohostDuringMultiguestEnabled: boolean;
  isMatchPlaybookOptimisationEnabled: boolean;
}
interface CohostABTest {
  abTestType: CohostABTestType;
  group: string;
}
interface CohostABTestList {
  abTestList: CohostABTest[];
}
interface CohostABTestSetting {
  key: string;
  value: CohostABTestList | undefined;
}
interface CohostListUser {
  userId: string;
  nickName: string;
  avatarThumb: ImageModel | undefined;
  linkedTime: string;
  playType: LinkmicPlayType;
  roomId: string;
  linkmicUserStatus: LinkmicUserStatus;
  linkRemainingTime: string;
  permissionType: CoHostPermissoinType;
  displayId: string;
  followStatus: string;
  isLowVersion: boolean;
  rivalUserId: string;
  rivalRoomId: string;
  isInitiator: boolean;
  linkmicIdStr: string;
  bestTeammateUid: string;
  hasTopicPerm: boolean;
  innerChannelId: string;
}
interface CohostTopic {
  id: string;
  titleKey: string;
  titleText: string;
  liked: boolean;
  totalHeat: string;
  totalRivals: string;
  rivalsAvatar: ImageModel[];
}
interface GamePlayContent {
  battleGameplayContent: BattleGamePlayContent | undefined;
}
interface GiftGalleryBadgeInfo {
  leagueInfo: GiftGalleryBadgeSection | undefined;
  galleryInfo: GiftGalleryBadgeSection | undefined;
  backgroundColor: string;
  separatorColor: string;
  darkModeBackgroundColor: string;
  leagueName: string;
  schema: string;
}
interface GiftGalleryBadgeSection {
  icon: ImageModel | undefined;
  displayText: LinkMicGiftGalleryDisplayText | undefined;
  shouldShow: boolean;
  darkModeIcon: ImageModel | undefined;
}
interface LinkMicGiftGalleryDisplayText {
  content: string;
  color: string;
  darkModeColor: string;
}
interface LinkmicDisplayText {
  color: string;
  key: string;
  defaultPattern: string;
  pieces: LinkmicDisplayTextPieces[];
}
interface LinkmicDisplayTextPieces {
  stringPiece: string;
}
interface LinkmicShareRevenueSettingStruct {
  shareRevenueSettingVersionCode: string;
  linkmicShareRevenueSetting: number;
  linkmicShareRevenueSettingRatio: number;
  enableSettingRatio: boolean;
}
interface OptPairInfo {
  mappingId: string;
  expectedTimeSec: string;
  optPairStatus: OptPairStatus;
  optPairType: string;
  teamInfo: TeamInfo[];
}
interface RandomMatchContent {
  matchId: string;
  sourceType: string;
  pairedTime: string;
  pairedGroupList: UserGroup[];
  matchedPreferenceTag: number;
}
interface RandomMatchContentUserInfo {
  userId: string;
  roomId: string;
  invitationRoleType: number;
  avatarThumb: ImageModel | undefined;
  nickname: string;
}
interface RivalsGameTag {
  tagId: string;
  tagDisplayText: string;
  gapTimeTag: string;
}
interface SecondDegreeRelationContent {
  relatedUsers: UserInfo$2[];
  totalRelatedUserCnt: string;
}
interface SimilarInterestContent {
  contentId: string;
  displayText: string;
}
interface SubtitleSettings {
  hasRight: number;
  temporaryBan: number;
  enable: number;
  expireDate: string;
  targetLanguage: string;
  labelText: string;
}
interface TagV2 {
  tagClassification: TagV2TagClassification;
  tagType: number;
  tagValue: string;
  starlingKey: string;
  secondDegreeRelationContent: SecondDegreeRelationContent | undefined;
  cohostHistoryDay: string;
  similarInterestContent: SimilarInterestContent | undefined;
}
interface TeamInfo {
  teamId: string;
  userId: string[];
}
interface TeamUser {
  teamId: string;
  userId: string[];
  userInfoList: BattleGamePlayContentUserInfo[];
}
interface TopHostInfo {
  rankType: string;
  topIndex: string;
}
interface UserGroup {
  userInfo: RandomMatchContentUserInfo[];
}
interface UserSuggestionInfo {
  voteCount: string;
  voterInfoList: UserInfo$2[];
  detailPageLynx: string;
}
interface VirtualWaitingUser {
  sendUserId: string;
  sendTimestamp: string;
  avatars: ImageModel[];
}
declare const ActivityBadgeInfo: MessageFns$40<ActivityBadgeInfo>;
declare const ActivityBadgeInfo_EventTraceEntry: MessageFns$40<ActivityBadgeInfo_EventTraceEntry>;
declare const BattleGamePlayContent: MessageFns$40<BattleGamePlayContent>;
declare const BattleGamePlayContentUserInfo: MessageFns$40<BattleGamePlayContentUserInfo>;
declare const BattleUserSettings: MessageFns$40<BattleUserSettings>;
declare const CohostABInfo: MessageFns$40<CohostABInfo>;
declare const CohostABTest: MessageFns$40<CohostABTest>;
declare const CohostABTestList: MessageFns$40<CohostABTestList>;
declare const CohostABTestSetting: MessageFns$40<CohostABTestSetting>;
declare const CohostListUser: MessageFns$40<CohostListUser>;
declare const CohostTopic: MessageFns$40<CohostTopic>;
declare const GamePlayContent: MessageFns$40<GamePlayContent>;
declare const GiftGalleryBadgeInfo: MessageFns$40<GiftGalleryBadgeInfo>;
declare const GiftGalleryBadgeSection: MessageFns$40<GiftGalleryBadgeSection>;
declare const LinkMicGiftGalleryDisplayText: MessageFns$40<LinkMicGiftGalleryDisplayText>;
declare const LinkmicDisplayText: MessageFns$40<LinkmicDisplayText>;
declare const LinkmicDisplayTextPieces: MessageFns$40<LinkmicDisplayTextPieces>;
declare const LinkmicShareRevenueSettingStruct: MessageFns$40<LinkmicShareRevenueSettingStruct>;
declare const OptPairInfo: MessageFns$40<OptPairInfo>;
declare const RandomMatchContent: MessageFns$40<RandomMatchContent>;
declare const RandomMatchContentUserInfo: MessageFns$40<RandomMatchContentUserInfo>;
declare const RivalsGameTag: MessageFns$40<RivalsGameTag>;
declare const SecondDegreeRelationContent: MessageFns$40<SecondDegreeRelationContent>;
declare const SimilarInterestContent: MessageFns$40<SimilarInterestContent>;
declare const SubtitleSettings: MessageFns$40<SubtitleSettings>;
declare const TagV2: MessageFns$40<TagV2>;
declare const TeamInfo: MessageFns$40<TeamInfo>;
declare const TeamUser: MessageFns$40<TeamUser>;
declare const TopHostInfo: MessageFns$40<TopHostInfo>;
declare const UserGroup: MessageFns$40<UserGroup>;
declare const UserSuggestionInfo: MessageFns$40<UserSuggestionInfo>;
declare const VirtualWaitingUser: MessageFns$40<VirtualWaitingUser>;
interface MessageFns$40<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/chatroom/interact_model.d.ts
interface AnchorLinkmicUserSettings {
  isTurnOn: boolean;
  acceptMultiLinkmic: boolean;
  acceptNotFollowerInvite: boolean;
  allowGiftToOtherAnchors: boolean;
  blockInvitationOfThisLive: boolean;
  receiveFriendMultiHostInvites: boolean;
  receiveFriendMultiHostApplication: boolean;
  blockThisMultiHostInvites: boolean;
  blockThisMultiHostApplication: boolean;
  receiveNotFriendMultiHostInvites: boolean;
  receiveNotFriendMultiHostApplication: boolean;
  allowLiveNoticeOfFriends: boolean;
  allowFriendInvites: boolean;
  allowSuggestedInvites: boolean;
  allowFriendInvitesWhenOfflive: boolean;
  allowUserCohostSuggestions: boolean;
  allowMissedInvitationNotice: boolean;
  allowLiveNoticeOfSuggested: boolean;
  allowGuestRequestDuringCohost: boolean;
  allowGuestApplyDuringCohost: boolean;
  subtitleSetting: SubtitleSettings | undefined;
}
interface BattleInfo {
  infoType: RivalExtraInfoBattleInfoBattleInfoType;
  value: string;
}
interface LinkerInfo {
  linkedUsers: UserInfo$2[];
  inQuickPairing: boolean;
  linkedGuestUsers: UserInfo$2[];
}
interface OffliveInviteInfo {
  inviterTimestamp: string;
}
interface ReserveInfo {
  reservationId: string;
  replyStatus: ReserveReplyStatus;
  bubbleTip: string;
  responseTime: string;
  isReservationSender: boolean;
  createdTimestamp: string;
  viewed: boolean;
}
interface RivalExtraInfo {
  text: string;
  textType: RivalExtraInfoTextType;
  label: string;
  anchorLayer: RivalExtraInfoAnchorLayer;
  linkerInfo: LinkerInfo | undefined;
  linkmicUserSettings: AnchorLinkmicUserSettings | undefined;
  battleUserSettings: BattleUserSettings | undefined;
  inviteBlockReason: RivalExtraInfoInviteBlockReason;
  showPlayType: LinkmicPlayType;
  topHostInfo: TopHostInfo | undefined;
  tag: Tag$1 | undefined;
  reserveInfo: ReserveInfo | undefined;
  detailBlockReason: DetailBlockReason;
  optPairInfo: OptPairInfo | undefined;
  tagV2: TagV2 | undefined;
  eoyLevel: string;
  battleInfo: BattleInfo | undefined;
  cohostLayoutMode: CohostLayoutMode;
  gameTag: RivalsGameTag | undefined;
  giftGalleryBadgeInfo: GiftGalleryBadgeInfo | undefined;
  offliveInviteInfo: OffliveInviteInfo | undefined;
  userSuggestionInfo: UserSuggestionInfo | undefined;
  friendSuggestionInfo: UserSuggestionInfo | undefined;
  activityBadgeInfo: ActivityBadgeInfo | undefined;
}
interface Tag$1 {
  tagType: number;
  tagValue: string;
  tagText: string;
}
declare const AnchorLinkmicUserSettings: MessageFns$39<AnchorLinkmicUserSettings>;
declare const BattleInfo: MessageFns$39<BattleInfo>;
declare const LinkerInfo: MessageFns$39<LinkerInfo>;
declare const OffliveInviteInfo: MessageFns$39<OffliveInviteInfo>;
declare const ReserveInfo: MessageFns$39<ReserveInfo>;
declare const RivalExtraInfo: MessageFns$39<RivalExtraInfo>;
declare const Tag$1: MessageFns$39<Tag$1>;
interface MessageFns$39<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/message/linkcore_link_position.d.ts
interface LinkPosition {
  position: number;
  opt: number;
}
declare const LinkPosition: MessageFns$38<LinkPosition>;
interface MessageFns$38<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/message/linkcore_mic_position_data.d.ts
interface MicPositionData {
  type: number;
  link: LinkPosition | undefined;
}
declare const MicPositionData: MessageFns$37<MicPositionData>;
interface MessageFns$37<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/message/linkcore_player.d.ts
interface Player {
  roomId: string;
  userId: string;
}
declare const Player: MessageFns$36<Player>;
interface MessageFns$36<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/linkmic/common.d.ts
declare enum AgreeStatus {
  AGREE_UNKNOWN = 0,
  AGREE = 1,
  REJECT = 2,
  UNRECOGNIZED = -1
}
declare enum ContentPositionType {
  UNKNOWN = 0,
  STREAM = 1,
  LIVE_STUDIO_STREAM_PORTRAIT = 2,
  LIVE_STUDIO_STREAM_LANDSCAPE = 3,
  UNRECOGNIZED = -1
}
declare enum GroupStatus {
  GROUP_STATUS_UNKNOWN = 0,
  WAITING = 1,
  LINKED = 3,
  UNRECOGNIZED = -1
}
declare enum JoinType {
  JOIN_TYPE_UNKNOWN = 0,
  CHANNEL_APPLY = 1,
  CHANNEL_INVITE = 2,
  GROUP_APPLY = 100,
  GROUP_APPLY_FOLLOW = 101,
  GROUP_INVITE = 102,
  GROUP_INVITE_FOLLOW = 103,
  GROUP_OWNER_JOIN = 104,
  UNRECOGNIZED = -1
}
declare enum KickoutReason {
  KICK_OUT_REASON_UNKNOWN = 0,
  KICK_OUT_REASON_FIRST_FRAME_TIME_OUT = 1,
  KICK_OUT_REASON_BY_HOST = 2,
  KICK_OUT_REASON_RTC_LOST_CONNECTION = 3,
  KICK_OUT_REASON_BY_PUNISH = 4,
  KICK_OUT_REASON_BY_ADMIN = 5,
  KICK_OUT_REASON_HOST_REMOVE_ALL_GUESTS = 6,
  KICK_OUT_REASON_ENIGMA_EXPIRE = 7,
  UNRECOGNIZED = -1
}
declare enum LayoutEnlargeStatus {
  NONE = 0,
  SINGLE_ENLARGED = 1,
  DOUBLE_ENLARGED = 2,
  UNRECOGNIZED = -1
}
declare enum LayoutStyle {
  UNDEFINED = 0,
  OVERLAPPING_FLOW = 1,
  OVERLAPPING_FIXED = 2,
  GRID_FLOW = 3,
  GRID_FIXED = 4,
  UNRECOGNIZED = -1
}
declare enum LinkMicUserAdminType {
  UNDEFINED_TYPE = 0,
  MANAGER_TYPE = 1,
  HOST_TYPE = 2,
  UNRECOGNIZED = -1
}
declare enum LinkerMode {
  LINKER_MODE_UNKNOWN = 0,
  INNER = 1,
  CROSS = 2,
  MIXED = 3,
  UNRECOGNIZED = -1
}
declare enum LinkerUserType {
  LINKER_USER_TYPE_UNKNOWN = 0,
  GUEST = 1,
  HOST = 2,
  UNRECOGNIZED = -1
}
declare enum MediaState {
  MEDIA_UNDEFINED = 0,
  MEDIA_NORMAL = 1,
  MEDIA_MUTED = 2,
  MEDIA_UN_MUTE_OCCUPIED = 3,
  MEDIA_MUTED_OCCUPIED = 4,
  UNRECOGNIZED = -1
}
declare enum NetworkState {
  STATE_NETWORK_UNDEFINED = 0,
  STATE_NETWORK_EXCELLENT = 1,
  STATE_NETWORK_GOOD = 2,
  STATE_NETWORK_POOR = 3,
  STATE_NETWORK_BAD = 4,
  STATE_NETWORK_VBAD = 5,
  STATE_NETWORK_DOWN = 6,
  UNRECOGNIZED = -1
}
declare enum OnlineUserState {
  STATE_UNDEFINED = 0,
  STATE_NORMAL = 1,
  STATE_PAUSED = 2,
  UNRECOGNIZED = -1
}
declare enum PosIdentityType {
  IDENTITY_EMPTY_SLOT = 0,
  IDENTITY_RTC_USER_ID = 1,
  IDENTITY_RTC_STREAM_ID = 2,
  IDENTITY_LIVE_USER_ID = 3,
  UNRECOGNIZED = -1
}
declare enum ReplyStatus {
  REPLY_STATUS_UNKNOWN = 0,
  REPLY_STATUS_AGREE = 1,
  REFUSE_PERSONALLY = 2,
  REFUSE_TYPE_NOT_SUPPORT = 3,
  REFUSE_PROCESSING_INVITATION = 4,
  REFUSE_BY_TIME_OUT = 5,
  REFUSE_EXCEPTION = 6,
  REFUSE_SYSTEM_NOT_SUPPORTED = 7,
  REFUSE_SUBTYPE_DIFFERENCE = 8,
  REFUSE_IN_MIC_ROOM = 9,
  REFUSE_NOT_LOAD_PLUGIN = 10,
  REFUSE_IN_MULTI_GUEST = 11,
  REFUSE_PAUSE_LIVE = 12,
  REFUSE_OPEN_CAMERA_DIALOG_SHOWING = 13,
  REFUSE_DRAW_GUESSING = 14,
  REFUSE_RANDOM_MATCHING = 15,
  REFUSE_IN_MATCH_PROCESSING = 16,
  REFUSE_IN_MIC_ROOM_FOR_MULTI_COHOST = 17,
  REFUSE_COHOST_FINISHED = 18,
  REFUSE_NOT_CONNECTED = 19,
  REFUSE_LINKMIC_FULL = 20,
  REFUSE_ARC_INCOMPATIBLE = 21,
  REFUSE_PROCESSING_OTHER_INVITE = 22,
  REFUSE_PROCESSING_OTHER_APPLY = 23,
  REFUSE_IN_ANCHOR_COHOST = 24,
  REFUSE_TOPIC_PAIRING = 25,
  REFUSE_POSITION_CONFLICT = 26,
  REFUSE_CONFLICT_QUICK_COHOST = 27,
  REFUSE_IN_TAKE_STAGE_PROCESSING = 28,
  REFUSE_IN_CATCH_BEANS_PROCESSING = 29,
  REFUSE_IN_VIEWER_WISHES_PROCESSING = 30,
  REFUSE_IN_COHOST_WITH_GUEST = 31,
  UNRECOGNIZED = -1
}
declare enum RtcConnectionState {
  STATE_RTC_UNDEFINED = 0,
  STATE_RTC_NORMAL = 1,
  STATE_RTC_DISCONNECT = 2,
  UNRECOGNIZED = -1
}
declare enum Scene {
  SCENE_UNKNOWN = 0,
  CO_HOST = 2,
  MULTI_LIVE = 4,
  UNRECOGNIZED = -1
}
declare enum SourceType {
  SOURCE_TYPE_UNKNOWN = 0,
  FRIEND_LIST = 1,
  RECOMMEND_LIST = 2,
  RECENT = 3,
  OTHER_FOLLOW = 4,
  QUICK_PAIR = 5,
  ACTIVITY = 6,
  QUICK_RECOMMEND = 7,
  OFFICIAL_CHANNEL = 8,
  BEST_TEAMMATE = 9,
  RESERVATION = 10,
  PAIRING = 11,
  PAIRING_ON_RESERVATION = 12,
  TOPIC_QUICK_PAIR = 13,
  TOPIC_QUICK_RECOMMEND = 14,
  ONLINE_FRIEND_CAPSULE = 15,
  WEEKLY_RANK = 20,
  HOURLY_RANK = 21,
  WEEKLY_RISING = 23,
  WEEKLY_ROOKIE = 24,
  CONNECTION_LIST = 25,
  DAILY_RANK = 26,
  DAILY_RANK_HALL_OF_FAME = 27,
  RESERVATION_BUBBLE = 28,
  PAIRING_BUBBLE = 29,
  LEAGUE_PHASE_ONE = 30,
  LEAGUE_PHASE_TWO = 31,
  LEAGUE_PHASE_THREE = 32,
  DAILY_ROOKIE = 33,
  MAY_KNOW_LIST = 34,
  BANNER = 35,
  FANS_TEAM_RANK = 36,
  SEARCH = 37,
  EOY_RANK_LIST = 38,
  LEAGUE_CAMPAIGN_RANK = 39,
  CREATOR_CLASS_RANK = 40,
  HISTORY = 41,
  QUICK_RECOMMEND_DURING_COHOST = 43,
  GTM_MAINPAGE_1_VN_KING = 44,
  GTM_MAINPAGE_1_VN_KNIGHT = 45,
  GTM_RANK_1_VN_KING = 46,
  GTM_RANK_1_VN_KNIGHT = 47,
  LEAGUE_RECOMMEND_LIST_SEARCH = 48,
  LEAGUE_RECOMMEND_LIST_ACTIVITY_PAGE = 49,
  LEAGUE_MATCH_QUICK_PAIR = 50,
  LEAGUE_MATCH_QUICK_RECOMMEND = 51,
  LEAGUE_MATCH_QUICK_RECOMMEND_DURING_COHOST = 52,
  INVITE_OFF_LIVE_FRIEND = 53,
  AVAILABLE_FRIEND_CAPULE = 54,
  RECOMMENDED_FRIEND_CAPULE = 55,
  USER_SUGGESTED_LIST = 56,
  TEAM_PAIR_QUICK_PAIR = 57,
  TEAM_PAIR_QUICK_RECOMMEND_COHOST_ANCHOR = 58,
  TEAM_PAIR_QUICK_RECOMMEND_SOLO_ANCHOR = 59,
  BIG_EVENT_PLATFORM = 60,
  CCPK_ACTIVITY_PAGE = 61,
  CCPK_QUICK_PAIR = 62,
  CCPK_QUICK_RE_COMMAND = 63,
  UNRECOGNIZED = -1
}
declare enum StateType {
  STATE_INVALID = 0,
  STATE_LAYOUT = 1,
  STATE_ONLINE_USER_STATE = 2,
  STATE_AUDIO_MUTE = 3,
  STATE_VIDEO_MUTE = 4,
  STATE_RTC_CONNECTION = 5,
  STATE_NETWORK = 6,
  STATE_BACKGROUND_IMAGE = 7,
  STATE_SCREEN_ORIENTATION = 8,
  STATE_AVATAR_ID = 9,
  STATE_AUDIO_MUTE_CHANNELS = 10,
  STATE_REQ_BATCH_CHANGE = 100,
  UNRECOGNIZED = -1
}
interface AnchorLayoutSetting {
  latestLayoutStyle: LayoutStyle;
  layoutStyleSettings: AnchorLayoutStyleSetting[];
  panelLayoutTypeSetting: AnchorPanelLayoutTypeSetting[];
}
interface AnchorLayoutStyleSetting {
  layoutStyle: LayoutStyle;
  maxPosition: number;
}
interface AnchorPanelLayoutTypeSetting {
  panelLayoutType: number;
  maxPosition: number;
}
interface AvatarState {
  avatarId: string;
}
interface BackGroundImageState {
  stickerId: string;
}
interface CohostMode {
  isTakeTheStageV2Supported: boolean;
  highestTakeTheStageVersionSupported: string;
}
interface CohostStreamConfig {
  screenShareStreamId: string;
}
interface CohostTypeLayoutExtra {
  isZoomLayout: number;
  offsetY: number;
  scene: number;
  localLayoutOnly: boolean;
  isEnlargeMode: number;
  disableMatchComponent: boolean;
  rematchSpotId: number;
}
interface CohostTypeLayoutNonSeiExtra {}
interface CohostTypeSpotExtra {
  isEnlarged: boolean;
  contentType: number;
  preEnlargeSpotId: number;
}
interface CohostTypeSpotNonSeiExtra {}
interface CohostUserInfo {
  permissionType: string;
  sourceType: SourceType;
  isLowVersion: boolean;
  bestTeammateUid: string;
  hasTopicPerm: boolean;
  streamConfig: CohostStreamConfig | undefined;
  inDifferentInviteTypeControlGroup: boolean;
  cohostMode: CohostMode | undefined;
  nickname: string;
  displayId: string;
  avatarThumb: ImageModel | undefined;
  followStatus: string;
  userIdStr: string;
  isEnigma: boolean;
}
interface ContentPosition {
  contentID: string;
  contentType: ContentPositionType;
  pos: MicPositionData | undefined;
  contentLinkmicID: string;
  startTimeNano: string;
}
interface GroupPlayer {
  channelId: string;
  user: Player | undefined;
}
interface GuestUserInfo {
  userIdStr: string;
  nickname: string;
  displayId: string;
  avatarThumb: ImageModel | undefined;
  roomId: string;
  linkmicIdStr: string;
  isEnigma: boolean;
}
interface LayoutData {
  layout: LayoutState | undefined;
  spotList: SpotInfo[];
  version: string;
  groupChannelId: string;
  uiPos: PosIdentity[];
}
interface LayoutState {
  layoutId: string;
  layoutKey: string;
  multiGuestLayoutExtra: MultiGuestLayoutExtra | undefined;
  multiGuestLayoutNonSeiExtra: MultiGuestLayoutNonSeiExtra | undefined;
  cohostLayoutExtra: CohostTypeLayoutExtra | undefined;
  cohostLayoutNonSeiExtra: CohostTypeLayoutNonSeiExtra | undefined;
}
interface LinkEnvelopeMessagePayload {
  messageType: number;
  resolutionDemandPayload: ResolutionDemandPayload | undefined;
}
interface LinkUserIdentity {
  player: Player | undefined;
  linkMicId: string;
  channelId: string;
}
interface LinkUserState {
  user: Player | undefined;
  linkmicId: string;
  pos: MicPositionData | undefined;
  linkedTimeNano: string;
  onlineUserState: OnlineUserState;
  audioMuted: MediaState;
  videoMuted: MediaState;
  rtcConnection: RtcConnectionState;
  networkState: NetworkState;
  avatar: AvatarState | undefined;
  linkerSessionId: string;
}
interface LinkerMediaChangeOperator {
  userId: string;
  operatorType: LinkMicUserAdminType;
  nickName: string;
  displayId: string;
}
interface MigrationDetails {
  isMigrate: boolean;
  sourceGroupChannelId: string;
  targetGroupChannelId: string;
}
interface MultiGuestLayoutExtra {
  originLayoutStyle: LayoutStyle;
  currentLayoutStyle: LayoutStyle;
  originMaxPosition: number;
  currentMaxPosition: number;
  enlargeStatus: LayoutEnlargeStatus;
  currentPanelLayoutType: number;
  socialGame: SocialGameLayoutExtra | undefined;
}
interface MultiGuestLayoutNonSeiExtra {
  socialGame: SocialGameLayoutNonSeiExtra | undefined;
}
interface MultiGuestSpotExtra {
  isEnlarged: boolean;
  isSingleZoomEnabled: boolean;
  isDoubleZoomEnabled: boolean;
  isSwitchSpotEnabled: boolean;
  spotRank: number;
  contentPositionType: number;
  socialGameUser: SocialGameUserSpotExtra | undefined;
}
interface MultiGuestSpotNonSeiExtra {
  socialGameUser: SocialGameUserSpotNonSeiExtra | undefined;
}
interface PosIdentity {
  type: PosIdentityType;
  value: string;
}
interface PosIdentityExtra {
  contentLinkmicID: string;
}
interface ResolutionDemandPayload {
  action: number;
  widthRatio: number;
  heightRatio: number;
  configId: string;
  layoutKey: string;
  spotId: string;
  canvasWidth: string;
  canvasHeight: string;
  timestampMs: string;
}
interface SocialGameLayoutExtra {
  gameId: number;
  gameJustDanceStatus: number;
  gameSessionId: string;
  gameStartPlayMs: string;
  gameOptionId: string;
  lokiPanelName: string;
  requiredLokiResourceId: string;
  optionalLokiResourceId: string;
}
interface SocialGameLayoutNonSeiExtra {
  justDanceSongTitle: string;
}
interface SocialGameUserSpotExtra {
  gameJustDanceUserStatus: number;
  isEnlarged: boolean;
  isMainContent: boolean;
}
interface SocialGameUserSpotNonSeiExtra {
  gameScore: number;
}
interface SpotInfo {
  spotId: number;
  posIdentity: PosIdentity | undefined;
  multiGuestSpotExtra: MultiGuestSpotExtra | undefined;
  multiGuestSpotNonSeiExtra: MultiGuestSpotNonSeiExtra | undefined;
  cohostSpotExtra: CohostTypeSpotExtra | undefined;
  cohostSpotNonSeiExtra: CohostTypeSpotNonSeiExtra | undefined;
  posIdentityExtra: PosIdentityExtra | undefined;
}
declare const AnchorLayoutSetting: MessageFns$35<AnchorLayoutSetting>;
declare const AnchorLayoutStyleSetting: MessageFns$35<AnchorLayoutStyleSetting>;
declare const AnchorPanelLayoutTypeSetting: MessageFns$35<AnchorPanelLayoutTypeSetting>;
declare const AvatarState: MessageFns$35<AvatarState>;
declare const BackGroundImageState: MessageFns$35<BackGroundImageState>;
declare const CohostMode: MessageFns$35<CohostMode>;
declare const CohostStreamConfig: MessageFns$35<CohostStreamConfig>;
declare const CohostTypeLayoutExtra: MessageFns$35<CohostTypeLayoutExtra>;
declare const CohostTypeLayoutNonSeiExtra: MessageFns$35<CohostTypeLayoutNonSeiExtra>;
declare const CohostTypeSpotExtra: MessageFns$35<CohostTypeSpotExtra>;
declare const CohostTypeSpotNonSeiExtra: MessageFns$35<CohostTypeSpotNonSeiExtra>;
declare const CohostUserInfo: MessageFns$35<CohostUserInfo>;
declare const ContentPosition: MessageFns$35<ContentPosition>;
declare const GroupPlayer: MessageFns$35<GroupPlayer>;
declare const GuestUserInfo: MessageFns$35<GuestUserInfo>;
declare const LayoutData: MessageFns$35<LayoutData>;
declare const LayoutState: MessageFns$35<LayoutState>;
declare const LinkEnvelopeMessagePayload: MessageFns$35<LinkEnvelopeMessagePayload>;
declare const LinkUserIdentity: MessageFns$35<LinkUserIdentity>;
declare const LinkUserState: MessageFns$35<LinkUserState>;
declare const LinkerMediaChangeOperator: MessageFns$35<LinkerMediaChangeOperator>;
declare const MigrationDetails: MessageFns$35<MigrationDetails>;
declare const MultiGuestLayoutExtra: MessageFns$35<MultiGuestLayoutExtra>;
declare const MultiGuestLayoutNonSeiExtra: MessageFns$35<MultiGuestLayoutNonSeiExtra>;
declare const MultiGuestSpotExtra: MessageFns$35<MultiGuestSpotExtra>;
declare const MultiGuestSpotNonSeiExtra: MessageFns$35<MultiGuestSpotNonSeiExtra>;
declare const PosIdentity: MessageFns$35<PosIdentity>;
declare const PosIdentityExtra: MessageFns$35<PosIdentityExtra>;
declare const ResolutionDemandPayload: MessageFns$35<ResolutionDemandPayload>;
declare const SocialGameLayoutExtra: MessageFns$35<SocialGameLayoutExtra>;
declare const SocialGameLayoutNonSeiExtra: MessageFns$35<SocialGameLayoutNonSeiExtra>;
declare const SocialGameUserSpotExtra: MessageFns$35<SocialGameUserSpotExtra>;
declare const SocialGameUserSpotNonSeiExtra: MessageFns$35<SocialGameUserSpotNonSeiExtra>;
declare const SpotInfo: MessageFns$35<SpotInfo>;
interface MessageFns$35<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/message/linkcore.d.ts
interface AllListUser {
  linkedList: LinkLayerListUser[];
  appliedList: LinkLayerListUser[];
  invitedList: LinkLayerListUser[];
  readyList: LinkLayerListUser[];
}
interface ApplyContent {
  applier: Player | undefined;
  applierLinkMicId: string;
  applierLinkerSessionId: string;
}
interface ByteRTCExtInfo {
  defaultSignalingServerFirst: number;
}
interface CancelApplyContent {
  applier: Player | undefined;
  applierLinkMicId: string;
  applierLinkerSessionId: string;
}
interface CancelInviteContent {
  invitor: Player | undefined;
  invitorLinkMicId: string;
  inviteeLinkMicId: string;
  inviteSeqId: string;
  invitee: Player | undefined;
  inviteeLinkerSessionId: string;
}
interface CreateChannelContent {
  owner: Player | undefined;
  ownerLinkMicId: string;
  ownerLinkerSessionId: string;
}
interface DSLConfig {
  sceneVersion: number;
  layoutId: string;
}
interface FinishChannelContent {
  owner: Player | undefined;
  finishReason: string;
}
interface InviteContent {
  invitor: Player | undefined;
  inviteeRtcExtInfo: RTCExtraInfo | undefined;
  invitorLinkMicId: string;
  inviteeLinkMicId: string;
  isOwner: boolean;
  pos: MicPositionData | undefined;
  dsl: DSLConfig | undefined;
  invitee: Player | undefined;
  operator: Player | undefined;
  inviteeLinkerSessionId: string;
}
interface JoinDirectContent {
  joiner: LinkLayerListUser | undefined;
  allUsers: AllListUser | undefined;
}
interface KickOutContent {
  offliner: Player | undefined;
  kickoutReason: KickoutReason;
  linkedUserUiPositions: string[];
  uiPos: PosIdentity[];
  layout: LayoutState | undefined;
  spotList: SpotInfo[];
  offlinerLinkerSessionId: string;
}
interface LeaveContent {
  leaver: Player | undefined;
  leaveReason: string;
  linkedUserUiPositions: string[];
  uiPos: PosIdentity[];
  layout: LayoutState | undefined;
  spotList: SpotInfo[];
  leaverLinkerSessionId: string;
}
interface LinkLayerListUser {
  user: Player | undefined;
  linkmicId: string;
  pos: MicPositionData | undefined;
  linkedTimeNano: string;
  appVersion: string;
  userType: LinkerUserType;
  linkerSessionId: string;
}
interface LinkListChangeContent {
  type: number;
  list: AllListUser | undefined;
  linkedUserUiPositions: string[];
  contentPos: ContentPosition[];
}
interface PermitApplyContent {
  permiter: Player | undefined;
  permiterLinkMicId: string;
  applierPos: MicPositionData | undefined;
  replyStatus: AgreeStatus;
  dsl: DSLConfig | undefined;
  applier: Player | undefined;
  operator: Player | undefined;
  applierLinkMicId: string;
  linkedUserUiPositions: string[];
  applierRtcToken: string;
  uiPos: PosIdentity[];
  layout: LayoutState | undefined;
  spotList: SpotInfo[];
  applierLinkerSessionId: string;
}
interface RTCBitRateMap {
  xx1: number;
  xx2: number;
  xx3: number;
  xx4: number;
}
interface RTCEngineConfig {
  rtcAppId: string;
  rtcUserId: string;
  rtcToken: string;
  rtcChannelId: string;
}
interface RTCExtraInfo {
  liveRtcEngineConfig: RTCEngineConfig | undefined;
  liveRtcVideoParam: RTCLiveVideoParam[];
  rtcBitrateMap: RTCBitRateMap | undefined;
  rtcFps: number;
  rtcMixBase: RTCMixBase | undefined;
  byteRtcExtInfo: ByteRTCExtInfo | undefined;
  extra: RTCInfoExtra | undefined;
  rtcBusinessId: string;
  rtcOther: RTCOther | undefined;
  interactClientType: number;
}
interface RTCInfoExtra {
  version: string;
}
interface RTCLiveVideoParam {
  strategyId: number;
  params: RTCVideoParam | undefined;
}
interface RTCMixBase {
  bitrate: number;
}
interface RTCOther {
  maxTranscodingCbIntervalSecond: number;
}
interface RTCVideoParam {
  width: number;
  height: number;
  fps: number;
  bitrateKbps: number;
}
interface ReplyInviteContent {
  invitee: Player | undefined;
  replyStatus: AgreeStatus;
  inviteeLinkMicId: string;
  inviteePos: MicPositionData | undefined;
  inviteOperatorUser: Player | undefined;
  linkedUserUiPositions: string[];
  uiPos: PosIdentity[];
  layout: LayoutState | undefined;
  spotList: SpotInfo[];
  inviteeLinkerSessionId: string;
}
declare const AllListUser: MessageFns$34<AllListUser>;
declare const ApplyContent: MessageFns$34<ApplyContent>;
declare const ByteRTCExtInfo: MessageFns$34<ByteRTCExtInfo>;
declare const CancelApplyContent: MessageFns$34<CancelApplyContent>;
declare const CancelInviteContent: MessageFns$34<CancelInviteContent>;
declare const CreateChannelContent: MessageFns$34<CreateChannelContent>;
declare const DSLConfig: MessageFns$34<DSLConfig>;
declare const FinishChannelContent: MessageFns$34<FinishChannelContent>;
declare const InviteContent: MessageFns$34<InviteContent>;
declare const JoinDirectContent: MessageFns$34<JoinDirectContent>;
declare const KickOutContent: MessageFns$34<KickOutContent>;
declare const LeaveContent: MessageFns$34<LeaveContent>;
declare const LinkLayerListUser: MessageFns$34<LinkLayerListUser>;
declare const LinkListChangeContent: MessageFns$34<LinkListChangeContent>;
declare const PermitApplyContent: MessageFns$34<PermitApplyContent>;
declare const RTCBitRateMap: MessageFns$34<RTCBitRateMap>;
declare const RTCEngineConfig: MessageFns$34<RTCEngineConfig>;
declare const RTCExtraInfo: MessageFns$34<RTCExtraInfo>;
declare const RTCInfoExtra: MessageFns$34<RTCInfoExtra>;
declare const RTCLiveVideoParam: MessageFns$34<RTCLiveVideoParam>;
declare const RTCMixBase: MessageFns$34<RTCMixBase>;
declare const RTCOther: MessageFns$34<RTCOther>;
declare const RTCVideoParam: MessageFns$34<RTCVideoParam>;
declare const ReplyInviteContent: MessageFns$34<ReplyInviteContent>;
interface MessageFns$34<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/linkmic/common_group_channel_user.d.ts
interface GroupChannelUser {
  channelId: string;
  status: GroupStatus;
  type: JoinType;
  allUser: AllListUser | undefined;
  joinTime: string;
  linkedTime: string;
  ownerUser: GroupPlayer | undefined;
  groupLinkmicId: string;
}
declare const GroupChannelUser: MessageFns$33<GroupChannelUser>;
interface MessageFns$33<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/linkmic/common_group_channel_all_user.d.ts
interface GroupChannelAllUser {
  groupChannelId: string;
  user: GroupChannelUser[];
  contentVersion: string;
}
declare const GroupChannelAllUser: MessageFns$32<GroupChannelAllUser>;
interface MessageFns$32<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/message/common.d.ts
interface PatternRef {
  key: string;
  defaultPattern: string;
  keyGroups: {
    [key: string]: string;
  };
}
interface PatternRef_KeyGroupsEntry {
  key: string;
  value: string;
}
interface Text {
  key: string;
  defaultPattern: string;
  defaultFormat: TextFormat | undefined;
  pieces: TextPiece[];
}
interface TextFormat {
  color: string;
  bold: boolean;
  italic: boolean;
  weight: number;
  italicAngle: number;
  fontSize: number;
  useHeighLightColor: boolean;
  useRemoteClor: boolean;
}
interface TextPiece {
  type: number;
  format: TextFormat | undefined;
  stringValue: string;
  userValue: TextPieceUser | undefined;
  giftValue: TextPieceGift | undefined;
  heartValue: TextPieceHeart | undefined;
  patternRefValue: TextPiecePatternRef | undefined;
  imageValue: TextPieceImage | undefined;
}
interface TextPieceGift {
  giftId: string;
  nameRef: PatternRef | undefined;
  showType: GiftShowType;
  colorId: string;
}
interface TextPieceHeart {
  color: string;
}
interface TextPieceImage {
  image: ImageModel | undefined;
}
interface TextPiecePatternRef {
  key: string;
  defaultPattern: string;
}
interface TextPieceUser {
  user: User | undefined;
  withColon: boolean;
}
declare const PatternRef: MessageFns$31<PatternRef>;
declare const PatternRef_KeyGroupsEntry: MessageFns$31<PatternRef_KeyGroupsEntry>;
declare const Text: MessageFns$31<Text>;
declare const TextFormat: MessageFns$31<TextFormat>;
declare const TextPiece: MessageFns$31<TextPiece>;
declare const TextPieceGift: MessageFns$31<TextPieceGift>;
declare const TextPieceHeart: MessageFns$31<TextPieceHeart>;
declare const TextPieceImage: MessageFns$31<TextPieceImage>;
declare const TextPiecePatternRef: MessageFns$31<TextPiecePatternRef>;
declare const TextPieceUser: MessageFns$31<TextPieceUser>;
interface MessageFns$31<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/message/invite_top_host_info.d.ts
interface InviteTopHostInfo {
  rankType: string;
  topIndex: string;
}
interface LinkmicUserInfo {
  userId: string;
  linkmicIdStr: string;
  roomId: string;
  linkedTime: string;
}
interface PerceptionDialogInfo {
  iconType: PerceptionDialogIconType;
  title: Text | undefined;
  subTitle: Text | undefined;
  adviceActionText: Text | undefined;
  defaultActionText: Text | undefined;
  violationDetailUrl: string;
  scene: number;
  targetUserId: string;
  targetRoomId: string;
  countDownTime: string;
  showFeedback: boolean;
  feedbackOptions: PerceptionFeedbackOption[];
  policyTip: string;
  appealPopup: number;
  closeActionText: Text | undefined;
}
interface PunishEventInfo {
  punishType: string;
  punishReason: string;
  punishId: string;
  violationUid: string;
  punishTypeId: PunishTypeId;
  duration: string;
  punishPerceptionCode: string;
  endTime: string;
  violationUidStr: string;
  showReason: string;
}
declare const InviteTopHostInfo: MessageFns$30<InviteTopHostInfo>;
declare const LinkmicUserInfo: MessageFns$30<LinkmicUserInfo>;
declare const PerceptionDialogInfo: MessageFns$30<PerceptionDialogInfo>;
declare const PunishEventInfo: MessageFns$30<PunishEventInfo>;
interface MessageFns$30<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/shared/message.d.ts
interface BaseProtoMessage {
  method: string;
  payload: Buffer;
  msgId: string;
  msgType: number;
  offset: string;
  isHistory: boolean;
  sampleFlag: number;
}
interface CommonMessageData {
  method: string;
  msgId: string;
  roomId: string;
  createTime: string;
  monitor: number;
  isShowMsg: boolean;
  describe: string;
  displayText: Text | undefined;
  foldType: string;
  anchorFoldType: string;
  priorityScore: string;
  logId: string;
  msgProcessFilterK: string;
  msgProcessFilterV: string;
  fromIdc: string;
  toIdc: string;
  filterMsgTags: string[];
  sei: LiveMessageSEI | undefined;
  dependRootId: LiveMessageID | undefined;
  dependId: LiveMessageID | undefined;
  anchorPriorityScore: string;
  roomMessageHeatLevel: string;
  foldTypeForWeb: string;
  anchorFoldTypeForWeb: string;
  clientSendTime: string;
  dispatchStrategy: number;
}
interface LiveMessageID {
  primaryId: string;
  messageScene: string;
}
interface LiveMessageSEI {
  uniqueId: LiveMessageID | undefined;
  timestamp: string;
}
interface ProtoMessageFetchResult {
  messages: BaseProtoMessage[];
  cursor: string;
  fetchInterval: string;
  now: string;
  internalExt: string;
  fetchType: number;
  routeParams: {
    [key: string]: string;
  };
  heartbeatDuration: string;
  needAck: boolean;
  pushServer: string;
  isFirst: boolean;
  historyCommentCursor: string;
  historyNoMore: boolean;
}
interface ProtoMessageFetchResult_RouteParamsEntry {
  key: string;
  value: string;
}
declare const BaseProtoMessage: MessageFns$29<BaseProtoMessage>;
declare const CommonMessageData: MessageFns$29<CommonMessageData>;
declare const LiveMessageID: MessageFns$29<LiveMessageID>;
declare const LiveMessageSEI: MessageFns$29<LiveMessageSEI>;
declare const ProtoMessageFetchResult: MessageFns$29<ProtoMessageFetchResult>;
declare const ProtoMessageFetchResult_RouteParamsEntry: MessageFns$29<ProtoMessageFetchResult_RouteParamsEntry>;
interface MessageFns$29<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/im.d.ts
declare enum BarrageMessageBarrageType {
  UNKNOWN = 0,
  E_COM_ORDERING = 1,
  E_COM_BUYING = 2,
  NORMAL = 3,
  SUBSCRIBE = 4,
  EVENT_VIEW = 5,
  EVENT_REGISTERED = 6,
  SUBSCRIBE_GIFT = 7,
  USER_UPGRADE = 8,
  GRADE_USER_ENTRANCE_NOTIFICATION = 9,
  FANS_LEVEL_UPGRADE = 10,
  FANS_LEVEL_ENTRANCE = 11,
  GAME_PARTNERSHIP = 12,
  GIFT_GALLERY = 13,
  E_COM_BOUGHT = 14,
  ENIGMA_ENTRANCE = 15,
  COMMON_BARRAGE = 100,
  UNRECOGNIZED = -1
}
declare enum BarrageMessageIconDisplayType {
  ICON_DISPLAY_TYPE_IMAGE = 0,
  ICON_DISPLAY_TYPE_BADGE = 1,
  UNRECOGNIZED = -1
}
declare enum BarrageMessageRenderType {
  RENDER_TYPE_NATIVE = 0,
  RENDER_TYPE_HYBRID = 1,
  RENDER_TYPE_ALPHA = 2,
  UNRECOGNIZED = -1
}
declare enum BarrageMessageShowType {
  SHOW_TYPE_NORMAL = 0,
  SHOW_TYPE_FADE_IN_OUT = 1,
  UNRECOGNIZED = -1
}
declare enum BattleCardMsgType {
  UNKNOWN_CARD_ACTION = 0,
  CARD_OBTAIN_GUIDE = 1,
  USE_CRITICAL_STRIKE_CARD = 2,
  USE_SMOKE_CARD = 3,
  AWARD_CARD_NOTICE = 4,
  USE_EXTRA_TIME_CARD = 5,
  USE_SPECIAL_EFFECT_CARD = 6,
  USE_POTION_CARD = 7,
  USE_WAVE_CARD = 8,
  SPECIAL_EFFECT_NOTICE = 9,
  USE_TOP_2_CARD = 10,
  USE_TOP_3_CARD = 11,
  USE_VAULT_GLOVE_CARD = 12,
  UNRECOGNIZED = -1
}
declare enum BattleRewardSettleRewardStatus {
  REWARD_STATUS_SUCCEED = 0,
  REWARD_STATUS_FAILED = 1,
  UNRECOGNIZED = -1
}
declare enum BattleTaskMessageType {
  START = 0,
  TASK_UPDATE = 1,
  TASK_SETTLE = 2,
  REWARD_SETTLE = 3,
  UNRECOGNIZED = -1
}
declare enum BattleTaskSettleResult {
  SUCCEED = 0,
  FAILED = 1,
  BOTH_SUCCEED = 2,
  UNRECOGNIZED = -1
}
declare enum BizType {
  DEFAULT = 0,
  RETHINK_CHAT = 1,
  RETHINK_QA = 2,
  WARNING_TAG_CURRENT_ROOM = 3,
  WARNING_TAG_COHOST_ROOM = 4,
  AGS_AT_RISK_OF_UNABLE_TO_COMMENT = 5,
  PERCEPTION_CENTER = 6,
  UNRECOGNIZED = -1
}
declare enum ContentInviteSource {
  INVITE_SOURCE_UNKNOWN = 0,
  INVITE_SOURCE_PANEL_GO_LIVE = 1,
  INVITE_SOURCE_MUTUAL_NOTICE = 2,
  INVITE_SOURCE_USER_PROFILE = 3,
  INVITE_SOURCE_RESERVE = 4,
  UNRECOGNIZED = -1
}
declare enum DisplayStyle {
  DISPLAY_STYLE_NORMAL = 0,
  STAY = 1,
  CHAT = 2,
  UNRECOGNIZED = -1
}
declare enum ExhibitionType {
  EXHIBITION_TYPE_DEFAULT = 0,
  FOLD = 1,
  PUBLIC_SCREEN = 2,
  UNRECOGNIZED = -1
}
declare enum GameActionType {
  SHOW = 0,
  JUMP = 1,
  FOLLOW = 2,
  COMMENT = 3,
  UNRECOGNIZED = -1
}
declare enum GameRankNotifyMessageMsgType {
  MSG_TYPE_RANK_IN_OUT = 0,
  MSG_TYPE_RANK_CHANGE = 1,
  MSG_TYPE_ANCHOR_ENCOURAGE = 2,
  MSG_TYPE_UN_KNOW = 255,
  UNRECOGNIZED = -1
}
declare enum GiftMessageIgnoreConfig {
  NOT_IGNORE = 0,
  IGNORE_TRAY = 1,
  IGNORE_PSM = 2,
  IGNORE_TRAY_AND_PSM = 3,
  UNRECOGNIZED = -1
}
declare enum GiftMessageVersion {
  NUM_0 = 0,
  NUM_1 = 1,
  UNRECOGNIZED = -1
}
declare enum GiftSource {
  GIFT_SOURCE_UNKNOWN = 0,
  PLATFORM = 1,
  USER_BUY_RANDOM = 2,
  USER_BUY_SPECIFIC = 3,
  UNRECOGNIZED = -1
}
declare enum HitABStatus {
  NO_HIT = 0,
  ENTER_FROM_EXTERNAL_LINK_NEW_TEXT = 1,
  ENTER_FROM_RE_POST_NEW_TEXT = 2,
  UNRECOGNIZED = -1
}
declare enum JumpPage {
  GIFT_GOAL_SOURCE = 0,
  GIFT_ALERT_SOURCE = 1,
  COHOST_SETTING = 2,
  GIFT_ER_RANK_LIST = 3,
  WEEKLY_GAME_RANK_LIST = 4,
  FANS_CLUB = 5,
  GOODY_BAG_SETTING = 6,
  GAME_GUESS_SETTING = 7,
  ADMIN_SETTING = 8,
  GIFT_ALERT_TTS = 9,
  LIVE_GOAL = 10,
  TREASURE_BOX = 11,
  GAME_REWARDS = 12,
  POLL = 13,
  SUBSCRIPTION = 14,
  MONET_IZ_ATION_TIPS_SETTING = 15,
  EXTENDING_COUNTDOWN = 16,
  PLAY_TOGETHER = 17,
  MULTI_GUEST = 18,
  PARTNERSHIP = 19,
  GIFT_NOTIFICATION = 20,
  JUMP_PAGE_GIFT_GALLERY = 21,
  PK_LTE_2 = 22,
  COHOST_SETTING_FOR_RANKING = 23,
  PK_GTE_3 = 24,
  GIFT_LIST = 25,
  RANK_STICKER_SETTING = 26,
  UNRECOGNIZED = -1
}
declare enum LinkLayerMessageType {
  LINKER_UNKNOWN = 0,
  LINKER_CREATE = 1,
  LINKER_INVITE = 2,
  LINKER_APPLY = 3,
  LINKER_PERMIT = 4,
  LINKER_REPLY = 5,
  LINKER_KICK_OUT = 6,
  LINKER_CANCEL_APPLY = 7,
  LINKER_CANCEL_INVITE = 8,
  LINKER_LEAVE = 9,
  LINKER_FINISH = 10,
  LINKER_LIST_CHANGE = 11,
  LINKER_JOIN_DIRECT = 12,
  LINKER_JOIN_GROUP = 13,
  LINKER_PERMIT_GROUP = 14,
  LINKER_CANCEL_GROUP = 15,
  LINKER_LEAVE_GROUP = 16,
  LINKER_P_2_P_GROUP_CHANGE = 17,
  LINKER_GROUP_CHANGE = 18,
  UNRECOGNIZED = -1
}
declare enum LinkMicArmiesTriggerReason {
  LINK_MIC_ARMIES_TRIGGER_REASON_UNKNOWN = 0,
  SCORE_UPDATE = 1,
  BATTLE_END = 2,
  OPT_OUT_UPDATE = 3,
  KEEP_ALIVE = 4,
  EFFECT_UPDATE = 5,
  UNRECOGNIZED = -1
}
declare enum LinkMicBattlePunishFinishReason {
  TIME_UP = 0,
  CUT_SHORT = 1,
  UNRECOGNIZED = -1
}
declare enum LinkMicBattleBattleAction {
  LINK_MIC_BATTLE_BATTLE_ACTION_UNKNOWN = 0,
  INVITE = 1,
  REJECT = 2,
  CANCEL = 3,
  OPEN = 4,
  FINISH = 5,
  LINK_MIC_BATTLE_BATTLE_ACTION_CUT_SHORT = 6,
  ACCEPT = 7,
  QUIT_APPLY = 8,
  DECLINE_QUIT = 9,
  DECLINE_OFF_QUIT = 10,
  LEAVE_LINKMIC = 11,
  UNRECOGNIZED = -1
}
declare enum MessageDisplayStyle {
  MESSAGE_DISPLAY_STYLE_DEFAULT = 0,
  POPUP = 1,
  UNRECOGNIZED = -1
}
declare enum MessageType {
  SUB_SUCCESS = 0,
  ANCHOR_REMINDER = 1,
  ENTER_ROOM_EXPIRE_SOON = 2,
  SUB_GOAL_CREATE_TO_ANCHOR = 3,
  SUB_GOAL_COMPLETE_TO_AUDIENCE = 4,
  SUB_GOAL_COMPLETE_TO_ANCHOR = 5,
  SUB_GIFT_TIKTOK_2_USER_NOTICE = 6,
  SUB_GIFT_TIKTOK_2_ANCHOR_NOTICE = 7,
  SUB_GIFT_T_RECEIVES_END_NOTICE = 8,
  SUB_GIFTS_END_SUCCEED_ROOM_MESSAGE = 9,
  SUB_GIFTS_END_SUCCEED_ANCHOR_NOTICE = 10,
  SUB_GIFT_LOW_VERSION_UPGRADE_NOTICE = 11,
  SUB_GIFT_USER_BUY_AU_TH_NOTICE = 12,
  SUB_COMMON_TEXT_NOTICE = 13,
  SUB_MODERATOR_PIN_PERK = 14,
  UNRECOGNIZED = -1
}
declare enum MicIdxOperation {
  MIC_IDX_OP_ON = 0,
  MIC_IDX_OP_OFF = 1,
  UNRECOGNIZED = -1
}
declare enum OldSubscribeStatus {
  FIRST = 0,
  RESUB = 1,
  SUB_IN_GRACE_PERIOD = 2,
  SUB_NOT_IN_GRACE_PERIOD = 3,
  OLD_SUBSCRIBE_STATUS_DEFAULT = 100,
  UNRECOGNIZED = -1
}
declare enum OpType {
  OP_TYPE_DEFAULT = 0,
  ADD = 1,
  REMOVE = 2,
  RELOAD = 3,
  BASIC_EFFECT = 4,
  UNRECOGNIZED = -1
}
declare enum PartnershipDropsUpdateMessageChangeMode {
  CHANGE_MODE_SHOW = 0,
  CHANGE_MODE_UPDATE = 1,
  CHANGE_MODE_CLOSE = 2,
  UNRECOGNIZED = -1
}
declare enum PartnershipGameOfflineMessageOfflineGameInfoOfflineType {
  TASK_OFFLINE = 0,
  EVENT_OFFLINE = 1,
  DROPS_OFFLINE = 2,
  UNRECOGNIZED = -1
}
declare enum PinMessageActionType {
  UN_KOWN = 0,
  PIN = 1,
  PIN_CANCEL = 2,
  UNRECOGNIZED = -1
}
declare enum PublicAreaMessageCommonCreatorSuccessInfoTopicDisplayLocation {
  DISPLAY_LOCATION_FULL_SCREEN = 0,
  DISPLAY_LOCATION_PUBLIC_SCREEN = 1,
  DISPLAY_LOCATION_BOTH = 2,
  UNRECOGNIZED = -1
}
declare enum PublicAreaMessageCommonPortraitInfoUserMetricsUserMetricsType {
  USER_METRICS_TYPE_UNKNOWN = 0,
  USER_METRICS_TYPE_GRADE = 1,
  USER_METRICS_TYPE_SUBSCRIBE = 2,
  USER_METRICS_TYPE_FOLLOW = 3,
  USER_METRICS_TYPE_FANS_CLUB = 4,
  USER_METRICS_TYPE_TOP_VIEWER = 5,
  USER_METRICS_TYPE_GIFT = 6,
  UNRECOGNIZED = -1
}
declare enum RankTextMessageRankTestMessageScene {
  RANK_TEXT_MESSAGE_RANK_TEST_MESSAGE_SCENE_UNKNOWN = 0,
  ONLINE_AUDIENCE_TOP_N_UPDATE_PUBLIC_SCREEN = 1,
  MID_PEAK_MOTIVATION_PUBLIC_SCREEN_TOP = 2,
  MID_PEAK_MOTIVATION_PUBLIC_SCREEN_ENTER = 3,
  TILE_REWARD_GUIDE = 4,
  UNRECOGNIZED = -1
}
declare enum ScoreType {
  SCORE_TYPE_UNKNOWN = 0,
  ALL_FAN_TICKET = 1,
  PLAY_SCORE = 2,
  UNRECOGNIZED = -1
}
declare enum ShowType {
  HOVER = 0,
  PLUG = 1,
  UNRECOGNIZED = -1
}
declare enum SubPinEventMessageActionType {
  SUB_PIN_EVENT_MESSAGE_ACTION_TYPE_UNKNOWN = 0,
  SUB_PIN_EVENT_MESSAGE_ACTION_TYPE_PIN = 1,
  UNPIN = 2,
  UNRECOGNIZED = -1
}
declare enum SubscribeType {
  ONCE = 0,
  AUTO = 1,
  SUBSCRIBE_TYPE_DEFAULT = 100,
  UNRECOGNIZED = -1
}
declare enum SubscribingStatus {
  SUBSCRIBING_STATUS_UNKNOWN = 0,
  SUBSCRIBING_STATUS_ONCE = 1,
  CIRCLE = 2,
  CIRCLE_CANCEL = 3,
  REFUND = 4,
  IN_GRACE_PERIOD = 5,
  NOT_IN_GRACE_PERIOD = 6,
  UNRECOGNIZED = -1
}
declare enum TextType {
  DISPLAY_TEXT = 0,
  CONTENT = 1,
  UNRECOGNIZED = -1
}
declare enum UnionAnimationInfoType {
  NO_UNION_ANIMATION = 0,
  LOOP = 1,
  LOCK = 2,
  UNRECOGNIZED = -1
}
interface BizLayoutState {
  multiGuestBizLayoutExtra: MultiGuestBizLayoutExtra | undefined;
  coHostBizLayoutExtra: CoHostBizLayoutExtra | undefined;
}
interface BizSpotExtra {
  multiGuestBizSpotExtra: MultiGuestBizSpotExtra | undefined;
  coHostBizSpotExtra: CoHostBizSpotExtra | undefined;
}
interface BizSpotInfo {
  spotId: number;
  posIdentity: PosIdentity | undefined;
  bizSpotExtra: BizSpotExtra | undefined;
}
interface CancelJoinGroupContent {
  leaver: GroupPlayer[];
  operator: GroupPlayer | undefined;
  type: JoinType;
  groupUser: GroupChannelAllUser | undefined;
}
interface CoHostBizLayoutExtra {}
interface CoHostBizSpotExtra {}
interface CohostContent {
  joinGroupBizContent: JoinGroupBizContent | undefined;
  permitJoinGroupBizContent: PermitJoinGroupBizContent | undefined;
  listChangeBizContent: ListChangeBizContent | undefined;
  joinGroupDirectBizContent: JoinGroupDirectBizContent | undefined;
}
interface GroupChangeContent {
  groupUser: GroupChannelAllUser | undefined;
  linkedUserUiPositions: string[];
}
interface InvitationReorderExtra {
  strategyNumber: string;
  strategyName: string;
  strategyScore: number;
}
interface JoinGroupBizContent {
  fromRoomAgeRestricted: number;
  fromTag: Tag$1 | undefined;
  dialog: PerceptionDialogInfo | undefined;
  punishInfo: PunishEventInfo | undefined;
  topicInfo: CohostTopic | undefined;
  algoRequestId: string;
  cohostLayoutMode: CohostLayoutMode;
  tag: TagV2 | undefined;
  gameTag: RivalsGameTag | undefined;
  newUserEducation: string;
  abInfos: {
    [key: string]: CohostABInfo;
  };
  matchedPreferenceTag: number;
  joinGroupMsgExtra: JoinGroupMessageExtra | undefined;
}
interface JoinGroupBizContent_AbInfosEntry {
  key: string;
  value: CohostABInfo | undefined;
}
interface JoinGroupContent {
  groupUser: GroupChannelAllUser | undefined;
  joinUser: GroupPlayer | undefined;
  type: JoinType;
  groupExtInfo: RTCExtraInfo[];
}
interface JoinGroupDirectBizContent {
  gameplayContent: GamePlayContent | undefined;
  randomMatchContent: RandomMatchContent | undefined;
  skipCancelMatch: boolean;
}
interface JoinGroupDirectContent {
  groupExtInfo: RTCExtraInfo[];
  groupUser: GroupChannelAllUser | undefined;
  migrationDetails: MigrationDetails | undefined;
  contentPos: ContentPosition[];
  crossRoomLayout: LayoutData | undefined;
}
interface JoinGroupMessageExtra {
  sourceType: string;
  extra: RivalExtra | undefined;
  otherUsers: RivalExtra[];
  invitationReorderExtra: InvitationReorderExtra | undefined;
  rivalGuestsMap: {
    [key: string]: RivalGuestExtras;
  };
  isFromCohostOverIssue: boolean;
}
interface JoinGroupMessageExtra_RivalGuestsMapEntry {
  key: string;
  value: RivalGuestExtras | undefined;
}
interface JoinRoomDirectBizContent {
  linkTypePermission: string;
  isFullPositionPreApproved: boolean;
}
interface JoinRoomDirectContent {
  joiner: Player | undefined;
  joinerLinkMicId: string;
  joinerExtInfo: RTCExtraInfo | undefined;
  layout: LayoutState | undefined;
  spotList: SpotInfo[];
  uiPos: PosIdentity[];
}
interface JustDanceExtra {}
interface JustDanceLayoutExtra {
  justDanceSongTitle: string;
}
interface KickOutBizContent {
  operatorUserInfo: User | undefined;
  operatorLinkAdminType: LinkMicUserAdminType;
  kickPlayerUserInfo: User | undefined;
}
interface LeaveJoinGroupContent {
  operator: GroupPlayer | undefined;
  groupChannelId: string;
  leaveSource: string;
  linkedUserUiPositions: string[];
}
interface LinkEnvelopeContent {
  sender: LinkUserIdentity | undefined;
  receiver: LinkUserIdentity | undefined;
  messagePayload: LinkEnvelopeMessagePayload | undefined;
}
interface ListChangeBizContent {
  userInfos: {
    [key: string]: CohostUserInfo;
  };
  waitingUsers: VirtualWaitingUser[];
  abInfos: {
    [key: string]: CohostABInfo;
  };
  guestUserInfos: {
    [key: string]: GuestUserInfo;
  };
  gameplayContent: GamePlayContent | undefined;
}
interface ListChangeBizContent_UserInfosEntry {
  key: string;
  value: CohostUserInfo | undefined;
}
interface ListChangeBizContent_AbInfosEntry {
  key: string;
  value: CohostABInfo | undefined;
}
interface ListChangeBizContent_GuestUserInfosEntry {
  key: string;
  value: GuestUserInfo | undefined;
}
interface MultiGuestBizLayoutExtra {
  justDanceLayoutExtra: JustDanceLayoutExtra | undefined;
}
interface MultiGuestBizSpotExtra {
  soundWareEffectExtra: SoundWareEffectExtra | undefined;
  justDanceExtra: JustDanceExtra | undefined;
}
interface P2PGroupChangeContent {
  groupExtInfo: RTCExtraInfo[];
  groupUser: GroupChannelAllUser | undefined;
  migrationDetails: MigrationDetails | undefined;
  contentPos: ContentPosition[];
  crossRoomLayout: LayoutData | undefined;
}
interface PermitJoinGroupBizContent {
  replyStatus: ReplyStatus;
  sourceType: SourceType;
  skipCancelMatch: boolean;
  matchedPreferenceTag: number;
  quickCohostInviteeUserInfo: QuickCohostInviteeUserInfo | undefined;
}
interface PermitJoinGroupContent {
  approver: GroupPlayer | undefined;
  agreeStatus: AgreeStatus;
  type: JoinType;
  groupExtInfo: RTCExtraInfo[];
  groupUser: GroupChannelAllUser | undefined;
  migrationDetails: MigrationDetails | undefined;
  linkedUserUiPositions: string[];
  permitGroupType: number;
  crossRoomLayout: LayoutData | undefined;
}
interface QuickCohostInviteeUserInfo {
  avatarThumb: ImageModel | undefined;
  nickname: string;
}
interface RivalExtra {
  userCount: string;
  avatarThumb: ImageModel | undefined;
  displayId: string;
  authenticationInfo: AuthenticationInfo | undefined;
  nickname: string;
  followStatus: string;
  hashtag: Hashtag | undefined;
  topHostInfo: TopHostInfo | undefined;
  userId: string;
  isBestTeammate: boolean;
  optPairInfo: OptPairInfo | undefined;
  eoyLevel: string;
  nudgeInfo: CohostNudgeInfo;
  reservationId: string;
  followerCount: string;
  gameTag: RivalsGameTag | undefined;
  giftGalleryBadgeInfo: GiftGalleryBadgeInfo | undefined;
  roomId: string;
  activityBadgeInfo: ActivityBadgeInfo | undefined;
}
interface RivalGuestExtra {
  userId: string;
  avatarThumb: ImageModel | undefined;
  nickname: string;
}
interface RivalGuestExtras {
  rivalGuests: RivalGuestExtra[];
}
interface SoundWareEffectExtra {
  staticImageName: string;
  dynamicImageName: string;
  userRightId: string;
  rightId: string;
}
interface WebcastLinkMicLayoutStateMessage {
  common: CommonMessageData | undefined;
  channelId: string;
  scene: number;
  version: string;
  bizLayoutState: BizLayoutState | undefined;
  bizSpotList: BizSpotInfo[];
}
interface WebcastLinkStateMessage {
  common: CommonMessageData | undefined;
  channelId: string;
  scene: Scene;
  version: string;
  needAck: number;
  layout: LayoutState | undefined;
  userStates: LinkUserState[];
  clientSendTime: string;
  stateType: StateType;
  background: BackGroundImageState | undefined;
  wallpaperUrl: string;
  uiPos: PosIdentity[];
  spotList: SpotInfo[];
  audioMutedRemoteChannels: string[];
  linkerMode: number;
}
declare const BizLayoutState: MessageFns$28<BizLayoutState>;
declare const BizSpotExtra: MessageFns$28<BizSpotExtra>;
declare const BizSpotInfo: MessageFns$28<BizSpotInfo>;
declare const CancelJoinGroupContent: MessageFns$28<CancelJoinGroupContent>;
declare const CoHostBizLayoutExtra: MessageFns$28<CoHostBizLayoutExtra>;
declare const CoHostBizSpotExtra: MessageFns$28<CoHostBizSpotExtra>;
declare const CohostContent: MessageFns$28<CohostContent>;
declare const GroupChangeContent: MessageFns$28<GroupChangeContent>;
declare const InvitationReorderExtra: MessageFns$28<InvitationReorderExtra>;
declare const JoinGroupBizContent: MessageFns$28<JoinGroupBizContent>;
declare const JoinGroupBizContent_AbInfosEntry: MessageFns$28<JoinGroupBizContent_AbInfosEntry>;
declare const JoinGroupContent: MessageFns$28<JoinGroupContent>;
declare const JoinGroupDirectBizContent: MessageFns$28<JoinGroupDirectBizContent>;
declare const JoinGroupDirectContent: MessageFns$28<JoinGroupDirectContent>;
declare const JoinGroupMessageExtra: MessageFns$28<JoinGroupMessageExtra>;
declare const JoinGroupMessageExtra_RivalGuestsMapEntry: MessageFns$28<JoinGroupMessageExtra_RivalGuestsMapEntry>;
declare const JoinRoomDirectBizContent: MessageFns$28<JoinRoomDirectBizContent>;
declare const JoinRoomDirectContent: MessageFns$28<JoinRoomDirectContent>;
declare const JustDanceExtra: MessageFns$28<JustDanceExtra>;
declare const JustDanceLayoutExtra: MessageFns$28<JustDanceLayoutExtra>;
declare const KickOutBizContent: MessageFns$28<KickOutBizContent>;
declare const LeaveJoinGroupContent: MessageFns$28<LeaveJoinGroupContent>;
declare const LinkEnvelopeContent: MessageFns$28<LinkEnvelopeContent>;
declare const ListChangeBizContent: MessageFns$28<ListChangeBizContent>;
declare const ListChangeBizContent_UserInfosEntry: MessageFns$28<ListChangeBizContent_UserInfosEntry>;
declare const ListChangeBizContent_AbInfosEntry: MessageFns$28<ListChangeBizContent_AbInfosEntry>;
declare const ListChangeBizContent_GuestUserInfosEntry: MessageFns$28<ListChangeBizContent_GuestUserInfosEntry>;
declare const MultiGuestBizLayoutExtra: MessageFns$28<MultiGuestBizLayoutExtra>;
declare const MultiGuestBizSpotExtra: MessageFns$28<MultiGuestBizSpotExtra>;
declare const P2PGroupChangeContent: MessageFns$28<P2PGroupChangeContent>;
declare const PermitJoinGroupBizContent: MessageFns$28<PermitJoinGroupBizContent>;
declare const PermitJoinGroupContent: MessageFns$28<PermitJoinGroupContent>;
declare const QuickCohostInviteeUserInfo: MessageFns$28<QuickCohostInviteeUserInfo>;
declare const RivalExtra: MessageFns$28<RivalExtra>;
declare const RivalGuestExtra: MessageFns$28<RivalGuestExtra>;
declare const RivalGuestExtras: MessageFns$28<RivalGuestExtras>;
declare const SoundWareEffectExtra: MessageFns$28<SoundWareEffectExtra>;
declare const WebcastLinkMicLayoutStateMessage: MessageFns$28<WebcastLinkMicLayoutStateMessage>;
declare const WebcastLinkStateMessage: MessageFns$28<WebcastLinkStateMessage>;
interface MessageFns$28<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/chatroom/model/multilive.d.ts
interface MultiLiveAnchorPanelSettings {
  userId: string;
  layout: LinkmicUserSettingLayout;
  fixMicNum: LinkmicUserSettingShowAction;
  allowRequestFromUser: LinkmicUserSettingShowAction;
  allowRequestFromFollowerOnly: LinkmicUserSettingShowAction;
  applierSortSetting: LinkmicApplierSortSetting;
  applierSortGiftScoreThreshold: string;
  allowRequestFromFriends: LinkmicUserSettingShowAction;
  allowRequestFromFollowers: LinkmicUserSettingShowAction;
  allowRequestFromOthers: LinkmicUserSettingShowAction;
  enableShowMultiGuestLayout: LinkmicUserSettingShowAction;
  disableVideoLinkmic: LinkmicUserSettingDisableVideoLinkmic;
  multiGuestApplyAutoApprove: LinkmicUserSettingMultiGuestApplyAutoApprove;
  multiGuestShareRevenueInfoVersion: string;
  showAvailableSpot: number;
  saveAsDefaultLayout: number;
  multiGuestAllowCohostInvitation: number;
  multiGuestAllowCohostInvitationOnce: number;
  disableGuestOpenCamera: number;
}
declare const MultiLiveAnchorPanelSettings: MessageFns$27<MultiLiveAnchorPanelSettings>;
interface MessageFns$27<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/chatroom/model/multiguestv3.d.ts
interface ApplyBizContent {
  user: User | undefined;
}
interface BusinessContent {
  overLength: string;
  multiLiveContent: MultiLiveContent | undefined;
  cohostContent: CohostContent | undefined;
}
interface InviteBizContent {
  anchorSettingInfo: MultiLiveAnchorPanelSettings | undefined;
  inviteSource: ContentInviteSource;
  operatorUserInfo: User | undefined;
  operatorLinkAdminType: LinkMicUserAdminType;
  inviteeUserInfo: User | undefined;
  shareRevenueSetting: LinkmicShareRevenueSetting;
  shareRevenueSettingStruct: LinkmicShareRevenueSettingStruct | undefined;
}
interface JoinDirectBizContent {
  replyImMsgId: string;
  outsideRoomInviteSource: MultiGuestOutsideRoomInviteSource;
  isFullPositionPreApproved: boolean;
  mgSourceRole: number;
}
interface MultiLiveContent {
  applyBizContent: ApplyBizContent | undefined;
  inviteBizContent: InviteBizContent | undefined;
  replyBizContent: ReplyBizContent | undefined;
  permitBizContent: PermitBizContent | undefined;
  joinDirectBizContent: JoinDirectBizContent | undefined;
  kickOutBizContent: KickOutBizContent | undefined;
  joinRoomDirectBizContent: JoinRoomDirectBizContent | undefined;
}
interface PermitBizContent {
  anchorSettingInfo: MultiLiveAnchorPanelSettings | undefined;
  expireTimestamp: string;
  operatorUserInfo: User | undefined;
  operatorLinkAdminType: LinkMicUserAdminType;
  linkUserType: LinkUserType;
  isApplyAutoApproved: boolean;
  linkTypePermission: string;
  isFullPositionPreApproved: boolean;
  isQuickCallAutoApproved: boolean;
}
interface ReplyBizContent {
  linkType: number;
  isTurnOffInvitation: number;
  replyUserInfo: User | undefined;
  isFullPositionPreApproved: boolean;
}
declare const ApplyBizContent: MessageFns$26<ApplyBizContent>;
declare const BusinessContent: MessageFns$26<BusinessContent>;
declare const InviteBizContent: MessageFns$26<InviteBizContent>;
declare const JoinDirectBizContent: MessageFns$26<JoinDirectBizContent>;
declare const MultiLiveContent: MessageFns$26<MultiLiveContent>;
declare const PermitBizContent: MessageFns$26<PermitBizContent>;
declare const ReplyBizContent: MessageFns$26<ReplyBizContent>;
interface MessageFns$26<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/envelope.d.ts
interface EnvelopeEnigmaInfo {
  isEnigmaMaskOn: boolean;
}
declare const EnvelopeEnigmaInfo: MessageFns$25<EnvelopeEnigmaInfo>;
interface MessageFns$25<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/message_proto_perception_sheet_info.d.ts
interface PerceptionSheetInfo {
  iconType: PerceptionDialogIconType;
  title: Text | undefined;
  subTitle: Text | undefined;
  reasonTitle: Text | undefined;
  reasonInfo: Text | undefined;
  notAllowedTitle: Text | undefined;
  notAllowedText: Text | undefined;
  defaultActionText: Text | undefined;
  scene: number;
  targetUserId: string;
  targetRoomId: string;
  countDownTime: string;
}
declare const PerceptionSheetInfo: MessageFns$24<PerceptionSheetInfo>;
interface MessageFns$24<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/base/emoji.d.ts
interface EmoteModel {
  emoteId: string;
  image: ImageModel | undefined;
  auditStatus: AuditStatus;
  uuid: string;
  emoteType: EmoteType;
  contentSource: ContentSource;
  emotePrivateType: EmotePrivateType;
  packageId: string;
  auditInfo: EmoteModelAuditInfo | undefined;
  rewardCondition: RewardCondition;
  emoteUploadInfo: EmoteUploadInfo | undefined;
  createTime: string;
  emoteScene: EmoteScene;
}
interface EmoteWithIndex {
  index: number;
  emote: EmoteModel | undefined;
}
declare const EmoteModel: MessageFns$23<EmoteModel>;
declare const EmoteWithIndex: MessageFns$23<EmoteWithIndex>;
interface MessageFns$23<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/color_group.d.ts
interface Gift {
  image: ImageModel | undefined;
  describe: string;
  duration: number;
  id: string;
  forLinkmic: boolean;
  combo: boolean;
  type: number;
  diamondCount: number;
  isDisplayedOnPanel: boolean;
  primaryEffectId: string;
  giftLabelIcon: ImageModel | undefined;
  name: string;
  icon: ImageModel | undefined;
  goldEffect: string;
  previewImage: ImageModel | undefined;
  giftPanelBanner: GiftPanelBanner | undefined;
  isBroadcastGift: boolean;
  isEffectBefview: boolean;
  isRandomGift: boolean;
  isBoxGift: boolean;
  canPutInGiftBox: boolean;
  giftBoxInfo: GiftBoxInfo | undefined;
  trackerParams: {
    [key: string]: string;
  };
  lockInfo: GiftLockInfo | undefined;
  colorInfos: GiftColorInfo[];
  giftRankRecommendInfo: string;
  randomEffectInfo: GiftRandomEffectInfo | undefined;
  giftSubType: number;
  giftVerticalScenarios: number[];
  groupInTab: number;
  isGalleryGift: boolean;
  giftSponsorInfo: GiftSponsorInfo | undefined;
  giftSkins: GiftSkin[];
  giftLabelType: number;
  giftTexts: GiftText[];
  giftSkinToGiftTextsInfos: GiftSkinToGiftTextsInfo[];
  expirationTimestamp: string;
  batchGiftInfo: BatchGiftInfo | undefined;
  isGlobalGift: boolean;
  disableGalleryBanner: boolean;
  ugGiftInfo: UGGiftStructInfo | undefined;
  crossScreenEffectInfo: CrossScreenEffectInfo | undefined;
  beaconBubble: GiftPanelBeaconBubble | undefined;
  giftResources: {
    [key: string]: GiftResource;
  };
  resourceId: string;
  bizExtra: {
    [key: string]: string;
  };
  lynxCrossScreenEffectInfo: LynxCrossScreenEffectInfo | undefined;
  giftStructHash: string;
  schemeInfo: SchemeInfo | undefined;
  seriesInfo: GiftSeriesInfo | undefined;
  colorPickerInfo: ColorPickerInfo | undefined;
  musicInfo: MusicGiftInfo | undefined;
  giftBottomRightLabelIcon: ImageModel | undefined;
  strategyEvent: string;
}
interface Gift_TrackerParamsEntry {
  key: string;
  value: string;
}
interface Gift_GiftResourcesEntry {
  key: string;
  value: GiftResource | undefined;
}
interface Gift_BizExtraEntry {
  key: string;
  value: string;
}
interface GiftPanelBanner {
  displayText: Text | undefined;
  leftIcon: ImageModel | undefined;
  schemaUrl: string;
  bgColorValues: string[];
  bannerLynxUrl: string;
  bannerPriority: number;
  bannerLynxExtra: string;
  bgImage: ImageModel | undefined;
}
interface GiftTrayInfo {
  trayDynamicImg: ImageModel | undefined;
  canMirror: boolean;
  trayNormalBgImg: ImageModel | undefined;
  trayNormalBgColor: string[];
  traySmallBgImg: ImageModel | undefined;
  traySmallBgColor: string[];
  rightTagText: Text | undefined;
  rightTagBgImg: ImageModel | undefined;
  rightTagBgColor: string[];
  trayNameTextColor: string;
  trayDescTextColor: string;
  rightTagJumpSchema: string;
  giftTrayJumpSchema: string;
}
declare const Gift: MessageFns$22<Gift>;
declare const Gift_TrackerParamsEntry: MessageFns$22<Gift_TrackerParamsEntry>;
declare const Gift_GiftResourcesEntry: MessageFns$22<Gift_GiftResourcesEntry>;
declare const Gift_BizExtraEntry: MessageFns$22<Gift_BizExtraEntry>;
declare const GiftPanelBanner: MessageFns$22<GiftPanelBanner>;
declare const GiftTrayInfo: MessageFns$22<GiftTrayInfo>;
interface MessageFns$22<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/data/multi_guest_play.d.ts
declare enum PlayScene {
  UNKNOWN = 0,
  COUNTDOWN_FOR_ALL = 1,
  COUNTDOWN_FOR_SINGLE = 2,
  LIVE_SHOW = 3,
  AIGC = 4,
  KARAOKE = 5,
  DRAW_GUESS = 6,
  ENLARGE_GRID = 7,
  GIFT_PRIORITY_LINK = 8,
  GIFT_THRESHOLD_LINK = 9,
  NOTICE_BOARD = 10,
  PLAY_BOOK = 11,
  GUEST_SHOWDOWN = 12,
  UNRECOGNIZED = -1
}
declare enum PlayUserTag {
  PLAY_USER_TAG_UNKNOWN = 0,
  GUEST_SHOWDOWN_NORMAL = 1,
  GUEST_SHOWDOWN_WINNER = 2,
  GUEST_SHOWDOWN_LOSER = 3,
  UNRECOGNIZED = -1
}
//#endregion
//#region src/generated/node/v3/webcast/model/data/oec_msg.d.ts
interface AtmosphereInfo {
  tags: Tag[];
}
interface AtomAction {
  type: number;
  requestItem: ReqItem | undefined;
}
interface AuctionInfo {
  auctionId: string;
  productId: string;
  versionTime: string;
  startTime: string;
  endTime: string;
  auctionWinner: UserInfo$1 | undefined;
  winnerBidPrice: PriceItem | undefined;
  nextBidPrice: PriceItem | undefined;
  suffix: string;
  extendAuctionCfg: ExtendAuctionCfg | undefined;
  auctionTextType: number;
  scrollElementList: ScrollElement[];
  rewardItem: ScrollElement | undefined;
  drawingStateTextType: number;
  auctionConfigId: string;
  auctionType: number;
  auctionStatus: number;
  isCarousel: boolean;
  carouselCfg: CarouselCfg | undefined;
  auctionTextTypeInt: number;
  drawingStateTextTypeInt: number;
  versionTimeStr: string;
  traceTimeMap: {
    [key: string]: string;
  };
  easterEgg: EasterEgg | undefined;
  auctionKnockPerformMiddleTextType: number;
  auctionKnockPerformBottomRightTextType: number;
  auctionIdStr: string;
  auctionConfigIdStr: string;
  auctionCardBottomTextType: number;
  auctionCardTitleTextType: number;
  surpriseSetRemainItemCount: number;
  auctionEventTypeInt: number;
  bidPanel: BidPanel | undefined;
  lynxCardInfo: string;
}
interface AuctionInfo_TraceTimeMapEntry {
  key: string;
  value: string;
}
interface AuctionWinnerPopup {
  auctionId: string;
  winnerUserId: string;
  productId: string;
  notifyType: number;
  paymentExpireTimestamp: string;
  productImg: ImageModel | undefined;
  schema: string;
}
interface BagIndex {
  value: number;
}
interface BidPanel {
  bidBtnTextTypeInt: number;
}
interface CarouselCfg {
  intervalMs: string;
  textStatusList: number[];
  times: number;
}
interface CommerceInfo {
  productInfo: {
    [key: string]: ProductItem;
  };
  popCardInfo: PopCardInfo | undefined;
  popupWindowInfo: PopupWindowInfo | undefined;
  voucherInfo: {
    [key: string]: VoucherItem;
  };
  auctionInfo: AuctionInfo | undefined;
}
interface CommerceInfo_ProductInfoEntry {
  key: string;
  value: ProductItem | undefined;
}
interface CommerceInfo_VoucherInfoEntry {
  key: string;
  value: VoucherItem | undefined;
}
interface DispersionParam {
  maxDelayMs: string;
  minDelayMs: string;
}
interface EasterEgg {
  winnerRank: string;
  winnerRankTextType: number;
  winnerRoomWinCnt: string;
  winnerRoomWinCntTextType: number;
  winnerRankTextTypeTail: number;
  winnerRoomWinCntTextTypeTail: number;
}
interface EcomLiveElementActions {
  atomActions: AtomAction[];
  version: string;
}
interface ExtendAuctionCfg {
  isExtendAuctionSupported: boolean;
  shouldExtend: boolean;
  extendAuctionTime: string;
}
interface FlashSaleEnhancementInfo {
  stockShowStatus: number;
  buyerInfos: UserInfo$1[];
  enhancementTextInfo: EnhancementTextInfo | undefined;
}
interface LiveFlashSaleInfo {
  activityId: string;
  type: number;
  status: number;
  stockStatus: number;
  availableStock: number;
  totalStock: number;
  enhancementInfo: FlashSaleEnhancementInfo | undefined;
  pdpViewerCount: number;
}
interface MsgMeta {
  sourceOperateMs: string;
  serverSendMs: string;
  reasons: string[];
}
interface OecLiveShoppingMessageV2 {
  actions: {
    [key: string]: EcomLiveElementActions;
  };
  commerceInfo: CommerceInfo | undefined;
  msgMeta: MsgMeta | undefined;
}
interface OecLiveShoppingMessageV2_ActionsEntry {
  key: string;
  value: EcomLiveElementActions | undefined;
}
interface PopCardInfo {
  popProductId: string;
  popCardType: number;
  popCardId: string;
}
interface PopupWindowInfo {
  auctionWinnerPopup: AuctionWinnerPopup | undefined;
}
interface PriceHideInfo {
  displayText: string;
}
interface PriceItem {
  currencyName: string;
  currencySymbol: string;
  symbolPosition: number;
  salePriceDecimal: string;
  originPriceDecimal: string;
  salePriceFormat: string;
  originPriceFormat: string;
  discountFormat: string;
  discountDecimal: string;
  pricePrefix: string;
  reducePriceFormat: string;
  singleProductPriceFormat: string;
  showCurrencySpace: boolean;
  currencyShowMode: number;
  priceDisplayMode: number;
  priceHideInfo: PriceHideInfo | undefined;
}
interface ProductItem {
  productId: string;
  bagIndex: BagIndex | undefined;
  title: Title | undefined;
  cover: ImageModel | undefined;
  atmosphereInfo: AtmosphereInfo | undefined;
  shopBrandLogo: ShopBrandLogo | undefined;
  liveFlashSaleInfo: LiveFlashSaleInfo | undefined;
  auctionInfo: AuctionInfo | undefined;
}
interface ReqItem {
  scene: number;
  dispersionParam: DispersionParam | undefined;
}
interface ScrollElement {
  productTitle: string;
}
interface ShopBrandLogo {
  sellerName: string;
  sellerLogo: ImageModel | undefined;
  blueVImage: ImageModel | undefined;
  darkBlueVImage: ImageModel | undefined;
  topBrandImage: ImageModel | undefined;
  darkTopBrandImage: ImageModel | undefined;
}
interface Tag {
  type: number;
  desc: string;
  count: string;
  status: number;
}
interface Title {
  text: string;
}
interface UserInfo$1 {
  userId: string;
  nickName: string;
  avatar: ImageModel | undefined;
  isWinner: boolean;
}
interface VoucherItem {
  voucherTypeId: string;
  taskId: string;
  taskType: number;
  liveVoucherType: number;
  creatorOperationUniqueId: string;
  voucherMaxFaceValue: string;
}
declare const AtmosphereInfo: MessageFns$21<AtmosphereInfo>;
declare const AtomAction: MessageFns$21<AtomAction>;
declare const AuctionInfo: MessageFns$21<AuctionInfo>;
declare const AuctionInfo_TraceTimeMapEntry: MessageFns$21<AuctionInfo_TraceTimeMapEntry>;
declare const AuctionWinnerPopup: MessageFns$21<AuctionWinnerPopup>;
declare const BagIndex: MessageFns$21<BagIndex>;
declare const BidPanel: MessageFns$21<BidPanel>;
declare const CarouselCfg: MessageFns$21<CarouselCfg>;
declare const CommerceInfo: MessageFns$21<CommerceInfo>;
declare const CommerceInfo_ProductInfoEntry: MessageFns$21<CommerceInfo_ProductInfoEntry>;
declare const CommerceInfo_VoucherInfoEntry: MessageFns$21<CommerceInfo_VoucherInfoEntry>;
declare const DispersionParam: MessageFns$21<DispersionParam>;
declare const EasterEgg: MessageFns$21<EasterEgg>;
declare const EcomLiveElementActions: MessageFns$21<EcomLiveElementActions>;
declare const ExtendAuctionCfg: MessageFns$21<ExtendAuctionCfg>;
declare const FlashSaleEnhancementInfo: MessageFns$21<FlashSaleEnhancementInfo>;
declare const LiveFlashSaleInfo: MessageFns$21<LiveFlashSaleInfo>;
declare const MsgMeta: MessageFns$21<MsgMeta>;
declare const OecLiveShoppingMessageV2: MessageFns$21<OecLiveShoppingMessageV2>;
declare const OecLiveShoppingMessageV2_ActionsEntry: MessageFns$21<OecLiveShoppingMessageV2_ActionsEntry>;
declare const PopCardInfo: MessageFns$21<PopCardInfo>;
declare const PopupWindowInfo: MessageFns$21<PopupWindowInfo>;
declare const PriceHideInfo: MessageFns$21<PriceHideInfo>;
declare const PriceItem: MessageFns$21<PriceItem>;
declare const ProductItem: MessageFns$21<ProductItem>;
declare const ReqItem: MessageFns$21<ReqItem>;
declare const ScrollElement: MessageFns$21<ScrollElement>;
declare const ShopBrandLogo: MessageFns$21<ShopBrandLogo>;
declare const Tag: MessageFns$21<Tag>;
declare const Title: MessageFns$21<Title>;
declare const UserInfo$1: MessageFns$21<UserInfo$1>;
declare const VoucherItem: MessageFns$21<VoucherItem>;
interface MessageFns$21<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/game.d.ts
interface WebcastAccessRecallMessage {
  common: CommonMessageData | undefined;
  status: number;
  duration: string;
  endTime: string;
  scene: string;
  notice: Text | undefined;
  content: Text | undefined;
  punishInfo: PunishEventInfo | undefined;
}
declare const WebcastAccessRecallMessage: MessageFns$20<WebcastAccessRecallMessage>;
interface MessageFns$20<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/gift/model_asset_bundle.d.ts
interface AssetBundle {
  assets: AssetsModel[];
  prefabBundle: PrefabBundle | undefined;
  streamEffectSpec: GiftEffectStreamSpec | undefined;
}
declare const AssetBundle: MessageFns$19<AssetBundle>;
interface MessageFns$19<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/gift/model_gift_effect.d.ts
interface GiftEffect {
  assets: AssetsModel[];
  specs: GiftEffectSpecs | undefined;
  eventTrackingParams: {
    [key: string]: string;
  };
}
interface GiftEffect_EventTrackingParamsEntry {
  key: string;
  value: string;
}
declare const GiftEffect: MessageFns$18<GiftEffect>;
declare const GiftEffect_EventTrackingParamsEntry: MessageFns$18<GiftEffect_EventTrackingParamsEntry>;
interface MessageFns$18<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/gift/model_webcast_goal_update_message.d.ts
interface WebcastGoalUpdateMessage {
  common: CommonMessageData | undefined;
  indicator: LiveStreamGoalIndicator | undefined;
  goal: LiveStreamGoal | undefined;
  contributorId: string;
  contributorAvatar: ImageModel | undefined;
  contributorDisplayId: string;
  contributeSubgoal: LiveStreamSubGoal | undefined;
  contributeCount: string;
  contributeScore: string;
  giftRepeatCount: string;
  contributorIdStr: string;
  pinInfo: GoalPinInfo | undefined;
  updateSource: GoalMessageSource;
  goalExtra: string;
}
declare const WebcastGoalUpdateMessage: MessageFns$17<WebcastGoalUpdateMessage>;
interface MessageFns$17<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/linksetting.d.ts
interface MultiLiveUpdateUserSettingContent {
  updateUserSettingInfo: MultiLiveAnchorPanelSettings | undefined;
  anchorLayoutSetting: AnchorLayoutSetting | undefined;
  resetPointAfterLeave: number;
}
declare const MultiLiveUpdateUserSettingContent: MessageFns$16<MultiLiveUpdateUserSettingContent>;
interface MessageFns$16<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/live_match.d.ts
interface AnchorGiftModeMetaMap {
  anchorGiftModeMetas: {
    [key: string]: GiftModeMetaList;
  };
}
interface AnchorGiftModeMetaMap_AnchorGiftModeMetasEntry {
  key: string;
  value: GiftModeMetaList | undefined;
}
interface AnchorMatchSettings {
  enableAiCommentary: boolean;
}
interface BattleABTest {
  abTestType: BattleABTestType;
  group: number;
}
interface BattleABTestList {
  abTestList: BattleABTest[];
}
interface BattleABTestSetting {
  key: string;
  value: BattleABTestList | undefined;
}
interface BattleBaseUserInfo {
  userId: string;
  nickName: string;
  avatarThumb: ImageModel | undefined;
  displayId: string;
  roomId: string;
  invitationRole: number;
}
interface BattleBonusConfig {
  previewStartTime: string;
  previewConfig: PreviewPeriod[];
  targetConfig: TaskPeriodConfig | undefined;
  rewardConfig: RewardPeriodConfig | undefined;
  giftAmountGuide: {
    [key: string]: BattleTaskGiftAmountGuide;
  };
  previewStartTimestamp: string;
  previewClickActionSchemaUrl: string;
}
interface BattleBonusConfig_GiftAmountGuideEntry {
  key: string;
  value: BattleTaskGiftAmountGuide | undefined;
}
interface BattleComboInfo {
  userId: string;
  comboStatus: string;
  comboCount: string;
  comboIconUrl: string;
  comboType: number;
  comboRuleGuideSchema: string;
  userIdStr: string;
  comboCountStr: string;
}
interface BattleEffect {
  type: string;
  uidList: string[];
  effectExtra: string;
}
interface BattleEffectInfos {
  effectInfoList: BattleEffect[];
  effectListVersion: string;
}
interface BattleFeatureFlags {
  enableMatchCountdownOptimization: boolean;
  hideComboCountOnStart: boolean;
}
interface BattlePrompt {
  promptKey: string;
  elems: BattlePromptElem[];
}
interface BattlePromptElem {
  promptField: string;
  value: string;
}
interface BattleRivalTag {
  bgImage: ImageModel | undefined;
  iconImage: ImageModel | undefined;
  content: string;
}
interface BattleTaskGiftAmountGuide {
  guidePrompt: BattlePrompt | undefined;
  promptType: number;
  disappearDuration: number;
  iconImage: ImageModel | undefined;
  giftImage: ImageModel | undefined;
  recommendGiftId: string;
  recommendGiftCount: number;
  guideContent: Text | undefined;
}
interface BattleTeamResult {
  teamId: string;
  teamUser: BattleTeamUser[];
  result: number;
  totalScore: string;
  totalEnigmaScore: string;
  totalEnigmaUv: string;
}
interface BattleTeamUser {
  userId: string;
  score: string;
  userIdStr: string;
  enigmaScore: string;
}
interface BattleUserInfo {
  user: BattleBaseUserInfo | undefined;
  tags: BattleRivalTag[];
}
interface BestTeammateRelation {
  userId: string;
  bestTeammateId: string;
}
interface CohostContentGuideInfo {
  recommendedBattleType: number;
}
interface CommonCardInfo {
  cardNameKey: string;
  cardImage: ImageModel | undefined;
  sendTimeSec: string;
  sendUser: BattleUserInfo | undefined;
  effectLastDuration: string;
  ruleUrl: string;
  effectTimeSec: string;
  toAnchorId: string;
  toAnchorIdStr: string;
}
interface CommunityActiveDecoration {
  decorationId: string;
  slotType: number;
  images: {
    [key: number]: ImageModel;
  };
}
interface CommunityActiveDecoration_ImagesEntry {
  key: number;
  value: ImageModel | undefined;
}
interface CommunityHeartMeInfo {
  slots: {
    [key: number]: CommunityActiveDecoration;
  };
  thrownItemImage: ImageModel | undefined;
  anchorCommunityLevel: string;
}
interface CommunityHeartMeInfo_SlotsEntry {
  key: number;
  value: CommunityActiveDecoration | undefined;
}
interface CriticalStrikeCardInfo {
  cardNameKey: string;
  cardImage: ImageModel | undefined;
  sendTimeSec: string;
  sendUser: BattleUserInfo | undefined;
  effectLastDuration: string;
  criticalStrikeRateLow: string;
  criticalStrikeRateHigh: string;
  multiple: string;
  giftNameKey: string;
  ruleUrl: string;
  effectTimeSec: string;
  toAnchorId: string;
  toAnchorIdStr: string;
}
interface EnigmaBattleExtraInfo {
  hasStarted: boolean;
  isGiftFromEnigma: boolean;
}
interface EnigmaBattleSetting {
  isStartable: boolean;
  enigmaBattleCampaignStart: string;
  enigmaBattleCampaignEnd: string;
  enigmaScoreRevealCountdownSec: string[];
  enigmaScoreRevealDurationSec: string;
}
interface ExtraTimeCardInfo {
  cardNameKey: string;
  cardImage: ImageModel | undefined;
  sendTimeSec: string;
  sendUser: BattleUserInfo | undefined;
  effectLastDuration: string;
  ruleUrl: string;
  effectTimeSec: string;
  toAnchorId: string;
  extraDurationSec: string;
  toAnchorIdStr: string;
}
interface GiftModeMeta {
  giftId: string;
  giftNameKey: string;
  giftIconImage: ImageModel | undefined;
  giftModeDesc: Text | undefined;
}
interface GiftModeMetaList {
  giftModeMeta: GiftModeMeta[];
}
interface GiftModeMetaV2 {
  anchorGiftModeMetaByType: {
    [key: string]: AnchorGiftModeMetaMap;
  };
}
interface GiftModeMetaV2_AnchorGiftModeMetaByTypeEntry {
  key: string;
  value: AnchorGiftModeMetaMap | undefined;
}
interface HighScoreControlCfg {
  normalControlApplied: boolean;
  threshold: string;
  originDisplayToUserList: string[];
}
interface LeagueScoreInfo {
  estimatedScore: string;
  isOptOut: boolean;
  isActivityPeriod: boolean;
  contentText: Text | undefined;
  classOptOut: boolean;
  contentTextOpen: Text | undefined;
  matchTheme: number;
  leftIcon: ImageModel | undefined;
  rightIcon: ImageModel | undefined;
  rightSchemaJumpLink: string;
}
interface MatchInvitePanelConfig {
  headerText: Text | undefined;
  headerTextDarkMode: Text | undefined;
  descText: Text | undefined;
  descTextDarkMode: Text | undefined;
}
interface MatchOpeningAnimationConfig {
  startAnimationRule: string;
}
interface MatchPunishEffectInfo {
  userToEffectMap: {
    [key: string]: string;
  };
  effectToEffectStructMap: {
    [key: string]: EffectStruct;
  };
}
interface MatchPunishEffectInfo_UserToEffectMapEntry {
  key: string;
  value: string;
}
interface MatchPunishEffectInfo_EffectToEffectStructMapEntry {
  key: string;
  value: EffectStruct | undefined;
}
interface MatchPunishExtraInfo {
  matchPunishEffectInfo: MatchPunishEffectInfo | undefined;
  cohostContentGuideInfo: CohostContentGuideInfo | undefined;
  recommendedPlaybookInfo: RecommendedPlaybookInfo | undefined;
}
interface MatchThemeDisplayResource {
  matchTheme: number;
  matchOpeningAnimationConfig: MatchOpeningAnimationConfig | undefined;
  matchTitleBarConfig: MatchTitleBarConfig | undefined;
  matchInvitePanelConfig: MatchInvitePanelConfig | undefined;
}
interface MatchTitleBarConfig {
  displayRules: MatchTitleBarDisplayRule[];
}
interface MatchTitleBarDisplayRule {
  trigger: MatchTitleBarTrigger | undefined;
  displayResource: TitleBarDisplayResource | undefined;
}
interface MatchTitleBarTrigger {
  type: number;
}
interface PlaybookBizExtra {
  customAtomicCapabilities: {
    [key: string]: string;
  };
}
interface PlaybookBizExtra_CustomAtomicCapabilitiesEntry {
  key: string;
  value: string;
}
interface PotionCardInfo {
  cardNameKey: string;
  cardImage: ImageModel | undefined;
  sendTimeSec: string;
  sendUser: BattleUserInfo | undefined;
  effectLastDuration: string;
  ruleUrl: string;
  effectTimeSec: string;
  toAnchorId: string;
}
interface PreviewPeriod {
  duration: string;
  prompt: BattlePrompt | undefined;
  iconImage: ImageModel | undefined;
}
interface RecommendedPlaybookInfo {
  playbookIds: string[];
  playbookBizExtras: {
    [key: string]: PlaybookBizExtra;
  };
}
interface RecommendedPlaybookInfo_PlaybookBizExtrasEntry {
  key: string;
  value: PlaybookBizExtra | undefined;
}
interface RewardPeriodConfig {
  rewardStartTime: string;
  duration: string;
  rewardMultiple: number;
  rewardStartTimestamp: string;
  rewardPreparePrompt: BattlePrompt | undefined;
  rewardingPrompt: BattlePrompt | undefined;
  clickPrompt: BattlePrompt | undefined;
}
interface SmokeCardInfo {
  cardNameKey: string;
  cardImage: ImageModel | undefined;
  sendTimeSec: string;
  sendUser: BattleUserInfo | undefined;
  effectLastDuration: string;
  ruleUrl: string;
  effectTimeSec: string;
  toAnchorId: string;
  toAnchorIdStr: string;
}
interface SpecialEffectCardInfo {
  cardNameKey: string;
  cardImage: ImageModel | undefined;
  sendTimeSec: string;
  sendUser: BattleUserInfo | undefined;
  effectLastDuration: string;
  ruleUrl: string;
  effectTimeSec: string;
  toAnchorId: string;
  toAnchorIdStr: string;
}
interface TaskPeriodConfig {
  targetStartTime: string;
  duration: string;
  targetStartTimestamp: string;
  clickAction: number;
  clickPrompt: BattlePrompt | undefined;
  promptType: number;
  staticPrompt: BattlePrompt | undefined;
  progressTarget: string;
  targetType: number;
  iconImage: ImageModel | undefined;
  clickActionSchemaUrl: string;
}
interface TeamMatchCampaign {
  bestTeammateRelation: BestTeammateRelation[];
  startSfxTeamId: string[];
  hasTeamMatchMvpSfx: boolean;
}
interface TitleBarDisplayResource {
  leftIcon: ImageModel | undefined;
  contentText: Text | undefined;
  rightIcon: ImageModel | undefined;
  rightIconSchemaUrl: string;
  durationMs: string;
}
interface Top2CardInfo {
  common: CommonCardInfo | undefined;
}
interface Top3CardInfo {
  common: CommonCardInfo | undefined;
}
interface VaultGloveCardInfo {
  common: CommonCardInfo | undefined;
  giftNameKey: string;
  multiple: string;
  multipleOther: string;
  criticalStrikeRateLow: string;
  criticalStrikeRateHigh: string;
}
interface WaveCardInfo {
  cardNameKey: string;
  cardImage: ImageModel | undefined;
  sendTimeSec: string;
  sendUser: BattleUserInfo | undefined;
  effectLastDuration: string;
  ruleUrl: string;
  effectTimeSec: string;
  toAnchorId: string;
}
declare const AnchorGiftModeMetaMap: MessageFns$15<AnchorGiftModeMetaMap>;
declare const AnchorGiftModeMetaMap_AnchorGiftModeMetasEntry: MessageFns$15<AnchorGiftModeMetaMap_AnchorGiftModeMetasEntry>;
declare const AnchorMatchSettings: MessageFns$15<AnchorMatchSettings>;
declare const BattleABTest: MessageFns$15<BattleABTest>;
declare const BattleABTestList: MessageFns$15<BattleABTestList>;
declare const BattleABTestSetting: MessageFns$15<BattleABTestSetting>;
declare const BattleBaseUserInfo: MessageFns$15<BattleBaseUserInfo>;
declare const BattleBonusConfig: MessageFns$15<BattleBonusConfig>;
declare const BattleBonusConfig_GiftAmountGuideEntry: MessageFns$15<BattleBonusConfig_GiftAmountGuideEntry>;
declare const BattleComboInfo: MessageFns$15<BattleComboInfo>;
declare const BattleEffect: MessageFns$15<BattleEffect>;
declare const BattleEffectInfos: MessageFns$15<BattleEffectInfos>;
declare const BattleFeatureFlags: MessageFns$15<BattleFeatureFlags>;
declare const BattlePrompt: MessageFns$15<BattlePrompt>;
declare const BattlePromptElem: MessageFns$15<BattlePromptElem>;
declare const BattleRivalTag: MessageFns$15<BattleRivalTag>;
declare const BattleTaskGiftAmountGuide: MessageFns$15<BattleTaskGiftAmountGuide>;
declare const BattleTeamResult: MessageFns$15<BattleTeamResult>;
declare const BattleTeamUser: MessageFns$15<BattleTeamUser>;
declare const BattleUserInfo: MessageFns$15<BattleUserInfo>;
declare const BestTeammateRelation: MessageFns$15<BestTeammateRelation>;
declare const CohostContentGuideInfo: MessageFns$15<CohostContentGuideInfo>;
declare const CommonCardInfo: MessageFns$15<CommonCardInfo>;
declare const CommunityActiveDecoration: MessageFns$15<CommunityActiveDecoration>;
declare const CommunityActiveDecoration_ImagesEntry: MessageFns$15<CommunityActiveDecoration_ImagesEntry>;
declare const CommunityHeartMeInfo: MessageFns$15<CommunityHeartMeInfo>;
declare const CommunityHeartMeInfo_SlotsEntry: MessageFns$15<CommunityHeartMeInfo_SlotsEntry>;
declare const CriticalStrikeCardInfo: MessageFns$15<CriticalStrikeCardInfo>;
declare const EnigmaBattleExtraInfo: MessageFns$15<EnigmaBattleExtraInfo>;
declare const EnigmaBattleSetting: MessageFns$15<EnigmaBattleSetting>;
declare const ExtraTimeCardInfo: MessageFns$15<ExtraTimeCardInfo>;
declare const GiftModeMeta: MessageFns$15<GiftModeMeta>;
declare const GiftModeMetaList: MessageFns$15<GiftModeMetaList>;
declare const GiftModeMetaV2: MessageFns$15<GiftModeMetaV2>;
declare const GiftModeMetaV2_AnchorGiftModeMetaByTypeEntry: MessageFns$15<GiftModeMetaV2_AnchorGiftModeMetaByTypeEntry>;
declare const HighScoreControlCfg: MessageFns$15<HighScoreControlCfg>;
declare const LeagueScoreInfo: MessageFns$15<LeagueScoreInfo>;
declare const MatchInvitePanelConfig: MessageFns$15<MatchInvitePanelConfig>;
declare const MatchOpeningAnimationConfig: MessageFns$15<MatchOpeningAnimationConfig>;
declare const MatchPunishEffectInfo: MessageFns$15<MatchPunishEffectInfo>;
declare const MatchPunishEffectInfo_UserToEffectMapEntry: MessageFns$15<MatchPunishEffectInfo_UserToEffectMapEntry>;
declare const MatchPunishEffectInfo_EffectToEffectStructMapEntry: MessageFns$15<MatchPunishEffectInfo_EffectToEffectStructMapEntry>;
declare const MatchPunishExtraInfo: MessageFns$15<MatchPunishExtraInfo>;
declare const MatchThemeDisplayResource: MessageFns$15<MatchThemeDisplayResource>;
declare const MatchTitleBarConfig: MessageFns$15<MatchTitleBarConfig>;
declare const MatchTitleBarDisplayRule: MessageFns$15<MatchTitleBarDisplayRule>;
declare const MatchTitleBarTrigger: MessageFns$15<MatchTitleBarTrigger>;
declare const PlaybookBizExtra: MessageFns$15<PlaybookBizExtra>;
declare const PlaybookBizExtra_CustomAtomicCapabilitiesEntry: MessageFns$15<PlaybookBizExtra_CustomAtomicCapabilitiesEntry>;
declare const PotionCardInfo: MessageFns$15<PotionCardInfo>;
declare const PreviewPeriod: MessageFns$15<PreviewPeriod>;
declare const RecommendedPlaybookInfo: MessageFns$15<RecommendedPlaybookInfo>;
declare const RecommendedPlaybookInfo_PlaybookBizExtrasEntry: MessageFns$15<RecommendedPlaybookInfo_PlaybookBizExtrasEntry>;
declare const RewardPeriodConfig: MessageFns$15<RewardPeriodConfig>;
declare const SmokeCardInfo: MessageFns$15<SmokeCardInfo>;
declare const SpecialEffectCardInfo: MessageFns$15<SpecialEffectCardInfo>;
declare const TaskPeriodConfig: MessageFns$15<TaskPeriodConfig>;
declare const TeamMatchCampaign: MessageFns$15<TeamMatchCampaign>;
declare const TitleBarDisplayResource: MessageFns$15<TitleBarDisplayResource>;
declare const Top2CardInfo: MessageFns$15<Top2CardInfo>;
declare const Top3CardInfo: MessageFns$15<Top3CardInfo>;
declare const VaultGloveCardInfo: MessageFns$15<VaultGloveCardInfo>;
declare const WaveCardInfo: MessageFns$15<WaveCardInfo>;
interface MessageFns$15<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/message/battle.d.ts
interface BattleDisplayConfig {
  threshold: number;
  text: string;
  diffThreshold: number;
  diffText: string;
  exemptStrategy: ExemptStrategy | undefined;
}
interface BattleResult {
  userId: string;
  result: BattleResultResult;
  score: string;
  diamondScore: string;
  enigmaScore: string;
  enigmaUv: string;
}
interface BattleRewardSettle {
  prompt: BattlePrompt | undefined;
  status: BattleRewardSettleRewardStatus;
}
interface BattleSetting {
  battleId: string;
  startTimeMs: string;
  duration: number;
  channelId: string;
  status: BattleSettingsBattleStatus;
  inviteType: BattleInviteType;
  giftModeMeta: GiftModeMeta | undefined;
  battleType: BattleType;
  extraDurationSecond: string;
  endTimeMs: string;
  scene: BattleScene;
  sourceType: string;
  iceShowdownSetting: IceShowdownSetting;
  gameplayOption: MatchGameplayOption;
  giftModeMetaV2: GiftModeMetaV2 | undefined;
}
interface BattleTaskSettle {
  result: BattleTaskSettleResult;
  rewardStartTime: string;
  rewardStartTimestamp: string;
}
interface BattleTaskStart {
  config: BattleBonusConfig | undefined;
}
interface BattleTaskUpdate {
  progress: string;
  fromUserId: string;
  promptKey: string;
  logId: string;
}
interface BattleUserArmies {
  userArmies: BattleUserArmy[];
  hostscore: string;
  anchorIdStr: string;
  hostEnigmaScore: string;
  hostEnigmaUv: string;
}
interface BattleUserArmy {
  userId: string;
  score: string;
  nickname: string;
  avatarThumb: ImageModel | undefined;
  diamondScore: string;
  userIdStr: string;
  enigmaScore: string;
  isEnigma: boolean;
}
interface BattleUserInfoWrapper {
  key: string;
  value: BattleUserInfo | undefined;
}
interface ExemptStrategy {
  exemptBothHost: boolean;
  exemptAudienceTop: number;
}
interface SupportedActionsWrapper {
  key: string;
  value: boolean;
}
interface UserArmiesWrapper {
  key: string;
  value: BattleUserArmies | undefined;
}
declare const BattleDisplayConfig: MessageFns$14<BattleDisplayConfig>;
declare const BattleResult: MessageFns$14<BattleResult>;
declare const BattleRewardSettle: MessageFns$14<BattleRewardSettle>;
declare const BattleSetting: MessageFns$14<BattleSetting>;
declare const BattleTaskSettle: MessageFns$14<BattleTaskSettle>;
declare const BattleTaskStart: MessageFns$14<BattleTaskStart>;
declare const BattleTaskUpdate: MessageFns$14<BattleTaskUpdate>;
declare const BattleUserArmies: MessageFns$14<BattleUserArmies>;
declare const BattleUserArmy: MessageFns$14<BattleUserArmy>;
declare const BattleUserInfoWrapper: MessageFns$14<BattleUserInfoWrapper>;
declare const ExemptStrategy: MessageFns$14<ExemptStrategy>;
declare const SupportedActionsWrapper: MessageFns$14<SupportedActionsWrapper>;
declare const UserArmiesWrapper: MessageFns$14<UserArmiesWrapper>;
interface MessageFns$14<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/live_match_battle_team_user_armies.d.ts
interface BattleTeamUserArmies {
  teamId: string;
  teamUser: BattleTeamUser[];
  teamTotalScore: string;
  userArmies: BattleUserArmies | undefined;
  hostRank: string;
  teamTotalEnigmaScore: string;
  teamTotalEnigmaUv: string;
  hostVisibleRankFromTeamId: {
    [key: string]: string;
  };
}
interface BattleTeamUserArmies_HostVisibleRankFromTeamIdEntry {
  key: string;
  value: string;
}
declare const BattleTeamUserArmies: MessageFns$13<BattleTeamUserArmies>;
declare const BattleTeamUserArmies_HostVisibleRankFromTeamIdEntry: MessageFns$13<BattleTeamUserArmies_HostVisibleRankFromTeamIdEntry>;
interface MessageFns$13<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/synthetic_enums.d.ts
declare enum MemberMessageAction {
  MEMBER_MESSAGE_ACTION_UNKNOWN = 0,
  MEMBER_MESSAGE_ACTION_JOINED = 1,
  MEMBER_MESSAGE_ACTION_SUBSCRIBED = 3,
  UNRECOGNIZED = -1
}
declare enum CommentTag {
  COMMENT_TAG_NORMAL = 0,
  COMMENT_TAG_CANDIDATE = 1,
  COMMENT_TAG_OVERAGE = 2,
  UNRECOGNIZED = -1
}
declare enum MuteStatus {
  MUTE_STATUS_MUTE = 0,
  MUTE_STATUS_UN_MUTE = 1,
  UNRECOGNIZED = -1
}
declare enum ControlAction {
  CONTROL_ACTION_FALLBACK_UNKNOWN = 0,
  CONTROL_ACTION_STREAM_PAUSED = 1,
  CONTROL_ACTION_STREAM_UNPAUSED = 2,
  CONTROL_ACTION_STREAM_ENDED = 3,
  CONTROL_ACTION_STREAM_SUSPENDED = 4,
  UNRECOGNIZED = -1
}
//#endregion
//#region src/generated/node/v3/webcast/model/rank.d.ts
interface ClassInfo {
  classType: ClassType;
  starCount: string;
}
interface RankTabInfo {
  rankType: ProfitRankType;
  title: string;
  titleText: Text | undefined;
  listLynxType: string;
}
interface SettleInfo {
  ownerSettleRank: string;
  newClassInfo: ClassInfo | undefined;
  oldClassInfo: ClassInfo | undefined;
  rankSettleTimestamp: string;
}
interface TeamRankBonusTime {
  switch: boolean;
  startTimestamp: string;
  endTimestamp: string;
  showAnimation: boolean;
  bonusRate: string;
  bonusTimeGiftId: string;
}
declare const ClassInfo: MessageFns$12<ClassInfo>;
declare const RankTabInfo: MessageFns$12<RankTabInfo>;
declare const SettleInfo: MessageFns$12<SettleInfo>;
declare const TeamRankBonusTime: MessageFns$12<TeamRankBonusTime>;
interface MessageFns$12<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/viewer_picks.d.ts
interface ControlChaosInfo {
  commandType: number;
  hotKeys: HotKey[];
  actionType: number;
}
interface GameTricksShortcut {
  hotKeys: HotKey[];
}
interface GiftPick {
  giftId: string;
  customizedDesc: string;
  giftIcon: ImageModel | undefined;
  giftPrice: string;
  giftPickId: string;
  giftPickIdStr: string;
  isPriorityRequest: boolean;
  descSource: number;
  extra: GiftPickExtra | undefined;
}
interface GiftPickExtra {
  gameTricks: GiftPickExtraGameTricks | undefined;
  gameInteraction: GiftPickExtraGameInteraction | undefined;
}
interface GiftPickExtraGameInteraction {
  storage: GiftPickExtraGameInteractionStorage | undefined;
  external: GiftPickExtraGameInteractionExternal | undefined;
}
interface GiftPickExtraGameInteractionExternal {}
interface GiftPickExtraGameInteractionStorage {
  instruction: string;
  instructionDescKey: string;
}
interface GiftPickExtraGameTricks {
  storage: GiftPickExtraGameTricksStorage | undefined;
  external: GiftPickExtraGameTricksExternal | undefined;
}
interface GiftPickExtraGameTricksExternal {}
interface GiftPickExtraGameTricksStorage {
  gameTricksType: number;
  controlChaosInfo: ControlChaosInfo | undefined;
}
interface GiftPickWithScore {
  giftPick: GiftPick | undefined;
  score: string;
}
interface HotKey {
  keyType: number;
  keyboardKeys: KeyBoardHotKey[];
  mouseKeys: MouseHotKey[];
}
interface KeyBoardHotKey {
  keyCode: number;
  keyName: string;
}
interface MouseHotKey {
  mouseType: number;
}
interface ProfileExtra {
  gameTricks: ProfileExtraGameTricks | undefined;
  gameInteraction: ProfileExtraGameInteraction | undefined;
}
interface ProfileExtraGameInteraction {
  storage: ProfileExtraGameInteractionStorage | undefined;
  external: ProfileExtraGameInteractionExternal | undefined;
}
interface ProfileExtraGameInteractionExternal {
  gameName: string;
  gameNameKey: string;
  gameIconUrl: string;
  gameTagId: string;
}
interface ProfileExtraGameInteractionStorage {
  gameId: string;
  templateId: string;
}
interface ProfileExtraGameTricks {
  storage: ProfileExtraGameTricksStorage | undefined;
  external: ProfileExtraGameTricksExternal | undefined;
}
interface ProfileExtraGameTricksExternal {
  gameName: string;
  gameNameKey: string;
  gameIconUrl: string;
}
interface ProfileExtraGameTricksStorage {
  gameTricksType: number;
  gameTagId: string;
  gameTricksShortcut: GameTricksShortcut | undefined;
}
interface ViewerPickAnchorParam {
  viewerWishesUseNewSetupProcess: boolean;
  viewerWishesQueueModeEnable: boolean;
  viewerWishesPriorityRequestEnable: boolean;
  integrateVwIntoLiveboard: boolean;
}
interface ViewerPicksHeaderImage {
  image: ImageModel | undefined;
  schemaUrl: string;
}
interface ViewerPicksInfo {
  viewerPicksId: string;
  giftPickList: GiftPickWithScore[];
  status: number;
  roundDurationSec: string;
  startTimeMs: string;
  endTimeMs: string;
  hasDuration: boolean;
  hasScore: boolean;
  enableAutoRestart: boolean;
  startedFromAutoRestart: boolean;
  viewerPicksIdStr: string;
  displayMode: number;
  scene: number;
  headerImage: ViewerPicksHeaderImage | undefined;
  anchorParam: ViewerPickAnchorParam | undefined;
  extra: ProfileExtra | undefined;
  startedFromAutoStart: boolean;
}
declare const ControlChaosInfo: MessageFns$11<ControlChaosInfo>;
declare const GameTricksShortcut: MessageFns$11<GameTricksShortcut>;
declare const GiftPick: MessageFns$11<GiftPick>;
declare const GiftPickExtra: MessageFns$11<GiftPickExtra>;
declare const GiftPickExtraGameInteraction: MessageFns$11<GiftPickExtraGameInteraction>;
declare const GiftPickExtraGameInteractionExternal: MessageFns$11<GiftPickExtraGameInteractionExternal>;
declare const GiftPickExtraGameInteractionStorage: MessageFns$11<GiftPickExtraGameInteractionStorage>;
declare const GiftPickExtraGameTricks: MessageFns$11<GiftPickExtraGameTricks>;
declare const GiftPickExtraGameTricksExternal: MessageFns$11<GiftPickExtraGameTricksExternal>;
declare const GiftPickExtraGameTricksStorage: MessageFns$11<GiftPickExtraGameTricksStorage>;
declare const GiftPickWithScore: MessageFns$11<GiftPickWithScore>;
declare const HotKey: MessageFns$11<HotKey>;
declare const KeyBoardHotKey: MessageFns$11<KeyBoardHotKey>;
declare const MouseHotKey: MessageFns$11<MouseHotKey>;
declare const ProfileExtra: MessageFns$11<ProfileExtra>;
declare const ProfileExtraGameInteraction: MessageFns$11<ProfileExtraGameInteraction>;
declare const ProfileExtraGameInteractionExternal: MessageFns$11<ProfileExtraGameInteractionExternal>;
declare const ProfileExtraGameInteractionStorage: MessageFns$11<ProfileExtraGameInteractionStorage>;
declare const ProfileExtraGameTricks: MessageFns$11<ProfileExtraGameTricks>;
declare const ProfileExtraGameTricksExternal: MessageFns$11<ProfileExtraGameTricksExternal>;
declare const ProfileExtraGameTricksStorage: MessageFns$11<ProfileExtraGameTricksStorage>;
declare const ViewerPickAnchorParam: MessageFns$11<ViewerPickAnchorParam>;
declare const ViewerPicksHeaderImage: MessageFns$11<ViewerPicksHeaderImage>;
declare const ViewerPicksInfo: MessageFns$11<ViewerPicksInfo>;
interface MessageFns$11<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/message/linker/invite_message.d.ts
interface InviterRivalExtra {
  texttype: number;
  text: string;
  label: string;
  userCount: number;
  avatarThumb: ImageModel | undefined;
  displayId: string;
  authenticationInfo: AuthenticationInfo | undefined;
  nickname: string;
  followStatus: string;
  hashtag: Hashtag | undefined;
  userId: string;
  isBestTeammate: boolean;
  optPairInfo: OptPairInfo | undefined;
  followerCount: string;
}
interface LinkerInviteContent {
  fromUserId: string;
  fromRoomId: string;
  toRtcExtInfo: string;
  rtcJoinChannel: boolean;
  vendor: number;
  secFromUserId: string;
  toLinkmicIdStr: string;
  fromUser: User | undefined;
  requiredMicIdx: string;
  rtcExtInfoMap: {
    [key: string]: string;
  };
  anchorMultiLiveEnum: LinkmicMultiLiveEnum;
  anchorSettingInfo: MultiLiveAnchorPanelSettings | undefined;
  inviterLinkmicIdStr: string;
  fromTopHostInfo: InviteTopHostInfo | undefined;
  actionId: string;
  linkedUsers: LinkmicUserInfo[];
  dialog: PerceptionDialogInfo | undefined;
  punishInfo: PunishEventInfo | undefined;
  fromRoomAgeRestricted: number;
  fromTag: Tag$1 | undefined;
  abTestSetting: CohostABTestSetting[];
  linkerInviteMsgExtra: LinkerInviteMessageExtra | undefined;
}
interface LinkerInviteContent_RtcExtInfoMapEntry {
  key: string;
  value: string;
}
interface LinkerInviteMessageExtra {
  matchType: number;
  inviteType: number;
  subType: number;
  theme: string;
  duration: number;
  layout: number;
  tips: string;
  extra: InviterRivalExtra | undefined;
  otherUsers: InviterRivalExtra[];
  topicInfo: CohostTopic | undefined;
  algoRequestId: string;
}
declare const InviterRivalExtra: MessageFns$10<InviterRivalExtra>;
declare const LinkerInviteContent: MessageFns$10<LinkerInviteContent>;
declare const LinkerInviteContent_RtcExtInfoMapEntry: MessageFns$10<LinkerInviteContent_RtcExtInfoMapEntry>;
declare const LinkerInviteMessageExtra: MessageFns$10<LinkerInviteMessageExtra>;
interface MessageFns$10<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/message/linker/linked_list_change_message.d.ts
interface LinkedListChangeContent {
  linkedUsers: ListUser[];
}
interface ListUser {
  user: User | undefined;
  linkmicId: string;
  linkmicIdStr: string;
  linkStatus: LinkListStatus;
  linkType: LinkType;
  userPosition: number;
  silenceStatus: LinkSilenceStatus;
  modifyTime: string;
  linkerId: string;
  roleType: LinkRoleType;
}
declare const LinkedListChangeContent: MessageFns$9<LinkedListChangeContent>;
declare const ListUser: MessageFns$9<ListUser>;
interface MessageFns$9<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/message/linker/listchangemessage.d.ts
interface LinkListUser {
  user: User | undefined;
  modifyTime: string;
  linkType: number;
  roleType: number;
  linkmicIdStr: string;
  payedMoney: string;
  fanTicket: string;
  fanTicketIconType: number;
  linkUserType: number;
  blurredAvatar: ImageModel | undefined;
}
interface LinkerListChangeContent {
  linkedUsers: LinkListUser[];
  appliedUsers: LinkListUser[];
  connectingUsers: LinkListUser[];
}
declare const LinkListUser: MessageFns$8<LinkListUser>;
declare const LinkerListChangeContent: MessageFns$8<LinkerListChangeContent>;
interface MessageFns$8<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/message/linker/messages.d.ts
interface LinkerAcceptNoticeContent {
  fromUserId: string;
  fromRoomId: string;
  toUserId: string;
}
interface LinkerCancelContent {
  fromUserId: string;
  toUserId: string;
  cancelType: number;
  actionId: string;
}
interface LinkerEnterContent {
  linkedUsers: ListUser[];
  anchorMultiLiveEnum: LinkmicMultiLiveEnum;
  anchorSettingInfo: MultiLiveAnchorPanelSettings | undefined;
}
interface LinkerKickOutContent {
  fromUserId: string;
  kickoutReason: KickoutReason;
}
interface LinkerLeaveContent {
  userId: string;
  linkmicIdStr: string;
  sendLeaveUid: string;
  leaveReason: string;
}
interface LinkerMuteContent {
  userId: string;
  muteStatus: MuteStatus;
}
interface LinkerRandomMatchContent {
  user: User | undefined;
  roomId: string;
  inviteType: string;
  matchId: string;
  innerChannelId: string;
  sourceType: string;
  groupChannelId: string;
  playType: LinkmicPlayType;
  pairedTime: string;
}
declare const LinkerAcceptNoticeContent: MessageFns$7<LinkerAcceptNoticeContent>;
declare const LinkerCancelContent: MessageFns$7<LinkerCancelContent>;
declare const LinkerEnterContent: MessageFns$7<LinkerEnterContent>;
declare const LinkerKickOutContent: MessageFns$7<LinkerKickOutContent>;
declare const LinkerLeaveContent: MessageFns$7<LinkerLeaveContent>;
declare const LinkerMuteContent: MessageFns$7<LinkerMuteContent>;
declare const LinkerRandomMatchContent: MessageFns$7<LinkerRandomMatchContent>;
interface MessageFns$7<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/message/linker/mic_update.d.ts
interface LinkerMicIdxUpdateContent {
  micIdxUpdateInfo: LinkerMicIdxUpdateInfo | undefined;
}
interface LinkerMicIdxUpdateInfo {
  op: MicIdxOperation;
  userId: string;
  micIdx: string;
}
declare const LinkerMicIdxUpdateContent: MessageFns$6<LinkerMicIdxUpdateContent>;
declare const LinkerMicIdxUpdateInfo: MessageFns$6<LinkerMicIdxUpdateInfo>;
interface MessageFns$6<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/message/linker/reply_message.d.ts
interface LinkerReplyContent {
  fromUserId: string;
  fromRoomId: string;
  fromUserLinkmicInfo: LinkmicInfo | undefined;
  toUserId: string;
  toUserLinkmicInfo: LinkmicInfo | undefined;
  linkType: string;
  replyStatus: number;
  linkerSetting: LinkerSetting | undefined;
  fromUser: User | undefined;
  toUser: User | undefined;
  rtcExtInfoMap: {
    [key: string]: string;
  };
  inviteeMicIdxUpdateInfo: LinkerMicIdxUpdateInfo | undefined;
  applierMicIdxInfoMap: {
    [key: string]: string;
  };
  anchorMultiLiveEnum: LinkmicMultiLiveEnum;
  anchorSettingInfo: MultiLiveAnchorPanelSettings | undefined;
  actionId: string;
  linkedUsers: LinkmicUserInfo[];
  sourceType: string;
}
interface LinkerReplyContent_RtcExtInfoMapEntry {
  key: string;
  value: string;
}
interface LinkerReplyContent_ApplierMicIdxInfoMapEntry {
  key: string;
  value: string;
}
interface LinkerSetting {
  maxMemberLimit: string;
  linkType: string;
  scene: number;
  ownerUserId: string;
  ownerRoomId: string;
  vendor: number;
}
interface LinkmicInfo {
  accessKey: string;
  linkMicId: string;
  joinable: boolean;
  confluenceType: number;
  rtcExtInfo: string;
  rtcAppId: string;
  rtcAppSign: string;
  linkmicIdStr: string;
  vendor: number;
}
declare const LinkerReplyContent: MessageFns$5<LinkerReplyContent>;
declare const LinkerReplyContent_RtcExtInfoMapEntry: MessageFns$5<LinkerReplyContent_RtcExtInfoMapEntry>;
declare const LinkerReplyContent_ApplierMicIdxInfoMapEntry: MessageFns$5<LinkerReplyContent_ApplierMicIdxInfoMapEntry>;
declare const LinkerSetting: MessageFns$5<LinkerSetting>;
declare const LinkmicInfo: MessageFns$5<LinkmicInfo>;
interface MessageFns$5<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/message/messages.d.ts
interface AccessControlCaptcha {
  captchaRecordId: string;
  roomId: string;
  verifyDurationInSec: string;
}
interface ActionButton {
  buttonType: ActionButtonType;
  buttonActiveText: Text | undefined;
  buttonInactiveText: Text | undefined;
  buttonSchema: string;
  enableButtonInactiveText: boolean;
}
interface AddToCartButton {
  status: number;
  clickHintStarling: string;
}
interface AffiliatedInfo {
  textContent: Text | undefined;
  gapDesc: Text | undefined;
  realTimeRank: string;
  teamRankBonusTime: TeamRankBonusTime | undefined;
  settleInfo: SettleInfo | undefined;
  middayPeakTimeStamp: string;
  stickerShowScene: AffiliatedInfoStickerShowScene;
  stickerSettleShowDuration: string;
  stickerGapDesc: Text | undefined;
  stickerTrackParam: {
    [key: string]: string;
  };
}
interface AffiliatedInfo_StickerTrackParamEntry {
  key: string;
  value: string;
}
interface AnchorPair {
  sourceAnchorId: string;
  targetAnchorId: string;
}
interface AnimationData {
  geckoChannelName: string;
  fileName: string;
  height: string;
  width: string;
  rightOffset: string;
}
interface AtmosphereTagInfo {
  tagType: number;
  atmosphereTags: ProductAtmosphereTag[];
  pinAtmosphereTags: ProductAtmosphereTag[];
}
interface AwardCardNotice {
  displayContent: Text | undefined;
  awardedUsers: BattleUserInfo[];
}
interface Background {
  width: number;
  height: number;
  mUrls: string[];
  mUri: string;
}
interface BarrageEvent {
  eventName: string;
  params: {
    [key: string]: string;
  };
}
interface BarrageEvent_ParamsEntry {
  key: string;
  value: string;
}
interface BarrageTypeEcomLiveParam {
  plpParams: string;
  scene: string;
  anchoredProductId: string;
  anchoredLabelKey: string;
  entranceForm: string;
  anchoredProductSource: string;
  anchoredProductPlatform: number;
}
interface BarrageTypeFansLevelParam {
  currentGrade: number;
  displayConfig: number;
  user: User | undefined;
}
interface BarrageTypeGiftGalleryParam {
  fromUserId: string;
  toUserId: string;
}
interface BarrageTypeSubscribeGiftParam {
  giftSubCount: string;
  showGiftSubCount: boolean;
  giftSource: GiftSource;
}
interface BarrageTypeUserGradeParam {
  currentGrade: number;
  displayConfig: number;
  userId: string;
  user: User | undefined;
}
interface BattleInviteeGiftPermission {
  userId: string;
  giftPermissionType: number;
}
interface BillboardDisplayResult {
  billboardType: number;
  billboardId: string;
  displayResult: number;
}
interface BillboardInfo {
  billboardType: number;
  billboardIds: string[];
  sourceFrom: number;
  bornTimeMs: string;
  billboardVersion: number;
  daInfo: {
    [key: string]: string;
  };
}
interface BillboardInfo_DaInfoEntry {
  key: string;
  value: string;
}
interface BoostCard {
  mCardId: string;
  taskSource: number;
  taskId: string;
}
interface CampaignBannerDisplay {
  imageUrl: string;
  campaignBannerIsDisplay: boolean;
  sourceFrom: number;
  bornTimeMs: string;
  billboardVersion: number;
  daInfo: {
    [key: string]: string;
  };
}
interface CampaignBannerDisplay_DaInfoEntry {
  key: string;
  value: string;
}
interface CampaignBannerDisplayResult {
  campaignBannerDisplayResult: number;
}
interface CapsuleBizParams {
  cohost: CapsuleBizParamsCohost | undefined;
  randomGift: CapsuleBizParamsRandomGift | undefined;
  effectParams: CapsuleBizParamsNewAnchorEffect | undefined;
  commentFlaggedPrompt: CapsuleBizParamsCommentFlaggedPrompt | undefined;
  multiGuestInviteGuide: CapsuleBizParamsMultiGuestInviteGuide | undefined;
  anchorPinPerk: CapsuleBizParamsAnchorPinPerk | undefined;
  gamingModeratorsCommentGuide: CapsuleBizParamsGamingModeratorsCommentGuide | undefined;
  commentMuteRulePrompt: CapsuleBizParamsCommentMuteRulePrompt | undefined;
  commentFlaggedPromptForNewUser: CapsuleBizParamsCommentFlaggedPromptForNewUser | undefined;
  moderatorGuideInfo: CapsuleBizParamsModeratorGuide | undefined;
  multiGuestApplyGuide: CapsuleBizParamsMultiGuestApplyGuide | undefined;
  ecom: CapsuleBizParamsEcom | undefined;
}
interface CapsuleBizParamsAnchorPinPerk {
  pinId: string;
  pinCardType: number;
  templateId: string;
}
interface CapsuleBizParamsCohost {
  availableFriendNumber: string;
  isFollowedByRival: boolean;
  rivalUser: User | undefined;
  type: string;
  inviteeModelPredictionData: UserModelPredictionData | undefined;
  inviteeRoomId: string;
  inviteeInnerChannelId: string;
  inviteeUserInfo: User | undefined;
  isFriend: boolean;
  subType: string;
  rivalVoteCount: string;
  anchorClassLabel: GiftGalleryBadgeSection | undefined;
  rivalClassLabel: GiftGalleryBadgeSection | undefined;
}
interface CapsuleBizParamsCommentFlaggedPrompt {
  trigger: string;
}
interface CapsuleBizParamsCommentFlaggedPromptForNewUser {
  trigger: string;
  commentIds: string[];
}
interface CapsuleBizParamsCommentMuteRulePrompt {
  content: string;
  userCnt: string;
}
interface CapsuleBizParamsEcom {
  eventTracking: CapsuleBizParamsEcomEventTracking | undefined;
}
interface CapsuleBizParamsEcomEventTracking {
  ecomRecommId: string;
  ecomRecommTrigger: string;
}
interface CapsuleBizParamsGamingModeratorsCommentGuide {
  user: User | undefined;
  replyMsgText: Text | undefined;
  recommendText: RecommendComment | undefined;
  ruleId: string;
  action: GameAction | undefined;
}
interface CapsuleBizParamsModeratorGuide {
  isGiftModerator: boolean;
  isInteractiveModerator: boolean;
  isToolModerator: boolean;
  hvUser: User | undefined;
  welcomeMsg: Text | undefined;
  recommendSensitiveWords: string[];
}
interface CapsuleBizParamsMultiGuestApplyGuide {
  applyUser: User | undefined;
  displayStrategy: number;
  linkmicAudienceApplyNoticeReason: string;
  noticeType: number;
  applyNoticeGuide: LinkmicAudienceApplyGuide | undefined;
}
interface CapsuleBizParamsMultiGuestInviteGuide {
  inviteeUser: User | undefined;
  displayStrategy: number;
  linkmicAudienceInviteNoticeReason: string;
  noticeType: number;
  turnOnGuide: LinkMicAudienceTurnOnGuide | undefined;
  noticeGuide: LinkMicAudienceInviteGuide | undefined;
  groupChatMemberInviteGuide: LinkmicAudienceInviteGroupChatMemberGuide | undefined;
}
interface CapsuleBizParamsNewAnchorEffect {
  effectPanel: string;
  resourceId: string;
  categoryId: string;
  tabKey: string;
}
interface CapsuleBizParamsRandomGift {
  round: string;
  effectNameKey: string;
  gift: Gift | undefined;
  type: string;
  filterHost: boolean;
}
interface CaptionContent {
  lang: string;
  content: string;
}
interface CardObtainGuide {
  notInUse: number;
}
interface CohostListChangeContent {
  users: CohostListUser[];
}
interface CommentLabelScore {
  labelName: string;
  score: number;
}
interface CommentQualityScore {
  version: string;
  score: string;
}
interface Contributor {
  score: string;
  user: User | undefined;
  rank: string;
  delta: string;
}
interface CreatorSuccessInfo {
  tags: TagItem[];
  topic: Topic | undefined;
  topicList: Topic[];
  frequencyControl: FrequencyControl | undefined;
}
interface DelayParam {
  minDelayMs: string;
  maxDelayMs: string;
}
interface Detail {
  text: Text | undefined;
  textFontSize: number;
  background: ImageModel | undefined;
  start: string;
  duration: string;
  x: number;
  y: number;
  width: number;
  height: number;
  shadowDx: number;
  shadowDy: number;
  shadowRadius: number;
  shadowColor: string;
  strokeColor: string;
  strokeWidth: number;
}
interface DispersionInfo {
  dispersionPath: number;
  delayParam: DelayParam | undefined;
}
interface EffectConfigBean {
  type: number;
  icon: ImageModel | undefined;
  text: Text | undefined;
  badge: ImageModel | undefined;
}
interface Extra {
  banInfoUrl: string;
  reasonNo: string;
  title: Text | undefined;
  violationReason: Text | undefined;
  content: Text | undefined;
  gotItButton: Text | undefined;
  banDetailButton: Text | undefined;
  source: string;
}
interface FanTicketRoomNoticeContent {
  userFanTicket: UserFanTicket[];
  totalLinkmicFanTicket: string;
  matchId: string;
  eventTime: string;
  fanTicketIconUrl: string;
  playId: string;
  playScene: PlayScene;
  version: string;
  scoreType: ScoreType;
}
interface FlashSaleAtmosphere {
  status: number;
  startTime: string;
  endTime: string;
  preheatTime: string;
  enhancementInfo: FlashSaleEnhancementInfo$1 | undefined;
  pdpViewerCount: number;
}
interface FlashSaleAtmosphereInfo {
  productId: string;
  activityId: string;
  flashSaleAtmosphere: FlashSaleAtmosphere | undefined;
  flashSaleStock: FlashSaleStock | undefined;
  pinnedProduct: boolean;
  liveOnlyChannel: boolean;
  creatorLimitType: number;
}
interface FlashSaleEnhancementInfo$1 {
  stockShowStatus: number;
  buyerInfos: UserInfo[];
  enhancementTextInfo: EnhancementTextInfo | undefined;
}
interface FlashSaleStock {
  activityStockStatus: number;
  activityStock: number;
  activityStockText: string;
  totalStock: number;
}
interface FrequencyControl {
  frequencyControlKey: string;
  windowSize: string;
  limitInWindow: string;
}
interface GalleryData {
  progress: {
    [key: string]: TitleData;
  };
  period: string;
  endTimeInMs: string;
}
interface GalleryData_ProgressEntry {
  key: string;
  value: TitleData | undefined;
}
interface GameAction {
  actionType: GameActionType;
  jumpPage: JumpPage;
  followUserId: string;
  followUserInfo: User | undefined;
  actionSchema: string;
}
interface GiftIMPriority {
  queueSizes: string[];
  selfQueuePriority: string;
  priority: number;
}
interface GiftInfo {
  id: string;
  price: string;
}
interface GiftMonitorInfo {
  anchorId: string;
  profitapiMessageDur: string;
  sendGiftProfitApiStartMs: string;
  sendGiftProfitCoreStartMs: string;
  sendGiftReqStartMs: string;
  sendGiftSendMessageSuccessMs: string;
  sendProfitapiDur: string;
  toUserId: string;
  sendGiftStartClientLocalMs: string;
  fromPlatform: string;
  fromVersion: string;
}
interface GoalData {
  status: number;
  goalProgress: {
    [key: string]: Progress;
  };
}
interface GoalData_GoalProgressEntry {
  key: string;
  value: Progress | undefined;
}
interface GuideMessageFrequencyRule {
  roomShowCount: string;
  dayShowCount: string;
}
interface HourlyRankRewardInfo {
  userId: string;
  assetId: string;
  notify: WebcastRoomNotifyMessage | undefined;
  avatarBorder: BorderInfo | undefined;
}
interface Img {
  key: string;
  width: number;
  height: number;
  url: string;
}
interface InteractiveGiftInfo {
  crossScreenDelay: string;
  crossScreenRole: string;
  ignoreConfig: GiftMessageIgnoreConfig;
  uniqId: string;
  toUserTeamId: string;
  ignoreComponent: string;
}
interface LinkMicAudienceInviteGuide {
  content: LinkMicAudienceNoticeText | undefined;
  buttonContent: LinkMicAudienceNoticeText | undefined;
  user: User | undefined;
  displayStrategy: number;
  linkmicAudienceInviteNoticeReason: string;
}
interface LinkMicAudienceNoticeText {
  text: string;
}
interface LinkMicAudienceTurnOnGuide {
  content: LinkMicAudienceNoticeText | undefined;
  buttonContent: LinkMicAudienceNoticeText | undefined;
}
interface LinkerCloseContent {}
interface LinkerCreateContent {
  ownerId: string;
  ownerRoomId: string;
  linkType: string;
}
interface LinkerMediaChangeContent {
  op: GuestMicCameraManageOp;
  toUserId: string;
  anchorId: string;
  roomId: string;
  changeScene: GuestMicCameraChangeScene;
  operatorInfo: LinkerMediaChangeOperator | undefined;
}
interface LinkerSysKickOutContent {
  userId: string;
  linkmicIdStr: string;
}
interface LinkerUpdateUserContent {
  fromUserId: string;
  toUserId: string;
  updateInfo: {
    [key: string]: string;
  };
}
interface LinkerUpdateUserContent_UpdateInfoEntry {
  key: string;
  value: string;
}
interface LinkerWaitingListChangeContent {}
interface LinkmicAudienceApplyGuide {
  content: LinkMicAudienceNoticeText | undefined;
  buttonContent: LinkMicAudienceNoticeText | undefined;
  user: User | undefined;
  displayStrategy: number;
  linkmicAudienceApplyNoticeReason: string;
  displayPosition: string;
  triggerType: string;
  requestId: string;
  linkmicId: string;
}
interface LinkmicAudienceInviteGroupChatMemberGuide {
  content: LinkMicAudienceNoticeText | undefined;
  buttonContent: LinkMicAudienceNoticeText | undefined;
  groupMemberUserIds: string[];
}
interface LinkmicUserToastContent {
  userId: string;
  roomId: string;
  displayText: Text | undefined;
  leavedUserId: string;
}
interface LivePermissionInfo {
  endTime: string;
  reason: string;
}
interface MessageDisplayInfo {
  durationType: number;
  showDurationMs: string;
  incrDurationMs: string;
  stayStyle: number;
}
interface MessageEntity {
  notify: WebcastRoomNotifyMessage | undefined;
}
interface NotifyHighlightContent {
  content: string;
  needHighLight: boolean;
}
interface NotifyHighlightInfo {
  contents: NotifyHighlightContent[];
  highLightColor: string;
}
interface OfflineGameInfo {
  taskId: string;
  toastText: string;
  taskListLen: number;
  offlineType: PartnershipGameOfflineMessageOfflineGameInfoOfflineType;
  toastTitle: string;
  gameId: string;
  taskType: GamepadTaskType;
}
interface OperationInfo {
  initialState: OperationState | undefined;
  successState: OperationState | undefined;
  failureState: OperationState | undefined;
}
interface OperationState {
  scene: string;
  icon: ImageModel | undefined;
  text: Text | undefined;
  schema: string;
  animationStyle: string;
  duration: string;
}
interface PollBasicInfo {
  pollSponsor: string;
  giftId: string;
  title: string;
  isSuggestedQuestion: boolean;
  userCnt: string;
  gift: Gift | undefined;
  pollIdStr: string;
  suggestedQuestionKey: string;
  pollDuration: string;
  timeRemain: string;
  pollIndex: string;
  templateId: string;
}
interface PollEndContent {
  endType: PollEndType;
  optionList: PollOptionInfo[];
  operator: User | undefined;
}
interface PollOptionInfo {
  votes: string;
  displayContent: string;
  optionIdx: number;
  voteUserList: VoteUser[];
}
interface PollStartContent {
  startTime: string;
  endTime: string;
  optionList: PollOptionInfo[];
  title: string;
  operator: User | undefined;
}
interface PollUpdateVotesContent {
  optionList: PollOptionInfo[];
  operator: User | undefined;
}
interface PortraitInfo {
  userMetrics: UserMetrics[];
  portraitTag: PortraitTag[];
}
interface PortraitTag {
  tagId: string;
  priority: string;
  showValue: string;
  showArgs: string;
}
interface ProductAtmosphereTag {
  productId: string;
  tagDesc: string;
  count: string;
}
interface ProductSnapShot {
  productId: string;
  title: string;
  cover: Img | undefined;
  stockType: number;
  timestamp: string;
  addToCartButton: AddToCartButton | undefined;
}
interface Progress {
  currentProgress: string;
  target: string;
  expiredTimestampInMs: string;
}
interface PromotionInfo {
  promotionId: string;
  failedMessage: string;
  productIds: string[];
}
interface PublicAreaCommon {
  userLabel: ImageModel | undefined;
  userConsumeInRoom: string;
}
interface PublicAreaMessageCommon {
  scrollGapCount: string;
  anchorScrollGapCount: string;
  releaseToScrollArea: boolean;
  anchorReleaseToScrollArea: boolean;
  isAnchorMarked: boolean;
  creatorSuccessInfo: CreatorSuccessInfo | undefined;
  portraitInfo: PortraitInfo | undefined;
  userInteractionInfo: UserInteractionInfo | undefined;
  adminFoldType: string;
  displayInfo: MessageDisplayInfo | undefined;
  hideAboveScrollArea: boolean;
  operationInfo: OperationInfo | undefined;
  dynamicDisplayText: Text | undefined;
}
interface Question {
  questionId: string;
  content: string;
  answerStatus: number;
  createTime: string;
  user: User | undefined;
  createFrom: number;
  answerFrom: number;
}
interface RankAnimationInfo {
  type: number;
  backgroundColorString: string;
  contentText: Text | undefined;
  duration: string;
  tileContent: Text[];
}
interface RankListTabInfo {
  tabs: RankTabInfo[];
  supportedVersion: string;
}
interface RankUpdate {
  rankType: ProfitRankType;
  ownRank: string;
  defaultContent: Text | undefined;
  prompt: Buffer;
  showEntranceAnimation: boolean;
  countdown: string;
  animationInfo: RankAnimationInfo | undefined;
  belongType: number;
  requestFirstShowType: ProfitRankType;
  supportedVersion: string;
  owneronrank: boolean;
  entranceicon: ImageModel | undefined;
  affiliatedInfo: AffiliatedInfo | undefined;
  classInfo: ClassInfo | undefined;
  currentScore: string;
  listSchema: string;
}
interface RecommendComment {
  priority: string;
  duration: string;
  recommendText: Text | undefined;
  tipsType: string;
}
interface RefreshLiveBagInfo {
  refreshLiveBagTypes: number[];
}
interface RightLabel {
  backgroundColor: string;
  content: Text | undefined;
  height: string;
}
interface RoomBasedGiftData {
  roomBasedGifts: {
    [key: string]: RoomBasedGifts;
  };
}
interface RoomBasedGiftData_RoomBasedGiftsEntry {
  key: string;
  value: RoomBasedGifts | undefined;
}
interface RoomBasedGifts {
  giftInfo: GiftInfo[];
}
interface RoomNotifyMessageExtra {
  duration: string;
  background: Background | undefined;
  contentList: NotifyHighlightInfo | undefined;
}
interface RoomNotifyMessageEventTracking {
  giftSubSenderId: string;
  giftSubReceiverId: string;
  anchorId: string;
  giftSubOrderCreateTime: string;
}
interface SpecialEffectNotice {
  score: string;
  fromUserId: string;
  toAnchorId: string;
  affectedAnchorPairs: AnchorPair[];
  effectType: number;
  communityHeartMeInfo: CommunityHeartMeInfo | undefined;
  communityHeartMeInfoStr: string;
}
interface SpecifiedDisplayText {
  uid: string;
  displayText: Text | undefined;
}
interface SponsorshipInfo {
  giftId: string;
  sponsorId: string;
  lightGiftUp: boolean;
  unlightedGiftIcon: string;
  giftGalleryDetailPageSchemeUrl: string;
  giftGalleryClickSponsor: boolean;
  giftTrayStyle: GiftTrayStyle;
  becomeAllSponsored: boolean;
}
interface TagItem {
  tagType: TagType;
  tagText: Text | undefined;
  tagValue: string;
  displayLocation: number;
  eventTrackingFields: {
    [key: string]: string;
  };
  bizName: string;
  disableCountFrequencyControl: boolean;
  disableCrmClick: boolean;
}
interface TagItem_EventTrackingFieldsEntry {
  key: string;
  value: string;
}
interface TeamUsersInfo {
  teamId: string;
  userId: string[];
}
interface TemplateContent {
  templateId: string;
  templateIdStr: string;
  status: PollTemplateStatus;
  pollKind: PollKind;
  appealStatus: PollAppealStatus;
  violationIdStr: string;
}
interface TextEffect {
  portrait: Detail | undefined;
  landscape: Detail | undefined;
}
interface TimeInfo {
  clientStartMs: string;
  apiRecvTimeMs: string;
  apiSendToGoimMs: string;
}
interface TitleData {
  goalCount: string;
  currentSponsorId: string;
}
interface Topic {
  topicActionType: TopicActionType;
  topicText: Text | undefined;
  topicTips: Text | undefined;
  hasButton: boolean;
  actionButton: ActionButton | undefined;
  tagType: TagType;
  displayLocation: PublicAreaMessageCommonCreatorSuccessInfoTopicDisplayLocation;
  eventTrackingFields: {
    [key: string]: string;
  };
  bizName: string;
  disableCountFrequencyControl: boolean;
}
interface Topic_EventTrackingFieldsEntry {
  key: string;
  value: string;
}
interface TriggerCondition {
  uplinkDetectHttp: boolean;
  uplinkDetectWebsocket: boolean;
  detectP2pMsg: boolean;
  detectRoomMsg: boolean;
  httpOptimize: boolean;
}
interface UnionAnimationInfo {
  unionType: UnionAnimationInfoType;
  rankTypeArray: number[];
  supportedVersion: string;
}
interface UseCriticalStrikeCard {
  cardInfo: CriticalStrikeCardInfo | undefined;
  anchorId: string;
  displayContent: Text | undefined;
}
interface UseExtraTimeCard {
  cardInfo: ExtraTimeCardInfo | undefined;
  anchorId: string;
  displayContent: Text | undefined;
}
interface UsePotionCard {
  cardInfo: PotionCardInfo | undefined;
  anchorId: string;
  displayContent: Text | undefined;
}
interface UseSmokeCard {
  cardInfo: SmokeCardInfo | undefined;
  anchorId: string;
  displayContent: Text | undefined;
}
interface UseSpecialEffectCard {
  cardInfo: SpecialEffectCardInfo | undefined;
  anchorId: string;
  displayContent: Text | undefined;
  affectedAnchorPairs: AnchorPair[];
  effectType: number;
  communityHeartMeInfo: CommunityHeartMeInfo | undefined;
  communityHeartMeInfoStr: string;
}
interface UseTop2Card {
  cardInfo: Top2CardInfo | undefined;
  anchorId: string;
  displayContent: Text | undefined;
}
interface UseTop3Card {
  cardInfo: Top3CardInfo | undefined;
  anchorId: string;
  displayContent: Text | undefined;
}
interface UseVaultGloveCard {
  cardInfo: VaultGloveCardInfo | undefined;
  anchorId: string;
  displayContent: Text | undefined;
}
interface UseWaveCard {
  cardInfo: WaveCardInfo | undefined;
  anchorId: string;
  displayContent: Text | undefined;
}
interface UserCountdownInfo {
  countdownId: string;
  score: string;
  targetScore: string;
  completionProgressPercent: number;
}
interface UserFanTicket {
  userId: string;
  fanTicket: string;
  matchTotalScore: string;
  matchRank: number;
  countdownInfo: UserCountdownInfo | undefined;
  playInfo: UserPlayInfo | undefined;
  iconName: string;
  animationName: string;
  ticketUiStyle: string;
  completionProgressPercent: number;
  topGuestRank: number;
  ticketUiStyleV2: string;
}
interface UserInfo {
  userId: string;
  avatar: ImageModel | undefined;
}
interface UserInteractionInfo {
  likeCnt: string;
  commentCnt: string;
  shareCnt: string;
}
interface UserMetrics {
  type: PublicAreaMessageCommonPortraitInfoUserMetricsUserMetricsType;
  metricsValue: string;
}
interface UserModelPredictionData {
  userId: string;
  modelPredictionData: {
    [key: string]: number;
  };
}
interface UserModelPredictionData_ModelPredictionDataEntry {
  key: string;
  value: number;
}
interface UserPlayInfo {
  playId: string;
  playScene: PlayScene;
  score: string;
  rank: number;
  targetScore: string;
  userTag: PlayUserTag;
}
interface ValidRanks {
  isEffect: boolean;
  rankTypes: number[];
}
interface Voucher {
  voucherTypeId: string;
  taskId: string;
  taskType: number;
  liveVoucherType: number;
  creatorOperationUniqueId: string;
  voucherMaxFaceValue: string;
}
interface WaveAlgorithmData {
  algorithmVersion: string;
  isAlgHit: boolean;
  predictScore: string;
  isRewatch: boolean;
  isFollow: boolean;
}
interface WebcastAccessControlMessage {
  common: CommonMessageData | undefined;
  captcha: AccessControlCaptcha | undefined;
}
interface WebcastBarrageMessage {
  common: CommonMessageData | undefined;
  event: BarrageEvent | undefined;
  msgType: BarrageMessageBarrageType;
  icon: ImageModel | undefined;
  content: Text | undefined;
  duration: string;
  background: ImageModel | undefined;
  rightIcon: ImageModel | undefined;
  displayConfig: number;
  galleryGiftId: string;
  scene: string;
  control: DisplayControl | undefined;
  rightLabel: RightLabel | undefined;
  useMarquee: boolean;
  showType: BarrageMessageShowType;
  badge: BadgeStruct | undefined;
  renderType: BarrageMessageRenderType;
  leftIconDisplayType: BarrageMessageIconDisplayType;
  ribbonAnimation: ImageModel | undefined;
  animationData: AnimationData | undefined;
  hybridUrl: string;
  schema: string;
  subType: string;
  commonBarrageContent: Text | undefined;
  user: User | undefined;
  userGradeParam: BarrageTypeUserGradeParam | undefined;
  fansLevelParam: BarrageTypeFansLevelParam | undefined;
  subscribeGiftParam: BarrageTypeSubscribeGiftParam | undefined;
  privilegeLogExtra: PrivilegeLogExtra | undefined;
  giftGalleryParams: BarrageTypeGiftGalleryParam | undefined;
  publicAreaMessageCommon: PublicAreaMessageCommon | undefined;
  ecomLiveParam: BarrageTypeEcomLiveParam | undefined;
}
interface WebcastBoostCardMessage {
  common: CommonMessageData | undefined;
  cards: BoostCard[];
}
interface WebcastBottomMessage {
  common: CommonMessageData | undefined;
  content: string;
  showType: ShowType;
  textType: TextType;
  duration: string;
  bizType: BizType;
  violationUserId: string;
  punishInfo: PunishEventInfo | undefined;
  style: number;
  detailUrl: string;
  floatStyle: number;
  floatIconType: PerceptionDialogIconType;
}
interface WebcastCapsuleMessage {
  common: CommonMessageData | undefined;
  icon: ImageModel | undefined;
  desc: Text | undefined;
  buttonText: Text | undefined;
  schema: string;
  type: number;
  scene: string;
  bizParams: CapsuleBizParams | undefined;
  subScene: string;
  style: number;
  skipFc: boolean;
  publicAreaMessageCommon: PublicAreaMessageCommon | undefined;
  reportAction: boolean;
}
interface WebcastCaptionMessage {
  common: CommonMessageData | undefined;
  timestampMs: string;
  durationMs: string;
  content: CaptionContent[];
  sentenceId: string;
  sequenceId: string;
  definite: boolean;
}
interface WebcastChatMessage {
  common: CommonMessageData | undefined;
  user: User | undefined;
  content: string;
  visibleToSender: boolean;
  backgroundImage: ImageModel | undefined;
  fullScreenTextColor: string;
  backgroundImageV2: ImageModel | undefined;
  publicAreaCommon: PublicAreaCommon | undefined;
  giftImage: ImageModel | undefined;
  inputType: number;
  atUser: User | undefined;
  emotes: EmoteWithIndex[];
  contentLanguage: string;
  msgFilter: MsgFilter | undefined;
  quickChatScene: number;
  communityFlaggedStatus: number;
  userIdentity: UserIdentity | undefined;
  commentQualityScores: CommentQualityScore[];
  commentTag: CommentTag[];
  publicAreaMessageCommon: PublicAreaMessageCommon | undefined;
  screenTime: string;
  signature: string;
  signatureVersion: string;
  ecStreamerKey: string;
  commentLabelScores: CommentLabelScore[];
  mentionUserList: string[];
  mentionUsers: User[];
  isOnCommentTray: boolean;
}
interface WebcastControlMessage {
  common: CommonMessageData | undefined;
  action: ControlAction;
  tips: string;
  extra: Extra | undefined;
  perceptionDialog: PerceptionDialogInfo | undefined;
  perceptionAudienceText: Text | undefined;
  punishInfo: PunishEventInfo | undefined;
  floatText: Text | undefined;
  floatStyle: number;
}
interface WebcastEmoteChatMessage {
  common: CommonMessageData | undefined;
  user: User | undefined;
  emoteList: EmoteModel[];
  msgFilter: MsgFilter | undefined;
  userIdentity: UserIdentity | undefined;
}
interface WebcastGameRankNotifyMessage {
  common: CommonMessageData | undefined;
  msgType: GameRankNotifyMessageMsgType;
  notifyText: Text | undefined;
}
interface WebcastGiftBroadcastMessage {
  common: CommonMessageData | undefined;
  fromUserId: string;
  leftIcon: ImageModel | undefined;
  notify: WebcastRoomNotifyMessage | undefined;
}
interface WebcastGiftDynamicRestrictionMessage {
  common: CommonMessageData | undefined;
  dynamicRestriction: DynamicRestriction | undefined;
}
interface WebcastGiftMessage {
  common: CommonMessageData | undefined;
  giftId: string;
  fanTicketCount: number;
  groupCount: number;
  repeatCount: number;
  comboCount: number;
  user: User | undefined;
  toUser: User | undefined;
  repeatEnd: number;
  textEffect: TextEffect | undefined;
  groupId: string;
  incomeTaskgifts: string;
  roomFanTicketCount: string;
  priority: GiftIMPriority | undefined;
  gift: Gift | undefined;
  logId: string;
  sendType: string;
  publicAreaCommon: PublicAreaCommon | undefined;
  trayDisplayText: Text | undefined;
  bannedDisplayEffects: string;
  trayInfo: GiftTrayInfo | undefined;
  monitorExtra: string;
  monitorInfo: GiftMonitorInfo | undefined;
  colorId: string;
  isFirstSent: boolean;
  displayTextForAnchor: Text | undefined;
  displayTextForAudience: Text | undefined;
  orderId: string;
  giftsInBox: GiftsBoxInfo | undefined;
  msgFilter: MsgFilter | undefined;
  lynxExtra: LynxGiftExtra[];
  userIdentity: UserIdentity | undefined;
  matchInfo: MatchInfo | undefined;
  linkmicGiftExpressionStrategy: LinkmicGiftExpressionStrategy;
  flyingMicResources: FlyingMicResources | undefined;
  disableGiftTracking: boolean;
  asset: AssetsModel | undefined;
  version: GiftMessageVersion;
  sponsorshipInfo: SponsorshipInfo[];
  flyingMicResourcesV2: FlyingMicResources | undefined;
  publicAreaMessageCommon: PublicAreaMessageCommon | undefined;
  signature: string;
  signatureVersion: string;
  multiGenerateMessage: boolean;
  toMemberId: string;
  toMemberIdInt: string;
  toMemberNickname: string;
  interactiveGiftInfo: InteractiveGiftInfo | undefined;
  displayDurationMs: string;
  displayTextForSender: Text | undefined;
  isAssetBundleGift: boolean;
  assetBundle: AssetBundle | undefined;
  effectExtra: string;
  secondaryEffectInfo: SecondaryEffectInfo | undefined;
  giftVariantId: number;
  shinyCardUnlockToken: string;
  giftEffect: GiftEffect | undefined;
}
interface WebcastGiftPanelUpdateMessage {
  common: CommonMessageData | undefined;
  roomId: string;
  timestamp: string;
  galleryData: GalleryData | undefined;
  goalData: GoalData | undefined;
  roomBasedGiftData: RoomBasedGiftData | undefined;
  strategyContext: string;
}
interface WebcastGiftPromptMessage {
  common: CommonMessageData | undefined;
  title: string;
  body: string;
  blockNumDays: number;
  orderId: string;
  orderTimestamp: string;
  inUserGiftingAddictionExpr: boolean;
  popUpSchema: string;
}
interface WebcastGuideMessage {
  common: CommonMessageData | undefined;
  guideType: string;
  giftId: string;
  description: string;
  duration: string;
  displayStyle: string;
  scene: string;
  frequencyRule: GuideMessageFrequencyRule | undefined;
}
interface WebcastHourlyRankRewardMessage {
  common: CommonMessageData | undefined;
  winners: HourlyRankRewardInfo[];
}
interface WebcastImDeleteMessage {
  common: CommonMessageData | undefined;
  deleteMsgIds: string[];
  deleteUserIds: string[];
}
interface WebcastInRoomBannerMessage {
  common: CommonMessageData | undefined;
}
interface WebcastLikeMessage {
  common: CommonMessageData | undefined;
  count: number;
  total: string;
  color: number;
  user: User | undefined;
  icon: string;
  icons: ImageModel[];
  specifiedDisplayText: SpecifiedDisplayText[];
  effectCnt: string;
  likeEffect: LikeEffect[];
  publicAreaMessageCommon: PublicAreaMessageCommon | undefined;
  roomMessageHeatLevel: string;
}
interface WebcastLinkMessage {
  common: CommonMessageData | undefined;
  messageType: number;
  linkerId: string;
  scene: number;
  inviteContent: LinkerInviteContent | undefined;
  replyContent: LinkerReplyContent | undefined;
  createContent: LinkerCreateContent | undefined;
  closeContent: LinkerCloseContent | undefined;
  enterContent: LinkerEnterContent | undefined;
  leaveContent: LinkerLeaveContent | undefined;
  cancelContent: LinkerCancelContent | undefined;
  kickOutContent: LinkerKickOutContent | undefined;
  linkedListChangeContent: LinkedListChangeContent | undefined;
  updateUserContent: LinkerUpdateUserContent | undefined;
  waitingListChangeContent: LinkerWaitingListChangeContent | undefined;
  muteContent: LinkerMuteContent | undefined;
  randomMatchContent: LinkerRandomMatchContent | undefined;
  updateUserSettingContent: MultiLiveUpdateUserSettingContent | undefined;
  micIdxUpdateContent: LinkerMicIdxUpdateContent | undefined;
  listChangeContent: LinkerListChangeContent | undefined;
  cohostListChangeContent: CohostListChangeContent | undefined;
  mediaChangeContent: LinkerMediaChangeContent | undefined;
  replyAcceptNoticeContent: LinkerAcceptNoticeContent | undefined;
  sysKickOutContent: LinkerSysKickOutContent | undefined;
  userToastContent: LinkmicUserToastContent | undefined;
  extra: string;
  expireTimestamp: string;
  transferExtra: string;
  version: string;
}
interface WebcastLinkMicArmies {
  common: CommonMessageData | undefined;
  battleId: string;
  armies: {
    [key: string]: BattleUserArmies;
  };
  channelId: string;
  sendGiftSuccessTime: string;
  updateBattleScoreTime: string;
  triggerReason: LinkMicArmiesTriggerReason;
  fromUserId: string;
  giftId: string;
  giftCount: number;
  giftIconImage: ImageModel | undefined;
  totalDiamondCount: number;
  repeatCount: number;
  teamArmies: BattleTeamUserArmies[];
  triggerCriticalStrike: boolean;
  hasTeamMatchMvpSfx: boolean;
  logId: string;
  battleSettings: BattleSetting | undefined;
  fuzzyDisplayConfigV2: HighScoreControlCfg | undefined;
  effectInfos: BattleEffectInfos | undefined;
  enigmaBattleExtraInfo: EnigmaBattleExtraInfo | undefined;
}
interface WebcastLinkMicArmies_ArmiesEntry {
  key: string;
  value: BattleUserArmies | undefined;
}
interface WebcastLinkMicBattle {
  common: CommonMessageData | undefined;
  battleId: string;
  battleSettings: BattleSetting | undefined;
  action: LinkMicBattleBattleAction;
  battleResult: {
    [key: string]: BattleResult;
  };
  fuzzyDisplayConfig: BattleDisplayConfig | undefined;
  inviteeGiftPermissionType: GiftPermissionType;
  armies: UserArmiesWrapper[];
  anchorsInfo: BattleUserInfoWrapper[];
  bubbleText: string;
  supportedActions: SupportedActionsWrapper[];
  battleComboV2: {
    [key: string]: BattleComboInfo;
  };
  teamMember: TeamUsersInfo[];
  inviteesGiftPermissionType: BattleInviteeGiftPermission[];
  actionByUserId: string;
  teamBattleResult: BattleTeamResult[];
  teamArmies: BattleTeamUserArmies[];
  abTestSetting: BattleABTestSetting[];
  teamMatchCampaign: TeamMatchCampaign | undefined;
  fuzzyDisplayConfigV2: HighScoreControlCfg | undefined;
  leagueInfoMap: {
    [key: string]: GiftGalleryBadgeInfo;
  };
  leagueScoreInfoMap: {
    [key: string]: LeagueScoreInfo;
  };
  matchPunishExtraInfo: MatchPunishExtraInfo | undefined;
  enigmaBattleSetting: EnigmaBattleSetting | undefined;
  anchorMatchSettings: {
    [key: string]: AnchorMatchSettings;
  };
  battleFeatureFlags: BattleFeatureFlags | undefined;
  crossRoomLayout: LayoutData | undefined;
  trackingExtra: {
    [key: string]: string;
  };
  matchThemeDisplayResource: MatchThemeDisplayResource | undefined;
}
interface WebcastLinkMicBattle_BattleResultEntry {
  key: string;
  value: BattleResult | undefined;
}
interface WebcastLinkMicBattle_BattleComboV2Entry {
  key: string;
  value: BattleComboInfo | undefined;
}
interface WebcastLinkMicBattle_LeagueInfoMapEntry {
  key: string;
  value: GiftGalleryBadgeInfo | undefined;
}
interface WebcastLinkMicBattle_LeagueScoreInfoMapEntry {
  key: string;
  value: LeagueScoreInfo | undefined;
}
interface WebcastLinkMicBattle_AnchorMatchSettingsEntry {
  key: string;
  value: AnchorMatchSettings | undefined;
}
interface WebcastLinkMicBattle_TrackingExtraEntry {
  key: string;
  value: string;
}
interface WebcastLinkMicBattleItemCard {
  common: CommonMessageData | undefined;
  battleId: string;
  msgType: BattleCardMsgType;
  cardObtainGuide: CardObtainGuide | undefined;
  useCriticalStrikeCard: UseCriticalStrikeCard | undefined;
  useSmokeCard: UseSmokeCard | undefined;
  awardCardNotice: AwardCardNotice | undefined;
  useExtraTimeCard: UseExtraTimeCard | undefined;
  useSpecialEffectCard: UseSpecialEffectCard | undefined;
  usePotionCard: UsePotionCard | undefined;
  useWaveCard: UseWaveCard | undefined;
  specialEffectNotice: SpecialEffectNotice | undefined;
  useTop2Card: UseTop2Card | undefined;
  useTop3Card: UseTop3Card | undefined;
  useVaultGloveCard: UseVaultGloveCard | undefined;
  awardReason: number;
}
interface WebcastLinkMicBattlePunishFinish {
  common: CommonMessageData | undefined;
  channelId: string;
  opUid: string;
  reason: LinkMicBattlePunishFinishReason;
  battleId: string;
  battleSettings: BattleSetting | undefined;
  matchPunishExtraInfo: MatchPunishExtraInfo | undefined;
}
interface WebcastLinkMicFanTicketMethod {
  common: CommonMessageData | undefined;
  fanTicketRoomNotice: FanTicketRoomNoticeContent | undefined;
}
interface WebcastLinkMicMethod {
  common: CommonMessageData | undefined;
  messageType: number;
  accessKey: string;
  anchorLinkmicId: number;
  userId: string;
  fanTicket: string;
  totalLinkmicFanTicket: string;
  channelId: string;
  layout: number;
  vendor: number;
  dimension: number;
  theme: string;
  inviteUid: string;
  answer: number;
  startTime: string;
  duration: number;
  userScores: Buffer[];
  matchType: number;
  win: boolean;
  prompts: string;
  toUserId: string;
  linkmicLayout: string;
  fromUserId: string;
  tips: string;
  startTimeMs: string;
  confluenceType: number;
  fromRoomId: string;
  inviteType: number;
  subType: string;
  inviterRivalExtra: RivalExtraInfo | undefined;
  rtcExtInfo: string;
  rtcAppId: string;
  appId: string;
  appSign: string;
  rtcAppSign: string;
  anchorLinkmicIdStr: string;
  rivalAnchorId: string;
  rivalLinkmicId: number;
  rivalLinkmicIdStr: string;
  showPopup: boolean;
  secInviteUid: string;
  scene: string;
  secApplyUid: string;
  linkedUsers: User[];
  secFromUserId: string;
  replyType: LinkmicReplyType;
  replyPrompts: string;
  secToUserId: string;
  invitorInfo: Buffer;
  rtcJoinChannel: boolean;
  fanTicketIconType: number;
}
interface WebcastLinkmicBattleTaskMessage {
  common: CommonMessageData | undefined;
  taskMessageType: BattleTaskMessageType;
  start: BattleTaskStart | undefined;
  taskUpdate: BattleTaskUpdate | undefined;
  taskSettle: BattleTaskSettle | undefined;
  reward: BattleRewardSettle | undefined;
  battleId: string;
}
interface WebcastLiveGameIntroMessage {
  common: CommonMessageData | undefined;
  content: Text | undefined;
  hasRankInfo: boolean;
}
interface WebcastLiveIntroMessage {
  common: CommonMessageData | undefined;
  id: string;
  auditStatus: number;
  content: string;
  user: User | undefined;
  introMode: number;
  badges: BadgeStruct[];
  contentLanguage: string;
}
interface WebcastMarqueeAnnouncementMessage {
  common: CommonMessageData | undefined;
  messageScene: string;
  messageEntity: MessageEntity[];
}
interface WebcastMemberMessage {
  common: CommonMessageData | undefined;
  user: User | undefined;
  memberCount: number;
  operator: User | undefined;
  isSetToAdmin: boolean;
  isTopUser: boolean;
  rankScore: number;
  topUserNo: number;
  enterType: number;
  action: MemberMessageAction;
  actionDescription: string;
  userId: string;
  effectConfig: Buffer;
  popStr: string;
  enterEffectConfig: EffectConfigBean | undefined;
  backgroundImage: ImageModel | undefined;
  backgroundImageV2: ImageModel | undefined;
  anchorDisplayText: Text | undefined;
  clientEnterSource: string;
  clientEnterType: string;
  clientLiveReason: string;
  actionDuration: string;
  userShareType: string;
  displayStyle: DisplayStyle;
  adminPermissions: {
    [key: number]: number;
  };
  kickSource: number;
  allowPreviewTime: string;
  lastSubscriptionAction: string;
  publicAreaMessageCommon: PublicAreaMessageCommon | undefined;
  liveSubOnlyTier: string;
  liveSubOnlyMonth: string;
  ecStreamerKey: string;
  showWave: string;
  waveAlgorithmData: WaveAlgorithmData | undefined;
  hitAbStatus: HitABStatus;
}
interface WebcastMemberMessage_AdminPermissionsEntry {
  key: number;
  value: number;
}
interface WebcastMsgDetectMessage {
  common: CommonMessageData | undefined;
  dType: number;
  tCondition: TriggerCondition | undefined;
  tInfo: TimeInfo | undefined;
  triggerBy: number;
  fromRegion: string;
}
interface WebcastNoticeMessage {
  common: CommonMessageData | undefined;
  content: string;
  noticeType: number;
  style: string;
  title: Text | undefined;
  violationReason: Text | undefined;
  displayText: Text | undefined;
  tipsTitle: Text | undefined;
  tipsUrl: string;
  noticeTitle: Text | undefined;
  noticeContent: Text | undefined;
  scene: string;
}
interface WebcastPartnershipDropsUpdateMessage {
  common: CommonMessageData | undefined;
  changeMode: PartnershipDropsUpdateMessageChangeMode;
  dropsId: string;
  taskId: string;
  eventId: string;
  anchorUid: string;
}
interface WebcastPartnershipGameOfflineMessage {
  common: CommonMessageData | undefined;
  offlineGameList: OfflineGameInfo[];
}
interface WebcastPartnershipPunishMessage {
  common: CommonMessageData | undefined;
  punishInfo: PunishEventInfo | undefined;
}
interface WebcastPerceptionMessage {
  common: CommonMessageData | undefined;
  dialog: PerceptionDialogInfo | undefined;
  punishInfo: PunishEventInfo | undefined;
  endTime: number;
  showViolationWarning: boolean;
  toast: Text | undefined;
  floatStyle: number;
  floatText: Text | undefined;
  sheet: PerceptionSheetInfo | undefined;
  floatIconType: PerceptionDialogIconType;
}
interface WebcastPollMessage {
  common: CommonMessageData | undefined;
  messageType: string;
  pollId: string;
  startContent: PollStartContent | undefined;
  endContent: PollEndContent | undefined;
  updateVotesContent: PollUpdateVotesContent | undefined;
  pollKind: PollKind;
  pollBasicInfo: PollBasicInfo | undefined;
  templateContent: TemplateContent | undefined;
}
interface WebcastQuestionNewMessage {
  common: CommonMessageData | undefined;
  data: Question | undefined;
}
interface WebcastRankTextMessage {
  common: CommonMessageData | undefined;
  scene: RankTextMessageRankTestMessageScene;
  ownerIdxBeforeUpdate: string;
  ownerIdxAfterUpdate: string;
  selfGetBadgeMsg: Text | undefined;
  otherGetBadgeMsg: Text | undefined;
  curUserId: string;
  leftIcon: ImageModel | undefined;
  content: Text | undefined;
  rankType: ProfitRankType;
  userEnigmaInfo: RankUserEnigmaInfo | undefined;
  publicAreaMsgCommon: PublicAreaMessageCommon | undefined;
}
interface WebcastRankUpdateMessage {
  common: CommonMessageData | undefined;
  updates: RankUpdate[];
  groupType: EntranceGroupType;
  opType: OpType;
  rankPriority: string;
  tabs: RankTabInfo[];
  isAnimationLoopPlay: boolean;
  animationLoopForOff: boolean;
  unionAnimation: UnionAnimationInfo[];
  tabInfo: RankListTabInfo[];
  validRanks: ValidRanks | undefined;
}
interface WebcastRoomMessage {
  common: CommonMessageData | undefined;
  content: string;
  supprotLandscape: boolean;
  source: number;
  icon: ImageModel | undefined;
  scene: string;
  isWelcome: boolean;
  publicAreaCommon: PublicAreaMessageCommon | undefined;
  showDurationMs: string;
  subScene: string;
  schema: string;
  signature: string;
  signatureVersion: string;
}
interface WebcastRoomNotifyMessage {
  common: CommonMessageData | undefined;
  schema: string;
  notifyType: string;
  content: string;
  user: User | undefined;
  extra: RoomNotifyMessageExtra | undefined;
  notifyClass: number;
  flexSetting: string[];
  source: string;
  fromUserId: string;
  privilegeLogExtra: PrivilegeLogExtra | undefined;
  toAnchorId: string;
  eventTracking: RoomNotifyMessageEventTracking | undefined;
}
interface WebcastRoomPinMessage {
  common: CommonMessageData | undefined;
  chatMessage: WebcastChatMessage | undefined;
  socialMessage: WebcastSocialMessage | undefined;
  giftMessage: WebcastGiftMessage | undefined;
  memberMessage: WebcastMemberMessage | undefined;
  likeMessage: WebcastLikeMessage | undefined;
  method: string;
  pinTime: string;
  operator: User | undefined;
  action: PinMessageActionType;
  displayDuration: string;
  pinMsgId: string;
  ecStreamerKey: string;
}
interface WebcastRoomUserSeqMessage {
  common: CommonMessageData | undefined;
  ranks: Contributor[];
  total: string;
  popStr: string;
  seats: Contributor[];
  popularity: string;
  totalUser: string;
  anonymous: string;
}
interface WebcastRoomVerifyMessage {
  common: CommonMessageData | undefined;
  action: number;
  content: string;
  noticeType: string;
  closeRoom: boolean;
}
interface WebcastSocialMessage {
  common: CommonMessageData | undefined;
  user: User | undefined;
  shareType: string;
  action: string;
  shareTarget: string;
  followCount: string;
  shareDisplayStyle: string;
  shareCount: number;
  publicAreaMessageCommon: PublicAreaMessageCommon | undefined;
  signature: string;
  signatureVersion: string;
  showDurationMs: string;
  followType: number;
  targetUserId: string;
  scene: string;
}
interface WebcastSpeakerMessage {
  common: CommonMessageData | undefined;
}
interface WebcastSubNotifyMessage {
  common: CommonMessageData | undefined;
  user: User | undefined;
  exhibitionType: ExhibitionType;
  subMonth: string;
  subscribeType: SubscribeType;
  oldSubscribeStatus: OldSubscribeStatus;
  messageType: MessageType;
  subscribingStatus: SubscribingStatus;
  isSend: boolean;
  isCustom: boolean;
  giftSource: GiftSource;
  messageDisplayStyle: MessageDisplayStyle;
  publicAreaMessageCommon: PublicAreaMessageCommon | undefined;
  packageId: string;
  eventTracking: RoomNotifyMessageEventTracking | undefined;
}
interface WebcastSubPinEventMessage {
  common: CommonMessageData | undefined;
  actionType: SubPinEventMessageActionType;
  card: SubPinCard | undefined;
  operatorUserId: string;
}
interface WebcastToastMessage {
  common: CommonMessageData | undefined;
  displayDurationMillisecond: string;
  delayDisplayDurationMillisecond: string;
  scene: string;
}
interface WebcastUnauthorizedMemberMessage {
  common: CommonMessageData | undefined;
  action: number;
  nickNamePrefix: Text | undefined;
  nickName: string;
  enterText: Text | undefined;
  publicAreaCommon: PublicAreaMessageCommon | undefined;
}
interface WebcastViewerPicksUpdateMessage {
  common: CommonMessageData | undefined;
  updateType: number;
  info: ViewerPicksInfo | undefined;
}
declare const AccessControlCaptcha: MessageFns$4<AccessControlCaptcha>;
declare const ActionButton: MessageFns$4<ActionButton>;
declare const AddToCartButton: MessageFns$4<AddToCartButton>;
declare const AffiliatedInfo: MessageFns$4<AffiliatedInfo>;
declare const AffiliatedInfo_StickerTrackParamEntry: MessageFns$4<AffiliatedInfo_StickerTrackParamEntry>;
declare const AnchorPair: MessageFns$4<AnchorPair>;
declare const AnimationData: MessageFns$4<AnimationData>;
declare const AtmosphereTagInfo: MessageFns$4<AtmosphereTagInfo>;
declare const AwardCardNotice: MessageFns$4<AwardCardNotice>;
declare const Background: MessageFns$4<Background>;
declare const BarrageEvent: MessageFns$4<BarrageEvent>;
declare const BarrageEvent_ParamsEntry: MessageFns$4<BarrageEvent_ParamsEntry>;
declare const BarrageTypeEcomLiveParam: MessageFns$4<BarrageTypeEcomLiveParam>;
declare const BarrageTypeFansLevelParam: MessageFns$4<BarrageTypeFansLevelParam>;
declare const BarrageTypeGiftGalleryParam: MessageFns$4<BarrageTypeGiftGalleryParam>;
declare const BarrageTypeSubscribeGiftParam: MessageFns$4<BarrageTypeSubscribeGiftParam>;
declare const BarrageTypeUserGradeParam: MessageFns$4<BarrageTypeUserGradeParam>;
declare const BattleInviteeGiftPermission: MessageFns$4<BattleInviteeGiftPermission>;
declare const BillboardDisplayResult: MessageFns$4<BillboardDisplayResult>;
declare const BillboardInfo: MessageFns$4<BillboardInfo>;
declare const BillboardInfo_DaInfoEntry: MessageFns$4<BillboardInfo_DaInfoEntry>;
declare const BoostCard: MessageFns$4<BoostCard>;
declare const CampaignBannerDisplay: MessageFns$4<CampaignBannerDisplay>;
declare const CampaignBannerDisplay_DaInfoEntry: MessageFns$4<CampaignBannerDisplay_DaInfoEntry>;
declare const CampaignBannerDisplayResult: MessageFns$4<CampaignBannerDisplayResult>;
declare const CapsuleBizParams: MessageFns$4<CapsuleBizParams>;
declare const CapsuleBizParamsAnchorPinPerk: MessageFns$4<CapsuleBizParamsAnchorPinPerk>;
declare const CapsuleBizParamsCohost: MessageFns$4<CapsuleBizParamsCohost>;
declare const CapsuleBizParamsCommentFlaggedPrompt: MessageFns$4<CapsuleBizParamsCommentFlaggedPrompt>;
declare const CapsuleBizParamsCommentFlaggedPromptForNewUser: MessageFns$4<CapsuleBizParamsCommentFlaggedPromptForNewUser>;
declare const CapsuleBizParamsCommentMuteRulePrompt: MessageFns$4<CapsuleBizParamsCommentMuteRulePrompt>;
declare const CapsuleBizParamsEcom: MessageFns$4<CapsuleBizParamsEcom>;
declare const CapsuleBizParamsEcomEventTracking: MessageFns$4<CapsuleBizParamsEcomEventTracking>;
declare const CapsuleBizParamsGamingModeratorsCommentGuide: MessageFns$4<CapsuleBizParamsGamingModeratorsCommentGuide>;
declare const CapsuleBizParamsModeratorGuide: MessageFns$4<CapsuleBizParamsModeratorGuide>;
declare const CapsuleBizParamsMultiGuestApplyGuide: MessageFns$4<CapsuleBizParamsMultiGuestApplyGuide>;
declare const CapsuleBizParamsMultiGuestInviteGuide: MessageFns$4<CapsuleBizParamsMultiGuestInviteGuide>;
declare const CapsuleBizParamsNewAnchorEffect: MessageFns$4<CapsuleBizParamsNewAnchorEffect>;
declare const CapsuleBizParamsRandomGift: MessageFns$4<CapsuleBizParamsRandomGift>;
declare const CaptionContent: MessageFns$4<CaptionContent>;
declare const CardObtainGuide: MessageFns$4<CardObtainGuide>;
declare const CohostListChangeContent: MessageFns$4<CohostListChangeContent>;
declare const CommentLabelScore: MessageFns$4<CommentLabelScore>;
declare const CommentQualityScore: MessageFns$4<CommentQualityScore>;
declare const Contributor: MessageFns$4<Contributor>;
declare const CreatorSuccessInfo: MessageFns$4<CreatorSuccessInfo>;
declare const DelayParam: MessageFns$4<DelayParam>;
declare const Detail: MessageFns$4<Detail>;
declare const DispersionInfo: MessageFns$4<DispersionInfo>;
declare const EffectConfigBean: MessageFns$4<EffectConfigBean>;
declare const Extra: MessageFns$4<Extra>;
declare const FanTicketRoomNoticeContent: MessageFns$4<FanTicketRoomNoticeContent>;
declare const FlashSaleAtmosphere: MessageFns$4<FlashSaleAtmosphere>;
declare const FlashSaleAtmosphereInfo: MessageFns$4<FlashSaleAtmosphereInfo>;
declare const FlashSaleEnhancementInfo$1: MessageFns$4<FlashSaleEnhancementInfo$1>;
declare const FlashSaleStock: MessageFns$4<FlashSaleStock>;
declare const FrequencyControl: MessageFns$4<FrequencyControl>;
declare const GalleryData: MessageFns$4<GalleryData>;
declare const GalleryData_ProgressEntry: MessageFns$4<GalleryData_ProgressEntry>;
declare const GameAction: MessageFns$4<GameAction>;
declare const GiftIMPriority: MessageFns$4<GiftIMPriority>;
declare const GiftInfo: MessageFns$4<GiftInfo>;
declare const GiftMonitorInfo: MessageFns$4<GiftMonitorInfo>;
declare const GoalData: MessageFns$4<GoalData>;
declare const GoalData_GoalProgressEntry: MessageFns$4<GoalData_GoalProgressEntry>;
declare const GuideMessageFrequencyRule: MessageFns$4<GuideMessageFrequencyRule>;
declare const HourlyRankRewardInfo: MessageFns$4<HourlyRankRewardInfo>;
declare const Img: MessageFns$4<Img>;
declare const InteractiveGiftInfo: MessageFns$4<InteractiveGiftInfo>;
declare const LinkMicAudienceInviteGuide: MessageFns$4<LinkMicAudienceInviteGuide>;
declare const LinkMicAudienceNoticeText: MessageFns$4<LinkMicAudienceNoticeText>;
declare const LinkMicAudienceTurnOnGuide: MessageFns$4<LinkMicAudienceTurnOnGuide>;
declare const LinkerCloseContent: MessageFns$4<LinkerCloseContent>;
declare const LinkerCreateContent: MessageFns$4<LinkerCreateContent>;
declare const LinkerMediaChangeContent: MessageFns$4<LinkerMediaChangeContent>;
declare const LinkerSysKickOutContent: MessageFns$4<LinkerSysKickOutContent>;
declare const LinkerUpdateUserContent: MessageFns$4<LinkerUpdateUserContent>;
declare const LinkerUpdateUserContent_UpdateInfoEntry: MessageFns$4<LinkerUpdateUserContent_UpdateInfoEntry>;
declare const LinkerWaitingListChangeContent: MessageFns$4<LinkerWaitingListChangeContent>;
declare const LinkmicAudienceApplyGuide: MessageFns$4<LinkmicAudienceApplyGuide>;
declare const LinkmicAudienceInviteGroupChatMemberGuide: MessageFns$4<LinkmicAudienceInviteGroupChatMemberGuide>;
declare const LinkmicUserToastContent: MessageFns$4<LinkmicUserToastContent>;
declare const LivePermissionInfo: MessageFns$4<LivePermissionInfo>;
declare const MessageDisplayInfo: MessageFns$4<MessageDisplayInfo>;
declare const MessageEntity: MessageFns$4<MessageEntity>;
declare const NotifyHighlightContent: MessageFns$4<NotifyHighlightContent>;
declare const NotifyHighlightInfo: MessageFns$4<NotifyHighlightInfo>;
declare const OfflineGameInfo: MessageFns$4<OfflineGameInfo>;
declare const OperationInfo: MessageFns$4<OperationInfo>;
declare const OperationState: MessageFns$4<OperationState>;
declare const PollBasicInfo: MessageFns$4<PollBasicInfo>;
declare const PollEndContent: MessageFns$4<PollEndContent>;
declare const PollOptionInfo: MessageFns$4<PollOptionInfo>;
declare const PollStartContent: MessageFns$4<PollStartContent>;
declare const PollUpdateVotesContent: MessageFns$4<PollUpdateVotesContent>;
declare const PortraitInfo: MessageFns$4<PortraitInfo>;
declare const PortraitTag: MessageFns$4<PortraitTag>;
declare const ProductAtmosphereTag: MessageFns$4<ProductAtmosphereTag>;
declare const ProductSnapShot: MessageFns$4<ProductSnapShot>;
declare const Progress: MessageFns$4<Progress>;
declare const PromotionInfo: MessageFns$4<PromotionInfo>;
declare const PublicAreaCommon: MessageFns$4<PublicAreaCommon>;
declare const PublicAreaMessageCommon: MessageFns$4<PublicAreaMessageCommon>;
declare const Question: MessageFns$4<Question>;
declare const RankAnimationInfo: MessageFns$4<RankAnimationInfo>;
declare const RankListTabInfo: MessageFns$4<RankListTabInfo>;
declare const RankUpdate: MessageFns$4<RankUpdate>;
declare const RecommendComment: MessageFns$4<RecommendComment>;
declare const RefreshLiveBagInfo: MessageFns$4<RefreshLiveBagInfo>;
declare const RightLabel: MessageFns$4<RightLabel>;
declare const RoomBasedGiftData: MessageFns$4<RoomBasedGiftData>;
declare const RoomBasedGiftData_RoomBasedGiftsEntry: MessageFns$4<RoomBasedGiftData_RoomBasedGiftsEntry>;
declare const RoomBasedGifts: MessageFns$4<RoomBasedGifts>;
declare const RoomNotifyMessageExtra: MessageFns$4<RoomNotifyMessageExtra>;
declare const RoomNotifyMessageEventTracking: MessageFns$4<RoomNotifyMessageEventTracking>;
declare const SpecialEffectNotice: MessageFns$4<SpecialEffectNotice>;
declare const SpecifiedDisplayText: MessageFns$4<SpecifiedDisplayText>;
declare const SponsorshipInfo: MessageFns$4<SponsorshipInfo>;
declare const TagItem: MessageFns$4<TagItem>;
declare const TagItem_EventTrackingFieldsEntry: MessageFns$4<TagItem_EventTrackingFieldsEntry>;
declare const TeamUsersInfo: MessageFns$4<TeamUsersInfo>;
declare const TemplateContent: MessageFns$4<TemplateContent>;
declare const TextEffect: MessageFns$4<TextEffect>;
declare const TimeInfo: MessageFns$4<TimeInfo>;
declare const TitleData: MessageFns$4<TitleData>;
declare const Topic: MessageFns$4<Topic>;
declare const Topic_EventTrackingFieldsEntry: MessageFns$4<Topic_EventTrackingFieldsEntry>;
declare const TriggerCondition: MessageFns$4<TriggerCondition>;
declare const UnionAnimationInfo: MessageFns$4<UnionAnimationInfo>;
declare const UseCriticalStrikeCard: MessageFns$4<UseCriticalStrikeCard>;
declare const UseExtraTimeCard: MessageFns$4<UseExtraTimeCard>;
declare const UsePotionCard: MessageFns$4<UsePotionCard>;
declare const UseSmokeCard: MessageFns$4<UseSmokeCard>;
declare const UseSpecialEffectCard: MessageFns$4<UseSpecialEffectCard>;
declare const UseTop2Card: MessageFns$4<UseTop2Card>;
declare const UseTop3Card: MessageFns$4<UseTop3Card>;
declare const UseVaultGloveCard: MessageFns$4<UseVaultGloveCard>;
declare const UseWaveCard: MessageFns$4<UseWaveCard>;
declare const UserCountdownInfo: MessageFns$4<UserCountdownInfo>;
declare const UserFanTicket: MessageFns$4<UserFanTicket>;
declare const UserInfo: MessageFns$4<UserInfo>;
declare const UserInteractionInfo: MessageFns$4<UserInteractionInfo>;
declare const UserMetrics: MessageFns$4<UserMetrics>;
declare const UserModelPredictionData: MessageFns$4<UserModelPredictionData>;
declare const UserModelPredictionData_ModelPredictionDataEntry: MessageFns$4<UserModelPredictionData_ModelPredictionDataEntry>;
declare const UserPlayInfo: MessageFns$4<UserPlayInfo>;
declare const ValidRanks: MessageFns$4<ValidRanks>;
declare const Voucher: MessageFns$4<Voucher>;
declare const WaveAlgorithmData: MessageFns$4<WaveAlgorithmData>;
declare const WebcastAccessControlMessage: MessageFns$4<WebcastAccessControlMessage>;
declare const WebcastBarrageMessage: MessageFns$4<WebcastBarrageMessage>;
declare const WebcastBoostCardMessage: MessageFns$4<WebcastBoostCardMessage>;
declare const WebcastBottomMessage: MessageFns$4<WebcastBottomMessage>;
declare const WebcastCapsuleMessage: MessageFns$4<WebcastCapsuleMessage>;
declare const WebcastCaptionMessage: MessageFns$4<WebcastCaptionMessage>;
declare const WebcastChatMessage: MessageFns$4<WebcastChatMessage>;
declare const WebcastControlMessage: MessageFns$4<WebcastControlMessage>;
declare const WebcastEmoteChatMessage: MessageFns$4<WebcastEmoteChatMessage>;
declare const WebcastGameRankNotifyMessage: MessageFns$4<WebcastGameRankNotifyMessage>;
declare const WebcastGiftBroadcastMessage: MessageFns$4<WebcastGiftBroadcastMessage>;
declare const WebcastGiftDynamicRestrictionMessage: MessageFns$4<WebcastGiftDynamicRestrictionMessage>;
declare const WebcastGiftMessage: MessageFns$4<WebcastGiftMessage>;
declare const WebcastGiftPanelUpdateMessage: MessageFns$4<WebcastGiftPanelUpdateMessage>;
declare const WebcastGiftPromptMessage: MessageFns$4<WebcastGiftPromptMessage>;
declare const WebcastGuideMessage: MessageFns$4<WebcastGuideMessage>;
declare const WebcastHourlyRankRewardMessage: MessageFns$4<WebcastHourlyRankRewardMessage>;
declare const WebcastImDeleteMessage: MessageFns$4<WebcastImDeleteMessage>;
declare const WebcastInRoomBannerMessage: MessageFns$4<WebcastInRoomBannerMessage>;
declare const WebcastLikeMessage: MessageFns$4<WebcastLikeMessage>;
declare const WebcastLinkMessage: MessageFns$4<WebcastLinkMessage>;
declare const WebcastLinkMicArmies: MessageFns$4<WebcastLinkMicArmies>;
declare const WebcastLinkMicArmies_ArmiesEntry: MessageFns$4<WebcastLinkMicArmies_ArmiesEntry>;
declare const WebcastLinkMicBattle: MessageFns$4<WebcastLinkMicBattle>;
declare const WebcastLinkMicBattle_BattleResultEntry: MessageFns$4<WebcastLinkMicBattle_BattleResultEntry>;
declare const WebcastLinkMicBattle_BattleComboV2Entry: MessageFns$4<WebcastLinkMicBattle_BattleComboV2Entry>;
declare const WebcastLinkMicBattle_LeagueInfoMapEntry: MessageFns$4<WebcastLinkMicBattle_LeagueInfoMapEntry>;
declare const WebcastLinkMicBattle_LeagueScoreInfoMapEntry: MessageFns$4<WebcastLinkMicBattle_LeagueScoreInfoMapEntry>;
declare const WebcastLinkMicBattle_AnchorMatchSettingsEntry: MessageFns$4<WebcastLinkMicBattle_AnchorMatchSettingsEntry>;
declare const WebcastLinkMicBattle_TrackingExtraEntry: MessageFns$4<WebcastLinkMicBattle_TrackingExtraEntry>;
declare const WebcastLinkMicBattleItemCard: MessageFns$4<WebcastLinkMicBattleItemCard>;
declare const WebcastLinkMicBattlePunishFinish: MessageFns$4<WebcastLinkMicBattlePunishFinish>;
declare const WebcastLinkMicFanTicketMethod: MessageFns$4<WebcastLinkMicFanTicketMethod>;
declare const WebcastLinkMicMethod: MessageFns$4<WebcastLinkMicMethod>;
declare const WebcastLinkmicBattleTaskMessage: MessageFns$4<WebcastLinkmicBattleTaskMessage>;
declare const WebcastLiveGameIntroMessage: MessageFns$4<WebcastLiveGameIntroMessage>;
declare const WebcastLiveIntroMessage: MessageFns$4<WebcastLiveIntroMessage>;
declare const WebcastMarqueeAnnouncementMessage: MessageFns$4<WebcastMarqueeAnnouncementMessage>;
declare const WebcastMemberMessage: MessageFns$4<WebcastMemberMessage>;
declare const WebcastMemberMessage_AdminPermissionsEntry: MessageFns$4<WebcastMemberMessage_AdminPermissionsEntry>;
declare const WebcastMsgDetectMessage: MessageFns$4<WebcastMsgDetectMessage>;
declare const WebcastNoticeMessage: MessageFns$4<WebcastNoticeMessage>;
declare const WebcastPartnershipDropsUpdateMessage: MessageFns$4<WebcastPartnershipDropsUpdateMessage>;
declare const WebcastPartnershipGameOfflineMessage: MessageFns$4<WebcastPartnershipGameOfflineMessage>;
declare const WebcastPartnershipPunishMessage: MessageFns$4<WebcastPartnershipPunishMessage>;
declare const WebcastPerceptionMessage: MessageFns$4<WebcastPerceptionMessage>;
declare const WebcastPollMessage: MessageFns$4<WebcastPollMessage>;
declare const WebcastQuestionNewMessage: MessageFns$4<WebcastQuestionNewMessage>;
declare const WebcastRankTextMessage: MessageFns$4<WebcastRankTextMessage>;
declare const WebcastRankUpdateMessage: MessageFns$4<WebcastRankUpdateMessage>;
declare const WebcastRoomMessage: MessageFns$4<WebcastRoomMessage>;
declare const WebcastRoomNotifyMessage: MessageFns$4<WebcastRoomNotifyMessage>;
declare const WebcastRoomPinMessage: MessageFns$4<WebcastRoomPinMessage>;
declare const WebcastRoomUserSeqMessage: MessageFns$4<WebcastRoomUserSeqMessage>;
declare const WebcastRoomVerifyMessage: MessageFns$4<WebcastRoomVerifyMessage>;
declare const WebcastSocialMessage: MessageFns$4<WebcastSocialMessage>;
declare const WebcastSpeakerMessage: MessageFns$4<WebcastSpeakerMessage>;
declare const WebcastSubNotifyMessage: MessageFns$4<WebcastSubNotifyMessage>;
declare const WebcastSubPinEventMessage: MessageFns$4<WebcastSubPinEventMessage>;
declare const WebcastToastMessage: MessageFns$4<WebcastToastMessage>;
declare const WebcastUnauthorizedMemberMessage: MessageFns$4<WebcastUnauthorizedMemberMessage>;
declare const WebcastViewerPicksUpdateMessage: MessageFns$4<WebcastViewerPicksUpdateMessage>;
interface MessageFns$4<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/message/ext.d.ts
interface HotTag {
  productId: string;
  hotCount: string;
}
interface PopProduct {
  title: string;
  price: string;
  imageUrl: string;
  openUrl: string;
  productType: string;
  productId: string;
  source: string;
  sourceFrom: number;
  schema: string;
  platform: number;
  productStatus: number;
}
interface TraceInfo {
  operateTime: string;
  arrivalTime: string;
  sendTime: string;
}
interface WebcastOecLiveShoppingMessage {
  common: CommonMessageData | undefined;
  actionType: number;
  liveProductNumber: number;
  popProduct: PopProduct | undefined;
  traceInfo: TraceInfo | undefined;
  hotTags: HotTag[];
  atmosphereTagInfo: AtmosphereTagInfo | undefined;
  livePermissionInfo: LivePermissionInfo | undefined;
  productSnapShot: ProductSnapShot | undefined;
  pinCardDelayTime: string;
  flashSaleAtmosphereInfo: FlashSaleAtmosphereInfo[];
  cardType: number;
  billboardInfo: BillboardInfo | undefined;
  billboardDisplayResult: BillboardDisplayResult | undefined;
  dispersionInfo: DispersionInfo[];
  promotionInfo: PromotionInfo | undefined;
  campaignBannerDisplayResult: CampaignBannerDisplayResult | undefined;
  campaignBannerDisplay: CampaignBannerDisplay | undefined;
  refreshLiveBagInfo: RefreshLiveBagInfo | undefined;
  anchorPinCardResetType: number;
  voucher: Voucher | undefined;
  oecLiveShoppingMessageV2: OecLiveShoppingMessageV2 | undefined;
}
declare const HotTag: MessageFns$3<HotTag>;
declare const PopProduct: MessageFns$3<PopProduct>;
declare const TraceInfo: MessageFns$3<TraceInfo>;
declare const WebcastOecLiveShoppingMessage: MessageFns$3<WebcastOecLiveShoppingMessage>;
interface MessageFns$3<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/message/linkcore_webcast_link_layer_message.d.ts
interface WebcastLinkLayerMessage {
  common: CommonMessageData | undefined;
  messageType: LinkLayerMessageType;
  channelId: string;
  scene: Scene;
  source: string;
  centerizedIdc: string;
  rtcRoomId: string;
  version: string;
  linkerMode: LinkerMode;
  waitCrossData: boolean;
  createChannelContent: CreateChannelContent | undefined;
  listChangeContent: LinkListChangeContent | undefined;
  inviteContent: InviteContent | undefined;
  applyContent: ApplyContent | undefined;
  permitApplyContent: PermitApplyContent | undefined;
  replyInviteContent: ReplyInviteContent | undefined;
  kickOutContent: KickOutContent | undefined;
  cancelApplyContent: CancelApplyContent | undefined;
  cancelInviteContent: CancelInviteContent | undefined;
  leaveContent: LeaveContent | undefined;
  finishContent: FinishChannelContent | undefined;
  joinDirectContent: JoinDirectContent | undefined;
  joinGroupContent: JoinGroupContent | undefined;
  permitGroupContent: PermitJoinGroupContent | undefined;
  cancelGroupContent: CancelJoinGroupContent | undefined;
  leaveGroupContent: LeaveJoinGroupContent | undefined;
  p2pGroupChangeContent: P2PGroupChangeContent | undefined;
  groupChangeContent: GroupChangeContent | undefined;
  joinGroupDirectContent: JoinGroupDirectContent | undefined;
  joinRoomDirectContent: JoinRoomDirectContent | undefined;
  linkEnvelopeContent: LinkEnvelopeContent | undefined;
  businessContent: BusinessContent | undefined;
}
declare const WebcastLinkLayerMessage: MessageFns$2<WebcastLinkLayerMessage>;
interface MessageFns$2<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/model/message/redenvelope.d.ts
interface MessageRedEnvelopInfo {
  envelopeId: string;
  businessType: EnvelopeBusinessType;
  envelopeIdc: string;
  sendUserName: string;
  diamondCount: number;
  peopleCount: number;
  unpackAt: number;
  sendUserId: string;
  sendUserAvatar: ImageModel | undefined;
  createAt: string;
  roomId: string;
  followShowStatus: EnvelopeFollowShowStatus;
  skinId: number;
  voteCount: number;
  senderEnigmaInfo: EnvelopeEnigmaInfo | undefined;
  superFanCount: number;
}
interface WebcastEnvelopeMessage {
  common: CommonMessageData | undefined;
  envelopeInfo: MessageRedEnvelopInfo | undefined;
  display: EnvelopeDisplay;
  publicAreaMsgCommon: PublicAreaMessageCommon | undefined;
}
declare const MessageRedEnvelopInfo: MessageFns$1<MessageRedEnvelopInfo>;
declare const WebcastEnvelopeMessage: MessageFns$1<WebcastEnvelopeMessage>;
interface MessageFns$1<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
//#region src/generated/node/v3/webcast/synthetic_proto.d.ts
interface HeartBeatMessage {
  roomId: string;
  sendPacketSeqId: string;
}
interface WebcastPushFrame {
  seqId: string;
  logId: string;
  service: string;
  method: string;
  headers: PushHeader[];
  payloadEncoding: string;
  payloadType: string;
  payload: Buffer;
}
interface PushHeader {
  key: string;
  value: string;
}
interface SystemMessage {
  description: string;
}
interface WebcastSystemMessage {
  common: CommonMessageData | undefined;
  message: string;
}
interface WebcastImEnterRoomMessage {
  roomId: string;
  roomTag: string;
  liveRegion: string;
  liveId: string;
  identity: string;
  cursor: string;
  accountType: string;
  enterUniqueId: string;
  filterWelcomeMsg: string;
  isAnchorContinueKeepMsg: boolean;
}
declare const HeartBeatMessage: MessageFns<HeartBeatMessage>;
declare const WebcastPushFrame: MessageFns<WebcastPushFrame>;
declare const PushHeader: MessageFns<PushHeader>;
declare const SystemMessage: MessageFns<SystemMessage>;
declare const WebcastSystemMessage: MessageFns<WebcastSystemMessage>;
declare const WebcastImEnterRoomMessage: MessageFns<WebcastImEnterRoomMessage>;
interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
}
//#endregion
export { AccessControlCaptcha, ActionButton, ActionButtonType, ActivityBadgeInfo, ActivityBadgeInfo_EventTraceEntry, ActivityRewardInfo, AddToCartButton, AffiliatedInfo, AffiliatedInfoStickerShowScene, AffiliatedInfo_StickerTrackParamEntry, AgreeStatus, AllListUser, AnchorGiftModeMetaMap, AnchorGiftModeMetaMap_AnchorGiftModeMetasEntry, AnchorLayoutSetting, AnchorLayoutStyleSetting, AnchorLevel, AnchorLinkmicUserSettings, AnchorMatchSettings, AnchorPair, AnchorPanelLayoutTypeSetting, AnimationData, ApplyBizContent, ApplyContent, ArrowConfig, AssetBase, AssetBundle, AssetExtra, AssetsModel, AtmosphereInfo, AtmosphereTagInfo, AtomAction, AuctionInfo, AuctionInfo_TraceTimeMapEntry, AuctionWinnerPopup, AudioResource, AuditInfo, AuditStatus, AuditTaskType, AuthenticationInfo, Author, AvatarState, AwardCardNotice, BEFViewRenderSize, BackGroundImageState, Background, BadgeDisplayType, BadgeExhibitionType, BadgePriorityType, BadgeSceneType, BadgeStruct, BadgeText, BadgeTextPosition, BagIndex, BarrageEvent, BarrageEvent_ParamsEntry, BarrageMessageBarrageType, BarrageMessageIconDisplayType, BarrageMessageRenderType, BarrageMessageShowType, BarrageTypeEcomLiveParam, BarrageTypeFansLevelParam, BarrageTypeGiftGalleryParam, BarrageTypeSubscribeGiftParam, BarrageTypeUserGradeParam, BaseProtoMessage, BatchGiftInfo, BattleABTest, BattleABTestList, BattleABTestSetting, BattleABTestType, BattleBaseUserInfo, BattleBonusConfig, BattleBonusConfig_GiftAmountGuideEntry, BattleCardMsgType, BattleComboInfo, BattleDisplayConfig, BattleEffect, BattleEffectInfos, BattleFeatureFlags, BattleGamePlayContent, BattleGamePlayContentUserInfo, BattleInfo, BattleInviteType, BattleInviteeGiftPermission, BattlePrompt, BattlePromptElem, BattleResult, BattleResultResult, BattleRewardSettle, BattleRewardSettleRewardStatus, BattleRivalTag, BattleScene, BattleSetting, BattleSettingsBattleStatus, BattleTaskGiftAmountGuide, BattleTaskMessageType, BattleTaskSettle, BattleTaskSettleResult, BattleTaskStart, BattleTaskUpdate, BattleTeamResult, BattleTeamUser, BattleTeamUserArmies, BattleTeamUserArmies_HostVisibleRankFromTeamIdEntry, BattleType, BattleUserArmies, BattleUserArmy, BattleUserInfo, BattleUserInfoWrapper, BattleUserSettings, BestTeammateRelation, BidPanel, BillboardDisplayResult, BillboardInfo, BillboardInfo_DaInfoEntry, BizLayoutState, BizSpotExtra, BizSpotInfo, BizType, BoostCard, BorderInfo, BusinessContent, ByteRTCExtInfo, CampaignBannerDisplay, CampaignBannerDisplayResult, CampaignBannerDisplay_DaInfoEntry, CancelApplyContent, CancelInviteContent, CancelJoinGroupContent, CapsuleBizParams, CapsuleBizParamsAnchorPinPerk, CapsuleBizParamsCohost, CapsuleBizParamsCommentFlaggedPrompt, CapsuleBizParamsCommentFlaggedPromptForNewUser, CapsuleBizParamsCommentMuteRulePrompt, CapsuleBizParamsEcom, CapsuleBizParamsEcomEventTracking, CapsuleBizParamsGamingModeratorsCommentGuide, CapsuleBizParamsModeratorGuide, CapsuleBizParamsMultiGuestApplyGuide, CapsuleBizParamsMultiGuestInviteGuide, CapsuleBizParamsNewAnchorEffect, CapsuleBizParamsRandomGift, CaptionContent, CardObtainGuide, CarouselCfg, ClassInfo, ClassType, CoHostBizLayoutExtra, CoHostBizSpotExtra, CoHostPermissoinType, CohostABInfo, CohostABTest, CohostABTestList, CohostABTestSetting, CohostABTestType, CohostContent, CohostContentGuideInfo, CohostLayoutMode, CohostListChangeContent, CohostListUser, CohostMode, CohostNudgeInfo, CohostStreamConfig, CohostTopic, CohostTypeLayoutExtra, CohostTypeLayoutNonSeiExtra, CohostTypeSpotExtra, CohostTypeSpotNonSeiExtra, CohostUserInfo, ColorGroup, ColorPickerInfo, CombineBadgeBackground, CombineBadgeStruct, ComboBadgeInfo, CommentLabelScore, CommentQualityScore, CommentTag, CommerceInfo, CommerceInfo_ProductInfoEntry, CommerceInfo_VoucherInfoEntry, CommonCardInfo, CommonMessageData, CommunityActiveDecoration, CommunityActiveDecoration_ImagesEntry, CommunityHeartMeInfo, CommunityHeartMeInfo_SlotsEntry, Content, ContentInviteSource, ContentPosition, ContentPositionType, ContentSource, Contributor, ControlAction, ControlChaosInfo, CreateChannelContent, CreatorScoreDisplayInfo, CreatorScoreLabelInfo, CreatorScoreProfile, CreatorScoreProfile_ScoreInfoExtraEntry, CreatorSuccessInfo, CriticalStrikeCardInfo, CrossScreenEffectInfo, CrossScreenEffectInfo_ActionEffectIdsEntry, CrossScreenEffectInfo_ReactionEffectIdsEntry, CrossScreenEffectInfo_SingleActionEffectIdsEntry, DSLConfig, DelayParam, Detail, DetailBlockReason, DiffInfo, DispersionInfo, DispersionParam, DisplayControl, DisplayControlHorizontalOnclickTriggerType, DisplayControl_TargetGroupShowRstEntry, DisplayStatus, DisplayStyle, DistributionStrategy, DynamicRestriction, EasterEgg, EcomLiveElementActions, EcommerceEntrance, EffectConfigBean, EffectStruct, EmoteWithIndex as EmojiEmoteWithIndex, EmoteModel, EmoteModelAuditInfo, EmotePrivateType, EmoteScene, EmoteType, EmoteUploadInfo, EnhancementText, EnhancementTextInfo, EnigmaBattleExtraInfo, EnigmaBattleSetting, EnigmaInfo, EntranceGroupType, EnvelopeBusinessType, EnvelopeDisplay, EnvelopeEnigmaInfo, EnvelopeFollowShowStatus, EventUserInfo, ExemptStrategy, ExhibitionType, ExtendAuctionCfg, Extra, ExtraTimeCardInfo, FaceRecognitionMeta, FanTicketRoomNoticeContent, FansClubData, FansClubInfo, FansClubMember, FansClubMember_PreferDataEntry, FinishChannelContent, FlashSaleAtmosphere, FlashSaleAtmosphereInfo, FlashSaleEnhancementInfo, FlashSaleStock, FlyingMicResources, FollowInfo, FontStyle, FrequencyControl, GalleryData, GalleryData_ProgressEntry, GameAction, GameActionType, GamePlayContent, GameRankNotifyMessageMsgType, GameTricksShortcut, GamepadTaskType, Gift, GiftBoxInfo, GiftColorInfo, GiftEffect, GiftEffectCrossScreenStickerSpec, GiftEffectCrossScreenStickerSpec_ActionAssetIdsEntry, GiftEffectCrossScreenStickerSpec_ReactionAssetIdsEntry, GiftEffectCrossScreenStickerSpec_SingleActionAssetIdsEntry, GiftEffectLynxSpec, GiftEffectPrefabSpec, GiftEffectSerialSpec, GiftEffectSpecs, GiftEffectStreamSpec, GiftEffect_EventTrackingParamsEntry, GiftGalleryBadgeInfo, GiftGalleryBadgeSection, GiftIMPriority, GiftInfo, GiftInfoInBox, GiftLockInfo, GiftMessageIgnoreConfig, GiftMessageVersion, GiftModeMeta, GiftModeMetaList, GiftModeMetaV2, GiftModeMetaV2_AnchorGiftModeMetaByTypeEntry, GiftMonitorInfo, GiftPanelBanner, GiftPanelBeaconBubble, GiftPanelBeaconBubbleType, GiftPermissionType, GiftPick, GiftPickExtra, GiftPickExtraGameInteraction, GiftPickExtraGameInteractionExternal, GiftPickExtraGameInteractionStorage, GiftPickExtraGameTricks, GiftPickExtraGameTricksExternal, GiftPickExtraGameTricksStorage, GiftPickWithScore, GiftRandomEffectInfo, GiftResource, GiftSeriesInfo, GiftShowType, GiftSkin, GiftSkinToGiftTextsInfo, GiftSource, GiftSponsorInfo, GiftStructSchemeGiftType, GiftText, GiftTrayInfo, GiftTrayStyle, Gift_BizExtraEntry, Gift_GiftResourcesEntry, Gift_TrackerParamsEntry, GiftsBoxInfo, GoalComparison, GoalData, GoalData_GoalProgressEntry, GoalMessageSource, GoalPinInfo, GoalReward, GoalStats, GradeIcon, GroupChangeContent, GroupChannelAllUser, GroupChannelUser, GroupPlayer, GroupStatus, GuestMicCameraChangeScene, GuestMicCameraManageOp, GuestUserInfo, GuideMessageFrequencyRule, Hashtag, HashtagNamespace, HeartBeatMessage, HighScoreControlCfg, HitABStatus, HorizontalPaddingRule, HotKey, HotTag, HourlyRankRewardInfo, IceShowdownSetting, IconConfig, ImageBadge, ImageModel, Img, InteractiveGiftInfo, InvitationReorderExtra, InviteBizContent, InviteContent, InviteTopHostInfo, InviterRivalExtra, JoinDirectBizContent, JoinDirectContent, JoinGroupBizContent, JoinGroupBizContent_AbInfosEntry, JoinGroupContent, JoinGroupDirectBizContent, JoinGroupDirectContent, JoinGroupMessageExtra, JoinGroupMessageExtra_RivalGuestsMapEntry, JoinRoomDirectBizContent, JoinRoomDirectContent, JoinType, JumpPage, JustDanceExtra, JustDanceLayoutExtra, KeyBoardHotKey, KickOutBizContent, KickOutContent, KickoutReason, LabelConfig, LayoutData, LayoutEnlargeStatus, LayoutState, LayoutStyle, LeagueScoreInfo, LeaveContent, LeaveJoinGroupContent, LikeEffect, LinkEnvelopeContent, LinkEnvelopeMessagePayload, LinkLayerListUser, LinkLayerMessageType, LinkListChangeContent, LinkListStatus, LinkListUser, LinkMicArmiesTriggerReason, LinkMicAudienceInviteGuide, LinkMicAudienceNoticeText, LinkMicAudienceTurnOnGuide, LinkMicBattleBattleAction, LinkMicBattlePunishFinishReason, LinkMicGiftGalleryDisplayText, LinkMicUserAdminType, LinkPosition, LinkRoleType, LinkSilenceStatus, LinkType, LinkUserIdentity, LinkUserState, LinkUserType, LinkedListChangeContent, LinkerAcceptNoticeContent, LinkerCancelContent, LinkerCloseContent, LinkerCreateContent, LinkerEnterContent, LinkerInfo, LinkerInviteContent, LinkerInviteContent_RtcExtInfoMapEntry, LinkerInviteMessageExtra, LinkerKickOutContent, LinkerLeaveContent, LinkerListChangeContent, ListUser as LinkerListUser, LinkerMediaChangeContent, LinkerMediaChangeOperator, LinkerMicIdxUpdateContent, LinkerMicIdxUpdateInfo, LinkerMode, LinkerMuteContent, LinkerRandomMatchContent, LinkerReplyContent, LinkerReplyContent_ApplierMicIdxInfoMapEntry, LinkerReplyContent_RtcExtInfoMapEntry, LinkerSetting, LinkerSysKickOutContent, LinkerUpdateUserContent, LinkerUpdateUserContent_UpdateInfoEntry, LinkerUserType, LinkerWaitingListChangeContent, LinkmicApplierSortSetting, LinkmicAudienceApplyGuide, LinkmicAudienceInviteGroupChatMemberGuide, LinkmicDisplayText, LinkmicDisplayTextPieces, LinkmicGiftExpressionStrategy, LinkmicInfo, LinkmicMultiLiveEnum, LinkmicPlayType, LinkmicReplyType, LinkmicShareRevenueSetting, LinkmicShareRevenueSettingStruct, LinkmicStatus, LinkmicUserInfo, LinkmicUserSettingDisableVideoLinkmic, LinkmicUserSettingLayout, LinkmicUserSettingMultiGuestApplyAutoApprove, LinkmicUserSettingShowAction, LinkmicUserStatus, LinkmicUserToastContent, ListChangeBizContent, ListChangeBizContent_AbInfosEntry, ListChangeBizContent_GuestUserInfosEntry, ListChangeBizContent_UserInfosEntry, LiveEventInfo, LiveEventInfoEventPayMethod, LiveEventInfo_WalletPkgDictEntry, LiveFlashSaleInfo, LiveMessageID, LiveMessageSEI, LivePermissionInfo, LiveStreamGoal, LiveStreamGoalContributor, LiveStreamGoalIndicator, LiveStreamSubGoal, LiveStreamSubGoalGift, LokiExtraContent, LynxCrossScreenEffectInfo, LynxGiftExtra, MatchGameplayOption, MatchInfo, MatchInfoMultiplierType, MatchInvitePanelConfig, MatchOpeningAnimationConfig, MatchPunishEffectInfo, MatchPunishEffectInfo_EffectToEffectStructMapEntry, MatchPunishEffectInfo_UserToEffectMapEntry, MatchPunishExtraInfo, MatchThemeDisplayResource, MatchTitleBarConfig, MatchTitleBarDisplayRule, MatchTitleBarTrigger, MediaState, MemberMessageAction, Text as MessageCommonText, MessageDisplayInfo, MessageDisplayStyle, MessageEntity, FlashSaleEnhancementInfo$1 as MessageFlashSaleEnhancementInfo, MessageRedEnvelopInfo, SponsorshipInfo as MessageSponsorshipInfo, MessageType, UserInfo as MessageUserInfo, MicIdxOperation, MicPositionData, MigrationDetails, AnchorInfo as ModelAnchorInfo, AuthenticationInfo$1 as ModelAuthenticationInfo, MouseHotKey, MsgFilter, MsgMeta, MultiGuestBizLayoutExtra, MultiGuestBizSpotExtra, MultiGuestLayoutExtra, MultiGuestLayoutNonSeiExtra, MultiGuestOutsideRoomInviteSource, MultiGuestSpotExtra, MultiGuestSpotNonSeiExtra, MultiLiveAnchorPanelSettings, MultiLiveContent, MultiLiveUpdateUserSettingContent, MusicGiftInfo, MuteStatus, NetworkState, NotifyHighlightContent, NotifyHighlightInfo, NumberConfig, OecLiveShoppingMessageV2, OecLiveShoppingMessageV2_ActionsEntry, Tag as OecMsgTag, UserInfo$1 as OecMsgUserInfo, OfflineGameInfo, OffliveInviteInfo, OldSubscribeStatus, OnlineUserState, OpType, OperationInfo, OperationState, OptPairInfo, OptPairStatus, OwnRoom, P2PGroupChangeContent, PaddingInfo, PaidEventPreview, PartnershipDropsUpdateMessageChangeMode, PartnershipGameOfflineMessageOfflineGameInfoOfflineType, PatternRef, PatternRef_KeyGroupsEntry, PerceptionDialogIconType, PerceptionDialogInfo, PerceptionFeedbackOption, PerceptionSheetInfo, PermitApplyContent, PermitBizContent, PermitJoinGroupBizContent, PermitJoinGroupContent, PinCardType, PinMessageActionType, PlaceholderInfo, PlayScene, PlayUserTag, PlaybookBizExtra, PlaybookBizExtra_CustomAtomicCapabilitiesEntry, Player, PollAppealStatus, PollBasicInfo, PollEndContent, PollEndType, PollKind, PollOptionInfo, PollStartContent, PollTemplateStatus, PollUpdateVotesContent, PopCardInfo, PopProduct, PopUpInfo, PopupWindowInfo, PortraitInfo, PortraitTag, PosIdentity, PosIdentityExtra, PosIdentityType, Position, PotionCardInfo, PrefabBundle, PreviewPeriod, PriceHideInfo, PriceItem, PrivilegeLogExtra, ProductAtmosphereTag, ProductItem, ProductSnapShot, ProfileCardPanel, ProfileContent, ProfileExtra, ProfileExtraGameInteraction, ProfileExtraGameInteractionExternal, ProfileExtraGameInteractionStorage, ProfileExtraGameTricks, ProfileExtraGameTricksExternal, ProfileExtraGameTricksStorage, ProfitRankType, Progress, ProjectionConfig, PromotionInfo, ProtoMessageFetchResult, ProtoMessageFetchResult_RouteParamsEntry, PublicAreaCommon, PublicAreaMessageCommon, PublicAreaMessageCommonCreatorSuccessInfoTopicDisplayLocation, PublicAreaMessageCommonPortraitInfoUserMetricsUserMetricsType, PunishEventInfo, PunishTypeId, PushHeader, Question, QuickCohostInviteeUserInfo, RTCBitRateMap, RTCEngineConfig, RTCExtraInfo, RTCInfoExtra, RTCLiveVideoParam, RTCMixBase, RTCOther, RTCVideoParam, RandomGiftBubble, RandomGiftPanelBanner, RandomMatchContent, RandomMatchContentUserInfo, RankAnimationInfo, RankListTabInfo, RankTabInfo, RankTextMessageRankTestMessageScene, RankUpdate, RankUserEnigmaInfo, ReceiverRestriction, RecommendComment, RecommendedPlaybookInfo, RecommendedPlaybookInfo_PlaybookBizExtrasEntry, RefreshLiveBagInfo, ReplyBizContent, ReplyInviteContent, ReplyStatus, ReqItem, ReserveInfo, ReserveReplyStatus, ResolutionDemandPayload, ResourceModel, RewardCondition, RewardPeriodConfig, RightLabel, RivalExtra, RivalExtraInfo, RivalExtraInfoAnchorLayer, RivalExtraInfoBattleInfoBattleInfoType, RivalExtraInfoInviteBlockReason, RivalExtraInfoTextType, RivalGuestExtra, RivalGuestExtras, RivalsGameTag, RoomBasedGiftData, RoomBasedGiftData_RoomBasedGiftsEntry, RoomBasedGifts, RoomNotifyMessageEventTracking, RoomNotifyMessageExtra, RtcConnectionState, SOVBriefInfo, SOVLockInfoType, SOVMaskInfo, SOVMaskInfoType, SOVPinCardInfo, SOVStatus, Scene, SceneRestriction, SchemeInfo, ScoreType, ScrollElement, SecondDegreeRelationContent, SecondaryEffectInfo, SellingPoint, SeparatorConfig, SettleInfo, ShopBrandLogo, ShopEntranceInfo, ShopLabelImage, ShowResult, ShowType, ShowcaseEntranceInfo, SimilarInterestContent, SmokeCardInfo, SocialGameLayoutExtra, SocialGameLayoutNonSeiExtra, SocialGameUserSpotExtra, SocialGameUserSpotNonSeiExtra, SoundWareEffectExtra, SourceType, SpecialEffectCardInfo, SpecialEffectNotice, SpecifiedDisplayText, SpotInfo, StateType, StoreIdentityLabel, StoreLabel, StoreOfficialLabel, StretchableBackgroundImage, StringBadge, SubGoalContribution, SubGoalPinCard, SubGoalPinInfo, SubOnlyVideosBriefInfo, SubPinCard, SubPinCardExtra, SubPinCardText, SubPinCardTextTextType, SubPinCardTextTextType_2, SubPinEventMessageActionType, SubSplitPeriod, SubSplitStatus, SubscribeBadge, SubscribeInfo, SubscribeType, SubscribingStatus, SubtitleSettings, SupportedActionsWrapper, SystemMessage, Tag$1 as Tag, TagItem, TagItem_EventTrackingFieldsEntry, TagType, TagV2, TagV2TagClassification, TaskPeriodConfig, TeamInfo, TeamMatchCampaign, TeamRankBonusTime, TeamUser, TeamUsersInfo, TemplateContent, TemplateEffectExtra, Text$1 as Text, TextBadge, TextEffect, TextFormat, TextPiece, TextPieceGift, TextPieceHeart, TextPieceImage, TextPiecePatternRef, TextPieceUser, TextType, TimeInfo, TimerDetail, TimerDetailAntidirtStatus, TimerDetailAuditInfo, TimerDetailAuditStatus, TimerDetailAuditTaskType, TimerStatus, Title, TitleBarDisplayResource, TitleData, Top2CardInfo, Top3CardInfo, TopHostInfo, Topic, TopicActionType, Topic_EventTrackingFieldsEntry, TraceInfo, TransitionConfig, TriggerCondition, UGGiftStructInfo, UnionAnimationInfo, UnionAnimationInfoType, UrlDataStruct, UseCriticalStrikeCard, UseExtraTimeCard, UsePotionCard, UseSmokeCard, UseSpecialEffectCard, UseTop2Card, UseTop3Card, UseVaultGloveCard, UseWaveCard, User, UserArmiesWrapper, UserAttr, UserAttr_AdminPermissionsEntry, UserBadge, UserBadge_IconsEntry, UserCountdownInfo, UserEcommerceEntranceCreatorType, UserEcommerceEntranceEntranceType, UserEcommerceEntranceSellingPointLiveSellingPointType, UserEcommerceEntranceShopEntranceInfoStoreLabelShopIdentityLabelType, UserEcommerceEntranceShopEntranceInfoStoreLabelStoreBrandLabelType, UserEcommerceEntranceViewVersion, UserEmoteUploadSource, UserFanTicket, UserFansClubFansClubDataUserFansClubStatus, UserGroup, UserHonor, UserIdentity, UserInfo$2 as UserInfo, UserInteractionInfo, UserMetrics, UserModelPredictionData, UserModelPredictionData_ModelPredictionDataEntry, UserPlayInfo, UserSubscribeInfoPayStatus, UserSuggestionInfo, ValidRanks, VaultGloveCardInfo, VerticalPaddingRule, VideoResource, ViewerPickAnchorParam, ViewerPicksHeaderImage, ViewerPicksInfo, VirtualWaitingUser, VoteUser, Voucher, VoucherItem, WalletPackage, WaveAlgorithmData, WaveCardInfo, WebcastAccessControlMessage, WebcastAccessRecallMessage, WebcastBarrageMessage, WebcastBoostCardMessage, WebcastBottomMessage, WebcastCapsuleMessage, WebcastCaptionMessage, WebcastChatMessage, WebcastControlMessage, WebcastEmoteChatMessage, WebcastEnvelopeMessage, WebcastGameRankNotifyMessage, WebcastGiftBroadcastMessage, WebcastGiftDynamicRestrictionMessage, WebcastGiftMessage, WebcastGiftPanelUpdateMessage, WebcastGiftPromptMessage, WebcastGoalUpdateMessage, WebcastGuideMessage, WebcastHourlyRankRewardMessage, WebcastImDeleteMessage, WebcastImEnterRoomMessage, WebcastInRoomBannerMessage, WebcastLikeMessage, WebcastLinkLayerMessage, WebcastLinkMessage, WebcastLinkMicArmies, WebcastLinkMicArmies_ArmiesEntry, WebcastLinkMicBattle, WebcastLinkMicBattleItemCard, WebcastLinkMicBattlePunishFinish, WebcastLinkMicBattle_AnchorMatchSettingsEntry, WebcastLinkMicBattle_BattleComboV2Entry, WebcastLinkMicBattle_BattleResultEntry, WebcastLinkMicBattle_LeagueInfoMapEntry, WebcastLinkMicBattle_LeagueScoreInfoMapEntry, WebcastLinkMicBattle_TrackingExtraEntry, WebcastLinkMicFanTicketMethod, WebcastLinkMicLayoutStateMessage, WebcastLinkMicMethod, WebcastLinkStateMessage, WebcastLinkmicBattleTaskMessage, WebcastLiveGameIntroMessage, WebcastLiveIntroMessage, WebcastMarqueeAnnouncementMessage, WebcastMemberMessage, WebcastMemberMessage_AdminPermissionsEntry, WebcastMsgDetectMessage, WebcastNoticeMessage, WebcastOecLiveShoppingMessage, WebcastPartnershipDropsUpdateMessage, WebcastPartnershipGameOfflineMessage, WebcastPartnershipPunishMessage, WebcastPerceptionMessage, WebcastPollMessage, WebcastPushFrame, WebcastQuestionNewMessage, WebcastRankTextMessage, WebcastRankUpdateMessage, WebcastRoomMessage, WebcastRoomNotifyMessage, WebcastRoomPinMessage, WebcastRoomUserSeqMessage, WebcastRoomVerifyMessage, WebcastSocialMessage, WebcastSpeakerMessage, WebcastSubNotifyMessage, WebcastSubPinEventMessage, WebcastSystemMessage, WebcastToastMessage, WebcastUnauthorizedMemberMessage, WebcastViewerPicksUpdateMessage };