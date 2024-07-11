import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

export function TimeString(dateString: string): string {
  // Parse the date string into a Date object
  const date = new Date(dateString);

  // Get current time in milliseconds
  const now = Date.now();

  // Calculate the difference in milliseconds
  const difference = now - date.getTime();

  // Define thresholds and units for relative time calculation
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = month * 12;

  // Determine the appropriate unit based on the difference
  if (difference < second) {
    return 'Just now'; // Handle cases less than a second
  } else if (difference < minute) {
    return `${Math.floor(difference / second)} seconds ago`;
  } else if (difference < hour) {
    return `${Math.floor(difference / minute)} minutes ago`;
  } else if (difference < day) {
    return `${Math.floor(difference / hour)} hours ago`;
  } else if (difference < week) {
    return `${Math.floor(difference / day)} days ago`;
  } else if (difference < month) {
    return `${Math.floor(difference / week)} weeks ago`;
  } else if (difference < year) {
    return `${Math.floor(difference / month)} months ago`;
  } else {
    return `${Math.floor(difference / year)} years ago`;
  }
}

export const checkIsLiked = (likeList: string[], userId: string) => {
  return likeList.includes(userId);
};

export function formatDateString(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString("en-US", options);

  const time = date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });

  return `${formattedDate} at ${time}`;
}
