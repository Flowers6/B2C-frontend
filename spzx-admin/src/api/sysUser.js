import request from '@/utils/request'

const baseURL = '/admin/system/sysUser'

// 用户列表接口
export const GetSysUserListByPage = (current , limit , queryDto) => {
    return request({
        url: `${baseURL}/findByPage/${current}/${limit}`,
        method: 'get',
        params: queryDto
    })
}

// 用户添加
export const SaveSysUser = (sysUser) => {
    return request({
        url: `${baseURL}/saveSysUser`,
        method: 'post',
        data: sysUser
    })
}

// 用户修改
export const UpdateSysUser = (sysUser) => {
    return request({
        url: `${baseURL}/updateSysUser`,
        method: 'put',
        data: sysUser
    })
}

// 用户删除
export const DeleteSysUser = (userId) => {
    return request({
        url: `${baseURL}/deleteById/${userId}`,
        method: 'delete'
    })
}

// 给用户分配角色请求
export const DoAssignRoleToUser = (assignRoleVo) => {
    return request({
        url: `${baseURL}/doAssign`,
        method: 'post',
        data: assignRoleVo
    })
}