import Vue from 'vue'
import Router from 'vue-router'
import Button from '../components/Button'
import ButtonDetail from '../components/ButtonDetail'
import Link from '../components/Link'
import Layout from '../components/Layout'
import Container from '../components/Container'
import ContainerExam from '../components/ContainerExam'
import Radio from '../components/Radio'
import CheckBox from '../components/CheckBox'
import Input from '../components/Input'
import Select from '../components/Select'
import Switch from '../components/Switch'
import DatePickers from '../components/DatePickers'
import Upload from '../components/Uploads'
import Form from '../components/Forms'
import Message from '../components/Messages'
import Tables from "../components/Tables";
import SpringBoot from "../components/SpringBoot";

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/button', component: Button},
    {path: '/buttondetail', component: ButtonDetail},
    {path: '/link', component: Link},
    {path: '/layout', component: Layout},
    {path: '/container', component: Container},
    {path: '/containerexam', component: ContainerExam},
    {path: '/radio', component: Radio},
    {path: '/checkbox', component: CheckBox},
    {path: '/input', component: Input},
    {path: '/select', component: Select},
    {path: '/switch', component: Switch},
    {path: '/datepicker', component: DatePickers},
    {path: '/upload', component: Upload},
    {path: '/form', component: Form},
    {path: '/message', component: Message},
    {path: '/table', component: Tables},
    {path: '/springboot', component: SpringBoot}
  ]
})
