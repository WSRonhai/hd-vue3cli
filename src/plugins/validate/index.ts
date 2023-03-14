import * as veeValidate from 'vee-validate'
import  rules from '@vee-validate/rules'
import { loadLocaleFromURL,localize } from '@vee-validate/i18n'
// import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
//cdn引入中文包
loadLocaleFromURL('https://unpkg.com/@vee-validate/i18n@4.1.0/dist/locale/zh_CN.json');
import yup from './yup'

veeValidate.configure({
    generateMessage: localize('zh_CN')
})
Object.keys(rules).forEach((key) => {
    veeValidate.defineRule(key, rules[key])
})
const modules = { yup, ...veeValidate }
export default modules