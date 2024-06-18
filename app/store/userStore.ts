import { create } from 'zustand';
import { useUsers, useUser } from '../hooks/queries';

const { data: users } = useUsers();
const userId = users ? users[1]._id : '';
const { data: user } = useUser({ id: userId });

const userStore = create(() => ({
    ...user
}));

export default userStore;