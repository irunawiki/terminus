import { useSelector } from 'react-redux';

export default function usePlayer() {
    const player = useSelector((state) => state.player);
    if (player) {
        return player;
    }
    return null;

}