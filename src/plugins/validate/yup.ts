import * as yup from 'yup'
yup.setLocale({
    mixed:{
        required:'${label}必须输入',
    },
    string:{
        email:'邮箱格式错误',
        max:'${label}长度不能小于${max}',
        min:"${label}长度不能小于${min}"
    },
    number:{
        max:'${label}长度不能小于${max}',
        min:"${label}长度不能小于${min}"
    }
})
export default yup