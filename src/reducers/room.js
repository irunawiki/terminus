import { createSlice } from '@reduxjs/toolkit'
import { ROOM_NOT_READY } from '../actions/room'

export const roomSlice = createSlice({
    name: "roomSlice",
    initialState: {
        roomId: 0,
        roomState: ROOM_NOT_READY,
        players: [],
        messages: [],
    },

    reducers: {
        setRoomState: (state, action) => {
            state.roomState = action.payload
        },

        updateRoom: (state, action) => {
            state.roomState = action.payload.state ? action.payload.state : state.roomState;
            state.roomId = action.payload.roomId ? action.payload.roomId : state.roomId;
            state.players = action.payload.players ? action.payload.players : state.players;
        },

        updateMessage: (state, action) => {
            state.messages = [...state.messages, action.payload.message];
        }
    }

    
})

export const { setRoomState, updateRoom, updateMessage } = roomSlice.actions

export default roomSlice.reducer