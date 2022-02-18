export const setUserToken = (token: string) => {
    if (token) sessionStorage.setItem('userTokenAuthorize', JSON.stringify(token))
}

export const getUserToken = () => {
   return sessionStorage.getItem('userTokenAuthorize')
}

export const removeUserToken = () => {
   return sessionStorage.removeItem('userTokenAuthorize')
}
