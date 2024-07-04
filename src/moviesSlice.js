import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: [
        {
            title: "mulan",
            imageUrl: "https://s3-alpha-sig.figma.com/img/9516/5f66/20d05404c88db613b35de151d415cd32?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EO3xUr3QiB4YgbVcp6IHkNcgXVwGhhHX4UJD~jM3ubg-odS8Aw8XhgsmAAJhuB8fy76d1qQMx3Nsiiq-ONEHpAjk6XFJ2LiN8akDt0M8OQQdsPTj4fJ-7~LlOkLl79sJeq-~9S1H1Q3aUAsivNLt9iaVR~jWGB84qHiH5X9zR0QY0KCe50jDd5fM8P-m8KFBZ5M8qBnxiGqgmF38W4WQDCZc~lXvYQdmmx6ymkh3NrPL7OM~fC0u8AHnp~pv6zV7RgW~KCU0ntsfNV7PjEJeu-pPdVLjxcGNgffGNm4yYps2WxjQarfkK86XY1THYIcBV~28lnPSNf-nkl5kjBSBpA__",
            subtitle: "2022",
            tags: ["asfdds", "asdf"],
            rating: 7.5,
            voteCount: 23,
        }
    ],
    reducers: {
        setMovies: ({state, payload}) => {
            state.value = payload.value;
        },
    },
});

export const { setMovies } = moviesSlice.actions;
export const selectMovies = state => state.movies;

export default moviesSlice.reducer