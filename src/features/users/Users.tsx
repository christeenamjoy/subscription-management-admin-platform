import useUsersQuery from "./hooks/useUsersQuery"

const Users = () => {

    const {data, isLoading} = useUsersQuery()

    if(isLoading) return <div>...Loading</div>
  return (
    <div>{data?.map((user)=>
        <div>
            <div>{user.name} <span>{user.role}</span></div>
        </div>)}</div>
  )
}

export default Users