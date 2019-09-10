import Meta from '@/router/meta'
import { MENU_BUSINESS } from '@/dictionary/menu-symbol'

export default {
    name: 'synchronous',
    path: 'synchronous/module/:moduleId/set/:setId',
    component: () => import('./index.vue'),
    meta: new Meta({
        owner: MENU_BUSINESS,
        menu: {
            i18n: '同步模板'
        }
    })
}
