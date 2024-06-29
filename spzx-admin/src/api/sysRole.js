import request from '@/utils/request'

const baseURL = '/admin/system/sysRole'

// 分页查询角色数据
export const GetSysRoleListByPage = (current , limit , queryDto) => {
    return request({
        url: `${baseURL}/findByPage/${current}/${limit}`,
        method: 'post',
        data: queryDto
    })
}

// 重置查询角色的搜索输入框
export const ResetSearch = (current , limit) => {
    return request({
        url: `${baseURL}/resetInput/${current}/${limit}`,
        method: 'get'
    })
}

// 添加角色请求方法
export const SaveSysRole = (sysRole) => {
    return request({
        url: `${baseURL}/saveSysRole`,
        method: 'post',
        data: sysRole
    })
}

// 保存修改
export const UpdateSysRole = (sysRole) => {
    return request({
        url: `${baseURL}/updateSysRole`,
        method: 'put',
        data: sysRole
    })
}

// 删除角色
export const DeleteSysRoleById = (roleId) => {
    return request({
        url: `${baseURL}/deleteById/` + roleId,
        method: 'delete'
    })
}

// 查询所有角色
export const GetAllRoleList = (userId) => {
    return request({
        url: `${baseURL}/findAllRoles/${userId}`,
        method: 'get'
    })
}