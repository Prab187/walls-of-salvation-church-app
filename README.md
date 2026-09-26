# Walls of Salvation Church — Mobile App (MVP)

Bilingual (English/Tamil) mobile app for Walls of Salvation Church, Brentwood.
Built from `BRD-WOSC-UNIFIED-2024-001` after the client confirmed they need a
**native mobile app**, superseding the BRD's original website-only scope (the
BRD's own Out-of-Scope section excludes "separate mobile app development" —
flag this discrepancy back to the church board in writing before final sign-off).

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Expo (React Native) + TypeScript** | One codebase → iOS + Android. Chosen over Flutter because this container only has Node.js available (no Flutter/Dart SDK), so Expo is what could actually be installed, built, and visually verified here. |
| Navigation | **React Navigation** (bottom tabs + nested native stack) | Standard, well-documented pattern; see `AGENTS.md` for the exact structure. |
| Localization | Custom lightweight `LanguageContext` (`src/i18n/`) | Full English/Tamil dictionaries, persisted via `AsyncStorage`. No heavy i18n library needed for this scope. |
| Persistence (local) | `@react-native-async-storage/async-storage` | Stores the selected language on-device. |
| Giving | Deep link to a third-party giving platform (placeholder: Tithe.ly) | Avoids building custom payment processing / PCI compliance on this budget — see BRD §8 budget constraints. |
| Live worship sync (VerseVIEW) | **Stubbed, not implemented** | See "Known gap" below — this is the single biggest open question from the BRD. |

## What's implemented (MVP)

- Bottom-tab navigation: Home, Events, Sermons, Giving, More
- Home: real logo, real tagline ("Where Supernatural Is Natural"), service times, "Join With Us" / "First Time?" CTAs, live-service placeholder card
- Newcomer screen ("For Newcomers" / புதியவர்களுக்கு)
- About Us: real pastor testimony (Apostle Gururaj Iyengar's conversion story) + real photo
- Our People: real team grid (Gururaj Iyengar, Liviu Cristescu, Obinna Madunagu) with real photos
- Ministries: 6 real recurring ministries (Men's Fellowship, Night of Worship, Women's Fellowship, Youth Service, Sunday School, All Night Prayer) with real flyer images, schedules, and locations
- Gallery: real event albums (structure only — thumbnails are placeholders pending exported photo assets)
- Get In Touch: real address (91 Kings Road, Brentwood, Essex CM14 4DR), real phone/email, opening days note, working contact form
- Giving: real "Your Tithes & Offerings" copy + link-out to a giving partner
- Fundraising: real campaign ("To Open Closed Churches in the UK", Isaiah 61:4) with a live progress bar and preset/custom donation amounts
- Events & Calendar, Sermons & Resources (still mock data — no CMS/API yet)
- Prayer Requests (working form, local state only), Settings
- **Full English ⇄ Tamil toggle** — every screen and the tab bar itself re-render in the selected language; the toggle persists across app restarts
- Real photo/logo/flyer assets in `assets/church/` were cropped from screenshots of the church's live site (brentwoodtamilchurch.com), shared in chat since this environment cannot fetch that URL directly (network policy) — replace with originals from the church when available

This maps to BRD sections FR-1 through FR-10 (now backed by real content instead of placeholders), and NFR-2/NFR-3 (multilingual + accessibility groundwork). It intentionally does **not** attempt FR-11 through FR-14 (VerseVIEW real-time presentation sync, device sync, offline caching, live polling) — see below.

## Known gap: VerseVIEW integration

The BRD's FR-11–FR-14 describe deep real-time integration with a "VerseVIEW"
worship presentation platform (live slide sync, cross-device continuity,
offline caching, in-service polling). This has **not** been built because:

1. The BRD's own Appendix B ("API documentation for VerseVIEW integration")
   is listed as *to be written* — there is no confirmed API to integrate with.
2. The BRD's Out-of-Scope section explicitly excludes "custom VerseVIEW
   application development," which is what FR-11–14 actually describe.

Do not scope or price this work until the church confirms what VerseVIEW
actually is and whether it exposes a usable API. Treat it as Phase 2.

## Running locally

```bash
npm install
npx expo start          # then press i / a / w for iOS / Android / Web
npx tsc --noEmit         # typecheck
npx expo lint            # lint
```

Verified in this environment via `npx expo export --platform web` (bundles
cleanly) and a headless browser walkthrough of every tab and the language
toggle. Native iOS/Android builds have not been produced (no Xcode/Android
Studio/EAS credentials in this environment) — do that via `eas build` before
shipping to app stores.

## Project structure

```
assets/church/   Real photos/logo/flyers cropped from the live site's screenshots
src/
  components/     Shared UI (Card, PrimaryButton, ScreenHeader)
  data/           mockContent.ts (events, sermons — still placeholder) and
                  churchData.ts (real team/ministries/contact/fundraising data)
  i18n/           LanguageContext + English/Tamil dictionaries
  navigation/     React Navigation setup + param types
  screens/        One file per screen
  theme/          Colors, spacing, radius tokens (dark hero + maroon/gold to match branding)
```
