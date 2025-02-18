// export const mainUrl = import.meta.env.VITE_BASE_URL
export const mainUrl = 'https://freefakeapi.io'
export const usersUrl = 'https://reqres.in/api'

export const endpoints = {
  registration: mainUrl + '/authapi/login',
  users: (page: number, per_page: number) =>
    usersUrl +
    `/users?page=${page}` +
    (per_page ? `&per_page=${per_page}` : ''),
  user: (id: number) => usersUrl + `/users/${id}`,
}
