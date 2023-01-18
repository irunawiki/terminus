import { configureStore } from '@reduxjs/toolkit'
import playerCounter from './reducers/player'
import roomCounter from './reducers/room'

export default configureStore({
    reducer: {
        player: playerCounter,
        room: roomCounter
    },
})