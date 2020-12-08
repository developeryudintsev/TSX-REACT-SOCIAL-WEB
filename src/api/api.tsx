import   axios from "axios";

const instance=axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'f1be7d7c-7b48-4fec-a5e8-15badd889c42'
    }
})
export const usersAPI= {
    getUsers(currentPage:number, pageSize:number) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId:number){
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`);
    },
    unfollow(userId:number){
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`);
    },
}
