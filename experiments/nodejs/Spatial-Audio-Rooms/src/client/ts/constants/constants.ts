export const MISC: any = {};
MISC.CLOSE_ENOUGH_M = 0.005;

export const AVATAR: any = {};
AVATAR.MIN_VOLUME_DB = -96;
AVATAR.MAX_VOLUME_DB = 0;
AVATAR.MAX_VOLUME_DB_AVATAR_RADIUS_MULTIPLIER = 1.8;
AVATAR.RADIUS_M = 0.20;
AVATAR.AVATAR_HOVER_HIGHLIGHT_RADIUS_ADDITION_M = 0.1;
AVATAR.DIRECTION_CLOUD_RADIUS_MULTIPLIER = 2;
AVATAR.STROKE_WIDTH_PX = 5.0;
AVATAR.TUTORIAL_RADIUS_M = AVATAR.RADIUS_M + 0.8;
AVATAR.AVATAR_STROKE_HEX_MUTED = "#FF0000";
AVATAR.AVATAR_STROKE_HEX_UNMUTED = "#FFFFFF";
AVATAR.AVATAR_TUTORIAL_GLOW_HEX = "#007AFF";
AVATAR.AVATAR_LABEL_FONT = '14px Graphik';

export const CONTROLS: any = {};
CONTROLS.M_KEY_CODE = "KeyM";
CONTROLS.SPACE_KEY_CODE = "Space";
CONTROLS.RIGHT_CLICK_ROTATION_SENSITIVITY = 0.5;
CONTROLS.MOUSE_WHEEL_ZOOM_FACTOR = 0.0025;

export const ROOM: any = {};
ROOM.TABLE_STROKE_WIDTH_PX = 2.0;
ROOM.TABLE_STROKE_HEX = "#FFFFFF";
ROOM.SEAT_STROKE_WIDTH_PX = 3.0;
ROOM.SEAT_RADIUS_M = AVATAR.RADIUS_M - 0.05;
ROOM.SEAT_COLOR_HEX = "#111111";
ROOM.SEAT_STROKE_HEX = "#FFFFFF";
ROOM.NUM_SEATS_IN_EMPTY_ROOM = 4;
ROOM.ROOM_LABEL_FONT = '16px Graphik-Semibold';
ROOM.ROOM_WITH_IMAGE_LABEL_COLOR = '#FFFFFF';

export const UI: any = {};
UI.TUTORIAL_TEXT_FONT = '18px Graphik-Semibold';
UI.TUTORIAL_TEXT_COLOR = '#FFFFFF';
UI.TUTORIAL_TEXT_STROKE_COLOR = '#00000022';
UI.TUTORIAL_TEXT_STROKE_WIDTH_PX = 1;
UI.MY_AVATAR_Y_SCREEN_CENTER_OFFSET_RATIO = 0.35;

export const PHYSICS: any = {};
PHYSICS.PHYSICS_TICKRATE_MS = 16;
PHYSICS.MIN_PX_PER_M = 10;
PHYSICS.MAX_PX_PER_M = 1000;
PHYSICS.SMOOTH_ZOOM_DURATION_NORMAL_MS = 225;
PHYSICS.SMOOTH_ZOOM_DURATION_SWITCH_ROOMS_MS = 1000;
PHYSICS.POSITION_TWEENING_DURATION_MS = 1500;
