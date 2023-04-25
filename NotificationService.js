import http from "@/api/fetch";
import { useUserStore } from "~~/store/user";

class Notification {
    #api;
    constructor() {
        this.#api = new NotificationsAPI();
    }

    markAsRead(id) {
        return this.#api.markAsRead(id);
    }

    deleteNotifier(id) {
        return this.#api.deleteNotifier(id);
    }
}

class NotificationsAPI {
    async markAsRead(id) {
        const res = await http(`notification/${id}/ready`, { method: "PUT" });
        useUserStore().updateNotification(res);
    }

    async deleteNotifier(id) {
        await http(`notification/${id}/delete`, { method: "DELETE" });
        useUserStore().deleteNotifier(id);
    }
}

export default new Notification('');
