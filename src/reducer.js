export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  token: null
  // token: 'BQBo5uP9kxXhn_uAA1nIydS7n_hZaxSO4kUX6TVKDdfDJLpCYM…bToylWfpEAIPPNWI1-fEXgfs716WbB8CpsUu-zgFBihRo7hHk'
}

const reducer = (state, action) => {
  console.info('dispatch action', action)
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      }
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      }
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly
      }
    default:
      return state
  }
}

export default reducer
