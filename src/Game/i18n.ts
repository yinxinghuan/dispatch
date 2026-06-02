// Lightweight 2-locale i18n. zh / en.
// - Voice + decorative titles stay English on purpose (user direction 2026-06-01).
// - UI hints + spoken-line subtitles + button labels translate.

type Locale = 'zh' | 'en';

const STORAGE_KEY = 'dispatch_locale';

function detectLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  try {
    const override = window.localStorage.getItem(STORAGE_KEY);
    if (override === 'zh' || override === 'en') return override;
  } catch {}
  const nav = (typeof navigator !== 'undefined' ? navigator.language : 'en') || 'en';
  return nav.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

const LOCALE: Locale = detectLocale();

const STRINGS: Record<Locale, Record<string, string>> = {
  en: {
    'hint.firstTap': '> press any line to play',
    'btn.onceMore': '> replay shift',

    'hotspot.cab':      "VM_01  cab driver",
    'hotspot.anon':     "VM_02  passerby",
    'hotspot.payphone': "VM_03  child, payphone",
    'hotspot.sgt':      "VM_04  Sgt. Walsh, 51st",
    'hotspot.supv':     "VM_05  Lt. Reeves, supv.",
    'hotspot.showtime': "[INCOMING] BAY 4471 LIVE",

    'sub.cab':      "I got a fare on Wells, won't get in. He's just standing there with his shoes in his hand.",
    'sub.anon':     "There's a man on Roosevelt, just crying. He's holding a phone but he's not talking into it.",
    'sub.payphone': "My dad is in the phone booth and he's been on the phone for an hour. The cord isn't plugged in.",
    'sub.sgt':      "Got a 10-91 on Lawndale. Wife's not breathing. Address is wrong — 4B has been vacant six weeks.",
    'sub.supv':     "Marcus, baby, this is Yolanda. Pick up. We got a call pinging from inside the building.",
  },
  zh: {
    'hint.firstTap': '> 点击任意一行播放',
    'btn.onceMore': '> 重新值班',

    'hotspot.cab':      "VM_01  出租车司机",
    'hotspot.anon':     "VM_02  路人",
    'hotspot.payphone': "VM_03  公用电话亭里的小孩",
    'hotspot.sgt':      "VM_04  51 分局 Walsh 警长",
    'hotspot.supv':     "VM_05  Reeves 上司",
    'hotspot.showtime': "[INCOMING] 4471 号台 LIVE",

    'sub.cab':      "Wells 街上一个客人不肯上车。他就站在那儿,鞋拿在手里。",
    'sub.anon':     "Roosevelt 街上有个男人在哭。拿着电话但没说话。",
    'sub.payphone': "我爸在公用电话亭里讲了一小时电话。电话线根本没插。",
    'sub.sgt':      "Lawndale 报了个 10-91。太太没呼吸了。地址错了 ——4B 已经空了六周。",
    'sub.supv':     "Marcus, 是 Yolanda。接电话。我们追到的呼叫来自大楼内部。",
  },
};

export function t(key: string): string {
  return STRINGS[LOCALE]?.[key] ?? STRINGS.en[key] ?? key;
}

export function getLocale(): Locale {
  return LOCALE;
}
