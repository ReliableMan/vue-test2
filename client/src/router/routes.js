import VueRouter from 'vue-router';

import EditorProtocolPage from '@/pages/EditorProtocol';
import EditorTemplatePage from '@/pages/EditorTemplate';


export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/protocol',
      component: EditorProtocolPage
    },
    {
      path: '/template',
      component: EditorTemplatePage
    }
  ]
})

