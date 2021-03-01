import { format, formatDistance, formatRelative, subDays } from "date-fns";

const date = formatRelative(subDays(new Date(), 0), new Date());

export const announcements = [
  {
    id: 1,
    title: "Server Downtime",
    body:
      "lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut",
    status: "Published",
    createdBy: "John Dela Cruz",
    date,
    modifiedBy: "John Dela Cruz",
    dateModified: date,
    type: "General Announcement",
  },
  {
    id: 2,
    title: "New Feature Added",
    body:
      "lorem ipsum dolor sit amet consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt ut",
    status: "Published",
    createdBy: "John Dela Cruz",
    date,
    modifiedBy: "John Dela Cruz",
    dateModified: date,
    type: "General Announcement",
  },
];
