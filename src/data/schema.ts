export type CardSize = 'full' | 'half';

export interface BaseCard {
  id: string;
  size: CardSize;
  order: number;
}

export interface AnnouncementImageCardData extends BaseCard {
  type: 'announcement-image';
  content: {
    imageUrl: string;
    alt: string;
    waxSealLabel?: string;
  };
}

export interface AnnouncementTextCardData extends BaseCard {
  type: 'announcement-text';
  content: {
    title: string;
    content: string;
    date?: string;
  };
}

export interface ImageLinkCardData extends BaseCard {
  type: 'image-link';
  content: {
    title: string;
    imageUrl?: string;
    iconName?: 'instagram' | 'facebook' | 'line';
    linkUrl: string;
    showRibbon?: boolean;
    ribbonText?: string;
  };
}

export type MediaPlatform = 'youtube' | 'spotify' | 'podcast';

export interface MediaEmbedCardData extends BaseCard {
  type: 'media-embed';
  content: {
    embedUrl: string;
    platform: MediaPlatform;
  };
}

export type SocialPlatform = 'line' | 'facebook' | 'instagram';

export interface SocialLinksCardData extends BaseCard {
  type: 'social-links';
  content: {
    links: Array<{
      platform: SocialPlatform;
      url: string;
    }>;
  };
}

export interface MapInfoCardData extends BaseCard {
  type: 'map-info';
  content: {
    title: string;
    address: string;
    hours: string[];
    googleMapEmbedUrl: string;
    navigationUrl: string;
  };
}

export type CardData =
  | AnnouncementImageCardData
  | AnnouncementTextCardData
  | ImageLinkCardData
  | MediaEmbedCardData
  | SocialLinksCardData
  | MapInfoCardData;

export interface RuneData {
  id: string;
  symbol: string;
  name: string;
  meaning: string;
}
