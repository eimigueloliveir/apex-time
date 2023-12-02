import { describe, expect, it } from 'vitest'
import { mount} from '@vue/test-utils'
import Login from '../pages/index.vue'
import SignIn from  '../pages/sign-in.vue'


describe('Login', () => {
    it('Pode Acessar Login', () => {
        const wrapper = mount(Login)
        expect(wrapper.html()).toMatchSnapshot()
    })
    it('Pode Acessar Cadastro', () => {
        const wrapper = mount(SignIn)
        expect(wrapper.html()).toMatchSnapshot()
    })
    it('Pode Cadastrar', () => {
        const wrapper = mount(SignIn)
        wrapper.find('#username').setValue('teste')
        wrapper.find('#email').setValue('teste@gmail.com')
        wrapper.find('#password').setValue('123456')
    })

})

