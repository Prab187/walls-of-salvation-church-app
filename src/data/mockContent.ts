export type EventItem = {
  id: string;
  titleEn: string;
  titleTa: string;
  date: string;
  location: string;
};

export type SermonItem = {
  id: string;
  titleEn: string;
  titleTa: string;
  speaker: string;
  date: string;
  durationMinutes: number;
  youtubeUrl: string;
};

export const upcomingEvents: EventItem[] = [
  {
    id: 'evt-1',
    titleEn: 'Tamil New Year Celebration',
    titleTa: 'தமிழ் புத்தாண்டு விழா',
    date: '2026-04-14',
    location: 'Main Sanctuary',
  },
  {
    id: 'evt-2',
    titleEn: 'Easter Sunday Service',
    titleTa: 'உயிர்த்த ஞாயிறு ஆராதனை',
    date: '2026-04-05',
    location: 'Main Sanctuary',
  },
  {
    id: 'evt-3',
    titleEn: 'Bible Conference',
    titleTa: 'வேத ஆராய்ச்சி மாநாடு',
    date: '2026-05-16',
    location: 'Fellowship Hall',
  },
];

// WOS Official YouTube channel — used as the fallback link when a sermon has no
// specific video yet. Real per-sermon video URLs should replace these once a
// CMS/API exists (see README "Known gap").
export const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@wallsofsalvationchurchofficial';

export const latestSermons: SermonItem[] = [
  {
    id: 'srm-1',
    titleEn: 'Walking in Faith',
    titleTa: 'விசுவாசத்தில் நடத்தல்',
    speaker: 'Apostle Gururaj Iyengar',
    date: '2026-09-20',
    durationMinutes: 42,
    youtubeUrl: YOUTUBE_CHANNEL_URL,
  },
  {
    id: 'srm-2',
    titleEn: 'The Good Shepherd',
    titleTa: 'நல்ல மேய்ப்பன்',
    speaker: 'Apostle Gururaj Iyengar',
    date: '2026-09-13',
    durationMinutes: 38,
    youtubeUrl: YOUTUBE_CHANNEL_URL,
  },
  {
    id: 'srm-3',
    titleEn: 'Grace Abounding',
    titleTa: 'கிருபை பெருகுதல்',
    speaker: 'Guest Speaker',
    date: '2026-09-06',
    durationMinutes: 45,
    youtubeUrl: YOUTUBE_CHANNEL_URL,
  },
];

export const serviceTimes = {
  tamil: 'Sundays, 9:00 AM',
  english: 'Sundays, 11:00 AM',
};
