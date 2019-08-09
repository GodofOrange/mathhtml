import Vue from 'vue'
import Router from 'vue-router'
import ProblemSet from '@/components/allviews/ProblemSet'
import explore from '@/components/allviews/explore'
import contest from '@/components/contest/contest.vue'
import read from '@/components/read/read.vue'
import homework from '@/components/homework/homework.vue'
import community from '@/components/community/community.vue'
import modeling from '@/components/modeling/modeling.vue'
import problem from '@/components/problems/problem.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProblemSet',
      component: ProblemSet
    },
    {
      path: '/explore',
      name: 'explore',
      component: explore
    },
    {
      path: '/contest',
      name: 'contest',
      component: contest
    },
    {
      path: '/read',
      name: 'read',
      component: read
    },
    {
      path: '/homework',
      name: 'homework',
      component: homework
    },
    {
      path: '/community',
      name: 'community',
      component: community
    },
    {
      path: '/modeling',
      name: 'modeling',
      component: modeling
    },
    {
      path: '/problem',
      name: 'problem',
      component: problem
    }
  ]
})
