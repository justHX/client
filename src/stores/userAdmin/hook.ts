import {useCallback} from "react";
import {useStore} from "effector-react";

import {API} from "API";

import {$userAdmin, setList, setUserAdminAll} from "./store";

import type {UserAdmin, UserAdminAll} from "./types";

export function useUserAdmin() {
    const userAdmin = useStore($userAdmin);

    const fetchUserAdminList = useCallback(async () => {
        try {
            const result = await API.get<UserAdmin[]>("/admin/user/list");

            setList(result?.data || []);
        } catch (e) {
            console.error(e);
        }
    }, []);

    const fetchUserAdminById = useCallback(async (id: string) => {
        try {
            const result = await API.get<UserAdminAll>(`/admin/user/info?id=${id}`);

            setUserAdminAll(result?.data || null)
        } catch (e) {
            console.error(e);
        }
    }, []);

    const changeUserAdmin = useCallback(
        async (userAdminUpdate: UserAdminAll) => {
            try {
                await API.post("/admin/user/update", userAdminUpdate);
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
                await API.post(`/admin/user/delete?id=${id}`);
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
