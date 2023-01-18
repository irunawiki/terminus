import { useSelector } from 'react-redux';

export default function useRoom() {
    const room = useSelector((state) => state.room);
    return room;

}