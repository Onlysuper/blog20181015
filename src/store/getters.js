const getters = {
  roles: state => state.user.roles,
  permission_routers: state => state.authority.routers,
  addRouters: state => state.authority.addRouters
}
export default getters
