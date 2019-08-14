import Vue from 'vue'
import Router from 'vue-router'
import ProblemSet from '@/components/extract/ProblemSet'
import explore from '@/components/allviews/explore'
import contest from '@/components/extract/contest.vue'
import read from '@/components/read/read.vue'
import homework from '@/components/homework/homework.vue'
import modeling from '@/components/extract/math_model/modeling.vue'
import problem from '@/components/extract/problems/problem.vue'
import problemmodel from '@/components/extract/problem_classify/problem-model.vue'
import askandanswer from '@/components/interact/ask_and_answer.vue'
import communityRank from '@/components/interact/community_rank.vue'
import BigMath from '@/components/interact/BigMath.vue'
import exampleProblem from '@/components/extract/example_problem.vue'
import MyBigMath from '@/components/together/MyBigMath.vue'
import BigClass from '@/components/together/BigClass.vue'
import modelingInfo from '@/components/extract/math_model/modeling_info.vue'
import modelingAdvance from '@/components/extract/math_model/modeling_advance.vue'
import modelingHigh from '@/components/extract/math_model/modeling_high.vue'
import homeworkPlay from '@/components/interact/BigMathWorld/homework_play.vue'
import articleUP from '@/components/interact/BigMathWorld/article.vue'
import ProblemUpload from '@/components/interact/BigMathWorld/ProblemUpload.vue'
import theOneHomework from '@/components/interact/BigMathWorld/homework/theOneHomework.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/problem_set',
      name: 'ProblemSet',
      component: ProblemSet
    },
    {
      path: '/',
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
      path: '/modeling',
      name: 'modeling',
      component: modeling
    },
    {
      path: '/problem',
      name: 'problem',
      component: problem
    },
    {
      path: '/problem-model',
      name: 'problem-model',
      component: problemmodel
    },
    {
      path: '/community/ask_and_answer',
      name: 'ask_and_answer',
      component: askandanswer
    },
    {
      path: '/community/community_rank',
      name: 'community_rank',
      component: communityRank
    },
    {
      path: '/community/BigMath',
      name: 'BigMath',
      component: BigMath,
      children: [{path: 'homework_play', component: homeworkPlay},
        {path: 'article', component: articleUP},
        {path: 'problem_upload', component: ProblemUpload},
        {path: 'theOneHomeWork', component: theOneHomework}]
    },
    {
      path: '/problems/example_problem',
      name: 'example_problem',
      component: exampleProblem
    },
    {
      path: '/community/BigMathWorld/MyBigMath',
      name: 'MyBigMath',
      component: MyBigMath
    },
    {
      path: '/community/community/BigClass',
      name: 'BigClass',
      component: BigClass
    },
    {
      path: '/extract/modeling_info',
      name: 'modeling_info',
      component: modelingInfo
    },
    {
      path: '/extract/modeling_advance',
      name: 'modeling_advance',
      component: modelingAdvance
    },
    {
      path: '/extract/modeling_high',
      name: 'modeling_high',
      component: modelingHigh
    }
  ]
})
