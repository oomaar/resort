import { Loading, RoomFilter, RoomList } from ".";
import { withRoomConsumer } from "../context";

const RoomsContainer = ({ context }) => {
    const {
        loading,
        sortedRooms,
        rooms
    } = context;

    if (loading) {
        return <Loading />;
    };

    return (
        <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    );
};

export default withRoomConsumer(RoomsContainer);
