import {
  iconNames,
  type IconName,
} from "@/registry/default/minim-icons/minim-icons"

export const iconMetadata: Record<
  IconName,
  { label: string; component: string }
> = {
  "minim-1": { label: "Minim 1", component: "Minim1Icon" },
  "minim-2": { label: "Minim 2", component: "Minim2Icon" },
  "minim-3": { label: "Minim 3", component: "Minim3Icon" },
  "minim-4": { label: "Minim 4", component: "Minim4Icon" },
  "minim-5": { label: "Minim 5", component: "Minim5Icon" },
  "minim-6": { label: "Minim 6", component: "Minim6Icon" },
  library: { label: "Library", component: "LibraryIcon" },
  catalog: { label: "Catalog", component: "CatalogIcon" },
  search: { label: "Search", component: "SearchIcon" },
  explore: { label: "Explore", component: "ExploreIcon" },
  "explore-2": { label: "Explore 2", component: "Explore2Icon" },
  notification: { label: "Notification", component: "NotificationIcon" },
  profile: { label: "Profile", component: "ProfileIcon" },
  "profile-2": { label: "Profile 2", component: "Profile2Icon" },
  settings: { label: "Settings", component: "SettingsIcon" },
  "settings-2": { label: "Settings 2", component: "Settings2Icon" },
  left: { label: "Left", component: "LeftIcon" },
  right: { label: "Right", component: "RightIcon" },
  up: { label: "Up", component: "UpIcon" },
  down: { label: "Down", component: "DownIcon" },
}

export function isIconName(value: string): value is IconName {
  return iconNames.includes(value as IconName)
}
