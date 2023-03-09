import http from '@/plugins/axios'
export interface user {
    name: string
    age: number
    avatar: string
}
export function info() {
    return http.request<user>({
        url: 'info',
    })
}
