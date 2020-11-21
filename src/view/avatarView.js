export const profileImage = (data)=> {
    return `
    <div class="user-profile-mini">
   ${avatarImage(data)}
    <span class="user-p-name">
        <strong>${data.login}</strong>
        </span>

    </span>
    </div>
    
    `
}

export const avatarImage = ({avatar_url,login}) => {
    return `
    <span class="user-p-image">
        <img class="rounded-1 avatar-user"  src=${avatar_url}height="32" width="32" alt=${login}>
    </span>
    `
}