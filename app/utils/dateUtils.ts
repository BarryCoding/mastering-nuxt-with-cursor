import type { Chat } from '~/types'

/**
 * Checks if a given date is within the last `days` days from now.
 * @param date - The date to check.
 * @param days - The number of days to look back.
 * @returns True if the date is within the last `days` days, false otherwise.
 */
function isWithinDays(date: Date, days: number): boolean {
  const now = new Date()
  // Calculate the timestamp for the earliest date within the range
  const timeAgo = new Date(now.getTime() - days * 24 * 60 * 60 * 1000)
  // If the date is after or equal to the calculated timeAgo, it's within the range
  return date >= timeAgo
}

/**
 * Filters an array of chats based on their updatedAt date, returning only those
 * that fall within a specified date range.
 *
 * @param chats - Array of Chat objects to filter.
 * @param startDays - The lower bound (in days ago) for the date range.
 * @param endDays - (Optional) The upper bound (in days ago) for the date range.
 *   - If endDays is undefined, returns chats older than startDays days.
 *   - If endDays is defined, returns chats updated between endDays and startDays days ago.
 * @returns Filtered and sorted array of Chat objects.
 */
export function filterChatsByDateRange(
  chats: Chat[],
  startDays: number,
  endDays?: number,
) {
  return (
    chats
      .filter(chat => {
        const date = new Date(chat.updatedAt)
        if (endDays === undefined) {
          // If endDays is not provided, include chats older than startDays days
          // (i.e., not within the last startDays days)
          return !isWithinDays(date, startDays)
        }
        // If endDays is provided, include chats updated between endDays and startDays days ago
        // - Not within the last startDays days (older than startDays)
        // - But within the last endDays days (not older than endDays)
        return !isWithinDays(date, startDays) && isWithinDays(date, endDays)
      })
      // Sort the filtered chats by updatedAt in descending order (most recent first)
      .sort(
        (a, b) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
      )
  )
}
