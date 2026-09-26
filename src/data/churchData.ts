// Content sourced from the church's live site (brentwoodtamilchurch.com) via
// screenshots shared in chat, plus the BRD. Replace with CMS-managed content
// once a backend exists — see README "Known gap" section.

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  photo: any;
};

export const teamMembers: TeamMember[] = [
  {
    id: 'gururaj',
    name: 'Gururaj Iyengar',
    role: 'Founder Pastor | Chairman Trustee',
    photo: require('../../assets/church/team-gururaj.jpg'),
  },
  {
    id: 'liviu',
    name: 'Liviu Cristescu',
    role: 'Evangelist | Trustee',
    photo: require('../../assets/church/team-liviu.jpg'),
  },
  {
    id: 'obinna',
    name: 'Obinna Madunagu',
    role: 'Senior Pastor | Trustee',
    photo: require('../../assets/church/team-obinna.jpg'),
  },
];

export type Ministry = {
  id: string;
  nameKey: 'ministriesMensName' | 'ministriesWorshipName' | 'ministriesWomensName' | 'ministriesYouthName' | 'ministriesSundaySchoolName' | 'ministriesAllNightPrayerName';
  scheduleKey: 'ministriesMensSchedule' | 'ministriesWorshipSchedule' | 'ministriesWomensSchedule' | 'ministriesYouthSchedule' | 'ministriesSundaySchoolSchedule' | 'ministriesAllNightPrayerSchedule';
  locationKey: 'ministriesMensLocation' | 'ministriesWorshipLocation' | 'ministriesWomensLocation' | 'ministriesYouthLocation' | 'ministriesSundaySchoolLocation' | 'ministriesAllNightPrayerLocation';
  image: any;
};

export const ministries: Ministry[] = [
  {
    id: 'mens',
    nameKey: 'ministriesMensName',
    scheduleKey: 'ministriesMensSchedule',
    locationKey: 'ministriesMensLocation',
    image: require('../../assets/church/ministry-mens.jpg'),
  },
  {
    id: 'worship',
    nameKey: 'ministriesWorshipName',
    scheduleKey: 'ministriesWorshipSchedule',
    locationKey: 'ministriesWorshipLocation',
    image: require('../../assets/church/ministry-worship.jpg'),
  },
  {
    id: 'womens',
    nameKey: 'ministriesWomensName',
    scheduleKey: 'ministriesWomensSchedule',
    locationKey: 'ministriesWomensLocation',
    image: require('../../assets/church/ministry-womens.jpg'),
  },
  {
    id: 'youth',
    nameKey: 'ministriesYouthName',
    scheduleKey: 'ministriesYouthSchedule',
    locationKey: 'ministriesYouthLocation',
    image: require('../../assets/church/ministry-youth.jpg'),
  },
  {
    id: 'sunday-school',
    nameKey: 'ministriesSundaySchoolName',
    scheduleKey: 'ministriesSundaySchoolSchedule',
    locationKey: 'ministriesSundaySchoolLocation',
    image: require('../../assets/church/ministry-sunday-school.jpg'),
  },
  {
    id: 'all-night-prayer',
    nameKey: 'ministriesAllNightPrayerName',
    scheduleKey: 'ministriesAllNightPrayerSchedule',
    locationKey: 'ministriesAllNightPrayerLocation',
    image: null,
  },
];

export const contactInfo = {
  mobile: '+44 7340322921',
  telephone: '+44 203 9944444',
  emailPrayer: 'prayer@wallsofsalvation.uk',
  emailInfo: 'info@wallsofsalvation.uk',
  addressName: 'Brentwood Tamil Church',
  addressLines: ['91 Kings Road, Brentwood', 'Essex — CM14 4DR'],
};

export const fundraisingCampaign = {
  raised: 101,
  goal: 500000,
  currency: '£',
  presetAmounts: [50, 75, 100, 250, 500, 1000],
};

export type GalleryAlbum = {
  id: string;
  titleEn: string;
  titleTa: string;
  date: string;
};

export const galleryAlbums: GalleryAlbum[] = [
  { id: 'wedding-jan-ruth', titleEn: 'John and Ruth Marriage', titleTa: 'ஜான் மற்றும் ரூத் திருமணம்', date: '2024-01-27' },
  { id: 'rehoboth-family-camp', titleEn: 'Rehoboth Family Camp', titleTa: 'ரெகொபோத் குடும்ப முகாம்', date: '2023-10-01' },
];
