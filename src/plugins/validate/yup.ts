import * as yup from 'yup'
yup.setLocale({
    mixed:{
        required:'${label}必须输入'
    },
    string:{
        email:'邮箱格式错误'
    },
    number:{
        max:'输入不能小于${max}',
        min:"输入不能小于${min}"
    }
})
export default yup