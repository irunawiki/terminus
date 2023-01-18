import { createSlice } from '@reduxjs/toolkit'
import { PLAYER_CONNECT } from '../actions/player';

export const playerSlice = createSlice({
    name: "playerSlice",
    initialState: {
        playerId: 0,
        playerState: PLAYER_CONNECT,
        username: "",
        fighters: [],
        supports: [],
        activeFighter: null,
        isAttacking: false,
    },

    reducers: {
        setPlayerState: (state, action) => {
            state.playerState = action.payload
        },

        updatePlayer: (state, action) => {
            state.playerState = action.payload.state ? action.payload.state : state.playerState;
            state.username = action.payload.username ? action.payload.username : state.username;
            state.playerId = action.payload.playerId ? action.payload.playerId : state.playerId;
            state.fighters = action.payload.fighters ? action.payload.fighters : state.fighters;
            state.supports = action.payload.supports ? action.payload.supports : state.supports;
            state.activeFighter = action.payload.activeFighter ? action.payload.activeFighter : state.activeFighter;
            state.isAttacking = action.payload.isAttacking;
        }

    }
    
})

export const { setPlayerState, updatePlayer } = playerSlice.actions

export default playerSlice.reducer