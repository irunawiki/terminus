import { useSelector } from 'react-redux';
import usePlayer from './usePlayer';

export default function useEnemy() {
    const playersRoom = useSelector((state) => state.room.players);
    const player = usePlayer();
    if (!player) {
        return null;
    }

    if (playersRoom.length < 2) {
        return null;
    }

    for(const roomPlayer of playersRoom) {
        if (player.playerId !== roomPlayer.playerId) {
            return roomPlayer;
        }
    }


}