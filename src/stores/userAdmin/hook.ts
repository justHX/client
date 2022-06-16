import {useCallback} from "react";
import {useStore} from "effector-react";

import {API} from "API";

import {$userAdmin, setItem, setList} from "./store";

import type {UserAdmin, UserAdminAll} from "./types";

export function useUserAdmin() {
    const userAdmin = useStore($userAdmin);

    const fetchUserAdminList = useCallback(async () => {
        try {
            const result = await API.get<UserAdmin[]>("/Admin/User/List");

            setList(result?.data || []);
        } catch (e) {
            console.error(e);
        }
    }, []);

    const fetchUserAdminById = useCallback(async (id: string) => {
        try {
            const result = await API.get<UserAdminAll>(`/Admin/User/Info/${id}`);

            setItem(result?.data);
        } catch (e) {
            console.error(e);
        }
    }, []);

    const changeUserAdmin = useCallback(
        async (userAdminUpdate: UserAdminAll) => {
            try {
                await API.post("/Admin/User/Update", userAdminUpdate);
                await fetchUserAdminList();
            } catch (e) {
                console.error(e);
            }
        },
        [fetchUserAdminList]
    );

    const deleteUserAdminById = useCallback(
        async (id: string) => {
            try {
                await API.delete(`/Admin/User/Delete/${id}`);
                await fetchUserAdminList();
            } catch (e) {
                console.error(e);
            }
        },
        [fetchUserAdminList]
    );

    return {
        userAdmin,
        changeUserAdmin,
        fetchUserAdminById,
        fetchUserAdminList,
        deleteUserAdminById
    };
}
