import axios from "axios"

/**
 * return format:
 * {
 *   tracks: [
 *     { name: "", time: "" },
 *     ...
 *   ],
 *   next: "https://..."
 * }
 * */
export async function getRecentlyPlayedTracks(token: string, limit?: number) {
  const lmt = limit ?? 50
  const url =
    "https://api.spotify.com/v1/me/player/recently-played?" +
    new URLSearchParams({
      limit: `${lmt}`,
    })

  try {
    const response = await axios(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.statusText != "OK") throw response

    const tracksArray = response.data.items.map((item: any, index: number) => {
      return { index: index, name: item.track.name, time: item.played_at }
    })

    return {
      tracks: tracksArray,
      next: response.data.next,
    }
  } catch (error) {
    return { error: error }
  }
}
