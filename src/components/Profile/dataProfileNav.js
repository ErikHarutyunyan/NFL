import { ProfileBadgesIcon, ProfileEventsIcon, ProfileInfoIcon, ProfileLogoutIcon, ProfilePassIcon, ProfilePaymentIcon, ProfilePodcastsIcon } from "../Icons/Icons";


export const links = [
  {
    id: Math.random(),
    text: "Personal info",
    url: "/profile",
    icon: <ProfileInfoIcon width={"24px"} fontSize={"14px"} />,
  },
  {
    id: Math.random(),
    text: "Badges",
    url: "/profile/badges",
    icon: <ProfileBadgesIcon width={"24px"} fontSize={"14px"} />,
  },
  {
    id: Math.random(),
    text: "Draft events",
    url: "/profile/draft-events",
    icon: <ProfileEventsIcon width={"24px"} fontSize={"14px"} />,
  },
  {
    id: Math.random(),
    text: "Podcasts",
    url: "/profile/podcasts",
    icon: <ProfilePodcastsIcon width={"24px"} fontSize={"14px"} />,
  },
  {
    id: Math.random(),
    text: "Payment history",
    url: "/profile/payment",
    icon: <ProfilePaymentIcon width={"24px"} fontSize={"14px"} />,
  },
  {
    id: Math.random(),
    text: "Password",
    url: "/profile/password",
    icon: <ProfilePassIcon width={"24px"} fontSize={"14px"} />,
  },
  {
    id: Math.random(),
    text: "Logout",
    url: "/profile/logout",
    icon: <ProfileLogoutIcon width={"24px"} fontSize={"14px"} />,
  },
];
